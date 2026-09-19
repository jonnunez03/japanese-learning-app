CREATE TABLE words (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    kanji TEXT,
    kana TEXT NOT NULL,
    romaji TEXT NOT NULL,
    english TEXT NOT NULL,
    word_type TEXT NOT NULL,
    is_common BOOLEAN NOT NULL DEFAULT FALSE,
    jlpt_level TEXT CHECK (
        jlpt_level IS NULL
        OR jlpt_level IN ('N5', 'N4', 'N3', 'N2', 'N1')
    ),
    source TEXT NOT NULL,
    source_id TEXT
);