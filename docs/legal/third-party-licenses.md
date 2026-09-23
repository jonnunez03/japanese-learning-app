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
- Meanings
- Parts of speech
- Usage information
- Priority information

Before production use, record:

- Exact source
- Dataset version or snapshot date
- Exact license
- Attribution requirements
- Redistribution requirements
- Modification requirements
- Required notices

Preserve stable source identifiers when available.

## KANJIDIC2

Purpose:

- Kanji characters
- Readings
- Meanings
- Stroke counts
- School grade information
- Frequency information
- Other useful kanji metadata

The project should not assume that every KANJIDIC2 field has identical licensing conditions.

Fields with separate licensing requirements should be reviewed individually.

The project currently intends to exclude SKIP-code data unless its separate licensing requirements are deliberately reviewed and accepted.

Before production use, record:

- Exact dataset version
- Exact license
- Attribution requirements
- Excluded fields
- Required notices

## Tatoeba

Purpose:

- Candidate Japanese example sentences
- Japanese-English sentence relationships

Tatoeba text and Tatoeba audio should be treated as separate licensing concerns.

Do not assume that permission to use sentence text also grants permission to use associated audio.

For imported sentence content, preserve when available:

- Sentence ID
- Source relationship
- Contributor information required for attribution
- License information

Before production use, verify:

- Text license
- Attribution requirements
- Individual audio licensing before using any audio
- Redistribution requirements

## UniDic

Purpose:

- Japanese morphological analysis
- Lemmas
- Parts of speech
- Conjugation and inflection analysis

The exact UniDic distribution and version used must be documented.

Before production use, record:

- Exact UniDic package
- Version
- Selected license option where applicable
- Required notices
- Redistribution requirements

## KanjiVG

Purpose:

- Kanji stroke order
- Vector character data
- Character components

Third-party KanjiVG files should remain identifiable as third-party assets.

Before production use, record:

- Exact version or snapshot
- Exact license
- Attribution requirements
- Share-alike requirements
- Modification requirements
- Distribution strategy

The project should avoid mixing third-party asset ownership with claims about original application code.

## wordfreq

Purpose:

- Frequency estimates
- Vocabulary usefulness signals

Frequency data should be treated as one curriculum signal rather than authoritative language truth.

Before production use, distinguish between licensing for:

- Software/code
- Distributed data
- Upstream datasets or notices

Record:

- Version
- Data license
- Software license when applicable
- Required NOTICE or attribution material
- Upstream attribution requirements

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
