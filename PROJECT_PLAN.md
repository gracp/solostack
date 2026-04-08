# SaaS Frontend — Project Plan

**Product:** SoloStack (AI Social Media OS for Solopreneurs)  
**URL:** solostack.ai  
**Goal:** Pre-launch waitlist landing page. Drive waitlist sign-ups.  
**Target:** Solopreneurs, coaches, consultants with 1K–50K followers on 2–4 social platforms

## Core CTA
**"Join the Waitlist"** → email capture

## Page Sections (in order)

1. **Hero** — Hook + Problem statement + CTA (email input)
2. **Social Proof Bar** — "X creators signed up in Y days" urgency signal
3. **How It Works** — 3-step visual flow (Strategy → Content → Schedule)
4. **Features** — 4 core features with icons, short descriptions
5. **Social Proof Deep** — 2–3 testimonials or quote cards
6. **Pricing** — Freemium / Pro / Agency tiers shown
7. **FAQ** — 5–6 objection-handling questions
8. **Final CTA** — Repeat hero CTA with urgency
9. **Footer** — Minimal: logo, links, legal

## Design Direction
- Style: Premium minimal — not dark/neon, not generic blue. Think Linear.app meets Stripe.
- Color: White background, deep charcoal text, single accent (electric indigo or warm coral)
- Typography: Sharp and modern — Instrument Sans or similar clean grotesque
- Motion: Subtle entrance animations. No parallax chaos. Every animation earns its keep.
- Layout: Wide whitespace. Never cramped. Text blocks max 680px wide for readability.
- Mobile: Mobile-first. Hero must sing on a 375px screen.

## Design Principles
- "Never overwhelming, always clear"
- "Every sentence is utilized to the max. Nothing wasted."
- Copy must be specific, not generic. No corporate filler.
- CTAs must be compelling — not "Submit" or "Sign Up."

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS v3 + shadcn/ui
- TypeScript
- Deploy: Vercel (free tier)

## Evaluation Criteria
1. Hero converts: visitor understands the product AND enters email in < 10 seconds
2. Social proof bar creates urgency without feeling fake
3. How It Works is understandable in under 30 seconds
4. Features are scannable — each feature understood in < 3 seconds
5. Pricing is clear — no hidden tiers or confusion
6. FAQ handles objections
7. No filler text — every line earns its place
8. Mobile experience is flawless

## Agent Loop
1. **Product Manager** → creates page structure + copy brief
2. **Copywriting Pro** → writes full page copy against brief
3. **Frontend Design** → builds UI from approved copy
4. **CBO** → evaluates against business objectives
5. If eval fails → loop back to step 1 or 2 with specific feedback
6. Repeat until all evals pass

## Output
- `/saas-frontend/` — Next.js project
- All copy stored in `/saas-frontend/src/lib/copy.ts`
- Components in `/saas-frontend/src/components/`
