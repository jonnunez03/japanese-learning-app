# Japanese Learning App — Curriculum Plan

## Curriculum Philosophy

The Japanese Learning App is designed to provide a structured, affordable, and accessible path for learners from complete beginner through advanced Japanese.

The curriculum should follow several core principles:

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
- Instructional content must be researched and verified before being marked as complete

## Transparency Statement

I am a software developer and Japanese learner building this app to make Japanese study more accessible and affordable.

Because I am still learning Japanese myself, I do not treat my own knowledge—or AI-generated content—as an authoritative source.

Lessons, grammar explanations, vocabulary, readings, and example sentences are researched and cross-checked against reliable linguistic and educational sources before being marked as verified.

The goal is to provide accurate, useful material for learners like myself, while continuing to improve the curriculum through research, review, and correction.

If an error or unnatural Japanese is discovered, it should be reported, reviewed, and corrected.

## Content Verification Policy

Instructional Japanese is not considered verified merely because it was AI-generated or written during development.

Content should support review states such as:

- `draft`
- `verified`
- `human_reviewed`
- `rejected`

Before instructional content is promoted to `verified`, it should be checked for:

- Correct Japanese
- Correct meaning
- Natural usage
- Correct reading
- Appropriate register
- Correct grammar
- Correct particle usage
- Appropriate difficulty
- Appropriate learner prerequisites

Beginner material should normally be checked against at least two reliable sources.

Advanced or nuance-heavy material should receive additional verification and, when possible, review by a highly proficient or native Japanese speaker.

## Curriculum Levels and Target Scope

The application uses six broad curriculum stages:

Foundation → N5 → N4 → N3 → N2 → N1

These levels are the application's own researched study progression.

The modern JLPT does not publish official vocabulary, kanji, or grammar lists for N5–N1. Therefore, the quantities below are internal curriculum targets rather than claims about official JLPT requirements.

### Target Content by Level

| Level      | Cumulative Vocabulary | Cumulative Kanji | New Grammar Concepts | Cumulative Curated Conversations |
| ---------- | --------------------: | ---------------: | -------------------: | -------------------------------: |
| Foundation |                   200 |               25 |                   25 |                               15 |
| N5         |                   800 |              100 |                   50 |                               35 |
| N4         |                 1,500 |              300 |                   80 |                               70 |
| N3         |                 3,000 |              650 |                  100 |                              120 |
| N2         |                 6,000 |            1,000 |                  120 |                              190 |
| N1         |                10,000 |           ~2,000 |                  150 |                              275 |

These numbers are targets, not rigid limits.

The database may contain substantially more vocabulary, kanji, and sentence data than the curriculum exposes. The curriculum layer determines which content is useful enough, appropriate enough, and sufficiently verified to teach.

### Content Library vs. Learner Curriculum

The application should separate the size of its underlying language database from the amount of content presented to the learner.

For example, JMdict may provide well over 100,000 lexical entries, but a learner working toward N5 should only encounter the approximately 800 words intentionally selected for that stage.

Likewise, KANJIDIC2 may contain thousands of characters, while the learner may only be responsible for approximately 100 by the end of the application's N5 curriculum.

This allows the application to maintain a large language resource without overwhelming the learner.

### Lesson Size and Learner Preferences

Normal lessons should remain manageable while allowing learners to choose how much new material they want to study.

The application should provide recommended defaults while allowing the learner to adjust lesson size based on their available time and preferred study intensity.

| Content           | Recommended Default | Available Preference |
| ----------------- | ------------------: | -------------------- |
| New vocabulary    |            10 words | 5, 10, 15, or 20     |
| New kanji         |        2 characters | 1–5                  |
| New grammar       |           1 concept | 1–2                  |
| Conversations     |                   1 | 0–2                  |
| Example sentences |                 3–8 | Determined by lesson |

Twenty new vocabulary items should generally be the maximum introduced during a single lesson.

Previously studied material that is due for review does not count toward the learner's new-content limit.

For example, a learner may choose:

- 15 new vocabulary words
- 2 new kanji
- 1 grammar concept
- 1 conversation

while also receiving previously studied material that is due for review.

Lessons do not need to contain every content type.

For example, a kana lesson may focus entirely on character recognition and pronunciation, while a grammar lesson may primarily use vocabulary the learner already knows.

### Learner Progress States

Studied material should not simply be considered learned after it has appeared once.

Vocabulary, kanji, grammar, and conversations should be tracked separately for each learner.

Possible progress states include:

- `new`
- `learning`
- `struggling`
- `known`
- `mastered`

Progress states should be supported by performance information rather than relying only on manual learner selection.

Useful progress measurements may include:

- Times seen
- Times answered correctly
- Times answered incorrectly
- Current correct-answer streak
- Last practiced date
- Next review date
- Recent accuracy
- Overall accuracy

For example, a vocabulary item may progress conceptually through:

`new → learning → known → mastered`

while repeated mistakes may move or flag the item as:

`struggling`

The exact progression algorithm will be designed separately from the curriculum content.

### Learner Study Preferences

Learner preferences should eventually be stored with the user's profile.

Possible settings include:

- New vocabulary per lesson
- New kanji per lesson
- New grammar concepts per lesson
- Conversations per lesson
- Romaji visibility
- Reading mode
- Preferred review intensity

These preferences should control lesson presentation without changing the underlying curriculum requirements.

A learner choosing 5 words per lesson and a learner choosing 20 words per lesson can therefore follow the same curriculum at different speeds.

### Adaptive Review

Previously studied material should return for review based on learner performance.

An item marked as struggling should generally return sooner than an item consistently answered correctly.

The application should eventually use review scheduling so the learner spends more time on weak material while still periodically reviewing stronger material.

This creates a learning cycle such as:

New material  
→ Practice  
→ Performance recorded  
→ Progress status updated  
→ Review scheduled  
→ Future practice adjusted

The goal is to make lesson size flexible while keeping long-term mastery structured.

## Kana Curriculum

Hiragana and katakana should be taught completely rather than divided into JLPT levels.

Kana belongs primarily to the Foundation stage, although review should continue throughout the curriculum.

The goal is for learners to become comfortable reading both scripts without depending permanently on romaji.

### Required Kana Coverage

The curriculum should include the complete modern learner-relevant kana system:

| Category                          | Hiragana  | Katakana |
| --------------------------------- | --------- | -------- |
| Basic gojūon kana                 | Yes       | Yes      |
| Dakuten                           | Yes       | Yes      |
| Handakuten                        | Yes       | Yes      |
| Yōon combinations                 | Yes       | Yes      |
| Small っ / ッ                     | Yes       | Yes      |
| Small ゃゅょ / ャュョ             | Yes       | Yes      |
| Small vowels                      | As needed | Yes      |
| Long-vowel patterns               | Yes       | Yes      |
| Katakana ー                       | N/A       | Yes      |
| Common foreign-sound combinations | N/A       | Yes      |

### Basic Kana

Learners should study all standard basic hiragana and katakana.

Examples:

`あ・い・う・え・お`

`か・き・く・け・こ`

`ア・イ・ウ・エ・オ`

`カ・キ・ク・ケ・コ`

The complete standard kana inventory should eventually be covered.

### Dakuten

Learners should understand how dakuten changes consonant sounds.

Examples include:

`か → が`

`さ → ざ`

`た → だ`

`は → ば`

and their katakana equivalents.

### Handakuten

Learners should understand the semi-voiced H-row sounds:

`は → ぱ`

`ひ → ぴ`

`ふ → ぷ`

`へ → ぺ`

`ほ → ぽ`

and their katakana equivalents.

### Yōon

Contracted sounds using small ゃ, ゅ, and ょ should be taught explicitly.

Examples include:

`きゃ・きゅ・きょ`

`しゃ・しゅ・しょ`

`ちゃ・ちゅ・ちょ`

`にゃ・にゅ・にょ`

and their katakana equivalents.

### Small Tsu

Learners should understand the use of small:

`っ`

and:

`ッ`

for consonant doubling.

This should include both recognition and pronunciation practice.

### Long Vowels

The curriculum should teach common long-vowel patterns in both hiragana and katakana.

Katakana should explicitly teach the long-vowel mark:

`ー`

### Modern Katakana Combinations

Common modern katakana combinations used for foreign words and borrowed sounds should be included.

Examples include:

`ティ`

`ディ`

`ファ`

`フィ`

`フェ`

`フォ`

`ウィ`

`ウェ`

`ウォ`

`ヴァ`

`ヴィ`

`ヴ`

`ヴェ`

`ヴォ`

Additional combinations may be included when they are useful in modern Japanese vocabulary.

### Kana Lesson Structure

Kana should be divided into manageable lessons rather than presented as one large chart that must be memorized immediately.

A possible progression is:

#### Hiragana

1. Vowels + K row
2. S + T rows
3. N + H rows
4. M + Y + R + W rows
5. Dakuten and handakuten
6. Yōon combinations
7. Small っ and long-vowel patterns
8. Mixed recognition and reading practice

#### Katakana

1. Vowels + K row
2. S + T rows
3. N + H rows
4. M + Y + R + W rows
5. Dakuten and handakuten
6. Yōon combinations
7. Small ッ and long-vowel mark
8. Common foreign-sound combinations
9. Mixed recognition and loanword practice

### Kana Progress Tracking

Hiragana and katakana progress should be tracked independently.

Each character may eventually track information such as:

- Recognition accuracy
- Reading accuracy
- Typing accuracy
- Times seen
- Times correct
- Times incorrect
- Last practiced
- Next review
- Progress status

Possible statuses include:

- `new`
- `learning`
- `struggling`
- `known`
- `mastered`

A learner may therefore be strong in hiragana while still struggling with katakana without the application treating both scripts as one skill.

### Romaji Policy

Romaji should remain optional learner support rather than the primary representation of Japanese.

The application should encourage learners to gradually rely on kana instead.

Learners may temporarily enable romaji when needed, but curriculum progression should increasingly prioritize direct reading of Japanese script.

## Curriculum Topics and Categories

Vocabulary, grammar, conversations, kanji, and example sentences should be organized by practical topics in addition to difficulty level.

A learner should be able to progress through Foundation, N5, N4, N3, N2, and N1 while also understanding what real-world area they are studying.

Content may belong to more than one topic.

For example:

`駅` may belong to both `Places` and `Travel & Transportation`.

`食べる` may belong to both `Food & Drink` and `Daily Actions`.

### Core Topic Categories

The curriculum should use a manageable set of broad categories rather than creating hundreds of unrelated sections.

Core categories include:

- Greetings & Introductions
- People & Family
- Daily Life
- Food & Drink
- Home
- School & Education
- Work & Professional Life
- Places
- Travel & Transportation
- Shopping & Money
- Numbers & Counting
- Time & Dates
- Weather & Seasons
- Health & Body
- Clothing & Appearance
- Hobbies & Entertainment
- Technology & Communication
- Nature & Animals
- Emotions & Feelings
- Descriptions & Adjectives
- Actions & Common Verbs
- Directions & Location
- Social Interaction
- Requests & Help
- Emergencies & Safety
- Culture & Society

More specialized topics may be introduced at higher levels without changing the core category system.

### Difficulty Within Topics

Topics should not belong to only one difficulty level.

Instead, each topic should expand as the learner progresses.

For example:

#### Food & Drink

Foundation / N5:

