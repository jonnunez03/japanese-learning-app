# Japanese Editorial Standards

This document defines how Japanese language content should be written, displayed, labeled, and reviewed throughout the application.

These are project conventions rather than claims that one form of Japanese is universally correct.

## Default Japanese

Unless a lesson specifically teaches otherwise, instructional content should use contemporary standard Japanese.

Content that is:

- Dialectal
- Slang
- Archaic
- Highly literary
- Unusually formal
- Specialized

should be clearly labeled when included.

## Register

Japanese expressions should be tagged when register matters.

Useful labels include:

- Polite
- Plain / casual
- Formal
- Honorific
- Humble
- Slang
- Written
- Spoken

The application should not present polite and casual forms as interchangeable.

Beginner content should generally introduce polite Japanese first while gradually exposing learners to natural plain speech.

## Kana and Kanji

Learner-facing Japanese should reflect natural modern writing.

The application should not force kanji onto words that are commonly written in kana.

When multiple written forms exist, the preferred learner-facing form should consider:

- Current usage
- Frequency
- Curriculum difficulty
- Register
- Kanji familiarity

Alternative forms may still be preserved in the underlying language data.

## Readings and Furigana

Reading support should correspond to the actual written form being displayed.

Furigana or kana assistance may be shown according to:

- Reading mode
- Learner kanji progress
- Curriculum level
- User preference

Reading support should decrease gradually rather than disappearing permanently after a learner sees a kanji once.

## Romaji

Romaji is optional learner support and should not replace kana instruction.

The project should use one consistent romanization convention throughout learner-facing content.

Input handling may accept reasonable romanization variations even when the displayed form is standardized.

The exact romanization and long-vowel formatting rules should be documented before large-scale vocabulary import.

## Translations

English translations should prioritize natural and accurate meaning.

When useful for grammar instruction, the application may show both:

- Natural English translation
- Structural or literal explanation

Literal explanations should not be presented as natural English translations.

## Grammar Terminology

Grammar terminology should remain consistent throughout the application.

Examples include:

- Godan verb
- Ichidan verb
- Irregular verb
- い-adjective
- な-adjective
- Particle
- Plain form
- Polite form
- Dictionary form
- て-form

Alternative terminology may be mentioned when it helps learners recognize terms used by other resources.

## Verb Transitivity

Verb metadata should distinguish transitive and intransitive usage when applicable.

Related verb pairs should be linked where useful.

For example:

- `開ける` — transitive
- `開く` — intransitive

This information is important for:

- Particle selection
- Sentence generation
- Sentence Builder
- Grammar explanations
- Error feedback

Generated exercises should not assume that verbs with similar English translations behave identically in Japanese.

## Names and Cultural Examples

Names, places, cultural references, and example situations should be appropriate to the lesson and should not introduce unnecessary difficulty.

Cultural explanations should distinguish between:

- Language rules
- Common tendencies
- Context-dependent behavior
- Generalizations that may vary between people or situations

## Content Consistency

The same vocabulary item, grammar concept, or expression should not receive conflicting explanations across different lessons.

When content changes, related:

- Lessons
- Sentences
- Exercises
- Conversations
- Translations

should be reviewed for consistency.
