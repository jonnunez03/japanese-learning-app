import bz2
import csv
import os
import psycopg
from pathlib import Path


RAW_DIR = Path("data/raw/tatoeba")

JAPANESE_FILE = RAW_DIR / "jpn_sentences.tsv.bz2"
ENGLISH_FILE = RAW_DIR / "eng_sentences.tsv.bz2"
LINKS_FILE = RAW_DIR / "jpn-eng_links.tsv.bz2"

def get_linked_english_ids(
    path: Path,
) -> set[int]:
    english_ids = set()

    with bz2.open(
        path,
        mode="rt",
        encoding="utf-8",
    ) as file:
        reader = csv.reader(
            file,
            delimiter="\t",
        )

        for row in reader:
            _, english_id = row

            english_ids.add(
                int(english_id)
            )

    return english_ids

def import_sentences(
    connection,
    path: Path,
    batch_size: int = 1000,
    limit: int | None = None,
    allowed_ids: set[int] | None = None,
):
    batch = []
    total_imported = 0

    with bz2.open(path, mode="rt", encoding="utf-8") as file:
        reader = csv.reader(file, delimiter="\t")

        for row in reader:
            sentence_id, language, text = row

            sentence_id = int(sentence_id)

            if (
              allowed_ids is not None
              and sentence_id not in allowed_ids
            ):
                continue

            batch.append(
                (
                    sentence_id,
                    language,
                    text,
                )
            )

            if len(batch) >= batch_size:
                with connection.cursor() as cursor:
                    cursor.executemany(
                        """
                        INSERT INTO tatoeba_sentences (
                            sentence_id,
                            language,
                            text
                        )
                        VALUES (%s, %s, %s)
                        ON CONFLICT (sentence_id)
                        DO UPDATE SET
                            language = EXCLUDED.language,
                            text = EXCLUDED.text,
                            imported_at = CURRENT_TIMESTAMP;
                        """,
                        batch,
                    )

                connection.commit()

                total_imported += len(batch)
                batch = []

                print(
                    f"Imported {total_imported} sentences "
                    f"from {path.name}"
                )

            if (
                limit is not None
                and total_imported + len(batch) >= limit
            ):
                break

    if batch:
        with connection.cursor() as cursor:
            cursor.executemany(
                """
                INSERT INTO tatoeba_sentences (
                    sentence_id,
                    language,
                    text
                )
                VALUES (%s, %s, %s)
                ON CONFLICT (sentence_id)
                DO UPDATE SET
                    language = EXCLUDED.language,
                    text = EXCLUDED.text,
                    imported_at = CURRENT_TIMESTAMP;
                """,
                batch,
            )

        connection.commit()
        total_imported += len(batch)

    return total_imported

def insert_link_batch(
    connection,
    batch,
):
    japanese_ids = [
        japanese_id
        for japanese_id, _ in batch
    ]

    english_ids = [
        english_id
        for _, english_id in batch
    ]

    with connection.cursor() as cursor:
        cursor.execute(
            """
            INSERT INTO tatoeba_sentence_links (
                japanese_sentence_id,
                english_sentence_id
            )
            SELECT
                candidate.japanese_id,
                candidate.english_id
            FROM UNNEST(
                %s::bigint[],
                %s::bigint[]
            ) AS candidate(
                japanese_id,
                english_id
            )
            JOIN tatoeba_sentences AS japanese
                ON japanese.sentence_id =
                    candidate.japanese_id
            JOIN tatoeba_sentences AS english
                ON english.sentence_id =
                    candidate.english_id
            ON CONFLICT DO NOTHING;
            """,
            (
                japanese_ids,
                english_ids,
            ),
        )

        imported = cursor.rowcount

    connection.commit()

    return imported


def import_links(
    connection,
    path: Path,
    batch_size: int = 1000,
    limit: int | None = None,
):
    batch = []
    total_processed = 0
    total_imported = 0

    with bz2.open(
        path,
        mode="rt",
        encoding="utf-8",
    ) as file:
        reader = csv.reader(
            file,
            delimiter="\t",
        )

        for row in reader:
            japanese_id, english_id = map(
                int,
                row,
            )

            batch.append(
                (
                    japanese_id,
                    english_id,
                )
            )

            if len(batch) >= batch_size:
                imported = insert_link_batch(
                    connection,
                    batch,
                )

                total_processed += len(batch)
                total_imported += imported
                batch = []

            if (
                limit is not None
                and total_processed + len(batch) >= limit
            ):
                break

    if batch:
        imported = insert_link_batch(
            connection,
            batch,
        )

        total_processed += len(batch)
        total_imported += imported

    return total_imported

def main():
    linked_english_ids = get_linked_english_ids(
        LINKS_FILE
    )

    print(
        f"Found {len(linked_english_ids)} "
        "unique linked English sentences."
    )

    connection = psycopg.connect(
        host=os.environ["DB_HOST"],
        port=os.environ["DB_PORT"],
        dbname=os.environ["DB_NAME"],
        user=os.environ["DB_USER"],
        password=os.environ["DB_PASSWORD"],
    )

    japanese_count = import_sentences(
        connection,
        JAPANESE_FILE,
    )

    english_count = import_sentences(
        connection,
        ENGLISH_FILE,
        allowed_ids=linked_english_ids,
    )

    link_count = import_links(
        connection,
        LINKS_FILE,
    )

    print(
        f"Imported {japanese_count} "
        "Japanese sentences."
    )
    print(
        f"Imported {english_count} "
        "linked English sentences."
    )
    print(
        f"Imported {link_count} "
        "Japanese-English sentence links."
    )

    connection.close()


if __name__ == "__main__":
    main()