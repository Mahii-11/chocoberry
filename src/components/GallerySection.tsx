import { motion } from 'motion/react';
import { ArrowRight, Eye } from 'lucide-react';
import { GALLERY_DATA } from '../data/cateringData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onOpenGalleryModal: () => void;
  onSelectGalleryItem: (item: GalleryItem) => void;
}

export default function GallerySection({ onOpenGalleryModal, onSelectGalleryItem }: GallerySectionProps) {
  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#faf8f5] text-[#1c1c1f] overflow-hidden">
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
            OUR GALLERY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1a1e] tracking-tight"
          >
            Moments We've Catered
          </motion.h2>
        </div>

        {/* 5 Tall Photo Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-12">
          {GALLERY_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => onSelectGalleryItem(item)}
              className="group relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-md cursor-pointer border border-[#e8e4dc]"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* Gradient Overlay & Hover Information */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] text-[#e5bf73] uppercase tracking-wider font-semibold mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif-luxury text-xs sm:text-sm font-medium leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <div className="mt-2 flex items-center gap-1.5 text-[10px] text-gray-300">
                  <Eye className="w-3 h-3 text-[#cba04e]" />
                  <span>Click to view</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Gallery Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <button
            id="view-more-gallery-btn"
            onClick={onOpenGalleryModal}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-[#faf6ee] text-[#1c1c1f] hover:text-[#b88d3d] border border-[#dcd6c8] hover:border-[#cba04e] font-medium text-xs uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
          >
            <span>VIEW MORE GALLERY</span>
            <ArrowRight className="w-4 h-4 text-[#cba04e]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
