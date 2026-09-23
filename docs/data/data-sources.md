# Japanese Learning App — Data Sources

This document records the external data sources used by the Japanese Learning App, including their purpose, licensing requirements, attribution requirements, update expectations, and any data that should be excluded from import.

The goal is to use reliable, legally reusable sources while keeping the application's original curriculum, learning logic, exercises, explanations, and user experience separate from third-party datasets.

## Data Source Standards

Before a source is used in the application, it should be evaluated for:

- Reliability and maintainership
- Licensing and commercial-use permissions
- Attribution requirements
- Data quality
- Update availability
- Suitability for Japanese learners
- Compatibility with the application's curriculum and database design

Third-party data should not be treated as automatically correct or learner-ready simply because it is available. Imported data may still require filtering, normalization, validation, or review.

## 1. JMdict

### Purpose

JMdict will be the primary lexical source for Japanese vocabulary.

It provides structured dictionary data including:

- Japanese written forms
- Kana readings
- English meanings
- Parts of speech
- Usage and register information
- Priority/commonness indicators
- Field/domain tags
- Restrictions on readings or senses

JMdict is maintained by the Electronic Dictionary Research and Development Group (EDRDG) and new versions are generated regularly from the project's master database.

### Planned Use

The application may use JMdict data to populate or validate:

- Vocabulary entries
- Kana readings
- Kanji spellings
- English glosses
- Parts of speech
- Commonness/priority signals
- Register and usage metadata
- Vocabulary search
- Curriculum vocabulary candidates

JMdict data will not be treated as automatically learner-ready. Entries may be filtered, normalized, simplified, ranked, or reviewed before being included in lessons.

### Planned Imported Fields

The exact importer may evolve, but useful JMdict information includes:

- Entry identifier
- Kanji/written forms
- Kana readings
- English glosses
- Part-of-speech tags
- Priority markers
- Miscellaneous usage/register tags
- Field/domain tags
- Reading and sense restrictions

The learner-facing database may store a simplified representation of this information while preserving the original source identifier for traceability.

### Curriculum Role

JMdict will answer questions such as:

- What does this word mean?
- How is it written?
- How is it read?
- What part of speech is it?
- Is it marked as relatively common or high-priority?
- Are there restrictions on how a reading or meaning is used?

JMdict priority markers may contribute to difficulty and usefulness ranking, but they will not be treated as the application's only frequency or difficulty signal.

JMdict does not provide an official modern JLPT N5–N1 curriculum. Difficulty levels used by this application will therefore be assigned through the application's own researched curriculum process.

### License

JMdict is distributed by EDRDG under the Creative Commons Attribution-ShareAlike 4.0 license.

Commercial use is permitted provided the license conditions are followed.

Important requirements include:

- Proper attribution to EDRDG/JMdict
- Compliance with the ShareAlike requirements for adapted or derived dictionary data
- No claim of ownership over JMdict source material
- A visible acknowledgement in applications that use significant portions of the data
- A procedure for keeping incorporated JMdict data reasonably current

The application's own software source code does not have to use the same license solely because it uses JMdict data.

### Update Policy

EDRDG generates updated JMdict data frequently.

The application should eventually include a repeatable import/update process rather than treating the initial dataset as permanent.

A future data workflow may include commands such as:

`npm run data:update-jmdict`

The update process should:

1. Retrieve a current JMdict release.
2. Validate the source file.
3. Transform the relevant fields into the application's schema.
4. Preserve stable source identifiers when possible.
5. Update existing vocabulary records without destroying learner progress.
6. Record the dataset version or import date.

### Attribution

The production application should include a visible Sources or About section containing the required JMdict/EDRDG acknowledgement and license information.

Official project:
https://www.edrdg.org/wiki/JMdict-EDICT_Dictionary_Project.html

Official license:
https://www.edrdg.org/edrdg/licence.html

## 2. KANJIDIC2

### Purpose

KANJIDIC2 will be the primary structured source for kanji information.

It provides data such as:

- Kanji character
- Japanese on-reading
- Japanese kun-reading
- English meanings
- Stroke count
- School grade information
- Frequency ranking
- Radical information
- Variant information
- Additional reference and indexing metadata

### Planned Use

The application may use KANJIDIC2 to populate or validate:

