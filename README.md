PM-Test

A React + TypeScript trading dashboard prototype designed as part of a coding assessment for Premier Markets.

Features

Modular and reusable React component architecture

Strongly typed props and data structures (TypeScript)

Interactive market chart powered by Recharts

Market sentiment UI (buyers/sellers comparison)

Responsive, mobile-friendly layouts using TailwindCSS

Dynamic background and icon assets served via Cloudinary CDN

Organized folder structure following scalable enterprise UI patterns

Clean theming and consistent visual behavior

Installation & Setup
git clone https://github.com/mariolawrence07/PM-Test
cd PM-Test
git checkout Homepage
npm install
npm run dev


Visit the running app:
 http://localhost:5173

Project Structure
src/
  config/
    assets.ts           // Cloudinary asset URLs (centralized)
  components/
    ui/                 // reusable UI elements (cards, badges, typography, etc.)
    layouts/            // layout wrappers, containers
    pages/               // view-level routes & screens
     sections/        // composed UI feature sections (hero, charts, CTAs, etc.

  data/                 // mock datasets (market info, sentiment, etc.)
              
  lib/                  // shared utilities, helpers
  App.tsx
  index.css
  main.tsx

Why This Structure Works

Separation of concerns

High reusability of UI components

Scalable composition (sections → layouts → pages)

Typed props for predictable UI behavior

Cloud image config prevents binary bloat & push issues

Easy future expansion (hooks, routing, context, API clients)

Cloudinary Asset Handling

To prevent repository-size issues and improve performance:

All large images, SVGs and UI illustrations are stored in Cloudinary

They are referenced centrally from:

src/config/assets.ts


Tech Stack

Vite — ultra-fast local development

React + TypeScript — component safety + predictable props

TailwindCSS — responsive design and rapid styling

Recharts — charting and data visualizations

Cloudinary — asset CDN for performance and storage

All tools are production-grade and widely adopted.

Assumptions

Market sentiment & ticker data are static (MVP)

Chart values are mock values, not real market feed

No backend state or authentication implemented

WebSockets, real-time feeds and API integrations are intentionally omitted for prototyping speed

If I Had More Time…

With additional hours, I would enhance:

Live price streaming

via WebSockets or REST polling

Chart depth

animations, zooming, smoothing

Market filtering & pagination

search, categories, sorting

State persistence

Zustand store or Redux Toolkit

Automated testing

UI unit or E2E testing (Playwright / Vitest)

Performance refinement

image lazy loading, memoization, viewport virtualization

Accessibility

labels, keyboard navigation, semantic upgrades

Professional Code Qualities

The codebase reflects enterprise expectations:

Readable & semantic JSX

Typed props and data models

Responsive layouts using Tailwind

Isolated UI components for clarity

Reusable composition in sections/

Simple, clean file responsibility boundaries

Zero binary clutter due to Cloudinary CDN


