# Prago — Website Build Brief (cursor.md)

> Paste this file into Cursor as `cursor.md` at the root of the project. It is the single source of truth for building the Prago landing page. Follow it section by section. Do not invent features outside this brief. When in doubt, prefer clean, minimal, modern.

---

## 0. What we're building

A **single-page marketing website** (landing page) for **Prago** — an AI-powered short-term rental (Airbnb) property management agency based in Albania.

**The one job of this page:** convince a property owner in Albania to hand us their apartment to manage. Every section must push toward one action: **request a free revenue estimate / book a call.**

**Version 1 scope:** Homepage only. Build it so additional pages (About, How it Works, Owner Portal login) can be added later, but do NOT build them now. Keep it simple — that is the entire point.

**Approach:** "Option B" — a clean, cinematic, full-width landing page. Big confident headlines, generous white space, one clear call-to-action repeated down the page. Not a cluttered dashboard. Not a heavy corporate site.

---

## 1. Brand identity (use these exact values)

### Logo
Two logo files are provided in `/public/logo/`:
- `prago-logo-white.svg` (or .png) — white "P with a door" mark, use on the burgundy background
- `prago-logo-burgundy.svg` (or .png) — burgundy "P" mark, use on white/cream backgrounds

The logo is a single geometric **P** where the left stem forms an **open door**. It is the hero of the brand. Give it room to breathe. Never stretch, recolor, or add effects.

### Colors (CSS variables — define in `:root`)
```css
:root {
  --vishnje:      #6E1A2B;  /* primary brand — deep wine / vishnje (burgundy) */
  --vishnje-dark: #4E0F1E;  /* darker burgundy for depth, gradients */
  --vishnje-soft: #8A2738;  /* hover states, lighter accents */
  --cream:        #FAF6F1;  /* main light background */
  --sand:         #E8DDD0;  /* secondary warm background, cards, borders */
  --charcoal:     #1C1917;  /* primary body text */
  --stone:        #8A8079;  /* muted text, captions, labels */
  --white:        #FFFFFF;
}
```
**Rule:** Vishnje (burgundy) + cream + white is the whole palette. Charcoal for text. Use color sparingly — let white space and the burgundy do the work. No yellows (that's Houst), no greens (that's Adesa). We must look different.

### Typography (match the houst.com feel)
Houst pairs a **classic serif for headlines** with a **clean grotesque sans for body**. Replicate that exact contrast:
- **Headlines / display:** a high-contrast serif. Use **"Fraunces"** (Google Fonts) or **"Playfair Display"** as fallback. Weight 400–600. This gives the editorial, premium, hotel-like feel.
- **Body / UI / buttons:** a clean neutral sans. Use **"Inter"** or **"DM Sans"** (Google Fonts). Weight 400 for body, 500 for buttons/labels.
- **Numbers / data / small labels:** use the sans in uppercase with wide letter-spacing (0.1em) for that "stat" look.

Load fonts via Google Fonts `<link>` in the document head.

### Voice & tone
Confident, provocative, modern. Short sentences. We're the disruptor. We talk to owners like a smart friend who's about to make them money. Slightly bold ("We run your property better than you do") but always backed by substance (AI, data, real results). Never salesy fluff. Never generic.

---

## 2. Tech stack

- **Framework:** Next.js (App Router) + React + TypeScript
- **Styling:** Tailwind CSS (map the brand colors into `tailwind.config.js` as custom colors: `vishnje`, `cream`, `sand`, `charcoal`, `stone`)
- **Animation:** Framer Motion for scroll-reveal, fade-ups, and subtle parallax. Keep it tasteful — elements fade/slide in once on scroll, counters count up once when in view.
- **Icons:** lucide-react
- **Fonts:** next/font/google (Fraunces + Inter)
- **Deployment target:** Vercel
- **No backend yet.** Forms POST to a placeholder handler / or open an email to `stay@prago.al` and log to console. Leave a clearly marked `// TODO: connect form to backend/email service` comment.

**Responsiveness:** mobile-first. Must look flawless on phone, tablet, desktop. Test at 375px, 768px, 1440px.

**Performance:** lazy-load images, use next/image, target Lighthouse 90+.

---

## 3. Page structure (in order, top to bottom)

### 3.1 — Sticky navigation bar
- Transparent over the hero, then solid cream with subtle shadow once scrolled (animate the transition).
- Left: Prago logo (burgundy version on cream).
- Center/right links (smooth-scroll to sections): `How it works` · `Services` · `Why Prago` · `Results` · `FAQ`
- Far right: a primary button **"Get a free estimate"** (burgundy fill, cream text, rounded-lg, subtle hover lift).
- Mobile: hamburger → full-screen burgundy overlay menu with large serif links.

