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
