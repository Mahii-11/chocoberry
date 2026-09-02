import { motion } from 'motion/react';
import { 
  Flame, 
  Utensils, 
  Soup, 
  Pizza, 
  Cake, 
  Wine, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { MENU_CATEGORIES } from '../data/cateringData';
import { MenuCategory } from '../types';

interface MenuSectionProps {
  onOpenMenu: () => void;
  onSelectCategory: (category: MenuCategory) => void;
}

export default function MenuSection({ onOpenMenu, onSelectCategory }: MenuSectionProps) {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-4 h-4 text-[#cba04e]" />;
      case 'Utensils':
        return <Utensils className="w-4 h-4 text-[#cba04e]" />;
      case 'Soup':
        return <Soup className="w-4 h-4 text-[#cba04e]" />;
      case 'Pizza':
        return <Pizza className="w-4 h-4 text-[#cba04e]" />;
      case 'Cake':
        return <Cake className="w-4 h-4 text-[#cba04e]" />;
      case 'Wine':
        return <Wine className="w-4 h-4 text-[#cba04e]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#cba04e]" />;
    }
  };

  return (
    <section id="menu" className="py-20 sm:py-24 bg-[#0a0a0d] text-white relative overflow-hidden">
      {/* Subtle Gold Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#cba04e]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#cba04e] text-xs font-semibold uppercase tracking-[0.25em] mb-2"
          >
            EXPLORE OUR MENU
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight"
          >
            A Fusion of Flavors
          </motion.h2>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
          {MENU_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              onClick={() => onSelectCategory(category)}
              className="group cursor-pointer flex flex-col items-center text-center p-3 rounded-lg hover:bg-white/[0.03] border border-transparent hover:border-[#cba04e]/20 transition-all duration-300"
            >
              {/* Circular Dish Image with Golden Badge Frame */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-b from-[#cba04e]/40 via-[#cba04e]/10 to-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Floating Gold Emblem Icon */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#111116] border border-[#cba04e] flex items-center justify-center shadow-lg group-hover:bg-[#cba04e] group-hover:text-black transition-colors">
                  {getCategoryIcon(category.iconName)}
                </div>
              </div>

              {/* Category Title */}
              <h3 className="font-serif-luxury text-xs sm:text-sm font-medium text-gray-200 group-hover:text-[#dfba73] transition-colors leading-snug">
                {category.name}
              </h3>
              
              <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">
                {category.itemCount} Selections
              </span>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <button
            id="view-full-menu-btn"
            onClick={onOpenMenu}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#cba04e] hover:bg-[#dfba73] text-[#0d0d0f] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#cba04e]/20 hover:scale-105 active:scale-95"
          >
            <span>VIEW FULL MENU</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
