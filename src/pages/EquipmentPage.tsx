import React from 'react';
import { EQUIPMENT_CATALOG } from '@/data/equipment';
import { SeoHead, UiverseButton, SlideDown, FadeIn, StaggerContainer, ScrollReveal, ZoomIn } from '@/components';

interface EquipmentPageProps {
  onOpenBooking: () => void;
}

export const EquipmentPage: React.FC<EquipmentPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="w-full bg-transparent text-white py-12 px-6 sm:px-12 max-w-7xl mx-auto selection:bg-[#e040fb] selection:text-white page-enter">
      <SeoHead
        title="Equipments — Camera, Lighting & Audio Rental Beirut | Chroma28 Studio"
        description="Rent cinema bodies, Sony G Master lenses, Aputure lighting, Shure SM7B microphones, and heavy-duty grip gear in Antelias, Beirut, Lebanon."
      />

      {/* ── Page Header Redesign (Reference Style) ── */}
      <div className="mb-16 border-b border-white/10 pb-12">
        <SlideDown delay={0}>
          <span className="font-barlow text-sm font-bold uppercase tracking-[0.25em] text-[#e040fb] block mb-3">
            CHROMA28 STUDIO / GEAR HIRE
          </span>
        </SlideDown>

        <h1 className="font-barlow text-4xl sm:text-7xl font-black uppercase tracking-tight text-white leading-[0.9] mb-6 max-w-5xl">
          CHROMA-GRADE{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 font-extrabold">
            PRODUCTION GEAR
          </span>{' '}
          AVAILABLE{' '}
          <span className="inline-block px-6 py-2 rounded-full border-2 border-cyan-400 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            ON-SITE
          </span>
        </h1>

        <FadeIn delay={0.25}>
          <p className="font-barlow text-lg sm:text-xl text-neutral-400 max-w-3xl uppercase tracking-wide leading-relaxed">
            Flagship Sony FX cinema systems, prime glass, continuous Aputure LED rigs, broadcast-standard audio rigs, and heavy grip gear pre-rigged and ready.
          </p>
        </FadeIn>
      </div>

      {/* ── Gear Catalog Sections ── */}
      <div className="space-y-24 mb-24">
        {EQUIPMENT_CATALOG.map((cat, idx) => (
          <div key={idx} className="border-t border-white/10 pt-12">
            
            {/* Section Eyebrow Title */}
            <ScrollReveal variant={idx % 2 === 0 ? 'slideRight' : 'slideLeft'} delay={0.05} className="mb-10">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-pink-500 rounded-full" />
                <h2 className="font-barlow text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-wider">
                  {cat.category}
                </h2>
              </div>
            </ScrollReveal>

            {/* Gear Items Grid with Conic Glow Wrappers */}
            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
              staggerChildren={0.08}
              delayChildren={0.1}
            >
              {cat.items.map((item, i) => (
                <ScrollReveal
                  key={i}
                  asChild
                  variant="slideUp"
                >
                  <div className="glow-card-wrapper w-full h-full">
                    <div className="glow-card-inner p-6 sm:p-8 bg-neutral-950/80 border border-white/5 flex flex-col justify-between h-full group transition-all duration-300">
                      <div>
                        {/* Title and Tag */}
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h3 className="font-barlow text-xl sm:text-2xl font-bold text-white uppercase tracking-wide group-hover:text-cyan-400 transition-colors">
                            {item.name}
                          </h3>
                          <span className="font-mono text-[9px] font-bold uppercase bg-white/10 text-neutral-300 px-3 py-1 rounded-full border border-white/15 tracking-wider flex-shrink-0">
                            {item.tag}
                          </span>
                        </div>
                        {/* Description */}
                        <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </StaggerContainer>

          </div>
        ))}
      </div>

      {/* ── Bottom Frosted CTA Banner ── */}
      <ZoomIn delay={0.1}>
        <div className="border border-white/15 p-8 sm:p-14 bg-white/5 backdrop-blur-md rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-pink-950/20 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-barlow text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white mb-3">
              Need Equipment Package Holds?
            </h3>
            <p className="font-barlow text-base text-neutral-400 uppercase tracking-wider">
              Reserve camera, lighting, and audio rigs alongside your production stage reservation.
            </p>
          </div>
          <UiverseButton text="Reserve Gear Package" onClick={onOpenBooking} className="relative z-10" />
        </div>
      </ZoomIn>
    </div>
  );
};
