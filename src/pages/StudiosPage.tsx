import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { STUDIO_SPACES } from '@/data/spaces';
import { SeoHead, UiverseButton, SlideDown, FadeIn, StaggerContainer, ScrollReveal, ZoomIn } from '@/components';

interface StudiosPageProps {
  onNavigate: (path: string) => void;
  onOpenBookingWithSlug: (slug: string) => void;
}

export const StudiosPage: React.FC<StudiosPageProps> = ({ onNavigate, onOpenBookingWithSlug }) => {
  return (
    <div className="w-full bg-transparent text-white font-sans py-12 sm:py-16 page-enter max-w-7xl mx-auto px-6 sm:px-12">
      <SeoHead
        title="Studios & Sets — Chroma28 Studio Rental Beirut"
        description="Explore 10 purpose-built production sets and studio spaces in Antelias, Beirut. White cyclorama, podcast suite, commercial kitchen, blackout box, and aqua set."
      />

      {/* ── Page Header Redesign (Reference Style) ── */}
      <div className="mb-16 border-b border-white/10 pb-12">
        <SlideDown delay={0}>
          <span className="font-barlow text-sm font-bold uppercase tracking-[0.25em] text-[#e040fb] block mb-3">
            CHROMA28 STUDIO / STAGE SELECTION
          </span>
        </SlideDown>

        <h1 className="font-barlow text-4xl sm:text-7xl font-black uppercase tracking-tight text-white leading-[0.9] mb-6 max-w-5xl">
          TEN SPECIALIZED{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 font-extrabold">
            PRODUCTION STAGES
          </span>{' '}
          BUILT FOR{' '}
          <span className="inline-block px-6 py-2 rounded-full border-2 border-purple-500 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse">
            FILMMAKERS
          </span>
        </h1>

        <FadeIn delay={0.25}>
          <p className="font-barlow text-lg sm:text-xl text-neutral-400 max-w-3xl uppercase tracking-wide leading-relaxed">
            Acoustically isolated stages, drive-in cargo docks, heavy 3-phase industrial power, and dedicated client lounges in Antelias, Beirut.
          </p>
        </FadeIn>
      </div>

      {/* ── Studios Grid with Conic Glow Wrappers ── */}
      <StaggerContainer
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        staggerChildren={0.1}
        delayChildren={0.05}
      >
        {STUDIO_SPACES.map((space) => (
          <ScrollReveal
            key={space.id}
            asChild
            variant="slideUp"
          >
            <div className="glow-card-wrapper w-full h-full">
              <div className="glow-card-inner group bg-neutral-950/80 border border-white/5 flex flex-col justify-between h-full transition-all duration-300">
                <div>
                  
                  {/* Image with zoom on hover */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                    <img
                      src={space.heroImageUrl}
                      alt={space.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    {/* Glass Overlay Tag */}
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-full border border-white/15">
                      {space.primaryKeyword}
                    </div>
                    {/* Dark gradient fade-in overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-85" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2.5 text-[10px] font-mono font-semibold text-[#e040fb] uppercase tracking-widest mb-2">
                      <span>{space.dimensions}</span>
                      <span className="text-neutral-600">•</span>
                      <span>{space.powerSupply}</span>
                    </div>

                    <h3 className="font-barlow text-2xl font-bold uppercase tracking-wide text-white mb-3 group-hover:text-pink-400 transition-colors">
                      {space.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed mb-5 line-clamp-3">
                      {space.shortDescription}
                    </p>

                    {/* Features capsule list */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {space.features.slice(0, 3).map((feat, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-2.5 py-1 text-neutral-300 rounded-full"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`/spaces/${space.slug}`)}
                    className="font-barlow text-xs font-bold uppercase tracking-widest text-neutral-300 hover:text-white transition-colors cursor-pointer border-b border-transparent hover:border-white pb-0.5"
                  >
                    View Stage Details
                  </button>

                  <UiverseButton
                    text="Book Stage"
                    textSize="text-sm"
                    onClick={() => onOpenBookingWithSlug(space.slug)}
                  />
                </div>

              </div>
            </div>
          </ScrollReveal>
        ))}
      </StaggerContainer>
    </div>
  );
};
