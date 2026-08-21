Yes. I’d tighten it **without changing the actual product direction**. The main goal is to remove Claude’s freedom to reinterpret the design.

Below is the version I would actually use with Claude Code.

---

# Prago Website Rebuild — Claude Code Implementation Plan

## How to use this

Run the prompts **one at a time**, in order.

After each prompt:

1. Claude inspects the current state.
2. Claude implements **only that prompt**.
3. Claude runs the required checks.
4. Claude reports anything that could not be verified.
5. Claude commits the changes.
6. Claude stops.

**Do not let Claude continue automatically to the next prompt.**

The implementation manual is the source of truth. Claude is implementing the design, not redesigning it.

---

# GLOBAL RULES — READ BEFORE EVERY PROMPT

Add this before Prompt 0 and treat it as binding for the entire rebuild.

```text
# PRAGO IMPLEMENTATION RULES — NON-NEGOTIABLE

You are implementing an already-decided website design.

This is NOT a visual redesign exercise.

Your job is to translate the specification into production code as faithfully as possible.

## 1. DO NOT REINTERPRET THE DESIGN

Do not:
- invent a new layout
- create an alternative composition
- "improve" the visual hierarchy
- replace a specified layout with an editorial layout
- replace cards with full-bleed photography
- replace grids with alternating rows
- replace a hero panel with an asymmetric split
- remove specified elements because you consider them unnecessary
- merge sections
- split sections unless explicitly instructed
- reorder sections
- introduce new sections
- change the section's visual role
- introduce decorative UI that is not specified
- add fake dashboards, metrics, badges, stickers, floating cards, chips,
  diagrams, activity feeds, or invented proof
- add "premium", "editorial", "campaign", "luxury", "minimal",
  "Swiss", "Intercom-like", or other aesthetic reinterpretations

If the specification says "3-column cards", implement 3-column cards.

If it says "cream panel over hero image", implement a cream panel over the hero image.

If it says "photo above text", keep the photo above the text.

If it says "horizontal steps", keep them horizontal on desktop.

Do not substitute a different composition because you believe it looks better.

## 2. NO CREATIVE DECISIONS

Do not make visual decisions on my behalf.

If something is ambiguous:
- do not guess
- do not creatively resolve it
- do not redesign around it

Stop and report the ambiguity.

Implementation-level decisions are allowed only when they do not materially
change the visible design, hierarchy, spacing, content, or behavior.

## 3. PRESERVE THE SPECIFIED SECTION ORDER

The homepage order is locked:

1. Header
2. Hero
3. TrustBand
4. WhyPrago
5. ServiceScope
6. ProcessSteps
7. BehindEveryStay
8. OwnerVisibility
9. Pricing
10. FAQ
11. FinalCta
12. Footer
13. Mobile Floating WhatsApp

Do not change this order.

## 4. WHYPRAGO IS THE ONLY "SCATTERED VS ORGANIZED" VISUAL

The "PA PRAGO / ME PRAGO" scattered-vs-organized visual language belongs
ONLY to WhyPrago.

Do not propagate this treatment to Services, Operations, Pricing,
OwnerVisibility, or any other section.

## 5. REAL ASSETS ONLY

Never invent:
- property photography
- owner reports
- dashboards
- guest names
- booking information
- ratings
- revenue figures
- occupancy figures
- response-time claims
- testimonials
- logos
- business statistics

If a required asset is missing, use the explicitly specified placeholder
path and stop at the required review gate.

Never substitute stock photography.

## 6. COPY IS LOCKED

When copy is marked "locked", reproduce it exactly.

Do not:
- rewrite it
- shorten it
- make it more persuasive
- change punctuation
- translate it differently
- add marketing claims

If copy needs changing, report it instead of changing it.

## 7. DO NOT ADD MOTION

Do not add:
- scroll reveals
- parallax
- stagger animations
- floating animations
- automatic carousels
- animated counters
- decorative transitions

unless explicitly required by this specification.

Prefer removing Framer Motion rather than preserving it for decorative animation.

## 8. DO NOT ADD UI PRIMITIVES WITHOUT A REQUIREMENT

Do not create new cards, pills, badges, tabs, modals, tooltips,
floating panels, or other UI primitives unless the specification requires them.

## 9. CODE QUALITY

Follow the existing repository conventions where they do not conflict with
this specification.

Avoid unnecessary refactors.

Do not rename files unless the prompt explicitly tells you to.

Do not modify unrelated components.

Do not upgrade dependencies.

Do not introduce new dependencies unless explicitly required.

## 10. STOP CONDITIONS

If:
- a required real asset is unavailable
- legal information is unknown
- the WhatsApp destination is ambiguous
- the management-fee wording cannot be verified
- the existing architecture contradicts the specification
- two requirements conflict

STOP and report the issue.

Do not silently invent a solution.

## 11. VISUAL REGRESSION RULE

After every major visual prompt, inspect the page at the specified viewports.

If the implementation technically works but materially changes the specified
composition, consider it a failure and correct it.

"Looks better" is not a valid reason to change the specification.

## 12. COMPLETION RULE

When the prompt is complete:
- run its required tests
- report exactly what changed
- report anything unverifiable
- commit
- STOP

Do not start the next prompt.
```

