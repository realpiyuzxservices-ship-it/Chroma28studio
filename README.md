# Chroma28 Studio — Premier Production Hub & Studio Rental (Beirut, Lebanon)

Welcome to the official repository for **Chroma28 Studio**, Beirut's leading 10-set commercial production facility, video studio, and creative content hub located in Antelias, Mount Lebanon.

---

## 🎬 Business Overview

Chroma28 Studio provides end-to-end commercial filming, fashion lookbook photography, 4K multi-cam podcast recording, and culinary video production infrastructure under one roof. Designed for advertising agencies, production houses, directors, and global brands, Chroma28 eliminates pre-production setup friction with pre-lit stages, 3-phase power, acoustic isolation, and seamless freight access.

### 🌟 Key Studio Sets & Facilities
1. **White Cyclorama Infinity Wall**: Pristine seamless curve for fashion editorials, commercial ads, and VFX keying.
2. **The Black Side Stage**: Blackout box with heavy-duty overhead grid for cinematic mood lighting.
3. **Cook & Shoot Kitchen**: Fully functional culinary set with working gas, top-down camera rigs, and prop staging.
4. **Podcast Suite 1 & 2**: Pre-wired multi-cam acoustic suites with Shure SM7B broadcast microphones and live video switchers.
5. **Daylight Loft & Vintage Parlor**: Authentic textured set spaces for lifestyle lookbooks and intimate interviews.
6. **Aqua & Water FX Set**: Specialized waterproof basin stage for liquid product shoots.
7. **Equipment Rental Catalog**: On-site Sony FX cinema cameras, G Master lenses, Aputure LED rigs, and grip packages.

---

## 🚀 Key Features & Motion Architecture

- **Awwwards-Style Scroll Motion**: Pinning and scrubbing typography animations, smooth spring physics, and scroll-driven scale-down effects powered by Framer Motion & GSAP.
- **SplitText & Character Reveal Animations**: GSAP character-by-character typing transitions across all main page headers.
- **Full-Screen Architectural Statement**: Viewport-covering interactive statement cards with custom year badges and luxury blur-text reveals.
- **Seamless Infinite Marquee**: Dynamic 60fps image slider showcasing real production shoot assets.
- **Interactive Booking Suite**: Multi-step studio booking modal with instant space selection, date picker, equipment add-ons, and WhatsApp/Email submission.
- **SEO & Performance Optimized**: Full meta tag coverage, OpenGraph integration, structural schema JSON-LD, and zero build warnings.

---

## 🛠️ Technology Stack

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Vanilla CSS Motion Tokens, Lucide Icons
- **Animation Engine**: Framer Motion (`motion/react`), GSAP 3 (ScrollTrigger, SplitText)
- **UI Components**: Custom Uiverse buttons, Glassmorphism Cards, Aceternity/Magic UI inspired design elements
- **Form & Context**: React Context API (`BookingContext`), Lucide React Icons

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/realpiyuzxservices-ship-it/Chroma28studio.git
   cd Chroma28studio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser to view the application.

4. **Verify TypeScript compilation**:
   ```bash
   npm run lint
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your code to GitHub (see instructions below).
2. Log in to [Vercel](https://vercel.com) and click **New Project**.
3. Import the `Chroma28studio` GitHub repository.
4. Keep standard build settings (`Build Command: npm run build`, `Output Directory: dist`).
5. Click **Deploy**.

### Deploy to Netlify
1. Connect your GitHub repository to [Netlify](https://netlify.com).
2. Set Build Command: `npm run build`.
3. Set Publish Directory: `dist`.
4. Click **Deploy Site**.

---

## 📤 Pushing Code to GitHub

To push the latest code to GitHub, execute the following commands in your terminal:

```bash
git init
git add .
git commit -m "feat: complete Chroma28 Studio production website with luxury motion animations"
git remote add origin https://github.com/realpiyuzxservices-ship-it/Chroma28studio.git
git branch -M main
git push -u origin main
```

---

## 📄 License & Attribution

© 2026 Chroma28 Studio. All rights reserved. Designed for commercial production and studio rental operations in Antelias, Beirut, Lebanon.