- Kanji entries
- On-readings
- Kun-readings
- English meanings
- Stroke counts
- Japanese school-grade information
- Frequency signals
- Radical information
- Kanji-to-vocabulary relationships
- Candidate kanji for curriculum difficulty levels

KANJIDIC2 contains far more information than the learner-facing application needs. The importer should therefore extract only the fields that support learning features.

### Planned Imported Fields

Likely useful fields include:

- Character
- Unicode code point
- Japanese on-readings
- Japanese kun-readings
- English meanings
- Stroke count
- School grade
- Frequency rank
- Classical radical
- Selected variant information

The exact field list should remain intentionally limited so the application's kanji data stays understandable and maintainable.

### Fields We Will Exclude

The importer should not import SKIP indexing codes.

SKIP data has separate licensing conditions from the general KANJIDIC2 dataset and is not necessary for the application's learning goals.

The application should also avoid importing dictionary-specific indexing codes unless there is a clear learner-facing need for them.

### JLPT Level Warning

KANJIDIC2 contains a JLPT field, but it represents the older pre-2010 JLPT level system (levels 1–4).

It must not be treated as an official modern N1–N5 assignment.

The modern JLPT does not publish official kanji lists for N1–N5.

Therefore, the application will create its own researched modern study-level assignments using multiple signals such as:

- Frequency
- Japanese school grade
- Vocabulary usefulness
- Curriculum prerequisites
- External JLPT-oriented references
- Manual review

If legacy KANJIDIC2 JLPT data is retained internally, it should be explicitly labeled as legacy data.

### Curriculum Role

KANJIDIC2 will help answer questions such as:

- What does this kanji commonly mean?
- What are its Japanese readings?
- How many strokes does it contain?
- How common is it?
- At what Japanese school grade is it typically introduced?
- Which vocabulary words contain it?

Kanji difficulty will not be determined from a single KANJIDIC2 field.

The application's kanji curriculum will prioritize usefulness in real vocabulary rather than teaching characters only as isolated symbols.

### License

KANJIDIC2 is distributed by EDRDG under the Creative Commons Attribution-ShareAlike 4.0 license.

Commercial use is permitted provided the license conditions are followed.

Important requirements include:

- Proper attribution to EDRDG/KANJIDIC2
- Compliance with ShareAlike requirements for adapted or derived KANJIDIC2 data
- No claim of ownership over KANJIDIC2 source material
- Visible acknowledgement when significant portions of the dataset are used

The application's own software source code does not have to use the same license solely because it uses KANJIDIC2 data.

### Update Policy

KANJIDIC2 should eventually be handled through a repeatable import process.

A future workflow may include:

`npm run data:update-kanjidic`

The update process should:

1. Retrieve a current KANJIDIC2 release.
2. Validate the source file.
3. Exclude fields the project has intentionally chosen not to use.
4. Transform relevant fields into the application's schema.
5. Preserve stable character identifiers.
6. Update kanji metadata without destroying learner progress.
7. Record the import date or source version.

### Attribution

The production application should include KANJIDIC2/EDRDG acknowledgement and licensing information in its Sources or About section.

Official project:
https://www.edrdg.org/wiki/KANJIDIC_Project.html

Official license:
https://www.edrdg.org/edrdg/licence.html

## 3. Tatoeba

### Purpose

Tatoeba will be used as a source of candidate Japanese example sentences and Japanese-English sentence pairs.

Tatoeba contains a large multilingual corpus created by contributors. It is useful for finding real sentence examples, but its content should not be treated as automatically learner-ready.

### Planned Use

The application may use Tatoeba text to help populate or validate:

- Example sentences
- Japanese-English sentence pairs
- Vocabulary-in-context examples
- Grammar-in-context examples
- Candidate material for sentence exercises
- Candidate material for reading practice

Tatoeba content will not be imported directly into lessons without review.

### Planned Imported Fields

Useful information may include:

- Tatoeba sentence ID
- Japanese sentence text
- English translation text
- Contributor attribution information
- Language
- Sentence links/translation relationships
- Source/import date
- Verification status inside this application

The application should preserve the original Tatoeba sentence identifier so reused material can be traced back to its source.

### Quality-Control Policy

Tatoeba is a community-contributed corpus.

The application must not assume that every sentence is:

