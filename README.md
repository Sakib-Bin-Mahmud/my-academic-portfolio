# Portfolio \u2014 Sakib Mahmud Sovon

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Deployed to Vercel.

## What's new since v1

- **CV download** \u2014 `public/cv.pdf`, linked from Nav, Hero, and Contact. Replace this
  file whenever you update the CV (keep the filename `cv.pdf` so the links keep working).
- **Individual project pages** \u2014 `/projects/[slug]`, one per project in `lib/data.ts`.
  Homepage cards now link here instead of duplicating full detail inline.
- **Architecture comparison chart** \u2014 on the BdSL project page, built from the actual
  Table I/II figures in the COMPAS 2025 paper (not illustrative numbers).
- **Favicon + social preview image** \u2014 generated dynamically (`app/icon.tsx`,
  `app/opengraph-image.tsx`), matching the site's corner-bracket motif. No image files
  to maintain \u2014 they're code, so they update automatically if you change the palette.
- **Accessibility fixes** \u2014 ran actual WCAG contrast-ratio calculations (not eyeballing)
  across every color pairing in the palette. Found and fixed one real issue: the `line`
  border color only had a 1.4\u20131.5:1 contrast ratio against the backgrounds, badly
  failing the 3:1 minimum for UI components \u2014 it's been brightened to `#5D6C93`
  (3.1\u20133.5:1, passes). Also added `aria-hidden` to purely decorative SVGs and a
  visually-hidden heading on the About section for consistent screen-reader navigation.

## Design direction

Signature motif: a **detection-box / annotation aesthetic** (corner brackets,
confidence-label tags) \u2014 drawn from your actual research (YOLOv8n-based
real-time gesture detection), not a generic template choice. Deep indigo-navy
base, cyan "detection" accent, warm vermillion used sparingly for awards/honors.

Fonts: Space Grotesk (display), Source Serif 4 (body), JetBrains Mono (labels/data).

## Running locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). **Important:** I wrote this
code carefully but could not run `npm install` or a live build myself (no
network access in my environment) \u2014 please run it locally first and let me
know if anything errors before deploying.

## Project structure

```
app/
  layout.tsx        \u2190 fonts, metadata
  page.tsx           \u2190 assembles all sections
  globals.css         \u2190 Tailwind + the corner-bracket signature CSS
components/
  Nav.tsx, Hero.tsx, About.tsx, Research.tsx, Projects.tsx,
  Teaching.tsx, Experience.tsx, Contact.tsx
lib/
  data.ts             \u2190 ALL content lives here \u2014 edit this file to update
                         anything on the site, not the components
```

## Updating content

Everything \u2014 bio, publications, projects, experience, links \u2014 lives in
`lib/data.ts` as plain objects/arrays. To add a new publication, project, or
role, add an entry to the relevant array; the components render automatically.

## Deploying to Vercel

1. Push this project to a GitHub repo (a new one, or a folder within your
   existing `phd-application-and-academic-cv-preparation` repo).
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click
   **New Project**, and import the repo.
3. Vercel auto-detects Next.js \u2014 no configuration needed. Click **Deploy**.
4. You'll get a live URL immediately (e.g. `your-project.vercel.app`).
   Add a personal domain later under Project Settings \u2192 Domains.

## Privacy choices made while building this

Since this site is public (unlike your CV, which only goes to admissions
committees), I made a few conservative calls \u2014 override any of these in
`lib/data.ts` if you'd prefer otherwise:

- **No phone number** \u2014 only email is listed, to avoid spam.
- **No references section** \u2014 referee contact details generally shouldn't be
  published publicly without their explicit consent; "available upon request"
  is the norm for a public site.
- **Dhee / MindFlex kept generic** \u2014 folded into one high-level
  "Backend Microservices \u2014 TechOptions" card with no architecture specifics,
  per your instruction.