- Water
- Tea
- Coffee
- Rice
- Meat
- Fish
- Eat
- Drink
- Delicious
- Restaurant

N4:

- Ingredients
- Cooking actions
- Ordering preferences
- Portions
- Common restaurant interactions

N3:

- Recipes
- Dietary preferences
- Describing flavors
- Complaints
- Recommendations

N2 / N1:

- Formal dining language
- Specialized food vocabulary
- Nutrition
- Cultural and regional food discussion

This allows familiar topics to become more sophisticated instead of disappearing after the beginner level.

### Vocabulary Selection

Words should not be placed into the curriculum simply because they appear in a dictionary.

Vocabulary selection should consider:

- Frequency
- Everyday usefulness
- Topic usefulness
- Difficulty
- Required kanji
- Grammar prerequisites
- Register
- Learner level
- Whether a simpler or more common synonym should be learned first

Imported vocabulary that is not selected for the active curriculum may remain available in the underlying database for search, reference, or future curriculum expansion.

### Topic Progress

Learner progress may eventually be summarized by topic.

For example:

Food & Drink

- 42 / 60 current-level words known
- 3 grammar concepts learning
- 4 conversations completed

Travel & Transportation

- 25 / 50 current-level words known
- 2 conversations struggling
- 1 lesson due for review

Topic progress should supplement overall difficulty-level progress rather than replace it.

### Content Relationships

Curriculum content should support many-to-many relationships.

A vocabulary word may belong to multiple topics.

A conversation may involve multiple topics.

A grammar concept may appear across many lessons.

A sentence may reinforce several vocabulary words and grammar points.

Conceptually:

Vocabulary ↔ Topics

Kanji ↔ Vocabulary

Grammar ↔ Lessons

Sentences ↔ Vocabulary

Sentences ↔ Grammar

Conversations ↔ Vocabulary

Conversations ↔ Grammar

Learners ↔ Progress

This relationship-based structure will allow the application to build lessons dynamically instead of relying only on fixed pages of content.

## Generated Systems: Numbers, Time, Dates, Counters, and Money

Some Japanese concepts should not be taught as thousands of isolated vocabulary items.

Numbers, times, dates, counters, and money should instead be taught as reusable systems with rules, irregular readings, and dynamically generated practice.

This allows the application to create nearly unlimited exercises without storing every possible combination manually.

### Numbers

The curriculum should teach numbers progressively.

Suggested stages:

#### Foundation

- 0–10
- 11–20
- Tens
- Basic counting patterns

#### N5

- 1–99
- Hundreds
- Thousands
- Basic large numbers
- Common irregular pronunciations

#### N4 and Beyond

- 10,000 and `万`
- 100,000+
- Larger Japanese number groupings
- Decimals
- Percentages
- Phone numbers
- Addresses
- Measurements
- Approximate quantities

Important irregular readings should be taught explicitly.

Examples include forms such as:

- 300
- 600
- 800
- 3,000
- 8,000

The application should generate number exercises dynamically rather than storing every number as a vocabulary record.

### Time

Time practice should also be generated dynamically.

The curriculum should include:

- Hours
- Minutes
- Half past
- AM / PM
- Before
- After
- From
- Until
- Duration
- Frequency

Learners should practice converting between clock representations and Japanese expressions.

For example:

`7:05 AM`

`10:20 AM`

`1:30 PM`

`6:45 PM`

The system should generate many combinations rather than relying on a fixed list.

Irregular minute readings should be taught and tested explicitly.

### Dates and Calendar

The curriculum should include:

- Days of the week
- Months
- Calendar dates
- Years
- Today
- Tomorrow
- Yesterday
- This week
- Next week
- Last week
- This month
- Next month
- Last month
- This year
- Next year
- Last year

Irregular date readings should be treated as dedicated learning items when necessary.

### Counters

Japanese counters should be introduced gradually rather than all at once.

Early counters should focus on highly useful everyday forms.

Possible beginner counters include:

- General objects
- People
- Small objects
- Flat objects
- Long objects
- Machines / vehicles
- Books
- Floors
- Age
- Times / occurrences
- Cups / glasses

Advanced or specialized counters may appear at higher difficulty levels.

Each counter lesson should include:

- Counter meaning
- Basic pattern
- Common pronunciation changes
- Irregular forms
- Example sentences
- Generated practice

Counters should be linked to appropriate vocabulary and real-life situations.

### Money

Money practice should include:

- Yen
- Prices
- Asking how much something costs
- Paying
- Receiving change
- Discounts
- Budgeting
- Large prices
- Decimal and percentage concepts when appropriate

Money exercises should reuse the number system rather than creating a separate isolated number curriculum.

### Generated Exercise Model

These systems should support generated exercises such as:

- Read this number
- Write this number in Japanese
- Convert this time
- Choose the correct minute reading
- Choose the correct counter
- Read this date
- Calculate or identify a price
- Complete a sentence using the correct time or counter expression

Generated exercises should respect the learner's current difficulty level.

For example, a Foundation learner should not suddenly receive a complex large-number exercise involving vocabulary or grammar they have not studied.

### Progress Tracking

Progress should be tracked by concept rather than by every possible generated value.

For example, the application may track mastery of:

- Numbers 1–10
- Tens
- Hundreds
- Thousands
- Time: hours
- Time: minutes
- Dates
- Counter for people
- Counter for flat objects
- Money expressions

The generator can then create new practice examples from the concepts the learner is currently studying.

This keeps the database manageable while allowing almost unlimited practice.

## Grammar, Particles, and Sentence Structure

Grammar should be taught progressively and in context.

The goal is not for learners to memorize isolated grammar labels, but to understand:

- What a structure means
- When it is used
- How natural it sounds
- What words or forms it connects to
- How it differs from similar structures
- What mistakes learners commonly make