- Natural Japanese
- Appropriate for learners
- Correctly translated
- Appropriate for the assigned difficulty level
- Appropriate for the intended grammar lesson
- Written in contemporary everyday language

Imported sentences should therefore begin as candidate content rather than verified curriculum content.

A possible internal status model is:

- candidate
- verified
- human_reviewed
- rejected

Before a Tatoeba sentence is used as verified instructional material, it should be checked for:

- Natural Japanese
- Correct translation
- Appropriate register
- Correct grammar
- Appropriate vocabulary
- Curriculum difficulty
- Usefulness to the learner
- Compatibility with the lesson objective

### Curriculum Role

Tatoeba can provide breadth and authentic sentence candidates while the application provides the teaching structure.

The application may connect a verified sentence to:

- Vocabulary entries
- Kanji
- Grammar points
- Particles
- Difficulty level
- Lesson topic
- Learner prerequisites

This allows the application to use external sentence data without adopting an external curriculum.

### Conversations

Tatoeba should not be treated as the application's primary conversation curriculum.

Structured conversations and dialogues should generally be authored specifically for this application so they can be controlled for:

- Difficulty
- Vocabulary prerequisites
- Grammar prerequisites
- Natural conversational flow
- Register
- Learning objective

Tatoeba sentences may still be used as references or individual examples inside those lessons when appropriate.

### License

Tatoeba textual sentence data is generally released under the Creative Commons Attribution 2.0 France license (CC BY 2.0 FR).

The license permits reuse, modification, redistribution, and commercial use provided attribution requirements are followed.

The application must preserve sufficient attribution information for reused Tatoeba text.

### Attribution

The production application should include a visible acknowledgement explaining that some example sentences originate from Tatoeba and are used under CC BY 2.0 FR.

Where practical, sentence-level source identifiers should also be retained internally so individual sentences can be traced to their original contribution.

Official corpus information:
https://en.wiki.tatoeba.org/articles/show/using-the-tatoeba-corpus

Official site:
https://tatoeba.org/

### Audio Warning

Tatoeba audio must not be automatically imported under the same assumptions as textual sentence data.

Audio recordings can use different licenses depending on the contributor.

Therefore:

- Tatoeba text and Tatoeba audio must be treated as separate datasets.
- Audio must not be imported unless its individual license has been verified.
- Audio with noncommercial restrictions should not be incorporated into a potentially commercial application.
- The application will preferably use its own separately licensed pronunciation/TTS system.

### Import Policy

The project should eventually create a repeatable Tatoeba import process that:

1. Retrieves current Japanese and English sentence data.
2. Preserves sentence identifiers and attribution information.
3. Links Japanese sentences to available English translations.
4. Filters obvious unsuitable content.
5. Stores imported sentences as candidate content by default.
6. Allows verification status to be changed independently of source data.
7. Keeps learner progress separate from imported source records.

A future workflow may include:

`npm run data:update-tatoeba`

Updating imported source data must not automatically overwrite reviewed curriculum decisions or learner progress.

## 4. UniDic

### Purpose

UniDic will primarily be used as a linguistic analysis resource rather than as the application's main learner-facing vocabulary dictionary.

UniDic is developed by the National Institute for Japanese Language and Linguistics (NINJAL) and is designed for morphological analysis of Japanese.

It can help software identify linguistic information inside Japanese text such as:

- Word boundaries
- Lemmas / dictionary forms
- Parts of speech
- Conjugated forms
- Inflection information
- Pronunciation and reading information
- Grammatical units

### Planned Use

The application may use UniDic to support:

- Sentence parsing
- Vocabulary detection inside sentences
- Lemma identification
- Part-of-speech identification
- Particle detection
- Verb and adjective form analysis
- Grammar tagging assistance
- Sentence difficulty analysis
- Automatic linking between sentences and known vocabulary
- Validation tools for curriculum development

For example, a sentence such as:

`私は寿司を食べました。`

could be analyzed into linguistic components so the application can identify that:

- 私 is a pronoun/noun-like lexical item
- は is a particle
- 寿司 is a noun
- を is a particle
- 食べ is related to the dictionary form 食べる
- ました represents polite past verbal morphology

The exact analysis returned by UniDic should be preserved rather than replaced by simplified assumptions in application code.

### Role Compared With JMdict

JMdict and UniDic serve different purposes.

