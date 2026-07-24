import React from 'react';
import { GLOBAL_FAQS } from '@/data/faqs';
import { MessageCircle } from 'lucide-react';
import { SeoHead, SlideUp, SlideDown, FadeIn, StaggerContainer, ScrollReveal, ZoomIn, SplitText } from '@/components';

interface FaqPageProps {
  onOpenBooking: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="w-full bg-white text-black py-12 px-4 sm:px-8 max-w-4xl mx-auto selection:bg-black selection:text-white">
      <SeoHead
        title="Frequently Asked Questions — Studio Rental Beirut | Chroma28 Studio"
        description="Find direct answers regarding studio rental hours, equipment, location in Antelias, parking, power capacity, and podcast booking at Chroma28 Studio."
        faq={{
          question: 'Where is Chroma28 Studio located in Lebanon?',
          answer: 'Chroma28 Studio is located in Antelias, Beirut, Mount Lebanon, offering easy access and dedicated parking for production crews.'
        }}
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <SlideDown delay={0}>
          <span className="text-xs font-bold uppercase tracking-widest text-black/50 block mb-3">
            Direct Answers
          </span>
        </SlideDown>
        <SplitText
          text="Frequently Asked Questions"
          tag="h1"
          splitType="chars"
          delay={25}
          duration={0.8}
          textAlign="center"
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black uppercase mb-4"
        />
        <FadeIn delay={0.2}>
          <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal font-sans">
            Clear, concise answers regarding studio rentals, equipment packages, power specifications, and location access in Antelias, Beirut.
          </p>
        </FadeIn>
      </div>

      {/* FAQs List */}
      <StaggerContainer className="space-y-4 mb-20" staggerChildren={0.06} delayChildren={0.1}>
        {GLOBAL_FAQS.map((faq, idx) => (
          <ScrollReveal
            key={idx}
            asChild
            variant="slideUp"
            className="bg-white p-6 border-2 border-black rounded-none shadow-xs hover:border-[#c84747] transition-colors duration-300"
          >
            <div>
              <div className="text-[10px] font-mono font-bold uppercase bg-black text-white px-2.5 py-0.5 rounded-none w-fit mb-3">
                {faq.category}
              </div>
              <h3 className="text-base font-bold text-black uppercase mb-2">{faq.question}</h3>
              <p className="text-xs text-black/70 leading-relaxed font-medium font-sans">{faq.answer}</p>
            </div>
          </ScrollReveal>
        ))}
      </StaggerContainer>

      {/* Primary FAQ Block for Page SEO */}
      <ZoomIn delay={0.1}>
        <div className="bg-white p-6 sm:p-8 border-2 border-black mb-16 rounded-none">
          <span className="text-xs font-bold uppercase tracking-widest text-black/50 block mb-2">
            Featured Question
          </span>
          <h3 className="text-base font-bold text-black uppercase mb-3">
            Where is Chroma28 Studio located in Lebanon?
          </h3>
          <p className="text-xs text-black/70 leading-relaxed font-medium font-sans">
            Chroma28 Studio is located in Antelias, Beirut, Mount Lebanon, offering easy access and dedicated parking for production crews.
          </p>
        </div>
      </ZoomIn>

      {/* CTA */}
      <ZoomIn delay={0.15}>
        <div className="text-center p-10 bg-neutral-50 border-2 border-black rounded-none">
          <h3 className="text-xl sm:text-2xl font-extrabold text-black uppercase mb-2">Have a question not listed here?</h3>
          <p className="text-xs text-black/70 mb-6 font-medium font-sans">Ask our studio manager directly via WhatsApp for instant answers.</p>
          <button
            onClick={onOpenBooking}
            className="btn-solid cursor-pointer inline-flex items-center gap-2"
          >
            <MessageCircle size={15} />
            Ask Studio Manager
          </button>
        </div>
      </ZoomIn>
    </div>
  );
};
