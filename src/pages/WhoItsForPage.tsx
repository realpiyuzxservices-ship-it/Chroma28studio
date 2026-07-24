import React from 'react';
import { Building2, UtensilsCrossed, Users } from 'lucide-react';
import { SeoHead, SlideUp, SlideDown, FadeIn, SlideLeft, SlideRight, ScrollReveal, ZoomIn, SplitText } from '@/components';

interface WhoItsForPageProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const WhoItsForPage: React.FC<WhoItsForPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="w-full bg-white text-black py-12 px-4 sm:px-8 max-w-7xl mx-auto selection:bg-black selection:text-white">
      <SeoHead
        title="Who It's For — Production Workflows for Creators & Agencies | Chroma28 Studio"
        description="Chroma28 Studio serves advertising agencies, content creators, photographers, restaurants, e-commerce brands, and podcasters in Antelias, Beirut, Lebanon."
        faq={{
          question: 'Who uses Chroma28 Studio for production rentals in Beirut?',
          answer: 'Our client base includes advertising agencies, fashion brands, culinary FMCG companies, YouTubers, podcasters, and corporate video teams.'
        }}
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <SlideDown delay={0}>
          <span className="text-xs font-bold uppercase tracking-widest text-black/50 block mb-3">
            ICP Segmentation &amp; Workflows
          </span>
        </SlideDown>
        <SplitText
          text="Who It's For"
          tag="h1"
          splitType="chars"
          delay={25}
          duration={0.8}
          textAlign="center"
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black uppercase mb-4"
        />
        <FadeIn delay={0.2}>
          <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal font-sans">
            Every space at Chroma28 Studio is engineered to remove setup friction for your specific production workflow.
          </p>
        </FadeIn>
      </div>

      <div className="space-y-12 mb-20">
        
        {/* ICP 1: Agencies & Brands */}
        <ScrollReveal variant="slideUp" delay={0.05} className="bg-white p-8 border-2 border-black grid grid-cols-1 lg:grid-cols-3 gap-8 items-center rounded-none shadow-xs">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase bg-black text-white px-3 py-1 rounded-none mb-4">
              <Building2 size={13} /> Advertising Agencies &amp; Commercial Brands
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-black uppercase mb-3">TV Commercials, Fashion Lookbooks &amp; Brand Storytelling</h2>
            <p className="text-xs text-black/70 leading-relaxed mb-6 font-medium font-sans">
              Our White Cyclorama Wall, The Black Side blackout set, and Aqua Space feature 3-phase power, high ceiling clearance, and roll-up loading doors for high-end commercial sets.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('/spaces/cyclorama')}
                className="btn-solid cursor-pointer"
              >
                Explore White Cyclorama
              </button>
              <button
                onClick={() => onNavigate('/spaces/black-side')}
                className="btn-outline cursor-pointer"
              >
                View The Black Side
              </button>
            </div>
          </div>
          <div className="aspect-video rounded-none overflow-hidden bg-neutral-100 border border-black/15 group">
            <img
              src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80"
              alt="Agencies Commercial Production Studio Beirut"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollReveal>

        {/* ICP 2: Culinary Creators & FMCG */}
        <ScrollReveal variant="slideUp" delay={0.05} className="bg-white p-8 border-2 border-black grid grid-cols-1 lg:grid-cols-3 gap-8 items-center rounded-none shadow-xs">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase bg-black text-white px-3 py-1 rounded-none mb-4">
              <UtensilsCrossed size={13} /> Restaurants, Food Brands &amp; FMCG
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-black uppercase mb-3">Food Photography &amp; Recipe Video Production</h2>
            <p className="text-xs text-black/70 leading-relaxed mb-6 font-medium font-sans">
              The Cook &amp; Shoot Kitchen Studio provides a modular stone island, working induction cooktops, overhead 90-degree camera rigs, and prep kitchen staging for food styling.
            </p>
            <button
              onClick={() => onNavigate('/spaces/kitchen')}
              className="btn-solid cursor-pointer"
            >
              Explore Kitchen Studio
            </button>
          </div>
          <div className="aspect-video rounded-none overflow-hidden bg-neutral-100 border border-black/15 group">
            <img
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
              alt="Food Photography & Kitchen Studio Beirut"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollReveal>

        {/* ICP 3: Independent Creators & Podcasters */}
        <ScrollReveal variant="slideUp" delay={0.05} className="bg-white p-8 border-2 border-black grid grid-cols-1 lg:grid-cols-3 gap-8 items-center rounded-none shadow-xs">
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase bg-black text-white px-3 py-1 rounded-none mb-4">
              <Users size={13} /> Podcasters, YouTubers &amp; Content Creators
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-black uppercase mb-3">4K Multi-Cam Podcasts &amp; Batch Social Reels</h2>
            <p className="text-xs text-black/70 leading-relaxed mb-6 font-medium font-sans">
              Podcast Room 1 and Podcast Room 2 come pre-wired with 4K multi-camera video switching, Shure SM7B broadcast audio, and acoustic treatment for immediate publishing.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('/spaces/podcast-room-1')}
                className="btn-solid cursor-pointer"
              >
                Podcast Room 1 (Luxury)
              </button>
              <button
                onClick={() => onNavigate('/spaces/podcast-room-2')}
                className="btn-outline cursor-pointer"
              >
                Podcast Room 2 (Creator)
              </button>
            </div>
          </div>
          <div className="aspect-video rounded-none overflow-hidden bg-neutral-100 border border-black/15 group">
            <img
              src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80"
              alt="Podcast Studio Beirut"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollReveal>

      </div>

      {/* FAQ Block */}
      <ZoomIn delay={0.1}>
        <div className="bg-white p-6 sm:p-8 border-2 border-black mb-16 max-w-3xl mx-auto rounded-none">
          <span className="text-xs font-bold uppercase tracking-widest text-black/50 block mb-2">
            Target Audience FAQ
          </span>
          <h3 className="text-base font-bold text-black uppercase mb-3">
            Who uses Chroma28 Studio for production rentals in Beirut?
          </h3>
          <p className="text-xs text-black/70 leading-relaxed font-medium">
            Our client base includes advertising agencies, fashion brands, culinary FMCG companies, YouTubers, podcasters, and corporate video teams.
          </p>
        </div>
      </ZoomIn>

      {/* CTA */}
      <ZoomIn delay={0.15}>
        <div className="text-center p-10 bg-neutral-50 border-2 border-black max-w-3xl mx-auto rounded-none">
          <h3 className="text-xl sm:text-2xl font-extrabold text-black uppercase mb-2">Ready to book a studio space for your project?</h3>
          <p className="text-xs text-black/70 mb-6 font-medium">Our studio team in Antelias is ready to assist with custom packages and gear setup.</p>
          <button
            onClick={onOpenBooking}
            className="btn-solid cursor-pointer inline-flex items-center gap-2"
          >
            Book Studio Now
          </button>
        </div>
      </ZoomIn>
    </div>
  );
};
