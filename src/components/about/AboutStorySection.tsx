import { motion } from 'motion/react';
import { Sparkles, Award, History, Heart, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { ABOUT_PAGE_DATA } from '../../data/cateringData';

interface AboutStorySectionProps {
  onOpenQuote: () => void;
}

export default function AboutStorySection({ onOpenQuote }: AboutStorySectionProps) {
  const { story } = ABOUT_PAGE_DATA;

  return (
    <section id="our-story" className="py-20 sm:py-24 bg-white text-[#1c1c1f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Rich Storytelling & Milestones (7 Cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            {/* Golden Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#cba04e]/10 border border-[#cba04e]/30 text-[#a37928] text-[11px] font-semibold uppercase tracking-[0.2em] mb-5">
              <History className="w-3.5 h-3.5 text-[#cba04e]" />
              <span>{story.badge}</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1e] mb-3 tracking-tight leading-[1.2]">
              {story.heading}
            </h2>

            <p className="text-sm sm:text-base text-[#9c7526] font-medium italic mb-6">
              {story.subtitle}
            </p>

            {/* Story Paragraphs */}
            <div className="space-y-4 text-[#4a4a50] text-sm sm:text-base font-light leading-relaxed mb-8">
              {story.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* 4 Feature Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {story.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#faf8f5] border border-[#ede7dd] hover:border-[#cba04e]/60 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 text-[#1a1a1e] font-medium text-xs sm:text-sm mb-1">
                    <div className="w-4 h-4 rounded-full bg-[#cba04e]/20 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#a37928]" />
                    </div>
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-[#555350] text-xs font-light pl-6">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Timeline Strip */}
            <div className="border-t border-[#ede7dd] pt-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[#9c7526] font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#cba04e]" />
                <span>KEY MILESTONES IN OUR HERITAGE</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {story.milestones.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#faf8f5] border border-[#ede7dd]">
                    <div className="font-serif-luxury text-base font-bold text-[#9c7526]">
                      {m.year}
                    </div>
                    <div className="text-[11px] text-[#555350] leading-tight mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Resolution Modern Visual Layout (5 Cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Gold Glow Aura */}
              <div className="absolute -inset-2 rounded-3xl bg-[#cba04e]/15 blur-xl opacity-60" />

              {/* Primary Image Card */}
              <div className="relative rounded-3xl overflow-hidden border border-[#e8e2d7] bg-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                  alt="Chocoberry Luxury Venue Celebration"
                  className="w-full h-[460px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Badge: 30+ Years Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-[#cba04e]/40 px-3.5 py-2 rounded-2xl flex items-center gap-2 shadow-lg">
                  <Award className="w-5 h-5 text-[#9c7526]" />
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-[#6b6762] font-semibold">ESTABLISHED</div>
                    <div className="text-xs font-bold text-[#1a1a1e]">1995 • 30+ Years</div>
                  </div>
                </div>

                {/* Bottom Overlay Info Plaque */}
                <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-white/95 border border-[#e8e2d7] backdrop-blur-md shadow-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#dfba73] to-[#9b7226] p-[1.5px] flex items-center justify-center shrink-0">
                      <div className="w-full h-full bg-[#faf8f5] rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-[#9c7526] fill-[#9c7526]/20" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1a1a1e] font-serif-luxury">
                        "Culinary Artistry with Heart"
                      </div>
                      <div className="text-[10px] text-[#9c7526] uppercase tracking-wider font-semibold">
                        DC, MARYLAND & VIRGINIA
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#555350] font-light leading-relaxed mb-3">
                    Crafting bespoke fusion menus, custom multi-tier wedding cakes, and unforgettable memories for every cherished life celebration.
                  </p>
                  <button
                    onClick={onOpenQuote}
                    className="w-full py-2 px-3 rounded-lg bg-[#cba04e] hover:bg-[#dfba73] text-[#0a0a0c] font-bold text-[11px] uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <span>LET'S CRAFT YOUR MENU</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Secondary Floating Floating Card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-[#e8e2d7] shadow-xl z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1a1a1e]">100% Halal Meat</div>
                  <div className="text-[10px] text-[#6b6762]">Hygienic Artisan Kitchen</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