---

# Prompt 0 — Discovery + Adaptation Plan

```text
You are working in the prago.al Next.js repository.

IMPORTANT:
Read the GLOBAL PRAGO IMPLEMENTATION RULES before doing anything.

This prompt is READ-ONLY except for creating:
docs/rebuild-adaptation-plan.md

Do not modify application code.

1. Inspect:
- package.json
- app/
- components/
- lib/
- public/
- tailwind.config.ts
- app/globals.css
- next.config.ts
- tsconfig.json
- middleware.ts if present

2. Confirm the actual:
- Next.js version
- React version
- TypeScript version
- Tailwind version
- Framer Motion usage
- next/font usage
- image configuration
- current locale/routing architecture

3. Compare the repository against the implementation plan I am about to execute.

For every referenced file, report:
- exists / missing
- current purpose
- whether it approximately matches the expected state
- any important discrepancy

Do not silently adapt the plan.

4. Specifically investigate:

A. Tailwind tokens

Confirm whether colors are duplicated between:
- tailwind.config.ts
- @theme in app/globals.css
- :root CSS variables

Document the safest implementation approach.

B. Locale architecture

Determine how to implement:

/
→ Albanian
/en
→ English

with:

/
<html lang="sq">

/en
<html lang="en">

The browser URL must NOT expose /sq.

Document the exact proposed app structure and middleware behavior.

C. WhatsApp

Find every existing WhatsApp URL.

Report:
- current catalog URL
- current phone number, if present
- every component currently referencing WhatsApp

Do not change any URL.

D. Real assets

Check whether these already exist:

public/images/website/hero-main.webp
public/images/website/service-listing.webp
public/images/website/service-guests.webp
public/images/website/service-operations.webp
public/images/website/final-cta.webp
public/images/website/owner-report.webp

Also check for the OG image.

5. Write docs/rebuild-adaptation-plan.md.

The document must contain:

- repository snapshot
- discrepancies
- proposed locale architecture
- duplicated token locations
- WhatsApp discrepancy
- available/missing assets
- dependencies that may become unused
- blockers requiring my decision

6. Do not:
- delete files
- rename files
- rewrite components
- change styles
- change routing
- install packages

7. Stop and summarize findings.
```

---

# Prompt 1 — Cleanup

The original Prompt 1 is mostly good. I would tighten it like this:

```text
Goal:
Remove only the explicitly identified fake, misleading, obsolete, and
non-functional elements.

Do not redesign anything.

Do not rebuild any section.

Do not improve spacing or typography.

Do not add replacement UI.

1. Create lib/site-facts.ts with:

url: "https://www.prago.al"
whatsappDisplay: "+355 68 666 9060"
whatsappDigits: "355686669060"
email: "stay@prago.al"
instagram: "https://www.instagram.com/prago.al/"
feePercent: 20
feeBasisSq: "Tarifa e menaxhimit është 20% e të ardhurave nga rezervimet, e llogaritur pas zbritjes së komisioneve të platformës dhe kostos së pastrimit."
legalName: "[INSERT EXACT REGISTERED NAME]"
nipt: "[INSERT NIPT]"
serviceAreaSq: "[INSERT CURRENT SERVICE AREA]"

Export as const.

Do not invent placeholder values.

2. Create lib/site-copy.ts.

For now:
export const siteCopy = {} as const;

Do not migrate copy yet.

3. Delete ONLY:

components/calendar-mockup-section.tsx
components/income-section.tsx
components/ai-difference-section.tsx
components/audience-section.tsx
components/multi-platform-section.tsx
components/ui/phone-mockup.tsx
components/ui/stat-counter.tsx
components/ui/platform-badge.tsx
lib/platform-icons.ts

4. Strip the bedroom estimate form and camera badge from hero.tsx.

Do not redesign hero.tsx.

5. Remove the STATS rendering from stats-bar.tsx.

Leave a minimal component so the build remains valid.

6. Remove the old estimate form from estimate-section.tsx.

Leave a minimal component.

7. Remove all Unsplash/pravatar references.

8. Remove obsolete constants:
STATS
AUDIENCE_TABS
SOFTWARE_ACCORDION
AI_FEED_MESSAGES
AI_FEATURES
INTERIOR_PHOTOS
HERO_IMAGE

Do not remove SERVICE_CATEGORIES or FAQS yet.

9. Remove deleted component imports/usages.

10. Run:
npm run build

Fix only errors caused by this prompt.

Do not refactor unrelated code.

11. Run:

rg -n "AI-powered property management|We run your property better than you do|You keep 80%|Find out how much you can earn|Book a free consultation|Simon Holland|Anna Hilson|Alex Merhige|76.6%|images.unsplash.com|pravatar.cc|i.pravatar.cc"

Expected: zero matches.

12. Commit:

Remove unverified proof and non-functional conversion elements

STOP.
```

