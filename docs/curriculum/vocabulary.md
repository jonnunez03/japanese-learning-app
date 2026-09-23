## Vocabulary Curriculum and Word Selection

Vocabulary should be selected intentionally rather than imported directly into lessons simply because it exists in a dictionary.

The application may store a very large lexical database, but the active curriculum should expose only words that are useful, appropriately difficult, and sufficiently verified for learners.

### Vocabulary Targets by Level

| Level      | Cumulative Vocabulary Target |
| ---------- | ---------------------------: |
| Foundation |                          200 |
| N5         |                          800 |
| N4         |                        1,500 |
| N3         |                        3,000 |
| N2         |                        6,000 |
| N1         |                       10,000 |

These are internal curriculum targets rather than official JLPT vocabulary counts.

The database may contain many more words than these targets.

### Vocabulary Selection Signals

Curriculum vocabulary should be selected using multiple signals rather than a single source.

Useful signals include:

- JMdict priority information
- wordfreq frequency estimates
- Everyday usefulness
- Topic usefulness
- Curriculum level
- Part of speech
- Register
- Kanji difficulty
- Grammar prerequisites
- Whether the word is normally written in kana or kanji
- Whether a simpler or more common synonym should be learned first
- Manual curriculum review

No single signal should automatically determine difficulty.

### Vocabulary Selection Principle

The curriculum should prioritize words that allow the learner to understand and produce useful Japanese.

For example, a highly useful everyday verb should normally be introduced before an obscure dictionary synonym even if both are valid Japanese.

Vocabulary should support real communication goals such as:

- Introducing oneself
- Asking questions
- Eating and drinking
- Shopping
- Travel
- Time and schedules
- Work and school
- Describing people and objects
- Expressing feelings
- Asking for help
- Understanding common conversations

### Vocabulary Categories

Vocabulary should be tagged with one or more curriculum topics.

Examples include:

- Food & Drink
- Travel & Transportation
- People & Family
- Daily Life
- Work
- School
- Places
- Time & Dates
- Numbers & Money
- Health
- Technology
- Emotions
- Common Verbs
- Adjectives

A word may belong to several categories.

For example:

`飲む`

may belong to:

- Food & Drink
- Daily Actions
- Common Verbs

### Vocabulary Record Structure

A learner-facing vocabulary record may eventually include:

- Internal ID
- Source ID
- Preferred kanji spelling
- Kana reading
- Romaji
- Primary English meaning
- Additional meanings when useful
- Part of speech
- Curriculum level
- Topic tags
- Frequency score
- Commonness / priority information
- Register
- Kanji relationships
- Grammar relevance
- Example sentences
- Source information
- Verification status

The application may preserve richer source data internally while showing learners a simplified version.

### Primary Meaning

The learner interface should normally present one clear primary meaning first.

For example:

`飲む`

Primary learner meaning:

`to drink`

Additional meanings or usage notes may be available when they are useful, but beginners should not be overwhelmed with every dictionary sense at once.

As difficulty increases, the learner may be exposed to additional meanings and usage distinctions.

### Multiple Written Forms

A JMdict entry may contain multiple valid written forms.

The application should choose a preferred learner-facing form based on:

- Modern usage
- Frequency
- Curriculum level
- Whether the form is commonly written in kana
- Kanji difficulty
- Register

Alternative forms may remain available as secondary information.

### Multiple Readings

When a written form has multiple readings, the application must not assume that every reading is interchangeable.

Reading restrictions from source data should be preserved during import.

Learner-facing vocabulary should connect the correct reading to the correct word sense and written form.

### Parts of Speech

Vocabulary should retain useful part-of-speech information.

Examples include:

- Noun
- Godan verb
- Ichidan verb
- Irregular verb
- い-adjective
- な-adjective
- Adverb
- Pronoun
- Conjunction
- Expression

This information will support:

- Word Forms practice
- Sentence Builder
- Grammar lessons
- Exercise generation

### Verb Metadata

Verbs should eventually include or derive information needed for conjugation.

The application should distinguish:

- Godan verbs
- Ichidan verbs
- Irregular verbs

Conjugated forms should generally be generated through application logic rather than stored as separate vocabulary entries.

### Adjective Metadata

Adjectives should distinguish:

- い-adjectives
- な-adjectives

This allows the application to generate appropriate forms and exercises.

### Vocabulary Lesson Size

The recommended default is:

- 10 new vocabulary words per lesson

Learners may choose:

- 5
- 10
- 15
- 20

Twenty new vocabulary words should generally be the maximum introduced at once.

Review vocabulary does not count toward this new-word limit.

### Vocabulary Progress

Vocabulary progress should be tracked separately for each learner.

Possible statuses include:

- `new`
- `learning`
- `struggling`
- `known`
- `mastered`

Useful performance data may include:

- Times seen
- Times correct
- Times incorrect
- Recent accuracy
- Overall accuracy
- Current streak
- Last practiced
- Next review
- Listening accuracy
- Reading accuracy
- Meaning recall accuracy

A learner may therefore know what a word means while still struggling to recognize it when spoken.

### Vocabulary Practice Modes

Vocabulary may eventually be practiced through:

- Japanese → English meaning
- English → Japanese recall
- Kana reading
- Kanji recognition
- Listening recognition
- Sentence context
- Fill-in-the-blank
- Word-form practice
- Speaking / pronunciation
- Matching exercises

Different practice modes may contribute separately to vocabulary mastery.

### Vocabulary and Known-Word Logic

The application should maintain a set of words the learner knows or is currently learning.

This known-word set can be used to select:

- Example sentences
- Conversations
- Grammar exercises
- Sentence Builder activities
- Word Forms practice

Whenever possible, new grammar should be demonstrated using vocabulary the learner already understands.

This reduces unnecessary cognitive load.

### Unknown Vocabulary in Lessons

Lessons may intentionally introduce new vocabulary, but unfamiliar words should be limited.

For beginner content, most example sentences and conversations should use primarily known vocabulary.

A small amount of unfamiliar vocabulary may be introduced when it is directly relevant to the lesson.

### Imported Vocabulary vs. Curriculum Vocabulary

Imported dictionary data and active curriculum data should remain conceptually separate.

A word may exist in the database without being assigned to a curriculum level.

Conceptually:

Imported vocabulary
↓
Frequency and metadata analysis
↓
Curriculum candidate
↓
Review
↓
Assigned difficulty and topics
↓
Verified curriculum vocabulary

This allows the application to use large open datasets without turning the curriculum into an unfiltered dictionary.
