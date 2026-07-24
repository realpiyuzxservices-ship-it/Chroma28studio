import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BookingContextType {
  isBookingOpen: boolean;
  bookingSpaceSlug: string;
  openBooking: (spaceSlug?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSpaceSlug, setBookingSpaceSlug] = useState('cyclorama');

  const openBooking = (spaceSlug?: string) => {
    if (spaceSlug) {
      setBookingSpaceSlug(spaceSlug);
    }
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{
        isBookingOpen,
        bookingSpaceSlug,
        openBooking,
        closeBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
