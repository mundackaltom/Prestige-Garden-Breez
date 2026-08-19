# Handoff: Prestige Garden Breez Landing Page

## Overview
A one-page real-estate marketing/lead-gen site for **Prestige Garden Breez** — Phase 7 ("The Final Chapter") of The Prestige City township on Sarjapur Road, East Bangalore, by Prestige Group. The page introduces the project, states the highlights, shows floor plans and tentative pricing, a project film, a photo gallery, a location map, and an enquiry form.

## About the Design Files
The file in `reference/Prestige Garden Breez Landing.dc.html` is a **design reference** — an HTML/CSS prototype built to show the intended look, content, and behavior. It is not production code to copy verbatim. The task is to **recreate this design in the target codebase's existing environment** (React, Next.js, plain static site, etc. — whatever the project already uses). If no environment/framework exists yet, a simple static HTML/CSS/JS site or a lightweight framework (e.g. Next.js) is a reasonable default for a single marketing landing page like this.

The reference file loads a design-system stylesheet (`reference/modernist-styles.css`, included) for its design tokens (colors, type, spacing) and component classes (`.btn`, `.tag`, `.card`, `.table`, `.field`/`.input`, `.nav`) — reuse those tokens/classes (or their equivalent in the target codebase's own design system, if one exists) rather than the raw HTML markup structure.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy in the reference file are final. Recreate the UI closely, adapting only the markup/component structure to fit the target stack's conventions.

## Screens / Views
This is a single scrolling page with the following sections, in order:

### 1. Nav (fixed header)
- **Purpose**: Persistent navigation + primary CTA, visible at all scroll positions.
- **Layout**: Full-width bar, `position: fixed; top: 0`, flex row, `justify-content: space-between`, horizontal padding `clamp(20px, 5vw, 72px)`, vertical padding 12px, background = page background color (`#f3f2f2`), 2px bottom border in the divider color. A 73px-tall spacer sits in the normal document flow directly below the nav so page content isn't covered.
- **Components**:
  - Brand wordmark "Prestige Garden Breez" (left), font: Archivo 800.
  - Right-aligned nav links: Overview, Highlights, Floor Plans, Film, Gallery, Location (anchor links to section ids `#about`, `#amenities`, `#floorplans`, `#video`, `#gallery`, `#location`).
  - Primary button "Enquire Now" linking to `#contact`.

### 2. Hero
- **Layout**: Centered content column, max-width 1200px, top padding = 3× 24px + 32px.
- **Components**:
  - Small accent-tinted tag/pill: "Prestige Garden Breez".
  - H1, Archivo 800, `clamp(38px, 6vw, 72px)`: "Prestige Garden Breez".
  - Body paragraph (18px): "Your final opportunity to own a premium home at Prestige Garden Breez, Sarjapur Road — Phase 7 of Prestige Group's 180-acre township, The Prestige City, in East Bangalore."
  - Two buttons: primary "Enquire Now" (`#contact`), ghost "View Floor Plans" (`#floorplans`).
  - Full-width hero photo below (16:9), asset: `assets/hero-bedroom.png`.

### 3. Stats band
- **Layout**: Full-bleed band, background = neutral-100 (`#eae9e9`-ish tint, see tokens), inner content centered at 1200px max-width. 4-column responsive grid (`repeat(auto-fit, minmax(160px,1fr))`).
- **Components** (each: big accent-colored number + small uppercase label below):
  - 10 — Acres of Premium Living
  - 655 — Exclusive Homes
  - 2 & 3 — Bed Premium Residences
  - 85% — Landscaped Open Spaces

### 4. Overview ("About")
- **Layout**: Single text column, max-width ~68ch.
- **Content**: "Overview" kicker label, then two paragraphs describing the project (Phase 7 of The Prestige City, location on SH-35 at Yamare Village, 10 acres, 655 units across 4 towers — Tower 1 G+27, Towers 2–4 G+30 — 2/3 bed + 3 penthouses, no common walls, three-side open layouts, 85% landscaped open space); second paragraph names sibling phases in the township (Fernvale, Avalon Park, Aspen Greens, Aston Park, Eden Park, Eaton Park, Meridian Park).

### 5. Project Highlights
- **Layout**: Full-bleed neutral-100 band. A vertically-stacked list of 6 rows, each a 2-column grid (`minmax(64px,140px)` numeral column + flexible title column), separated by 2px top borders (last row also has a bottom border).
- **Content** (numbered 01–06):
  1. 10 Acres of Premium Living
  2. Only 655 Exclusive Homes
  3. Premium 2 & 3 Bed Residences
  4. Clubhouse (G+2) with Lap & Kids' Pool, Event Lawn, Forest Trail and Play Courts
  5. 85% Landscaped Open Spaces
  6. No Common Walls & Three-Side Open Homes

### 6. Floor Plans & Unit Types
- **Layout**: Data table, full width.
- **Columns**: Configuration | Saleable Area | Starting Price | (Enquire button)
- **Rows**:
  - 2 Bed (2T) — 239 units | 1071–1150 sq.ft | Starting ₹1.39 Cr*
  - 3 Bed (2T) — 278 units | 1450–1550 sq.ft | Starting ₹1.88 Cr*
  - 3 Bed (3T) — 135 units | 1700–1800 sq.ft | Starting ₹2.19 Cr*
  - Penthouse — 3 units | 3081–3183 sq.ft | Price on request
  - Each row's last cell is a small secondary "Enquire" button linking to `#contact`.
- Footnote (14px, muted): "*Tentative pricing shared at the Prestige Partner Circle Meet — subject to change. 655 homes across 4 towers."

### 7. Project Film
- **Layout**: "Project Film" kicker + a single 16:9 clickable thumbnail, max-width 900px.
- **Behavior**: The thumbnail is a photo (`assets/video-thumbnail-entrance-sign.jpeg`, the project's entrance signage) with a dark 25%-opacity scrim and a centered circular accent-colored play button (72px circle, white triangle icon). Clicking opens `https://www.youtube.com/watch?v=Bf9i6gt1zs4` in a new tab. (The video does not allow iframe embedding — YouTube returns "Error 153" for embeds — so it must open externally rather than autoplay inline. If a future video permits embedding, swap this for a real `<iframe>` embed.)

### 8. Gallery
- **Layout**: Full-bleed neutral-100 band, responsive grid `repeat(auto-fit, minmax(240px,1fr))`, 16px gap, images at 4:3 aspect ratio, `object-fit: cover`.
- **Images** (in order), all show-flat interior photography:
  1. `assets/gallery-01-bedroom-desk.png` — Bedroom desk
  2. `assets/gallery-02-kitchen.png` — Kitchen
  3. `assets/gallery-03-bedroom-nook.png` — Bedroom nook
  4. `assets/gallery-04-dining.png` — Dining area
  5. `assets/gallery-05-living-room.png` — Living room
  6. `assets/gallery-06-primary-bedroom.png` — Primary bedroom
  7. `assets/gallery-07-console.png` — Console unit
  8. `assets/gallery-08-seating.png` — Living room seating

### 9. Location
- **Layout**: 2-column grid (5fr text / 7fr map), stacks on narrow widths.
- **Left**: "Location" kicker, H2 "Yamare Village, Sarjapur Road", paragraph on connectivity (Whitefield, Marathahalli, ORR tech corridor, Sarjapur employment belt), secondary button "Get Directions on Enquiry" → `#contact`.
- **Right**: An embedded Google Map (4:3), query: `The Prestige City Sarjapur Marathahalli Road Yamare Village Bengaluru 562125`. Use the standard Google Maps Embed API/URL in production (an API key–based embed is preferable to the query-string iframe used in the prototype).

### 10. Pricing (conditionally shown)
- **Layout**: Full-bleed neutral-100 band.
- **Content**: "Pricing" kicker, H2 "Price on request", paragraph ("Tentative pricing starts at ₹1.39 Cr for a 2 Bed home. Final pricing and availability confirmed on enquiry."), primary button "Enquire for Pricing" → `#contact`.
- **Behavior**: This whole section can be toggled on/off (a `showPricingSection` flag) — build it as a boolean-gated block so it can be hidden once real pricing firms up.

### 11. Contact / Enquiry
- **Left — form** fields: Full name (text, required), Phone (tel, required), Email (email, optional), Message (text, placeholder "I'm interested in a 3 bed residence"). Primary submit button "Submit Enquiry".
  - **Behavior**: On submit, prevent default, show a confirmation message in place of the form: "Thanks — our team will call you shortly." (this text should be configurable/editable). In production this should actually submit to a lead endpoint/CRM rather than just show a client-side message.
- **Right — contact card**: Kicker "Contact", title "Sonia's Realty Media", body: "Sales & Realty", phone `+91 90367 47821` (as a `tel:` link), email `soniasrealtymedia@gmail.com` (as a `mailto:` link).

### 12. Closing banner
- **Layout**: Full-bleed band, background color `#5c4033` (warm brown), light/paper text color.
- **Content**: H3 "655 homes. Prestige Garden Breez — The Prestige City's Final Chapter.", a ghost button "Enquire Now" (outlined in the page's paper/background color) → `#contact`.

### 13. Footer
- Small muted text: "Sonia's Realty Media · +91 90367 47821 · soniasrealtymedia@gmail.com"

## Interactions & Behavior
- Smooth scrolling to in-page anchors (nav links, CTA buttons) — `scroll-behavior: smooth`.
- Fixed nav stays pinned above all content at all scroll depths (`position: fixed`, high z-index) — note: plain CSS `position: sticky` is NOT used here; use `fixed` (or an equivalent pinned-header pattern in the target framework) plus a same-height spacer to avoid initial content jump.
- Enquiry form: client-side submit handler swaps the form for a thank-you message (see Contact section above). Replace with a real submission (API call, email, or CRM webhook) in production.
- Video thumbnail is a plain link (opens YouTube in a new tab), not an inline player.
- Pricing section visibility is a single boolean flag.
- All photography is shown in full color (no filters).

## State Management
- `formSubmitted: boolean` — toggles the enquiry section between the form and a confirmation message.
- `showPricingSection: boolean` — toggles whether the Pricing section renders at all (content-level flag, e.g. a CMS field or env config, not user-facing state).
- `formSuccessMessage: string` — the confirmation copy shown after submit (configurable).
- No other client state or data fetching is required for this page as designed. A production build would add: form submission to a lead-capture backend, and possibly a CMS-backed content layer for copy/pricing/gallery images given how often real-estate listings change.

## Design Tokens
From the Modernist design system (`reference/modernist-styles.css`):

**Colors**
- Background: `#f3f2f2`
- Surface (cards/inputs): `#eae9e9`
- Text: `#201e1d`
- Accent (primary/CTA): `#ec3013`
- Accent hover: `#dd2b0f` (600), active/pressed: `#ae1800` (700)
- Divider: `color-mix(in srgb, #201e1d 40%, transparent)`
- Custom override used only for the closing banner: `#5c4033` (brown) — NOT part of the base design system palette; used per explicit client direction instead of the system's red accent for that one section.

**Typography**
- Font: "Archivo" (heading and body both), heading weight 800, body 400.
- Body base size 15px, line-height 1.55.
- Headings: h1 42px (hero uses a custom responsive `clamp(38px, 6vw, 72px)`), tight letter-spacing (-0.015em), line-height 1.12.

**Spacing scale**: 4, 8, 12, 16, 24, 32px (`--space-1` … `--space-8`).

**Radius**: 0px everywhere (sharp corners throughout — this is a deliberate "no rounded corners" style).

**Shadows**: subtle ink-tinted shadows, e.g. `0 1px 2px rgba(45,43,43,0.14)` for small elevation (used on the contact card).

**Rules/dividers**: 2px solid lines in the divider color between major sections (not soft/hairline).

## Assets
All assets are show-flat interior photographs and one signage photo supplied by the client (not stock or AI-generated), included in `assets/`:
- `hero-bedroom.png` — hero image (bedroom with red-panel accent wall)
- `gallery-01…08` — the 8 gallery interior photos, listed in display order above
- `video-thumbnail-entrance-sign.jpeg` — project entrance signage photo, used as the video's clickable thumbnail

The Google Maps embed and the YouTube video are both external/live embeds, not local assets — see Location and Project Film sections above for the exact query/URL to use.

## Files
- `reference/Prestige Garden Breez Landing.dc.html` — the full design reference (structure, inline styles, copy, and a small amount of interactive logic for the form/pricing toggle).
- `reference/modernist-styles.css` — the design-system stylesheet the reference depends on for colors, type, spacing, and component classes.
- `assets/` — all photography used in the design (see above).
