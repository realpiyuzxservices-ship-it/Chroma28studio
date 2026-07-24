import React from "react";
import { cn } from "@/lib/utils";
import { Star, Quote } from "lucide-react";
import { Review } from "@/types";

export const reviews: Review[] = [
  {
    name: "Tarek Khoury",
    username: "@tarek_director",
    role: "Commercial Director • Leo Burnett",
    body: "The Cyclorama wall in Antelias saved our commercial shoot. 3-phase 32A power handled our heavy Arri Skypanels without a single glitch.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    studioStage: "Cyclorama Infinity Wall"
  },
  {
    name: "Layla Mansour",
    username: "@layla_podcasts",
    role: "Executive Producer • PodMedia",
    body: "Best soundproofed podcast suite in Beirut! Shure SM7B mics and multi-cam 4K ISO exports gave our brand show broadcast quality.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    studioStage: "Podcast Suite 01"
  },
  {
    name: "Chef Karim Salem",
    username: "@chef_karim",
    role: "Culinary Director • FMCG Brands",
    body: "The Cook & Shoot Kitchen Studio has working gas island, prep refrigeration & top-down rig ready. Shot 12 cooking reels in 1 day.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    studioStage: "Kitchen Studio"
  },
  {
    name: "Marc Antoine",
    username: "@marc_dp",
    role: "Cinematographer • Focus Films",
    body: "Direct drive-in loading access right off the Antelias highway made unloading our heavy grip & camera truck completely effortless.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    studioStage: "Stage 02 • Drive-In"
  },
  {
    name: "Nour Haddad",
    username: "@nour_films",
    role: "Music Video Director",
    body: "Chroma28's Aqua Shooting Space allowed us to achieve high-concept underwater visuals safely with temperature-controlled water.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    studioStage: "Aqua Shooting Space"
  },
  {
    name: "Maya Zgheib",
    username: "@maya_agency",
    role: "Senior Producer • Impact BBDO",
    body: "Booked The Black Side for a luxury automobile ad. Heavy blackout velvet curtains and motorized truss gave us total lighting control.",
    img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    studioStage: "The Black Side"
  },
  {
    name: "Sami Barakat",
    username: "@sami_brands",
    role: "Brand Marketing Lead",
    body: "Pristine facilities, dedicated VIP green rooms, and full Aputure & RED cinema rentals on site. Chroma28 is our official production hub.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    studioStage: "Full Facility Rental"
  },
  {
    name: "Rania Kanaan",
    username: "@rania_audio",
    role: "Sound Designer & Engineer",
    body: "100% sound-damped isolation! We recorded live acoustic guitar and voiceovers while heavy traffic passed outside without zero bleed.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    studioStage: "Acoustic Audio Suite"
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 select-none",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 gap-4 justify-around",
          reverse ? "animate-marquee-right" : "animate-marquee-left"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

export function ReviewCard({
  img,
  name,
  username,
  role,
  body,
  rating = 5,
  studioStage,
}: Review) {
  return (
    <figure
      className={cn(
        "relative w-72 sm:w-80 shrink-0 cursor-pointer overflow-hidden rounded-2xl border p-5 transition-all duration-300 font-opensans",
        "border-black/15 bg-white hover:bg-neutral-50 hover:border-black hover:shadow-lg flex flex-col justify-between"
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <img
              className="rounded-full w-10 h-10 object-cover border border-black/10"
              alt={name}
              src={img}
              loading="lazy"
            />
            <div className="flex flex-col">
              <figcaption className="text-sm font-bold text-black leading-snug font-opensans">
                {name}
              </figcaption>
              <p className="text-[11px] text-neutral-500 font-medium font-opensans">{username}</p>
            </div>
          </div>
          <Quote size={18} className="text-neutral-300 shrink-0" />
        </div>

        <div className="flex items-center justify-between mb-3 pt-1 border-t border-black/5 font-opensans">
          <div className="flex items-center gap-0.5 text-amber-500">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} size={12} className="fill-amber-500 text-amber-500" />
            ))}
          </div>
          {studioStage && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-black bg-black/10 px-2 py-0.5 rounded-sm font-opensans">
              {studioStage}
            </span>
          )}
        </div>

        <blockquote className="text-xs text-neutral-800 leading-relaxed font-normal font-opensans">
          "{body}"
        </blockquote>
      </div>

      <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between text-[11px] text-neutral-500 font-opensans">
        <span className="truncate font-opensans">{role}</span>
        <span className="text-black font-bold font-opensans">Verified Director</span>
      </div>
    </figure>
  );
}

export function TestimonialsMarqueeSection() {
  return (
    <section className="py-20 bg-neutral-50 border-b border-black/15 overflow-hidden font-opensans">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-12 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-800 block mb-3 font-opensans">
          CLIENT REVIEWS &amp; VERIFIED FEEDBACK
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-black uppercase tracking-tight mb-4 font-opensans">
          Trusted by Directors, Agencies &amp; Creators
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed font-opensans">
          See why production teams from Lebanon, the Gulf, and Europe choose Chroma28 Studio for high-end commercials, podcasts, culinary sets, and photography campaigns.
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((review) => (
            <ReviewCard
              key={review.username}
              name={review.name}
              username={review.username}
              role={review.role}
              body={review.body}
              img={review.img}
              rating={review.rating}
              studioStage={review.studioStage}
            />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRow.map((review) => (
            <ReviewCard
              key={review.username}
              name={review.name}
              username={review.username}
              role={review.role}
              body={review.body}
              img={review.img}
              rating={review.rating}
              studioStage={review.studioStage}
            />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-neutral-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-neutral-50 to-transparent z-10" />
      </div>
    </section>
  );
}

export default TestimonialsMarqueeSection;
