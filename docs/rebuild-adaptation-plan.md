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

## 8. Implemented in Prompt 4 (property story, owner visibility, pricing) — NOT YET COMMITTED

**Pending real assets (placeholder paths only, no image files created, zero stock imagery
used anywhere):**
- `public/images/website/case-01.webp` — PropertyStory's large image (left on desktop, first
  photo on mobile). Pending real Coastal Paradise photography.
- `public/images/website/case-02.webp`, `case-03.webp`, `case-04.webp` — the 2×2 grid's three
  general prep/process shots. Same pending status.
- `public/images/website/case-05-detail.webp` — the grid's fourth image, specifically a
  guest-ready *detail* crop (close-up of a finished/staged element) rather than another
  general prep shot — named separately so whoever supplies the real photo knows which shot
  goes here.
- `public/images/website/owner-report.webp` (1800×1125px) — OwnerVisibility's single
  screenshot. Pending the real, **redacted** monthly-report export from Arbri. Do not
  substitute a mocked-up dashboard in the meantime; the section renders with a broken-image
  placeholder until this lands, which is the intended state per the prompt.

**Copy additions:** `lib/site-copy.ts` gained `propertyStory`, `ownerVisibility`, and `pricing`
keys under `SITE_COPY.sq`, same pattern as Prompt 3 (locale prop wired on every component,
copy resolution currently `locale === "en" ? SITE_COPY.sq.x : SITE_COPY.sq.x` pending Prompt 6).
Pricing's "20%" is never hardcoded as a literal string — both the large decorative figure and
the H2 interpolate `SITE_FACTS.feePercent`, and the rule sentence renders `SITE_FACTS.feeBasisSq`
directly rather than a copy of it, so every "20%" on the page traces to the same two fields in
one file.

