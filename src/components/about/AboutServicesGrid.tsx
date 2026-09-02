import { useState } from 'react';
import { motion } from 'motion/react';
import {
  UtensilsCrossed,
  Flame,
  IceCream,
  Cake,
  PartyPopper,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { ABOUT_PAGE_DATA } from '../../data/cateringData';
import { AboutServiceItem } from '../../types';

interface AboutServicesGridProps {
  onOpenQuote: (serviceTitle?: string) => void;
  onOpenMenuCategory: (categoryName: string) => void;
  onSelectServiceDetail?: (service: AboutServiceItem) => void;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'UtensilsCrossed':
      return <UtensilsCrossed className="w-5 h-5" />;
    case 'Flame':
      return <Flame className="w-5 h-5" />;
    case 'IceCream':
      return <IceCream className="w-5 h-5" />;
    case 'Cake':
      return <Cake className="w-5 h-5" />;
    case 'PartyPopper':
      return <PartyPopper className="w-5 h-5" />;
    case 'Sparkles':
      return <Sparkles className="w-5 h-5" />;
    default:
      return <UtensilsCrossed className="w-5 h-5" />;
  }
};

export default function AboutServicesGrid({
  onOpenQuote,
  onOpenMenuCategory
}: AboutServicesGridProps) {
  const { servicesSection } = ABOUT_PAGE_DATA;
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'FUSION' | 'DESSERT'>('ALL');

  const filteredServices = servicesSection.services.filter((srv) => {
    if (activeFilter === 'FUSION') {
      return srv.id === 'fusion-catering' || srv.id === 'american-italian';
    }
    if (activeFilter === 'DESSERT') {
      return srv.id === 'dessert-bar' || srv.id === 'pastry-ice-cream-cakes';
    }
    return true;
  });

  return (
    <section id="about-services" className="py-20 sm:py-24 bg-[#faf8f5] text-[#1c1c1f] relative overflow-hidden border-t border-[#ede7dd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#cba04e]/10 border border-[#cba04e]/30 text-[#a37928] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#cba04e]" />
            <span>OUR CATERING & EVENT CAPABILITIES</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#1a1a1e] mb-4 tracking-tight">
            {servicesSection.title}
          </h2>

          <p className="text-[#555350] text-sm sm:text-base font-light leading-relaxed">
            {servicesSection.subtitle}
          </p>

          {/* Quick Filter / Navigation Buttons: FUSION MENU and DESSERT BAR */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveFilter('ALL')}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeFilter === 'ALL'
                  ? 'bg-[#cba04e] text-[#0f0f12] shadow-md shadow-[#cba04e]/30'
                  : 'bg-white text-[#4a4a50] hover:text-[#1a1a1e] border border-[#e2dcce] hover:border-[#cba04e]'
              }`}
            >
              ALL CAPABILITIES
            </button>

            <button
              id="filter-fusion-menu-btn"
              onClick={() => {
                setActiveFilter('FUSION');
                onOpenMenuCategory('Desi Food');
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                activeFilter === 'FUSION'
                  ? 'bg-[#cba04e] text-[#0f0f12] shadow-md shadow-[#cba04e]/30'
                  : 'bg-white text-[#926a1e] hover:text-[#1a1a1e] border border-[#cba04e]/40 hover:border-[#cba04e] hover:bg-[#cba04e]/10'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>FUSION MENU</span>
            </button>

            <button
              id="filter-dessert-bar-btn"
              onClick={() => {
                setActiveFilter('DESSERT');
                onOpenMenuCategory('Desserts & Cake Flavors');
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                activeFilter === 'DESSERT'
                  ? 'bg-[#cba04e] text-[#0f0f12] shadow-md shadow-[#cba04e]/30'
                  : 'bg-white text-[#926a1e] hover:text-[#1a1a1e] border border-[#cba04e]/40 hover:border-[#cba04e] hover:bg-[#cba04e]/10'
              }`}
            >
              <IceCream className="w-3.5 h-3.5" />
              <span>DESSERT BAR</span>
            </button>
          </div>
        </div>

        {/* 6 Detailed Service Cards (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-2xl bg-white border border-[#e8e2d7] hover:border-[#cba04e] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Image Header */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                  {/* Tag & Halal Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <div className="w-9 h-9 rounded-full bg-white/95 border border-[#cba04e]/40 backdrop-blur-md flex items-center justify-center text-[#9c7526] shadow-md">
                      {getIcon(service.iconName)}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {service.isHalal && (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-700 text-white font-bold text-[10px] tracking-wider uppercase flex items-center gap-1 shadow-md">
                          <ShieldCheck className="w-3 h-3 text-emerald-200" />
                          HALAL
                        </span>
                      )}

                      {service.tag && !service.isHalal && (
                        <span className="px-2.5 py-1 rounded-full bg-black/70 border border-white/20 text-[#dfba73] font-semibold text-[10px] tracking-wider uppercase backdrop-blur-md shadow-md">
                          {service.tag}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1a1a1e] group-hover:text-[#a37928] transition-colors mb-1 flex items-center justify-between">
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#a37928] transition-colors shrink-0" />
                  </h3>

                  <p className="text-xs text-[#9c7526] font-medium mb-3 italic">
                    {service.subtitle}
                  </p>

                  <p className="text-[#4a4a50] text-xs sm:text-[13px] leading-relaxed mb-5 font-light">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 pt-3 border-t border-[#f0eae0] mb-2">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-[#555350]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#cba04e] shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenQuote(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#faf5ec] hover:bg-[#cba04e] text-[#8d671c] hover:text-[#0c0c0e] font-semibold text-xs uppercase tracking-wider border border-[#e8ddcb] hover:border-transparent transition-all duration-200 text-center"
                >
                  INQUIRE FOR THIS SERVICE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
