---
status: pending
title: Hello World Page
---

1. Scaffold the project baseline: `package.json` (ESM, npm, Vite + React + TypeScript, `@tanstack/react-router`, `@tanstack/router-plugin`, `tailwindcss`, `@tailwindcss/vite`), `tsconfig.json` and `tsconfig.node.json` with the `@/*` → `src/*` path alias, `index.html` mounting `<div id="root">` and loading `/src/main.tsx`, and `.gitignore` covering `node_modules` and `dist`. Outcome: installable project skeleton.
2. Create `vite.config.ts` registering the React plugin, `@tailwindcss/vite`, and `@tanstack/router-plugin/vite` (file-based routing pointed at `src/routes`), plus the `@/` alias resolution. Outcome: dev server generates `src/routeTree.gen.ts` automatically.
3. Create `src/styles/global.css` containing exactly `@import "tailwindcss";` as its first line. Outcome: Tailwind v4 utilities available app-wide.
4. Create `src/main.tsx` that imports `src/styles/global.css` once, builds the router from the generated `src/routeTree.gen.ts`, and renders `RouterProvider` into `#root` inside `StrictMode`. Outcome: app boots with routing active.
5. Create `src/routes/__root.tsx` as the app shell: a root route rendering an `<Outlet />` inside a full-height wrapper. Outcome: shared layout for all routes.
6. Create `src/routes/index.tsx` for the `/` URL: a full-viewport flex container centering a single `Hello World` heading, styled with Tailwind utilities (large bold type, neutral background, readable text color). Outcome: visiting `/` shows a centered "Hello World".
7. Verify: run the dev server, confirm `src/routeTree.gen.ts` is generated (never hand-edited), the page renders centered with no TypeScript errors. Outcome: working Hello World page.
