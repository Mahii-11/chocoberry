import { motion } from 'motion/react';
import { ChefHat, ScrollText, Users2, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_DATA } from '../data/cateringData';

export default function WhyChooseUsSection() {
  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'ChefHat':
        return <ChefHat className="w-5 h-5 text-[#cba04e]" />;
      case 'ScrollText':
        return <ScrollText className="w-5 h-5 text-[#cba04e]" />;
      case 'Users2':
        return <Users2 className="w-5 h-5 text-[#cba04e]" />;
      case 'CheckCircle2':
        return (
          <div className="relative flex items-center justify-center">
            <span className="text-[10px] font-bold text-[#cba04e] border border-[#cba04e] rounded px-1 py-0.5 leading-none">
              حلال
            </span>
          </div>
        );
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#cba04e]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 sm:py-24 bg-white text-[#1c1c1f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & 4 Highlights Grid */}
          <div className="lg:col-span-6">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#cba04e] text-xs font-semibold uppercase tracking-[0.25em] mb-2"
            >
              {WHY_CHOOSE_DATA.eyebrow}
            </motion.p>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1e] tracking-tight mb-6 leading-tight"
            >
              {WHY_CHOOSE_DATA.headingLine1} <br />
              <span>{WHY_CHOOSE_DATA.headingLine2}</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-gray-600 text-sm sm:text-base leading-relaxed mb-10"
            >
              {WHY_CHOOSE_DATA.description}
            </motion.p>

            {/* 4 Feature Points Grid (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_CHOOSE_DATA.highlights.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
                  className="flex items-start gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-full border border-[#cba04e]/40 bg-[#cba04e]/5 flex items-center justify-center shrink-0 group-hover:bg-[#cba04e]/15 transition-colors mt-0.5">
                    {getHighlightIcon(item.iconName)}
                  </div>
                  <div>
                    <h3 className="font-serif-luxury font-semibold text-sm text-[#18181c] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Large Gourmet Food Image Showcase */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Outer decorative subtle gold border frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#cba04e]/20 -z-10 translate-x-2 translate-y-2 hidden sm:block" />
              
              {/* Main Image Container */}
              <div className="rounded-xl overflow-hidden shadow-2xl bg-gray-900 border border-[#e8e4dc] aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={WHY_CHOOSE_DATA.showcaseImage}
                  alt="Gourmet fusion meat skewers grilled to perfection with fresh herb garnish"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Quality Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-5 -left-3 sm:bottom-4 sm:-left-6 bg-[#0f0f13] text-white p-3.5 sm:p-4 rounded-lg shadow-xl border border-[#cba04e]/30 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-[#cba04e] text-black font-bold flex items-center justify-center text-xs">
                  25+
                </div>
                <div>
                  <p className="text-[10px] text-[#cba04e] uppercase tracking-wider font-semibold">Years Experience</p>
                  <p className="text-xs font-serif-luxury font-medium text-white">Award-Winning Culinary Team</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
