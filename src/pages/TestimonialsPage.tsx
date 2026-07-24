import React from 'react';
import { Star } from 'lucide-react';
import { SeoHead, UiverseButton, SlideUp, SlideDown, FadeIn, StaggerContainer, ScrollReveal, ZoomIn, SplitText } from '@/components';

interface TestimonialsPageProps {
  onOpenBooking: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenBooking }) => {
  const reviews = [
    {
      name: 'Kareem El-Hajj',
      role: 'Executive Producer',
      agency: 'Cedar Films & Advertising',
      quote: 'Chroma28 is by far the cleanest, most professional studio facility in Beirut. The 3-phase power stability and seamless white cyclorama saved us hours during our regional automotive campaign shoot.',
      project: 'Commercial Shoot — Lexus Regional'
    },
    {
      name: 'Nour Al-Khatib',
      role: 'Creative Director',
      agency: 'Studio Vibe MENA',
      quote: 'The Podcast Suite and Kitchen Studio are completely turnkey. We walked in, flipped the pre-lit Aputure switches, and recorded 12 episodes in 2 days. Incredible sound isolation.',
      project: 'Branded Content & Podcast Series'
    },
    {
      name: 'Maya Harb',
      role: 'Creative Director, Leo Burnett Beirut',
      agency: 'Leo Burnett',
      quote: "Our beauty campaign required pristine white background visuals and flawless skin tones. Chroma28's lighting package and spacious green room made the talent feel like royalty.",
      project: 'Beauty & Skincare Campaign'
    },
    {
      name: 'Karim Nader',
      role: 'Executive Producer, Impact BBDO',
      agency: 'Impact BBDO',
      quote: 'The 3-phase power, drive-in access for lighting trucks, and zero noise bleed during dialogue recording make Chroma28 our top choice for commercial film shoots in Lebanon.',
      project: 'Commercial Film Production'
    }
  ];

  return (
    <div className="w-full bg-white text-black font-sans py-12 sm:py-16">
      <SeoHead
        title="Testimonials & Reviews — Chroma28 Studio Beirut"
        description="Read what top directors, agencies, producers, and content creators say about Chroma28 Studio in Antelias, Lebanon."
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="mb-16 border-b border-black/15 pb-8">
          <SlideDown delay={0}>
            <span className="font-barlow text-sm font-bold uppercase tracking-widest text-[#c84747] block mb-2">
              Client Endorsements
            </span>
          </SlideDown>
          <SplitText
            text="Testimonials & Reviews"
            tag="h1"
            splitType="chars"
            delay={25}
            duration={0.8}
            textAlign="left"
            className="font-barlow text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-black mb-4"
          />
          <FadeIn delay={0.2}>
            <p className="font-barlow text-lg sm:text-xl text-neutral-600 max-w-2xl uppercase tracking-wide">
              Trusted by leading agencies, international brands, film directors, and content producers across Lebanon &amp; MENA.
            </p>
          </FadeIn>
        </div>

        {/* Reviews Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          staggerChildren={0.09}
          delayChildren={0.05}
        >
          {reviews.map((rev, idx) => (
            <ScrollReveal
              key={idx}
              asChild
              variant="slideUp"
              className="border border-black/15 p-8 bg-neutral-50 flex flex-col justify-between hover:border-black transition-colors group"
            >
              <div>
                <div>
                  <div className="flex items-center gap-1 text-[#c84747] mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c84747]" />
                    ))}
                  </div>

                  <p className="text-neutral-800 font-sans text-sm sm:text-base leading-relaxed mb-6 italic">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="border-t border-black/10 pt-4">
                  <p className="font-barlow text-lg font-bold uppercase tracking-wide text-black group-hover:text-[#c84747] transition-colors">
                    {rev.name}
                  </p>
                  <p className="font-barlow text-xs font-semibold text-[#c84747] uppercase tracking-wider">
                    {rev.role} — {rev.agency}
                  </p>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block mt-2">
                    Project: {rev.project}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </StaggerContainer>

        {/* Bottom Banner */}
        <ZoomIn delay={0.1}>
          <div className="border border-black/15 p-8 sm:p-12 bg-neutral-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-barlow text-3xl font-extrabold uppercase tracking-tight text-black mb-2">
                Join Our Growing List of Satisfied Clients
              </h3>
              <p className="font-barlow text-base text-neutral-600 uppercase tracking-wider">
                Book your studio session today or schedule a site visit in Antelias.
              </p>
            </div>
            <UiverseButton text="Book Studio" onClick={onOpenBooking} />
          </div>
        </ZoomIn>
      </div>
    </div>
  );
};
