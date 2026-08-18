# Kevin Fong — Personal Website

Source for [kleongf.github.io](https://kleongf.github.io), a personal portfolio and resume site covering robotics, programming, chess, piano, athletics, work, and volunteering.

The site is built with Astro, React components, Tailwind CSS, and `astro-boilerplate-components`. It also includes Markdown blog posts, RSS, a sitemap, and robots.txt generation.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

## Commands

```bash
npm run build
npm run preview
npm run lint
npm run build-types
```

The production build is written to `dist/`. The canonical site URL is configured in `astro.config.mjs`.

## Content map

- `src/partials/Hero.tsx` — introduction and social links.
- `src/partials/ProjectList.tsx` — experience and portfolio entries.
- `src/pages/index.astro` — home page composition.
- `src/pages/posts/` — Markdown blog posts.
- `src/utils/AppConfig.ts` — site title, description, author, and locale.
- `public/assets/images/` — portfolio and social images.

Update the content in the relevant partial or Markdown file, then run the build before deploying.
