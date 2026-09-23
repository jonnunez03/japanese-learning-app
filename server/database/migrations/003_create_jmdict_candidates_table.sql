CREATE TABLE jmdict_candidates (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    source_entry_sequence TEXT NOT NULL,
    written_form TEXT,
    reading TEXT NOT NULL,
    priorities JSONB NOT NULL DEFAULT '[]'::jsonb,
    senses JSONB NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_jmdict_candidates_entry
        FOREIGN KEY (source_entry_sequence)
        REFERENCES jmdict_entries(entry_sequence)
        ON DELETE CASCADE,

    CONSTRAINT uq_jmdict_candidates_source_form_reading
        UNIQUE NULLS NOT DISTINCT (
            source_entry_sequence,
            written_form,
            reading
        )
);

CREATE INDEX idx_jmdict_candidates_source_entry
    ON jmdict_candidates(source_entry_sequence);

CREATE INDEX idx_jmdict_candidates_reading
    ON jmdict_candidates(reading);
    