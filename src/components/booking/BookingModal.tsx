import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, CheckCircle2, Send } from 'lucide-react';
import { STUDIO_SPACES } from '@/data/spaces';
import { useBooking } from '@/hooks/useBooking';

interface BookingModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  selectedSpaceSlug?: string;
}

export const BookingModal: React.FC<BookingModalProps> = (props) => {
  let context: ReturnType<typeof useBooking> | null = null;
  try {
    context = useBooking();
  } catch (e) {
    // Context fallback
  }

  const isOpen = props.isOpen !== undefined ? props.isOpen : context?.isBookingOpen ?? false;
  const onClose = props.onClose ?? context?.closeBooking ?? (() => {});
  const activeSpaceSlug = props.selectedSpaceSlug || context?.bookingSpaceSlug || 'cyclorama';

  const [space, setSpace] = useState(activeSpaceSlug);
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('Half Day (4 Hours)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync space when activeSpaceSlug changes
  React.useEffect(() => {
    setSpace(activeSpaceSlug);
  }, [activeSpaceSlug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const spaceObj = STUDIO_SPACES.find(s => s.slug === space);
    const spaceName = spaceObj ? spaceObj.name : 'Studio Rental';
    const msg = encodeURIComponent(
      `Hi Chroma28 Studio! I would like to book or check availability for:\n\n` +
      `📍 Space: ${spaceName}\n` +
      `📅 Date: ${date || 'Flexible'}\n` +
      `⏱️ Duration: ${duration}\n` +
      `👤 Name: ${name}\n` +
      `📞 Phone: ${phone}\n` +
      `📝 Notes: ${notes || 'None'}\n\n` +
      `Please provide quote & availability details.`
    );
    
    setTimeout(() => {
      window.open(`https://wa.me/96170000000?text=${msg}`, '_blank');
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-white border-2 border-black rounded-none p-6 sm:p-8 text-black shadow-2xl z-10 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 bg-neutral-100 hover:bg-black hover:text-white border border-black text-black transition-colors cursor-pointer rounded-none"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest mb-3 rounded-none">
                    <Calendar size={12} />
                    Reserve Your Session
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-black uppercase">Book a Studio Space</h3>
                  <p className="text-xs text-black/70 mt-1 font-medium">
                    Direct studio booking in Antelias, Beirut. Get immediate rate confirmation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                      Select Space
                    </label>
                    <select
                      value={space}
                      onChange={(e) => setSpace(e.target.value)}
                      className="w-full bg-white border border-black rounded-none px-4 py-2.5 text-xs font-bold text-black focus:outline-none focus:ring-2 focus:ring-black transition-colors cursor-pointer"
                    >
                      {STUDIO_SPACES.map((s) => (
                        <option key={s.id} value={s.slug} className="bg-white text-black">
                          {s.name} ({s.dimensions.split(' ')[0]})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-white border border-black rounded-none px-3.5 py-2.5 text-xs font-bold text-black focus:outline-none focus:ring-2 focus:ring-black transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                        Duration
                      </label>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full bg-white border border-black rounded-none px-3.5 py-2.5 text-xs font-bold text-black focus:outline-none focus:ring-2 focus:ring-black transition-colors cursor-pointer"
                      >
                        <option className="bg-white text-black">Hourly (2 Hrs Min)</option>
                        <option className="bg-white text-black">Half Day (4 Hours)</option>
                        <option className="bg-white text-black">Full Day (8 Hours)</option>
                        <option className="bg-white text-black">Multi-Day Production</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Karim Tannous"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white border border-black rounded-none px-3.5 py-2.5 text-xs text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+961 70 000 000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border border-black rounded-none px-3.5 py-2.5 text-xs text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-black uppercase tracking-wider mb-1.5">
                      Production Equipment or Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Need Sony FX6 kit, lighting technician, or custom backdrop setup."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-white border border-black rounded-none px-3.5 py-2 text-xs text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-black text-white hover:bg-neutral-800 font-bold py-3.5 px-6 rounded-none text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send size={15} />
                      Send Booking Inquiry (WhatsApp Direct)
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-none bg-black text-white mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-extrabold text-black uppercase mb-2">Inquiry Submitted!</h3>
                <p className="text-xs text-black/70 max-w-sm mx-auto mb-6 font-medium">
                  Opening WhatsApp to connect directly with the Chroma28 Studio concierge in Antelias.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-black text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider py-2.5 px-6 rounded-none transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
