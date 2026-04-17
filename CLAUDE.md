# CLAUDE.md — Filament Website (filament-web)

## Project Purpose

Build a single-page marketing website for Filament — a B2B AI chatbot platform for Canadian universities.
The website lives at `filamentplatform.com` and has one job: convert university administrators into booked demo calls.

Do not add pages. Do not add features. Every decision should serve the single CTA: **Book a Demo**.

---

## Tech Stack

- **Framework**: Next.js (App Router)
- **Deployment**: Vercel
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (choose something professional and distinctive — not Inter, not Roboto)
- **Domain**: `filamentplatform.com`

---

## Brand Identity

- **Company name**: Filament
- **Tagline**: TBD — use placeholder "The Scholarship Navigator for Your Students"
- **Color palette**: Professional, trustworthy, institutional. Deep navy or dark teal as primary. Clean white backgrounds. A single warm accent color for CTAs.
- **Tone**: Direct, confident, institutional. Speak to administrators, not students. No jargon, no fluff.
- **Logo**: Text-based wordmark for now — "Filament" in a clean, distinctive font

---

## Page Structure

One page only. Five sections in this exact order:

### 1. Hero
- Headline: Speak directly to the administrator pain point — students asking the same financial aid questions over and over
- Subheadline: One sentence. What Filament does and for whom.
- Primary CTA button: "Book a Demo" — links to Calendly (placeholder URL: `https://calendly.com/filamentplatform`)
- Demo video: Embedded below the headline (placeholder iframe for now — use a grey placeholder box with "Demo Video" label)
- No navigation bar clutter. Clean, fast, focused.

### 2. How It Works
- Three steps maximum
- Step 1: We scrape your official scholarship and financial aid pages
- Step 2: Students ask questions in plain English through your website
- Step 3: Filament answers instantly with citations — no hallucinations, no wrong answers
- Keep it visual. Use numbered steps with simple icons or large numerals.

### 3. Why Filament
- Three bullet points addressing administrator pain:
  - "Students get accurate answers 24/7 — your staff handles complex cases, not repetitive questions"
  - "Every answer cites the official source — no liability, no misinformation"
  - "Live on your website in days, not months — no IT project required"
- No feature lists. No tech stack. Pain and outcome only.

### 4. Social Proof
- Headline: "Built with students, validated on campus"
- Feature the KPU survey result: "7 out of 10 KPU students said they would use this tool regularly"
- Design this section to expand — leave visual room for university logos to be added later
- Keep it honest and understated. One data point, presented cleanly.

### 5. Footer CTA
- Repeat the "Book a Demo" button
- Contact email: placeholder for now — `hello@filamentplatform.com`
- One line company description: "Filament — AI-powered scholarship navigation for Canadian universities"
- No social links, no sitemap, no legal pages yet

---

## CTA Behavior

Every "Book a Demo" button links to: `https://calendly.com/filamentplatform`

This URL is a placeholder. Do not hardcode it deeply — put it in a single config variable at the top of the component so it can be swapped in one place.

---

## Design Constraints

- Mobile responsive — administrators open emails on phones. Test at 375px width.
- Fast load time — no heavy animations, no video autoplay
- No pricing section
- No team section  
- No blog
- No navigation links to other pages (there are no other pages)
- Avoid anything that requires ongoing content updates

---

## What Success Looks Like

An administrator receives a cold email from Filament, clicks the link, lands on this page, watches the demo video, and clicks "Book a Demo." That is the entire user journey this page needs to support.

If a design decision doesn't serve that journey, remove it.

---

## Deployment Instructions

1. `npx create-next-app@latest filament-web`
2. Build the single page in `app/page.tsx`
3. Push to GitHub under the `filamentai` organization as repo `filament-web`
4. Connect repo to Vercel
5. Add custom domain `filamentplatform.com` in Vercel dashboard
6. Confirm mobile responsiveness before sharing any URL externally

---

## Placeholders to Replace Later

- Demo video iframe (replace with real Streamlit demo recording)
- Calendly URL (set up account at calendly.com, replace placeholder)
- Contact email (set up `hello@filamentplatform.com` via Google Workspace or similar)
- University logos in social proof section (add as deals close)