# Third-Party Licenses and Compliance

This document tracks third-party datasets, assets, libraries, and other external content used by the Japanese Learning App.

The purpose of this document is to make licensing requirements visible, auditable, and maintainable.

This document is a project compliance record and is not legal advice.

## General Policy

Third-party content should not be added to the production application until its license and usage requirements have been reviewed.

For each source, the project should document:

- Source name
- Official source location
- Exact dataset or asset used
- Version or snapshot date
- License
- Commercial-use status
- Attribution requirements
- Modification requirements
- Redistribution requirements
- Share-alike requirements
- Required notices
- Restricted or excluded fields
- How the project uses the source
- Where attribution appears in the application
- Date the license information was last verified

License information should be checked against the official source rather than relying only on summaries from third-party websites.

## Application Source Code

The original source code of the Japanese Learning App is licensed separately from third-party content.

Current project code license:

- MIT License
- Copyright 2026 Jonathan Nunez

Third-party datasets and assets retain their own licenses.

The presence of third-party data in the project does not mean that data becomes MIT licensed.

## JMdict

Purpose:

- Vocabulary
- Written forms
- Kana readings
- English meanings
- Parts of speech
- Usage and register information
- Priority information

### Planned Dataset

The application should initially use the English-only JMdict distribution where practical because the learner-facing curriculum is currently English-based.

The exact downloaded dataset filename, generation date, and import date should be recorded during ingestion.

### License

JMdict is covered by the Electronic Dictionary Research and Development Group (EDRDG) General Dictionary Licence Statement.

License:

- Creative Commons Attribution-ShareAlike 4.0
- Commercial use permitted when the license conditions are followed

The Japanese and English components are covered by the EDRDG license. Other translated languages may have separate copyrights and should not be imported without reviewing their individual terms.

### Attribution

Use of JMdict must be acknowledged.

The production application should provide a visible Sources, About, or Legal/Credits location containing:

- JMdict / EDRDG attribution
- The source project
- The applicable license
- A link to the official project or license information

If significant JMdict-derived vocabulary material is published or distributed, the use of JMdict should be clearly acknowledged.

### Share-Alike

JMdict data and adaptations derived from the licensed dictionary data remain subject to the applicable CC BY-SA requirements.

The application's original software source code does not need to use the same license merely because it uses JMdict data.

JMdict-derived data should remain distinguishable from original application code and original curriculum content.

### Source Ownership

The project must not claim ownership of JMdict data.

Adding original curriculum metadata, learner levels, topic assignments, or other application-specific information does not remove EDRDG's rights over the underlying JMdict material.

### Updating

The EDRDG license requires applications using the dictionary files to have a procedure for keeping the data reasonably current.

The JMdict project generates updated distributions regularly.

The production data pipeline should therefore support:

- Recording the JMdict generation or snapshot date
- Checking for newer source data
- Importing updated source data without destroying manually curated curriculum decisions
- Preserving learner progress across dictionary updates

A regular update schedule should be established before production release.

### Provenance

Imported JMdict records should preserve, when available:

- JMdict entry sequence number
- Source dataset
- Dataset generation date or version
- Import date
- Original written forms
- Original readings
- Relevant restrictions
- Parts of speech
- Priority metadata

Curriculum-selected meanings and preferred forms should remain traceable to the source entry.

### Production Status

Status:

`approved_with_conditions`

Conditions before production release:

1. Required attribution is implemented.
2. License information is included or linked appropriately.
3. JMdict source/version information is recorded.
4. An update procedure exists.
5. Derived JMdict data remains compliant with applicable share-alike requirements.
6. Only reviewed language components are imported.

## KANJIDIC2

Purpose:

- Kanji characters
- Japanese readings
- English meanings
- Stroke counts
- School grade information
- Frequency information
- Radicals
- Variants
- Other useful kanji metadata

### Planned Dataset

The application should use the KANJIDIC2 XML distribution.

The exact downloaded dataset filename, generation or snapshot date, and import date should be recorded during ingestion.

### License

KANJIDIC2 is covered by the EDRDG General Dictionary Licence Statement.

License:

- Creative Commons Attribution-ShareAlike 4.0
- Commercial use permitted when the license conditions are followed

The application source code does not need to use the same license merely because it uses KANJIDIC2 data.

KANJIDIC2-derived data should remain distinguishable from original application code and original curriculum content.

### Attribution

