import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { STUDIO_SPACES } from '@/data/spaces';
import { SeoHead, UiverseButton, SlideUp, SlideDown, FadeIn, StaggerContainer, ScrollReveal, ZoomIn, SplitText } from '@/components';

interface StudiosPageProps {
  onNavigate: (path: string) => void;
  onOpenBookingWithSlug: (slug: string) => void;
}

export const StudiosPage: React.FC<StudiosPageProps> = ({ onNavigate, onOpenBookingWithSlug }) => {
  return (
    <div className="w-full bg-white text-black font-sans py-12 sm:py-16 page-enter">
      <SeoHead
        title="Studios & Sets — Chroma28 Studio Rental Beirut"
        description="Explore 10 purpose-built production sets and studio spaces in Antelias, Beirut. White cyclorama, podcast suite, commercial kitchen, blackout box, and aqua set."
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Page Header */}
        <div className="mb-12 border-b border-black/15 pb-8">
          <SlideDown delay={0}>
            <span className="font-barlow text-sm font-bold uppercase tracking-widest text-[#c84747] block mb-2">
              10 Specialized Sets
            </span>
          </SlideDown>
          <SplitText
            text="Studios & Set Architecture"
            tag="h1"
            splitType="chars"
            delay={25}
            duration={0.8}
            textAlign="left"
            className="font-barlow text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-black mb-4"
          />
          <FadeIn delay={0.2}>
            <p className="font-barlow text-lg sm:text-xl text-neutral-600 max-w-2xl uppercase tracking-wide">
              Designed for commercial filming, fashion editorials, brand campaigns, and broadcast productions in Antelias, Beirut.
            </p>
          </FadeIn>
        </div>

        {/* Studios Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerChildren={0.1}
          delayChildren={0.05}
        >
          {STUDIO_SPACES.map((space) => (
            <ScrollReveal
              key={space.id}
              asChild
              variant="slideUp"
              className="group border border-black/15 bg-neutral-50 hover:border-black transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div>
                  {/* Image with zoom on hover */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                    <img
                      src={space.heroImageUrl}
                      alt={space.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
                    <div className="absolute top-3 right-3 bg-black text-white text-xs font-barlow font-bold px-3 py-1 uppercase tracking-wider">
                      {space.primaryKeyword}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-barlow font-bold text-neutral-500 uppercase tracking-widest mb-2">
                      <span>{space.dimensions}</span>
                      <span>•</span>
                      <span>{space.powerSupply}</span>
                    </div>

                    <h3 className="font-barlow text-2xl font-bold uppercase tracking-wide text-black mb-3 group-hover:text-[#c84747] transition-colors">
                      {space.name}
                    </h3>

                    <p className="text-sm text-neutral-600 line-clamp-2 font-sans mb-4">
                      {space.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {space.features.slice(0, 3).map((feat, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-barlow font-medium uppercase tracking-wider bg-white border border-black/10 px-2.5 py-1 text-neutral-700"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 border-t border-black/10 flex items-center justify-between pt-4">
                  <button
                    onClick={() => onNavigate(`/spaces/${space.slug}`)}
                    className="font-barlow text-sm font-bold uppercase tracking-wider text-black hover:text-[#c84747] transition-colors"
                  >
                    View Details
                  </button>

                  <UiverseButton
                    text="Book"
                    textSize="text-base"
                    onClick={() => onOpenBookingWithSlug(space.slug)}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
};
