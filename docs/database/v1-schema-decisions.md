# Version 1 Schema Decisions

## Database

PostgreSQL will be used as the primary database.

## Vocabulary Data

Version 1 will store a simplified vocabulary record containing:

- Preferred kanji spelling
- Kana reading
- Romaji
- Primary English meaning
- Word type
- Common-word indicator
- JLPT level when available
- Source name
- Source ID

More complex dictionary relationships may be added later.

## User Progress

User learning progress will be stored separately from shared Japanese language data.

Examples:

- User vocabulary progress
- User kana progress
- User kanji progress
- User grammar progress
- User word-form progress

## Conjugation

The database will store the grammatical information needed to identify how a word behaves.

The application will generate conjugated forms using application logic instead of storing every possible conjugation in the database.

## Reading Assistance

The application will support:

- Kana First
- Adaptive
- Full Japanese

Romaji and meaning visibility will be stored as user preferences.

## Sentences

Sentences will be connected to:

- Vocabulary words
- Grammar points

This will allow the application to find sentences that match what a learner already knows.

## Version 1 Goal

The first schema should support the learning system without trying to become a complete Japanese dictionary database.