JMdict is the primary learner-facing lexical source for questions such as:

- What does this word mean?
- How is this word read?
- What part of speech is it?
- What written forms does it have?

UniDic is primarily an analysis resource for questions such as:

- What linguistic units occur in this sentence?
- What dictionary form does this conjugated word belong to?
- What grammatical form is being used?
- Where are particles and other grammatical units located?

The application should not replace JMdict with UniDic or treat the two datasets as interchangeable.

### Preferred Integration Strategy

The project should initially use UniDic as an analysis dependency or development tool rather than copying its complete lexicon into the learner database.

A possible future flow is:

Japanese sentence
↓
Morphological analyzer + UniDic
↓
Analyzed tokens
↓
Application normalization
↓
Link tokens to JMdict vocabulary and application grammar records

This keeps the learner-facing database focused while still giving the application access to professional linguistic analysis.

If specific UniDic-derived information is stored in PostgreSQL, the project should record its source and preserve any required licensing notices.

### Curriculum Role

UniDic will not determine the curriculum by itself.

Instead, it may help the application:

- Analyze candidate example sentences
- Identify vocabulary prerequisites
- Detect grammatical structures
- Recognize conjugated forms
- Link inflected words to dictionary forms
- Assist with automated exercise generation
- Support the Sentence Builder and Word Forms features

Any automatically generated linguistic analysis used for instructional content should still be reviewed before being treated as verified curriculum.

### Version Policy

The project should use a modern UniDic release with licensing that explicitly permits the intended use.

For Contemporary Written Japanese, UniDic version 2.x and later are distributed under the GPL v2.0 / LGPL v2.1 / New BSD triple-license model.

For Contemporary Spoken Japanese, version 2.2.x and later use the same licensing model.

The exact version used by the application should be documented at implementation time, and its bundled license files should be retained.

Older or differently licensed UniDic variants must not be substituted without reviewing their specific terms.

### License and Commercial Use

NINJAL states that modern versions covered by the GPL v2.0 / LGPL v2.1 / New BSD triple license may be used for business purposes.

The project should choose and comply with the appropriate license option when UniDic is incorporated into application tooling or distribution.

The application should preserve required copyright and license notices.

If project requirements change substantially, the bundled license for the exact UniDic version being used should be reviewed again before release.

### Research and Attribution

When publicly describing research or analysis performed using UniDic, NINJAL asks users to clearly state that UniDic was used and to consult the relevant reference literature when appropriate.

The production project's Sources / Licenses documentation should therefore identify:

- NINJAL
- UniDic
- The exact UniDic variant
- The exact version
- The license option used
- Relevant acknowledgement or citation information

### Update Policy

UniDic updates should be deliberate rather than automatic because changes to morphological dictionaries can alter sentence-analysis results.

A future update workflow should:

1. Identify the exact current UniDic release.
2. Verify its license.
3. Record the version.
4. Run automated sentence-analysis tests.
5. Compare changed tokenization or grammatical analysis.
6. Review unexpected changes.
7. Update the application only after tests pass.

This is especially important because changes in morphological analysis could affect curriculum tagging and exercise generation.

Official UniDic site:
https://clrd.ninjal.ac.jp/unidic/en/

Official commercial-use information:
https://clrd.ninjal.ac.jp/unidic/en/commerce_use_en.html

## 5. KanjiVG

### Purpose

KanjiVG will be the primary source for kanji stroke-order graphics and structured stroke information.

KanjiVG provides SVG vector files that describe:

- Kanji stroke shapes
- Stroke direction
- Stroke order
- Character components
- Radical information
- Stroke-type metadata

This makes it suitable for visual writing lessons, stroke-order animations, and future tracing exercises.

### Planned Use

The application may use KanjiVG to support:

- Kanji stroke-order diagrams
- Animated stroke-order playback
- Writing practice
- Character tracing exercises
- Stroke-count visualization
- Radical/component highlighting
- Kanji detail pages

KanjiVG should complement KANJIDIC2 rather than replace it.

KANJIDIC2 will remain the primary source for meanings, readings, school grade, and other lexical kanji metadata.

### Preferred Data

KanjiVG publishes several release formats.

For the initial application, the preferred source should be the non-variant main SVG distribution because it provides ready-to-use stroke graphics without requiring the application to choose among multiple glyph variants.

