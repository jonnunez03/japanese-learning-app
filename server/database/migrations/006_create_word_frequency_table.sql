CREATE TABLE word_frequency (
    surface_form TEXT PRIMARY KEY,
    zipf_frequency REAL NOT NULL,
    source TEXT NOT NULL DEFAULT 'wordfreq',
    imported_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