### 3.2 — Hero (Option B: cinematic, full viewport)
- Full-height (`min-h-screen`) section. Background: deep vishnje (`--vishnje`) with a very subtle dark gradient toward the bottom (`--vishnje-dark`). Optional: a faint, large, low-opacity version of the door-P mark bleeding off one edge as a watermark.
- Centered or left-aligned content:
  - Small uppercase eyebrow label in sand: `AI-POWERED PROPERTY MANAGEMENT · ALBANIA`
  - **Massive serif headline (cream):** `We run your property better than you do.`
  - Subline (sans, lighter cream): `Your apartment, managed end-to-end by AI and a local team. Smart pricing, 24/7 guests, spotless turnovers. You keep 80%. We handle everything else.`
  - Two CTAs: primary **"Get your free revenue estimate"** (cream fill, burgundy text) + secondary ghost button **"See how it works"** (cream outline, transparent).
- Animation: headline words fade-up in sequence on load; subtle float on the watermark logo.
- At the very bottom of the hero: a thin row of trust stats (see 3.3 data) OR a scroll-down indicator. Keep it elegant.

### 3.3 — Trust / stats bar
A horizontal band (cream background, burgundy numbers) with animated count-up when scrolled into view. Use OUR real early numbers — do not fake big numbers like Houst. Honest and specific beats fake and huge.
- `14` Properties already managed
- `4.8★` Average guest rating
- `<5 min` Avg guest response time (AI-powered)
- `20%` Flat commission — no hidden fees
- `100%` Owner transparency

(These are editable constants at the top of the component: `const STATS = [...]`.)

### 3.4 — The problem (provocative, sets up the pivot)
Short, punchy section on cream. Serif headline:
`Most owners in Albania are leaving money on the table.`
Then 3 short pain points in a row (sans, with small lucide icons in burgundy):
- Static pricing — you charge the same in August as in November.
- Slow replies — guests book whoever answers first. Usually not you.
- The grind — cleaning, keys, messages, reviews. It never stops.
End line in burgundy: `Prago fixes all of it — automatically.`

### 3.5 — Why Prago is different: THE AI SECTION (this is the star — make it shine)
This is our core differentiator. Nobody in Albania has this. Give it the most design love.
- Section background: switch to vishnje (burgundy) for contrast and importance.
- Eyebrow: `THE PRAGO DIFFERENCE`
- Headline (cream serif): `An AI that works your property like a hotel works a room.`
- 3–4 feature cards (cream/sand cards on burgundy, soft rounded corners, subtle hover lift, icon + title + 1–2 lines):
  1. **AI Dynamic Pricing** — Our engine adjusts your nightly rate every day based on demand, events, season, and competitor prices. Hotels have done this for decades. Now your apartment does too.
  2. **AI Guest Agent** — Replies to every guest in under 5 minutes, 24/7, in their language. Handles check-in, questions, upsells — automatically.
  3. **AI Revenue Optimization** — Predicts slow periods weeks ahead and fills them before they cost you money.
  4. **Real Local Team** — AI does the heavy lifting; our Albanian team does the cleaning, keys, and the human touch that earns 5 stars.
- Subtle animated detail: a small mock "AI activity feed" card that cycles through messages like `Price updated: +18% for Aug 12–15`, `Guest replied in 2 min`, `Booking confirmed — Saranda` (CSS/JS loop, every ~2.5s). This makes the page feel alive and proves the tech is real.

### 3.6 — Everything we do (services grid)
Cream background. Headline: `One flat fee. We handle all of it.`
Clean responsive grid of service cards (icon + title + short line). Pull from the real service list:
- Listing creation & professional photography
- AI dynamic pricing & revenue management
- Multi-platform listing (Airbnb, Booking.com, Vrbo)
- 24/7 AI + human guest communication
- Professional cleaning & turnovers
- Linen, toiletries & welcome minibar
- Guest screening & check-in (smart locks)
- Maintenance & property care
- Monthly owner reports & full transparency
- Local experiences & concierge (tours, transfers)
Tag the AI-powered ones with a small burgundy "AI" pill so the differentiator stays visible.

