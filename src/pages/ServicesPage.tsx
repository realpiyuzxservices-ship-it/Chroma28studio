import React from 'react';
import { CHROMA28_SERVICES } from '@/data/services';
import { CheckCircle2 } from 'lucide-react';
import { SeoHead, UiverseButton, ScrollReveal, SlideUp, SlideDown, FadeIn, StaggerContainer, SplitText } from '@/components';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="w-full bg-white text-black py-12 px-6 sm:px-12 max-w-7xl mx-auto selection:bg-black selection:text-white page-enter">
      <SeoHead
        title="Services — Studio Rental & Commercial Production Beirut | Chroma28 Studio"
        description="Full-service video production, studio rental, commercial photography, equipment rental, and social media agency in Antelias, Beirut, Lebanon."
      />

      {/* Page Header */}
      <div className="mb-12 border-b border-black/15 pb-8">
        <SlideDown delay={0}>
          <span className="font-barlow text-sm font-bold uppercase tracking-widest text-[#c84747] block mb-2">
            End-to-End Production Hub
          </span>
        </SlideDown>
        <SplitText
          text="Services & Production Support"
          tag="h1"
          splitType="chars"
          delay={25}
          duration={0.8}
          textAlign="left"
          className="font-barlow text-4xl sm:text-6xl font-extrabold tracking-tight text-black uppercase mb-4"
        />
        <FadeIn delay={0.2}>
          <p className="font-barlow text-lg sm:text-xl text-neutral-600 max-w-2xl uppercase tracking-wide">
            We build spaces and technical environments where creators, agencies, and global brands produce high-impact content under one roof in Antelias, Beirut.
          </p>
        </FadeIn>
      </div>

      {/* Services Grid */}
      <StaggerContainer
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        staggerChildren={0.1}
        delayChildren={0.05}
      >
        {CHROMA28_SERVICES.map((srv) => (
          <ScrollReveal
            key={srv.id}
            asChild
            variant="slideUp"
            className="border border-black/15 p-8 bg-neutral-50 flex flex-col justify-between hover:border-black transition-colors"
          >
            <div>
              <div>
                <span className="font-barlow text-xs font-bold uppercase bg-black text-white px-3 py-1 inline-block mb-4 tracking-wider">
                  {srv.keyword}
                </span>
                <h2 className="font-barlow text-2xl font-bold text-black uppercase tracking-wide mb-2">
                  {srv.title}
                </h2>
                <p className="font-barlow text-sm font-semibold text-[#c84747] uppercase tracking-wider mb-4">
                  {srv.tagline}
                </p>
                <p className="text-sm text-neutral-600 font-sans leading-relaxed mb-6">
                  {srv.description}
                </p>

                <div className="space-y-2 mb-6 pt-4 border-t border-black/10">
                  <span className="font-barlow text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
                    Key Deliverables:
                  </span>
                  {srv.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs font-barlow font-bold uppercase tracking-wider text-neutral-700">
                      <CheckCircle2 size={15} className="text-[#c84747] mt-0.5 flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-black/10">
                <UiverseButton text="Book Service" textSize="text-lg" onClick={onOpenBooking} />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </StaggerContainer>

      {/* Bottom Banner */}
      <ScrollReveal variant="zoomIn" delay={0.1}>
        <div className="border border-black p-8 sm:p-12 bg-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-barlow text-3xl font-extrabold uppercase tracking-tight text-black mb-2">
              Looking for Custom Production Services?
            </h3>
            <p className="font-barlow text-base text-neutral-600 uppercase tracking-wider">
              Our studio team manages everything from gaffer hires to complete set builds.
            </p>
          </div>
          <UiverseButton text="Contact Us" onClick={onOpenBooking} />
        </div>
      </ScrollReveal>
    </div>
  );
};
