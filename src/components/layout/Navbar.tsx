import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '@/assets/images/chroma28_logo_1784881730357.jpg';

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
    <header className="sticky top-0 z-50 w-full bg-white border-b border-black/10 transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-4 sm:gap-8">
        
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
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-barlow font-extrabold text-lg sm:text-xl tracking-wider uppercase text-black leading-none">
              Chroma28
            </span>
            <span className="font-barlow text-[10px] sm:text-xs tracking-widest text-neutral-500 uppercase mt-0.5">
              Studio Architecture
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
                      ? 'text-black font-semibold underline underline-offset-4 decoration-black'
                      : 'text-neutral-700 hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Standalone Uppercase Contact Button */}
          <div className="pl-4 border-l border-black/15">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 'normal' }}
              className="text-xs sm:text-sm font-normal tracking-widest uppercase text-black hover:text-neutral-600 transition-colors cursor-pointer border-b-2 border-black hover:border-neutral-600 pb-0.5 bg-transparent p-0 whitespace-nowrap"
            >
              CONTACT
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
            className="font-sans text-xs font-normal tracking-wider uppercase bg-black text-white px-3 py-1.5 hover:bg-neutral-800 transition-colors"
          >
            CONTACT
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black hover:text-neutral-600 transition-colors bg-neutral-100 rounded-none border border-black/20"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-white border-b-2 border-black px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3 font-sans text-base font-normal tracking-wider uppercase divide-y divide-neutral-100">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left pt-2 pb-1 transition-colors uppercase ${
                    isActive ? 'text-black font-semibold underline' : 'text-neutral-800 hover:text-black'
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
