import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Check } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/cateringData';
import { MenuCategory } from '../types';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: MenuCategory | null;
  onOpenQuote: (serviceTitle?: string) => void;
}

export default function MenuModal({ isOpen, onClose, initialCategory, onOpenQuote }: MenuModalProps) {
  const [selectedCatId, setSelectedCatId] = useState<string>(
    initialCategory ? initialCategory.id : MENU_CATEGORIES[0].id
  );

  if (!isOpen) return null;

  const currentCategory = MENU_CATEGORIES.find((c) => c.id === selectedCatId) || MENU_CATEGORIES[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#111116] border border-[#cba04e]/30 rounded-xl shadow-2xl text-white my-6 flex flex-col max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between shrink-0 bg-[#0c0c10]">
            <div>
              <span className="text-[#cba04e] text-[10px] uppercase font-bold tracking-[0.25em] flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> ARTISAN CATERING MENUS
              </span>
              <h3 className="font-serif-luxury text-2xl text-white mt-1">
                A Fusion of Flavors
              </h3>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close menu modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto px-5 py-3 border-b border-white/10 bg-[#16161d] no-scrollbar shrink-0">
            {MENU_CATEGORIES.map((cat) => {
              const active = cat.id === currentCategory.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCatId(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    active
                      ? 'bg-[#cba04e] text-black font-semibold shadow-md'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Dishes List */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-serif-luxury text-lg text-[#e5bf73]">
                {currentCategory.name} Selections
              </h4>
              <span className="text-xs text-gray-400">100% Halal Certified & Freshly Sourced</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentCategory.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#181820] border border-white/5 hover:border-[#cba04e]/30 rounded-lg p-3.5 flex gap-3.5 transition-all group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-md object-cover shrink-0 group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h5 className="font-serif-luxury font-medium text-sm text-white group-hover:text-[#dfba73] transition-colors">
                          {item.name}
                        </h5>
                        {item.badge && (
                          <span className="text-[9px] bg-[#cba04e]/20 text-[#cba04e] border border-[#cba04e]/40 px-2 py-0.5 rounded-full whitespace-nowrap font-medium">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-xs mt-1 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 mt-2 text-[10px] text-gray-400">
                      <Check className="w-3 h-3 text-[#cba04e]" />
                      <span>Customizable for Dietary Needs</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0c0c10] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <p className="text-xs text-gray-400 text-center sm:text-left">
              Want a customized tasting menu or fusion combination?
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="px-6 py-2.5 rounded-sm bg-[#cba04e] hover:bg-[#dfba73] text-black font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              Request Custom Menu Quote
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