**Component API fix carried over from the Prompt 3 lesson:** `EyebrowLabel` had the same
hardcoded-base-class problem `Button` did (unconditional `text-stone` fighting a caller's
color override). Fixed the same way — a real `tone` prop (`stone` default, `cream` for
Pricing's burgundy background) instead of a conflicting className override.

**Reading-order technique:** PropertyStory, OwnerVisibility, and Pricing all need different
visual arrangements on mobile vs. desktop (e.g., Pricing's big "20%" figure appears first
visually on mobile but must stay *after* the H2/fee-rule in DOM order for screen readers, per
the prompt's explicit instruction). All three use a single non-duplicated DOM tree with
Tailwind's `order`/grid placement utilities to achieve this, rather than rendering two parallel
mobile/desktop copies of the content (the approach used for Hero/ProcessSteps in Prompt 3).
This avoids duplicate-id and duplicate-image-request issues and is the pattern to prefer going
forward when mobile and desktop need genuinely different structure, not just different sizing.

**Blocking item — did not commit, per the prompt's own "STOP before committing" instruction:**
Pricing's Rule and Disclosure text must be checked against the actual signed management
agreement. I have no access to that document — it isn't in this repository (searched for
`*agreement*`, `*contract*`, `*kontrat*`, found nothing) and wasn't provided in this
conversation. `feeBasisSq` in `lib/site-facts.ts` is unchanged from what Prompt 1 already
established as a locked site fact — I have not modified it, guessed at it, or verified it.
**Please confirm the fee rule and disclosure text are accurate before this ships**, or send me
the corrected wording and I'll update `feeBasisSq` (only that field, not the component) and
commit. Everything else in this prompt is built, verified (Playwright screenshots + the
required greps below), and ready — only this one field needs your sign-off.

**Verified:** `npm run build` + `npm run lint` clean; zero `unsplash`/`pravatar` matches; zero
`"from 20%"` matches in rendered output; every `"20%"` occurrence traces to
`SITE_FACTS.feePercent`/`feeBasisSq`; zero `Overview`/`Housekeeping`/`Maintenance` fake-tab
labels (one false-positive `calendar` match is just lucide's `CalendarCheck` icon CSS class);
zero named demo guests; Pricing's mobile DOM-vs-visual order confirmed via Playwright
(`h2Top: 5481.75` in DOM after, `figureTop: 5311.75` visually before).

## 9. Implemented in Prompt 5 (FAQ, final CTA, footer, floating WhatsApp)

**Pending real asset:** `public/images/website/final-cta.webp` — FinalCta's right-side photo.
Placeholder path only, same pattern as every other pending image in this rebuild.

**Two files deleted as dead code, both previously flagged as eventual cleanups:**
- `lib/constants.ts` — Prompt 1 explicitly left `SERVICE_CATEGORIES` and `FAQS` in place with
  a note that once their content migrated into `lib/site-copy.ts` (Prompt 3 did
  `SERVICE_CATEGORIES`, this prompt did `FAQS`), the whole file could go. Confirmed zero
  remaining imports (`CONTACT_PHONE`/`CONTACT_WHATSAPP`/`SERVICES` were already unused from
  earlier prompts) before deleting.
- `components/ui/accordion.tsx` — the prompt's opening instruction pointed at this file's
  "faq" variant as the thing to add ARIA to, but the acceptance criteria demanded
  `aria-expanded`/`aria-controls` grep-match **inside `components/faq-section.tsx` itself**,
  and the exact markup given (`id={faq-button-${index}}`, native `hidden` instead of animated
  height) didn't fit the shared component's generic `{label, description}` abstraction
  cleanly. Resolved by inlining the accordion directly into `faq-section.tsx` as a
  self-contained implementation, which left the shared `Accordion` (both its "faq" and the
  already-orphaned "software" variant) with zero remaining callers — deleted rather than left
  as unreferenced dead code.

**Routing extended, not just added to:** the footer's `/privacy` and `/terms` links needed to
resolve without 404ing per this prompt's explicit instruction, but they also needed to respect
the same "Albanian unprefixed, English under `/en`" rule as the homepage. Rather than special-
casing these two links, `middleware.ts`'s single `"/"` rewrite became a small
`SQ_ROOT_PATHS` list (`"/"`, `"/privacy"`, `"/terms"`) so the pattern generalizes to future
top-level pages too. `app/[locale]/privacy/page.tsx` and `app/[locale]/terms/page.tsx` are
minimal stub pages (heading + one placeholder sentence) — Prompt 7 replaces the content, the
routing/shell is already correct.

**Copy additions:** `faq`, `finalCta`, and `footer` keys added to `SITE_COPY.sq`. One thing I
added that wasn't in the locked copy tables: the FAQ section's heading text, "Pyetje të
shpeshta" ("Frequently asked questions") — every other section had an explicit H2/eyebrow in
its copy table, FAQ's table only had the 6 Q&A pairs. Chose a purely structural, non-marketing
label (mirrors the nav link "Pyetje") rather than leave the section headerless — flagging in
case you'd rather lock specific wording here.

**Footer still renders bracketed placeholders verbatim** — `SITE_FACTS.serviceAreaSq`,
`legalName`, and `nipt` are unchanged from Prompt 1's `[INSERT ...]` placeholders (per Prompt
1's explicit "do not invent values" instruction), so the live footer currently shows
`[INSERT CURRENT SERVICE AREA]`, `[INSERT EXACT REGISTERED NAME]`, and `[INSERT NIPT]`
literally. **This needs your input before the site ships** — same visibility as the fee-basis
check from Prompt 4, just three more fields.

**Verified:** `npm run build` + `npm run lint` clean; all of `/`, `/en`, `/privacy`, `/terms`,
`/en/privacy`, `/en/terms` return `200` (zero 404s), `/sq*` still redirects to `/`; FAQ verified
via Playwright — first item open on desktop / all closed on mobile, `aria-expanded` and the
`hidden` panel attribute both update synchronously on Enter and on Space, keyboard Tab reaches
all 6 buttons in sequence, opening an item causes zero `scrollWidth` change (no horizontal
shift); FloatingWhatsApp verified hidden while the hero CTA is in view, visible once scrolled
past it, and hidden again at both FinalCta and the footer — confirmed programmatically that no
footer-link overlap is possible since the button is already hidden by the time the footer
enters view.

## 10. Implemented in Prompt 6 (unified WhatsApp flow, analytics, English route)

**WhatsApp URL — flagged and confirmed before wiring:** the prompt's premise (that the repo
"currently points to" the old catalog link `wa.me/message/VMQY23EBVHNWM1`) was out of date —
that link was already removed in Prompt 1, and every CTA has used a plain
`wa.me/<digits>` link via `lib/whatsapp.ts` since Prompt 3. Flagged this to you before wiring
anything further; you confirmed proceeding with the exact number and prefilled message given.
`getWhatsAppUrl()` now returns `https://wa.me/355686669060?text=<encoded Albanian message>` —
**the same message on both locales**, per the prompt's explicit "every CTA must open the
identical prefilled message" instruction (not translated per-locale). Left a code comment
flagging this as worth revisiting: an English-page visitor currently gets an Albanian-language
WhatsApp prefill.

**Verified via Playwright, not just grep:** every `wa.me` link across both locales, both
viewport tiers (8 CTAs total per page — header ×2, hero ×2, process, pricing, final,
floating) is byte-identical to the expected URL. `grep -rn "wa.me"` confirms exactly one
constructor site (`lib/whatsapp.ts`).

**Analytics:** added `lib/analytics.ts` — no real provider wired (per instruction, a stub with
TODOs, not a new dependency), a discriminated-union `track()` so payload shapes are enforced
at the type level, dev-only `console.debug` output (silent no-op in production). Fired
`cta_whatsapp_click` from all 6 CTA positions, `faq_open` only on open (verified opening then
closing the same item logs exactly one call), `language_switch` from the header's SQ/EN links.
Spot-checked actual logged payloads in dev — confirmed no phone numbers, message text,
addresses, or filenames in any payload. Left explicit `TODO(legal)` (consent-gating — flagging
as a legal question for you, not deciding it) and `TODO(pixel)` (Meta Pixel Contact-not-Lead
behavior) comments rather than implementing either.

**RSC boundary fix required:** adding `onClick` handlers for `track()` broke the build —
`hero.tsx`, `how-it-works-section.tsx`, `pricing.tsx`, and `final-cta.tsx` were Server
Components, and Next.js can't serialize a function prop from a Server Component into `Button`
(a Client Component once it has interactive behavior). Added `"use client"` to all four; this
is expected and matches the pattern `site-header.tsx` and `floating-whatsapp.tsx` already used.

**English route:** `lib/site-copy.ts` now has a full `SITE_COPY.en` tree mirroring `sq`
(nav, hero, trustBand, serviceScope, process, propertyStory, ownerVisibility, pricing, faq,
finalCta, footer) — sentence-for-sentence translations of the locked Albanian copy, no
reintroduced AI-differentiator or earnings-claim language. Also translated every `alt` text
that was hardcoded Albanian (hero background, property-story images, owner-report screenshot,
final-cta photo) and localized the `/privacy`/`/terms` stub page headings — none of these were
explicitly listed as copy to translate, but leaving them Albanian-only on `/en` would have
violated the "no Albanian text on the English route" acceptance bar, so fixed them too.
`SITE_FACTS.feeBasisSq` (rendered directly by Pricing, locale-independent before this prompt)
now has a `feeBasisEn` sibling — a direct translation, not an independently drafted sentence;
same signed-agreement verification caveat as the Albanian original applies here, not yet
independently re-confirmed for the English wording specifically.

**Not changed:** `SITE_FACTS.serviceAreaSq`, `legalName`, and `nipt` are still the Prompt 1
bracketed placeholders and render identically on both locales — they're not real content yet,
so there's nothing to translate until you supply actual values (same open item as Prompt 5).
The header's `/en` link was already a normal working `Link` (never explicitly disabled in
earlier prompts) — now that the English route is genuinely complete, no separate "enable" step
was needed.

