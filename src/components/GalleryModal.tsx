import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_DATA } from '../data/cateringData';
import { GalleryItem } from '../types';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem?: GalleryItem | null;
}

export default function GalleryModal({ isOpen, onClose, selectedItem }: GalleryModalProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(selectedItem || null);

  if (!isOpen && !selectedItem) return null;

  const categories = ['All', 'Wedding', 'Corporate', 'Food Display', 'Dessert Bar', 'Private Parties'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((i) => i.category === activeCategory);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-5xl bg-[#111116] border border-[#cba04e]/30 rounded-xl shadow-2xl text-white my-6 flex flex-col max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between shrink-0 bg-[#0c0c10]">
            <div>
              <span className="text-[#cba04e] text-[10px] uppercase font-bold tracking-[0.25em] flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> EVENT PORTFOLIO
              </span>
              <h3 className="font-serif-luxury text-2xl text-white mt-1">
                Moments We've Catered
              </h3>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close gallery modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 overflow-x-auto px-5 py-3 border-b border-white/10 bg-[#16161d] no-scrollbar shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-[#cba04e] text-black font-semibold shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="p-5 sm:p-6 overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxImage(item)}
                  className="group relative h-64 rounded-lg overflow-hidden border border-white/10 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] text-[#e5bf73] uppercase font-semibold">{item.category}</span>
                    <h4 className="font-serif-luxury text-sm font-medium text-white">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
