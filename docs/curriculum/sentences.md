## Sentences, Examples, and Exercise Content

Sentences should be treated as structured learning content rather than simple strings of Japanese text.

Each sentence should be connected to the vocabulary, grammar, kanji, difficulty level, and learning objectives it reinforces.

### Sentence Sources

Sentences may come from several sources:

- Original sentences written specifically for this application
- Verified Tatoeba sentence pairs
- Curriculum conversations
- Carefully generated practice sentences
- Other properly licensed sources added in the future

Every sentence should preserve its source information.

### Sentence Verification

Imported or generated sentences should not automatically be considered instructional content.

Possible statuses include:

- `candidate`
- `draft`
- `verified`
- `human_reviewed`
- `rejected`

Before a sentence is marked `verified`, it should be checked for:

- Correct Japanese
- Natural usage
- Correct translation
- Correct particle use
- Appropriate register
- Appropriate vocabulary
- Appropriate grammar
- Appropriate difficulty
- Compatibility with the lesson objective

AI-generated sentences remain `draft` until verified.

### Sentence Record Structure

A sentence may eventually include:

- Internal ID
- Japanese text
- English translation
- Reading support
- Romaji when needed for optional support
- Difficulty level
- Topic
- Register
- Source
- Source identifier
- Verification status
- Vocabulary relationships
- Grammar relationships
- Kanji relationships
- Notes
- Audio reference when available

### Vocabulary Relationships

The application should know which vocabulary items appear in each sentence.

Conceptually:

Sentence
↓
SENTENCE_WORDS
↓
Vocabulary

This allows the application to answer questions such as:

- Does the learner already know most of this sentence?
- Which new word is being introduced?
- Which words should receive review after a mistake?
- Is this sentence appropriate for the learner's level?

### Grammar Relationships

The application should also know which grammar concepts appear in each sentence.

Conceptually:

Sentence
↓
SENTENCE_GRAMMAR
↓
Grammar Points

A sentence may contain several grammar concepts even when only one is the lesson target.

The target grammar should be identified separately from background grammar.

### Known-Content Preference

Beginner sentences should primarily use vocabulary and grammar the learner already knows.

As a general guideline, instructional examples should aim for approximately 80–90% familiar content whenever practical.

The unfamiliar portion should normally represent the concept currently being taught.

This allows the learner to focus on the new idea without decoding an entire unfamiliar sentence.

### Example Sentence Design

Good example sentences should:

- Demonstrate the target concept clearly
- Use natural Japanese
- Avoid unnecessary complexity
- Prefer useful everyday vocabulary
- Avoid obscure names or references unless relevant
- Match the intended register
- Avoid advanced grammar that has not been introduced
- Have a clear and natural English translation

Examples should not be artificially complicated merely to include more vocabulary.

### Generated Sentences

The application may eventually generate practice sentences dynamically.

Generated sentences should be constrained by verified language patterns rather than assembling random words.

A safe generation model may use:

Verified sentence structure

- Known vocabulary
- Approved grammatical substitutions
- Curriculum constraints

rather than:

Random noun

- Random particle
- Random verb

Generated content should be checked against rules for:

- Part of speech
- Verb transitivity
- Particle compatibility
- Adjective type
- Register
- Semantic plausibility
- Grammar prerequisites

### Sentence Templates

Verified templates may be used for controlled exercise generation.

For example:

`[Person] は [Object] を [Verb]。`

A template should define:

- Required word types
- Allowed particles
- Required verb properties
- Register
- Difficulty
- Grammar concepts
- Natural semantic restrictions when needed

Templates should be reviewed before use in production exercises.

### Exercise Types

Verified sentences may support exercises such as:

- Reading comprehension
- Listening comprehension
- Fill in the blank
- Particle selection
- Word ordering
- Sentence building
- Translation recognition
- Vocabulary-in-context
- Grammar identification
- Conjugation practice
- Error correction

### Wrong Answers

Multiple-choice distractors should be plausible enough to test understanding without deliberately teaching incorrect Japanese.

When possible, incorrect options should represent common learner mistakes.

For example, a particle exercise may contrast:

`に`

with:

`で`

when the distinction is relevant.

After answering incorrectly, the learner should receive an explanation of why the correct choice works.

### Translation Policy

English translations should prioritize accurate meaning over unnatural word-for-word equivalence.

When a literal translation is useful for teaching structure, it may be shown separately from the natural English translation.

For example:

Natural translation:
`I drink coffee.`

A structural explanation may separately show how Japanese organizes the sentence.

The application should avoid teaching learners that Japanese structures map directly onto English word order.

### Sentence Difficulty

Sentence difficulty should consider more than length.

Useful signals include:

- Vocabulary difficulty
- Grammar difficulty
- Kanji difficulty
- Sentence length
- Number of clauses
- Register
- Unfamiliar structures
- Listening complexity

A short sentence can still contain advanced grammar, while a longer sentence may use only beginner structures.

### Sentence Reuse

A verified sentence may appear in multiple parts of the application.

For example, one sentence could support:

- Vocabulary review
- Grammar practice
- Kanji recognition
- Listening practice
- Sentence Builder
- Reading comprehension

This reduces unnecessary duplicate content while allowing the same Japanese to reinforce several skills.

### Error Correction

If a verified sentence is later found to contain an error or unnatural usage:

1. Its status should be changed.
2. The issue should be documented.
3. The sentence should be corrected or rejected.
4. Related exercises should be reviewed.
5. Learner progress should not be deleted simply because the source content changed.

Content correction should be treated as a normal part of maintaining a language-learning application.
