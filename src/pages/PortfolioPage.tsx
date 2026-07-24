import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS } from '@/data/portfolio';
import { SeoHead, UiverseButton, SlideUp, SlideDown, FadeIn, StaggerContainer, ScrollReveal, ZoomIn, SplitText } from '@/components';

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
    <div className="w-full bg-white text-black py-12 px-6 sm:px-12 max-w-7xl mx-auto selection:bg-black selection:text-white">
      <SeoHead
        title="Our Work & Portfolio — Chroma28 Studio Beirut"
        description="Explore recent video productions, commercial photography, recipe videos, and 4K podcasts produced at Chroma28 Studio in Antelias, Beirut."
      />

      {/* Page Header */}
      <div className="mb-12 border-b border-black/15 pb-8">
        <SlideDown delay={0}>
          <span className="font-barlow text-sm font-bold uppercase tracking-widest text-[#c84747] block mb-2">
            Featured Projects
          </span>
        </SlideDown>
        <SplitText
          text="Our Work"
          tag="h1"
          splitType="chars"
          delay={25}
          duration={0.8}
          textAlign="left"
          className="font-barlow text-4xl sm:text-6xl font-extrabold tracking-tight text-black uppercase mb-4"
        />
        <FadeIn delay={0.2}>
          <p className="font-barlow text-lg sm:text-xl text-neutral-600 max-w-2xl uppercase tracking-wide">
            High-end fashion lookbooks, culinary FMCG campaigns, 4K podcasts, and commercial videos shot at Chroma28 Studio in Antelias, Beirut.
          </p>
        </FadeIn>
      </div>

      {/* Filter Tabs */}
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-barlow font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-black/20 hover:border-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Gallery Grid with AnimatePresence for filter transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group border border-black/15 bg-neutral-50 overflow-hidden hover:border-black transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    style={{ '--tw-scale-x': 1.08, '--tw-scale-y': 1.08 } as React.CSSProperties}
                  />
                  {/* Image overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  <span className="absolute top-3 left-3 bg-black text-white text-[11px] font-barlow font-bold uppercase px-3 py-1 tracking-wider">
                    {item.category}
                  </span>
                </div>

                <div className="p-6">
                  <span className="font-barlow text-xs font-bold text-[#c84747] uppercase tracking-wider block mb-1">
                    Client: {item.client}
                  </span>
                  <h3 className="font-barlow text-2xl font-bold uppercase tracking-wide text-black mb-2 group-hover:text-[#c84747] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 font-sans line-clamp-2">
                    {item.summary}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Bottom CTA Banner */}
      <ZoomIn delay={0.1}>
        <div className="border border-black p-8 sm:p-12 bg-neutral-50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-barlow text-3xl font-extrabold uppercase tracking-tight text-black mb-2">
              Have a Similar Project in Mind?
            </h3>
            <p className="font-barlow text-base text-neutral-600 uppercase tracking-wider">
              Let's discuss studio availability, set customization, and equipment holds.
            </p>
          </div>
          <UiverseButton text="Book Studio" onClick={onOpenBooking} />
        </div>
      </ZoomIn>
    </div>
  );
};
