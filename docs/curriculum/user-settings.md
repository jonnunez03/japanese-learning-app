## User Profile and Study Settings

Learner preferences and learner progress should be stored separately from shared curriculum content.

The application should allow each learner to customize how much content they study and how Japanese is displayed without changing the underlying curriculum.

### User Profile

A learner profile may eventually include:

- User ID
- Display name
- Account creation date
- Current curriculum level
- Current recommended lesson
- Preferred topics
- Study preferences
- Reading preferences
- Review preferences
- Progress summaries

Personal progress should belong to the learner and remain independent of updates to shared vocabulary, grammar, kanji, sentence, or lesson records.

### Lesson Size Preferences

Learners should be able to control how much new material appears in a typical lesson.

Recommended defaults:

| Setting              | Default | Available Options |
| -------------------- | ------: | ----------------- |
| New vocabulary       |      10 | 5, 10, 15, 20     |
| New kanji            |       2 | 1–5               |
| New grammar concepts |       1 | 1–2               |
| Conversations        |       1 | 0–2               |

These settings control presentation speed rather than changing curriculum requirements.

A learner choosing 5 vocabulary words per lesson and a learner choosing 20 vocabulary words per lesson may follow the same curriculum at different speeds.

### Reading Preferences

The application should support:

- Kana First
- Adaptive
- Full Japanese

The selected reading mode should be stored with the learner profile.

The learner should also be able to control:

- Romaji visibility
- Reading hints
- Meaning visibility when appropriate
- Furigana or reading assistance when implemented

Romaji should remain optional support rather than the permanent default for advanced learners.

### Audio Preferences

Future audio settings may include:

- Normal playback speed
- Slow playback speed
- Preferred Japanese voice when multiple voices are available
- Automatic pronunciation playback
- Manual playback only

High-quality pronunciation should be prioritized over low-quality robotic speech when practical.

Audio preferences should remain independent of vocabulary or curriculum progress.

### Review Preferences

Learners may eventually control review intensity.

Possible options include:

- Light
- Standard
- Intensive

Review intensity may influence:

- Number of review items presented
- How aggressively struggling content returns
- Whether additional optional reviews are suggested

The review algorithm should still protect learners from accidentally skipping important struggling prerequisites.

### Topic Preferences

Learners may be allowed to select topics they are especially interested in.

Examples include:

- Travel
- Food
- Work
- Anime and entertainment
- Technology
- School
- Daily conversation

Topic preferences may influence optional vocabulary, examples, and conversations.

They should not remove essential foundational Japanese from the curriculum.

### Prior Knowledge

A learner should eventually be able to indicate material they already know.

Possible examples include:

- Hiragana already known
- Katakana already known
- Known vocabulary
- Known kanji
- Prior Japanese study
- Approximate JLPT experience

The application may use placement checks to confirm this knowledge.

Manually marked knowledge should generally begin as `known` rather than `mastered` until later performance confirms it.

### Accessibility and Display Preferences

The application should eventually support useful accessibility and display settings such as:

- Text size
- Reduced animation
- High-contrast support
- Keyboard navigation
- Audio controls
- Reading assistance

Accessibility preferences should not affect curriculum progress.

### Settings Persistence

Study settings should persist between sessions.

A learner should not need to repeatedly configure:

- Lesson size
- Reading mode
- Romaji preference
- Review intensity
- Audio settings

These settings should eventually be stored in a dedicated user-settings record rather than hard-coded into frontend components.

Conceptually:

USER
↓
USER_SETTINGS

and separately:

USER
↓
USER_PROGRESS

This keeps preferences and learning performance separate.

### Defaults

New learners should receive sensible defaults without needing to configure everything before studying.

Recommended initial defaults include:

- 10 new vocabulary words
- 2 new kanji
- 1 new grammar concept
- 1 conversation
- Standard review intensity
- Kana First reading mode
- Romaji available but not permanently displayed

The learner may change these settings later.
