import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { MASONRY_GALLERY_IMAGES, MasonryImage } from '../data/galleryImages';

export default function GalleryPage() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;

      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev + 1) % MASONRY_GALLERY_IMAGES.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) =>
          prev !== null
            ? (prev - 1 + MASONRY_GALLERY_IMAGES.length) % MASONRY_GALLERY_IMAGES.length
            : null
        );
      }
    },
    [activeImageIndex]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (activeImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown, activeImageIndex]);

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        (activeImageIndex - 1 + MASONRY_GALLERY_IMAGES.length) % MASONRY_GALLERY_IMAGES.length
      );
    }
  };

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % MASONRY_GALLERY_IMAGES.length);
    }
  };

  return (
    <div id="gallery-page" className="min-h-screen bg-[#faf8f5] pt-24 pb-16 sm:pt-28 sm:pb-24">
      {/* Container with responsive padding */}
      <div className="max-w-[1700px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Pinterest-style Multi-Column Masonry Grid */}
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 sm:gap-4 [column-fill:_balance]">
          {MASONRY_GALLERY_IMAGES.map((item: MasonryImage, index: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (index % 10) * 0.04 }}
              onClick={() => setActiveImageIndex(index)}
              className="break-inside-avoid mb-3 sm:mb-4 group relative overflow-hidden rounded-2xl bg-gray-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-black/5 hover:ring-2 hover:ring-[#cba04e]/80"
            >
              {/* Pure image - no captions, titles or descriptions */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Minimal hover overlay with pure zoom icon */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#1a1a1e] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image-Only Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImageIndex(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 select-none"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-all z-50 shadow-xl"
              aria-label="Close image modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={showPrev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-all z-50 shadow-xl"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-all z-50 shadow-xl"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Image (Pure Image, No text) */}
            <motion.div
              key={activeImageIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[92vw] max-h-[88vh] flex items-center justify-center"
            >
              <img
                src={MASONRY_GALLERY_IMAGES[activeImageIndex].src}
                alt={MASONRY_GALLERY_IMAGES[activeImageIndex].alt}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[88vh] object-contain rounded-xl shadow-2xl ring-1 ring-white/10"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
