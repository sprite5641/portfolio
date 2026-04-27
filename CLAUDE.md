# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **Branch note:** The branch `claude/add-claude-documentation-oRj4e` (and `gh-pages`) contain only the GitHub Pages **deploy artifacts** — minified JS/CSS chunks under `static/`, hashed media, `index.html`, `404.html`, and copies of `assets/`. The actual source code (`src/`, `public/`, `package.json`, `tsconfig.json`, etc.) lives on the **`master`** branch. Switch to `master` for any source-level work; this guide describes that source.

## Project Overview

A personal portfolio site for Prachaya Tatiyasamrit, built with **React 19 + TypeScript + Chakra UI** and deployed to GitHub Pages at `https://sprite5641.github.io/portfolio/` (see `package.json` `homepage`). It is a content-driven single-page application: all portfolio data (projects, skills, experience, social links, hero copy) lives in JSON and Markdown files under `src/content/` rather than being hardcoded in components.

## Development Commands

The repo commits **`pnpm-lock.yaml`** (no `yarn.lock`), so use **pnpm**:

```bash
pnpm install          # install dependencies
pnpm start            # react-scripts dev server with hot reload
pnpm build            # production build to ./build
pnpm test             # react-scripts jest
pnpm deploy:github    # gh-pages -d build  (publishes ./build to the gh-pages branch)
```

`package.json` also defines `pnpm deploy` → `git push prod main`, which targets a legacy `prod` git remote and is not the normal deploy path; prefer `deploy:github`.

`package.json` pins many transitive deps via `pnpm.overrides` for security (nth-check, postcss, lodash, webpack-dev-server, etc.). Don't remove these without checking why they're there.

## Content-First Architecture

**IMPORTANT:** Edit JSON / Markdown under `src/content/`. Do not hardcode portfolio text or data into components.

### Content layout

- `src/content/common/common.json` — global data: `name`, `logoType.{mobile,desktop}`, `mainPicture` / `mainPictureJPG`, `pronunciation`, `audioFile`, `cssVarPrefix` (`"sprite"`), `email`, `linkedin`, `github`, `resume`, and a `socials` array of `{ type, link }`.
- `src/content/landing/landing-config.json` + `landing.md` — landing hero (headline + picture + body markdown).
- `src/content/about/about-config.json` + `about.md` — about page; `about-config.json` drives skills (`skill.title` + `skill.tools[]`), education, and experience sections.
- `src/content/featured-projects/featured-projects-config.json` — featured project cards.
- `src/content/other-projects/other-projects-config.json` — other project cards (currently not rendered; see App note below).

### Content access (`src/shared/content/Content.tsx`)

- `configs` — single object that re-exports every JSON config. Import as `import { configs } from "shared/content/Content"` and read e.g. `configs.common.email`.
- `MarkdownFile` enum (`Landing`, `About`) maps to bundled markdown URLs.
- `useContent(file: MarkdownFile)` — hook that `fetch()`-es the markdown URL at runtime and returns `{ landing, about }`.
- `<Content>` component renders Markdown via `react-markdown` with custom Chakra renderers: `<Text>` for `p`, themed `<Link>` for `a`, two-column `<UnorderedList>` for `ul`, and `li` elements get AOS attributes (`data-aos="flip-up"`, staggered `data-aos-delay`).

To add a new content section: add the JSON/markdown under `src/content/<section>/`, import and re-export it through `configs` in `Content.tsx`, and (for markdown) extend the `MarkdownFile` enum + `Mapper`.

## Project Architecture

### Source tree

```
src/
├── App.tsx, App.scss          # root component, layout, lazy routes, AOS init
├── index.tsx, index.scss      # createRoot entrypoint, ChakraProvider
├── content/                   # JSON configs + .md content (+ content.d.ts declares "*.md")
├── pages/
│   ├── landing/Landing.tsx
│   ├── about/                 # About + blog/, education/, experience/, skills/, common/{expandable,title}
│   ├── featured-projects/     # FeaturedProjects + featured-project-card/
│   └── other-projects/        # OtherProjects + other-project-card/
├── shared/                    # navbar (+ drawer, logo-type), footer, content, page-header,
│                              # tags, socials, color-mode-button, date, project-card-footer
├── theme/
│   ├── index.ts               # extendTheme, NavbarHeight, bgLight/bgDark
│   ├── colors/Colors.ts       # PrimaryColors, PrimaryDarkColors
│   ├── component-styles/ComponentStyles.ts  # Text/Container/Button overrides + variants
│   └── fonts/_font.scss + Monsieur-Pomme.ttf
└── utils/
    ├── Functions.ts           # open(), onResumeOpen(), onMailTo()
    ├── Icons.tsx              # centralized react-icons re-exports
    ├── useScroll.ts           # WorkPageId, AboutPageId, useScroll hook
    └── assets/                # cursor.svg, pointer.svg
```

### Key patterns

1. **Lazy loading.** Every top-level page in `src/App.tsx:12-29` is wrapped with `React.lazy()` under a single `<Suspense fallback={<Loader />}>`. Code-splitting is the default — keep it that way when adding new pages.

2. **`OtherProjects` is intentionally disabled.** Both the `lazy(...)` import (App.tsx:19-23) and the JSX usage (App.tsx:56-57) are commented out. Don't re-enable without confirming intent — the data file still ships.

