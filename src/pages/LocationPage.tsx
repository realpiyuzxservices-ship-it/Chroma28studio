import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, MessageCircle } from 'lucide-react';
import { SeoHead, SlideUp, SlideDown, FadeIn, SlideLeft, SlideRight, ScrollReveal, ZoomIn, SplitText } from '@/components';

interface LocationPageProps {
  onOpenBooking: () => void;
}

export const LocationPage: React.FC<LocationPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="w-full bg-white text-black py-12 px-4 sm:px-8 max-w-7xl mx-auto selection:bg-black selection:text-white">
      <SeoHead
        title="Location & Map — Studio Rental Antelias, Beirut | Chroma28 Studio"
        description="Chroma28 Studio is located on the Antelias main highway in Metn, Mount Lebanon. 5 minutes from central Beirut with dedicated parking and roll-up loading bay."
        faq={{
          question: 'How far is Chroma28 Studio from central Beirut?',
          answer: 'Chroma28 Studio is located in Antelias, Mount Lebanon, just a 5-minute drive from central Beirut with direct main highway access.'
        }}
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <SlideDown delay={0}>
          <span className="text-xs font-bold uppercase tracking-widest text-black/50 block mb-3">
            Studio Address &amp; Directions
          </span>
        </SlideDown>
        <SplitText
          text="Location & Access"
          tag="h1"
          splitType="chars"
          delay={25}
          duration={0.8}
          textAlign="center"
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-black uppercase mb-4"
        />
        <FadeIn delay={0.2}>
          <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal">
            Conveniently located in Antelias, Metn, Mount Lebanon — 5 minutes from central Beirut with private parking and vehicle drive-in access.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-start">
        
        {/* NAP Block — slides in from left */}
        <SlideRight delay={0.1}>
          <div className="bg-white p-8 border-2 border-black space-y-6 rounded-none shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-none">
              <MapPin size={13} /> Google Business Profile Verified
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-black uppercase mb-2">Chroma28 Studio</h2>
              <p className="text-xs text-black/70 leading-relaxed font-medium">
                Main Highway, Antelias Commercial District, Metn, Mount Lebanon, Beirut, Lebanon
              </p>
            </div>

            <div className="space-y-3 text-xs text-black/80 font-medium pt-2 border-t border-black/15">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-black flex-shrink-0" />
                <span>+961 70 000 000 (Concierge &amp; Studio Bookings)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-black flex-shrink-0" />
                <span>booking@chroma28.studio</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-black flex-shrink-0" />
                <span>Monday – Sunday: 08:00 – 22:00 (24/7 By Appointment)</span>
              </div>
              <div className="flex items-center gap-3">
                <Car size={16} className="text-black flex-shrink-0" />
                <span>Private Crew Parking &amp; Roll-up Truck Loading Door</span>
              </div>
            </div>

            <div className="pt-4 border-t border-black/15">
              <h3 className="text-xs font-bold uppercase tracking-widest text-black/50 mb-2">Driving Directions</h3>
              <p className="text-xs text-black/70 leading-relaxed font-medium">
                From Central Beirut: Take the North Highway towards Antelias. Take the Antelias bridge exit, turn right into the Commercial District. Studio entrance is on the main avenue.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn-solid cursor-pointer w-full flex items-center justify-center gap-2"
            >
              <MessageCircle size={14} />
              Schedule a Studio Tour / Visit
            </button>
          </div>
        </SlideRight>

        {/* Map Visualization — slides in from right */}
        <SlideLeft delay={0.2}>
          <div className="bg-neutral-50 p-6 border-2 border-black aspect-square lg:aspect-auto h-full flex flex-col justify-between relative overflow-hidden rounded-none">
            <div className="relative z-10">
              <div className="text-xs font-mono font-bold uppercase bg-black text-white px-3 py-1 rounded-none w-fit mb-4">
                Antelias Highway Map Pin
              </div>
              <h3 className="text-lg font-bold text-black uppercase mb-1">Chroma28 Studio Facility</h3>
              <p className="text-xs text-black/60 font-mono">Coordinates: 33.915° N, 35.590° E</p>
            </div>

            <div className="relative z-10 py-12 flex flex-col items-center text-center">
              <ScrollReveal variant="zoomIn" delay={0.4}>
                <div className="w-16 h-16 rounded-none bg-black text-white flex items-center justify-center mb-4">
                  <MapPin size={32} />
                </div>
              </ScrollReveal>
              <span className="text-sm font-extrabold text-black uppercase mb-1">Antelias Studio Complex</span>
              <span className="text-xs text-black/60 font-medium">Mount Lebanon / Metn District</span>
            </div>

            <div className="relative z-10 p-4 bg-white border-2 border-black text-xs text-black font-bold uppercase">
              <div className="flex items-center justify-between">
                <span>Beirut Central: 5 Mins</span>
                <span>Jounieh: 10 Mins</span>
                <span>Byblos: 20 Mins</span>
              </div>
            </div>
          </div>
        </SlideLeft>
      </div>

      {/* FAQ Block */}
      <ZoomIn delay={0.1}>
        <div className="bg-white p-6 sm:p-8 border-2 border-black mb-16 max-w-3xl mx-auto rounded-none">
          <span className="text-xs font-bold uppercase tracking-widest text-black/50 block mb-2">
            Location FAQ
          </span>
          <h3 className="text-base font-bold text-black uppercase mb-3">
            How far is Chroma28 Studio from central Beirut?
          </h3>
          <p className="text-xs text-black/70 leading-relaxed font-medium">
            Chroma28 Studio is located in Antelias, Mount Lebanon, just a 5-minute drive from central Beirut with direct main highway access.
          </p>
        </div>
      </ZoomIn>
    </div>
  );
};