### 3.7 — How it works (3 steps — borrowed from Adesa, cleaner)
Cream or sand background. Headline: `Start earning in 3 steps.`
Horizontal 3-step layout with big serif numbers (01 / 02 / 03):
1. **Talk to us.** Free call or visit. We estimate what your property can earn.
2. **We set it up.** Photos, listing, pricing, smart lock, AI — all configured. Live in days.
3. **You earn.** Bookings roll in. You watch your revenue grow. We handle the rest.
Each step animates in on scroll (stagger).

### 3.8 — Results / testimonials (use the 14 real properties)
Cream background. Headline: `Real properties. Real owners. Real results.`
- A short honest line: we manage 14 properties across Tirana and the Albanian coast.
- 3–4 testimonial cards (owner first name + city + 1–2 line quote + small star rating). Leave the quotes as editable placeholders the CEO will fill with real words from himself + his friend's properties. Mark clearly: `// TODO: replace with real owner quotes`.
- Optional: a simple before/after style stat per testimonial (e.g. "Occupancy 41% → 73%"). Editable constants.

### 3.9 — Revenue estimate CTA (the conversion section)
Burgundy background, big and bold. This is the money section.
- Headline (cream serif): `Curious what your property could earn?`
- Subline: `Free estimate. No commitment. We'll show you the numbers.`
- A simple form card (cream): inputs for `Property location` (text or dropdown: Tirana / Saranda / Ksamil / Vlora / Other), `Bedrooms` (number stepper), `Your name`, `Email or WhatsApp`. Big burgundy submit button: **"Get my free estimate"**.
- `// TODO: connect to backend / send to stay@prago.al`. For now, validate inputs and show a success state ("Thanks — we'll be in touch within 24h").

### 3.10 — FAQ (accordion)
Cream. Headline: `Questions owners ask us.`
Smooth expand/collapse accordion. Seed with:
- How much do you charge? (20% flat, no hidden fees.)
- What does the 20% include? (Everything — pricing, guests, cleaning coordination, reports.)
- How is Prago different from other managers? (AI pricing + AI guest response + local team. Most managers do none of this.)
- Do I keep control of my property? (Yes. You approve the setup and can block dates anytime via your owner report.)
- Which areas do you cover? (Tirana and the Albanian coast — Saranda, Ksamil, Vlora, and more.)
- How fast can I go live? (Usually within a few days of our visit.)

### 3.11 — Footer
Burgundy (`--vishnje-dark`). 
- Prago logo (white).
- One-line tagline: `We manage. You earn.`
- Contact: `stay@prago.al` · Instagram link → `https://www.instagram.com/prago.al/` · `prago.al`
- Small print: `© 2026 Prago. Property management, Albania.`
- Minimal nav links repeated.

---

## 4. Animation & "alive" feel (important — the CEO wants it to feel alive)
- Scroll-reveal: sections and cards fade + slide up 20px once when entering viewport (Framer Motion `whileInView`, `once: true`).
- Stat counters animate count-up once in view.
- The AI activity feed in 3.5 loops continuously (the centerpiece "alive" element).
- Buttons: subtle scale/lift + shadow on hover.
- Nav: smooth background transition on scroll.
- Keep all motion subtle and fast (200–500ms). Never janky, never blocking. Respect `prefers-reduced-motion`.

## 5. Imagery
- Use clean, bright photos of Albanian apartments/coast (placeholder from Unsplash with `// TODO: replace with real property photos`). The CEO has real photos of the 14 properties to swap in.
- Prefer warm, sunlit, minimal interiors that match the cream/burgundy palette.
- Always use next/image with proper alt text.

## 6. Do / Don't
**Do:** clean white space, big serif headlines, burgundy accents, honest real numbers, make the AI section the star, one repeated CTA (free estimate).
**Don't:** fake huge stats, clutter the page, use yellow or green, overcomplicate v1, add pages beyond the homepage, use stocky "corporate" language.

## 7. Deliverables
- A running Next.js app (`npm run dev`) with the full single-page site.
- All brand colors/fonts wired into Tailwind config.
- Editable content constants at the top of each section component (STATS, SERVICES, FAQ, TESTIMONIALS) so the CEO can edit copy without touching layout.
- Clean, commented, component-per-section code in `/components`.
- Mobile, tablet, desktop responsive.
- All `// TODO`s clearly marked (backend, real photos, real quotes).

---

### Quick reference — the brand in one breath
**Prago. AI-powered Airbnb management in Albania. Burgundy + cream. Serif headlines, clean sans body. "We manage. You earn." Make the AI the hero. Keep it simple, premium, and alive.**