3. **Path aliases.** `tsconfig.json` sets `baseUrl: "src"`, so use absolute imports: `import { Navbar } from "shared/navbar/Navbar"`. Avoid `../../` chains.

4. **Page navigation.** Anchor-scroll model. Section ids `WorkPageId = "page-work"` and `AboutPageId = "page-about"` are defined in `src/utils/useScroll.ts:3-4`. The `useScroll()` hook reports the currently visible section by comparing `scrollTop` against each section's `offsetTop` / `clientHeight`.

5. **Animation.** `AOS.init({ once: true })` runs once in `src/App.tsx:38`. Drive animations with `data-aos="..."` and `data-aos-delay="..."` attributes (see `Content.tsx` and `pages/about/About.tsx` for examples).

6. **Entry point.** `src/index.tsx` uses the React 19 `createRoot` API (not `ReactDOM.render`) and wraps the app in `ChakraProvider` + `ColorModeScript`. It throws if `#root` is missing.

### Theme system (`src/theme/index.ts`)

- `extendTheme({ config: { cssVarPrefix: "sprite" }, colors, fonts, components }, withDefaultColorScheme({ colorScheme: "primary" }))`.
- Fonts: body `Urbanist`, headings `Playfair Display`. Logo uses bundled `Monsieur-Pomme.ttf` from `theme/fonts/`.
- Colors: `primary` from `PrimaryColors`, `gray` from `PrimaryDarkColors` (so `gray.*` is the dark-mode palette).
- Exported constants: `bgLight = "white"`, `bgDark = "gray.800"`, `NavbarHeight = "144px"`. Mobile uses `96px` via `App.tsx`'s responsive `mt={{ base: "96px", md: NavbarHeight }}`.
- Custom button variants in `ComponentStyles.ts`: `secondary` and `icon` (both color-mode aware).

### Styling

- **Primary:** Chakra UI props + variants.
- **Secondary:** SCSS — `App.scss`, `index.scss`, `theme/fonts/_font.scss` (`sass` is a dependency).
- **Icons:** import from `utils/Icons.tsx` (`LinkIcon`, `LinkedInIcon`, `GitHubIcon`, `MailIcon`, `MoonIcon`, `SunIcon`, `MenuIcon`, `ChevronDownIcon`, etc.) — these are re-exports from `react-icons` so swaps stay centralized.
- **Animations on lists/links:** prefer the `<Content>` renderer's existing AOS wiring before reinventing.

## Static Assets

Assets live in `public/assets/` with subfolders:

- `featured-projects/`, `other-projects/` — each project has both a `.webp` and a `.jpg`/`.jpeg`/`.png`.
- `landing/` — face images (webp + jpg pairs).
- `readme/` — README banner only.
- Top-level: `HP2.*`, `HP3.*`, `name-pro.mp3`.

Reference assets in JSON using the deployed path prefix:

```json
"mainPicture": "/portfolio/assets/HP3.webp"
```

The `/portfolio/` prefix matches `package.json` `homepage`. The About page renders images via `<picture>` with a webp `<source>` and jpg fallback (`pages/about/About.tsx`) — follow this pattern for new images.

## TypeScript & Linting

- `tsconfig.json`: `strict: true`, `target: "es5"`, `jsx: "react-jsx"`, `module: "esnext"`, `moduleResolution: "node"`, `baseUrl: "src"`, `resolveJsonModule: true`, `isolatedModules: true`, `noEmit: true`.
- `src/content/content.d.ts` declares `*.md` as a module so markdown can be imported as a URL.
- ESLint extends `react-app` and `react-app/jest` (CRA defaults).
- **Prettier (`.prettierrc`) — match these in any code you write:**
  - `printWidth: 120`
  - `semi: true`
  - `singleQuote: false` (use double quotes)
  - `tabWidth: 4`
  - `trailingComma: "all"`

## Deployment

- GitHub Pages via the `gh-pages` package: `pnpm deploy:github` runs `gh-pages -d build`, pushing the built `build/` directory to the `gh-pages` branch. The site serves from `https://sprite5641.github.io/portfolio/`.
- `package.json` `homepage` controls the public base path — changing it requires updating asset path prefixes (`/portfolio/...`) across the JSON content files.
- `public/404.html` carries the standard SPA-on-GitHub-Pages redirect script (rewrites unknown paths into a query string the SPA can pick up).
- The branch this guide lives on (`claude/add-claude-documentation-oRj4e`) and `gh-pages` are deploy snapshots — do not author source changes there.

## Conventions / What NOT to do

- Don't hardcode portfolio data into components. Edit JSON / markdown under `src/content/`.
- Don't add relative-path imports when an absolute `src`-based import works (`baseUrl: "src"`).
- Don't change `homepage`, `cssVarPrefix`, or the `/portfolio/` asset prefix without coordinating all three.
- Don't reformat away from `.prettierrc` (4-space indent, double quotes, semis, 120 col, trailing commas).
- Don't introduce yarn artifacts (`yarn.lock`) — the lockfile is `pnpm-lock.yaml`.
- Don't remove pinned versions from `pnpm.overrides` in `package.json` — they're security pins.
- Don't re-enable the commented-out `OtherProjects` block in `App.tsx` without confirming intent.
- Don't replace the React 19 `createRoot` call in `src/index.tsx` with the legacy `ReactDOM.render`.
