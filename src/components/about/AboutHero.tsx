import { motion } from 'motion/react';
import { Sparkles, Phone, ArrowRight, Award, Users, Utensils, ShieldCheck, ChevronDown } from 'lucide-react';
import { ABOUT_PAGE_DATA } from '../../data/cateringData';

interface AboutHeroProps {
  onOpenQuote: () => void;
  onExploreMenu: () => void;
}

export default function AboutHero({ onOpenQuote, onExploreMenu }: AboutHeroProps) {
  const { hero } = ABOUT_PAGE_DATA;

  const scrollToServices = () => {
    const el = document.getElementById('about-services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0d0d10]">
      {/* Background Image with warm overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Chocoberry Events & Catering"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-[#0d0d10]/70 to-[#0d0d10]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(203,160,78,0.12)_0%,transparent_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Golden Badge Subheader */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#cba04e]/15 border border-[#cba04e]/40 backdrop-blur-md mb-6 shadow-lg shadow-[#cba04e]/10"
        >
          <Award className="w-4 h-4 text-[#dfba73]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#dfba73] font-semibold">
            {hero.badge}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
        </motion.div>

        {/* High-Impact Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white max-w-5xl mx-auto leading-[1.15] tracking-tight mb-6"
        >
          WELCOME{' '}
          <span className="bg-gradient-to-r from-[#dfba73] via-[#ffd987] to-[#cba04e] bg-clip-text text-transparent font-medium">
            CHOCOBERRY EVENTS
          </span>{' '}
          & CATERING
        </motion.h1>

        {/* Engaging Description text highlighting 30+ years of excellence */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-10"
        >
          {hero.description}
        </motion.p>

        {/* Primary CTA Button: CONTACT US TODAY! with icon animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            id="about-hero-contact-btn"
            onClick={onOpenQuote}
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-[#dfba73] via-[#cba04e] to-[#b88d3d] text-[#0c0c0e] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-xl shadow-[#cba04e]/25 hover:shadow-2xl hover:shadow-[#cba04e]/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center gap-3 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Phone className="w-4 h-4 transition-transform group-hover:rotate-12 duration-300" />
              <span>{hero.primaryCta}</span>
            </span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1.5 duration-300" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button
            onClick={onExploreMenu}
            className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-[#cba04e]/60 font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
          >
            <Utensils className="w-4 h-4 text-[#dfba73]" />
            <span>EXPLORE OUR MENUS</span>
          </button>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto"
        >
          {hero.stats.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-black/40 border border-[#cba04e]/30 backdrop-blur-md shadow-xl hover:border-[#cba04e]/70 hover:bg-black/60 transition-all duration-300 group text-center"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury font-bold bg-gradient-to-r from-white via-[#faf0db] to-[#dfba73] bg-clip-text text-transparent mb-1 group-hover:scale-105 transition-transform">
                {item.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-[#dfba73] font-semibold mb-0.5">
                {item.label}
              </div>
              <div className="text-[11px] text-gray-300 font-light">
                {item.subtitle}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={scrollToServices}
            className="text-gray-400 hover:text-[#dfba73] transition-colors p-2 flex flex-col items-center gap-1 text-[11px] uppercase tracking-widest"
            aria-label="Scroll to services"
          >
            <span>DISCOVER MORE</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
