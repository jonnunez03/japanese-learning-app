## Kanji Curriculum and Adaptive Reading

Kanji should be taught progressively and primarily through useful vocabulary.

The application should avoid presenting kanji only as isolated symbols disconnected from words the learner actually uses.

A learner may first encounter a kanji through a familiar word and then study the character more deeply.

For example:

`飲む`

may introduce:

`飲`

with:

- Meaning
- Reading
- Stroke count
- Stroke order
- Related vocabulary
- Learner progress

### Kanji Targets by Level

| Level      | Cumulative Kanji Target |
| ---------- | ----------------------: |
| Foundation |                      25 |
| N5         |                     100 |
| N4         |                     300 |
| N3         |                     650 |
| N2         |                   1,000 |
| N1         |                  ~2,000 |

These are internal curriculum targets rather than official JLPT kanji lists.

Kanji difficulty should be assigned using multiple signals, including:

- Frequency
- Vocabulary usefulness
- Japanese school grade
- Learner prerequisites
- Curriculum level
- Manual review
- Whether the kanji appears in useful everyday vocabulary

### Kanji Lesson Size

The recommended default is:

- 2 new kanji per lesson

Learners may choose approximately:

- 1
- 2
- 3
- 4
- 5

New kanji should preferably be introduced alongside vocabulary the learner is currently studying.

### Kanji Record Structure

A kanji record may eventually include:

- Character
- Primary meanings
- On-readings
- Kun-readings
- Stroke count
- Frequency
- School grade
- Curriculum level
- Radical
- Related vocabulary
- Stroke-order asset
- Source information
- Verification status

Not every reading should be forced on a beginner immediately.

The curriculum should emphasize readings that appear in useful vocabulary the learner actually encounters.

### Vocabulary-First Kanji Learning

The learner should often meet kanji through words before being expected to memorize every reading.

For example:

`食べる`

may teach:

`食`

Later vocabulary may reinforce other readings and uses.

This allows the learner to build kanji knowledge through repeated real-world exposure.

### Kanji Progress Tracking

Kanji progress should be tracked separately for each learner.

Possible statuses include:

- `new`
- `learning`
- `struggling`
- `known`
- `mastered`

Possible measurements include:

- Recognition accuracy
- Reading accuracy
- Meaning accuracy
- Vocabulary-context accuracy
- Stroke-order practice
- Times seen
- Times correct
- Times incorrect
- Last practiced
- Next review

A learner may recognize a kanji visually while still struggling with its readings.

The application should therefore avoid treating kanji mastery as a single yes/no value.

### Reading Modes

The application should support three primary Japanese reading modes:

#### Kana First

Kana is presented as the primary readable form.

Kanji may appear as secondary information.

Example:

`のむ`

`飲む`

This mode is intended for learners who are still developing kanji recognition.

#### Full Japanese

The normal kanji spelling is presented first.

Kana reading support may appear underneath or on request.

Example:

`飲む`

`のむ`

This mode is intended for learners who are comfortable reading the kanji involved.

#### Adaptive

Adaptive mode changes reading support according to the learner's individual kanji progress.

The goal is to show kanji the learner already recognizes normally while providing additional reading support for unfamiliar characters.

For example:

If the learner has mastered `食` but has not learned `飲`, the application may display familiar words with less assistance while continuing to provide kana support for words containing `飲`.

### Adaptive Reading Logic

Adaptive reading should eventually consider:

- Kanji progress
- Vocabulary progress
- Reading accuracy
- Recent mistakes
- Curriculum level
- Whether a kanji is newly introduced
- Whether a word contains multiple known and unknown kanji

Adaptive mode should not simply hide all kana once a kanji has been seen once.

Support should decrease gradually as the learner demonstrates reliable recognition.

### Word-to-Kanji Relationships

Vocabulary and kanji should have explicit database relationships.

A word may contain:

- Zero kanji
- One kanji
- Multiple kanji

The application should be able to determine which kanji occur in each word.

Conceptually:

Word
↓
WORD_KANJI
↓
Kanji

This relationship enables:

- Adaptive reading
- Kanji prerequisite checks
- Vocabulary-based kanji lessons
- Progress analysis
- Related-word recommendations

### Kana-Only Vocabulary

Some Japanese vocabulary is normally written in kana.

The application should not force kanji onto words that are normally or commonly written without it.

The learner-facing display should reflect natural Japanese usage rather than assuming that every word requires kanji.

### Stroke Order

Stroke-order practice may use KanjiVG data.

Stroke-order features may eventually include:

- Animated stroke playback
- Step-by-step stroke display
- Tracing
- Writing practice
- Component highlighting

Stroke-order practice should be available without making handwriting mastery a mandatory prerequisite for reading progress.

### Kanji Review

Kanji marked as struggling should return more frequently.

Review should target the learner's specific weakness.

Examples:

Recognition problem:

- Show the kanji and ask for the meaning

Reading problem:

- Show the kanji in vocabulary and ask for the reading

Meaning problem:

- Show the kanji or word and ask for the meaning

Context problem:

- Use the kanji inside a known sentence

This allows review to become more targeted than generic flashcards.
