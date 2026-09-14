# Sean Austin: Love Without Borders

**The apology. The promise. The soundtrack.**

Public-safe source material for the approved zero-cost campaign around **One More Chance** and **Fi Yu Forever**. Prepared September 14, 2026, from the approved execution kit. This directory belongs to the Sean Austin music website repository, not either LBS application.

## Official destinations

- Website: https://www.seanaustinmusic.com/
- YouTube: https://www.youtube.com/@SeanAustinReggae
- One More Chance visualizer: https://www.youtube.com/watch?v=SdK9K9vhaMo
- Fi Yu Forever video: https://youtu.be/bXUj-hX-YWc

The One More Chance video ID is reused from `client/src/pages/latest-release.tsx` on main at commit `1bb2645e0ba42a3ceaf57cd026a350fe2b44c84b`. The Fi Yu Forever link comes from the approved campaign kit. Live YouTube playback and embed availability could not be independently checked in this session; recheck both before production integration. Riddims World remains an editorial reference, not the primary official video destination.

## Contents

- `campaign-identity.md`: positioning, artist introduction and editorial angles.
- `radio-host-scripts.md`: four presenter-led relationship and dedication segments.
- `creator-and-story-briefs.md`: voluntary listener, poetry, lettering, movement and wedding-story invitations, plus interview questions.
- `multilingual-copy.md`: English, Spanish, Brazilian Portuguese and French explanatory copy.
- `localized-metadata.json`: eight title/description pairs and the official destinations, ready for implementation.
- `articles/`: three original evergreen article drafts, with proposed metadata.
- `preview/index.html`: responsive standalone landing-page preview with click-to-load video and direct YouTube links.
- `owned-channel-conversion.md`: destination and production-integration specification.

## Scope and publication status

This commit adds campaign source files only. It does not change application routes, navigation, current pages, tracking, YouTube settings or deployment configuration. The preview stays outside `client/public` and `dist`, is marked `noindex,nofollow`, and is not a live campaign URL. The articles and proposed slugs are drafts, not published pages. A repository commit or merged PR does not by itself publish these materials to the website.

No audience growth, partner acceptance, broadcast, interview, wedding use or endorsement is claimed. Global-superstar presentation means confident, premium creative work, not invented credentials.

## Privacy and permissions

Private email threads, recipient addresses, submission ledgers, account identifiers and the original combined archive are deliberately excluded. The only correspondence address in these materials is Sean's public artist email. Broadcast masters should be supplied through approved artist correspondence, not copied into this public source directory.

Listener and creator participation is voluntary. Obtain specific permission before publishing their work, words or image. These drafts grant no music synchronization rights, blanket royalty-free use, Content ID exemption or ownership transfer. They commit no payment, booking, recording or interview date.

## Checks

Run from the repository root with Node.js, without installing packages:

```sh
node scripts/validate-love-without-borders.mjs
```

Checks cover the expected public-only file list, official destination consistency, four locales and eight metadata sets, basic preview safety and keyboard-access markup, producer credits, and absence of private campaign identifiers. These are static checks, not a full browser, playback or production-deployment test.
