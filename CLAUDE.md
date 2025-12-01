# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React, TypeScript, Chakra UI, and deployed to GitHub Pages. The portfolio is designed as a content-driven single-page application where all portfolio data (projects, skills, experience, etc.) is managed through JSON configuration files and Markdown content.

## Development Commands

```bash
# Install dependencies
yarn install

# Start development server (hot-reload enabled)
yarn start

# Build for production
yarn build

# Run tests
yarn test

# Deploy to GitHub Pages
yarn deploy:github
```

## Content Management Architecture

**IMPORTANT**: This portfolio follows a content-first architecture. All portfolio information is managed through files in `src/content/` - NOT hardcoded in components.

### Content Structure

- **`src/content/common/common.json`** - Global data used throughout the site (name, email, social links, main picture, logo variants)
- **`src/content/landing/`** - Landing page configuration (JSON) and content (Markdown)
- **`src/content/about/`** - About page configuration (JSON) and content (Markdown)
- **`src/content/featured-projects/featured-projects-config.json`** - Featured projects data
- **`src/content/other-projects/other-projects-config.json`** - Other projects data

### Content Import System

Content is centrally managed through `src/shared/content/Content.tsx`:
- All JSON configs are imported and exported as the `configs` object
- Markdown files are fetched at runtime using the `useContent` hook
- The `Content` component renders Markdown with custom Chakra UI styling and AOS animations

**When modifying portfolio data**: Always edit the JSON/Markdown files in `src/content/`, never hardcode data in components.

## Project Architecture

### Component Organization

```
src/
├── pages/           # Page-level components (Landing, About, FeaturedProjects, OtherProjects)
├── shared/          # Reusable components (Navbar, Footer, Content, Tags, etc.)
├── content/         # JSON configs and Markdown content files
├── theme/           # Chakra UI theme customization (colors, component styles)
└── utils/           # Utility functions and custom hooks
```

### Key Architectural Patterns

1. **Lazy Loading**: All major page components use `React.lazy()` with Suspense for code splitting (see `App.tsx:12-28`)

2. **Path Aliases**: TypeScript is configured with `baseUrl: "src"` allowing absolute imports from src (e.g., `import { Navbar } from "shared/navbar/Navbar"`)

3. **Page Navigation**: Uses scroll-based navigation with anchor IDs (`AboutPageId`, `WorkPageId`) managed by `utils/useScroll.ts`

4. **Animation**: AOS (Animate On Scroll) library initialized in `App.tsx:38` with `once: true` setting

5. **Theme System**:
   - Custom Chakra theme in `theme/index.ts` with CSS var prefix `sprite`
   - Custom colors: `primary` (brand colors) and `gray` (dark mode colors)
   - Responsive navbar height: `96px` (mobile) vs `144px` (desktop) defined in `theme/index.ts:26`

### Styling Approach

- **Primary**: Chakra UI component props for styling
- **Secondary**: SCSS files for component-specific styles (e.g., `App.scss`)
- **Fonts**: Urbanist (body), Playfair Display (headings)

## Static Assets

All static assets (images, audio files) are in `public/assets/`. Reference them in JSON configs using the path format: `/portfolio/assets/filename.ext` (matches the `homepage` field in package.json).

## TypeScript Configuration

- `baseUrl: "src"` enables absolute imports from src directory
- `content.d.ts` declares module for `*.md` files to enable Markdown imports
- Strict mode enabled
