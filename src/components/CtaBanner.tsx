import { motion } from 'motion/react';
import { Utensils, ArrowRight, MessageCircle } from 'lucide-react';

interface CtaBannerProps {
  onOpenQuote: () => void;
}

export default function CtaBanner({ onOpenQuote }: CtaBannerProps) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Chocoberry Events & Catering! I would like to inquire about catering services for my upcoming event.");
    window.open(`https://wa.me/12405432203?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#0f0f13] border-y border-[#cba04e]/20 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Icon & Title & Description */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-12 h-12 rounded-full border border-[#cba04e]/30 bg-[#cba04e]/10 flex items-center justify-center shrink-0 hidden sm:flex">
            <Utensils className="w-6 h-6 text-[#cba04e]" />
          </div>
          <div>
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-white mb-1">
              Let's Plan Your Next Unforgettable Event
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm font-light">
              Contact us today for a free consultation and custom quote.
            </p>
          </div>
        </div>

        {/* Right Side: Gold CTA & WhatsApp Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            id="banner-quote-btn"
            onClick={onOpenQuote}
            className="px-6 py-3 rounded-sm bg-[#cba04e] hover:bg-[#dfba73] text-[#0f0f11] font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#cba04e]/20 hover:scale-105 active:scale-95"
          >
            <span>GET A FREE QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* WhatsApp Direct Chat Button */}
          <button
            onClick={handleWhatsApp}
            title="Chat with us on WhatsApp"
            className="w-11 h-11 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
            aria-label="WhatsApp Contact"
          >
            <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
          </button>
        </div>
      </div>
    </div>
  );
}
