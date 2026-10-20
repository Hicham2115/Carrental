---
version: alpha
name: Carrental.ma
description: French-first car rental website for trips across Morocco.
colors:
  primary: "#0B4EA2"
  primary-strong: "#073B7A"
  background: "#FFFFFF"
  foreground: "#111111"
  surface-blue: "#F1F6FC"
  border: "#DCE5F0"
  muted: "#657286"
  star: "#F0AA28"
typography:
  sans:
    fontFamily: "Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
rounded:
  DEFAULT: "0.75rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.25rem"
spacing:
  section-gap: "6rem"
  page-max: "80rem"
components:
  button:
    radius: "0.75rem"
  input:
    radius: "0.75rem"
  card:
    radius: "1rem"
---

# Carrental.ma Design System

## Overview

### Creative North Star

The page should feel like the first stop before a bright drive along the Casablanca coast: clear blue brand cues, open sky, and a reliable car in view. The hero photograph and booking strip carry the main impression; the sections below stay quiet and easy to scan.

### Product context and register

- **Audience and primary job:** People planning a car rental in Morocco; help them choose a pick-up location and dates, then contact the company.
- **Target market(s) and evidence:** Morocco, based on the Carrental.ma brand book and the current brief.
- **Locale(s) and language policy:** French for page copy, field labels, validation, feedback, and accessibility names. No second locale is specified.
- **Usage scene:** A public, responsive marketing site used on phones and desktop browsers while planning a trip.
- **Register:** Brand site.
- **Memorable signature:** A sunlit Casablanca car photograph with a booking strip attached to the hero.
- **Restraint:** Keep navigation, benefits, reviews, questions, and contact information direct. Do not crowd the page with rental inventory or unsupported offers.
- **Anti-references:** Avoid generic discount banners, dark dashboard styling, visual effects on the wordmark, and unverified claims presented as facts.
- **Token ownership/runtime mapping:** This file owns the site palette and visual rationale. `app/globals.css` maps its colors and type to Tailwind v4 and shadcn semantic variables. Shared UI components consume those variables.

## Colors

Carrental blue (`#0B4EA2`) is the main action and identity color. The stronger blue (`#073B7A`) is for hover and high-contrast accents. White is the page base; near-black is reserved for copy. Pale blue (`#F1F6FC`) separates a few sections without creating a card-heavy layout. Borders use a soft blue-gray, and muted text remains dark enough to read. Amber is reserved for illustrative review stars.

## Typography

Use Montserrat for the page, with Helvetica and Arial as the brand-approved fallbacks. Headings use firm weight and close line-height; body text stays regular and comfortably readable. French text uses sentence case, clear labels, and short direct phrases.

## Layout

Use a centered content width of about 80rem with fluid side padding. The desktop page moves from a photographic hero to two-column brand and contact sections, open three-column service/review groups, and a final call to action. On small screens, columns stack in reading order and the booking fields become full-width rows.

## Elevation & Depth

Separate content with whitespace, pale-blue section surfaces, and light borders. Use one restrained shadow for the booking strip. Do not add shadows to the logo or use depth effects to decorate static text.

## Shapes

Buttons and inputs use a 0.75rem radius; larger photographs and review surfaces use a 1rem radius. Dividers are thin and low contrast. Avoid excessive pill shapes and nested cards.

## Components

### Foundational visual states

Links and controls have visible focus rings, clear hover color, and a disabled state when applicable. Field errors sit next to their field and are connected with `aria-describedby`. Loading feedback must not change button size. Smooth anchor scrolling respects reduced-motion preferences.

### Buttons and actions

Primary actions use solid Carrental blue with white text. Secondary actions use a white surface with a blue border. Keep action labels specific, such as « Réserver » and « Envoyer le message ».

### Navigation and data display

The header uses simple text navigation with anchors to sections on this page. Reviews are clearly marked as illustrative until the business supplies real testimonials.

### Forms and overlays

Use shadcn Input, Label, Textarea, Button, and Popover components. The pick-up city uses an authored listbox-style menu; dates use labeled, styled date fields with native keyboard and calendar behavior. Keep validation in French and show a clear inline or toast response.

### Iconography

Use lucide-react line icons at a consistent 18–22px size. Icons support the label and never replace it.

### Motion

Keep interactions short and functional. Smooth anchor scroll is disabled under `prefers-reduced-motion`. No cursor effects or scroll-triggered animation are needed for this page.

### Content and data visualization

Use straightforward French copy. Do not imply a reservation, message, rating, or customer endorsement has been confirmed when the frontend has no connected service or verified data.

## Do's and Don'ts

- **Do:** Preserve the supplied wordmark, blue, white space, and direct brand tone.
- **Do:** Keep the booking action visible and easy to reach on mobile.
- **Don't:** Add unsupported discounts, vehicle availability, or verified review claims.
- **Don't:** use gradients, shadows, or decorative marks on the logo.