**Verified:** `npm run build` + `npm run lint` clean; `/` → `<html lang="sq">` with zero
English-marker text, `/en` → `<html lang="en">` with zero Albanian-marker text (checked via a
word-list sweep of `document.body.innerText`, not just spot-reading); Pricing's English fee
figure and rule render `SITE_FACTS.feeBasisEn` correctly.

## 11. Implemented in Prompt 7 (metadata, structured data, legal pages, accessibility, performance)

**Flagged before touching anything — missing photography would have broken the Lighthouse
gate:** `hero-main.webp`, `final-cta.webp`, `owner-report.webp`, and the five `case-*.webp`
files referenced since Prompts 3–5 were placeholder paths with no actual files behind them —
every one 404s. Fixing that honestly (no stock photos) meant either eating a failing
Performance/Best-Practices score or replacing the broken `<Image>` requests with a
non-network CSS placeholder. Asked and confirmed: swap to placeholders. Built
`components/ui/photo-placeholder.tsx` (sand block + a muted icon, `role="img"` with the same
`alt` text as a label) and used it in `hero.tsx`, `final-cta.tsx`, `property-story.tsx` (all
five images), and `software-section.tsx`. Each swap site keeps a `TODO` to revert to
`next/image` once real photography lands. Also deleted `public/images/hero.png` — an unused,
pre-rebuild stock villa photo that had no code reference left; leaving it in the repo ran
against the entire point of this rebuild even though nothing rendered it.

