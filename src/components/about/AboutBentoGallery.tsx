import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { ABOUT_PAGE_DATA } from '../../data/cateringData';
import { BentoGalleryItem } from '../../types';

interface AboutBentoGalleryProps {
  onOpenFullGallery?: () => void;
}

export default function AboutBentoGallery({ onOpenFullGallery }: AboutBentoGalleryProps) {
  const { bentoGallery } = ABOUT_PAGE_DATA;
  const [selectedImage, setSelectedImage] = useState<BentoGalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenLightbox = (item: BentoGalleryItem, index: number) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    const newIdx = (currentIndex - 1 + bentoGallery.length) % bentoGallery.length;
    setCurrentIndex(newIdx);
    setSelectedImage(bentoGallery[newIdx]);
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    const newIdx = (currentIndex + 1) % bentoGallery.length;
    setCurrentIndex(newIdx);
    setSelectedImage(bentoGallery[newIdx]);
  };

  return (
    <section id="about-gallery" className="py-20 sm:py-24 bg-[#faf8f5] text-[#1c1c1f] relative overflow-hidden border-t border-[#ede7dd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#cba04e]/10 border border-[#cba04e]/30 text-[#a37928] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4">
            <Camera className="w-3.5 h-3.5 text-[#cba04e]" />
            <span>VISUAL PORTFOLIO</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#1a1a1e] mb-3 tracking-tight">
            OUR GALLERY
          </h2>

          <p className="text-[#555350] text-sm sm:text-base font-light leading-relaxed">
            A curated glimpse into the food platters, custom wedding cakes, Gaaye Holud stage decor, and artisan dessert bars we've crafted.
          </p>
        </div>

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[260px] mb-12">
          {bentoGallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => handleOpenLightbox(item, idx)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-white border border-[#e8e2d7] hover:border-[#cba04e] transition-all duration-500 shadow-md hover:shadow-xl ${
                item.colSpan || ''
              }`}
            >
              {/* Image with zoom on hover */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top Tag & Zoom Icon */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[#dfba73] text-[10px] font-semibold uppercase tracking-wider">
                  {item.tag}
                </span>

                <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#1a1a1e] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Caption & Details */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="text-[10px] text-[#dfba73] uppercase tracking-widest font-semibold mb-1">
                  {item.category}
                </div>
                <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-white group-hover:text-[#dfba73] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] text-gray-200 font-light line-clamp-2 mt-1 opacity-90">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        {onOpenFullGallery && (
          <div className="flex justify-center">
            <button
              onClick={onOpenFullGallery}
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-[#cba04e] text-[#8d671c] hover:text-[#0c0c0e] border border-[#e8ddcb] hover:border-transparent font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 shadow-sm"
            >
              VIEW FULL GALLERY PORTFOLIO
            </button>
          </div>
        )}

      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#121217] border border-[#cba04e]/40 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative h-[360px] sm:h-[480px] w-full bg-black">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Modal Caption */}
              <div className="p-6 bg-[#121217] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#dfba73] font-semibold">
                    {selectedImage.category} • {selectedImage.tag}
                  </span>
                  <h3 className="font-serif-luxury text-xl font-bold text-white mt-0.5">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-light mt-1">
                    {selectedImage.caption}
                  </p>
                </div>
                <div className="text-xs text-gray-500 font-medium shrink-0">
                  {currentIndex + 1} of {bentoGallery.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