Variant forms may be added later if the application develops a specific need for them.

### Planned Imported / Stored Information

The application may store or reference:

- Unicode code point
- Kanji character
- SVG file or SVG asset path
- Stroke order
- Stroke count
- Component metadata
- Radical metadata
- Stroke-type metadata

The project should avoid duplicating information already stored from KANJIDIC2 unless the duplication is needed for rendering or performance.

### Curriculum Role

KanjiVG will allow a kanji lesson to move beyond static text.

For example:

`飲`

could eventually include:

- Meaning and readings from KANJIDIC2
- Vocabulary examples from JMdict
- Stroke-order animation from KanjiVG
- Learner progress from the application's own database

This allows the learner to study the kanji in context rather than as an isolated symbol.

### Kana Writing

KanjiVG is primarily a kanji-oriented dataset.

The application should not assume KanjiVG alone provides the complete kana-writing curriculum.

Hiragana and katakana inventories, pronunciation rules, dakuten, handakuten, small kana, contracted sounds, and other kana-learning content will be maintained separately as part of the application's own curriculum data.

If KanjiVG or another compatible source is later used for kana stroke graphics, that use should be documented separately.

### License

KanjiVG is copyright Ulrich Apel and contributors and is released under the Creative Commons Attribution-ShareAlike 3.0 license.

Commercial use is permitted under the license provided its conditions are followed.

Important requirements include:

- Attribution to KanjiVG / Ulrich Apel
- A link or reference to the KanjiVG project
- Compliance with ShareAlike requirements for adapted KanjiVG material
- Preservation of the applicable license information when KanjiVG data is redistributed

The application's own software code does not automatically become CC BY-SA solely because it displays KanjiVG assets.

However, modified or derived KanjiVG data must continue to comply with the applicable ShareAlike terms.

### Asset Strategy

The project should preferably keep KanjiVG-derived assets clearly separated from original application code.

A possible future structure is:

client/
public/
data/
kanjivg/

or:

server/
data/
kanjivg/

This makes third-party licensing and attribution easier to track.

The exact storage strategy should be decided when the stroke-order feature is implemented.

### Update Policy

KanjiVG releases should be versioned rather than silently replaced.

A future update workflow should:

1. Identify the KanjiVG release version.
2. Verify the published license.
3. Download the official release.
4. Validate the archive.
5. Import or copy only the required SVG assets.
6. Record the release date/version.
7. Test existing stroke-order features before deployment.

A future workflow may include:

`npm run data:update-kanjivg`

### Attribution

The production application's Sources / Licenses section should identify:

- KanjiVG
- Ulrich Apel and contributors
- The release/version used
- Creative Commons Attribution-ShareAlike 3.0
- The official KanjiVG project URL

Official project:
https://kanjivg.tagaini.net/

Official repository:
https://github.com/KanjiVG/kanjivg

## 6. wordfreq

### Purpose

wordfreq will be used as a secondary vocabulary-frequency and usefulness signal.

It provides word-frequency estimates for many languages, including Japanese, based on multiple text sources rather than a single dictionary.

wordfreq should not replace JMdict.

Instead:

- JMdict tells us what a word is.
- wordfreq helps estimate how commonly that word appears in real usage.

### Planned Use

The application may use wordfreq to support:

- Vocabulary ranking
- Curriculum ordering
- Common-word identification
- Difficulty estimation
- Filtering obscure dictionary entries
- Selecting beginner-friendly vocabulary
- Comparing multiple candidate words within the same topic

For example, if JMdict contains several valid words with similar meanings, wordfreq may help identify which one learners are more likely to encounter frequently.

### Japanese Support

wordfreq supports Japanese.

Japanese tokenization requires additional CJK dependencies in the Python package, including Japanese morphological tooling.

The application should not assume that frequency values are exact measurements of learner usefulness.

Japanese word segmentation can affect frequency results, so the frequency score should be treated as one signal among several.

### Curriculum Role

Vocabulary difficulty should not be assigned from wordfreq alone.

A future curriculum score may combine signals such as:

- wordfreq frequency score
- JMdict priority markers
- word type
- learner topic usefulness
- kanji difficulty
- prerequisite grammar
- curriculum level
- manual review

Conceptually:

`curriculum usefulness = frequency + commonness + topic value + prerequisite fit + review`

