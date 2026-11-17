# Joshua Aranda — Portfolio

Personal portfolio for **Joshua Aranda Emmanuel Moreno**, Full Stack Developer & Software Engineer
based in Mérida, Yucatán. Content is driven by the resume PDF (`CV_JOSHUA_2026_APR-10-1.pdf`),
which is also shipped as a downloadable asset on the site.

## Features

- **Hero** — animated typewriter role rotation, gradient portrait ring, key stats and a skill marquee.
- **About** — focus areas, quick facts, education and language proficiency.
- **Projects** — card grid covering the banking products (Tokens App, CEDES, SPEI Out,
  Deposit Limit Engine) plus NodeNetwork and CitySends.
- **Experience** — expandable timeline of every role, with per-project highlights and tech stack.
- **Skills** — eight categorised groups of technologies.
- **Contact** — email, GitHub, LinkedIn and WhatsApp, plus a copy-to-clipboard email action.
- **UX** — scroll-spy navigation, reading progress bar, scroll-reveal animations, a fully
  responsive mobile drawer and `prefers-reduced-motion` support.

## Tech stack

React 18 · TypeScript · Vite · TailwindCSS · MUI (icons) · Vitest · Playwright-free CSS design system.

All copy lives in a single typed source of truth: [`src/data/portfolio.ts`](src/data/portfolio.ts).
Update that file to change any content on the site.

## Getting started

```bash
npm install
npm run dev      # dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run test     # run the Vitest suite
npm run lint     # lint
```

## Deployment

Pushing to `main` runs the GitHub Actions workflow in `.github/workflows/ci-cd.yml`, which tests,
builds and publishes `dist/` to the `gh-pages` branch. The site is served from
`https://joshmorenx.github.io/portfolio/` (Vite `base` is set to `/portfolio/`).
