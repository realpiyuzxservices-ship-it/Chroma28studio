import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Zap, MessageCircle } from 'lucide-react';
import { STUDIO_SPACES } from '@/data/spaces';
import { SeoHead, SlideUp, SlideDown, FadeIn, SlideLeft, SlideRight, ScrollReveal, ZoomIn, StaggerContainer } from '@/components';

interface SpaceDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
  onOpenBookingWithSlug: (slug: string) => void;
}

export const SpaceDetailPage: React.FC<SpaceDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenBookingWithSlug
}) => {
  const space = STUDIO_SPACES.find((s) => s.slug === slug) || STUDIO_SPACES[0];

  return (
    <div className="w-full bg-white text-black py-8 px-4 sm:px-8 max-w-7xl mx-auto selection:bg-black selection:text-white">
      <SeoHead
        title={space.metaTitle}
        description={space.metaDescription}
        spaceName={space.name}
        breadcrumbs={[
          { name: 'Home', url: 'https://chroma28.studio' },
          { name: 'The Spaces', url: 'https://chroma28.studio/spaces/cyclorama' },
          { name: space.name, url: `https://chroma28.studio/spaces/${space.slug}` }
        ]}
        faq={{
          question: space.faqQuestion,
          answer: space.faqAnswer
        }}
      />

      {/* Back button */}
      <motion.button
        onClick={() => onNavigate('/')}
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black/60 hover:text-black transition-colors mb-8 cursor-pointer group"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to Studio Overview
      </motion.button>

      {/* Hero Header — two-column split slide */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        <SlideRight delay={0.05}>
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest mb-4 rounded-none">
              {space.primaryKeyword}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black uppercase mb-4">
              {space.name}
            </h1>
            <p className="text-base sm:text-lg text-black/70 mb-8 leading-relaxed font-normal">
              {space.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBookingWithSlug(space.slug)}
                className="btn-solid cursor-pointer flex items-center gap-2"
              >
                <MessageCircle size={15} />
                Book {space.name}
              </button>

              <button
                onClick={() => onNavigate('/equipment')}
                className="btn-outline cursor-pointer"
              >
                Add Camera &amp; Lighting Gear
              </button>
            </div>
          </div>
        </SlideRight>

        {/* Space Hero Image — zoom in from right */}
        <SlideLeft delay={0.12}>
          <div className="relative aspect-[4/3] rounded-none overflow-hidden bg-neutral-100 border-2 border-black group">
            <motion.img
              src={space.heroImageUrl}
              alt={`${space.name} rental Antelias Beirut`}
              className="w-full h-full object-cover"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.04 }}
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white font-mono font-bold bg-black/90 p-3 rounded-none border border-black">
              <span>Dim: {space.dimensions}</span>
              <span>Height: {space.ceilingHeight}</span>
              <span>Power: {space.powerSupply}</span>
            </div>
          </div>
        </SlideLeft>
      </div>

      {/* Specifications Bar */}
      <ScrollReveal variant="slideUp" delay={0.05}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-neutral-50 border-2 border-black mb-16 rounded-none">
          {[
            { label: 'Dimensions', value: space.dimensions },
            { label: 'Clear Height', value: space.ceilingHeight },
            { label: 'Power Specs', value: space.powerSupply },
            { label: 'Location', value: 'Antelias, Beirut' },
          ].map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <span className="text-xs text-black/50 uppercase font-bold tracking-wider block mb-1">{spec.label}</span>
              <span className="text-sm sm:text-base font-extrabold text-black uppercase">{spec.value}</span>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>

      {/* Ideal For & Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        
        {/* Features — slide from left */}
        <SlideRight delay={0.05}>
          <div className="bg-white p-6 sm:p-8 border-2 border-black rounded-none">
            <h3 className="text-xs font-bold text-black uppercase tracking-widest mb-6">
              Space Features &amp; Capabilities
            </h3>
            <ul className="space-y-3 text-xs text-black/80 font-medium">
              {space.features.map((feat, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                >
                  <CheckCircle2 size={16} className="text-black mt-0.5 flex-shrink-0" />
                  <span>{feat}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </SlideRight>

        {/* Included Equipment — slide from right */}
        <SlideLeft delay={0.1}>
          <div className="bg-white p-6 sm:p-8 border-2 border-black rounded-none">
            <h3 className="text-xs font-bold text-black uppercase tracking-widest mb-6">
              Included Equipment &amp; Rigging
            </h3>
            <ul className="space-y-3 text-xs text-black/80 font-medium">
              {space.includedEquipment.map((eq, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                >
                  <Zap size={16} className="text-black mt-0.5 flex-shrink-0" />
                  <span>{eq}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </SlideLeft>
      </div>

      {/* Gallery Grid */}
      <div className="mb-16">
        <FadeIn delay={0.05}>
          <h3 className="text-xs font-bold uppercase tracking-widest text-black/50 mb-6">
            Set Views &amp; Production Details
          </h3>
        </FadeIn>
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          staggerChildren={0.1}
          delayChildren={0.1}
        >
          {space.galleryImages.map((img, idx) => (
            <ScrollReveal
              key={idx}
              asChild
              variant="zoomIn"
              className="aspect-video rounded-none overflow-hidden bg-neutral-100 border-2 border-black group"
            >
              <div>
                <img
                  src={img}
                  alt={`${space.name} production angle ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </ScrollReveal>
          ))}
        </StaggerContainer>
      </div>

      {/* FAQ Block */}
      <ZoomIn delay={0.1}>
        <div className="bg-white p-6 sm:p-8 border-2 border-black mb-16 rounded-none">
          <span className="text-xs font-bold uppercase tracking-widest text-black/50 block mb-2">
            Space FAQ
          </span>
          <h3 className="text-base font-bold text-black uppercase mb-3">
            {space.faqQuestion}
          </h3>
          <p className="text-xs text-black/70 leading-relaxed font-medium">
            {space.faqAnswer}
          </p>
        </div>
      </ZoomIn>

      {/* Booking CTA Bar */}
      <ScrollReveal variant="slideUp" delay={0.05}>
        <div className="p-8 sm:p-10 bg-neutral-50 border-2 border-black flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left rounded-none">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-black uppercase mb-1">Ready to book {space.name}?</h3>
            <p className="text-xs text-black/70 font-medium">Check available dates &amp; rates directly with our concierge.</p>
          </div>
          <button
            onClick={() => onOpenBookingWithSlug(space.slug)}
            className="btn-solid cursor-pointer whitespace-nowrap"
          >
            Check Availability &amp; Reserve
          </button>
        </div>
      </ScrollReveal>
    </div>
  );
};
