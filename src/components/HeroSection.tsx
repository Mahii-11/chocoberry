import { motion } from 'motion/react';
import { ArrowRight, Award, Users, FileText, MapPin, Sparkles } from 'lucide-react';
import { HERO_DATA } from '../data/cateringData';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onOpenMenu: () => void;
}

export default function HeroSection({ onOpenQuote, onOpenMenu }: HeroSectionProps) {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-5 h-5 text-[#cba04e]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#cba04e]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#cba04e]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#cba04e]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#cba04e]" />;
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0a0a0c]">
      {/* Background Image with Dark Luxury Warm Lighting Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury wedding banquet with chandeliers and candlelit tables"
          className="w-full h-full object-cover object-center opacity-40 scale-105"
        />
        {/* Gradients to match screenshot's dark moody warm banquet ambiance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/75 to-[#0a0a0c]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(203,160,78,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="text-[#cba04e] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
              {HERO_DATA.eyebrow}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.1] mb-6"
          >
            {HERO_DATA.titleLine1} <br />
            <span className="text-white">{HERO_DATA.titleLine2}</span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl font-light"
          >
            {HERO_DATA.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <button
              id="hero-quote-cta"
              onClick={onOpenQuote}
              className="px-7 py-3.5 rounded-sm bg-[#cba04e] hover:bg-[#dfba73] text-[#0f0f11] font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#cba04e]/20 hover:shadow-[#cba04e]/35 hover:scale-[1.02] active:scale-95"
            >
              <span>{HERO_DATA.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-menu-cta"
              onClick={onOpenMenu}
              className="px-7 py-3.5 rounded-sm bg-transparent hover:bg-white/5 text-gray-200 hover:text-white font-medium text-xs sm:text-sm uppercase tracking-widest border border-white/25 hover:border-white/50 transition-all duration-300 active:scale-95"
            >
              {HERO_DATA.secondaryCta}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Stats Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#121216]/80 backdrop-blur-md border border-[#cba04e]/20 rounded-md p-4 sm:p-6 shadow-2xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#cba04e]/15">
            {HERO_DATA.stats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3.5 ${
                  idx > 0 ? 'pt-3 lg:pt-0' : ''
                } ${idx % 2 !== 0 ? 'pl-2 sm:pl-4' : ''} ${
                  idx > 0 ? 'lg:pl-6' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-full border border-[#cba04e]/30 flex items-center justify-center bg-[#cba04e]/5 shrink-0">
                  {getStatIcon(stat.iconName)}
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">
                    {stat.primaryText}
                  </p>
                  <p className="text-white font-semibold text-sm sm:text-base font-serif-luxury tracking-wide">
                    {stat.secondaryText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
