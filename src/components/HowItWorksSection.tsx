import { motion } from 'motion/react';
import { 
  FileSpreadsheet, 
  ReceiptText, 
  CalendarCheck2, 
  UtensilsCrossed, 
  Heart, 
  MoveRight 
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/cateringData';

export default function HowItWorksSection() {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-[#cba04e]" />;
      case 'ReceiptText':
        return <ReceiptText className="w-5 h-5 text-[#cba04e]" />;
      case 'CalendarCheck2':
        return <CalendarCheck2 className="w-5 h-5 text-[#cba04e]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#cba04e]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#cba04e]" />;
      default:
        return <CalendarCheck2 className="w-5 h-5 text-[#cba04e]" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-[#faf8f5] text-[#1c1c1f] overflow-hidden border-t border-[#ede7dd]">
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
            HOW IT WORKS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1e] tracking-tight"
          >
            From Planning to Perfection
          </motion.h2>
        </div>

        {/* 5 Steps Process with Connecting Dotted Arrows */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div key={step.stepNumber} className="relative flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center w-full"
                >
                  {/* Step Circular Icon Frame */}
                  <div className="w-14 h-14 rounded-full border border-[#cba04e]/50 bg-white flex items-center justify-center shadow-md mb-4 group hover:scale-110 hover:border-[#cba04e] transition-all duration-300">
                    {getStepIcon(step.iconName)}
                  </div>

                  {/* Step Title */}
                  <h3 className="font-serif-luxury font-semibold text-xs sm:text-sm text-[#18181c] mb-2">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-gray-500 text-[11px] leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </motion.div>

                {/* Dotted Arrow Connector (Visible only on desktop between steps) */}
                {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="hidden lg:flex items-center absolute top-7 -right-4 translate-x-1/2 text-[#cba04e]/40">
                    <span className="border-t-2 border-dashed border-[#cba04e]/40 w-8 inline-block mr-0.5" />
                    <MoveRight className="w-4 h-4 text-[#cba04e]/60 -ml-1" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
