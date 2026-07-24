# Product Requirements Document (PRD) — Chroma28 Studio
**Ultra-Premium Production & Studio Rental Platform (Beirut, Lebanon)**

---

## 1. Executive Summary & Vision

Chroma28 Studio is a world-class production studio rental facility located in Antelias, Beirut, Lebanon. Featuring a premier White Cyclorama Infinity Wall, Aqua Shooting Space, Chef Kitchen Studio, Black Side Studio, and Podcast Studio, Chroma28 serves high-end commercial agencies, directors, photographers, and content creators.

This PRD establishes the architectural and visual standards to turn Chroma28 Studio's web application into an **ultra-luxury, motion-driven digital showcase**. Inspired by leading modern design systems (**Aceternity UI**, **Magic UI**, **ReactBits UI**, and **Shadcn UI**), the platform combines smooth micro-interactions, spring-driven page transitions, glassmorphic UI elements, and interactive booking flows.

---

## 2. Luxury Motion & Animation Specification

To deliver an immersive high-end feel, every element across the platform follows a curated motion system powered by **Motion (Framer Motion)** and **GSAP**:

### A. Page Load & Route Transitions
- **Fade In & Fade Out**: Smooth opacity transitions (`opacity: 0` $\rightarrow$ `opacity: 1`) on enter and exit.
- **Scale Zoom In & Zoom Out**: Micro zoom effect (`scale: 0.97` $\rightarrow$ `scale: 1.0` on enter, `scale: 1.02` $\rightarrow$ exit) to create spatial depth.
- **Slide In & Slide Out**: Subtle vertical translation (`y: 24px` $\rightarrow$ `y: 0px`) with bezier curve `cubic-bezier(0.16, 1, 0.3, 1)`.

### B. Scroll & Reveal Animations
- **Text Reveal (ReactBits)**: `SplitText` and `BlurText` character/word stagger animations for section headlines.
- **Staggered Card Reveal**: Sequential entrance of studio cards, equipment items, and portfolio highlights as they enter the viewport (`viewport={{ once: true, margin: "-100px" }}`).
- **Parallax & Depth**: Smooth image scale-up on scroll (`transform: scale(1.08)`) with subtle parallax background layers.

### C. Micro-Interactions & Hover States
- **Image Hover Zoom**: 3D tilt and image zoom (`scale(1.05)`) with overflow containment and smooth 500ms ease.
- **Ripple & Glow Buttons**: Dynamic cursor-following glow and magnetic ripple effects on CTA buttons (`RippleButton`, `UiverseButton`).
- **Glassmorphic Hover**: Card borders illuminate from subtle white line to glowing golden/cyan border (`border-color: rgba(212, 175, 55, 0.6)`).

---

## 3. UI Component Blueprint (Inspired by Top UI Libraries)

The platform integrates design patterns from leading free UI libraries:

| Library Source | Feature / Component | Chroma28 Implementation |
| :--- | :--- | :--- |
| **Aceternity UI** | **Spotlight & Background Beams** | Subtle radial gradient spotlight following mouse position in Hero & Studio Detail headers. |
| **Aceternity UI** | **Hover Effect & Card Grid** | Animated border backdrop on studio grid cards that smooth-tracks cursor hover position. |
| **Magic UI** | **Bento Grid** | Asymmetrical layout for studios & equipment features with variable column spans and live badges. |
| **Magic UI** | **Marquee (Testimonials)** | Double-track smooth infinite horizontal scroll featuring client logos & director reviews. |
| **ReactBits UI** | **BlurText & SplitText** | Dynamic typography reveal for titles like "ELEVATE YOUR VISION" with letter blur-to-sharp animation. |
| **ReactBits UI** | **OptionWheel** | Interactive 3D carousel/wheel selector inside the instant studio booking modal. |
| **Shadcn UI** | **Accordion & Modal Dialog** | Clean accessible FAQ accordion and glassmorphic overlay modal for booking inquiries. |

---

## 4. Key Page Architecture & Content Strategy

### 1. Home Page (`/`)
- **Hero Section**: Ambient dark background with spotlight, `BlurText` headline, background loop image slider, quick stat counter (Cyclorama dimensions, total sq m, equipment count).
- **Studio Spaces Bento**: Quick preview cards for Cyclorama, Aqua Studio, Kitchen Studio, Podcast Studio, Black Studio with interactive quick-book buttons.
- **Why Chroma28**: Production advantages (soundproof, 3-phase power, client lounge, motorized grid, makeup suite).
- **Selected Works / Portfolio Showcase**: Filterable gallery of music videos, commercials, and fashion editorials shot at Chroma28.
- **Client Testimonials Marquee**: Dual auto-scrolling marquee of reviews from top regional production houses.

