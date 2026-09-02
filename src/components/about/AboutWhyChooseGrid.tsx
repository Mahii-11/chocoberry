import { motion } from 'motion/react';
import { Sliders, Award, CheckCircle2, Layers, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { ABOUT_PAGE_DATA } from '../../data/cateringData';

interface AboutWhyChooseGridProps {
  onOpenQuote: () => void;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Sliders':
      return <Sliders className="w-6 h-6" />;
    case 'Award':
      return <Award className="w-6 h-6" />;
    case 'CheckCircle2':
      return <CheckCircle2 className="w-6 h-6" />;
    case 'Layers':
      return <Layers className="w-6 h-6" />;
    default:
      return <Award className="w-6 h-6" />;
  }
};

export default function AboutWhyChooseGrid({ onOpenQuote }: AboutWhyChooseGridProps) {
  const { whyChoose } = ABOUT_PAGE_DATA;

  return (
    <section id="why-choose-us" className="py-20 sm:py-24 bg-[#faf8f5] text-[#1c1c1f] relative overflow-hidden border-t border-[#ede7dd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#cba04e]/10 border border-[#cba04e]/30 text-[#a37928] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#cba04e]" />
            <span>OUR CORE PROMISE</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#1a1a1e] mb-3 tracking-tight">
            {whyChoose.title}
          </h2>

          <p className="text-sm sm:text-base text-[#9c7526] font-medium italic mb-4">
            {whyChoose.subtitle}
          </p>

          <p className="text-[#555350] text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto">
            {whyChoose.description}
          </p>
        </div>

        {/* 4 Key Pillars (Value Proposition Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-14">
          {whyChoose.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-7 rounded-2xl bg-white border border-[#e8e2d7] hover:border-[#cba04e] transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Icon & Badge Row */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#faf5ec] border border-[#e8ddcb] flex items-center justify-center text-[#9c7526] group-hover:scale-110 group-hover:bg-[#cba04e] group-hover:text-[#0c0c0e] transition-all duration-300">
                    {getIcon(pillar.iconName)}
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-[#faf8f5] border border-[#e8e2d7] text-[#9c7526] text-[10px] font-semibold uppercase tracking-wider">
                    {pillar.badge}
                  </span>
                </div>

                {/* Pillar Content */}
                <h3 className="font-serif-luxury text-xl font-bold text-[#1a1a1e] group-hover:text-[#9c7526] transition-colors mb-1">
                  {pillar.title}
                </h3>

                <p className="text-xs text-[#9c7526] font-medium mb-3">
                  {pillar.subtitle}
                </p>

                <p className="text-[#555350] text-xs sm:text-[13px] font-light leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              {/* Card Bottom Indicator */}
              <div className="pt-4 border-t border-[#f0eae0] flex items-center gap-1.5 text-[#9c7526] text-xs font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                <span>Pillar 0{idx + 1}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button: "CONTACT US" */}
        <div className="flex justify-center">
          <button
            id="why-choose-contact-btn"
            onClick={onOpenQuote}
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#dfba73] via-[#cba04e] to-[#b88d3d] text-[#0c0c0e] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-lg shadow-[#cba04e]/20 hover:shadow-xl hover:shadow-[#cba04e]/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center gap-3"
          >
            <PhoneCall className="w-4 h-4 transition-transform group-hover:rotate-12 duration-300" />
            <span>CONTACT US</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
}
