import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookingProvider } from '@/context/BookingContext';
import { Navbar, Footer, BookingModal } from '@/components';
import { HomePage } from '@/pages/HomePage';
import { SpaceDetailPage } from '@/pages/SpaceDetailPage';
import { EquipmentPage } from '@/pages/EquipmentPage';
import { PortfolioPage } from '@/pages/PortfolioPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { StudiosPage } from '@/pages/StudiosPage';
import { ProcessPage } from '@/pages/ProcessPage';
import { TestimonialsPage } from '@/pages/TestimonialsPage';
import { LocationPage } from '@/pages/LocationPage';
import { WhoItsForPage } from '@/pages/WhoItsForPage';

export function AppContent() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return typeof window !== 'undefined' ? window.location.pathname || '/' : '/';
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSpaceSlug, setBookingSpaceSlug] = useState<string>('cyclorama');

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      window.scrollTo(0, 0);
    }
  };

  const handleOpenBooking = () => {
    setBookingSpaceSlug('cyclorama');
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithSlug = (slug: string) => {
    setBookingSpaceSlug(slug);
    setIsBookingOpen(true);
  };

  // Render current view
  const renderContent = () => {
    if (currentPath.startsWith('/spaces/')) {
      const slug = currentPath.replace('/spaces/', '');
      return (
        <SpaceDetailPage
          slug={slug}
          onNavigate={handleNavigate}
          onOpenBookingWithSlug={handleOpenBookingWithSlug}
        />
      );
    }

    switch (currentPath) {
      case '/work':
      case '/portfolio':
        return <PortfolioPage onOpenBooking={handleOpenBooking} />;
      case '/equipments':
      case '/equipment':
        return <EquipmentPage onOpenBooking={handleOpenBooking} />;
      case '/services':
        return <ServicesPage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />;
      case '/studios':
      case '/spaces':
        return (
          <StudiosPage
            onNavigate={handleNavigate}
            onOpenBookingWithSlug={handleOpenBookingWithSlug}
          />
        );
      case '/process':
        return <ProcessPage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />;
      case '/who-its-for':
        return <WhoItsForPage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />;
      case '/testimonials':
      case '/faq':
        return <TestimonialsPage onOpenBooking={handleOpenBooking} />;
      case '/location':
        return <LocationPage onOpenBooking={handleOpenBooking} />;
      case '/':
      default:
        return <HomePage onNavigate={handleNavigate} onOpenBooking={handleOpenBooking} />;
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-white font-sans flex flex-col justify-between selection:bg-[#e040fb] selection:text-white page-enter">
      <div>
        <Navbar
          currentPath={currentPath}
          onNavigate={handleNavigate}
          onOpenBooking={handleOpenBooking}
        />
        <main className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPath}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedSpaceSlug={bookingSpaceSlug}
      />
    </div>
  );
}

export default function App() {
  return (
    <BookingProvider>
      <AppContent />
    </BookingProvider>
  );
}
