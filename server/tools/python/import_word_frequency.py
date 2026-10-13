import os
from math import log10

import psycopg
from wordfreq import get_frequency_dict


BATCH_SIZE = 1000

frequencies = get_frequency_dict("ja")

connection = psycopg.connect(
    host=os.environ["DB_HOST"],
    port=os.environ["DB_PORT"],
    dbname=os.environ["DB_NAME"],
    user=os.environ["DB_USER"],
    password=os.environ["DB_PASSWORD"],
)

with connection.cursor() as cursor:
    cursor.execute("TRUNCATE TABLE word_frequency;")

connection.commit()

last_surface_form = ""
total_checked = 0
total_imported = 0

while True:
    with connection.cursor() as cursor:
        cursor.execute(
            """
            SELECT surface_form
            FROM (
                SELECT DISTINCT
                    COALESCE(written_form, reading) AS surface_form
                FROM jmdict_candidates
                WHERE COALESCE(written_form, reading)
                    ~ '^[ぁ-んァ-ン一-龯々ー]+$'
            ) AS forms
            WHERE surface_form > %s
            ORDER BY surface_form
            LIMIT %s;
            """,
            (last_surface_form, BATCH_SIZE),
        )

        rows = cursor.fetchall()

    if not rows:
        break

    frequency_rows = []

    for row in rows:
        surface_form = row[0]
        frequency = frequencies.get(surface_form)

        if frequency is not None:
            zipf = log10(frequency) + 9

            frequency_rows.append(
                (surface_form, zipf)
            )

    if frequency_rows:
        with connection.cursor() as cursor:
            cursor.executemany(
                """
                INSERT INTO word_frequency (
                    surface_form,
                    zipf_frequency
                )
                VALUES (%s, %s)
                ON CONFLICT (surface_form)
                DO UPDATE SET
                    zipf_frequency = EXCLUDED.zipf_frequency,
                    source = 'wordfreq',
                    imported_at = CURRENT_TIMESTAMP;
                """,
                frequency_rows,
            )

        connection.commit()

    total_checked += len(rows)
    total_imported += len(frequency_rows)
    last_surface_form = rows[-1][0]

    print(
        f"Checked {total_checked} JMdict forms, "
        f"imported {total_imported} exact wordfreq matches "
        f"(last: {last_surface_form})"
    )

print(
    f"Finished. Checked {total_checked} JMdict forms "
    f"and imported {total_imported} exact matches."
)

connection.close()