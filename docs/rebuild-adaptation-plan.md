# Prago Rebuild — Adaptation Plan (Prompt 0: Discovery)

Read-only inventory. No application code was touched to produce this document.

## 1. Repository snapshot

| Item | Value |
| --- | --- |
| Next.js | ^16.2.6 (App Router, Turbopack) |
| React | ^19.2.6 |
| TypeScript | ^6.0.3 |
| Tailwind | ^4.3.0 (CSS-first `@theme`, plus a slimmed `tailwind.config.ts` for tokens with no CSS-first equivalent) |
| Framer Motion | **Not present.** `motion` (the current Motion One / Framer successor package, `^13.1.1`) is installed and used across nearly every component — see §4. |
| next/font | Used — `Fraunces` (`weight: "variable"`, `axes: ["opsz"]`) and `Inter` (`weight: ["400","500","600","700"]`), both in `app/[locale]/layout.tsx`. |
| Image config | `next.config.ts` is an empty `{}` — no `remotePatterns`, so no external image hosts are configured (Unsplash/pravatar already fully absent, matches the clean state Prompt 1 targets). |
| Locale routing | `middleware.ts` at repo root: rewrites `/`, `/privacy`, `/terms` → internal `/sq*`, redirects any `/sq*` request to `/` (308), leaves `/en*` alone. `app/[locale]/layout.tsx` owns `<html lang>`. This **matches the Prompt 2 spec exactly** — no discrepancy. |
| middleware.ts | Present, at repo root (not under `app/`). |

## 2. Section-by-section comparison against the locked spec

This is the important part. The repo is **far more built-out than the spec's own starting assumption** (Prompts 0–2.5's "before" state — fake AI copy, Unsplash images, stat counters — is long gone; that cleanup already happened in an earlier session). But the **visual implementation of Prompts 3–5 has drifted significantly** from the locked spec, through two later sessions that treated the brief as open for creative reinterpretation. Below is every component the spec names, with its actual current state.

### Global infrastructure (Prompts 1, 2, 2.5, 6, 7) — mostly matches, a few real drifts

| Spec requirement | Current state | Match? |
| --- | --- | --- |
| `lib/site-facts.ts` with url/whatsapp/email/instagram/feePercent/feeBasisSq/legalName/nipt/serviceAreaSq | Present, exact shape, **plus** `feeBasisEn` (not in spec, but a direct translation, needed since `/en` exists and the spec itself later requires English content in Prompt 6) | Match (with one reasonable addition) |
| `legalName`, `nipt`, `serviceAreaSq` real values | Still `"[INSERT ...]"` placeholders | **Unresolved blocker**, correctly left unguessed |
| `lib/site-copy.ts` real copy, locked | Present, fully populated, sq/en, matches the spec's quoted strings verbatim everywhere I can compare (hero, trust band, process, FAQ, pricing, final CTA, footer tagline) | Match |
| Shared WhatsApp helper, no component builds `wa.me` directly | `lib/whatsapp.ts` → `getWhatsAppUrl()`, single number, single message; `rg "wa.me"` → only that one file | Match |
| `track()` analytics wrapper, 3 events, no PII in payloads | `lib/analytics.ts`, exact event set (`cta_whatsapp_click`, `faq_open`, `language_switch`), console.debug-only, documented TODOs for provider/consent/pixel | Match |
| Tailwind tokens, no duplication between config/`@theme`/`:root` | Colors/fonts/shadow live only in `app/globals.css` `@theme`; `tailwind.config.ts` only holds `borderRadius`/`maxWidth`. No stray `:root` color block. | Match (already deduplicated) |
| Colors: vishnje/vishnje-dark/vishnje-soft/cream/sand/charcoal/stone | Present, exact hex values | Match |
| `maxWidth.content: "1200px"` | **`1280px`** | **Drift** |
| `borderRadius.card: "12px"`, `.hero: "20px"` | **`card: "22px"`, `hero` token removed and replaced with `panel: "32px"`, plus an unspecified `card-sm: "16px"`** | **Drift** |
| Section padding: desktop 112 / tablet 80 / mobile 64 | **72/96/128 (`compact`/`default` variants) — bumped twice across two sessions** | **Drift** |
| Button: 52px min-height, 24px padding, 12px radius | Height/padding match; **radius is `rounded-full` (pill), not 12px** | **Drift (radius only)** |
| Typography: H1/H2/H3 all **Fraunces 500** at the specified px/leading pairs | **All headings default to bold Inter (sans).** A new `AccentWord` component (`components/ui/accent-word.tsx`) renders one hand-picked word/phrase per heading in Fraunces italic — this two-typeface system does not exist in the spec at all. | **Major drift** |
| `app/[locale]/layout.tsx` + `middleware.ts` locale architecture | Exact match, described above | Match |
| Metadata, structured data, legal pages, a11y basics, performance cleanup (Prompt 7) | `robots.ts`, `sitemap.ts`, `structured-data.ts`, `/privacy`, `/terms` all present; skip link present; focus rings present | Appears to match — not re-audited line-by-line in this read-only pass |
| No Framer Motion / no motion unless required | **`motion` is a dependency and is used in: `Section` (scroll reveal), `Button` (hover/press spring), every card via `HoverLift`, `Hero` (entrance stagger + image scale), `FaqSection` (height animation), `SiteHeader` (mobile drawer), `ServiceScope`/tabs history.** This is systemic, not incidental. | **Major drift — spec explicitly says prefer removing it** |