Use of KANJIDIC2 must be acknowledged.

The production application should provide an accessible Sources, About, or Legal/Credits location containing:

- KANJIDIC2 / EDRDG attribution
- The source project
- The applicable license
- A link to the official KANJIDIC project or license information

Required license and documentation links or files should be included as applicable.

### Share-Alike

Adaptations derived from licensed KANJIDIC2 data remain subject to applicable CC BY-SA requirements.

Application-specific information such as:

- Curriculum level
- Learner progress
- Lesson relationships
- Topic assignments
- Internal IDs

should remain conceptually separate from the underlying licensed kanji data where practical.

### Special Fields and Contributed Data

KANJIDIC2 contains information contributed by multiple rights holders.

The EDRDG license specifically identifies additional rights holders for data including:

- SKIP codes
- Pinyin information
- Four Corner codes
- Morohashi information
- Spahn and Hadamitzky descriptors
- Korean readings
- De Roo codes

The application should import only fields it actually needs.

### SKIP Codes

SKIP codes should be excluded from the initial import.

Current official sources contain conflicting license descriptions for SKIP-code data.

Until that conflict is deliberately resolved, the application should not:

- Import SKIP codes
- Store SKIP codes
- Display SKIP codes
- Use SKIP codes for search or indexing

SKIP data is not required for the application's planned kanji-learning features.

### JLPT Metadata

Legacy JLPT information in KANJIDIC2 should not be treated as an official modern N5–N1 classification.

The application's modern curriculum levels should be assigned independently using researched curriculum criteria.

If legacy JLPT fields are retained for source fidelity, they should be clearly labeled as legacy source metadata.

### Updating

The EDRDG license requires software and services incorporating the dictionary files to maintain a procedure for regular updates from current versions.

The KANJIDIC2 import pipeline should therefore support:

- Recording the source snapshot or generation date
- Checking for updated source data
- Re-importing updated kanji metadata
- Preserving manually curated curriculum assignments
- Preserving learner progress

External dataset updates should not automatically overwrite application-specific curriculum decisions.

### Provenance

Imported kanji records should preserve enough source information to identify their origin.

Useful provenance may include:

- Character
- Source dataset
- Source version or snapshot
- Import date
- Original readings
- Original meanings
- Stroke count
- Grade
- Frequency
- Included source metadata

Fields intentionally excluded for licensing or product reasons should be documented in the importer.

### Production Status

Status:

`approved_with_conditions`

Conditions before production release:

1. Required EDRDG attribution is implemented.
2. License information is included or linked appropriately.
3. Source/version information is recorded.
4. A regular update procedure exists.
5. KANJIDIC2-derived data complies with applicable share-alike requirements.
6. Special contributed fields are reviewed before use.
7. SKIP codes remain excluded unless their licensing status is deliberately resolved.

## Tatoeba

Purpose:

- Candidate Japanese example sentences
- Japanese-English sentence relationships
- Reading and comprehension material
- Possible source material for curriculum review

Tatoeba should be treated as a candidate sentence corpus rather than an automatically verified source of instructional Japanese.

### Planned Dataset

The application may import selected Japanese sentences and their English relationships from Tatoeba's downloadable corpus.

The exact dataset snapshot or download date should be recorded during ingestion.

Imported sentences should remain separate from verified learner-facing curriculum content until reviewed.

### Text Licensing

Tatoeba sentence text is generally distributed under:

- Creative Commons Attribution 2.0 France (`CC BY 2.0 FR`)

Tatoeba also supports some original sentences released under:

- Creative Commons Zero 1.0 (`CC0 1.0`)

The importer should preserve the license associated with each imported sentence when available rather than assuming every record has the same license.

Commercial use is compatible with CC BY material when its license requirements are followed.

### Attribution

For CC BY sentence text, attribution must be preserved.

Imported records should retain enough information to identify:

- Tatoeba sentence ID
- Contributor / author when available
- Sentence license
- Source
- Import snapshot or date

The production application should provide appropriate Tatoeba attribution and a link to the Tatoeba project.

When required, sentence-level attribution should remain recoverable from the application's data.

### Modified Sentences

If a Tatoeba sentence is modified, the project should preserve the original provenance and indicate modification when required by the applicable license.

A modified sentence should not silently replace the source record.

Conceptually:

Tatoeba source sentence
→ imported source record
→ optional curriculum adaptation
→ verified learner-facing sentence