---

# Prompt 2 — Foundation

The important change here is **do not let Claude redesign while creating the skeleton**.

```text
Goal:
Lock design tokens, typography, spacing, and locale architecture.

This prompt is infrastructure only.

Do not build the final visual sections.

Do not redesign components.

Do not add visual polish.

1. Update BOTH:
- tailwind.config.ts
- app/globals.css @theme

with:

vishnje: #6E1A2B
vishnje-dark: #4E0F1E
vishnje-soft: #8A2738
cream: #FAF6F1
sand: #E8DDD0
charcoal: #1C1917
stone: #6F655F

Remove booking-blue only after confirming no remaining usage.

Update the duplicated :root variables as well.

2. Add:

maxWidth:
content: "1200px"

borderRadius:
card: "12px"
hero: "20px"

3. Update section.tsx:

desktop horizontal: 32px
tablet horizontal: 24px
mobile horizontal: 20px

desktop vertical: 112px
tablet vertical: 80px
mobile vertical: 64px

Use max-w-content.

Do not change the visual behavior beyond these specified values.

4. Update button.tsx:

minimum height: 52px
horizontal padding: 24px
radius: 12px

5. Typography:

H1:
64/68 desktop
52/56 tablet
38/42 mobile
Fraunces 500

H2:
48/52 desktop
40/44 tablet
32/36 mobile
Fraunces 500

H3:
30/36 desktop
26/32 tablet
24/30 mobile
Fraunces 500

Body:
18/30 desktop
17/28 tablet
17/27 mobile

Label:
13/18
Inter 600

Centralize these tokens.

Do not individually invent typography per component.

6. Locale architecture:

Use:

app/
  [locale]/
    layout.tsx
    page.tsx

and middleware.ts.

Move the actual <html> ownership into [locale]/layout.tsx.

Do not leave a competing layout responsible for <html lang>.

Supported locales:
sq
en

generateStaticParams must provide both.

Middleware behavior:

/
→ internally resolve to sq
→ browser remains /

/en
→ resolve to en
→ browser remains /en

/sq
→ must not become a public canonical URL.
Choose redirect-to-/ and document that choice.

7. Temporarily render:

Albanian homepage

English homepage

Nothing else.

8. Verify:

curl /
contains <html lang="sq">

curl /en
contains <html lang="en">

/sq does not become a third canonical page.

9. Commit:

Lock design tokens and set up locale routing skeleton

STOP.
```

---

# Prompt 2.5 — Real Assets

I would absolutely move this earlier.

```text
Goal:
Place the real Prago assets BEFORE any major visual implementation.

Do not modify section layouts.

Do not redesign anything.

SOURCE_DIR = "<INSERT LOCAL SOURCE DIRECTORY>"

Copy:

hero-main.webp
service-listing.webp
service-guests.webp
service-operations.webp
final-cta.webp
owner-report.webp

to:

public/images/website/

Also copy the OG base image to:

public/og/prago-owner-management-1200x630-BASE.jpg

Do not use the OG image in metadata yet.

Verify:
- all six WEBP files exist
- none are zero bytes
- dimensions are valid
- file sizes are reasonable
- paths are exactly correct

Do not rename them.

Do not optimize/recompress them.

Do not alter the images.

Commit:

Place real Prago website assets

STOP.
```

---

# Prompt 3 — Header + Hero + Trust + WhyPrago + Services + Process

This is where I would be **very strict**.

