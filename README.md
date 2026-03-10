# Maestro — Competitive Ad Intelligence
### Aria Builder Challenge · Khushi Sharma

Maestro is a competitive ad intelligence dashboard for **Mosaic Wellness**, tracking the Meta Ad activity of 10 competitor brands across BeBodywise, Man Matters, and Little Joys — with **Aria**, an AI assistant that answers strategy questions in real time.

---

## Live Demo
> Deployed at: `[your-vercel-url].vercel.app`

Open it. Everything works. No login, no API key, no setup.

---

## What It Does

- **Dashboard** — KPIs, format breakdowns, brand volume charts, ad longevity
- **Brand Profiles** — All 10 competitors grouped by which Mosaic brand they threaten
- **Live Ads** — Full ad feed filterable by brand, format, theme, and performance
- **Gap Analysis** — Format × Theme heatmap showing untapped creative territory
- **Weekly Brief** — Strategist-grade competitive intelligence memo
- **Aria** — AI chatbot powered by GPT-4o, answers any question about the ad data

---

## Data

**319 ads** simulated from real Meta Ad Library structure across 10 brands:

| Mosaic Brand | Competitors Tracked |
|---|---|
| BeBodywise | Wellbeing Nutrition, Wow Skin Science, mCaffeine, Pilgrim, Mamaearth |
| Man Matters | Boldfit, HealthKart |
| Little Joys | The Moms Co, Oziva, Nykaa Health |

Ad data reflects real brand positioning, messaging patterns, and format behavior observed in the Meta Ad Library. Clearly labeled as simulated in the UI.

---

## Tech Stack

- **Frontend** — Vanilla HTML/CSS/JS (single file, zero build step)
- **Charts** — Chart.js via CDN
- **Aria backend** — Vercel serverless function (`/api/chat.js`)
- **AI** — OpenAI GPT-4o
- **Fonts** — DM Serif Display + DM Sans

---

## Deploy Your Own

### 1. Clone & push to GitHub
```bash
git clone <this-repo>
# make sure .env is in .gitignore ✓
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) → Import this repo
2. Add environment variable: `OPENAI_API_KEY` = your OpenAI key
3. Deploy — done

### 3. That's it
Vercel serves the HTML file and the `/api/chat` backend. Aria works for every visitor without them needing any keys.

---

## Local Development

```bash
# Install Vercel CLI
npm i -g vercel

# Create .env.local
echo "OPENAI_API_KEY=sk-your-key" > .env.local

# Run locally (serves HTML + API routes)
vercel dev
```

Open `http://localhost:3000/maestro_aria_builder_challenge_khushi.html`

---

## Why This Approach

The Meta Ad Library API and scraping infrastructure is production complexity that would take weeks to harden. For a challenge submission on a tight deadline, the right call is a system that **demonstrates the full intelligence layer clearly** — filterable by Mosaic brand, AI-analyzed, strategist-grade briefs — with honest labeling of simulated data. The architecture (Vercel + serverless AI backend) is identical to what a production version would use; only the data pipeline differs.

---

*Built for the Mosaic Wellness Aria Builder Challenge by Khushi Sharma*
