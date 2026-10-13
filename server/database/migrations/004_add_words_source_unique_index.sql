CREATE UNIQUE INDEX uq_words_source_source_id
    ON words(source, source_id)
    WHERE source_id IS NOT NULL;
    