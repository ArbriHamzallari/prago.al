# Rebuild Adaptation Plan

Discovery pass completed 2026-08-12, read-only. No components changed. This file will be
updated once Prompt 1–8 are provided so each prompt's file references can be checked against
what's below.

## 1. Confirmed stack & versions (read from source, not assumed)

| Package | Version (package.json) |
|---|---|
| next | ^16.2.6 (App Router) |
| react / react-dom | ^19.2.6 |
| typescript | ^6.0.3 |
| tailwindcss | ^4.3.0 (CSS-first config) |
| @tailwindcss/postcss | ^4.3.0 |
| framer-motion | ^12.40.0 |
| lucide-react | ^1.17.0 |
| simple-icons | ^16.21.0 |
| eslint / eslint-config-next | ^9.39.4 / ^16.2.6 |

Other config facts confirmed by reading the files:
- `tsconfig.json` — `@/*` path alias to repo root, `strict: true`, target ES2017, `moduleResolution: bundler`.
- `next.config.ts` — only sets `images.remotePatterns` for `images.unsplash.com` and `i.pravatar.cc`. No i18n config, no rewrites, no middleware config.
- `postcss.config.mjs` — just `@tailwindcss/postcss`.
- `app/globals.css` uses Tailwind v4's `@import "tailwindcss"` + `@theme` block, **and** a `@config "../tailwind.config.ts"` directive bridging the legacy JS config into the v4 CSS engine (see §3a).
- No i18n library, no `middleware.ts`, no `[locale]` segment, no dictionaries anywhere in the repo today. `app/layout.tsx:29` hardcodes `<html lang="en">` even though all current copy is English marketing copy per `cursor.md` (the locked brief this build already followed).
- `cursor.md` at repo root is the original build brief this codebase was built from — likely the "locked implementation manual" Prompt 1–8 will reference. Flagging in case Prompt 1 assumes a different file name for it.

## 2. Full current file tree

```
app/
  apple-icon.png
  globals.css
  icon.png
  layout.tsx
  page.tsx
components/
  ai-difference-section.tsx        (63 lines)
  audience-section.tsx             (71 lines)
  calendar-mockup-section.tsx      (109 lines)
  estimate-section.tsx             (84 lines)
  faq-section.tsx                  (27 lines)
  footer.tsx                       (53 lines)
  hero.tsx                         (108 lines)
  how-it-works-section.tsx         (48 lines)
  income-section.tsx               (42 lines)
  multi-platform-section.tsx       (51 lines)
  navbar.tsx                       (157 lines)
  services-pricing-section.tsx     (91 lines)
  software-section.tsx             (127 lines)
  stats-bar.tsx                    (31 lines)
  ui/
    accordion.tsx     (98 lines)
    button.tsx         (44 lines)
    card.tsx            (21 lines)
    eyebrow-label.tsx    (9 lines)
    phone-mockup.tsx   (150 lines)
    platform-badge.tsx  (42 lines)
    section.tsx          (33 lines)
    serif-heading.tsx    (22 lines)
    stat-counter.tsx     (52 lines)
lib/
  constants.ts          (STATS, SERVICE_CATEGORIES, SERVICES, AUDIENCE_TABS,
                          SOFTWARE_ACCORDION, FAQS, AI_FEED_MESSAGES, AI_FEATURES,
                          INTERIOR_PHOTOS, HERO_IMAGE, CONTACT_PHONE, CONTACT_WHATSAPP)
  platform-icons.ts     (ICON_MAP over simple-icons, PLATFORM_BADGE_LAYOUT)
public/
  logo/prago-logo-burgundy.jpeg, prago-logo-white.jpeg
  images/hero.png
```

`app/page.tsx` composes, in order: Navbar → Hero → StatsBar → AudienceSection →
ServicesPricingSection → MultiPlatformSection → CalendarMockupSection → IncomeSection →
SoftwareSection → AIDifferenceSection → HowItWorksSection → EstimateSection → FAQSection →
Footer. This matches the section order in `cursor.md` §3 closely enough (some sections were
split/renamed during the original build — e.g. no single "problem" section exists as its own
component; `AIDifferenceSection` seems to carry that + §3.5 content).

All page copy is currently **hardcoded English JSX strings** inside components (see
`hero.tsx`, `navbar.tsx` read in full) — nothing is pulled from a dictionary or CMS. This is
the main thing that makes §3b below non-trivial.

## 3. Cross-check against Prompt 1–8

**Not yet possible** — the numbered prompts referencing specific files haven't been sent yet.
Once they arrive, each file path/description they name will be checked against the tree above;
any mismatch (moved, renamed, content drifted) will be listed here as a flagged discrepancy
instead of being silently patched.

## 4. Two structural issues to solve (sketch only — confirm before implementing)

### a. Duplicate Tailwind color tokens (`tailwind.config.ts` + `app/globals.css` `@theme`)

