import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS } from '@/data/portfolio';
import { SeoHead, UiverseButton, SlideDown, FadeIn, ZoomIn, SplitText } from '@/components';

interface PortfolioPageProps {
  onOpenBooking: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Commercial', 'Photography', 'Podcast', 'Social Media', 'Video Production'];

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full bg-transparent text-white py-12 px-6 sm:px-12 max-w-7xl mx-auto selection:bg-[#e040fb] selection:text-white page-enter">
      <SeoHead
        title="Our Work & Portfolio — Chroma28 Studio Beirut"
        description="Explore recent video productions, commercial photography, recipe videos, and 4K podcasts produced at Chroma28 Studio in Antelias, Beirut."
      />

      {/* ── Page Header Redesign (Reference Style) ── */}
      <div className="mb-16 border-b border-white/10 pb-12">
        <SlideDown delay={0}>
          <span className="font-barlow text-sm font-bold uppercase tracking-[0.25em] text-[#e040fb] block mb-3">
            CHROMA28 STUDIO / ARCHIVE
          </span>
        </SlideDown>

        <h1 className="font-barlow text-4xl sm:text-7xl font-black uppercase tracking-tight text-white leading-[0.9] mb-6 max-w-5xl">
          SUPERCHARGES THE POWER OF{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-extrabold">
            BRANDS &amp; CREATIVES
          </span>{' '}
          TO SOLVE PROBLEMS{' '}
          <span className="inline-block px-6 py-2 rounded-full border-2 border-pink-500 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            AT SCALE
          </span>
        </h1>

        <FadeIn delay={0.25}>
          <p className="font-barlow text-lg sm:text-xl text-neutral-400 max-w-3xl uppercase tracking-wide leading-relaxed">
            A showcase of commercial films, luxury editorials, high-engagement culinary campaigns, and broadcast-grade podcasts created in Antelias, Beirut.
          </p>
        </FadeIn>
      </div>

      {/* ── Thin Capsule Filter Tabs (Reference Style) ── */}
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap items-center gap-3 mb-16 justify-start">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-pink-500 border-transparent text-white shadow-[0_0_15px_rgba(236,72,153,0.35)]'
                    : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </FadeIn>

      {/* ── Redesigned Gallery Grid with Conic Glow Wrappers ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-24"
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glow-card-wrapper w-full h-full"
            >
              <div className="glow-card-inner group cursor-pointer relative bg-neutral-950/80 border border-white/5 flex flex-col justify-between h-full">
                <div>
                  {/* Thumbnail Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
                    <span className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full border border-white/15 tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <span className="font-mono text-[10px] font-semibold text-[#e040fb] uppercase tracking-widest block mb-2">
                      Client: {item.client}
                    </span>
                    <h3 className="font-barlow text-2xl font-bold uppercase tracking-wide text-white mb-3 group-hover:text-pink-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* Card CTA/Footer */}
                <div className="px-6 pb-6 pt-4 border-t border-white/5 flex items-center justify-between text-white text-[11px] font-bold uppercase tracking-wider">
                  <span className="text-neutral-400 group-hover:text-white transition-colors">View Details</span>
                  <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300 text-pink-400">&rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ── Bottom Frosted CTA Banner ── */}
      <ZoomIn delay={0.1}>
        <div className="border border-white/15 p-8 sm:p-14 bg-white/5 backdrop-blur-md rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-pink-950/20 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-barlow text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-3">
              Have a Similar Project in Mind?
            </h3>
            <p className="font-barlow text-base text-neutral-400 uppercase tracking-wider">
              Let's discuss studio availability, custom light sets, and equipment packages.
            </p>
          </div>
          <UiverseButton text="Book Studio Session" onClick={onOpenBooking} className="relative z-10" />
        </div>
      </ZoomIn>
    </div>
  );
};
