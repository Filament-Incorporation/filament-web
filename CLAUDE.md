# CLAUDE.md — Filament Website (filament-web)

## Project Purpose

Build a single-page marketing website for Filament.
The website lives at `filamentplatform.com`.

## Rough project context
Luminous: goal-directed web intel tool. Four layers: Intent → Search →
Crawl → Synthesis. Inquire more detail by asking humans.

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
- **Tagline**: TBD
- **Color palette**: Professional, trustworthy, institutional. Deep navy or dark teal as primary. Clean white backgrounds. A single warm accent color for CTAs.
- **Tone**: Serious and humourous at the same time.

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


## Working loop, every task

1. Read the file's header comment and its docs/ entry if one exists.
   Implement against that, not assumption.
2. If something in the request looks wrong or half-baked, say so plainly
   before planning around it.
3. For any decision the comment doesn't already settle, ask as multiple
   choice, one question at a time. Naming, loop structure, and other pure
   syntax calls don't need this — make those and explain after.
4. Once decisions are settled, write the full plan in plan mode. Wait for
   approval.
5. Execute one file at a time. Stop after each — explain what it does in
   plain language — wait for go-ahead before the next.
6. Commit with a specific, referenceable message: what changed and why,
   not "update file."

## Never guess

Open the file that defines a field, constant, function, or schema key
before referencing it. Not there? Ask — don't invent it.

## Hard stop — ask first, no exceptions

- Any change to `config/hunt_spec.py`
- DB schema, layer responsibilities, budgets/thresholds/stopping conditions
- API key handling, what gets logged, what gets stored
- New dependency, new file, user-facing text

## Never (candidates for a hook, not just this line)

API keys never touch the server. Never log request bodies. robots.txt
respected on every fetch. No raw scraped content stored — findings only.

## Scope

Don't refactor, fix bugs, or touch files you weren't asked to — flag it,
don't act. Currently building MVP.
