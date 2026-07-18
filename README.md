# chrisscho.uk

The personal site of **Chris Schofield** — AI agentic workflow consulting, custom
multi-agent environment design, and automated systems engineering. Built as a
living index of running systems rather than a static CV: the hero pulls real
commit activity from GitHub, the status banner runs genuine server-side
reachability checks against the live properties, and the build log writes itself.

Live at **[chrisscho.uk](https://chrisscho.uk)**.

## Stack

- **[Next.js 16](https://nextjs.org)** (App Router, React 19, TypeScript)
- **[Tailwind CSS v4](https://tailwindcss.com)** with a token-based design system (`src/app/globals.css`)
- **MDX** for writing (`@next/mdx`) — posts live in `src/content/writing`
- **[PostHog](https://posthog.com)** for privacy-conscious analytics
- Editorial type: Outfit (sans), Instrument Serif (display), JetBrains Mono (mono) via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server                 |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Lint with ESLint                     |

## Project layout

```
src/
  app/          Routes: home, audit, projects, services, writing, log (+ OG images, sitemap, robots)
  components/   UI: Hero, StatusBanner, ProjectCard, WorkflowSection, SiteHeader/Footer, …
  config/       Portfolio, services and workflow data + GitHub fallback snapshot
  content/      MDX writing and the JSON build log
  lib/          Server-side data: GitHub activity, uptime, posts, JSON-LD, OG helpers
  assets/       Self-hosted display fonts
```

### Live data & fallbacks

- **GitHub activity** (`src/lib/github.ts`) hydrates the hero from the public
  `totalaudiopromo` account and falls back to a checked-in snapshot
  (`src/config/fallback/githubSnapshot.json`) when the API is unreachable. Set
  `GITHUB_TOKEN` to lift the unauthenticated rate limit.
- **Uptime** (`src/lib/uptime.ts`) pings the live properties server-side and
  renders honest "no response" states rather than fake OKs.
- **Build log** (`scripts/build-log-agent.mjs`) is regenerated weekly by a
  GitHub Action and rendered at `/log`.

## Optimising images

Source screenshots are converted to `.webp` via:

```bash
node scripts/optimize-images.mjs
```

## Deployment

Deployed on Vercel. Pushes to the default branch ship to production.
