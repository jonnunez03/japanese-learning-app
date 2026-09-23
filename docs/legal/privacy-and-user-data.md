# Privacy and User Data Planning

This document defines general privacy and user-data principles for the Japanese Learning App.

It is a development and compliance checklist, not a final privacy policy or legal opinion.

Exact legal requirements should be researched before public release based on where the application operates, where its users are located, and which third-party services are used.

## Data Minimization

The application should collect only information that is reasonably necessary for its features.

Possible learner data may include:

- Account information
- Display name
- Study settings
- Vocabulary progress
- Kana progress
- Kanji progress
- Grammar progress
- Conversation progress
- Lesson history
- Review history
- Answer history
- Reading and listening performance

Features should not collect unrelated personal information simply because it is technically possible.

## Progress Data

Learning progress belongs to the individual learner and should remain separate from shared curriculum content.

Examples include:

- Items studied
- Correct and incorrect answers
- Progress states
- Review dates
- Lesson completion
- Skill-specific performance

Curriculum updates should not unnecessarily erase learner history.

## Authentication Data

If accounts are implemented, passwords should never be stored as plain text.

Authentication should use established secure practices and libraries rather than custom password or cryptographic systems.

Sensitive authentication credentials should not be committed to the source repository.

## Environment Secrets

Secrets such as:

- Database credentials
- API keys
- Authentication secrets
- Third-party service credentials

should be stored outside committed source code.

Environment files containing secrets should remain excluded from Git.

Public example environment files should contain placeholders only.

## User Speech and Microphone Data

If pronunciation or conversation features eventually use the microphone, the application should clearly determine:

- Whether audio stays on the device
- Whether audio is uploaded
- Which service processes it
- Why it is processed
- Whether it is stored
- How long it is retained
- How the learner can delete it

Microphone access should only be requested when a feature actually needs it.

User recordings should not automatically become curriculum or training data.

## Third-Party Processing

Before sending learner data to an external service, document:

- Service provider
- Data sent
- Purpose
- Retention behavior when known
- Relevant privacy terms
- Whether the data is required for the feature

Possible future examples include:

- Authentication providers
- Speech recognition
- Text-to-speech
- Analytics
- Error monitoring
- Hosting
- Email services

The project should prefer sending the minimum information necessary.

## Analytics

Analytics should be implemented deliberately rather than automatically collecting everything possible.

Useful product analytics may include aggregate information such as:

- Feature usage
- Lesson completion
- Exercise performance
- Application errors

Avoid collecting unnecessary sensitive or identifying information.

## Data Retention

Before production release, the application should define retention policies for relevant user data.

Examples may include:

- Account records
- Progress
- Answer history
- Application logs
- Audio recordings
- Support messages

Data should not be retained indefinitely without a reason.

## Account Deletion

If user accounts are supported, the project should plan for account deletion.

Deletion behavior should define what happens to:

- Profile information
- Study settings
- Progress
- Review history
- User-generated content
- Stored recordings

Some operational records may require different handling, but this should be explicitly documented rather than accidental.

## Data Export

The application should consider allowing learners to retrieve or export important learning data.

Possible exportable information may include:

- Vocabulary progress
- Kanji progress
- Grammar progress
- Study history
- Settings

The exact format can be designed later.

## Security

Production systems should follow established security practices.

Important areas include:

- Secure authentication
- Authorization
- Database access controls
- HTTPS
- Secret management
- Input validation
- Dependency updates
- Backups
- Error logging without exposing sensitive data

Security-sensitive functionality should use established libraries and standards rather than custom implementations whenever practical.

## Children and Age Requirements

Before public release, the project should determine whether the service is intended for children or collects information from minors.

Any age-related privacy, consent, or account requirements should be researched before enabling accounts or data collection for those users.

The application should not make unsupported claims about compliance with specific child-privacy laws without completing the necessary review.

## Privacy Documentation Before Release

Before public deployment, the project should determine whether it needs:

- Privacy policy
- Terms of service
- Cookie or tracking disclosures
- Data-processing disclosures
- Account deletion instructions
- Contact information for privacy requests

Requirements should be researched against the actual production architecture and target users.

## Accessibility

Accessibility should be considered during application development rather than treated only as a final release task.

Important areas include:

- Keyboard navigation
- Semantic HTML
- Screen-reader support
- Sufficient contrast
- Visible focus states
- Text resizing
- Reduced-motion support
- Form labels
- Error identification
- Captions or text alternatives where applicable

Japanese reading assistance should complement accessibility features rather than replace them.

## Release Review

Before public release, review:

1. What user information is collected.
2. Why each item is collected.
3. Where it is stored.
4. Which third parties receive it.
5. How long it is retained.
6. How users can delete it.
7. Whether users can export important data.
8. Whether microphone or audio features require additional disclosure.
9. Whether analytics are necessary and appropriately limited.
10. Current privacy and accessibility requirements applicable to the deployed service.

Privacy, security, and accessibility should be reviewed again whenever major features or third-party services are added.
