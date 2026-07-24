import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STUDIO_SPACES } from '@/data/spaces';
import { ArrowRight, ChevronRight, Sparkles, X } from 'lucide-react';

interface SpacesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const SpacesMegaMenu: React.FC<SpacesMegaMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onMouseLeave={onClose}
          className="fixed top-20 left-1/2 -translate-x-1/2 w-[94vw] max-w-6xl z-50 p-6 sm:p-8 bg-white text-black border-2 border-black shadow-2xl rounded-none max-h-[82vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/15">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center p-2 bg-black text-white rounded-none">
                <Sparkles size={16} />
              </span>
              <div>
                <h3 className="text-sm font-bold tracking-wider text-black uppercase">The 10 Studio Spaces</h3>
                <p className="text-xs text-black/60 font-medium">Purpose-built production environments in Antelias, Beirut</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  onClose();
                  onNavigate('/who-its-for');
                }}
                className="text-xs font-bold uppercase tracking-wider text-black/70 hover:text-black flex items-center gap-1.5 transition-colors group cursor-pointer"
              >
                Which space suits your shoot?
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onClose}
                className="p-1 text-black/50 hover:text-black transition-colors rounded-none border border-black/20 hover:border-black"
                aria-label="Close menu"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Grid of 10 Spaces */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {STUDIO_SPACES.map((space) => (
              <button
                key={space.id}
                onClick={() => {
                  onClose();
                  onNavigate(`/spaces/${space.slug}`);
                }}
                className="group text-left p-3 bg-neutral-50 hover:bg-black hover:text-white border border-black/15 hover:border-black transition-all duration-200 cursor-pointer flex flex-col justify-between rounded-none"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden mb-3 bg-neutral-200 rounded-none">
                  <img
                    src={space.thumbnailUrl}
                    alt={space.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-10 transition-opacity" />
                  <span className="absolute bottom-1.5 left-2 text-[10px] font-mono text-white bg-black px-1.5 py-0.5 rounded-none">
                    {space.dimensions.split(' ')[0]}
                  </span>
                </div>
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h4 className="text-xs font-bold uppercase tracking-tight text-black group-hover:text-white line-clamp-1">
                      {space.name}
                    </h4>
                    <ChevronRight size={12} className="text-black/40 group-hover:text-white group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                  </div>
                  <p className="text-[11px] text-black/60 group-hover:text-white/70 line-clamp-1 leading-snug">
                    {space.shortDescription}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Quick Footer inside mega menu */}
          <div className="mt-6 pt-4 border-t border-black/15 flex flex-wrap items-center justify-between gap-2 text-xs text-black/70 font-medium">
            <span>All studios feature 3-phase power, silent climate control &amp; green room access.</span>
            <button
              onClick={() => {
                onClose();
                onNavigate('/spaces/cyclorama');
              }}
              className="text-black font-bold uppercase tracking-wider hover:underline cursor-pointer"
            >
              Explore Flagship White Cyclorama →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpacesMegaMenu;