Grammar lessons should primarily reuse vocabulary the learner already knows so the learner can focus on the new grammatical concept.

### Grammar Difficulty

Grammar should follow the same broad curriculum progression:

Foundation → N5 → N4 → N3 → N2 → N1

The modern JLPT does not publish an official modern grammar syllabus.

Therefore, grammar levels used by this application represent the application's researched curriculum assignments.

### Grammar Record Structure

A grammar concept should eventually contain information such as:

- Name
- Difficulty level
- Short meaning
- Detailed explanation
- Structure / pattern
- Usage rules
- Register
- Prerequisites
- Similar grammar
- Common mistakes
- Verified example sentences
- Source references
- Verification status

For example, a grammar record may conceptually describe:

`〜たい`

Meaning:
Want to do something

Structure:
Verb stem + たい

Prerequisite:
Basic verb conjugation

Register:
Common / neutral

### Particles

Particles should not be taught as simple one-word English translations.

Many particles have multiple distinct functions that should be taught separately.

For example, `に` may include separate lessons or usages for:

- Destination
- Specific time
- Location of existence
- Indirect target / recipient
- Purpose of movement
- Resulting state

Similarly, the curriculum should explicitly cover important uses of particles such as:

- `は`
- `が`
- `を`
- `に`
- `で`
- `へ`
- `と`
- `の`
- `も`
- `から`
- `まで`
- `より`
- `や`
- `か`
- `ね`
- `よ`

Higher-level particles and particle combinations should be introduced later when appropriate.

### Particle Comparisons

The application should explicitly teach confusing contrasts.

Examples include:

- `は` vs. `が`
- `に` vs. `で`
- `に` vs. `へ`
- `と` vs. `や`
- `から` vs. `ので`
- `だけ` vs. `しか`

These should include:

- Meaning differences
- Typical situations
- Natural examples
- Common learner errors

The application should avoid oversimplified explanations such as:

`は = is`

or:

`に = to`

because these mappings do not accurately represent how Japanese particles function.

### Sentence Structure

Early learners should be introduced to common Japanese sentence patterns gradually.

Examples may include:

`A は B です`

`A は B を Verb`

`A は Place に 行きます`

`Place で Action`

`A が あります / います`

`Adjective + noun`

`Noun の Noun`

Sentence Builder exercises should initially use structures the learner has already studied.

### Verb Conjugation

Verb forms should be taught as systems rather than memorized as unrelated vocabulary.

The application should teach concepts such as:

- Dictionary form
- Polite form
- Non-past
- Past
- Affirmative
- Negative
- て-form
- Desire
- Ability
- Permission
- Prohibition
- Requests
- Commands when appropriate
- Passive
- Causative
- Conditional forms
- Volitional
- Other advanced forms as difficulty increases

The curriculum should distinguish:

- Ichidan verbs
- Godan verbs
- Irregular verbs

Learners should practice forms using vocabulary they already know whenever possible.

### Adjective Forms

The application should teach both:

- い-adjectives
- な-adjectives

Learners should practice:

- Non-past affirmative
- Non-past negative
- Past affirmative
- Past negative
- Polite forms
- Connecting adjectives
- Adverbial usage when appropriate

Irregular forms such as `いい` should be explicitly taught.

### Noun and Copula Forms

Learners should also practice noun predicates and the copula.

This includes appropriate use of forms such as:

- `です`
- `だ`
- `ではありません`
- `じゃない`
- Past forms
- Polite and plain distinctions

### Register and Politeness

The curriculum should distinguish between:

- Polite language
- Plain / casual language
- Formal language
- Honorific and humble language at advanced stages

Beginner lessons should normally prioritize polite Japanese while gradually introducing plain forms so learners can understand natural conversation.

The application should not imply that one form is universally more correct than another.

### Grammar Examples

Example sentences should:

- Use verified Japanese
- Prefer already-known vocabulary
- Clearly demonstrate the target grammar
- Avoid unnecessary advanced structures
- Include natural translations
- Be tagged with grammar and vocabulary relationships

Whenever practical, multiple examples should demonstrate different valid uses.

### Common Mistakes

Grammar lessons should explicitly document common learner mistakes.

For example:

- Using the wrong particle
- Applying an English word order directly to Japanese
- Mixing polite and plain forms unnaturally
- Incorrect adjective conjugation
- Incorrect verb-group conjugation
- Overusing pronouns
- Using a grammatically possible form in an unnatural context

Mistake explanations should focus on why the expression is unnatural or incorrect rather than only marking it wrong.

### Verification Standard

Grammar explanations should normally be checked against multiple reliable sources before being marked `verified`.

Nuance-heavy grammar should receive additional review.

Content involving:

- Subtle particle distinctions
- Register
- Honorific language
- Idiomatic expressions
- N2 / N1 grammar
- Pragmatic or cultural nuance

should receive stronger verification and, when possible, proficient or native-speaker review.

AI-generated grammar explanations or examples remain `draft` until verified.

## Conversation and Dialogue System

Conversations should be curated learning experiences rather than isolated scripts.

Each conversation should reinforce vocabulary, grammar, listening comprehension, reading comprehension, and practical communication.

The application should aim for approximately 275 curated conversations across the full curriculum.

### Conversation Targets by Level

| Level      | Cumulative Conversations |
| ---------- | -----------------------: |
| Foundation |                       15 |
| N5         |                       35 |
| N4         |                       70 |
| N3         |                      120 |
| N2         |                      190 |
| N1         |                      275 |

These are curriculum targets rather than rigid limits.

Additional conversations may be added when they provide useful practice.

### Conversation Length

Conversation length should increase with difficulty.

#### Foundation

Typical length:

- 2–6 lines
- One simple objective
- Very limited vocabulary
- Slow and predictable structure

