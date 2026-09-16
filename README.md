# Ayzal Fathima Beauty Salon — Website (React + Vite + Tailwind)

Client: Ayzal Fathima Beauty Salon, Shop 3, Sajaya 20 Building, Amman St, Al Qusais Industrial Area, Dubai.

## Run it
```bash
npm install
npm run dev      # local preview
npm run build    # production build -> dist/
```

## What's REAL in this build (pulled from Google Maps + public listings)
- Business name, address, plus code
- Phone / WhatsApp number: +971 55 392 9985
- Opening hours: Daily 10:00 AM – 10:00 PM
- Full services list
- Instagram handle: @ayzal_fatima_beauty_saloon
- Direct Google Maps link + a "write a review" deep link built from the
  business's Google feature-id

All of this lives in **`src/siteConfig.js`** — edit that one file and the
whole site updates.

## What's a PLACEHOLDER — needs the client before launch
Search for `TODO` across the codebase (`grep -rn "TODO" src`). Main ones:
1. **Real photos** — hero, results gallery, team, booking section all use
   placeholder images. Swap in the client's own Instagram / Google Business
   photos (with their permission to use).
2. **TikTok** — I couldn't confirm the salon's own verified TikTok handle
   from public search. Get the real `@handle` from the client and drop it
   into `BIZ.tiktokUrl` in `siteConfig.js` — the icon appears automatically
   in the footer and floating buttons once it's set.
3. **Price list** — no official AED price list is published anywhere for
   this salon, so `Pricing.jsx` intentionally does NOT show fabricated
   numbers. It currently links every service to a WhatsApp pricing enquiry.
   Replace with real prices once the client shares them.
4. **Team names/photos** — `Team.jsx` uses generic role placeholders. Don't
   publish real staff names/photos without the employees' consent.
5. **Google review count/star rating** — different directories show
   different numbers (3.8 / 4.5 / 4.8) for this listing, so the site does
   **not** hardcode a specific rating. It links straight to the live
   Google listing instead — always accurate, never stale.

## The "automatic review to site + Google" feature
See `src/components/ReviewGate.jsx` for the full explanation in comments,
short version:

- Google does not allow any script to silently post a review on someone's
  behalf — that always needs the reviewer's own Google login + a manual
  submit on Google's page. Any tool claiming to fully bypass this either
  doesn't work or risks the client's Google Business Profile getting
  suspended for fake reviews.
- So the widget does the closest legitimate version: customer rates their
  visit on the site → 4–5 stars opens Google's review page pre-loaded in a
  new tab (one tap away from posting) **and** saves it as an on-site
  testimonial **and** pings the salon on WhatsApp instantly. 1–3 stars
  goes privately to WhatsApp only — it's never pushed toward Google, so a
  bad experience doesn't become a public review before the salon can fix it.
- Testimonials are currently saved to `localStorage` (demo-level — only
  visible in that visitor's own browser). For a shared, persistent list
  across all visitors, wire it to a free backend (Google Sheets + Apps
  Script webhook, Formspree, or Firebase) — swap the two `localStorage`
  lines in `ReviewGate.jsx` for a `fetch()` call, nothing else changes.

## Structure
Same component structure as the original A&Z Scissors template — content
is now driven by `src/siteConfig.js` instead of being hardcoded per file,
so future client edits are one-file changes.
