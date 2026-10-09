---
name: Indo Jasa Website
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464c'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#575e70'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#141b2b'
  on-primary-container: '#7d8497'
  inverse-primary: '#c0c6db'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002109'
  on-tertiary-container: '#009842'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce2f7'
  primary-fixed-dim: '#c0c6db'
  on-primary-fixed: '#141b2b'
  on-primary-fixed-variant: '#404758'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#7ffc97'
  tertiary-fixed-dim: '#62df7d'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005320'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers a premium minimalist aesthetic tailored for Indonesian UMKM owners. The brand personality is professional, approachable, trustworthy, and modern, engineered to bridge digital sophistication with local accessibility. 

The interface evokes an emotional response of confidence, clarity, and ease. By pairing clean typography with generous whitespace and subtle tonal elevation, the design system removes friction from the digital transformation journey for growing businesses.

## Colors

The color palette centers on high-contrast authority balanced with approachable warmth. 

- **Primary Dark Navy (`#111827`)**: Anchors the system, utilized for primary headers, high-emphasis navigation, and foundational UI structures.
- **Primary Blue (`#2563EB`)**: Drives interactive elements, key CTAs, and focal points to guide user progression.
- **WhatsApp Green (`#16A34A`)**: Serves as a dedicated accent for direct conversion channels, reinforcing familiar regional communication habits.
- **Light Background (`#F8FAFC`)**: Establishes a clean, breathable canvas.
- **Text & Borders**: Body text relies on `#374151` for optimal legibility, supported by muted text (`#6B7280`) and crisp structural borders (`#E5E7EB`).

## Typography

Typography is set entirely in **Inter**, establishing a neutral, systematic, and utilitarian foundation. The scale is meticulously balanced to maintain readability across diverse device viewports. 

For mobile viewports, headlines scaling above 32px must gracefully step down to prevent overflow (e.g., `headline-xl` collapses to 32px on screens under 640px). Generous line heights ensure dense data remains approachable and easy to scan.

## Layout & Spacing

The layout utilizes a 12-column fluid grid system paired with fixed maximum container widths for desktop views. Spacing is anchored on a predictable 8px/4px scale rhythm, prioritizing whitespace to communicate premium minimalism.

- **Mobile:** Single-column layout with 16px outer margins and fluid component stacks.
- **Tablet:** 8-column layout variant with 24px outer margins and 16px gutters.
- **Desktop:** Full 12-column layout with 32px outer margins, 24px gutters, and a maximum content width of 1280px to prevent line lengths from stretching beyond optimal reading comfort.

## Elevation & Depth

Visual hierarchy relies on a hybrid approach combining tonal surface layering and low-contrast outlines. 

- **Surfaces:** Use flat, clean white backgrounds (`#FFFFFF`) against the light canvas (`#F8FAFC`) to separate content sections.
- **Shadows:** Ambient shadows are minimal, diffused, and tinted with the primary dark navy hue at very low opacity (`0 4px 20px -2px rgba(17, 24, 39, 0.05)`) to provide subtle lift on interactive elements and floating headers.
- **Borders:** "Ghost borders" (`#E5E7EB`) define containment without introducing visual heaviness.

## Shapes

The shape language employs a balanced, rounded aesthetic (`rounded` level 2), signaling friendliness and contemporary polish without sacrificing professional precision. 

- **Standard Radius:** 0.5rem (`8px`) for buttons, input fields, and standard cards.
- **Large Radius:** 1rem (`16px`) for feature callout containers, modals, and prominent structural wrappers.
- **Pills:** Fully rounded radii for status badges, tags, and WhatsApp direct-action triggers.

## Components

- **Buttons:** Primary buttons feature solid primary blue (`#2563EB`) with 0.5rem rounding, clear label text, and subtle hover elevation. Secondary actions use ghost styles with border outlines. Conversion triggers linked to WhatsApp utilize the designated green (`#16A34A`).
- **Input Fields:** Built with a clean white background, 1px border (`#E5E7EB`), 0.5rem border-radius, and clear focus states driven by primary blue rings.
- **Cards:** Clean surfaces set against the light canvas, bordered lightly with `#E5E7EB` and padded generously (`space-lg`). Hover states incorporate gentle shadow lifts.
- **Chips & Tags:** Pill-shaped elements utilizing soft background tints for category sorting and feature labeling.
- **Lists & Checkboxes:** High-scansability lists featuring generous vertical spacing, paired with accessible, custom-styled checkboxes and radio buttons utilizing primary blue accents.
- **Specialized Components:** Includes trust-building testimonial cards, transparent pricing tier selectors, and fixed-position floating WhatsApp quick-contact widgets optimized for mobile conversion.