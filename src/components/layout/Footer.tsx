import React from 'react';
import { Instagram, MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import logoImg from '@/assets/images/chroma28_logo_1784881730357.jpg';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="w-full bg-black border-t border-neutral-800 text-white pt-16 pb-12 px-4 sm:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand NAP Block */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Chroma28 Studio Logo"
                className="w-9 h-9 rounded-full border border-neutral-700 object-contain bg-white"
              />
              <h3 className="text-xl font-extrabold tracking-tight uppercase text-white">
                CHROMA28 <span className="font-medium text-neutral-400 text-sm">STUDIO</span>
              </h3>
            </div>
            <p className="text-xs text-neutral-400 max-w-md leading-relaxed font-normal">
              Beirut’s leading studio rental, white cyclorama, equipment rental, and full-service production hub in Antelias, Lebanon.
            </p>
            
            <div className="space-y-2 text-xs text-neutral-300 font-normal pt-2">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-neutral-400 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/ktg5WmJpeDpwxUMJ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                >
                  <span>Antelias Commercial District, Metn, Mount Lebanon (5 mins from Beirut)</span>
                  <ArrowUpRight size={12} className="text-neutral-500" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-neutral-400 flex-shrink-0" />
                <span>+961 70 000 000 (Studio Concierge &amp; Bookings)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-neutral-400 flex-shrink-0" />
                <span>booking@chroma28.studio</span>
              </div>
            </div>
          </div>

          {/* Quick Space Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500">Studio Spaces</h4>
            <ul className="space-y-2 text-xs text-neutral-300 font-normal">
              <li><button onClick={() => onNavigate('/spaces/cyclorama')} className="hover:text-white hover:underline cursor-pointer transition-colors">White Cyclorama Wall</button></li>
              <li><button onClick={() => onNavigate('/spaces/black-side')} className="hover:text-white hover:underline cursor-pointer transition-colors">The Black Side</button></li>
              <li><button onClick={() => onNavigate('/spaces/kitchen')} className="hover:text-white hover:underline cursor-pointer transition-colors">Cook &amp; Shoot Kitchen Studio</button></li>
              <li><button onClick={() => onNavigate('/spaces/aqua')} className="hover:text-white hover:underline cursor-pointer transition-colors">Aqua Shooting Space</button></li>
              <li><button onClick={() => onNavigate('/spaces/podcast-room-1')} className="hover:text-white hover:underline cursor-pointer transition-colors">Podcast Room 1 (Luxury)</button></li>
              <li><button onClick={() => onNavigate('/spaces/podcast-room-2')} className="hover:text-white hover:underline cursor-pointer transition-colors">Podcast Room 2 (Creator)</button></li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500">Location &amp; Social</h4>
            
            <a
              href="https://maps.app.goo.gl/ktg5WmJpeDpwxUMJ9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-white hover:bg-white hover:text-black transition-colors p-2.5 bg-neutral-900 border border-neutral-800 w-full justify-between group"
            >
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-neutral-400 group-hover:text-black" />
                <span>Open Google Maps</span>
              </div>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://instagram.com/chroma28.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-white hover:bg-white hover:text-black transition-colors p-2.5 bg-neutral-900 border border-neutral-800 w-full justify-between group"
            >
              <div className="flex items-center gap-2">
                <Instagram size={15} className="text-neutral-400 group-hover:text-black" />
                <span>@chroma28.studio</span>
              </div>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenBooking}
              className="w-full bg-white text-black font-bold uppercase tracking-wider text-xs py-3 px-4 hover:bg-neutral-200 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageCircle size={14} />
              Book Studio / Check Availability
            </button>
          </div>
        </div>

        {/* Bottom copyright & disclosures */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-normal gap-4">
          <div>
            © {new Date().getFullYear()} Chroma28 Studio. All rights reserved. Antelias, Beirut, Lebanon.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('/faq')} className="hover:text-neutral-300 hover:underline transition-colors cursor-pointer">Studio FAQs</button>
            <a href="https://maps.app.goo.gl/ktg5WmJpeDpwxUMJ9" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300 hover:underline transition-colors cursor-pointer">Google Maps Location</a>
            <span className="text-neutral-800">|</span>
            <span className="text-neutral-600">Verified Antelias Production Facility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
