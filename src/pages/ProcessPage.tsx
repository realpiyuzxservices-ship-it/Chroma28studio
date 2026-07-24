import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { SeoHead, UiverseButton, SlideUp, SlideDown, FadeIn, SlideLeft, SlideRight, StaggerContainer, ScrollReveal, SplitText } from '@/components';

interface ProcessPageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate, onOpenBooking }) => {
  const steps = [
    {
      step: '01',
      title: 'INQUIRE & SPACE SELECTION',
      description: 'Choose from 10 specialized production sets. Submit your shoot date, crew size, and power or lighting requirements online or via WhatsApp.',
      details: ['Instant availability check', 'Transparent hourly and full-day rates', '3-phase power scouting']
    },
    {
      step: '02',
      title: 'TECH SCOUT & EQUIPMENT PACKAGE',
      description: 'Schedule a pre-production tech walk through our Antelias facility. Lock in camera gear, Aputure lighting rigs, grip equipment, and green room reservations.',
      details: ['Dedicated gaffer consultation', 'Customized equipment add-ons', 'Pre-rigging services available']
    },
    {
      step: '03',
      title: 'ON-SITE PRODUCTION & STUDIO HAND',
      description: 'Arrive on shoot day with your set fully prepped, air-conditioned, and powered. A dedicated studio technician remains on-site for seamless production support.',
      details: ['Acoustically isolated environment', 'Loading dock & drive-in ramp access', 'High-speed Wi-Fi & client lounge']
    },
    {
      step: '04',
      title: 'WRAP, OFFLOAD & POST PREP',
      description: 'Pack up easily with direct freight access. Use our high-speed fibre edit suite for immediate DIT offloading or remote post-production reviews.',
      details: ['10Gbps data offload stations', 'Secure equipment staging area', 'Fresh coffee & catering services']
    }
  ];

  return (
    <div className="w-full bg-white text-black font-sans py-12 sm:py-16">
      <SeoHead
        title="Production Process — Chroma28 Studio Beirut"
        description="Learn how Chroma28 Studio simplifies commercial film, photo, and podcast production from tech scout to wrap."
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="mb-16 border-b border-black/15 pb-8">
          <SlideDown delay={0}>
            <span className="font-barlow text-sm font-bold uppercase tracking-widest text-[#c84747] block mb-2">
              Seamless Workflow
            </span>
          </SlideDown>
          <SplitText
            text="Our Production Process"
            tag="h1"
            splitType="chars"
            delay={25}
            duration={0.8}
            textAlign="left"
            className="font-barlow text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-black mb-4"
          />
          <FadeIn delay={0.2}>
            <p className="font-barlow text-lg sm:text-xl text-neutral-600 max-w-2xl uppercase tracking-wide">
              Designed for agencies, production houses, and independent filmmakers seeking effortless studio rentals in Lebanon.
            </p>
          </FadeIn>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <ScrollReveal
                key={item.step}
                variant={isLeft ? 'slideRight' : 'slideLeft'}
                delay={idx * 0.08}
                className="border border-black/15 p-8 bg-neutral-50 relative flex flex-col justify-between hover:border-black transition-colors"
              >
                <div>
                  <motion.span
                    className="font-barlow text-5xl font-black text-[#c84747] block mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                  >
                    {item.step}
                  </motion.span>
                  <h3 className="font-barlow text-2xl sm:text-3xl font-bold uppercase tracking-wide text-black mb-4">
                    {item.title}
                  </h3>
                  <p className="text-neutral-700 font-sans text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-black/10 pt-4">
                  <ul className="space-y-2">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2.5 text-xs font-barlow font-bold uppercase tracking-wider text-neutral-600">
                        <CheckCircle2 className="w-4 h-4 text-[#c84747] flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA Box */}
        <ScrollReveal variant="zoomIn" delay={0.1}>
          <div className="border border-black bg-black text-white p-8 sm:p-12 text-center flex flex-col items-center justify-center">
            <h2 className="font-barlow text-3xl sm:text-5xl font-extrabold uppercase tracking-tight mb-4">
              Ready to Plan Your Next Shoot?
            </h2>
            <p className="font-barlow text-lg text-neutral-300 max-w-xl uppercase tracking-wider mb-8">
              Contact our studio manager today for custom shoot quotes, equipment package holds, or facility walk-throughs.
            </p>
            <UiverseButton
              text="Book Studio Session"
              onClick={onOpenBooking}
              className="text-white hover:text-[#c84747]"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