**Current state:** colors are defined twice — once in `tailwind.config.ts` under
`theme.extend.colors` (`vishnje`, `vishnje-dark`, `vishnje-soft`, `cream`, `sand`, `charcoal`,
`stone`, `booking-blue`), and again in `app/globals.css`'s `@theme` block as `--color-*`
CSS variables. They're kept in sync today only because `@config "../tailwind.config.ts"` in
globals.css still loads the JS config alongside the CSS one. `borderRadius["2xl"]` only exists
in the JS config (no `--radius-2xl` in `@theme`), so the `@config` bridge is load-bearing right
now, not vestigial.

**Proposed approach:** consolidate onto the CSS-first `@theme` block, which is the Tailwind v4
native mechanism, and retire `tailwind.config.ts` + the `@config` directive entirely:
1. Port the missing `borderRadius.2xl: 16px` into `@theme` as `--radius-2xl: 16px`.
2. Verify `content` globs aren't needed — Tailwind v4 auto-detects content via the module
   graph, so the explicit `content: [...]` array in the JS config is likely dead weight already.
3. Delete `@config "../tailwind.config.ts"` from `globals.css` and delete `tailwind.config.ts`.
4. Any future color/token change then touches exactly one file (`app/globals.css`).

This is a one-way door (removing the JS config), so I'll confirm with you before deleting
`tailwind.config.ts` rather than doing it inline with a later prompt.

### b. Albanian at unprefixed `/`, English at `/en`, correct `<html lang>` on both

**Constraint:** only the root `app/layout.tsx` can render `<html>`/`<body>`, but it's shared
by every route under `app/`, and there's currently no i18n scaffolding at all — every string
is hardcoded English JSX.

**Proposed approach:**
1. Add `middleware.ts` at repo root. It doesn't redirect (Albanian must stay unprefixed and
   default regardless of browser `Accept-Language` — flagging this as an assumption to confirm:
   should `/en` only be reached via an explicit language switcher, or should there also be a
   one-time browser-language redirect on first visit to `/`?). Its only job: compute
   `locale = pathname.startsWith("/en") ? "en" : "sq"` and set it as a request header
   (e.g. `x-locale`) via `NextResponse.next({ request: { headers } })`.
2. `app/layout.tsx` becomes an async Server Component that reads that header with
   `headers()` from `next/headers` and sets `<html lang={locale}>` accordingly — this is the
   standard way to get a per-request `<html lang>` out of a single root layout without
   duplicating it.
3. Directory structure:
   - `app/page.tsx` — Albanian homepage, served at `/`.
   - `app/en/page.tsx` — English homepage, served at `/en`.
   - Both import the *same* section components, but strings move out of the components and
     into a small dictionary pair, e.g. `lib/i18n/sq.ts` / `lib/i18n/en.ts`, with each
     component accepting the relevant slice of copy as props (or a `locale`/`dict` prop).
     `lib/constants.ts` arrays (STATS, SERVICES, FAQS, AUDIENCE_TABS, etc.) get an Albanian
     counterpart each, keyed the same way, rather than translated in place.
   - `generateMetadata` per page (not the shared layout) supplies per-locale `<title>` /
     `<description>`, and `alternates.languages` / canonical tags for SEO (`/` ↔ `/en`).
4. Nav links, footer, WhatsApp/phone copy, and any `href="#section"` anchors need the same
   dictionary treatment since they're currently hardcoded per component.

This touches every section component (to accept translated copy instead of owning hardcoded
strings), so I want this structure confirmed before I start pulling strings out — it's the
highest blast-radius part of the whole rebuild.

## 6. Implemented in Prompt 2 (design tokens + locale routing skeleton)

Actual implementation differs slightly from the §4b sketch — noting the final decisions here
since §4 was written before Prompt 2's explicit instructions arrived.

**Locale routing — final structure:**
- `app/[locale]/layout.tsx` is the effective root layout (no separate `app/layout.tsx` exists
  anymore) — it reads `params.locale` and sets `<html lang={locale}>` directly, no header
  round-trip through `next/headers` needed.
- `app/[locale]/page.tsx` renders per locale; `generateStaticParams` returns `sq` and `en`.
- `middleware.ts` rewrites `/` → `/sq` internally (URL bar stays `/`) and lets `/en` resolve
  natively since it already matches the `[locale]` segment.
- **Canonical URL decision:** `/sq` typed directly gets a `308` redirect to `/` rather than a
  404 — so there is exactly one working URL per locale (`/` for Albanian, `/en` for English),
  and `/sq` never renders as a duplicate. Verified via `curl`: `/` → `200`, `<html lang="sq">`;
  `/en` → `200`, `<html lang="en">`; `/sq` → `308` → `Location: /`.
- Content is not yet migrated to per-locale dictionaries — `app/[locale]/page.tsx` is still a
  placeholder ("Albanian homepage" / "English homepage" text only), no section components are
  wired up. The dictionary/props plan from §4b step 3 still applies once sections are rebuilt.

**Flagging for you:** Next.js 16.2.6 prints `The "middleware" file convention is deprecated.
Please use "proxy" instead` when `middleware.ts` is present. It still works (build and dev
server both verified functioning), but Next.js is steering toward renaming the file to
`proxy.ts`. Prompt 2 asked for `middleware.ts` by name, so I kept it — but this is worth a
decision before the deprecation becomes a hard break in a future Next.js major version.

