# Audio and Text-to-Speech Policy

This document defines how pronunciation audio and text-to-speech content should be selected, generated, stored, reviewed, and licensed within the Japanese Learning App.

## Audio Quality Principle

Japanese pronunciation audio should prioritize:

- Natural pronunciation
- Clear articulation
- Appropriate pitch and rhythm
- Consistent voice quality
- Learner comprehension

Low-quality or obviously robotic speech should not be the preferred production audio when a better legally usable option is available.

## Audio Sources

Possible audio sources may include:

- Licensed human recordings
- Commercial text-to-speech providers
- Locally generated speech
- Properly licensed external audio
- Browser speech synthesis as a fallback

Each source must be reviewed separately before production use.

## Provider Review

Before using a text-to-speech provider in production, document:

- Provider
- Service or API
- Voice name or identifier
- Relevant terms or license
- Commercial-use permission
- Whether generated audio may be stored
- Whether generated audio may be cached
- Whether generated audio may be redistributed
- Attribution requirements
- Usage limits
- Date the terms were reviewed

Do not assume that permission to generate speech automatically grants permission to redistribute the resulting audio.

## Audio Provenance

Stored audio should remain traceable to its origin.

Useful metadata may include:

- `audio_source`
- `provider`
- `voice_id`
- `generated_at`
- `source_text`
- `language`
- `playback_type`
- `license_or_terms_reference`
- `content_version`

This allows audio to be regenerated or removed if provider terms or quality requirements change.

## Generated Audio

If pronunciation audio is generated from Japanese text, the application should preserve the exact source text used.

If that text later changes, the associated audio should be considered outdated until reviewed or regenerated.

Conceptually:

Japanese content
→ audio generation
→ audio record

The audio should remain linked to the version of the content from which it was produced.

## Human Recordings

Human-recorded audio requires explicit permission or an appropriate license.

The project should document:

- Speaker or source
- Permission or license
- Recording date when relevant
- Redistribution rights
- Commercial-use rights
- Attribution requirements

A recording should not be used merely because it is publicly accessible online.

## External Corpus Audio

Audio associated with an external sentence corpus should be reviewed independently from the text.

For example, permission to use sentence text does not automatically mean associated recordings share the same license.

Each imported recording must have a license compatible with the project's intended use.

## Playback Modes

The application may eventually support:

- Normal playback
- Slower playback
- Repeat playback
- Word-level playback
- Sentence-level playback
- Conversation playback

Slower playback should preferably preserve intelligible pronunciation rather than introducing excessive distortion.

## Pronunciation Verification

Generated or imported audio should be reviewed for:

- Correct reading
- Correct word pronunciation
- Natural Japanese pronunciation
- Proper handling of long vowels
- Geminate consonants
- Kana combinations
- Numbers and counters
- Names when applicable

Pronunciation-sensitive content should not be assumed correct merely because a TTS provider successfully generated audio.

## Browser Speech Synthesis

Browser-based speech synthesis may be used as a fallback or development tool.

Because available voices vary by:

- Operating system
- Browser
- Device
- Installed language packs

browser speech synthesis should not be treated as a guaranteed consistent production voice.

## Caching

Audio caching should only be implemented after confirming that the applicable provider or license permits it.

The project should distinguish between:

- Temporary playback caching
- Persistent server storage
- Bundled application audio
- Redistribution to users

These may have different licensing implications.

## User Speech

If future pronunciation exercises record learner speech, user recordings should be treated as personal user data.

Before implementing this feature, the project should define:

- Whether audio leaves the user's device
- Why it is collected
- How long it is retained
- Whether it is stored
- How it can be deleted
- Whether a third-party speech service processes it

User speech should not be collected merely because microphone access is technically available.

## Production Approval

An audio source should not be considered approved for production until:

1. Its usage terms have been reviewed.
2. Commercial-use requirements are understood.
3. Storage and redistribution rights are understood.
4. Required attribution is documented.
5. Audio provenance can be retained.
6. Pronunciation quality has been tested.
7. Any required notices are included.

If these conditions are unclear, the source should remain development-only until resolved.