**Metadata (`app/[locale]/layout.tsx`):** added `metadataBase`, `alternates.canonical`
(`/` sq, `/en` en), `alternates.languages`, and a full `openGraph` block per locale. The sq
title/description now match the prompt's locked text exactly. The **en** title/description
were not given verbatim in this prompt, so translated them sentence-for-sentence from the sq
ones rather than leaving the old copy in place — the previous en description ("helps Albanian
property owners earn more with AI pricing, instant guest responses...") was exactly the
AI-differentiator/earnings-claim language Prompt 6 explicitly banned from `/en`, just sitting
in metadata instead of visible copy where nobody had checked it yet.

**Structured data (`lib/structured-data.ts`):** Organization + WebSite JSON-LD only, rendered
once in the layout `<body>`. No `aggregateRating`, `reviewCount`, `priceRange`, or
`employeeCount` — none of that is documented. No `BreadcrumbList`: the site is `/`, `/en`,
`/privacy`, `/terms` — not multi-page enough for breadcrumbs to mean anything, so skipped per
the prompt's own "use your judgment" allowance. **Known gap:** `legalName` and `serviceAreaSq`
are still the Prompt 1 bracketed placeholders, so the JSON-LD currently emits those placeholder
strings verbatim — not a new problem, just newly visible in a second place.

**Required pages:** `app/sitemap.ts` lists exactly the four URLs the prompt named (`/`, `/en`,
`/privacy`, `/terms` — not the `/en/privacy` and `/en/terms` variants, since those weren't in
the list). `app/robots.ts` allows `/` and points at the sitemap. `/privacy` and `/terms` were
rewritten from Prompt 5's placeholder stub text to real plain-language content in both locales
— contact-data use (WhatsApp-only, no site form), the honest current state of analytics (no
cookies, no third-party trackers, anonymous non-PII interaction events only — this matches
`lib/analytics.ts` exactly, not aspirational), retention, and rights on the privacy page;
company identification, the service, and — the one line that must never soften — the
preliminary-assessment-is-not-an-income-guarantee disclaimer on the terms page, mirroring the
same claim already locked into `finalCta.disclaimer` and the FAQ. **Both pages are drafts and
need Arbri/counsel review before being treated as final** — flagged in a code comment at the
top of each file rather than as user-visible "unreviewed draft" text on the live page.

**OG image:** `public/og/prago-owner-management-1200x630.jpg`, generated by rendering a small
branded HTML card (vishnje-dark background, the real burgundy logo file, the locked line "Ju
zotëroni pronën. Ne menaxhojmë çdo detaj.") and screenshotting it with Playwright at exactly
1200×630 — no stock photography, no fabricated content, just the existing real logo and
already-locked copy laid out as a card. Same image is reused for both locales' `openGraph`,
matching the single path/line the prompt specified.

**Accessibility:**
- Skip link (`#main-content`) added once in the layout, targets `<main id="main-content">` now
  present on all three page types.
- `nav` has a locale-aware `aria-label`.
- `TrustBand` had no visible heading and no `aria-labelledby` at all — added a visually-hidden
  (`sr-only`) `<h2>` (`trustBand.srHeading`, new copy field, not visible on the page) so it has
  a real heading relationship rather than just being an unnamed `<section>`. Left the Hero
  section and the privacy/terms intro section unlabelled on purpose — each already opens with
  the page's own `<h1>` as its first child, so naming the landmark separately would be
  redundant, not a gap.
- Confirmed exactly one visible `<h1>` per page at both mobile and desktop viewports — Hero
  renders two `HeroPanel` instances (desktop overlay + mobile block) but Tailwind's `hidden`
  utility removes the inactive one from the accessibility tree at each breakpoint, so only one
  is ever exposed at a time despite both existing in the DOM.
- Focus rings: bumped every `focus-visible:outline` from 2px to 3px, and made the color
  context-aware instead of hardcoded — `components/ui/button.tsx`'s `FOCUS_RING` is now keyed
  per variant (vishnje for the three light-background variants, cream for the `cream` variant
  used inside Pricing's burgundy section). Added rings that didn't exist before: the footer's
  six links (cream ring — they sit on `bg-vishnje-dark`), the floating WhatsApp button (cream
  ring), and the FAQ toggle buttons (vishnje ring, with a `-3px` offset instead of `+2px`
  because the button lives inside an `overflow-hidden` card — a positive offset would have been
  clipped and made the ring invisible).
- Footer's six links got `min-h-[44px]` plus `-mx-2 px-2` — `min-h` alone left "Terms"/"Shqip"
  at 38–41px wide, just under the 44px tap-target minimum; the negative-margin/padding pair
  adds width without shifting the visible text position.
- Grepped `8A8079` case-insensitively across the whole repo: zero matches, already fully
  replaced in Prompt 2 as recorded there.
- `prefers-reduced-motion` handling in `globals.css` is untouched since Prompt 2 and still
  covers every `transition`/`animation` added since (all of it is plain Tailwind `transition`
  utilities, nothing bespoke).

**Performance:**
- `next.config.ts` never had `images.remotePatterns` for `images.unsplash.com` or
  `i.pravatar.cc` in the first place — confirmed via grep that neither hostname appears
  anywhere in the repo, so there was nothing to remove.
- `framer-motion` and `simple-icons` were unused (zero imports anywhere) — removed from
  `package.json`, ran `npm install` to update the lockfile.
- With the photography swap above, the only remaining `next/image` usages are the two logos:
  header logo (`priority`, renders on every route) and footer logo (lazy, explicit
  `width`/`height`). The literal "only hero-main should have priority" instruction is now moot
  since hero-main isn't an `Image` anymore — left the header logo's `priority` as the
  reasonable stand-in LCP candidate across all pages including `/privacy` and `/terms`, which
  have no other imagery at all.
- `next/font` weights/display already correct since Prompt 2 — reconfirmed unchanged.

**Lighthouse (mobile, local production build, `npm run start`):**

| Page | Performance | Accessibility | Best Practices | SEO |
| --- | --- | --- | --- | --- |
| `/` (sq) | 96 | 100 | 100 | 100 |
| `/en` | 95 | 100 | 100 | 100 |
| `/privacy` (sq) | 96 | 100 | 100 | 100 |
| `/terms` (sq) | 96 | 100 | 100 | 100 |

All four categories clear the ≥90/≥95/≥95/≥95 targets on every page checked. The one real
finding along the way: the mobile step-number labels in `how-it-works-section.tsx`
(`text-vishnje/30` desktop, `text-vishnje/40` mobile) failed color-contrast at 2.24:1 against
the 3:1 minimum for large text — both bumped to `/60` (computed ~3.7–5.7:1 depending on size)
to clear it with margin.

**Not changed / still open:** `SITE_FACTS.legalName`, `nipt`, and `serviceAreaSq` are still
bracketed placeholders and now render in three places (footer, structured data, and the new
legal pages) instead of one — same open item as Prompts 1 and 5, just more visible surface
area until real values are supplied. `feeBasisEn` still hasn't been independently re-verified
against the signed management agreement (Prompt 6's caveat, unchanged). Privacy/terms content
is a draft pending Arbri/counsel review, not final legal text.

## 12. Prompt 8 — pre-production sign-off report

Every check below was actually executed against a fresh `npm run build` + `npm run start`
(production mode) on 2026-08-13, not inferred from memory or from what earlier prompts already
claimed. One real, previously-undetected bug was found and fixed along the way (see
"Functional checks" → sticky header). **This is a report only — nothing was pushed or
deployed.** The commit for the one fix below is still sitting locally, uncommitted, pending
your review (see "Outstanding blockers" at the end).

### Content search tests

Run with `rg` against both the shipped source tree (`app/ components/ lib/ public/` — `docs/`
and `cursor.md` excluded, since those are internal planning files that legitimately *quote* the
banned phrases as a record of what was removed, and never ship to a browser) and the actual
built HTML output (`.next/server/app/*.html`, the real static files Next.js serves).

**Must be absent — all four returned zero matches in both source and built output:**

```
$ rg -n "We run your property better|You keep 80%|We can prove it|Live AI activity" app components lib public
(no matches, exit 1)

$ rg -n "Simon Holland|Anna Hilson|Alex Merhige|Amber James|76.6%" app components lib public
(no matches, exit 1)

$ rg -n "images.unsplash.com|pravatar.cc|from 20%|pamjen e sezonalitetit" app components lib public
(no matches, exit 1)

$ rg -ni "8A8079" app components lib public
(no matches, exit 1)
```

Same four patterns re-run against `.next/server/app/*.html` (post-build, the literal bytes
served to a browser): all four again returned zero matches.

*For transparency:* the unscoped repo-wide version of these greps (including `docs/` and
`cursor.md`) does return matches — `cursor.md` (the original build brief) quotes the banned
hero copy verbatim as the thing that was removed, and `rebuild-adaptation-plan.md` quotes
`8A8079`/`images.unsplash.com` in its own audit trail of what got fixed and when. Neither file
is imported, rendered, or shipped by the app — confirmed by the same greps against
`app/ components/ lib/ public/` and the built HTML coming back clean.

**Must be present — both returned real matches in both source and built output:**

```
$ rg -n "Ju zotëroni pronën|4–5 foto|periudhat me më shumë kërkesë" app components lib public
lib/site-copy.ts:17:      h1: "Ju zotëroni pronën. Ne menaxhojmë çdo detaj.",
lib/site-copy.ts:20:      helper: "Na dërgoni vendndodhjen dhe 4–5 foto në WhatsApp."
lib/site-copy.ts:78:          body: "Na dërgoni vendndodhjen dhe 4–5 foto në WhatsApp."
lib/site-copy.ts:83:          body: "Vlerësojmë përshtatshmërinë, intervalin e çmimit për natë dhe periudhat me më shumë kërkesë."
lib/site-copy.ts:153:      body: "Na dërgoni vendndodhjen dhe 4–5 foto në WhatsApp. ..."

$ rg -n "aria-expanded|aria-controls|main-content" app components lib public
app/[locale]/page.tsx:20:      <main id="main-content">
app/[locale]/privacy/page.tsx:104:      <main id="main-content">
app/[locale]/layout.tsx:90:          href="#main-content"
components/faq-section.tsx:41:                  aria-expanded={openIndex === index}
components/faq-section.tsx:42:                  aria-controls={`faq-panel-${index}`}
app/[locale]/terms/page.tsx:107:      <main id="main-content">
```

Built-output match counts (per-file, confirming the same content survived into the static
HTML): `sq.html` has 2 matches for the first pattern (Albanian copy, correctly absent from
`en.html`); `main-content`/`aria-expanded`/`aria-controls` show up in all six rendered pages
(`sq.html`, `en.html`, `sq/privacy.html`, `sq/terms.html`, `en/privacy.html`, `en/terms.html`).

### Functional checks

**Header anchors vs. sticky header overlap — found and fixed a real bug.** Testing this
surfaced something none of the earlier per-prompt Playwright checks had actually caught: the
header claims `position: sticky` but **was not actually sticking during a real scroll.**
Root cause: `html`/`body` both had `overflow-x: hidden` in `globals.css` (added early in the
rebuild to suppress horizontal scroll) — and per the CSS spec, giving *either* axis a non-
`visible` overflow value turns that element into a scroll container, which breaks
`position: sticky` for any descendant. Confirmed with a direct test: `header.getBoundingClientRect().bottom`
after `scrollTo(0, 1000)` came back `-924` (i.e. scrolled away with the page) instead of `76`
(pinned). Fixed by swapping `overflow-x: hidden` → `overflow-x: clip` on both `html` and
`body` — `clip` suppresses horizontal overflow the same way but doesn't create a scroll
container, so it doesn't interfere with sticky positioning. Re-tested with a real
`page.mouse.wheel()` scroll (not just `scrollTo`) at both 1366×900 and 390×844: header now
stays pinned at `top: 0` after scrolling 2000px, and `document.documentElement.scrollWidth`
still exactly matches `window.innerWidth` at all four required viewports (no horizontal
scrollbar reintroduced).

Also bumped `scroll-padding-top` from 72px/60px to 88px/76px (the header is 76px on desktop,
64px on mobile — the old values were actually 4px *short* of clearing it, before the sticky
bug made that moot). Re-tested all 5 header anchors (`#services #process #reporting #pricing
#faq`) at 1366×900 after the fix: every target heading lands 12–33px below the header's
bottom edge, zero overlap.

**This fix is not yet committed** — it's a real, verified bug fix, but this prompt was scoped
as report-only and didn't include a commit instruction, so it's sitting in the working tree
pending your go-ahead (see "Outstanding blockers").

**Finding, not a bug — no mobile equivalent for header anchor links.** The desktop nav links
(Shërbimet / Si funksionon / Raportimi / Tarifa / Pyetje) are `hidden md:flex` — completely
absent from the DOM's visible/interactive surface below 768px, with no hamburger menu or other
mobile substitute. This was never explicitly specified in any prompt's acceptance criteria (no
prompt asked for a mobile nav menu), so it's not a regression — but it does mean "click every
header anchor on mobile" isn't literally possible today, since those links don't exist on
mobile. Flagging as a product decision, not silently adding a hamburger menu that wasn't asked
for.

**WhatsApp CTA consistency:** every *visible* `wa.me` link, checked at both 1366×900 and
390×844, on both `/` and `/en` — 5 visible links per page/viewport combination (count differs
from the "8 in the DOM" figure from Prompt 6's check because that count included both the
desktop- and mobile-only duplicate CTAs that exist simultaneously in the DOM; only one of each
pair is ever *visible* at a given viewport). All were byte-identical to
`https://wa.me/355686669060?text=P%C3%ABrsh%C3%ABndetje!%20Dua%20nj%C3%AB%20vler%C3%ABsim%20fillestar%20p%C3%ABr%20pron%C3%ABn%20time.`
across all four page/viewport combinations tested.

**Keyboard-only navigation:** Tabbed through the entire homepage — 25 stops, zero unreachable
elements, zero focus traps (confirmed by watching for a repeated element or an early fallback
to `<body>`; focus reached the last footer link cleanly and 5×`Shift+Tab` correctly walked
back toward the top). Order: skip link → logo → 5 nav links → EN toggle → header CTA → hero
CTA → process CTA → 6 FAQ buttons → final CTA → footer's 6 links. No modal, dropdown, or other
dismissible UI exists on this site, so Escape has nothing to test against — not applicable
here, not skipped.

**FAQ `aria-expanded` — verified via Playwright's `ariaSnapshot()` (the actual computed
accessibility tree), not just the raw DOM attribute:**
```
Enter on a closed item  → - button "A mund ta përdor pronën kur dua?" [expanded]
Space on that same item → - button "A mund ta përdor pronën kur dua?"        (collapsed again)
Space again              → - button "A mund ta përdor pronën kur dua?" [expanded]
```
Cross-checked against the DOM at the final state: `aria-expanded="true"`,
`aria-controls="faq-panel-2"`, the panel exists and its `hidden` attribute is correctly absent.
Both Enter and Space toggle correctly; the accessibility tree's `[expanded]` marker tracks the
DOM attribute exactly.

**JavaScript disabled** (`javaScriptEnabled: false` context, not just DevTools throttling):
`<h1>`, the hero body copy, the "20%" pricing figure, the FAQ question text, and the footer
email are all present in `document.body.innerText` with zero JS. All 8 `wa.me` links (both
desktop/mobile duplicates for every CTA position) are present in the DOM and identical — since
`Button` renders a real `<a href>` via `next/link`, the links work with JS off; `onClick` is
purely an analytics progressive-enhancement, not a requirement for the link to function.
**One real gap:** the FAQ answer *text* is present in the raw HTML (each panel is
server-rendered with the `hidden` attribute, not stripped), but with JS disabled there is no
way to actually toggle a panel open — `hidden` never gets removed without the `onClick`
handler. A no-JS visitor can read every question but can't reveal any answer. This is a common,
accepted trade-off for a disclosure widget (virtually no real visitor browses with JS off, and
Google's crawler executes JS), so I'm flagging it as a known minor gap, not blocking on it.

**Slow 4G throttle (CDP `Network.emulateNetworkConditions`, 1.6 Mbps down / 150ms RTT) at
390×844:** the initial HTML document (which already contains the server-rendered `<h1>` and
hero copy) arrives at +169ms. Every other early request is a JS chunk, a font file, or the
71×256px header logo — there is exactly **one** image request in the entire load, and it's the
tiny priority-loaded logo. There are zero below-the-fold media requests to race against,
because every case-study/hero/report image is currently a CSS placeholder with no network
request at all (see Prompt 7). This test technically passes, but the honest framing is that it
passes *because* there's no real photography yet, not because of deliberate lazy-loading
engineering — worth re-testing once real images are wired in.

**Open Graph / canonical / hreflang / structured data against a deployed preview — blocked,
not run.** `git status` shows `origin/main` is **5 commits behind local `main`** — nothing
since Prompt 1 (`e0aaa6d`) has ever been pushed to GitHub, there's no `.vercel` directory, no
Vercel/Netlify config file, and no CI/CD workflow anywhere in the repo. There is no deployed
preview URL of any kind to run a validator against. I verified the tags are *present and
well-formed* locally (`rel="canonical"`, `hrefLang="sq-AL"`/`"en"`, the `og:*` meta tags, and
the JSON-LD block all appear correctly in the built HTML — see Prompt 7's write-up), but
"present in local HTML" and "validated against a live URL by an external tool" are different
claims, and this prompt is explicit that only the latter counts. **This item cannot pass until
the site is actually deployed somewhere** — that's a decision (hosting provider, domain
cutover timing) outside this prompt's scope.

### Required viewport screenshots

Captured full-page screenshots at all four required sizes against the homepage
(`/`, production build). All four: **zero horizontal overflow**
(`document.documentElement.scrollWidth === window.innerWidth` exactly, confirmed
programmatically, not just visually) and no overlapping/clipped content on inspection.

| Viewport | Result |
| --- | --- |
| 390×844 | Clean. Single-column throughout, no overflow. |
| 430×932 | Clean. Same layout as 390, no overflow. |
| 768×1024 | Clean. Desktop nav (`md:flex`) is visible here; ProcessSteps and PropertyStory still render their stacked/mobile layout since those switch at `lg` (1024px) — intentional breakpoint choice from Prompt 3/4, not a bug. |
| 1366×768 | Clean. Full desktop layout, 3-column ServiceScope grid, 2×2 PropertyStory image grid. Footer's placeholder brackets (`[INSERT CURRENT SERVICE AREA]`, `[INSERT EXACT REGISTERED NAME]`, `[INSERT NIPT]`) are plainly visible at this size — flagging since it's the clearest confirmation that these are still live on the page, not just present in code. |

### Final sign-off checklist

**Every published claim is true, current, and explainable.** With the current copy (locked
across Prompts 1–7) and zero fabricated stats/names/dashboards left in the source (confirmed
above), I have no specific claim I'd flag as unverifiable *in wording* — but two claims'
*factual basis* depends entirely on documents I've never seen (below). Everything else
(process steps, service scope, FAQ answers, disclaimers) describes Prago's actual operating
model as given across the locked copy tables, not a marketing invention.

**The fee sentence matches the signed management agreement — checking the actual history, not
re-asserting it.** Reading back through this file: §8 (Prompt 4) explicitly did **not** commit
Pricing until this was confirmed — "I have no access to that document... Please confirm the
fee rule and disclosure text are accurate before this ships." That confirmation happened in
conversation (you answered "Yes, matches exactly — commit as-is" before I made the Prompt 4
commit), but — and this is a real gap I found while writing this report — **the confirmation
was never actually written back into this file.** §8 and §9 both still read as if the question
is open. I confirmed via `git log --all -p -- lib/site-facts.ts` that `feeBasisSq` has not
changed at all since it was first introduced in the Prompt 1 commit (`dbcf49b`) — consistent
with "matches exactly, commit as-is, no wording change needed" rather than a silent edit. So:
yes, this was verified by you, not just copy-pasted from the manual — but I'm flagging the
documentation gap so it doesn't look like an open question to whoever reads this file next.
`feeBasisEn` (added in Prompt 6) is a direct translation of the already-confirmed `feeBasisSq`
and has **not** been independently re-confirmed on its own English wording — that part is
genuinely still open.

**Property/operations images approved for publication:** none are live to approve. As of
Prompt 7, `hero-main`, `final-cta`, `owner-report`, and all five `case-*` images were replaced
with a non-photographic CSS placeholder (see `components/ui/photo-placeholder.tsx`) because the
files never existed. `public/` currently contains exactly three image files: the two real logo
JPEGs (already-approved brand assets) and the OG card I generated from the real logo + locked
tagline (Prompt 7). **Zero property/operations photography is live on the site today** —
nothing to approve, but also nothing pending review; it's all still pending *supply* from you.

**No private guest/owner/booking/property data visible, including at full resolution on the
owner-report screenshot:** not applicable — there is no owner-report screenshot on the site
(placeholder only, see above). Nothing to check because nothing is there yet. This will need
re-checking for real once you supply the redacted export.

**`/en` contains none of the old removed Albanian-page claims:** re-checked directly (not
relying on Prompt 6's earlier pass) — searched the live rendered `/en`, `/en/privacy`, and
`/en/terms` pages' full body text *and* metadata (title + description) for every old
AI-differentiator/earnings-claim phrase (`AI-powered`, `AI pricing`, `earn more`, `24/7 guest`,
`smart pricing`, `spotless turnover`, `You keep 80`, `We handle everything else`, `managed
end-to-end by AI`, plus the three hero/proof lines from the absent-group test). All three pages
came back clean.

**Legal pages identify the correct business entity — this cannot pass yet.**
`SITE_FACTS.legalName` is still `"[INSERT EXACT REGISTERED NAME]"` and `nipt` is still
`"[INSERT NIPT]"` — both literal bracket placeholders, confirmed by reading `lib/site-facts.ts`
directly just now. `/privacy` and `/terms` both interpolate these into sentences like
`"${SITE_FACTS.legalName} (NIPT ${SITE_FACTS.nipt}), operating as 'Prago'..."`, so both legal
pages currently render the bracket text verbatim, on the live page, in a legal document. **This
is a hard blocker** — per the prompt's own instruction, this checklist item cannot pass while
these are placeholders, full stop.

**Tested against a deployed preview, not only local dev:** no. Confirmed above — nothing has
been pushed since Prompt 1, no deployment exists anywhere. Every check in this report ran
against a local production build (`npm run build` + `npm run start`), which is the most
rigorous thing available without a deployment, but it is not the same claim as "tested against
a deployed preview."

### Outstanding blockers before this can go to production

Everything below is either waiting on you or requires an action (deploying) that this prompt
explicitly said not to take:

1. **`SITE_FACTS.legalName` and `nipt`** — still bracketed placeholders, rendering verbatim on
   the live `/privacy` and `/terms` pages right now. Blocks the "legal pages identify the
   correct entity" checklist item outright.
2. **`SITE_FACTS.serviceAreaSq`** — still a bracketed placeholder, rendering on the footer and
   inside the Organization JSON-LD.
3. **Real photography** — hero background, the 5 Coastal Paradise case-study images, and the
   final-CTA photo. All currently non-photographic placeholders; zero real property photos are
   live anywhere on the site.
4. **The owner-report screenshot** — needs the real, redacted monthly-report export from you.
   Currently a placeholder; the "no private data visible" check can't be meaningfully run until
   this exists.
5. **The fee-sentence contract check** — `feeBasisSq` itself was confirmed against the signed
   agreement (verbally, in conversation, before the Prompt 4 commit — see above), but that
   confirmation was never written into this file until now, and `feeBasisEn`'s English wording
   specifically has not been independently re-confirmed.
6. **The WhatsApp catalog-link-vs-plain-number decision** — resolved in Prompt 6 (you confirmed
   the plain numbered link with the prefilled Albanian message); no longer open, listed here
   only because the prompt asked for it explicitly.
7. **No deployment exists.** `origin/main` is 5 commits behind local `main`. The OG/canonical/
   hreflang/structured-data validator check cannot run, and "tested against a deployed preview"
   cannot pass, until this repo is pushed and deployed somewhere.
8. **One uncommitted fix from this session:** `app/globals.css` — `overflow-x: hidden` →
   `overflow-x: clip` on `html`/`body` (fixes the sticky header not actually sticking during
   scroll) and `scroll-padding-top` 72/60px → 88/76px (clears the header's real height with a
   margin instead of falling 4px short). Verified working; not committed since this prompt
   didn't include a commit instruction — needs your go-ahead.
9. **Privacy/terms content is a draft** pending your or counsel's review — not final legal
   text, even setting aside the entity-name placeholders above.
10. **No mobile equivalent for the header's in-page nav links** — not a regression against any
    prompt's spec, but worth a product decision: ship as-is (WhatsApp CTA + scroll is the only
    mobile navigation), or add a mobile menu.

**Not a blocker, already clean:** every content search test (absent and present groups),
WhatsApp CTA consistency, keyboard navigation, FAQ accessibility tree behavior, essential
content with JS disabled, Slow-4G load order, all four required viewports, and the sticky-
header bug (now fixed, pending commit).

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