The source and adaptation should remain distinguishable.

### Translation Relationships

Japanese and English sentences should remain identifiable as separate sentence records linked through their Tatoeba relationships.

The application should not assume that two linked sentences are exact word-for-word equivalents.

Translations should still be reviewed for:

- Accuracy
- Naturalness
- Register
- Curriculum usefulness
- Difficulty

### Content Quality

Tatoeba itself recommends filtering corpus content because some sentences may:

- Need correction
- Sound unnatural
- Contain poor translations
- Be archaic
- Be inappropriate for a particular project

Therefore, imported Tatoeba sentences should initially receive a status such as:

`candidate`

They should not become `verified` curriculum material merely because they came from Tatoeba.

### Audio Licensing

Tatoeba audio must be treated separately from sentence text.

Audio recordings are contributed under a variety of licenses.

The license of the sentence text does not automatically determine permission to use its associated audio.

For every audio recording considered for use, the project would need to verify:

- Audio contributor
- Audio license
- Commercial-use permission
- Attribution requirements
- Redistribution permission
- Any additional restrictions

### Initial Audio Policy

Tatoeba audio should be excluded from the initial application data import.

Status:

`excluded_initially`

Reasons:

- Audio licenses vary by contributor
- Some licenses may not permit commercial use
- Each recording requires additional provenance and license handling
- The application plans to evaluate a controlled pronunciation / TTS system separately

Tatoeba audio may be reconsidered later only through an audio-specific licensing and provenance process.

### External Sources

Some Tatoeba content may originate from external sources.

If a sentence carries additional source or attribution information, that information should be preserved and reviewed before production use.

The application should not assume that every sentence is governed solely by Tatoeba's default terms.

### Provenance

Imported Tatoeba sentence records should preserve when available:

- Sentence ID
- Language
- Sentence text
- Contributor
- License
- Source information
- Translation relationships
- Dataset snapshot
- Import date
- Verification status

Curriculum metadata should remain separate from the imported source record where practical.

### Production Status

Sentence text status:

`approved_with_conditions`

Conditions before production release:

1. Sentence IDs and provenance are preserved.
2. Per-sentence license information is preserved when available.
3. Required attribution is implemented.
4. Modified content is identified when required.
5. Imported sentences remain candidates until curriculum review.
6. External-source metadata is respected.
7. Only licenses compatible with the application's intended use are included.

Audio status:

`excluded_initially`

Tatoeba audio should not be imported until individual recording licenses and commercial-use requirements are deliberately handled.

## UniDic

Purpose:

- Japanese morphological analysis
- Lemma identification
- Parts of speech
- Conjugation information
- Inflection analysis
- Tokenization support for Japanese sentences

UniDic should be treated primarily as a linguistic analysis resource rather than a learner-facing vocabulary source.

### Planned Dataset

The initial application should use:

- UniDic for Contemporary Written Japanese
- Version 3.1.0
- Standard distribution unless the full training files are later required

The exact downloaded filename, source location, version, and import or installation date should be recorded.

Contemporary Spoken Japanese UniDic may be evaluated later if transcript-specific analysis becomes necessary.

### License

UniDic for Contemporary Written Japanese version 2.x and later is distributed under a triple license:

- GPL v2.0
- LGPL v2.1
- New BSD

NINJAL states that these versions may be used for business purposes.

The project should preserve the exact license files distributed with the UniDic package.

### License Choice

Before production distribution, the project should document which of the available license options it relies on for its particular use and distribution model.

The application should not assume that the licensing requirements of GPL, LGPL, and New BSD are interchangeable.

The selected license and any required notices should be preserved with the production compliance documentation.

### Intended Use

UniDic should primarily support:

- Sentence analysis
- Word segmentation
- Lemma detection
- Part-of-speech identification
- Conjugation analysis
- Linking sentence tokens to vocabulary records

For example:

Japanese sentence
→ UniDic analysis
→ tokens / lemmas / grammatical metadata
→ application relationships

UniDic analysis should assist curriculum tooling rather than automatically determine learner-facing explanations.

### Not a Primary Vocabulary Source

JMdict should remain the primary lexical source for learner-facing vocabulary meanings and dictionary information.

UniDic and JMdict serve different purposes.

Conceptually:

JMdict
→ lexical / dictionary data

UniDic
→ morphological analysis

UniDic output should not silently replace curated vocabulary meanings or curriculum decisions.