```text
Goal:
Implement ONLY these six homepage sections:

1. Header
2. Hero
3. TrustBand
4. WhyPrago
5. ServiceScope
6. ProcessSteps

Do not implement later sections.

Do not redesign the specified compositions.

Do not introduce alternative layouts.

Do not create additional sections.

==================================================
A. HEADER
==================================================

Keep components/navbar.tsx.

Desktop:
- sticky
- top 0
- z-index 50
- 76px height
- cream at 94% opacity
- backdrop blur 14px
- burgundy logo, 42px
- logo links to locale homepage

Navigation:

Shërbimet → #services
Si funksionon → #process
Raportimi → #reporting
Tarifa → #pricing
Pyetje → #faq

Language:
SQ | EN

CTA:
Vlerësimi fillestar

No:
- phone pill
- outline WhatsApp button
- secondary CTA
- hamburger

Mobile:
- 64px
- logo left
- SQ/EN
- compact WhatsApp button right
- no hamburger
- no full-screen menu

Do not invent another navigation pattern.

==================================================
B. HERO
==================================================

THIS COMPOSITION IS LOCKED.

Desktop:

A 720–760px high hero photograph.

The photograph spans the hero area.

Inside the 1200px content container:

A cream content panel sits OVER the photograph.

Panel:
- left aligned
- max width 560px
- padding 48px
- radius 20px
- vertically centered

Do NOT turn this into:
- asymmetric split
- editorial layout
- side-by-side text/photo columns
- full-screen text section
- floating card collection

The cream panel over the photograph is intentional.

Image:
public/images/website/hero-main.webp

next/image:
fill
priority
object-cover

Copy exactly:

Eyebrow:
MENAXHIM PROFESIONAL I QIRAVE AFATSHKURTRA

H1:
Ju zotëroni pronën. Ne menaxhojmë çdo detaj.

Body:
Nga çmimi dhe rezervimet, te komunikimi me vizitorët, pastrimi dhe mirëmbajtja — me ekip lokal dhe raportim të qartë.

CTA:
MERRNI VLERËSIMIN FILLESTAR

Helper:
Na dërgoni vendndodhjen dhe 4–5 foto në WhatsApp.

Only one CTA.

No:
- badges
- stickers
- floating statistics
- invented metrics
- disclaimer overlays
- fake booking notifications
- fake status cards

Mobile:

Photo FIRST.

Photo:
100% width
260–300px height
object-cover

Then cream copy area:
20px horizontal padding
36px top/bottom

H1 + body + CTA + helper must fit within first 850px at 390×844.

CTA:
100% width
minimum 52px

==================================================
C. TRUSTBAND
==================================================

Dark burgundy background.

Three equal columns desktop.

One vertical list mobile.

Exactly:

Ekip lokal në terren
Një ekip që ndjek pronën, jo vetëm rezervimin.

Raportim i qartë për pronarin
Rezervimet, të ardhurat dhe çështjet operative në një pasqyrë të kuptueshme.

Menaxhim nga fillimi në fund
Nga listimi dhe çmimi, te pastrimi, kujdesi dhe komunikimi me vizitorët.

Use only simple 24px Lucide line icons.

No numbers.

No statistics.

No ratings.

No badges.

==================================================
D. WHYPRAGO
==================================================

This is the ONLY section using the scattered-vs-organized visual language.

id:
why-prago

Eyebrow:
PSE PRAGO

H2:
Një pronë nuk duhet të bëhet një punë e dytë.

H2 MUST use Fraunces 500.

Desktop:
two columns.

Left:
PA PRAGO

Six deliberately loose/scattered tags:

Mesazh në WhatsApp
Njoftim rezervimi
Kërkesë pastrimi
Mesazh vizitori
Çështje mirëmbajtjeje
Vendim çmimi

Right:
ME PRAGO

One bordered container containing:

Rezervimet
Të ardhurat
Statusi i pronës
Raportimi

Do not turn this into a diagram.

Do not add arrows.

Do not add another illustration.

Do not use this scattered/tag aesthetic elsewhere.

==================================================
E. SERVICES
==================================================

id:
services

aria-labelledby:
services-title

Title:
Çdo detaj që kërkon një qëndrim i mirë.

Intro:
Prago koordinon punën pas rezervimit, jo vetëm praninë e pronës në platforma.

EXACTLY THREE SERVICE CARDS.

Desktop:
three equal columns.

Mobile:
one stacked column.

Each card:
real image ABOVE text.

Images:

LISTIMI & ÇMIMI
/images/website/service-listing.webp

VIZITORËT & REZERVIMET
/images/website/service-guests.webp

PRONA & OPERACIONET
/images/website/service-operations.webp

Copy:

LISTIMI & ÇMIMI
- Përgatitja e listimit dhe fotografive
- Çmimi për natë i përshtatur sipas kërkesës
- Menaxhimi i kalendarit dhe kanaleve të shitjes

VIZITORËT & REZERVIMET
- Komunikimi me vizitorët
- Koordinimi i hyrjes dhe daljes
- Ndjekja e rezervimeve dhe kërkesave

PRONA & OPERACIONET
- Koordinimi i pastrimit dhe përgatitjes
- Ndjekja e mirëmbajtjes dhe problemeve
- Raportimi periodik për pronarin

Below cards:

Prona publikohet vetëm në kanalet që Prago menaxhon realisht për atë pronë.

Do not use:
- tabs
- logo cloud
- OTA badges
- alternating editorial rows
- full-bleed photo breaks

==================================================
F. PROCESS
==================================================

id:
process

Title:
Si fillon bashkëpunimi

Three horizontal steps desktop.

Vertical sequence mobile.

01
Na dërgoni pronën
Na dërgoni vendndodhjen dhe 4–5 foto në WhatsApp.

02
Ne bëjmë vlerësimin fillestar
Vlerësojmë përshtatshmërinë, intervalin e çmimit për natë dhe periudhat me më shumë kërkesë.

03
Takohemi dhe përgatisim propozimin
Nëse prona përshtatet, organizojmë vizitën dhe përgatisim propozimin e menaxhimit.

Use:
- large burgundy numbers
- Fraunces titles
- Inter descriptions
- subtle connecting line

NO stagger animation.

NO scroll animation.

WhatsApp CTA below step 3.

==================================================
ACCEPTANCE
==================================================

At 1366px:
- nav is one line
- CTA stays inside viewport
- hero panel remains the specified composition
- service cards remain three columns

At 768px:
- navigation does not wrap

At 390px:
- logo + language + WhatsApp fit one row
- hero image comes before copy
- CTA fits full width

Search:
"periudhat me më shumë kërkesë"

must exist.

Search:
"pamjen e sezonalitetit"

must return zero matches.

Build must pass.

Take screenshots at:
390×844
1366×768

Do not proceed to Prompt 4.

Commit:

Rebuild header, hero, trust band, WhyPrago, service scope, and process steps

STOP.
```

