CREATE TABLE jmdict_entries (
    entry_sequence TEXT PRIMARY KEY,
    data JSONB NOT NULL,
    source TEXT NOT NULL DEFAULT 'JMdict_e',
    imported_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
