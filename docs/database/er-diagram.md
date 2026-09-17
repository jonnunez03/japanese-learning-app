# Database ER Diagram

This is the initial conceptual database structure for the Japanese learning app.
The schema may change as development continues.

```mermaid
erDiagram

    USERS ||--|| USER_SETTINGS : has
    USERS ||--o{ USER_WORD_PROGRESS : tracks
    USERS ||--o{ USER_KANA_PROGRESS : tracks
    USERS ||--o{ USER_GRAMMAR_PROGRESS : tracks

    WORDS ||--o| VERB_DETAILS : may_have
    WORDS ||--o{ USER_WORD_PROGRESS : tracked_by

    KANA ||--o{ USER_KANA_PROGRESS : tracked_by

    GRAMMAR_POINTS ||--o{ USER_GRAMMAR_PROGRESS : tracked_by

    SENTENCES ||--o{ SENTENCE_WORDS : contains
    WORDS ||--o{ SENTENCE_WORDS : appears_in

    SENTENCES ||--o{ SENTENCE_GRAMMAR : uses
    GRAMMAR_POINTS ||--o{ SENTENCE_GRAMMAR : appears_in

    USERS ||--o{ USER_KANJI_PROGRESS : tracks
    USERS ||--o{ USER_WORD_FORM_PROGRESS : tracks

    KANJI ||--o{ USER_KANJI_PROGRESS : tracked_by

    WORDS ||--o{ WORD_KANJI : contains
    KANJI ||--o{ WORD_KANJI : appears_in

    WORDS ||--o{ USER_WORD_FORM_PROGRESS : practiced_as

    USERS {
        int id PK
        string email
        string password_hash
        datetime created_at
    }

    USER_SETTINGS {
        int user_id PK FK
        string reading_mode
        boolean show_romaji
        string meaning_display
    }

    WORDS {
        int id PK
        string kanji
        string kana
        string romaji
        string english
        string word_type
        boolean is_common
        string jlpt_level
        string source
        string source_id
    }

    VERB_DETAILS {
        int word_id PK FK
        string verb_group
        string dictionary_ending
    }

    USER_WORD_PROGRESS {
        int user_id PK FK
        int word_id PK FK
        string status
        int times_seen
        int times_correct
        int times_wrong
        datetime last_reviewed
        datetime next_review
    }

    KANA {
        int id PK
        string character
        string romaji
        string kana_type
        string variant_type
    }

    USER_KANA_PROGRESS {
        int user_id PK FK
        int kana_id PK FK
        int times_seen
        int times_correct
        int recognition_score
        int listening_score
    }

    GRAMMAR_POINTS {
        int id PK
        string name
        string explanation
        string jlpt_level
    }

    USER_GRAMMAR_PROGRESS {
        int user_id PK FK
        int grammar_id PK FK
        string status
        int times_seen
        int times_correct
    }

    SENTENCES {
        int id PK
        string japanese
        string english
        string difficulty
    }

    SENTENCE_WORDS {
        int sentence_id PK FK
        int word_id PK FK
        int position
    }

    SENTENCE_GRAMMAR {
        int sentence_id PK FK
        int grammar_id PK FK
    }

    KANJI {
        int id PK
        string character
        string meaning
        int stroke_count
        string jlpt_level
        int frequency_rank
    }

    USER_KANJI_PROGRESS {
        int user_id PK FK
        int kanji_id PK FK
        string status
        int times_seen
        int times_correct
        int recognition_score
    }

    WORD_KANJI {
        int word_id PK FK
        int kanji_id PK FK
        int position
    }

    USER_WORD_FORM_PROGRESS {
        int user_id PK FK
        int word_id PK FK
        string form_key PK
        int times_seen
        int times_correct
        int times_wrong
        datetime last_practiced
        datetime next_review
    }
```