---

# Prompt 4 — Operations + Reporting + Pricing

I would rename the misleading "case-study" language.

```text
Goal:
Implement ONLY:

1. BehindEveryStay
2. OwnerVisibility
3. Pricing

Do not alter sections 1–6 unless fixing a direct regression.

==================================================
A. BEHIND EVERY STAY
==================================================

Component:
components/behind-every-stay.tsx

This is NOT a case study.

It is an operational-trust section.

Do not mention:
- Coastal Paradise
- any named property
- bookings
- profitability
- performance statistics

id:
operations

Eyebrow:
PAS ÇDO QËNDRIMI

H2:
Vizitorët tuaj shohin një qëndrim të qetë. Ne menaxhojmë gjithçka pas tij.

Body:
Nga kontakti i parë deri te kontrolli pas largimit të vizitorit, Prago koordinon komunikimin me vizitorët, hyrjen, pastrimin, mirëmbajtjen dhe raportimin për pronarin. Ju qëndroni gjithmonë të informuar, pa pasur nevojë të menaxhoni pronën nga telefoni.

Five equal-weight items:

GATI PARA MBËRRITJES
Pastrimi, furnizimet dhe kontrolli final i pronës.

KOMUNIKIM ME VIZITORËT
Pyetjet dhe kërkesat trajtohen gjatë gjithë qëndrimit.

KOORDINIMI I MBËRRITJES
Udhëzime të qarta për mbërritjen dhe mbështetje për hyrjen.

ZGJIDHJE PROBLEMESH NË VEND
Mirëmbajtja dhe çështjet e papritura koordinohen në terren.

RAPORTIM I QARTË PËR PRONARIN
Rezervimet, të ardhurat, kostot dhe përditësimet operative, në një vend.

Layout:
lead text first
then equal-weight icon items.

Do NOT:
- add photography
- add bento cards
- create a case study
- create metrics
- create testimonials

==================================================
B. OWNER VISIBILITY
==================================================

Rebuild components/software-section.tsx.

Delete:
- Overview tab
- Calendar tab
- Performance tab
- Housekeeping tab
- Maintenance tab
- fake charts
- fake dashboard UI
- fake guests
- fake booking data

id:
reporting

Eyebrow:
TRANSPARENCË PËR PRONARIN

H2:
Kontrolli mbetet te ju.

Body:
Çdo muaj merrni një pasqyrë të rezervimeve, të ardhurave, kostove dhe çështjeve operative. Kur ka një vendim që kërkon miratimin tuaj, ju njoftojmë.

Exactly four items:

Rezervimet
Të ardhurat
Kostot
Çështjet operative

Use ONLY:

/images/website/owner-report.webp

alt:
Pamje e raportit mujor për pronarin, me të dhëna të anonimizuara

Desktop:
screenshot left 58%
copy right 42%

Mobile:
copy first
screenshot second

Caption:
Shembull i raportit mujor — të dhënat janë anonimizuar.

No CTA.

==================================================
C. PRICING
==================================================

New:
components/pricing.tsx

id:
pricing

Eyebrow:
TARIFË E QARTË

H2:
20% për menaxhimin e plotë.

Rule MUST come from siteFacts.feeBasisSq.

Includes:
Menaxhimi i listimit, çmimit, kalendarit, komunikimit me vizitorët, koordinimit të operacioneve dhe raportimit për pronarin.

Disclosure:
Kostot e mirëmbajtjes, materialeve dhe shërbimeve të palëve të treta paraqiten veçmas kur aplikohen.

Visual structure is LOCKED:

Burgundy section.

Desktop:
left = large 20%
right = explanation

CTA below explanation.

Mobile DOM order:
H2
fee rule
20%
inclusions
CTA

Do not add:
- calculator
- tiers
- comparison
- package selector
- "from 20%"
- savings claim
- earnings claim

STOP BEFORE COMMITTING.

Verify feeBasisSq against the actual management agreement.

If it cannot be verified:
STOP.
Do not guess.

If verified:
continue.

Acceptance:
- zero Unsplash/pravatar
- zero fake dashboard UI
- zero named demo data
- every 20% occurrence must represent the same fee basis

Commit:

Build operational trust, owner reporting, and pricing

STOP.
```

