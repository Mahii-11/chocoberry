import { motion } from 'motion/react';
import {
  HeartHandshake,
  Briefcase,
  PartyPopper,
  Utensils,
  Gift,
  Phone,
  ArrowRight,
  Users,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { ABOUT_PAGE_DATA } from '../../data/cateringData';

interface AboutEventsServeProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

const getOccasionIcon = (iconName: string) => {
  switch (iconName) {
    case 'HeartHandshake':
      return <HeartHandshake className="w-5 h-5" />;
    case 'Briefcase':
      return <Briefcase className="w-5 h-5" />;
    case 'PartyPopper':
      return <PartyPopper className="w-5 h-5" />;
    case 'Utensils':
      return <Utensils className="w-5 h-5" />;
    case 'Gift':
      return <Gift className="w-5 h-5" />;
    default:
      return <Sparkles className="w-5 h-5" />;
  }
};

export default function AboutEventsServe({ onOpenQuote }: AboutEventsServeProps) {
  const { eventsWeServe } = ABOUT_PAGE_DATA;

  return (
    <section id="events-we-serve" className="py-20 sm:py-24 bg-white text-[#1c1c1f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#cba04e]/10 border border-[#cba04e]/30 text-[#a37928] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#cba04e]" />
            <span>OCCASIONS & EXPERIENCES</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#1a1a1e] mb-4 tracking-tight">
            {eventsWeServe.headline}
          </h2>

          <p className="text-[#555350] text-sm sm:text-base font-light leading-relaxed">
            {eventsWeServe.subtitle}
          </p>
        </div>

        {/* 5 Occasion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {eventsWeServe.occasions.map((occasion, idx) => (
            <motion.div
              key={occasion.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group rounded-2xl bg-white border border-[#e8e2d7] hover:border-[#cba04e] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Preview */}
                <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                  <img
                    src={occasion.image}
                    alt={occasion.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                  {/* Top Badge: Capacity & Icon */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <div className="w-8 h-8 rounded-full bg-white/95 border border-[#cba04e]/40 flex items-center justify-center text-[#9c7526] shadow-md backdrop-blur-md">
                      {getOccasionIcon(occasion.iconName)}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/20 text-[#dfba73] text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md">
                      <Users className="w-3 h-3 text-[#dfba73]" />
                      <span>{occasion.capacity}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1a1a1e] group-hover:text-[#9c7526] transition-colors mb-2">
                    {occasion.title}
                  </h3>

                  <p className="text-[#555350] text-xs sm:text-[13px] font-light leading-relaxed mb-4">
                    {occasion.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-1.5 pt-3 border-t border-[#f0eae0] mb-2">
                    {occasion.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-[#555350]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#cba04e] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenQuote(occasion.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#faf5ec] hover:bg-[#cba04e] text-[#8d671c] hover:text-[#0c0c0e] font-semibold text-xs uppercase tracking-wider border border-[#e8ddcb] hover:border-transparent transition-all duration-200 text-center flex items-center justify-center gap-2"
                >
                  <span>PLAN THIS OCCASION</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Note & Direct CTA Banner: "CALL US TODAY!" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-3xl bg-[#0f0f13] border border-[#cba04e]/30 shadow-xl relative overflow-hidden text-white"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#cba04e]/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-center lg:text-left max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-[#dfba73] font-bold block mb-1">
                OUR COMMITMENT TO YOU
              </span>
              <p className="text-gray-200 text-sm sm:text-base font-light leading-relaxed">
                "{eventsWeServe.secondaryNote}"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={eventsWeServe.phoneUrl}
                id="events-serve-call-btn"
                className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#dfba73] via-[#cba04e] to-[#b88d3d] text-[#0c0c0e] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-lg shadow-[#cba04e]/20 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5"
              >
                <Phone className="w-4 h-4 transition-transform group-hover:rotate-12 duration-300" />
                <span>{eventsWeServe.callCta}</span>
                <span className="text-xs font-normal opacity-90">({eventsWeServe.phoneDisplay})</span>
              </a>

              <button
                onClick={() => onOpenQuote()}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-[#cba04e]/60 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300"
              >
                REQUEST PROPOSAL
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