### 2. Studios & Spaces (`/studios` & `/spaces/:slug`)
- Detailed spatial specs: Floor plan dimensions, ceiling height, electrical capacity, HVAC/sound rating, included lighting.
- Interactive image gallery with full-screen lightbox and 360-style view options.
- Dynamic pricing breakdown and instant booking trigger pre-filled with the space ID.

### 3. Camera & Lighting Equipment (`/equipment`)
- Filterable catalog: Cameras (ARRI, RED, Sony), Cinema Lenses, ARRI Skypanels, Aputure Lights, Grip, Wireless Video, Sound Gear.
- "Add to Production Package" toggle to build customized studio rental bundles.

### 4. Portfolio & Services (`/portfolio` & `/services`)
- Showcase of high-profile projects hosted at the studio.
- Full-service production capabilities: Set design, equipment technician, gaffer on set, catering, production coordination.

### 5. Instant Studio Booking Modal (`BookingModal`)
- Multi-step interactive modal with option wheel space selection, date picker, time slot, gear add-ons, and contact details.
- Form validation and instant notification triggering.

---

## 5. Directory & File Structure (Production Standard)

```
chroma28 studio/
├── prd.md                           # Product Requirements & Design System Doc
├── vite.config.ts                   # Vite configuration with @/ alias -> ./src
├── tsconfig.json                    # TypeScript paths & compiler rules
├── package.json                     # Dependencies & cross-platform scripts
├── index.html                       # HTML head with typography & SEO meta
├── public/                          # Static icons & public assets
└── src/
    ├── assets/
    │   └── images/                  # High-res studio photos & branding
    ├── components/
    │   ├── booking/                 # BookingModal, OptionWheel
    │   ├── common/                  # BlurText, SplitText, RippleButton, UiverseButton, FaqAccordion, SeoHead
    │   ├── layout/                  # Navbar, Footer, SpacesMegaMenu, StaggeredMenu
    │   └── sections/                # TestimonialsMarquee, HeroSpotlight, SpaceBento
    ├── context/
    │   └── BookingContext.tsx       # Global booking modal & space selection state
    ├── data/
    │   ├── equipment.ts             # Gear inventory catalog
    │   ├── faqs.ts                  # Frequently asked questions
    │   ├── portfolio.ts             # Featured client projects
    │   ├── services.ts              # Studio production services
    │   └── spaces.ts                # Studio spaces data & specs
    ├── hooks/
    │   └── useBooking.ts            # Custom hook for booking modal actions
    ├── lib/
    │   └── utils.ts                 # Class merger utility (cn) & helper functions
    ├── pages/
    │   ├── HomePage.tsx
    │   ├── StudiosPage.tsx
    │   ├── SpaceDetailPage.tsx
    │   ├── EquipmentPage.tsx
    │   ├── PortfolioPage.tsx
    │   ├── ServicesPage.tsx
    │   ├── ProcessPage.tsx
    │   ├── TestimonialsPage.tsx
    │   ├── LocationPage.tsx
    │   ├── FaqPage.tsx
    │   └── WhoItsForPage.tsx
    ├── types/
    │   └── index.ts                 # Shared TypeScript interfaces & types
    ├── App.tsx                      # Root App with Motion AnimatePresence & BookingProvider
    ├── index.css                    # Tailwind setup & luxury design tokens
    ├── main.tsx                     # React entrypoint
    └── vite-env.d.ts                # Vite client types
```

---

## 6. Technical Stack & Dependencies

- **Framework**: React 19 + TypeScript + Vite 6
- **Styling**: Tailwind CSS v4 + Custom Glassmorphic Utilities
- **Animation**: Motion (`motion/react` v12), GSAP (`gsap` v3)
- **Icons**: Lucide React (`lucide-react`)
- **State Management**: React Context (`BookingContext`) + Custom Hooks

---

## 7. Verification & Production Quality Checklist

1. **Zero TypeScript Errors**: Complete type checking with `tsc --noEmit`.
2. **Smooth 60FPS Performance**: GPU-accelerated motion transforms (`transform: translate3d`).
3. **Responsive Design**: Flawless layout across Mobile, Tablet, Desktop, and 4K Displays.
4. **Clean Codebase**: Logical component encapsulation with clear `@/` path alias imports.