---

# Prompt 5 — FAQ + Final CTA + Footer

Same structure, but I would make the visual constraints explicit.

```text
Goal:
Implement ONLY:

1. FAQ
2. Final CTA
3. Footer
4. Mobile Floating WhatsApp

Do not redesign previous sections.

==================================================
A. FAQ
==================================================

Six questions exactly as specified.

Implement accessible accordion.

Each button must have:
aria-expanded
aria-controls

Each panel:
role="region"
aria-labelledby
hidden

First item open desktop.

All closed mobile.

No animation required.

Do not add:
- search
- categories
- extra questions
- CTA cards inside FAQ

==================================================
B. FINAL CTA
==================================================

Component:
components/final-cta.tsx

This is a TWO-COLUMN split.

Desktop:
LEFT = cream copy
RIGHT = final-cta.webp

Do NOT convert this into:
- full-bleed background photo
- dark image overlay
- campaign frame
- centered text over photograph

Image:
 /images/website/final-cta.webp

Copy:

H2:
Doni të dini nëse prona juaj përshtatet?

Body:
Na dërgoni vendndodhjen dhe 4–5 foto në WhatsApp. Do t'ju përgjigjemi pasi ta shqyrtojmë.

CTA:
MERRNI VLERËSIMIN FILLESTAR

Disclaimer:
Vlerësimi është fillestar dhe nuk përbën garanci të ardhurash.

No form.

No email field.

No secondary CTA.

==================================================
C. FOOTER
==================================================

Dark burgundy.

Four columns desktop.

1:
Logo
Menaxhim profesional i qirave afatshkurtra.

2:
+355 68 666 9060
stay@prago.al
Instagram

3:
siteFacts.serviceAreaSq

4:
Politika e privatësisë
Kushtet
English

Bottom:
legalName
NIPT
© current year Prago

No invented legal data.

==================================================
D. FLOATING WHATSAPP
==================================================

Mobile only.

Do not cover footer.

Show after hero CTA leaves viewport.

Hide when FinalCta enters viewport.

Position:
16px horizontal
safe-area bottom
z-index 40
minimum 56px

Label:
WhatsApp · Vlerësimi

Do not create another floating design.

==================================================
TEST
==================================================

390×844
430×932
1366×768

Verify:
- no footer overlap
- no horizontal scroll
- FAQ keyboard works
- final CTA remains two-column desktop
- final CTA stacks mobile

Commit:

Build accessible FAQ, final CTA, footer, and mobile WhatsApp

STOP.
```

---

# Prompt 6 — WhatsApp + English + Analytics

Move the WhatsApp decision **before this prompt**. Claude should no longer be allowed to stop here asking which URL to use.