**Design tokens:** `stone` changed from `#8A8079` to `#6F655F` in both `tailwind.config.ts` and
the `@theme`/`:root` blocks in `app/globals.css` (kept in sync per instruction, not
consolidated onto one file as §4a had proposed — that consolidation didn't happen).
`booking-blue` removed from both (confirmed zero remaining references after Prompt 1's OTA
logo cloud deletion). Added `maxWidth.content: 1200px` and `borderRadius.card/hero` to
`tailwind.config.ts` only (not mirrored into `@theme`, matching the existing precedent where
`borderRadius["2xl"]` has only ever lived in the JS config and reached the CSS engine via the
`@config` bridge).

## 7. Implemented in Prompt 3 (header, hero, trust band, service scope, process steps)

**Pending real photography (placeholder paths only, no image files created):**
- `public/images/website/hero-main.webp` — Hero's full-bleed background. Referenced by path
  only; the file doesn't exist yet, so it 404s in dev/prod until real photography is dropped
  in. This doesn't break the build (Next only validates local `import`-ed images at build time,
  not string paths into `public/`), only the visual.
- ServiceScope's three cards use icon + text (Tag / CalendarCheck / Wrench from lucide-react),
  not photos. Re-reading the instruction ("one real operational photo... ONLY if available...
  otherwise icon + text, never stock imagery") — since zero real operational photos exist
  today, icon + text is the correct current state, not a placeholder-path stand-in like the
  hero. Swap individual cards to a real photo above the text once available per property/service
  category; no code changes needed to the copy/data shape for that swap.

**Copy/i18n structure:** `lib/site-copy.ts` now holds a `SITE_COPY.sq` tree (nav, hero,
trustBand, serviceScope, process) with the locked Albanian copy verbatim. No `SITE_COPY.en` key
yet — every component takes a `locale: Locale` prop and resolves copy via
`locale === "en" ? SITE_COPY.sq... : SITE_COPY.sq...` (both branches currently identical,
flagged with a `TODO(Prompt 6)` comment) so the prop is genuinely wired and ready for Prompt 6
to add the `en` branch without touching component structure. `lib/whatsapp.ts` added
`getWhatsAppUrl()` as a working (not fake) stub — it returns a bare `https://wa.me/<digits>`
deep link with no prefilled message; Prompt 6 adds the prefilled `text` param.

**Renamed:** `components/navbar.tsx` → `site-header.tsx` (exports `SiteHeader`),
`components/stats-bar.tsx` → `trust-band.tsx` (exports `TrustBand`) — both offered as options in
the prompt. `services-pricing-section.tsx` and `how-it-works-section.tsx` kept their filenames
(rename wasn't offered for those two) but now export `ServiceScope` and `ProcessSteps`
respectively — file name no longer matches the export name for those two; flagging in case
that's worth reconciling in a later cleanup prompt.

**Two real bugs found and fixed during Playwright verification, worth knowing about for future
prompts using `Button`:** Tailwind's cascade order between an unprefixed utility class and a
conditionally-applied class targeting the *same* CSS property (e.g. `inline-flex` baked into a
shared component's base classes vs. a caller passing `hidden md:inline-flex` on top) is not
guaranteed to resolve in the caller's favor — it depends on Tailwind's internal stylesheet
generation order, not the order classes appear in the `className` string. This bit both the
header's compact-CTA sizing (fixed by adding a real `size` variant to `Button` instead of
overriding its padding/font-size via conflicting classes) and its responsive visibility (fixed
by wrapping `Button` in a plain `<div className="hidden md:block">` instead of passing
`hidden md:inline-flex` as `Button`'s own `className`, since `Button`'s base already hardcodes
`inline-flex` unconditionally). Rule of thumb going forward: never fight a shared component's
own base classes with a conflicting override on the same property — extend the component with a
real prop, or wrap it.

**Verified with Playwright** (not just `curl`) against a production build (`next build` +
`next start`), since this prompt's acceptance criteria are visual/layout-based: nav doesn't wrap
at 1366px or 768px, CTA never touches the viewport edge, all mobile tap targets measured at
exactly 44×44px (logo link, SQ/EN links, compact WhatsApp button), focus-visible outline
confirmed present across 9 sequential tab stops, hero CTA+helper text confirmed visible with no
overlap on a 390×844 viewport, and `/sq`→`/` /`/en` `<html lang>` behavior re-confirmed intact.

## 5. Summary

- Stack confirmed: Next.js 16 (App Router) / React 19 / Tailwind v4 (CSS-first, currently
  bridged to a legacy JS config) / TypeScript 6.
- Full `app/` + `components/` + `lib/` tree read and listed above; nothing renamed or missing
  as of this pass.
- `cursor.md` is likely the manual Prompt 1–8 will reference — flagging in case a different
  name/location is assumed.
- No i18n scaffolding exists yet; all copy is hardcoded English JSX.
- Two open design decisions sketched above (token consolidation, locale routing) — both need
  your sign-off before any component is touched.
- Nothing was deleted, rewritten, or restyled. Only `docs/rebuild-adaptation-plan.md` was
  created.
