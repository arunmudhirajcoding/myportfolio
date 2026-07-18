# Agent Guide for My Portfolio Project

## Project Overview

This is Arun Durgollu's personal portfolio website built with Next.js 16, React 19, and Tailwind CSS.

## Key Directories & Files

- `src/app/` - Next.js App Router
  - `page.js` - Main homepage
  - `layout.js` - Root layout
  - `globals.css` - Global styles
  - `api/contact/route.js` - Contact form API

- `src/components/` - React components
  - `ui/` - Reusable UI components (3D cards, tooltips, etc.)
  - Section components (AboutSection, HomeSection, etc.

- `src/constants/` - Project data and constants
  - `index.js` - Projects, skills, experience data

- `public/` - Static assets
  - `projects/` - Project screenshots
  - `journey/` - Timeline images
  - `logos/` - Technology logos

## Development

```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- Next.js 16.1.1
- React 19.2.3
- Tailwind CSS 4
- Framer Motion
- shadcn/ui
- Nodemailer (for contact form)
- Sentry (for error tracking)