At the beginning, insert the confirmed value.

```text
Goal:
Wire the already-approved WhatsApp destination, implement English, and add analytics.

IMPORTANT:
The WhatsApp destination has already been confirmed.

Approved number:
355686669060

Approved Albanian prefilled message:
Përshëndetje! Dua një vlerësim fillestar për pronën time.

Do NOT use the old catalog URL.

==================================================
A. WHATSAPP
==================================================

Create one shared helper.

No component may construct a wa.me URL directly.

Every CTA must use the helper.

Required positions:

header
hero
process
pricing
final
floating_mobile

Run:

rg -n "wa.me"

Every occurrence must originate from the shared helper.

All CTAs must use:
same number
same message
same destination

==================================================
B. ANALYTICS
==================================================

If an analytics provider already exists, use it.

If none exists:
create a small track() wrapper.

Do not install an analytics dependency.

Events:

cta_whatsapp_click
faq_open
language_switch

Payloads must NEVER include:
- phone number
- message content
- property address
- guest data
- owner data
- filenames

Do not implement Meta Pixel.

Do not implement cookie consent.

Leave a clearly documented TODO for legal/analytics review.

==================================================
C. ENGLISH
==================================================

Implement the /en page fully.

Do not create a separate English component tree.

Use the same components with locale-specific copy.

Do not duplicate section implementations.

English must contain zero Albanian user-facing copy.

Albanian must contain zero English user-facing copy.

Use the exact supplied English copy.

Translate remaining copy directly from the existing Albanian
lib/site-copy.ts structure.

Do not introduce new claims.

Do not restore old AI/earnings copy.

==================================================
D. LANGUAGE SWITCH
==================================================

SQ → /
EN → /en

Track language_switch.

Do not create /sq as a public navigation URL.

==================================================
TEST
==================================================

/
lang="sq"

 /en
lang="en"

Every CTA:
same WhatsApp number
same intended message

Commit:

Wire unified WhatsApp conversion flow, privacy-safe analytics events, and English route

STOP.
```

---

# Prompt 7 — Technical Publishing

The biggest change here is: **don't let Lighthouse become an excuse to redesign the site.**

```text
Goal:
Complete technical publishing requirements WITHOUT changing the approved visual design.

Do not redesign sections to improve Lighthouse.

Do not change section order.

Do not change imagery.

Do not introduce new animations.

==================================================
METADATA
==================================================

Implement locale-aware metadata.

SQ:

Prago | Menaxhim profesional i qirave afatshkurtra

EN:

Prago | Professional Short-Term Rental Management

Use metadataBase:
https://www.prago.al

Canonical:
/
 /en

hreflang:
sq-AL → /
en → /en

OG:
1200×630 final approved image only.

Do not use the "-BASE" OG image.

If final OG image does not exist:
flag it as a blocker.

==================================================
STRUCTURED DATA
==================================================

Use siteFacts.

Do not fabricate:
- ratings
- reviewCount
- priceRange
- employeeCount
- revenue
- performance

==================================================
LEGAL
==================================================

Create:
/
privacy
terms

in both languages according to the locale architecture.

Clearly mark legal copy:
DRAFT — REQUIRES LEGAL REVIEW

Do not claim it is legally final.

==================================================
ACCESSIBILITY
==================================================

Add:
skip link → #main-content

Exactly one h1.

Correct h2/h3 hierarchy.

Every nav has aria-label.

Every interactive element has visible focus.

Minimum tap target:
44×44px.

Do not add decorative accessibility hacks.

==================================================
PERFORMANCE
==================================================

Remove:
images.unsplash.com
pravatar.cc

from next.config.ts if unused.

Hero:
priority.

All other images:
lazy-loaded.

No autoplay video.

No new heavy dependency.

Check Framer Motion.

If completely unused:
remove it.

Check simple-icons.

If completely unused:
remove it.

Do not retain dependencies merely because they were present historically.

==================================================
LIGHTHOUSE
==================================================

Run a mobile production Lighthouse test.

Targets:
Performance ≥90
Accessibility ≥95
Best Practices ≥95
SEO ≥95

If a target fails:

First fix technical issues.

Do NOT redesign the page.

Do NOT remove required sections.

Do NOT replace required images.

Do NOT alter the specified visual hierarchy.

Document any unavoidable score limitation.

Commit:

Add metadata, structured data, legal pages, accessibility fixes, and performance cleanup

STOP.
```

---

# Prompt 8 — Final Launch Gate

This should be more of an **audit than an implementation prompt**.

