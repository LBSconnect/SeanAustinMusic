# Weekly Site Health Report — 2026-08-21

- **Production URL tested:** https://www.seanaustinmusic.com
- **Started:** 2026-08-21T05:23:56.603Z
- **Completed:** 2026-08-21T05:24:08.834Z
- **Overall status:** ✅ Healthy

## Route crawl

| Route | Status | OK | Response time |
|---|---|---|---|
| `/` | 200 | ✅ | 531ms |
| `/music` | 200 | ✅ | 519ms |
| `/videos` | 200 | ✅ | 461ms |
| `/tour` | 200 | ✅ | 482ms |
| `/social` | 200 | ✅ | 475ms |
| `/contact` | 200 | ✅ | 489ms |
| `/epk` | 200 | ✅ | 528ms |
| `/fan-club` | 200 | ✅ | 353ms |
| `/merch` | 200 | ✅ | 363ms |
| `/reggae-artist-houston-texas` | 200 | ✅ | 530ms |
| `/this-route-should-not-exist-health-check` | 200 | ✅ | 541ms |

## Sitemap & robots.txt

- `/sitemap.xml`: ✅ (status 200)
- `/robots.txt`: ✅ (status 200)

## Accessibility (axe-core)

Total violations across 5 pages: **7**

- `/`: 1 violation(s)
  - **color-contrast** (serious): Elements must meet minimum color contrast ratio thresholds — 2 node(s)
- `/music`: ✅ no violations
- `/videos`: 2 violation(s)
  - **color-contrast** (serious): Elements must meet minimum color contrast ratio thresholds — 1 node(s)
  - **heading-order** (moderate): Heading levels should only increase by one — 1 node(s)
- `/tour`: 1 violation(s)
  - **heading-order** (moderate): Heading levels should only increase by one — 1 node(s)
- `/contact`: 3 violation(s)
  - **color-contrast** (serious): Elements must meet minimum color contrast ratio thresholds — 1 node(s)
  - **heading-order** (moderate): Heading levels should only increase by one — 1 node(s)
  - **link-name** (serious): Links must have discernible text — 1 node(s)

## Recommended human actions

- 🟡 **P2: 7 accessibility violation(s) found.** Review and fix where reasonable.

This report is audit-only: it does not modify code or the live site. Fixes for anything flagged here should go through a normal PR.