Example situations:

- Greeting someone
- Introducing yourself
- Ordering one item
- Asking a price
- Asking where something is

#### N5

Typical length:

- 4–10 lines
- Familiar everyday situations
- Mostly known grammar
- Limited new vocabulary

Example situations:

- Restaurant ordering
- Shopping
- Asking directions
- Train station interactions
- Talking about daily routines
- Making simple plans

#### N4

Typical length:

- 8–14 lines
- More follow-up questions
- Explanations and reasons
- Casual and polite speech exposure

Example situations:

- Talking about hobbies
- Inviting someone somewhere
- Changing a reservation
- Talking about work or school
- Describing past experiences

#### N3

Typical length:

- 10–20 lines
- More natural pacing
- Opinions
- Storytelling
- Multiple grammar structures

Example situations:

- Giving recommendations
- Explaining a problem
- Making complaints
- Discussing experiences
- Workplace conversation

#### N2 / N1

Typical length:

- Longer natural exchanges
- Formal and informal registers
- Nuance
- Indirect language
- Abstract topics
- Professional situations
- Cultural expectations

### Conversation Metadata

Each conversation should eventually include:

- Title
- Topic
- Difficulty level
- Situation
- Speakers
- Japanese dialogue
- English translation
- Optional reading support
- Vocabulary used
- Grammar used
- Kanji used
- Register
- Prerequisites
- Verification status
- Source / author information

### Conversation Prerequisites

A conversation should identify the knowledge expected before the learner studies it.

Prerequisites may include:

- Vocabulary
- Grammar concepts
- Kanji
- Kana knowledge
- Previous lessons

The application should prefer conversations where most vocabulary and grammar are already familiar.

A conversation may intentionally introduce a small amount of new material, but unfamiliar content should not overwhelm the learner.

### Known-Content Target

As a general curriculum goal, most beginner conversations should use approximately 80–90% previously learned material.

The remaining material may introduce:

- A small number of useful words
- One new expression
- One target grammar concept

This allows the learner to understand the overall conversation while still encountering something new.

### Conversation Learning Modes

A conversation may eventually support multiple practice modes.

Possible modes include:

#### Read

Learner reads the Japanese dialogue with optional support.

#### Listen

Learner listens without immediately seeing the text.

#### Listen and Read

Audio and text are presented together.

#### Comprehension

The learner answers questions about what happened in the conversation.

#### Missing Line

One part of the dialogue is removed and the learner chooses or constructs the correct response.

#### Role Play

The learner takes one speaker's role and responds to the other speaker.

#### Shadowing

The learner listens and repeats the Japanese aloud.

### Reading Assistance

Conversation display should respect the learner's reading preferences.

Possible support includes:

- Kana First
- Adaptive
- Full Japanese
- Optional romaji
- Tap-to-show meanings
- Tap-to-show readings

Romaji should remain optional rather than permanently displayed.

### Conversation Progress

Conversation progress should be tracked separately for each learner.

Possible statuses include:

- `not_started`
- `learning`
- `struggling`
- `comfortable`
- `mastered`

Possible measurements include:

- Times practiced
- Listening accuracy
- Reading comprehension accuracy
- Response accuracy
- Last practiced
- Next review
- Completion count

A learner may understand the vocabulary in a conversation while still struggling to comprehend the dialogue at natural speed.

Conversation mastery should therefore remain separate from vocabulary mastery.

### Conversation Review

Conversations marked as struggling should return for review sooner.

Review may focus on the specific weak area.

For example:

- Poor listening comprehension → replay listening exercises
- Vocabulary mistakes → review relevant vocabulary
- Grammar mistakes → review linked grammar
- Difficulty responding → repeat role-play exercises

### Original Conversation Policy

Most structured conversations should be authored specifically for this application.

External sentence corpora may provide individual examples or inspiration, but conversation scripts should be designed around:

- Curriculum level
- Known vocabulary
- Known grammar
- Natural communication goals
- Appropriate register

Conversations must be verified for natural Japanese before being marked `verified`.

AI-generated conversations remain `draft` until reviewed against reliable language references.

Nuance-heavy or advanced conversations should receive stronger verification and, when possible, proficient or native-speaker review.

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

## Lessons, Prerequisites, and Progression

Lessons should be structured enough to provide a clear learning path while remaining flexible enough to adapt to individual learner progress.

The application should not require every learner to move through content in exactly the same way.

Instead, lessons should use prerequisite relationships and learner progress to determine what content is appropriate next.

### Lesson Record Structure

A lesson may eventually include:

- Title
- Curriculum level
- Topic
- Lesson type
- Learning objectives
- Vocabulary prerequisites
- Kanji prerequisites
- Grammar prerequisites
- New vocabulary
- New kanji
- New grammar
- Example sentences
- Conversation links
- Exercise types
- Estimated duration
- Verification status
- Source references

### Lesson Types

Lessons may focus on different skills.

Possible lesson types include:

- Kana
- Vocabulary
- Kanji
- Grammar
- Conversation
- Listening
- Reading
- Sentence Builder
- Word Forms
- Numbers
- Time and dates
- Counters
- Review
- Mixed practice

A lesson does not need to introduce every type of content.

### Prerequisite Logic

Content should be able to depend on previously learned material.

For example:

A lesson teaching:

`〜たい`

may require the learner to already understand:

- Basic verbs
- Verb stems
- Basic sentence structure

A conversation about ordering food may require:

- Basic food vocabulary
- `を`
- Polite verb forms
- Basic request expressions

Prerequisites should be stored explicitly rather than assumed only from lesson order.

### Hard and Soft Prerequisites

The application may distinguish between:

#### Hard prerequisites

Material that should normally be understood before the learner continues.

Examples:

- Hiragana recognition before kana-only reading practice
- Basic verb groups before advanced conjugation
- Basic particles before complex sentence-building exercises

#### Soft prerequisites

Material that is helpful but not strictly required.

Examples:

- Familiarity with some restaurant vocabulary
- Recognition of a kanji that will also have kana support
- Previous exposure to a related grammar pattern

Soft prerequisites may influence recommendations without completely blocking access.

### Lesson Readiness

A learner may be considered ready for a lesson when enough of its prerequisites have reached an appropriate progress state.

For example:

- Required grammar is `known` or `mastered`
- Most prerequisite vocabulary is at least `known`
- Required kana is sufficiently recognized
- Required kanji may be `learning` if reading support is available

The exact readiness thresholds should be configurable rather than permanently hard-coded into curriculum content.

### Sequential Progression

Some content should remain sequential.

Examples include:

- Early kana lessons
- Basic verb conjugation before advanced verb forms
- Basic number concepts before large-number practice
- Basic particle usage before nuanced particle contrasts

Other content may allow more freedom.

For example, after core Foundation material, a learner may choose to study:

- Food & Drink
- Travel
- Work
- Hobbies

in a different order while still remaining within the same general level.

### Recommended Path vs. Free Exploration

The application should provide a recommended curriculum path.

However, learners should also be able to explore other unlocked topics.

Conceptually:

Recommended Next Lesson

or

Explore Available Topics

This keeps beginners from feeling lost while allowing experienced learners more control.

### Placement and Prior Knowledge

The application should eventually allow learners to indicate or demonstrate material they already know.

Possible methods include:

- Placement assessment
- Marking vocabulary as already known
- Kana placement checks
- Grammar placement checks
- Importing prior progress manually

Learners should not be forced to repeat hundreds of beginner items they already know.

However, manually marking content as known should not automatically mean `mastered`.

The app may still periodically review manually marked material until performance confirms mastery.

### Lesson Completion

Completing a lesson should not automatically mark every item as mastered.

Instead, lesson results should update the learner's individual content records.

For example:

Lesson completed

Vocabulary:

- 7 moved toward `known`
- 2 remain `learning`
- 1 marked `struggling`

Grammar:

- Target concept remains `learning`

Kanji:

- 1 `known`
- 1 `struggling`

This keeps progress tied to actual performance rather than simple lesson completion.

### Dynamic Lesson Building

Some lessons may eventually be assembled dynamically.

For example, the application may choose:

- 10 new vocabulary words from the learner's current topic
- 5 review words due today
- 1 grammar concept the learner is ready for
- 2 kanji appearing in the new vocabulary
- 4 example sentences using mostly known words
- 1 conversation appropriate to the learner's prerequisites

This allows two learners at the same curriculum level to receive different practice while still following the same overall curriculum.

### Review Lessons

Review lessons should be generated from learner performance.

Priority may be given to:

- Struggling items
- Items due for review
- Recently learned content
- Frequently missed particles
- Weak kanji readings
- Weak listening vocabulary
- Weak conversations

Review should focus on weaknesses without completely abandoning stronger material.

### Progression Between Levels

Moving from one broad curriculum level to another should depend on overall readiness rather than completion of one final lesson.

Possible signals include:

- Vocabulary coverage
- Kanji coverage
- Grammar mastery
- Listening performance
- Reading performance
- Conversation comprehension
- Review stability

The exact promotion criteria should be designed and tested later.

The application should avoid claiming that completing its N5 curriculum guarantees an official JLPT N5 result.

Instead, the curriculum should be described as aligned with the application's researched interpretation of N5-level skills.

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

## Mastery, Review, and Learner Progress

Learner progress should be tracked at the individual content level rather than only at the lesson level.

Completing a lesson does not mean every item in that lesson has been mastered.

The application should track performance separately for:

- Vocabulary
- Kana
- Kanji
- Grammar
- Conversations
- Sentences
- Word forms
- Listening skills
- Reading skills
- Generated systems such as numbers, time, dates, and counters

### Shared Progress States

Where appropriate, learner content should use a common set of progress states:

- `new`
- `learning`
- `struggling`
- `known`
- `mastered`

Some content types may use additional specialized states when necessary.

For example, conversations may use:

- `not_started`
- `learning`
- `struggling`
- `comfortable`
- `mastered`

### Meaning of Progress States

#### New

The learner has not meaningfully practiced the item yet.

#### Learning

The learner has begun practicing the item but has not demonstrated consistent understanding.

#### Struggling

The learner is repeatedly making mistakes or showing difficulty with the item.

Struggling items should generally receive increased review priority.

#### Known

The learner has demonstrated reliable understanding but should still receive periodic review.

#### Mastered

The learner has demonstrated strong performance over repeated practice and longer review intervals.

Mastered does not mean the item should never appear again.

### Performance Measurements

Useful measurements may include:

- Times seen
- Times correct
- Times incorrect
- Recent accuracy
- Overall accuracy
- Current correct streak
- Current incorrect streak
- First learned date
- Last practiced date
- Next review date
- Number of successful reviews
- Number of failed reviews

Additional measurements may exist for specific skills.

### Skill-Specific Progress

A learner may know one aspect of an item while struggling with another.

For vocabulary, possible skill areas include:

- Meaning recognition
- Japanese reading
- English-to-Japanese recall
- Listening recognition
- Kanji recognition
- Pronunciation
- Sentence-context understanding

For kanji:

- Character recognition
- Meaning
- Reading
- Vocabulary context
- Writing / stroke order

For grammar:

- Recognition
- Meaning
- Structure
- Production
- Particle selection
- Usage in context

The application should avoid treating mastery as a single yes/no property when more detailed information is useful.

### Review Scheduling

