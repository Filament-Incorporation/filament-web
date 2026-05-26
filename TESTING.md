# web/ — Testing

Verification recipes for the marketing site at `filamentplatform.com`.
This is a static five-section landing page; tests are mostly visual /
content correctness, not functional.

For end-to-end testing across all components, see the root
[../TESTING.md](../TESTING.md).

---

## Prerequisites

```bash
cd web
npm install        # first time only
npm run dev
```

Open <http://localhost:3000>.

---

## 1. Content correctness

Walk the page top-to-bottom:

| Section          | Verify                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| 1. Hero          | Filament logo, headline "Your students are missing scholarships...", **Book a Demo** button, embedded YouTube demo |
| 2. How It Works  | Three numbered steps (`01`, `02`, `03`) with the right copy                                                  |
| 3. Why Filament  | Four benefit cards: staff freed up, zero liability, live in days, increase utilization                       |
| 4. Social Proof  | "7 out of 10" stat, KPU attribution                                                                          |
| 5. Footer CTA    | Second **Book a Demo** button, contact email, Calendly URL                                                   |

### Constants to check

These three constants live at the top of [app/page.tsx](app/page.tsx):

```ts
const CALENDLY_URL  = "https://calendly.com/filamentplatform/30min";
const CONTACT_EMAIL = "hello@filamentplatform.com";
const DEMO_VIDEO_ID = "EezOAe7MxWI";
```

After any update:
- Click both **Book a Demo** buttons → both must open the Calendly URL in
  a new tab
- Hover the email in the footer → mailto link uses `CONTACT_EMAIL`
- YouTube iframe `src` must equal `https://www.youtube.com/embed/<DEMO_VIDEO_ID>`

---

## 2. Responsive sanity check

In Chrome DevTools → Device toolbar, sweep through:

- **Mobile** (375 × 667): hero text wraps cleanly, demo video stays 16:9,
  Why Filament cards stack vertically
- **Tablet** (768 × 1024): three-column "How It Works" still readable
- **Desktop** (1440 × 900): max-width container centers correctly; no
  text running edge-to-edge

---

## 3. Production build

```bash
npm run build
npm run start
```

**Expect:**
- Build succeeds with no warnings about missing images or env vars
- Bundle is small (mostly static; no client-side state). Check
  `.next/static/chunks/` totals under ~150 KB for the main route.
- The Lighthouse score (DevTools → Lighthouse) is **>90** for performance
  and accessibility on the production build. If it drops materially after
  a change, investigate before deploying.

---

## 4. Deployment smoke test (Vercel)

After a Vercel deploy:

1. Visit the preview URL Vercel emits
2. Click **Book a Demo** → opens the production Calendly
3. Check the demo video plays (not a missing thumbnail)
4. Verify Vercel's "Functions" tab shows zero serverless functions —
   this is intentionally a static site

If you ever see SSR errors after a change, you likely added a client
hook (`useState`, etc.) to `page.tsx` without marking it `"use client"`.

---

## 5. Common failures

| Symptom                                              | Likely cause                                                                  |
| ---------------------------------------------------- | ----------------------------------------------------------------------------- |
| YouTube iframe shows "Video unavailable"             | `DEMO_VIDEO_ID` is wrong, or the video is set to private on YouTube           |
| **Book a Demo** opens about:blank                    | `CALENDLY_URL` is empty / malformed                                           |
| Fonts fall back to Times New Roman                   | The Fraunces / Inter font setup in `layout.tsx` broke (next/font import)      |
| Page renders but logos missing                       | `public/FilamentLogo.png` was moved or renamed                                |
| Build error about React Server Components            | A hook was used in `page.tsx` without `"use client"` directive at the top     |
