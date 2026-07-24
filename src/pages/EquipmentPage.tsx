import React from 'react';
import { EQUIPMENT_CATALOG } from '@/data/equipment';
import { SeoHead, UiverseButton, SlideUp, SlideDown, FadeIn, SlideLeft, SlideRight, StaggerContainer, ScrollReveal, ZoomIn, SplitText } from '@/components';

interface EquipmentPageProps {
  onOpenBooking: () => void;
}

export const EquipmentPage: React.FC<EquipmentPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="w-full bg-white text-black py-12 px-6 sm:px-12 max-w-7xl mx-auto selection:bg-black selection:text-white">
      <SeoHead
        title="Equipments — Camera, Lighting & Audio Rental Beirut | Chroma28 Studio"
        description="Rent cinema bodies, Sony G Master lenses, Aputure lighting, Shure SM7B microphones, and heavy-duty grip gear in Antelias, Beirut, Lebanon."
      />

      {/* Page Header */}
      <div className="mb-12 border-b border-black/15 pb-8">
        <SlideDown delay={0}>
          <span className="font-barlow text-sm font-bold uppercase tracking-widest text-[#c84747] block mb-2">
            Cinema &amp; Production Gear
          </span>
        </SlideDown>
        <SplitText
          text="Equipments Catalog"
          tag="h1"
          splitType="chars"
          delay={25}
          duration={0.8}
          textAlign="left"
          className="font-barlow text-4xl sm:text-6xl font-extrabold tracking-tight text-black uppercase mb-4"
        />
        <FadeIn delay={0.2}>
          <p className="font-barlow text-lg sm:text-xl text-neutral-600 max-w-2xl uppercase tracking-wide">
            Flagship Sony FX cinema cameras, prime lenses, continuous Aputure LED lighting, broadcast audio, and heavy-duty grip gear in Antelias, Lebanon.
          </p>
        </FadeIn>
      </div>

      {/* Catalog Grid */}
      <div className="space-y-16 mb-20">
        {EQUIPMENT_CATALOG.map((cat, idx) => (
          <div key={idx} className="border-t border-black/15 pt-8">
            <ScrollReveal variant={idx % 2 === 0 ? 'slideRight' : 'slideLeft'} delay={0.05}>
              <h2 className="font-barlow text-2xl sm:text-3xl font-extrabold text-[#c84747] uppercase tracking-wider mb-6">
                {cat.category}
              </h2>
            </ScrollReveal>

            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              staggerChildren={0.08}
              delayChildren={0.1}
            >
              {cat.items.map((item, i) => (
                <ScrollReveal
                  key={i}
                  asChild
                  variant="slideUp"
                  className="bg-neutral-50 p-6 border border-black/15 hover:border-black transition-colors group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-barlow text-xl font-bold text-black uppercase tracking-wide group-hover:text-[#c84747] transition-colors">{item.name}</h3>
                      <span className="font-barlow text-xs font-bold uppercase bg-black text-white px-2.5 py-1 flex-shrink-0 tracking-wider">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600 font-sans leading-relaxed">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </StaggerContainer>
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <ZoomIn delay={0.1}>
        <div className="border border-black p-8 sm:p-12 bg-neutral-50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-barlow text-3xl font-extrabold uppercase tracking-tight text-black mb-2">
              Need Equipment Package Holds?
            </h3>
            <p className="font-barlow text-base text-neutral-600 uppercase tracking-wider">
              Reserve camera, lighting, and grip gear alongside your studio session.
            </p>
          </div>
          <UiverseButton text="Reserve Gear" onClick={onOpenBooking} />
        </div>
      </ZoomIn>
    </div>
  );
};
