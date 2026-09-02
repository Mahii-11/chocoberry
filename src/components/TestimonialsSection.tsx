import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/cateringData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-white text-[#1c1c1f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#cba04e] text-xs font-semibold uppercase tracking-[0.25em] mb-2"
          >
            WHAT OUR CLIENTS SAY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1e] tracking-tight"
          >
            Trusted by Hundreds of Happy Clients
          </motion.h2>
        </div>

        {/* Testimonials Carousel Container with Navigation Chevrons */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop/Tablet 3-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#faf8f5] rounded-xl p-6 sm:p-7 border border-[#ede7dd] flex flex-col justify-between hover:shadow-lg hover:border-[#cba04e]/40 transition-all duration-300 relative group"
              >
                <div>
                  {/* 5 Golden Stars */}
                  <div className="flex items-center gap-1 mb-4 text-[#cba04e]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#cba04e]" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#ede7dd]">
                  <p className="font-serif-luxury font-semibold text-sm text-[#18181c] mb-0.5">
                    {item.clientName}
                  </p>
                  <p className="text-[11px] text-gray-500">
                    {item.eventType} {item.location ? `— ${item.location}` : ''}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows on sides */}
          <button
            onClick={handlePrev}
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-[#cba04e] hover:border-[#cba04e] transition-colors focus:outline-none hidden sm:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-700 hover:text-[#cba04e] hover:border-[#cba04e] transition-colors focus:outline-none hidden sm:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Pagination Dots matching the design */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {[0, 1, 2, 3].map((dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setCurrentIndex(dotIndex % TESTIMONIALS_DATA.length)}
              className={`w-2 h-2 rounded-full transition-all ${
                dotIndex === 0
                  ? 'bg-[#cba04e] w-5'
                  : 'bg-[#d8d2c4] hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