### Attribution and Research Acknowledgement

NINJAL asks users publishing research results produced using UniDic to clearly state that UniDic was used and to consult the relevant references when appropriate.

The project should preserve:

- UniDic / NINJAL identification
- Version information
- Applicable license information
- Relevant notices and documentation

If the project publishes research or analysis based on UniDic, the required acknowledgement and appropriate references should be included.

### Version Restrictions

The project should not assume that every UniDic distribution has the same licensing terms.

Historical Japanese UniDic variants and older releases may use different licenses.

Only the specifically reviewed modern distributions should be considered approved.

Initial approved family:

- Contemporary Written Japanese v2.x and later

Possible future family:

- Contemporary Spoken Japanese v2.2.x and later

Any other UniDic distribution requires separate review before production use.

### Provenance

When UniDic analysis contributes metadata to application content, useful provenance may include:

- UniDic distribution
- UniDic version
- Analysis date
- Analyzer configuration
- Original Japanese text
- Resulting lemma
- Part of speech
- Conjugation information

This is especially useful if a later UniDic version produces different analysis.

### Updating

UniDic versions should not be upgraded blindly.

Before changing versions:

1. Record the existing version.
2. Review the new version and license.
3. Test representative Japanese sentences.
4. Compare important parsing differences.
5. Confirm that vocabulary and grammar relationships are not unexpectedly broken.
6. Update provenance information.

A parser update should not automatically change verified curriculum content without review.

### Production Status

Status:

`approved_with_conditions`

Initial planned distribution:

`UniDic for Contemporary Written Japanese 3.1.0`

Conditions before production release:

1. The exact downloaded package is recorded.
2. Bundled license and notice files are preserved.
3. The project's selected license path is documented.
4. UniDic is used primarily for morphological analysis rather than as authoritative learner-facing curriculum.
5. Version information is retained in provenance.
6. Other UniDic variants receive separate review before use.

## KanjiVG

Purpose:

- Kanji stroke order
- Stroke direction
- Vector character data
- Character components
- Radical information
- Future tracing and writing-practice features

KanjiVG should primarily be treated as a third-party visual asset and structured stroke-data source.

### Planned Dataset

The application should initially use the standard non-variant KanjiVG release.

The KanjiVG project recommends the `main` release archive for users who want the normal SVG graphics without variant forms.

The exact release filename, release date, version, and import date should be recorded when the dataset is added.

Variant forms may be evaluated later if a specific curriculum need arises.

### License

KanjiVG is released under:

- Creative Commons Attribution-ShareAlike 3.0 (`CC BY-SA 3.0`)

Copyright:

- Ulrich Apel and KanjiVG contributors as applicable

Commercial use is permitted under CC BY-SA 3.0 when the license requirements are followed.

### Attribution

Use of KanjiVG must be attributed.

The production application should provide an accessible Sources, About, or Legal/Credits location containing:

- KanjiVG
- Ulrich Apel
- The KanjiVG project
- CC BY-SA 3.0
- A link to the KanjiVG project
- A link to the applicable license

Required copyright or license notices included with the source distribution should be preserved where applicable.

### Share-Alike

KanjiVG-derived adaptations remain subject to the applicable share-alike requirements.

Examples may include:

- Modified KanjiVG SVG files
- Derived stroke-order graphics
- Adapted KanjiVG vector assets

These derived assets should remain distinguishable from the application's original source code and original visual components.

Using KanjiVG assets as part of the application does not automatically mean unrelated application source code becomes CC BY-SA.

### Initial Asset Strategy

The application should initially preserve KanjiVG SVG files substantially as provided rather than heavily modifying them.

Conceptually:

KanjiVG source SVG
→ application asset storage
→ rendering / animation
→ learner interface

Keeping the source SVG separate from application code simplifies:

- Attribution
- Updating
- License tracking
- Replacement
- Debugging

### Stroke Order Features

KanjiVG may eventually support:

- Stroke-order diagrams
- Animated stroke playback
- Step-by-step stroke display
- Tracing exercises
- Component highlighting
- Writing-practice interfaces

The application should not alter stroke-order data merely to simplify a lesson without verifying that the resulting representation remains accurate.

### Character Components

KanjiVG SVG files may contain metadata describing:

- Character elements
- Radicals
- Stroke types
- Component relationships

The application may use this information for learning features when useful.