```text
Goal:
Audit the completed site.

DO NOT make broad design changes.

DO NOT redesign anything.

DO NOT add features.

Only fix objective bugs that directly violate the specification.

==================================================
SOURCE SEARCH
==================================================

These MUST return zero:

rg -n "We run your property better|You keep 80%|We can prove it|Live AI activity"

rg -n "Simon Holland|Anna Hilson|Alex Merhige|Amber James|76.6%"

rg -n "images.unsplash.com|pravatar.cc|from 20%|pamjen e sezonalitetit"

rg -ni "8A8079"

These MUST return at least one:

rg -n "Ju zotëroni pronën|4–5 foto|periudhat me më shumë kërkesë"

rg -n "aria-expanded|aria-controls|main-content"

==================================================
ROUTING
==================================================

Verify:

/
→ Albanian
→ lang="sq"

 /en
→ English
→ lang="en"

 /sq
→ not canonical

==================================================
CTA
==================================================

Click every WhatsApp CTA:

header
hero
process
pricing
final
floating

Verify:
same destination
same number
same message

==================================================
ACCESSIBILITY
==================================================

Test keyboard only:

Tab
Shift+Tab
Enter
Space
Escape where applicable

Verify:
- no trapped focus
- FAQ state updates
- all controls reachable
- focus visible
- skip link works

==================================================
VIEWPORTS
==================================================

Take screenshots at:

390×844
430×932
768×1024
1366×768

Do NOT judge the screenshots against personal aesthetic preference.

Judge them against the locked specification.

Specifically verify:

HEADER:
- correct height
- no wrapping
- no hamburger

HERO:
- desktop photo with cream panel overlay
- mobile photo above copy
- no decorative fake UI

WHY PRAGO:
- scattered vs organized treatment ONLY here

SERVICES:
- exactly three cards
- three columns desktop
- stacked mobile
- real photography

PROCESS:
- three steps
- no stagger animation

OWNER VISIBILITY:
- real report screenshot
- no fake dashboard

PRICING:
- burgundy block
- 20% presentation
- no calculator

FINAL CTA:
- cream copy + right-side image desktop
- stacked mobile
- NOT full-bleed overlay

FOOTER:
- no overlap

FLOATING WHATSAPP:
- mobile only
- no footer overlap

==================================================
CONTENT AUDIT
==================================================

For every public claim:

Classify:
TRUE / VERIFIED
PLACEHOLDER
REQUIRES HUMAN CONFIRMATION

Do not mark a claim verified based on the implementation manual alone.

==================================================
BLOCKERS
==================================================

List clearly:

- legalName
- NIPT
- serviceAreaSq
- fee agreement verification
- WhatsApp confirmation
- final OG image
- legal review
- analytics/cookie legal review
- image approval
- preview deployment

Do not call the site production-ready if any blocking item is unresolved.

==================================================
FINAL REPORT
==================================================

Write the complete result to:

docs/rebuild-adaptation-plan.md

Include:

1. Build status
2. TypeScript status
3. Lint status
4. Lighthouse scores
5. Accessibility status
6. Routing status
7. CTA status
8. Content audit
9. Screenshot audit
10. Remaining blockers

Do not deploy.

Commit only if actual fixes were required.

Otherwise do not create an unnecessary commit.

STOP.
```

---

# One more thing I'd change in your workflow

After **Prompt 3, Prompt 4, and Prompt 5**, don't immediately continue.

Make Claude produce screenshots and give you this report:

```text
VISUAL REVIEW REPORT

Desktop 1366×768:
- Hero: PASS/FAIL
- TrustBand: PASS/FAIL
- WhyPrago: PASS/FAIL
- Services: PASS/FAIL
- Process: PASS/FAIL

Mobile 390×844:
- Header: PASS/FAIL
- Hero: PASS/FAIL
- TrustBand: PASS/FAIL
- WhyPrago: PASS/FAIL
- Services: PASS/FAIL
- Process: PASS/FAIL

Specification deviations:
1.
2.
3.

Do not fix deviations not explicitly covered by this prompt.
STOP.
```

That is important because **you should be the design approval gate**, not Claude.

---

## The critical difference from your old plan

Your old plan essentially told Claude:

> "Here is the direction. Build the best version of it."

This version tells Claude:

> **"Here is the design. Reproduce it. You are not authorized to reinterpret it."**

That's what you need after the homepage went off in the "editorial campaign" direction.

And I would especially enforce these three rules:

**1. No creative recomposition.**
**2. No layout substitution.**
**3. No moving to the next prompt until you approve the screenshot.**

That should make the implementation dramatically more predictable.
