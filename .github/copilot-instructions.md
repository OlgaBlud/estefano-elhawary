# AI Coding Agent Instructions - Estefano Elhawary Brand Site

## Project Overview
This is an **Astro 5 static site** for premium brand marketing (Estefano Elhawary). It uses **Sass for styling** with a design system based on luxury brand colors (navy + gold). German language content. Deployed via Git (recent push to main detected).

## Architecture & Key Patterns

### Data-Driven Component Model
- **Data files** (`src/data/`) define all content as TypeScript objects (not hardcoded in components)
- **Components** (`src/components/`) receive data via spread props and type interfaces
- **Pattern**: `import { heroData } from "@/data/page-home/hero"` → `<Hero {...heroData} />`
- **Why**: Makes content updates non-destructive and enables CMS integration later
- **Example**: [src/data/page-home/hero.ts](src/data/page-home/hero.ts) structures video, CTAs, avatars, quotes as reusable objects

### Type Definitions
- **Layout types**: [src/types/layouts.ts](src/types/layouts.ts) defines interfaces like `HeaderData`
- **Component Props**: Each component (e.g., Hero, Header) exports a `Props` interface matching its data structure
- **Astro Types**: Use `import type { ACTION_ERROR_CODES }` pattern (ignore unused imports—they show intent for future actions)

### Styling System
- **CSS Variables** in [src/styles/base/_variables.scss](src/styles/base/_variables.scss): `--color-primary-gold`, `--gradient-blue`, `--font-heading`
- **Imported globally** via [src/styles/main.scss](src/styles/main.scss) → `@use "./base"`
- **Hierarchy**: `base/` (resets, typography, vars) → `components/` (scoped styles) → `layout/` (Header, Footer)
- **Fonts**: Instrument Sans (body), Cormorant Garamond (headings) via CSS custom properties
- **BEM-style class naming** is used throughout (e.g. `hero__title`, `header__button`). Prefix with the component or page name to avoid collisions.
- **SCSS mixins** for breakpoints and utilities live in [src/styles/base/_mixins.scss](src/styles/base/_mixins.scss). Import them in component styles with `@use "../../base/mixins" as *;` and use `@include tablet { ... }`, `@include laptop { ... }`, etc.

### Path Aliases
- Configured in `tsconfig.json`: `@/*` → `src/*`
- Always use `@/` imports: `@/components/`, `@/data/`, `@/assets/icons/` (improves refactoring)

## Development Workflow

### Commands
```bash
npm run dev       # Start localhost:4321 with hot reload
npm run build     # Generate production `/dist/` folder
npm run preview   # Test production build locally
npm run astro     # Access Astro CLI (add integrations, check types)
```

### Adding New Pages
1. Create `.astro` file in `src/pages/` (automatically becomes a route)
2. Create corresponding data file in `src/data/page-{name}/`
3. Create components in `src/components/page-{name}/`
4. Create styles in `src/styles/components/page-{name}/`
5. Import Layout, pass data via spread: `<Layout {...pageData}><Component {...sectionData} /></Layout>`

### Image Handling
- Store in `src/assets/page-{name}/` (organized by page)
- Import as objects: `import heroVideo from "@/assets/page-home/hero-video-preview.avif"`
- Use `<Image>` component from Astro for optimization
- Currently uses `.avif` format (modern, high compression)
- **SVG handling**: you can import SVGs as raw files (`import playIcon from "@/assets/icons/play-icon.svg"`), then use `<img src={playIcon.src} />` or reference `playIcon` when you need the string. Alternatively, import SVGs as components (`import Logo from "@/assets/logo.svg"`) and render them inline (see `Header.astro`).

## Project-Specific Conventions

### Naming
- **Files**: kebab-case (`hero-video-preview.avif`, `page-home/`)
- **Variables**: camelCase in TypeScript, kebab-case in CSS classes
- **Folders**: Grouped by scope (`global/`, `page-home/`, `page-contact/`)

### Language & Meta
- **Default locale**: German (`<html lang="de">`, German content in `header.ts`)
- **Meta tags**: Set per-page in Layout props: `<Layout title="..." description="...">`

### Sass Organization
- Import via `@use` (not `@import`)
- Variables accessed as `base.$variable-name` after `@use "./base"`
- Mixins in `_mixins.scss` for responsive breakpoints or reusable patterns

## Common Tasks

### Update Content
Edit data files only: `src/data/page-home/hero.ts` (no component changes needed)

### Add New Brand Color
1. Add CSS variable to `_variables.scss`: `--color-new-shade: #hex`
2. Create gradient if needed
3. Use in component via `var(--color-new-shade)`

### Create New Component
1. Add to `src/components/page-{name}/NewComponent.astro`
2. Define `Props` interface with typed structure
3. Add Sass file to `src/styles/components/page-{name}/`
4. Import data from `src/data/page-{name}/`
5. Follow the existing BEM naming convention for class names and use the mixins for responsive styling.

## Important Notes

- **No JavaScript frameworks** (React, Vue, etc.)—pure Astro components
- **Static site**: All content is pre-rendered; no API routes by default
- **Asset imports**: Always import media/icons as variables (enables bundling, versioning)
- **Prettier configured**: Run `npm run astro -- --help` to check formatting rules
- **TypeScript strict mode**: Follow type definitions exactly; avoid `any` except for image imports (Astro limitation)

## File Structure at a Glance

```
src/
├── pages/          # Routes (index.astro → /)
├── layouts/        # Shared HTML structure (Layout.astro)
├── components/     # Page-scoped components (Hero, Header)
├── data/           # Content objects (heroData, headerData)
├── types/          # TypeScript interfaces (HeaderData)
├── assets/         # Images, icons (by page)
└── styles/         # Sass organized by layer

---

## Additional Tips

- When writing new page code mimic the pattern in `src/data/page-home/hero.ts` for asset imports and the companion component's `Props` interface; this keeps types and structure consistent.
- Data files are plain TypeScript objects; editing them does not require touching components unless you add new fields.
- The `@/` alias defined in `tsconfig.json` works in both TypeScript and SCSS imports—use it for all internal paths.
- SVG logos used in layout components are generally imported as components. For icons or images that don't need inlining, import the file and use its `.src` property.
- There are no runtime frameworks; keep logic in Astro components and avoid adding React/Vue/Svelte dependencies.
```

---

**Last Updated**: 2026-02-27 | **Astro Version**: 5.17.1 | **Sass**: 1.97.3