This allows the application to avoid two common problems:

1. Teaching obscure dictionary words too early.
2. Treating raw frequency as identical to usefulness for learners.

### Data Quality Warning

Frequency data reflects the corpora used to produce it.

A word can be frequent because it appears often in:

- Books
- Web pages
- Subtitles
- Wikipedia
- News
- Other text corpora

That does not automatically make it appropriate for a beginner lesson.

For example, some high-frequency words may be:

- Grammatical function words
- Specialized terms common in one corpus
- Written-language expressions
- Proper names
- Context-dependent forms

All curriculum assignments should therefore remain reviewable.

### Preferred Integration Strategy

wordfreq should initially be used as a curriculum-development and import-time analysis tool.

The project may store a normalized frequency score with vocabulary records so the application does not need to calculate frequency during every learner request.

Possible future fields include:

- frequency_score
- frequency_source
- frequency_version

Frequency metadata should remain separate from the application's final study-level assignment.

### License

The wordfreq Python software is distributed under the Apache License 2.0.

Its bundled frequency data files may be redistributed under the Creative Commons Attribution-ShareAlike 4.0 license.

Commercial use is permitted provided the applicable license and attribution requirements are followed.

Important requirements include:

- Attribution to Robyn Speer
- Preservation of the Apache 2.0 software license where applicable
- Preservation of applicable CC BY-SA 4.0 terms for redistributed frequency data
- Preservation of attribution for underlying data sources where required

The project must retain the NOTICE and licensing information associated with the exact wordfreq release used.

### Attribution Details

wordfreq incorporates information derived from several sources.

Its official NOTICE documentation contains attribution requirements for those sources.

The application should not attempt to reconstruct those notices from memory.

Instead, when wordfreq is incorporated into the production data pipeline, the project should retain the NOTICE file from the exact release and reproduce the required acknowledgements in the application's third-party license documentation.

The project should specifically preserve attribution to Robyn Speer using the name requested by the wordfreq project.

### Version Policy

The exact wordfreq version used should be recorded.

Frequency values may change between releases because source data, tokenization, or processing methods can change.

A future update process should therefore:

1. Record the installed wordfreq version.
2. Verify its license and NOTICE files.
3. Generate frequency scores for the curriculum vocabulary.
4. Compare major ranking changes.
5. Review unexpected changes.
6. Store the source version used for each frequency import.

A possible future workflow may include:

`npm run data:update-frequency`

or a separate Python import script.

### Update Policy

wordfreq does not need to be queried at runtime for every learner request.

A more efficient architecture is:

JMdict candidate words
↓
wordfreq analysis during import
↓
Store normalized frequency score
↓
PostgreSQL
↓
Curriculum ranking logic

This reduces runtime cost and keeps curriculum decisions reproducible.

### Official Resources

Official repository:
https://github.com/rspeer/wordfreq

Official README:
https://github.com/rspeer/wordfreq/blob/master/README.md

Official NOTICE:
https://github.com/rspeer/wordfreq/blob/master/NOTICE.md

# Reference and Verification Sources

The sources in this section are used for research, curriculum calibration, grammar verification, and quality assurance.

They are not treated as primary import datasets.

The application should not copy lesson text, exercises, dialogues, explanations, audio, or other copyrighted educational material from these sources unless the applicable license explicitly permits that use.

Instead, the project should:

1. Research the relevant language concept.
2. Compare multiple reliable references.
3. Write original explanations and examples.
4. Verify those explanations before marking them as instructional content.

## 7. Official JLPT Resources

### Purpose

The official Japanese-Language Proficiency Test website will be used to calibrate broad difficulty expectations for:

- N5
- N4
- N3
- N2
- N1

The official JLPT level descriptions focus primarily on what learners can understand through reading and listening rather than publishing a fixed modern vocabulary, kanji, or grammar syllabus.

### Planned Use

Official JLPT resources may be used to:

- Calibrate overall curriculum difficulty
- Understand reading expectations
- Understand listening expectations
- Compare beginner, intermediate, and advanced proficiency
- Review official sample-question formats
- Guide the progression from N5 through N1

The application's vocabulary, kanji, and grammar level assignments should not be described as official JLPT lists.

### Difficulty Guidance

The official JLPT describes the levels broadly as:

- N5: some basic Japanese
- N4: basic Japanese
- N3: everyday Japanese to a certain degree
- N2: everyday Japanese plus broader situations
- N1: Japanese used across a wide variety of circumstances

The application may use these descriptions to validate whether its curriculum progression is reasonable.

### Important Limitation

Official JLPT Can-do lists are reference information based on self-evaluation surveys of successful examinees.

They are not themselves a formal curriculum syllabus.

The project should therefore use them as guidance rather than treating individual Can-do statements as required lesson content.

### Import Policy

Official JLPT materials will not be bulk-imported into the application database.

The project may store original curriculum metadata such as:

- `study_level = N5`
- `study_level = N4`
- `study_level = N3`
- `study_level = N2`
- `study_level = N1`

These labels represent the application's researched difficulty classification and should not imply official JLPT endorsement.

Official level summary:
https://www.jlpt.jp/e/about/levelsummary.html

Official JLPT site:
https://www.jlpt.jp/e/

## 8. Japan Foundation Learning Resources

### Purpose

Japan Foundation learning materials may be used as pedagogical references for:

- Everyday communication topics
- Functional language goals
- Beginner-to-intermediate progression
- Conversation situations
- Cultural context
- Lesson sequencing

Useful reference families may include resources such as:

- Irodori
- Marugoto
- Japan Foundation educational guidance

### Planned Use

These materials may help us evaluate whether our own lessons cover useful real-world situations such as:

- Introductions
- Shopping
- Restaurants
- Transportation
- Work
- Daily routines
- Invitations
- Travel
- Asking for help

The project should use these materials to understand teaching approaches and practical communication goals rather than copying their content.

### Copyright and Reuse Policy

Japan Foundation materials have their own terms of use.

Some downloadable teaching materials permit limited personal or educational use while restricting modification, redistribution, or commercial reuse.

Therefore, the application must not assume that publicly downloadable Japan Foundation content is freely reusable inside a commercial or publicly distributed learning application.

The project should not copy:

- Lesson text
- Dialogues
- Exercises
- Illustrations
- Audio
- Worksheets
- Tables
- Teacher notes

unless the specific material's terms explicitly permit that use.

### Curriculum Role

Japan Foundation resources may be used to cross-check questions such as:

- Is this a realistic beginner communication goal?
- Is this topic introduced at an appropriate stage?
- Is the learner being exposed to practical everyday language?
- Is the difficulty progression reasonable?

The final lesson explanations, dialogues, exercises, and examples used by this application should be written independently.

Official Irodori site:
https://www.irodori.jpf.go.jp/

Official Marugoto site:
https://marugoto.jpf.go.jp/

## 9. Grammar Reference Set

### Purpose

No single grammar website or textbook should be treated as the application's sole authority.

Japanese grammar explanations should be verified against multiple references whenever practical.

The grammar reference set may include:

- Reputable grammar guides
- Published textbooks
- Dictionaries of Japanese grammar
- University or institutional language resources
- Japan Foundation materials
- Native-speaker or expert review for subtle usage

### Tae Kim's Guide

Tae Kim's Guide to Japanese Grammar is useful as a secondary explanatory reference.

It presents Japanese grammar from a Japanese-oriented perspective and covers a large range of beginner through advanced structures.

However, the guide is published under a Creative Commons Attribution-NonCommercial-ShareAlike license.

Because of the NonCommercial condition, its text and examples should not be copied into an application that may later be monetized.

It should be used only as a research and cross-checking reference.

Official site:
https://guidetojapanese.org/

### Verification Policy

For ordinary beginner grammar, instructional content should ideally be checked against at least two reliable references before being marked as verified.

For grammar involving:

- Nuance
- Register
- Formality
- Pragmatics
- Similar grammar contrasts
- N2/N1 material
- Idiomatic usage

the project should use additional references and, when possible, advanced or native-speaker review.

### Original Content Rule

The application should write its own:

- Grammar explanations
- Example sentences
- Particle explanations
- Exercises
- Dialogues
- Usage notes
- Comparisons
- Common-mistake explanations

Research sources may inform correctness, but the wording and instructional design should remain original to this project.

### Content Status

Instructional grammar content should support review states such as:

- draft
- verified
- human_reviewed
- rejected

AI-generated instructional content must not be considered verified solely because it was generated successfully.
