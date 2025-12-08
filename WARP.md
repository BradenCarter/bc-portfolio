# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands and workflows

This is a Next.js App Router project created with `create-next-app` and using Tailwind CSS (v4) via PostCSS.

All commands below assume you are in the repository root.

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The main entrypoint for the app is `app/page.tsx`, rendered within the root layout `app/layout.tsx`. By default the app runs at `http://localhost:3000`.

### Build for production

```bash
npm run build
```

### Start a production build locally

```bash
npm start
```

This assumes `npm run build` has already been executed.

### Linting

ESLint is configured via the flat config `eslint.config.mjs` using `eslint-config-next` presets.

Run lint on the entire project:

```bash
npm run lint
```

There is currently no script defined for running tests in `package.json`. If a test runner (e.g. Jest, Vitest, Playwright) is added later, update this section with the appropriate `npm test` / single-test examples.

## Project structure and architecture

### High-level layout

- **App Router**: Uses the Next.js App Router with the `app/` directory.
  - `app/layout.tsx` defines the root HTML shell and global providers.
  - `app/page.tsx` is the current home page and primary UI entrypoint.
- **Styling**:
  - `app/globals.css` imports Tailwind CSS via `@tailwindcss/postcss` and defines a small design system using CSS custom properties and an `@theme inline` block.
  - Light/dark themes are handled via the `prefers-color-scheme` media query, updating `--background` and `--foreground` variables that are consumed throughout the app.
- **Static assets**:
  - `public/` contains SVGs and other static assets used by the default Next.js template (logos, etc.).

### Fonts and theming

- **Fonts** are configured in `app/layout.tsx` using `next/font` helpers:
  - `Geist` and `Geist_Mono` are loaded with the `variable` option, which attaches their font-family to CSS custom properties `--font-geist-sans` and `--font-geist-mono`.
  - The `<body>` element applies these variables via class names, and `app/globals.css` maps them into the Tailwind theme using `--font-sans` and `--font-mono`.
- This setup means any future components can rely on Tailwind-style font tokens instead of hard-coding font stacks.

### Configuration and tooling

- **Next.js configuration** (`next.config.ts`):
  - Currently uses the default `NextConfig` scaffold with no custom options. All behavior is standard Next.js 16 unless this file is extended.
- **TypeScript configuration** (`tsconfig.json`):
  - Strict type-checking is enabled (`"strict": true`).
  - Uses `"moduleResolution": "bundler"` and includes both app source files and Next.js-generated type files under `.next/`.
  - Defines a root-level path alias `@/*` mapped to `./*`, which can be used for absolute-style imports (e.g., `import Foo from "@/app/foo"`).
- **ESLint configuration** (`eslint.config.mjs`):
  - Uses `defineConfig` from `eslint/config` with `eslint-config-next`'s `core-web-vitals` and TypeScript presets.
  - Overrides default ignore patterns via `globalIgnores`, explicitly ignoring build outputs such as `.next/**`, `out/**`, and `build/**`, plus `next-env.d.ts`.
- **PostCSS / Tailwind integration** (`postcss.config.mjs`):
  - Configures `@tailwindcss/postcss` as the sole PostCSS plugin, which powers the Tailwind directives used in `app/globals.css`.

### How to extend the app

When adding new features or pages:

- Prefer placing new routes and layouts under `app/` following the Next.js App Router conventions (e.g., `app/projects/page.tsx` for a `/projects` route).
- Reuse the existing font and theme variables instead of redefining font stacks or colors; this keeps typography and color consistent.
- Use the `@/*` TypeScript path alias for imports that would otherwise require long relative paths.
