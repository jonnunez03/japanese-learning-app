ALTER TABLE words
ADD COLUMN study_level TEXT
CHECK (
    study_level IS NULL
    OR study_level IN (
        'FOUNDATION',
        'N5',
        'N4',
        'N3',
        'N2',
        'N1'
    )
);

ALTER TABLE words
ADD COLUMN curriculum_order INTEGER
CHECK (
    curriculum_order IS NULL
    OR curriculum_order > 0
);