The application should eventually use spaced or adaptive review scheduling.

The exact algorithm should be designed and tested separately.

Conceptually:

Correct answer
→ longer review interval

Incorrect answer
→ shorter review interval

Repeated mistakes
→ mark or prioritize as struggling

Consistent long-term success
→ move toward mastered

The scheduling system should be adjustable without changing curriculum content.

### Review Priority

Review priority may consider:

- Whether an item is due
- Progress state
- Recent mistakes
- Accuracy
- Time since last practice
- Importance to current lessons
- Whether the item is a prerequisite
- Learner-selected review intensity

A struggling prerequisite may receive higher priority than an unrelated weak item.

### Review Session Composition

A review session may contain a mixture of:

- Due vocabulary
- Struggling kanji
- Grammar mistakes
- Weak conversations
- Kana needing reinforcement
- Word-form practice
- Number/time concepts
- Listening items

The application should avoid creating review sessions that are overwhelmingly large.

If many items are overdue, reviews may be divided into manageable groups.

### New Content vs. Review Content

New-content limits and review limits should remain separate.

For example, a learner who selects:

- 10 new vocabulary words

may still receive:

- 8 vocabulary reviews
- 2 kanji reviews
- 1 grammar review

The application should clearly distinguish between:

- New content
- Review content

so learners understand what they are being asked to learn versus reinforce.

### Struggling Content

Content marked as struggling should receive targeted support.

Possible support includes:

- More frequent review
- Simpler examples
- Additional kana support
- Optional romaji
- Slower audio
- More explanation
- Comparison with similar concepts
- Returning to prerequisite material

Repeated failure should not simply produce the same exercise indefinitely.

The application should attempt to identify what aspect of the item is causing difficulty.

### Mastery Decay

Mastered content should still receive occasional review.

If the learner begins making repeated mistakes on previously mastered material, the progress state may move back toward:

- `known`
- `learning`
- `struggling`

Progress should reflect current performance rather than becoming permanently locked.

### Manual Learner Controls

Learners may eventually be allowed to:

- Mark an item as already known
- Request additional practice
- Mark an item as difficult
- Hide or suspend an item
- Reset progress for an item

Manual actions should influence the system without overriding useful performance data entirely.

For example, marking a word as already known may initially place it at `known`, but the application may still verify that knowledge through later review.

### Progress History

Important progress changes should be recoverable or auditable when practical.

The application may eventually store:

- Practice sessions
- Answer history
- Review outcomes
- Status changes

This allows the system to analyze learning patterns and improve recommendations.

### Progress and Curriculum Separation

Learner progress must remain separate from curriculum content.

Updating:

- A vocabulary meaning
- A sentence
- A grammar explanation
- A lesson
- A source dataset

must not automatically destroy learner progress.

Conceptually:

Curriculum Content
↓
Learner Progress

rather than embedding learner-specific data directly inside shared curriculum records.

### Future Review Algorithm

The first version of the application does not need a perfect spaced-repetition algorithm.

The initial goal should be:

- Correct progress tracking
- Clear review states
- Reliable review scheduling fields
- Separation of content and user progress

A more advanced scheduling algorithm can be added later without redesigning the entire database.

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

## Foundation Stage

The Foundation stage is designed for complete beginners and learners who may know some Japanese but do not yet have a reliable base in kana, basic vocabulary, grammar, or everyday communication.

Foundation should prepare the learner to enter the N5 curriculum without requiring prior Japanese knowledge.

It is not an official JLPT level.

### Foundation Targets

By the end of Foundation, the curriculum should aim for approximately:

| Content               |                   Target |
| --------------------- | -----------------------: |
| Vocabulary            |                200 words |
| Kanji                 |            25 characters |
| Grammar concepts      |                       25 |
| Curated conversations |                       15 |
| Hiragana              | Complete beginner system |
| Katakana              | Complete beginner system |
| Numbers               |   Core beginner patterns |
| Time / dates          |     Basic everyday usage |

These are curriculum targets rather than rigid completion requirements.

### Foundation Goals

By the end of Foundation, a learner should be able to:

- Read standard hiragana
- Read standard katakana with developing confidence
- Recognize dakuten and handakuten
- Recognize common yōon combinations
- Understand small っ / ッ
- Understand basic long-vowel patterns
- Introduce themselves
- Ask and answer very basic questions
- Understand common greetings
- Recognize approximately 200 high-use words
- Understand several core particles
- Build very simple Japanese sentences
- Use basic polite verb forms
- Understand simple numbers
- Tell and understand basic times
- Understand basic days and dates
- Participate in short predictable conversations
- Begin recognizing common kanji through vocabulary

### Foundation Vocabulary

The first approximately 200 words should prioritize practical everyday communication.

Major Foundation vocabulary areas should include:

- Greetings
- Introductions
- People
- Family basics
- Common food and drinks
- Common places
- Numbers
- Time
- Days and dates
- Basic transportation
- Common objects
- Common adjectives
- Common verbs
- Question words
- Basic position and location words
- Everyday expressions

Vocabulary should be selected using frequency, usefulness, topic relevance, and curriculum prerequisites.

The Foundation vocabulary list should avoid obscure synonyms and specialized terminology.

### Foundation Question Words

Important question words should appear early.

Examples include concepts such as:

- What
- Who
- Where
- When
- Which
- How
- How much
- How many
- Why

Learners should practice these inside complete sentence patterns rather than memorizing them only as isolated vocabulary.

### Foundation Grammar

Foundation grammar should establish the basic structure needed for simple communication.

Likely concepts include:

- Basic Japanese word order
- Topic + comment structure
- `です`
- Basic noun predicates
- `は`
- `が` for carefully selected beginner uses
- `を`
- `に`
- `で`
- `の`
- `も`
- `と`
- `か`
- `から`
- `まで`
- Basic existence with `あります` and `います`
- Basic polite verb forms
- Non-past affirmative
- Non-past negative
- Basic past forms
- Basic adjective usage
- Basic possession
- Basic questions
- Basic requests
- Basic location expressions

Individual particle uses should be introduced separately rather than presenting every function at once.

For example, early `に` lessons may first focus on:

- Destination
- Specific time

Additional uses may appear later.

### Foundation Verbs

Foundation should introduce a small but highly useful verb set.

Examples of useful concepts include:

- To be / exist
- To go
- To come
- To return
- To eat
- To drink
- To see / watch
- To listen / hear
- To speak
- To read
- To write
- To buy
- To do
- To sleep
- To wake up
- To work
- To study
- To understand

The exact vocabulary should be selected and verified during curriculum development.

Learners should begin understanding that Japanese verbs belong to different conjugation groups without being overwhelmed by advanced terminology immediately.

### Foundation Adjectives

Learners should encounter both major adjective types through useful vocabulary.

Examples may include concepts such as:

- Good
- Bad
- Big
- Small
- New
- Old
- Hot
- Cold
- Expensive
- Cheap
- Delicious
- Busy
- Quiet
- Convenient

The curriculum should gradually distinguish:

- い-adjectives
- な-adjectives

rather than treating all adjectives as following the same pattern.

### Foundation Kanji

The first approximately 25 kanji should prioritize extremely common characters that appear in vocabulary the learner is already studying.

Possible early concepts may include characters related to:

- Numbers
- Days
- Time
- People
- Basic directions
- School
- Common everyday words

Kanji should primarily be introduced through vocabulary rather than isolated reading lists.

The final Foundation kanji set should be selected through the project's verified kanji curriculum process.

### Foundation Numbers

Foundation number study should include:

- 0–10
- 11–20
- Tens
- Numbers through 99
- Introduction to hundreds
- Basic price recognition

Learners should also begin encountering important irregular pronunciations where appropriate.

Generated exercises should provide repeated number practice without requiring every possible number to be stored individually.

### Foundation Time and Calendar

Foundation should introduce:

- Hours
- Basic minutes
- Half past
- AM / PM
- Days of the week
- Basic dates
- Months
- Today
- Tomorrow
- Yesterday

The learner should practice both recognition and production.

Examples of exercise formats may include:

Clock:
`7:30`

Learner produces or recognizes the Japanese equivalent.

Japanese time expression:
Learner selects the correct clock time.

### Foundation Places

Common location vocabulary should include practical places such as:

- Home
- School
- Work
- Station
- Airport
- Restaurant
- Cafe
- Convenience store
- Supermarket
- Hospital
- Bank
- Hotel
- Bathroom
- Park
- Store

The exact list should prioritize usefulness and curriculum relevance.

### Foundation Conversations

Foundation should contain approximately 15 short curated conversations.

Possible situations include:

1. Greeting someone
2. Introducing yourself
3. Asking someone's name
4. Saying where you are from
5. Saying where you live
6. Ordering a drink
7. Ordering simple food
8. Asking the price
9. Paying at a store
10. Asking where the bathroom is
11. Asking what time it is
12. Asking where a place is
13. Simple train or station interaction
14. Talking about basic likes
15. Saying goodbye / ending an interaction

Foundation conversations should generally remain short and predictable.

Most should use approximately 80–90% previously learned material.

### Foundation Listening

Listening practice should begin immediately rather than waiting until later levels.

Foundation listening should focus on:

- Kana sounds
- Vocabulary recognition
- Greetings
- Numbers
- Times
- Short phrases
- Very short conversations

Audio should initially be clear and learner-friendly.

Normal natural pronunciation should remain the goal, while slower playback may be available as optional support.

### Foundation Speaking

Speaking practice may include:

- Repeating vocabulary
- Reading kana aloud
- Shadowing short phrases
- Answering predictable questions
- Practicing introductions
- Role-playing simple conversations

Perfect pronunciation should not be required before learners can continue.

Speaking practice should encourage understandable, increasingly natural Japanese.

### Foundation Reading

Early reading should progress from:

Kana
→ Words
→ Short phrases
→ Simple sentences
→ Short conversations

Romaji may be available as optional support, but learners should gradually transition toward reading kana directly.

### Foundation Writing

Writing practice may include:

- Kana recognition
- Typing kana
- Optional handwriting
- Basic kanji stroke order
- Simple word entry

Handwriting should be available as a learning skill without becoming a mandatory gate for learners primarily interested in reading or conversation.

### Suggested Foundation Progression

A possible broad progression is:

Phase 1:
Hiragana + greetings + first vocabulary

Phase 2:
More hiragana + basic sentence structure

Phase 3:
Dakuten / handakuten + basic particles

Phase 4:
Complete core hiragana + basic verbs

Phase 5:
Katakana introduction + numbers

Phase 6:
Katakana progression + time and dates

Phase 7:
Basic kanji + more sentence building

Phase 8:
Short conversations + integrated review

Phase 9:
Complete remaining beginner kana concepts

Phase 10:
Foundation review and N5 readiness

The exact lesson sequence may change during implementation and testing.

### Foundation Completion

Foundation completion should not require every item to be permanently mastered.

The learner should instead demonstrate sufficient readiness to begin N5 material.

Possible readiness signals include:

- Strong hiragana recognition
- Functional katakana recognition
- Core vocabulary mostly `known`
- Basic grammar understood
- Basic particle recognition
- Ability to understand simple sentences
- Ability to understand short predictable conversations
- Basic number and time competence
- Stable review performance

Struggling Foundation material should continue appearing for review after the learner begins N5.

Progression should therefore be gradual rather than treating Foundation and N5 as completely isolated courses.
