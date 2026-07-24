import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { FAQItem } from "@/types";

export const faqData: FAQItem[] = [
  {
    question: "Where is Chroma28 Studio located and how far is it from central Beirut?",
    answer: "Chroma28 Studio is conveniently situated right on the main Antelias Highway in Metn, Mount Lebanon — just 5 to 10 minutes from central Beirut. We feature direct drive-in loading access for large production trucks and dedicated client parking.",
    category: "Location & Access"
  },
  {
    question: "What studio spaces and production stages are available for rental?",
    answer: "We offer 10 specialized production sets including our flagship white Cyclorama Infinity Wall (12m x 8m with 5m ceiling clearance), The Black Side blackout acoustic stage, Cook & Shoot Kitchen Studio with working gas and top-down camera rigs, 4K multi-cam Podcast Suite, and Aqua Shooting Space.",
    category: "Studio Stages"
  },
  {
    question: "Does Chroma28 Studio provide cinema equipment and lighting rentals on site?",
    answer: "Yes. Our in-house equipment catalog includes RED, ARRI, and Sony cinema camera packages, Aputure 1200d/600x LED fixtures, ARRI Skypanels, C-stands, motorized trusses, wireless video transmitters, teleprompters, and full grip packages so you don't need external rental transport.",
    category: "Equipment & Lighting"
  },
  {
    question: "Are the studios soundproofed for sync-sound video recording and podcasts?",
    answer: "Yes, all studios at Chroma28 feature 100% sound-damped acoustic isolation with treated walls, silent climate control (HVAC), and floating floors to ensure zero audio bleed during live dialogue, podcast recording, and music videos.",
    category: "Audio & Acoustics"
  },
  {
    question: "What electrical power capacity is available for high-power lighting rigs?",
    answer: "Our facility is equipped with 32A 3-phase industrial power outlets across all main stages, complete with backup industrial generators to guarantee uninterrupted power during full commercial TV production shoots.",
    category: "Facilities & Power"
  },
  {
    question: "How do I book a studio stage and what are the rates and cancellation terms?",
    answer: "You can easily check real-time availability and submit a stage booking through our interactive website, or contact our studio manager directly. We offer half-day (5 hrs) and full-day (10 hrs) rates, with flexible rescheduling terms up to 48 hours prior to call time.",
    category: "Booking & Rates"
  },
  {
    question: "Is there client seating, green rooms, and hair/makeup stations?",
    answer: "Absolutely. Each major stage includes a dedicated VIP green room, climate-controlled client lounge with high-speed fiber Wi-Fi, illuminated hair & makeup stations, wardrobe racks, and catering prep areas.",
    category: "Amenities"
  },
  {
    question: "Can we shoot food commercials or culinary shows in the Kitchen Studio?",
    answer: "Yes! Our Cook & Shoot Kitchen Studio features a fully functional kitchen island with natural gas, prep refrigerators, marble countertop finishes, and pre-mounted overhead rigs for top-down culinary shooting.",
    category: "Culinary Studio"
  }
];

export function FaqAccordionSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 px-6 sm:px-12 max-w-5xl mx-auto font-opensans">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-black mb-3">
          <HelpCircle size={14} />
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-black uppercase tracking-tight mb-4">
          Everything You Need to Know
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed">
          Clear answers about studio dimensions, power, cinema rentals, location access in Antelias Beirut, and booking terms.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqData.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`border-2 transition-all duration-300 ${
                isOpen
                  ? "border-black bg-white shadow-md"
                  : "border-black/15 bg-neutral-50 hover:border-black/40 hover:bg-white"
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none bg-transparent border-0"
                aria-expanded={isOpen}
              >
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-black leading-snug">
                  {item.question}
                </h3>
                <div
                  className={`w-8 h-8 rounded-full border border-black/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-black text-white border-black" : "bg-neutral-100 text-black"
                  }`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>

              {/* Accordion Content */}
              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-black/10 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal animate-in fade-in-50 duration-200">
                  <p className="pt-4">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Need More Assistance Banner */}
      <div className="mt-12 p-6 bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Sparkles className="text-amber-400 shrink-0" size={20} />
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider">Have a custom production requirement?</h4>
            <p className="text-xs text-neutral-400">Our studio managers are available 24/7 to assist with site visits and custom stage builds.</p>
          </div>
        </div>
        <a
          href="https://wa.me/96170000000"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors shrink-0"
        >
          Contact Studio Manager
        </a>
      </div>
    </section>
  );
}

export default FaqAccordionSection;
