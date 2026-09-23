# Content Attribution Policy

This document defines how the Japanese Learning App should acknowledge third-party datasets, assets, and externally sourced content.

Exact attribution wording should follow the requirements of each source's license.

## Attribution Principle

Third-party content should remain identifiable as third-party content.

The application should not imply ownership of:

- External datasets
- Imported sentence corpora
- Stroke-order assets
- Third-party audio
- External images
- External fonts
- Other licensed resources

The application's original source code and original curriculum content should remain distinguishable from externally licensed material.

## Attribution Locations

Depending on license requirements, attribution may appear in one or more locations:

- About page
- Credits page
- Data Sources page
- Legal / Licenses page
- Repository documentation
- Bundled license files
- Dataset-specific documentation
- Individual content records when required

The final placement should satisfy the requirements of the specific license.

## Attribution Record

For each third-party source, maintain information such as:

- Source name
- Creator or organization
- Official source location
- License
- Version or snapshot
- Required attribution text
- Required license link
- Required notices
- Application usage
- Attribution location

## Dataset Attribution

Large language datasets should normally receive project-level attribution rather than repeating the same attribution on every vocabulary card unless the license requires item-level attribution.

Examples may include:

- JMdict
- KANJIDIC2
- UniDic
- KanjiVG
- wordfreq

The exact attribution requirements for each source must be verified before release.

## Sentence Attribution

Sentence corpora may require more granular attribution.

When required, sentence records should preserve enough information to identify:

- Original sentence ID
- Source
- Contributor or author information
- License

The user interface may expose sentence-level attribution when necessary.

## Original Content

Content written specifically for the Japanese Learning App should be distinguishable from imported content.

Possible source labels include:

- `japanese_learning_app`
- `jmdict`
- `kanjidic2`
- `tatoeba`
- `kanjivg`

Original content may still be based on language research and verification.

A factual Japanese language rule does not need to be attributed merely because multiple references were consulted, but copied or licensed expression must follow applicable attribution and copyright requirements.

## Modified Content

If third-party material is modified, adapted, normalized, reformatted, or transformed, the project should record that transformation when required by the applicable license.

Examples include:

- Normalizing imported dictionary fields
- Selecting one learner-facing meaning
- Converting data formats
- Modifying SVG assets
- Cleaning sentence metadata

Modification should not remove required source attribution.

## Attribution and Curriculum Data

Attribution metadata should remain separate from learner progress.

Updating attribution information should not affect:

- Vocabulary progress
- Kanji progress
- Grammar progress
- Review history
- Lesson completion

## User-Facing Credits

The finished application should eventually provide an accessible page where learners can see the major data sources and licenses used by the project.

A possible structure is:

### Language Data

Source name  
Purpose  
License  
Official project/source

### Stroke and Writing Data

Source name  
Purpose  
License

### Sentence Data

Source name  
Purpose  
License

### Software and Assets

Relevant third-party notices when required

This page should remain understandable to ordinary users while more detailed compliance records remain available in project documentation.

## Attribution Verification

Before release:

1. Review every production data source.
2. Confirm current attribution requirements.
3. Confirm required license links or notices.
4. Confirm whether attribution must appear in the application, repository, distribution package, or individual content.
5. Verify that modifications are disclosed when required.
6. Confirm that no source attribution was lost during data import or transformation.

Attribution should be reviewed whenever a source, license, or dataset version changes.
