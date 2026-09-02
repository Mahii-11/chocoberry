import { motion } from 'motion/react';
import { 
  HeartHandshake, 
  Briefcase, 
  Sparkles, 
  UtensilsCrossed, 
  Gift, 
  GlassWater,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES_DATA } from '../data/cateringData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#cba04e]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#cba04e]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#cba04e]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#cba04e]" />;
      case 'Gift':
        return <Gift className="w-5 h-5 text-[#cba04e]" />;
      case 'GlassWater':
        return <GlassWater className="w-5 h-5 text-[#cba04e]" />;
      default:
        return <UtensilsCrossed className="w-5 h-5 text-[#cba04e]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#faf8f5] text-[#1c1c1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#cba04e] text-xs font-semibold uppercase tracking-[0.25em] mb-2"
          >
            OUR SERVICES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1e] tracking-tight"
          >
            Catering for Every Occasion
          </motion.h2>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => onSelectService(service)}
              className="group bg-white rounded-md border border-[#e8e4dc] p-4 flex flex-col justify-between hover:shadow-xl hover:border-[#cba04e]/50 transition-all duration-300 cursor-pointer"
            >
              {/* Card Top: Icon, Title, Description */}
              <div className="flex flex-col items-center text-center">
                {/* Gold Outline Icon Frame */}
                <div className="w-12 h-12 rounded-full border border-[#cba04e]/40 bg-[#cba04e]/5 flex items-center justify-center mb-3.5 group-hover:bg-[#cba04e] group-hover:text-black transition-colors duration-300">
                  <div className="group-hover:text-black">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif-luxury text-sm font-semibold text-[#18181c] mb-2 leading-snug group-hover:text-[#b88d3d] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-[11px] leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Bottom Card Photo */}
              <div className="w-full h-28 sm:h-32 rounded overflow-hidden relative mt-auto bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-2">
                  <span className="p-1 bg-[#cba04e] rounded-full text-black">
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
