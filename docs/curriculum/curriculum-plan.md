# Japanese Learning App — Curriculum Plan

This document provides the high-level structure of the Japanese Learning App curriculum.

Detailed curriculum rules are maintained in focused documents within `docs/curriculum/`.

## Curriculum Philosophy

The Japanese Learning App is designed to provide a structured, affordable, and accessible path for learners from complete beginner through advanced Japanese.

The curriculum follows several core principles:

- Large content library, small manageable lessons
- Progressive difficulty
- Practical everyday Japanese before obscure material
- Vocabulary taught in useful context
- Kanji taught through real vocabulary whenever possible
- Grammar taught through meaning, usage, and examples rather than memorized definitions alone
- Kana taught completely
- Romaji used only as optional learner support
- Learner progress used to control what content appears next
- External data sources used as reference and structured data, not as a replacement for original curriculum design
- Instructional content researched and verified before being marked complete

## Transparency

The application is being developed by a software developer who is also a Japanese learner.

The developer's own knowledge and AI-generated material are not treated as authoritative language sources.

Lessons, grammar explanations, vocabulary, readings, conversations, and example sentences should be researched and cross-checked before being marked as verified.

Errors and unnatural Japanese should be treated as correctable content issues rather than hidden or ignored.

## Content Verification

Instructional Japanese should support verification states such as:

- `candidate`
- `draft`
- `verified`
- `human_reviewed`
- `rejected`

Before content is marked `verified`, appropriate checks may include:

- Correct Japanese
- Correct meaning
- Natural usage
- Correct reading
- Appropriate register
- Correct grammar
- Correct particle usage
- Appropriate difficulty
- Appropriate learner prerequisites

Beginner instructional material should normally be checked against multiple reliable references.

Advanced, nuance-heavy, formal, idiomatic, or culturally dependent material should receive stronger review and, when practical, review from a highly proficient or native Japanese speaker.

AI-generated Japanese remains `draft` until verified.

## Curriculum Levels

The application uses six broad stages:

Foundation → N5 → N4 → N3 → N2 → N1

Foundation is an application-defined beginner stage.

N5–N1 are internal curriculum groupings informed by JLPT difficulty, but they should not be presented as official JLPT vocabulary, kanji, or grammar lists.

The modern JLPT does not publish official comprehensive vocabulary, kanji, or grammar lists for these levels.

## Target Scope

| Level      | Cumulative Vocabulary | Cumulative Kanji | New Grammar Concepts | Cumulative Conversations |
| ---------- | --------------------: | ---------------: | -------------------: | -----------------------: |
| Foundation |                   200 |               25 |                   25 |                       15 |
| N5         |                   800 |              100 |                   50 |                       35 |
| N4         |                 1,500 |              300 |                   80 |                       70 |
| N3         |                 3,000 |              650 |                  100 |                      120 |
| N2         |                 6,000 |            1,000 |                  120 |                      190 |
| N1         |                10,000 |           ~2,000 |                  150 |                      275 |

These are curriculum targets rather than rigid limits or official JLPT requirements.

The underlying language database may contain substantially more material than the active learner curriculum.

## Content Library vs. Curriculum

The language database and learner curriculum should remain separate.

Conceptually:

External / Original Language Data  
↓  
Normalized Content  
↓  
Curriculum Candidates  
↓  
Verification and Level Assignment  
↓  
Learner Curriculum

A dictionary entry existing in the database does not automatically make it appropriate instructional content.

## Learning Model

Lessons should combine structured progression with learner-specific adaptation.

Depending on the lesson, learners may encounter:

- Kana
- Vocabulary
- Kanji
- Grammar
- Sentences
- Conversations
- Listening
- Reading
- Word forms
- Numbers
- Time and dates
- Counters
- Mixed review

Not every lesson must contain every content type.

Learner performance should determine what requires review and what content is appropriate next.

## Default Lesson Size

Recommended starting defaults are:

| Content              | Default |
| -------------------- | ------: |
| New vocabulary       |      10 |
| New kanji            |       2 |
| New grammar concepts |       1 |
| Conversations        |       1 |

Learners may adjust study intensity without changing the underlying curriculum.

Review content is separate from new-content limits.

## Progress Model

Shared progress states may include:

- `new`
- `learning`
- `struggling`
- `known`
- `mastered`

Progress should be based on demonstrated performance rather than simply seeing an item once.

The exact spaced or adaptive review algorithm will be implemented separately from curriculum content.

## Reading Modes

The application supports three planned reading modes:

### Kana First

Kana is emphasized while kanji remains available as secondary information.

### Adaptive

Reading assistance changes according to the learner's vocabulary and kanji progress.

### Full Japanese

Natural kanji spelling is emphasized, with reading assistance available when needed.

Romaji remains optional support rather than the primary long-term reading system.

## Detailed Curriculum Documentation

### Language Systems

- [Kana Curriculum](kana.md)
- [Vocabulary Curriculum and Word Selection](vocabulary.md)
- [Kanji Curriculum and Adaptive Reading](kanji.md)
- [Grammar, Particles, and Sentence Structure](grammar.md)
- [Generated Systems: Numbers, Time, Dates, Counters, and Money](generated-systems.md)

### Lessons and Content

- [Curriculum Topics and Categories](topics.md)
- [Lessons, Prerequisites, and Progression](lesson-system.md)
- [Sentences, Examples, and Exercise Content](sentences.md)
- [Conversation and Dialogue System](conversations.md)

### Learner System

- [Mastery, Review, and Learner Progress](learner-progress.md)
- [User Profile and Study Settings](user-settings.md)

### Curriculum Levels

- [Foundation Stage](levels/foundation.md)

Additional N5–N1 level plans will be created as the detailed curriculum is developed.

### Editorial Standards

- [Japanese Editorial Standards](editorial-standards.md)

## Data Documentation

Language-data selection, licensing, provenance, and import rules are documented separately:

- [Data Sources](../data/data-sources.md)
- [Content Source and Provenance Standard](../data/source-provenance.md)

## Legal and Compliance Documentation

Third-party licensing, attribution, privacy planning, and audio requirements are maintained separately from curriculum design:

- [Third-Party Licenses and Compliance](../legal/third-party-licenses.md)
- [Content Attribution Policy](../legal/content-attribution.md)
- [Audio and Text-to-Speech Policy](../legal/audio-and-tts.md)
- [Privacy and User Data Planning](../legal/privacy-and-user-data.md)

## Curriculum Maintenance

Curriculum development should remain iterative.

When content changes:

1. Preserve source provenance.
2. Update verification information when appropriate.
3. Review dependent lessons and exercises.
4. Preserve learner progress whenever practical.
5. Recheck licensing when external data or assets change.

The goal is not to make the curriculum permanently fixed.

The goal is to maintain a structured, researched, auditable learning system that can improve over time.
