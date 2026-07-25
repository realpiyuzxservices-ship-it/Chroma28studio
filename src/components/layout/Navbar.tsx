import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '@/assets/images/logo_new.jpg';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'our work', path: '/work' },
    { label: 'equipments', path: '/equipments' },
    { label: 'services', path: '/services' },
    { label: 'studios', path: '/studios' },
    { label: 'process', path: '/process' },
    { label: 'testimonial', path: '/testimonials' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black/75 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-4 sm:gap-8">
        
        {/* Left: Chroma28 Logo & Wordmark */}
        <button
          onClick={() => {
            onNavigate('/');
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer border-0 bg-transparent p-0 text-left shrink-0"
          aria-label="Go to Chroma28 Studio Home"
        >
          <img
            src={logoImg}
            alt="Chroma28 Studio Logo"
            className="h-9 sm:h-10 w-10 sm:w-10 rounded-full object-cover border border-white/10 transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-barlow font-extrabold text-lg sm:text-xl tracking-wider uppercase text-white leading-none">
              Chroma28
            </span>
            <span className="font-barlow text-[9px] sm:text-[10px] tracking-[0.2em] text-neutral-400 uppercase mt-0.5">
              STUDIO · BEIRUT
            </span>
          </div>
        </button>

        {/* Desktop Navigation: Single Horizontal Row */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <nav className="flex items-center gap-5 lg:gap-7 font-sans text-xs sm:text-sm font-normal tracking-wider uppercase">
            {navItems.map((item) => {
              const isActive = currentPath === item.path || (currentPath === '/portfolio' && item.path === '/work') || (currentPath === '/equipment' && item.path === '/equipments');
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 uppercase whitespace-nowrap ${
                    isActive
                      ? 'text-white font-semibold underline underline-offset-4 decoration-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Glowing Gradient Pill Contact Button */}
          <div className="pl-4 border-l border-white/10">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_20px_0_rgba(168,85,247,0.35)] hover:shadow-[0_0_30px_0_rgba(168,85,247,0.6)] transition-all duration-300 cursor-pointer flex items-center gap-1.5"
            >
              <span>Book a Studio</span>
              <span className="text-xs">↗</span>
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => {
              onOpenBooking();
              setMobileMenuOpen(false);
            }}
            className="font-sans text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-3.5 py-2 rounded-full hover:shadow-lg transition-all"
          >
            BOOK ↗
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white hover:text-neutral-300 transition-colors bg-white/5 rounded-full border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-[#09090b]/95 backdrop-blur-md border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 font-sans text-base font-normal tracking-wider uppercase divide-y divide-white/5">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left pt-2.5 pb-1 transition-colors uppercase ${
                    isActive ? 'text-white font-semibold underline' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
