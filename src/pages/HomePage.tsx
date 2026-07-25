import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Sparkles, MapPin, ChevronRight } from 'lucide-react';
import { STUDIO_SPACES } from '@/data/spaces';
import { 
  SeoHead, 
  UiverseButton, 
  BlurText, 
  TestimonialsMarqueeSection, 
  FaqAccordionSection,
  ScrollReveal,
  SlideUp,
  SlideDown,
  FadeIn,
  SlideLeft,
  SlideRight,
  ZoomIn,
  StaggerContainer
} from '@/components';

import heroLoop1 from '@/assets/images/hero_loop_1_1784886139671.jpg';
import heroLoop2 from '@/assets/images/hero_loop_2_1784886152775.jpg';
import heroLoop3 from '@/assets/images/hero_loop_3_1784886163230.jpg';
import heroLoop4 from '@/assets/images/hero_loop_4_1784886175212.jpg';
import heroLoop5 from '@/assets/images/hero_loop_5_1784886187685.jpg';
import heroLoop6 from '@/assets/images/hero_loop_6_1784886198928.jpg';
import heroLoop7 from '@/assets/images/hero_loop_7_1784886220204.jpg';
import agencyTeamImg from '@/assets/images/agency_creative_team_1784894213783.jpg';
import chefKitchenImg from '@/assets/images/chef_kitchen_studio_1784894227740.jpg';
import podcastSofaImg from '@/assets/images/podcast_curved_sofa_1784894244015.jpg';
import cycloramaImg from '@/assets/images/cyclorama_infinity_wall_1784894791099.jpg';
import blackSideImg from '@/assets/images/black_side_studio_1784894805473.jpg';
import aquaImg from '@/assets/images/aqua_shooting_space_1784894816476.jpg';
import agencyTeamNew from '@/assets/images/agency_team.jpg';
import kitchenShootNew from '@/assets/images/kitchen_shoot.jpg';
import podcasterNew from '@/assets/images/podcaster.jpg';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenBooking }) => {
  const [quickContact, setQuickContact] = useState('');

  const featuredSpaces = STUDIO_SPACES.slice(0, 6);

  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, {
    damping: 30,
    stiffness: 70,
    restDelta: 0.001
  });

  const textScale = useTransform(smoothY, [0, 450], [1, 0.55]);
  const textY = useTransform(smoothY, [0, 450], [0, -75]);
  const textOpacity = useTransform(smoothY, [0, 450], [1, 0.95]);

  const ctaScale = useTransform(smoothY, [0, 450], [1, 0.8]);
  const ctaY = useTransform(smoothY, [0, 450], [0, -45]);

  const heroImages = [
    heroLoop1,
    heroLoop2,
    heroLoop3,
    heroLoop4,
    heroLoop5,
    heroLoop6,
    heroLoop7,
  ];

  return (
    <div className="w-full bg-transparent text-white selection:bg-[#e040fb] selection:text-white page-enter">
      <SeoHead
        title="Chroma28 Studio — Studio Rental & Production Studio Beirut, Lebanon"
        description="Chroma28 Studio is a premier production studio rental, white cyclorama, podcast studio, kitchen studio, equipment rental and video production in Antelias, Beirut, Lebanon."
        faq={{
          question: 'Why is Chroma28 Studio the preferred studio rental in Beirut and Antelias?',
          answer: 'Chroma28 Studio offers 10 specialized production spaces with 3-phase power, acoustic isolation, and full equipment packages under one roof in Antelias.'
        }}
      />

      {/* ---------- HERO SECTION (Left-aligned scaling typography & full-ratio marquee at bottom) ---------- */}
      <section className="relative w-full bg-transparent text-white overflow-hidden pt-8 sm:pt-14 pb-0 border-b border-white/10 min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-96px)] flex flex-col justify-between">
        
        {/* Left-Aligned Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-left flex flex-col items-start justify-center my-auto py-6 sm:py-10 w-full relative z-10">
          
          {/* Scroll-Driven Wrapper around Headline */}
          <motion.div
            style={{
              scale: textScale,
              y: textY,
              opacity: textOpacity,
            }}
            className="origin-left select-none text-left"
          >
            {/* Main Display Brand Name with Geist font in Larger Size */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[11.5rem] font-black text-black uppercase tracking-tighter leading-[0.84] font-geist select-none text-left"
            >
              Chroma28 Studio
            </motion.h1>
          </motion.div>

          {/* Uiverse CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                scale: ctaScale,
                y: ctaY,
              }}
              className="flex justify-start mt-6 sm:mt-8 origin-left"
            >
            <UiverseButton
              text="Explore Our Studio"
              onClick={() => {
                onNavigate('/studios');
              }}
            />
          </motion.div>
        </div>

        {/* Continuous Seamless Infinite Loop Image Marquee in Full Aspect Ratio */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full overflow-hidden mt-auto border-t border-black/15 bg-black"
        >
          <div className="marquee overflow-hidden relative">
            <div className="animate-marquee flex items-center gap-0 whitespace-nowrap">
              {[
                ...heroImages,
                ...heroImages,
                ...heroImages,
                ...heroImages,
              ].map((imgUrl, idx) => (
                <div
                  key={`hero-loop-${idx}`}
                  className="flex-none w-72 sm:w-96 md:w-[28rem] lg:w-[32rem] aspect-[16/10] relative overflow-hidden bg-black border-0 -mr-px shrink-0"
                >
                  <img
                    src={imgUrl}
                    alt={`Chroma28 Studio Shoot Photo ${(idx % 7) + 1}`}
                    className="w-full h-full object-cover block border-0 transition-transform duration-500 hover:scale-105 select-none"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </section>

      {/* ---------- DARK BRAND MARQUEE STRIP (Chroma28 Style) ---------- */}
      <section
        className="marquee-dark-strip py-7 border-b border-white/5 font-opensans"
        aria-label="Trusted by agencies and brands"
      >
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-white/30 mb-5 font-opensans"
        >
          Chroma28 Studio &nbsp;·&nbsp; Trusted by Agencies, Brands &amp; Production Companies
        </motion.div>

        <div className="marquee-fade-edges overflow-hidden relative font-opensans select-none">
          <div className="animate-marquee flex items-center gap-0 whitespace-nowrap">
            {[
              'Studio Rental', 'Equipment Rental', 'Production', 'Podcasts',
              'Branded Content', 'Cyclorama', 'Kitchen Studio', 'Post-Production',
              'Studio Rental', 'Equipment Rental', 'Production', 'Podcasts',
              'Branded Content', 'Cyclorama', 'Kitchen Studio', 'Post-Production',
            ].map((item, i) => (
              <React.Fragment key={i}>
                <span className="font-barlow text-[1.35rem] sm:text-2xl font-black uppercase text-white tracking-wide px-6">
                  {item}
                </span>
                <span
                  className="text-[#e040fb] font-black text-xl select-none flex-shrink-0"
                  style={{ textShadow: '0 0 12px rgba(224,64,251,0.9), 0 0 28px rgba(224,64,251,0.5)' }}
                >
                  ✦
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- THIRD SECTION: ARCHITECTURAL STATEMENT WITH ITALIC BLUR TEXT (SLIDE IN FROM RIGHT) ---------- */}
      <ScrollReveal variant="slideLeft" className="w-full">
        <section className="relative w-full py-28 sm:py-36 md:py-48 px-6 sm:px-12 bg-white border-b border-black/15 flex items-center justify-center overflow-hidden font-geist min-h-screen sm:min-h-[calc(100vh-80px)]">
          {/* Left Year Badge */}
          <span className="hidden md:block absolute left-8 lg:left-14 top-1/2 -translate-y-1/2 font-mono text-xs sm:text-sm font-normal text-neutral-400 uppercase tracking-widest select-none">
            2016
          </span>

          {/* Center Blur Text Container with Italic font */}
          <div className="max-w-5xl mx-auto text-center px-4 font-geist">
            <BlurText
              text="WE BUILD SPACES WHERE CREATORS, BRANDS, AND BUSINESSES PRODUCE PROFESSIONAL CONTENT FOCUSED ON CLARITY AND CREATIVE IMPACT"
              delay={35}
              animateBy="words"
              direction="top"
              stepDuration={0.25}
              threshold={0.1}
              rootMargin="0px 0px -40px 0px"
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[3.4rem] font-extrabold italic font-italic text-black leading-[1.16] tracking-tight font-geist uppercase"
            />
          </div>

          {/* Right Year Badge */}
          <span className="hidden md:block absolute right-8 lg:right-14 top-1/2 -translate-y-1/2 font-mono text-xs sm:text-sm font-normal text-neutral-400 uppercase tracking-widest select-none">
            2026
          </span>
        </section>
      </ScrollReveal>

      {/* ---------- EDITORIAL "OUR PHILOSOPHY" SECTION (SLIDE IN FROM LEFT) ---------- */}
      <ScrollReveal variant="slideRight" className="w-full bg-white/5 backdrop-blur-md">
        <section className="w-full text-white py-20 sm:py-28 lg:py-32 px-6 sm:px-12 border-b border-white/10 font-geist">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column (7 Columns) */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              <div>
                {/* Eyebrow */}
                <span className="text-xs font-bold tracking-[0.2em] text-[#e040fb] uppercase mb-4 block">
                  PHILOSOPHY
                </span>

                {/* Statement Headline */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.45rem] font-bold tracking-tight text-white leading-[1.18] font-geist mb-10 sm:mb-14 max-w-2xl">
                  Every project is shaped through proportion, light, texture, and spatial balance. We believe great design should feel natural over time, creating environments that are both functional and emotionally connected to everyday life
                </h2>
              </div>

              {/* Bottom Left: Image slides right smoothly and lazily next to text */}
              <div className="flex flex-col sm:flex-row items-start gap-6 lg:gap-8 mt-6 lg:mt-8">
                <ScrollReveal variant="slideRight" duration={1.2} className="w-full sm:w-60 md:w-64 aspect-[4/3] shrink-0 relative overflow-hidden bg-white/25 border border-white/10 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                    alt="Architectural window light and grid shadow on white sofa"
                    className="w-full h-full object-cover grayscale contrast-125 select-none hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </ScrollReveal>
                <div className="flex-1">
                  <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal pt-1 max-w-sm font-sans">
                    Every studio at Chroma28 is built to remove friction from production. Thoughtful layouts, professional cinema equipment, natural workflow, and flexible spaces let your team focus on creating instead of setting up.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (5 Columns): Tall image slides left smoothly and lazily */}
            <div className="lg:col-span-5 relative w-full">
              <ScrollReveal variant="slideLeft" duration={1.2} className="w-full aspect-[4/5] relative overflow-hidden bg-neutral-900 border border-white/10 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Chroma28 Modern Studio Architecture Antelias Beirut"
                  className="w-full h-full object-cover select-none hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Floating Location Badge */}
                <div className="absolute top-4 right-4 bg-black/85 text-white backdrop-blur-md px-3 py-1.5 text-[11px] font-mono font-bold tracking-widest uppercase">
                  Antelias • Beirut
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>
      </ScrollReveal>

      {/* ---------- STUDIO HIGHLIGHTS (SLIDE IN FROM RIGHT) ---------- */}
      <ScrollReveal variant="slideLeft" className="w-full">
        <section id="studio-spaces" className="py-16 sm:py-20 lg:py-24 px-6 sm:px-12 max-w-7xl mx-auto font-geist bg-transparent border-b border-white/10">
          {/* Dual-Tone Headline & Top Right Action */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-12 sm:mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-5xl lg:text-[3.2rem] font-bold tracking-tight leading-[1.12] font-geist">
                <span className="text-white">We build production–first digital stages to help category </span>
                <span className="text-neutral-400 font-normal">leaders lead</span>
                <br />
                <span className="text-neutral-400 font-normal">their industries.</span>
              </h2>
            </div>

            <button
              onClick={() => onNavigate('/studios')}
              className="text-xs font-mono font-bold uppercase tracking-widest text-black hover:text-neutral-600 transition-colors flex items-center gap-1.5 self-start lg:self-start underline underline-offset-4 decoration-black/30 hover:decoration-black cursor-pointer shrink-0 pt-2"
            >
              <span>&rarr;</span> ALL STUDIOS &amp; SETS
            </button>
          </div>

          {/* 4-Column High-Contrast Editorial Cards */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
            
            {/* Card 01: Cyclorama Infinity Wall */}
            <ScrollReveal asChild variant="slideUp">
              <div className="glow-card-wrapper aspect-[3/4] w-full">
                <div className="glow-card-inner aspect-[3/4] w-full group cursor-pointer relative bg-neutral-100 shadow-md flex flex-col justify-between"
                  onClick={() => onNavigate('/spaces/cyclorama')}>
                  <img
                    src={cycloramaImg}
                    alt="Cyclorama Infinity Wall Studio"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                  <div className="relative z-10 p-6 text-white mt-auto mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold font-geist tracking-tight text-white leading-tight">
                      Cyclorama Infinity Wall
                    </h3>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 z-20 bg-black/95 px-4 sm:px-5 py-3.5 flex items-center justify-between text-white text-[11px] sm:text-xs font-normal font-sans uppercase tracking-wider group-hover:bg-black transition-colors border-t border-white/10">
                    <span className="font-sans font-normal">EXPLORE SPACES &amp; RESERVE STAGE</span>
                    <span className="text-sm font-sans font-normal">&rarr;</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 02: The Black Side */}
            <ScrollReveal asChild variant="slideUp">
              <div className="glow-card-wrapper aspect-[3/4] w-full">
                <div className="glow-card-inner aspect-[3/4] w-full group cursor-pointer relative bg-neutral-900 shadow-md flex flex-col justify-between"
                  onClick={() => onNavigate('/spaces/black-side')}>
                  <img
                    src={blackSideImg}
                    alt="The Black Side Stage"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                  <div className="relative z-10 p-6 text-white mt-auto mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold font-geist tracking-tight text-white leading-tight">
                      The Black Side
                    </h3>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 z-20 bg-black/95 px-4 sm:px-5 py-3.5 flex items-center justify-between text-white text-[11px] sm:text-xs font-normal font-sans uppercase tracking-wider group-hover:bg-black transition-colors border-t border-white/10">
                    <span className="font-sans font-normal">EXPLORE SPACES &amp; RESERVE STAGE</span>
                    <span className="text-sm font-sans font-normal">&rarr;</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 03: Cook & Shoot Kitchen Studio */}
            <ScrollReveal asChild variant="slideUp">
              <div className="glow-card-wrapper aspect-[3/4] w-full">
                <div className="glow-card-inner aspect-[3/4] w-full group cursor-pointer relative bg-neutral-100 shadow-md flex flex-col justify-between"
                  onClick={() => onNavigate('/spaces/kitchen')}>
                  <img
                    src={chefKitchenImg}
                    alt="Cook & Shoot Kitchen Studio"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                  <div className="relative z-10 p-6 text-white mt-auto mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold font-geist tracking-tight text-white leading-tight">
                      Cook &amp; Shoot Kitchen Studio
                    </h3>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 z-20 bg-black/95 px-4 sm:px-5 py-3.5 flex items-center justify-between text-white text-[11px] sm:text-xs font-normal font-sans uppercase tracking-wider group-hover:bg-black transition-colors border-t border-white/10">
                    <span className="font-sans font-normal">EXPLORE SPACES &amp; RESERVE STAGE</span>
                    <span className="text-sm font-sans font-normal">&rarr;</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 04: Aqua Shooting Space */}
            <ScrollReveal asChild variant="slideUp">
              <div className="glow-card-wrapper aspect-[3/4] w-full">
                <div className="glow-card-inner aspect-[3/4] w-full group cursor-pointer relative bg-neutral-100 shadow-md flex flex-col justify-between"
                  onClick={() => onNavigate('/spaces/aqua')}>
                  <img
                    src={aquaImg}
                    alt="Aqua Shooting Space"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                  <div className="relative z-10 p-6 text-white mt-auto mb-12">
                    <h3 className="text-xl sm:text-2xl font-bold font-geist tracking-tight text-white leading-tight">
                      Aqua Shooting Space
                    </h3>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 z-20 bg-black/95 px-4 sm:px-5 py-3.5 flex items-center justify-between text-white text-[11px] sm:text-xs font-normal font-sans uppercase tracking-wider group-hover:bg-black transition-colors border-t border-white/10">
                    <span className="font-sans font-normal">EXPLORE SPACES &amp; RESERVE STAGE</span>
                    <span className="text-sm font-sans font-normal">&rarr;</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </StaggerContainer>
        </section>
      </ScrollReveal>

      {/* ---------- ICP PORTAL CARDS (SLIDE IN FROM LEFT) ---------- */}
      <ScrollReveal variant="slideRight" className="w-full">
        <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-black/15 bg-white font-opensans">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-semibold mb-4 font-opensans">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block animate-pulse"></span>
              <span>with cutting-edge strategy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-black leading-tight mb-4 font-opensans">
              Built for Your Industry Needs
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-xl mx-auto leading-relaxed font-opensans">
              Modular production workflows designed for rapid creative delivery, precision execution, and maximum brand impact.
            </p>
          </div>

          {/* 3 Minimal Cards */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            
            {/* Card 1: Strategy / Agencies & Brands */}
            <ScrollReveal asChild variant="slideUp">
              <div className="glow-card-wrapper min-h-[380px] w-full">
                <div className="glow-card-inner min-h-[380px] w-full group cursor-pointer relative p-7 flex flex-col justify-between bg-neutral-950 text-white"
                  onClick={() => onNavigate('/who-its-for')}>
                  <img
                    src={agencyTeamNew}
                    alt="Strategy & Agency Team"
                    className="absolute inset-x-0 bottom-0 top-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 self-start opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-medium font-opensans bg-black/40 border border-white/20 text-white/90 backdrop-blur-md">
                      Strategy
                    </span>
                  </div>
                  <div className="relative z-10 pt-16 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mb-3"></div>
                    <h3 className="text-xl font-bold font-geist tracking-tight leading-snug mb-2 text-white">
                      Bold strategies that shape identities
                    </h3>
                    <p className="text-xs text-neutral-300 font-opensans leading-relaxed">
                      We craft concepts that define unique brands and strengthen their presence.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Growth / Culinary & FMCG */}
            <ScrollReveal asChild variant="slideUp">
              <div className="glow-card-wrapper min-h-[380px] w-full">
                <div className="glow-card-inner min-h-[380px] w-full group cursor-pointer relative p-7 flex flex-col justify-between bg-neutral-950 text-white"
                  onClick={() => onNavigate('/spaces/kitchen')}>
                  <img
                    src={kitchenShootNew}
                    alt="Culinary Chef Studio"
                    className="absolute inset-x-0 bottom-0 top-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 self-start opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-medium font-opensans bg-black/40 border border-white/20 text-white/90 backdrop-blur-md">
                      Growth
                    </span>
                  </div>
                  <div className="relative z-10 pt-16 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mb-3"></div>
                    <h3 className="text-xl font-bold font-geist tracking-tight leading-snug mb-2 text-white">
                      Driving measurable growth through impact
                    </h3>
                    <p className="text-xs text-neutral-300 font-opensans leading-relaxed">
                      Focused on reach, engagement, and real results — not empty noise.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Creative / Podcasters & Creators */}
            <ScrollReveal asChild variant="slideUp">
              <div className="glow-card-wrapper min-h-[380px] w-full">
                <div className="glow-card-inner min-h-[380px] w-full group cursor-pointer relative p-7 flex flex-col justify-between bg-neutral-950 text-white"
                  onClick={() => onNavigate('/spaces/podcast-room-1')}>
                  <img
                    src={podcasterNew}
                    alt="Podcast Studio Room"
                    className="absolute inset-x-0 bottom-0 top-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 self-start opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-medium font-opensans bg-black/40 border border-white/20 text-white/90 backdrop-blur-md">
                      Creative
                    </span>
                  </div>
                  <div className="relative z-10 pt-16 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mb-3"></div>
                    <h3 className="text-xl font-bold font-geist tracking-tight leading-snug mb-2 text-white">
                      Creative processes with rapid delivery
                    </h3>
                    <p className="text-xs text-neutral-300 font-opensans leading-relaxed">
                      Ideas turn into results fast, without losing quality or relevance.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </StaggerContainer>
        </section>
      </ScrollReveal>

      {/* ---------- CLIENT REVIEWS & MARQUEE TESTIMONIALS (SLIDE IN FROM RIGHT) ---------- */}
      <ScrollReveal variant="slideLeft" className="w-full">
        <TestimonialsMarqueeSection />
      </ScrollReveal>

      {/* ---------- TRUST & REAL STATS BAR (SLIDE IN FROM LEFT) ---------- */}
      <ScrollReveal variant="slideRight" className="w-full">
        <section className="py-16 bg-white border-y border-black/15">
          <StaggerContainer className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <ScrollReveal asChild variant="zoomIn">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-black mb-1">10</div>
                <div className="text-xs text-black/60 uppercase font-bold tracking-wider">Specialized Sets</div>
              </div>
            </ScrollReveal>
            <ScrollReveal asChild variant="zoomIn">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-black mb-1">32A</div>
                <div className="text-xs text-black/60 uppercase font-bold tracking-wider">3-Phase Industrial Power</div>
              </div>
            </ScrollReveal>
            <ScrollReveal asChild variant="zoomIn">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-black mb-1">5 Mins</div>
                <div className="text-xs text-black/60 uppercase font-bold tracking-wider">From Central Beirut</div>
              </div>
            </ScrollReveal>
            <ScrollReveal asChild variant="zoomIn">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-black mb-1">100%</div>
                <div className="text-xs text-black/60 uppercase font-bold tracking-wider">Sound Damped Isolation</div>
              </div>
            </ScrollReveal>
          </StaggerContainer>
        </section>
      </ScrollReveal>

      {/* ---------- FAQ ACCORDION SECTION (SLIDE IN FROM RIGHT) ---------- */}
      <ScrollReveal variant="slideLeft" className="w-full">
        <FaqAccordionSection />
      </ScrollReveal>

      {/* ---------- LOCATION & MAP SUMMARY (SLIDE IN FROM LEFT) ---------- */}
      <ScrollReveal variant="slideRight" className="w-full">
        <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-black/15 bg-neutral-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest mb-4 rounded-none">
                <MapPin size={12} />
                Antelias, Beirut, Lebanon
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black uppercase mb-4">
                Convenient Location &amp; Dedicated Parking
              </h2>
              <p className="text-xs sm:text-sm text-black/70 mb-6 leading-relaxed font-normal">
                Located directly on the main Antelias Highway in Metn, Mount Lebanon — just 5 to 10 minutes from central Beirut with direct drive-in loading access for production trucks and reserved client parking.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://maps.app.goo.gl/ktg5WmJpeDpwxUMJ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid inline-flex items-center gap-2"
                >
                  Open in Google Maps <ArrowRight size={14} />
                </a>
                <button
                  onClick={() => onNavigate('/location')}
                  className="px-4 py-2.5 border border-black text-black font-bold text-xs uppercase hover:bg-black hover:text-white transition-colors cursor-pointer"
                >
                  View Access Specs
                </button>
              </div>
            </div>

            <div className="bg-white p-2 border-2 border-black flex flex-col justify-center items-center text-center rounded-none shadow-md overflow-hidden relative">
              <iframe
                title="Chroma28 Studio Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13243.681640166662!2d35.58988!3d33.9147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f16c1410f9261%3A0xb3e1e97dd8178120!2sAntelias%2C%20Lebanon!5e0!3m2!1sen!2slb!4v1700000000000"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-64 grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="w-full p-4 bg-black text-white flex items-center justify-between gap-3 text-left font-opensans">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider font-opensans">Chroma28 Studio Antelias</h4>
                  <p className="text-[11px] text-neutral-400 font-opensans">Main Highway, Metn, Mount Lebanon</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/ktg5WmJpeDpwxUMJ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-opensans font-bold uppercase tracking-wider text-black bg-white px-3 py-1.5 hover:bg-neutral-200 transition-colors shrink-0"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* SEO Tag Watermark */}
      <div className="text-center py-6 text-[10px] text-black/40 tracking-[0.2em] uppercase font-mono border-t border-black/15">
        CHROMA28 STUDIO — PREMIER PRODUCTION HUB BEIRUT
      </div>
    </div>
  );
};
