# Database Schema Notes

## users

Stores the core account information for each learner.

Main responsibilities:
- User identity
- Email
- Password hash
- Account creation date

This table should not store Japanese learning progress directly.

---

## user_settings

Stores each learner's display and reading preferences.

Examples:
- Kana First
- Adaptive
- Full Japanese
- Romaji on/off
- Meaning display preference

This allows the same vocabulary and sentence data to display differently for different users.

---

## words

Stores the shared Japanese vocabulary used by the application.

Examples:
- 飲む
- のむ
- to drink
- verb
- JLPT level
- common-word status

This data belongs to the application, not to an individual user.

---

## verb_details

Stores information needed specifically for verbs.

Examples:
- Godan
- Ichidan
- Irregular
- Dictionary ending

This information will later help the conjugation engine create forms such as:

- 飲んだ
- 飲まない
- 飲んで
- 飲みます

---

## user_word_progress

Connects a user to a vocabulary word and stores their learning history.

Examples:
- New
- Learning
- Known
- Mastered
- Times seen
- Times correct
- Times wrong
- Last review
- Next review

This table allows two users to have different progress for the same Japanese word.

---

## kana

Stores the hiragana and katakana characters used by the application.

Examples:
- あ
- か
- ア
- カ

Useful fields may include:
- Character
- Romaji
- Kana type
- Variant type

Variant types can help distinguish:
- Basic kana
- Dakuten
- Handakuten
- Combination sounds

---

## user_kana_progress

Tracks how well each user knows each kana character.

Examples:
- Times seen
- Times correct
- Recognition score
- Listening score

This allows the app to give more practice to kana the learner struggles with.

---

## grammar_points

Stores grammar concepts taught by the application.

Examples:
- は particle
- を particle
- に particle
- て-form
- Past tense
- Negative form

Each grammar point can contain:
- Name
- Explanation
- JLPT level
- Difficulty

---

## user_grammar_progress

Tracks a learner's progress with each grammar concept.

Examples:
- New
- Learning
- Known
- Times seen
- Times correct

This lets the app decide which grammar concepts need more practice.

---

## sentences

Stores Japanese example sentences.

Examples:
- 私は水を飲みます。
- コーヒーを飲んだ。

Each sentence can contain:
- Japanese text
- English meaning
- Difficulty

The sentence itself is shared application data.

---

## sentence_words

Connects vocabulary words to the sentences they appear in.

Example:

Sentence:
私は水を飲みます。

Connected words:
- 私
- 水
- 飲む

This relationship allows the app to find sentences that use words the learner already knows.

---

## sentence_grammar

Connects grammar points to sentences.

Example:

Sentence:
私は水を飲みます。

Grammar:
- は particle
- を particle
- ます-form

This lets the app find sentences that practice a specific grammar concept.

---

## kanji

Stores individual kanji characters used by vocabulary in the application.

Examples:
- 水
- 飲
- 食
- 日

Useful fields may include:
- Character
- Meaning
- Stroke count
- JLPT level
- Frequency information

Kanji data belongs to the application and is shared by all users.

---

## user_kanji_progress

Tracks how familiar each learner is with an individual kanji character.

Examples:
- New
- Learning
- Known
- Mastered
- Times seen
- Times correct
- Recognition score

This supports the Adaptive reading mode.

Example:

If the learner knows:

水

but does not yet know:

飲

the application can display familiar kanji normally while providing kana assistance for unfamiliar kanji.

---

## word_kanji

Connects vocabulary words to the individual kanji characters they contain.

Example:

Word:
飲み物

Connected kanji:
- 飲
- 物

This relationship allows the application to determine whether the learner knows all of the kanji used inside a vocabulary word.

---

## user_word_form_progress

Tracks how well a learner can use different forms of a known verb or adjective.

Examples of form keys:
- plain_nonpast_affirmative
- plain_nonpast_negative
- plain_past_affirmative
- plain_past_negative
- polite_nonpast_affirmative
- polite_nonpast_negative
- polite_past_affirmative
- polite_past_negative
- te_form

Useful progress fields:
- Times seen
- Times correct
- Times wrong
- Last practiced
- Next review

The conjugated answer itself does not need to be permanently stored here.

The application can generate the correct form using the word's grammatical information and the conjugation engine.
