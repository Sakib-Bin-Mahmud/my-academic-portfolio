# Portfolio — Sakib Mahmud Sovon

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Deployed to Vercel.

## Design direction

Signature motif: a **detection-box / annotation aesthetic** (corner brackets,
confidence-label tags) drawn from real research work (YOLOv8n-based
real-time gesture detection). Deep indigo-navy base, cyan "detection" accent,
warm vermillion used sparingly for awards/honors.

Fonts: Space Grotesk (display), Source Serif 4 (body), JetBrains Mono (labels/data).

## Running locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx           ← fonts, metadata
  page.tsx             ← assembles all sections
  globals.css          ← Tailwind + the corner-bracket signature CSS
components/
  Nav.tsx, Hero.tsx, About.tsx, Research.tsx, Projects.tsx,
  Teaching.tsx, Experience.tsx, Contact.tsx
lib/
  data.ts              ← all content lives here — edit this file to update
                          anything on the site, not the components
```

## Updating content

Everything — bio, publications, projects, experience, links — lives in
`lib/data.ts` as plain objects/arrays. To add a new publication, project, or
role, add an entry to the relevant array; the components render automatically.

## Deploying to Vercel

1. Push the repo to GitHub.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click
   **New Project**, and import the repo.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. A live URL is provisioned immediately (e.g. `your-project.vercel.app`).
   Add a personal domain later under Project Settings → Domains.

## Privacy notes

Since this site is public (unlike a CV shared only with admissions
committees), a few conservative calls were made — override any of these in
`lib/data.ts` if preferred:

- **No phone number** — only email is listed, to avoid spam.
- **No references section** — referee contact details generally shouldn't be
  published publicly without explicit consent; "available upon request"
  is the norm for a public site.
- **Dhee / MindFlex kept generic** — folded into one high-level
  "Backend Microservices — TechOptions" card with no architecture specifics.
