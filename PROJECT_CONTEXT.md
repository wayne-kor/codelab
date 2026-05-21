# CODE LAB+ — Project Context

## Project Overview

Landing page for **CODE LAB+**, a coding education program offering Python literacy and AI vibe coding classes. The page is designed to attract prospective students and convert visitors into applicants.

## Target Audience

- Students
- Non-developers
- Coding beginners
- People interested in startups, product management, and AI

## Design Style

- Futuristic, premium dark mode
- Startup aesthetic inspired by Apple and OpenAI
- Clean, minimal, and beginner-friendly in tone
- High-contrast typography with polished UI details

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| Deployment | Netlify |

## Deployment Status

Live on Netlify. The site is already publicly deployed and accessible.

## Completed Sections

- Hero section
- Curriculum section
- Testimonials
- CTA (Call to Action) section

## Recent Changes (2026-05-19)

### Conversion & UX improvements

- **FinalCTA** (`src/components/sections/FinalCTA.tsx`)
  - Primary button now links directly to enrollment form (`https://smore.im/form/5KNKdzbvFG`) with `target="_blank"` instead of scrolling to `#courses`
  - Button label changed to "지금 수강 신청하기"
  - Ghost button changed to "클래스 둘러보기 → #courses"
  - Body text contrast improved: `text-[#64748b]` → `text-[#94a3b8]`

- **Sticky mobile CTA** (`src/components/ui/StickyMobileCTA.tsx`) — new file
  - Fixed bottom bar, visible only on mobile (`md:hidden`)
  - Slides up after user scrolls past 75% of the hero height
  - Full-width lime button linking directly to enrollment form
  - Added to `App.tsx` below `<Footer />`

- **Hero** (`src/components/sections/Hero.tsx`)
  - Primary button: `w-full sm:w-auto` — full width on mobile for stronger CTA
  - Ghost button: `size="md"` + `opacity-60 sm:opacity-100` — de-emphasized on mobile to create visual hierarchy

- **Testimonials** (`src/components/sections/Testimonials.tsx`)
  - Removed horizontal scroll layout (`overflow-x-auto snap-x`) — was causing page-wide horizontal scroll on mobile
  - Changed to `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
  - Cards use `w-full` instead of `min-w-[280px] flex-shrink-0`
  - Added `break-words whitespace-normal` to quote text
  - Added `overflow-x-hidden` to section
  - Mobile padding adjusted: `p-6 md:p-7`
  - Removed scroll-tracking state, dot indicators, and right-fade gradient overlay

### Deployment

- Live at: https://codelab-class.netlify.app
- Deployed via Netlify CLI: `npx netlify-cli deploy --prod --site=f445bd9e-91fd-49b4-9844-31f4d9ac1746 --dir=techlab/dist`
- An accidentally created site (`gleeful-rabanadas-7aa1dc`) was deleted

## Future Roadmap

- Improve mobile UX (ongoing)
- Add animations (scroll-triggered, entrance, etc.)
- Improve copywriting across all sections
- Add an application form section
