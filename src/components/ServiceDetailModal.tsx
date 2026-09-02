import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Sparkles, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuote: (serviceTitle: string) => void;
}

export default function ServiceDetailModal({ service, onClose, onOpenQuote }: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-[#121217] border border-[#cba04e]/30 rounded-xl shadow-2xl overflow-hidden text-white my-8"
        >
          {/* Header Image */}
          <div className="relative h-48 sm:h-56 w-full">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-[#121217]/40 to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 p-2 rounded-full transition-colors"
              aria-label="Close service modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6">
              <span className="text-[#cba04e] text-[10px] uppercase font-bold tracking-[0.25em] flex items-center gap-1 mb-1">
                <Sparkles className="w-3 h-3" /> CATERING SERVICE
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-7 space-y-6">
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.description} We bring culinary artistry and impeccable hospitality to make your event truly memorable across Washington DC, Maryland, and Virginia.
            </p>

            {service.features && (
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#cba04e] font-semibold mb-3">
                  Service Highlights & Inclusions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-200 bg-white/5 p-2 rounded border border-white/5">
                      <div className="w-4 h-4 rounded-full bg-[#cba04e]/20 flex items-center justify-center shrink-0 text-[#cba04e]">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <p className="text-xs text-gray-400">
                Tailored menus designed for your guest size and budget.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote(service.title);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-sm bg-[#cba04e] hover:bg-[#dfba73] text-black font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Book This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