### Prompt 3 sections — Header, Hero, TrustBand, WhyPrago, ServiceScope, ProcessSteps

| Section | Spec | Current (`components/*.tsx`) | Match? |
| --- | --- | --- | --- |
| **Header** | No hamburger, ever. Desktop: 76px, cream/94%, blur 14px, burgundy logo 42px, 5 nav links, SQ\|EN, one CTA. Mobile: 64px, logo + SQ/EN + compact WhatsApp button, no hamburger, no full-screen menu. | `site-header.tsx` now has a **hamburger button + full-screen `AnimatePresence` drawer** on mobile (built this session), replacing the compact WhatsApp icon button the spec requires. Desktop row otherwise close (76px desktop / 64px mobile heights match; nav labels match; but CTA button is now `rounded-full`, not the spec's implicit 12px). | **Major drift (hamburger)** |
| **Hero** | LOCKED composition: 720–760px photo, cream panel (max-w 560px, 48px padding, 20px radius) floating **over** the photo, left-aligned, vertically centered. Mobile: photo first (260–300px), then cream copy block. One CTA. No badges/floating UI/invented metrics. | `hero.tsx` was **fully rebuilt as an asymmetric 5/7 split** — text in a plain column, photo bleeding to the viewport edge in its own column, aspect-ratio driven (not 720–760px fixed), **plus two floating "status" chips** ("Booking confirmed", "Monthly report") anchored to the photo corner. This is exactly the "floating card collection" / "asymmetric split" the Global Rules name as forbidden substitutions. | **Major drift — locked composition replaced** |
| **TrustBand** | Dark burgundy, 3 columns desktop / stacked mobile, Lucide icons, exact copy, no numbers/stats/badges. | `trust-band.tsx`: **icons removed**, now plain typography with dividers. Copy and layout shape otherwise match. | **Minor drift (icons removed)** |
| **WhyPrago** | New section (id `why-prago`), PA PRAGO (6 loose/scattered tags) vs ME PRAGO (1 bordered container, 4 items), Fraunces 500 H2, **the only place this scattered-vs-organized language may appear**. | Exists as `problem-solution.tsx` (id `how-it-helps`, not `why-prago`), same PA/ME PRAGO concept and copy content very close to spec, but H2 is Inter (not Fraunces per the typography drift above), and the id differs from spec. | **Close — id/typography drift, concept intact** |
| **ServiceScope** | Exactly 3 cards, 3 equal columns desktop / stacked mobile, **real image above text in each card**, no tabs, no alternating rows, no full-bleed breaks. | `services-pricing-section.tsx` has been rebuilt twice: first as an interactive tabbed widget, now as **3 alternating image-left/image-right editorial rows** (one full-width row per service group). Neither state matches "3 equal columns, image above text." | **Major drift — locked composition replaced twice** |
| **ProcessSteps** | 3 horizontal steps desktop, vertical mobile, burgundy numerals, Fraunces titles, subtle connecting line, **no stagger/scroll animation**. | `how-it-works-section.tsx`: structure (numerals, horizontal/vertical split) matches; step titles were switched from Fraunces to bold Inter this session; `reveal={false}` is set explicitly so it does *not* scroll-animate (this one is deliberately exempted and correctly so). | **Minor drift (title typeface only)** |

**New section not in the spec's 13-section order at all:** `stay-story.tsx` — a full-bleed photo band with its own heading, inserted between WhyPrago and ServiceScope. The Global Rules forbid introducing new sections. This needs to be removed or explicitly re-authorized.

### Prompt 4 sections — BehindEveryStay, OwnerVisibility, Pricing

| Section | Spec | Current | Match? |
| --- | --- | --- | --- |
| **BehindEveryStay** | Lead text, then 5 **equal-weight** items, no photography, no bento, no cards. | `behind-every-stay.tsx`: went through a bordered-bento-with-varied-spans phase, now a plain divided list — the *current* state is actually close to equal-weight/no-cards, but it went through an explicitly-forbidden bento phase this session. | **Currently close, but unstable — flag for confirmation** |
| **OwnerVisibility** | id `reporting`, real screenshot only, exactly 4 items (Rezervimet/Të ardhurat/Kostot/Çështjet operative), desktop 58/42 split, caption, **no CTA**, no extra chrome. | `software-section.tsx`: wraps everything in a new `Panel` component (dark inset card, not in spec), added a browser-chrome-dots header bar over the screenshot (not in spec), the 4 items are rendered as a single muted dot-separated line rather than the spec's plain list. | **Drift — extra UI chrome (Panel, browser-chrome bar) not specified** |
| **Pricing** | Burgundy block, desktop left-20%/right-explanation, mobile DOM order H2→rule→20%→inclusions→CTA, no calculator/tiers. | `pricing.tsx`: structure matches (left numeral / right explanation, `flex-col-reverse` for correct mobile DOM order — this was actually built carefully to match Prompt 2's a11y intent). Numeral font changed from Fraunces to bold Inter this session (typography drift, consistent with the global one). | **Close — typography drift only** |

### Prompt 5 sections — FAQ, FinalCta, Footer, Floating WhatsApp

| Section | Spec | Current | Match? |
| --- | --- | --- | --- |
| **FAQ** | 6 questions, accessible accordion, `aria-expanded`/`aria-controls`/`role="region"`, first item open desktop, all closed mobile, **no animation required**. | `faq-section.tsx`: all 6 a11y attributes present and correct, first-open-desktop logic matches. Visual chrome changed from boxed/shadowed rows to a plain divided list (not objected to by spec, spec doesn't lock the visual chrome tightly). **Height animation added via Motion** — spec says "no animation required," not "forbidden," so this is a gray area worth flagging rather than a clear violation. | **Likely fine — one gray-area item (height animation)** |
| **FinalCta** | LOCKED two-column split: cream copy left, `final-cta.webp` right, desktop. Explicitly: **not** full-bleed, **not** dark overlay, **not** campaign frame, **not** centered text over photo. | `final-cta.tsx` was rebuilt this session into **exactly the forbidden pattern**: full-bleed photo, dark gradient scrim, centered/overlaid text block. This is a direct, named violation of the spec (the spec's forbidden list literally describes what's currently implemented). | **Major drift — directly contradicts an explicit prohibition** |
| **Footer** | Dark burgundy, **4 columns**: (1) logo+tagline, (2) phone/email/Instagram, (3) `serviceAreaSq`, (4) privacy/terms/English. Bottom bar: legalName, NIPT, © year. | `footer.tsx`: background flipped to light sand (not dark burgundy), **3 columns** (logo+tagline / contact / legal — no `serviceAreaSq` column), bottom bar only has © year, no legalName/NIPT line (though those are still placeholders anyway). | **Major drift — background, column count, missing legal bottom bar** |
| **Floating WhatsApp** | Mobile only, appears after hero CTA leaves viewport, hides when FinalCta enters, 16px inset, safe-area bottom, z-40, min 56px, label "WhatsApp · Vlerësimi". | `floating-whatsapp.tsx` — not touched by the last two redesign sessions; logic (IntersectionObserver on hero CTA + final-cta/footer) matches spec intent. | **Match** |

## 3. Duplicated token locations

None found. `app/globals.css`'s `@theme` block is the single source for colors/fonts/shadows; `tailwind.config.ts` only adds `borderRadius`/`maxWidth`, which have no `@theme` equivalent defined — no overlap. (The *values* of `borderRadius`/`maxWidth` have drifted from spec — see §2 — but there's no duplication bug.)

## 4. WhatsApp discrepancy

None. One helper (`lib/whatsapp.ts`), one number (`355686669060`), one message, every CTA site uses it. This matches Prompt 6 exactly and does not need rework.

## 5. Available / missing real assets

All 6 required WebP files are present in `public/images/website/`, non-zero, plausible sizes (28KB–87KB). `public/og/prago-owner-management-1200x630.jpg` (the final OG image, not the `-BASE` staging copy) is also present and already wired into metadata. No missing assets.

## 6. Dependencies that may become unused if the spec is enforced literally

- **`motion`** — the spec's Global Rule 7 says "prefer removing Framer Motion rather than preserving it for decorative animation." If Prompts 3–5 are re-executed to the locked spec (no stagger, no scroll reveal, no hover springs, no drawer animation), this dependency would have no remaining justified use and should be removed rather than kept half-used.
- Nothing else — `lucide-react` is used for the (spec-required) icons in TrustBand/Process/FAQ/etc.

## 7. Files that exist but aren't in the spec's component list at all

These were introduced during the two "redesign" sessions and have no counterpart in the locked spec:

- `components/stay-story.tsx` — new section, not in the 13-item locked order
- `components/ui/panel.tsx` — new primitive, used by OwnerVisibility (and previously ServiceScope)
- `components/ui/accent-word.tsx` — new primitive, the Fraunces-italic-accent-word system
- `components/ui/hover-lift.tsx` — new primitive, Motion-based hover wrapper
- `lib/accent-split.ts` — helper for `AccentWord`
- `lib/site-copy-new.ts` — a second copy file (outside the locked `lib/site-copy.ts`) holding hero UI-chip copy and the WhyPrago/StayStory copy

Global Rule 8 ("do not create new cards, pills, badges, tabs, modals, tooltips, floating panels, or other UI primitives unless the specification requires them") applies directly to `panel.tsx`, `accent-word.tsx`, and `hover-lift.tsx`.

## 8. Blockers requiring your decision

1. **legalName, NIPT, serviceAreaSq** — still placeholders. Needed for Footer (Prompt 5) and structured data.
2. **feeBasisSq/feeBasisEn verification** — the spec's Prompt 4 has a hard stop requiring these be checked against the actual signed management agreement before Pricing can be considered final. Not verified in this pass (read-only).
3. **The core question this discovery pass exists to raise**: given the scale of drift above, do you want me to **restore each Prompt-3/4/5 section to the exact locked spec** (cream-panel hero, 3-column services, dark 4-column footer, two-column FinalCta, Fraunces headings throughout, hamburger removed, Motion stripped back to "none unless required") — effectively reverting most of the last two sessions' visual work? That's what I'll do next, one prompt at a time with a screenshot/approval gate after each, unless you tell me otherwise before I start.

Not modified: no files deleted, renamed, or rewritten. No styles or routing changed. No packages installed. This document is the only file written in this pass.