Not every available metadata field needs to be imported.

The importer should select only fields needed by the application's planned functionality.

### Variant Forms

KanjiVG provides distributions containing variant character forms.

Variant forms should not be imported initially unless required.

Initial plan:

`main / non-variant distribution`

Possible future use:

`variant forms after curriculum and display requirements are defined`

This reduces unnecessary data and keeps the first implementation easier to maintain.

### Modifications

If KanjiVG SVG files or derived assets are modified:

- Preserve provenance
- Record that a modification occurred
- Preserve required attribution
- Apply the appropriate share-alike requirements to derived material
- Avoid implying that the modified asset is an unchanged original KanjiVG file

### Provenance

Imported KanjiVG assets should record when practical:

- Character
- KanjiVG source
- Release or snapshot version
- Import date
- Source filename
- Whether the asset is original or modified
- Asset version

This allows the project to determine which source release produced a displayed stroke-order asset.

### Updating

KanjiVG releases should be versioned in the project rather than silently replaced.

Before updating:

1. Record the existing source version.
2. Record the new release.
3. Compare affected assets.
4. Test stroke-order rendering.
5. Verify that application animation or tracing features still work.
6. Preserve required notices.
7. Update provenance information.

An upstream asset update should not erase learner progress.

### Production Status

Status:

`approved_with_conditions`

Initial planned distribution:

`KanjiVG main / non-variant SVG release`

Conditions before production release:

1. The exact KanjiVG release is recorded.
2. Required attribution is implemented.
3. CC BY-SA 3.0 license information is included appropriately.
4. KanjiVG assets remain distinguishable from original application code.
5. Modified or derived KanjiVG assets comply with applicable share-alike requirements.
6. Provenance is retained.
7. Variant assets receive deliberate review before being introduced.

## wordfreq

Purpose:

- Japanese word-frequency estimates
- Vocabulary prioritization
- Curriculum candidate ranking
- Secondary usefulness signal

wordfreq should not be treated as a dictionary or as an authoritative statement about which words learners must study.

### Planned Version

Initial reviewed version:

- wordfreq 3.2.0

The exact installed version should be recorded in the project's data tooling.

### Software License

The wordfreq software is licensed under:

- Apache License 2.0

The project's required Apache license and NOTICE obligations should be preserved when the software is distributed or incorporated in a way that requires them.

### Data License

The data files distributed with wordfreq may be redistributed under:

- Creative Commons Attribution-ShareAlike 4.0 (`CC BY-SA 4.0`)

The data licensing should be treated separately from the Apache-licensed software code.

Application source code does not automatically become CC BY-SA merely because it uses wordfreq data.

However, extracted, transformed, or redistributed wordfreq-derived data must continue to satisfy the applicable data-license and attribution requirements.

### Required Attribution

The project's wordfreq NOTICE information should be preserved.

The upstream project specifically requires appropriate credit to:

- Robyn Speer

The spelling of the author's name should be preserved as specified by the upstream NOTICE.

wordfreq also incorporates or derives information from multiple external corpora and datasets.

Applicable upstream acknowledgements and notices should not be discarded.

### Upstream Data Sources

wordfreq combines frequency information from multiple domains and sources.

These include data associated with sources such as:

- Wikipedia
- OpenSubtitles
- Google Books Ngrams
- ParaCrawl
- Reddit
- Web corpora
- Other language-specific datasets

The exact upstream notices bundled with the reviewed wordfreq release should be retained rather than attempting to recreate the attribution list manually.

### Japanese Support

Japanese is a supported language in wordfreq.

Japanese processing uses language-specific tokenization rather than assuming whitespace-delimited words.

The upstream Python implementation uses MeCab-related tooling for Japanese tokenization.

This is important because Japanese frequency lookup depends partly on how text is segmented into words.

Frequency scores should therefore not be treated as perfectly objective measurements independent of tokenization.

### Frequency Data Age

wordfreq's current frequency data represents a snapshot of language usage through approximately 2021.

The upstream maintainer indicates that the underlying frequency dataset is unlikely to receive substantial future updates.

Therefore, wordfreq should be treated as:

- A useful historical/current-ish frequency signal
- Not a live measurement of Japanese usage
- Not the sole basis for curriculum ordering

Words whose usage has changed significantly after the dataset period may require additional review.

### Curriculum Use

wordfreq should contribute one signal to vocabulary selection.

Conceptually:

Conceptually:

```text
JMdict priority
+ wordfreq score
+ topic usefulness
+ everyday usefulness
+ curriculum prerequisites
+ kanji difficulty
+ manual review
= curriculum placement

No word should automatically enter or leave the curriculum solely because of its wordfreq score.

### Storage and Transformation

The project should not bulk-convert wordfreq into a detached standalone CSV or similar dataset that loses its attribution and licensing context.

The upstream project specifically warns against converting its dataset into formats that separate the data from required attribution and license information.

If frequency values are stored in the application's database, they should remain traceable to wordfreq and retain appropriate source/version metadata.

Possible metadata includes:

- `frequency_source`
- `frequency_source_version`
- `frequency_score`
- `frequency_imported_at`

Any bulk redistribution or publication of derived frequency data should receive additional license review.

### Implementation Strategy

The preferred initial strategy is to use wordfreq during curriculum-data processing rather than exposing its complete underlying wordlists directly to learners.

For example:

JMdict vocabulary candidate
→ query wordfreq
→ obtain frequency signal
→ store curriculum ranking metadata
→ curriculum review

The application does not need to provide users with the full wordfreq dataset.

### Provenance

When wordfreq contributes to a curriculum decision, useful provenance should include:

- wordfreq version
- Language
- Queried Japanese form
- Frequency value or ranking signal
- Analysis/import date

This makes future curriculum reevaluation possible if the frequency methodology changes.

### Updating

Because wordfreq's underlying frequency data is not expected to update frequently, upgrades should focus on deliberate version review rather than assuming newer packaging means newer corpus data.

Before upgrading:

1. Record the currently used version.
2. Review the new changelog.
3. Confirm whether the underlying frequency data changed.
4. Review license and NOTICE files.
5. Test Japanese tokenization and representative words.
6. Recalculate curriculum scores only when there is a reason to do so.

A package update should not automatically reorder the curriculum.

### Production Status

Status:

`approved_with_conditions`

Initial reviewed version:

`wordfreq 3.2.0`

Conditions before production release:

1. Apache 2.0 software-license requirements are respected.
2. CC BY-SA 4.0 data requirements are respected.
3. The upstream NOTICE and required attribution are preserved.
4. Robyn Speer is credited as required by the upstream project.
5. Applicable upstream dataset acknowledgements are retained.
6. Frequency data remains identifiable as a secondary curriculum signal.
7. The approximately 2021 data snapshot limitation is documented internally.
8. Bulk exports do not strip attribution or licensing information.
9. Stored derived frequency metadata remains traceable to the source version.

## Reference-Only Resources

Some resources may be consulted during curriculum research without their content being copied or distributed.

Reference-only status does not automatically grant permission to reproduce:

- Textbook explanations
- Exercises
- Dialogues
- Audio
- Images
- Tables
- Proprietary vocabulary lists

Examples of resources that may be used primarily for research or verification should be documented separately from ingestible datasets.

## Audio and Text-to-Speech

Audio providers require separate review.

Before storing, caching, distributing, or monetizing generated audio, verify:

- Provider
- Service terms
- Voice
- Commercial-use permission
- Whether generated audio may be stored
- Whether generated audio may be redistributed
- Attribution requirements
- Usage limits
- Relevant version or terms date

Do not assume that permission to generate speech automatically includes permission to redistribute the resulting audio files.

Detailed audio policy should be maintained separately.

## New Source Approval Checklist

Before adding a new third-party source:

1. Identify the official source.
2. Locate the official license or terms.
3. Confirm the exact material being used.
4. Determine whether commercial use is permitted.
5. Determine whether modification is permitted.
6. Determine whether redistribution is permitted.
7. Identify attribution and notice requirements.
8. Identify share-alike or reciprocal requirements.
9. Identify fields or assets governed by separate terms.
10. Record the version or snapshot.
11. Document how the application will use it.
12. Add required attribution before release.
13. Preserve provenance in the data pipeline.

If the licensing status is unclear, the source should not be treated as approved for production use until the uncertainty is resolved.

## Release Audit

Before a public or commercial release, the project should review:

- Every third-party dataset
- Every third-party asset
- Audio sources
- Fonts
- Icons
- Images
- Libraries requiring notices
- Dataset snapshots
- Attribution pages
- Bundled license files

Licensing compliance should be treated as an ongoing maintenance task rather than a one-time development step.
```
