CREATE TABLE tatoeba_sentences (
    sentence_id BIGINT PRIMARY KEY,
    language TEXT NOT NULL,
    text TEXT NOT NULL,
    source TEXT NOT NULL DEFAULT 'Tatoeba',
    imported_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tatoeba_sentence_links (
    japanese_sentence_id BIGINT NOT NULL
        REFERENCES tatoeba_sentences(sentence_id)
        ON DELETE CASCADE,

    english_sentence_id BIGINT NOT NULL
        REFERENCES tatoeba_sentences(sentence_id)
        ON DELETE CASCADE,

    PRIMARY KEY (
        japanese_sentence_id,
        english_sentence_id
    )
);

CREATE INDEX idx_tatoeba_sentences_language
    ON tatoeba_sentences(language);

CREATE INDEX idx_tatoeba_sentence_links_english
    ON tatoeba_sentence_links(english_sentence_id);
