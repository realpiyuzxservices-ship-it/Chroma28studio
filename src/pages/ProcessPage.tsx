import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Camera, Settings, Clapperboard, HardDrive } from 'lucide-react';
import { SeoHead, UiverseButton, SlideDown, FadeIn, ScrollReveal, SplitText } from '@/components';

interface ProcessPageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

const stepIcons = [
  <Camera className="w-10 h-10 text-[#c84747]" strokeWidth={1.5} />,
  <Settings className="w-10 h-10 text-[#c84747]" strokeWidth={1.5} />,
  <Clapperboard className="w-10 h-10 text-[#c84747]" strokeWidth={1.5} />,
  <HardDrive className="w-10 h-10 text-[#c84747]" strokeWidth={1.5} />,
];

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate, onOpenBooking }) => {
  const steps = [
    {
      step: '01',
      title: 'INQUIRE & SPACE SELECTION',
      description: 'Choose from 10 specialized production sets. Submit your shoot date, crew size, and power or lighting requirements online or via WhatsApp.',
      details: ['Instant availability check', 'Transparent hourly and full-day rates', '3-phase power scouting'],
    },
    {
      step: '02',
      title: 'TECH SCOUT & EQUIPMENT PACKAGE',
      description: 'Schedule a pre-production tech walk through our Antelias facility. Lock in camera gear, Aputure lighting rigs, grip equipment, and green room reservations.',
      details: ['Dedicated gaffer consultation', 'Customized equipment add-ons', 'Pre-rigging services available'],
    },
    {
      step: '03',
      title: 'ON-SITE PRODUCTION & STUDIO HAND',
      description: 'Arrive on shoot day with your set fully prepped, air-conditioned, and powered. A dedicated studio technician remains on-site for seamless production support.',
      details: ['Acoustically isolated environment', 'Loading dock & drive-in ramp access', 'High-speed Wi-Fi & client lounge'],
    },
    {
      step: '04',
      title: 'WRAP, OFFLOAD & POST PREP',
      description: 'Pack up easily with direct freight access. Use our high-speed fibre edit suite for immediate DIT offloading or remote post-production reviews.',
      details: ['10Gbps data offload stations', 'Secure equipment staging area', 'Fresh coffee & catering services'],
    },
  ];

  return (
    <div className="w-full bg-[#0a0a0a] text-white font-sans page-enter">
      <SeoHead
        title="Production Process — Chroma28 Studio Beirut"
        description="Learn how Chroma28 Studio simplifies commercial film, photo, and podcast production from tech scout to wrap."
      />

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-16 sm:pt-24 pb-12">
        <div className="mb-16 border-b border-white/10 pb-10">
          <SlideDown delay={0}>
            <span className="font-barlow text-sm font-bold uppercase tracking-widest text-[#c84747] block mb-3">
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
            className="font-barlow text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white mb-4"
          />
          <FadeIn delay={0.2}>
            <p className="font-barlow text-lg sm:text-xl text-neutral-400 max-w-2xl uppercase tracking-wide">
              Designed for agencies, production houses, and independent filmmakers seeking effortless studio rentals in Lebanon.
            </p>
          </FadeIn>
        </div>

        {/* ── HOW IT WORKS label ── */}
        <FadeIn delay={0.15}>
          <div className="text-center mb-16">
            <span className="font-barlow text-xs font-bold uppercase tracking-[0.3em] text-neutral-500">
              How It Works
            </span>
          </div>
        </FadeIn>

        {/* ── Alternating Timeline ── */}
        <div className="relative">

          {/* Vertical spine line — desktop only */}
          <div className="process-line hidden md:block" />

          <div className="flex flex-col gap-0">
            {steps.map((item, idx) => {
              const isLeft = idx % 2 === 0; // even → content left, visual right
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: idx * 0.12 }}
                  className="relative"
                >
                  {/* Mobile: simple vertical stack */}
                  <div className="flex flex-col md:hidden items-start gap-6 py-10 border-b border-white/8 px-2">
                    {/* Step badge */}
                    <div className="flex items-center gap-4">
                      <div className="process-step-badge">{item.step}</div>
                      <h3 className="font-barlow text-xl font-bold uppercase tracking-wide text-white">{item.title}</h3>
                    </div>
                    {/* Icon visual */}
                    <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm ml-2">
                      {stepIcons[idx]}
                    </div>
                    <p className="text-neutral-400 font-sans text-sm leading-relaxed">{item.description}</p>
                    <ul className="space-y-2">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2.5 text-xs font-barlow font-bold uppercase tracking-wider text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-[#c84747] flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Desktop: alternating left/right layout */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-0 py-16">

                    {/* LEFT COLUMN */}
                    {isLeft ? (
                      /* Content on left */
                      <motion.div
                        initial={{ opacity: 0, x: -48 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: idx * 0.12 + 0.05 }}
                        className="pr-12 text-right"
                      >
                        <h3 className="font-barlow text-2xl lg:text-3xl font-bold uppercase tracking-wide text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-neutral-400 font-sans text-sm leading-relaxed mb-5 max-w-sm ml-auto">
                          {item.description}
                        </p>
                        <ul className="space-y-2">
                          {item.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-center justify-end gap-2.5 text-xs font-barlow font-bold uppercase tracking-wider text-neutral-300">
                              <span>{detail}</span>
                              <CheckCircle2 className="w-4 h-4 text-[#c84747] flex-shrink-0" />
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ) : (
                      /* Visual/icon on left */
                      <motion.div
                        initial={{ opacity: 0, x: -48 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: idx * 0.12 + 0.05 }}
                        className="pr-12 flex justify-end"
                      >
                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-[0_0_40px_0_rgba(200,71,71,0.12)]">
                          <div className="scale-150">
                            {stepIcons[idx]}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* CENTER BADGE */}
                    <div className="flex flex-col items-center gap-0 relative z-10 px-4">
                      <div className="process-step-badge">{item.step}</div>
                    </div>

                    {/* RIGHT COLUMN */}
                    {isLeft ? (
                      /* Visual/icon on right */
                      <motion.div
                        initial={{ opacity: 0, x: 48 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: idx * 0.12 + 0.1 }}
                        className="pl-12 flex justify-start"
                      >
                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-[0_0_40px_0_rgba(200,71,71,0.12)]">
                          <div className="scale-150">
                            {stepIcons[idx]}
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      /* Content on right */
                      <motion.div
                        initial={{ opacity: 0, x: 48 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: idx * 0.12 + 0.1 }}
                        className="pl-12 text-left"
                      >
                        <h3 className="font-barlow text-2xl lg:text-3xl font-bold uppercase tracking-wide text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-neutral-400 font-sans text-sm leading-relaxed mb-5 max-w-sm">
                          {item.description}
                        </p>
                        <ul className="space-y-2">
                          {item.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-center gap-2.5 text-xs font-barlow font-bold uppercase tracking-wider text-neutral-300">
                              <CheckCircle2 className="w-4 h-4 text-[#c84747] flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                  </div>

                  {/* Subtle horizontal divider between steps on desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-8 bg-[#c84747]/20" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── CTA Box ── */}
        <ScrollReveal variant="zoomIn" delay={0.1} className="mt-20">
          <div className="border border-white/15 bg-white/5 backdrop-blur-sm text-white p-8 sm:p-14 text-center flex flex-col items-center justify-center rounded-2xl relative overflow-hidden">
            {/* Subtle glow bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-transparent to-pink-950/20 pointer-events-none" />
            <h2 className="relative font-barlow text-3xl sm:text-5xl font-extrabold uppercase tracking-tight mb-4">
              Ready to Plan Your Next Shoot?
            </h2>
            <p className="relative font-barlow text-lg text-neutral-400 max-w-xl uppercase tracking-wider mb-8">
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
