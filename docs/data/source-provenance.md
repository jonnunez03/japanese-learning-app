# Content Source and Provenance Standard

This document defines how the Japanese Learning App should track the origin, version, verification, and modification history of language content.

The goal is to make curriculum content auditable and easier to correct, update, and license responsibly.

## Provenance Principle

Content should remain traceable to its original source whenever possible.

Imported data, externally sourced examples, and internally authored curriculum content should not lose their origin information when transformed for use by the application.

## Recommended Provenance Fields

Depending on the content type, records may eventually include:

- `source`
- `source_id`
- `source_version`
- `source_url`
- `license`
- `imported_at`
- `content_version`
- `verification_status`
- `reviewed_at`
- `reviewed_by`
- `last_modified_at`

Not every field must exist directly on every database table.

Shared provenance records or relationships may be used when appropriate.

## Source

`source` identifies where the content originated.

Examples may include:

- JMdict
- KANJIDIC2
- Tatoeba
- KanjiVG
- UniDic
- wordfreq
- Japanese Learning App original content

## Source Identifier

When an external source provides a stable identifier, it should be preserved.

Examples include:

- JMdict entry sequence number
- Tatoeba sentence ID
- External dataset record identifier

Source identifiers make it possible to compare imported content with later versions of the original dataset.

## Source Version

When possible, imported datasets should record the exact version, release date, snapshot date, or other identifier used during import.

The application should avoid relying only on statements such as:

`latest version`

because the meaning of `latest` changes over time.

## Import Date

Imported content should record when it entered the application's data pipeline.

This helps distinguish:

- Source publication date
- Dataset version
- Application import date

## Content Version

Learner-facing curriculum content should support internal versioning when practical.

For example, a grammar explanation may change because:

- An error was corrected
- Wording was improved
- Additional nuance was added
- Examples were replaced
- Register information was corrected

Updating curriculum content should not require deleting learner progress.

## Verification Status

Language content should use the project's established verification states when appropriate.

Examples include:

- `candidate`
- `draft`
- `verified`
- `human_reviewed`
- `rejected`

Imported data should not automatically become verified instructional content.

## Reviewer Information

When content receives human review, the project should be able to record useful review information when appropriate.

This may include:

- Reviewer identifier
- Review date
- Review type
- Notes

Public display of reviewer identity is not required unless intentionally supported by the project.

## Derived Content

When application content is derived from an external source, the relationship should remain documented.

For example:

JMdict entry
→ curriculum vocabulary candidate
→ manually selected learner meaning
→ verified vocabulary record

The application should preserve enough information to determine which external entry influenced the final record.

## AI-Assisted Content

AI assistance does not replace provenance or verification.

Content created with AI assistance should remain subject to the same verification requirements as other internally authored material.

AI-generated Japanese should remain `draft` until appropriately reviewed.

## Corrections

If a source-derived or original content item is corrected:

1. The corrected content should receive an updated internal version when appropriate.
2. The reason for an important correction should be documented.
3. Related lessons, exercises, sentences, and conversations should be checked.
4. Existing learner progress should be preserved whenever possible.

## Data Refreshes

Updating an external dataset should not blindly overwrite curriculum decisions.

A future import pipeline should distinguish between:

- Raw source data
- Imported normalized data
- Curriculum-selected content
- Learner-facing verified content

Dataset updates may create candidates for review without automatically replacing manually curated curriculum content.
