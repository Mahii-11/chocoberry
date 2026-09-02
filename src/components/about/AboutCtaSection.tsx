import { motion } from 'motion/react';
import { Phone, MessageCircle, CalendarCheck2, ArrowRight, Sparkles } from 'lucide-react';
import { ABOUT_PAGE_DATA } from '../../data/cateringData';

interface AboutCtaSectionProps {
  onOpenQuote: () => void;
}

export default function AboutCtaSection({ onOpenQuote }: AboutCtaSectionProps) {
  const { finalCta } = ABOUT_PAGE_DATA;

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Chocoberry Events & Catering! I would like to inquire about booking catering & decor for my upcoming celebration.");
    window.open(`https://wa.me/12405432203?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0e0e13] via-[#14141d] to-[#0a0a0d] border-t border-[#cba04e]/20 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#cba04e]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#cba04e]/15 border border-[#cba04e]/30 text-[#dfba73] text-[11px] font-semibold uppercase tracking-[0.2em] mb-5">
          <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
          <span>START PLANNING YOUR CELEBRATION</span>
        </div>

        {/* Headline: BOOK YOUR EVENT TODAY */}
        <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal text-white mb-3 tracking-tight">
          {finalCta.headline}
        </h2>

        {/* Subheadline: Let's create a one-of-a-kind experience together! */}
        <p className="text-base sm:text-xl md:text-2xl text-[#dfba73] font-serif-luxury italic mb-4 max-w-3xl mx-auto">
          {finalCta.subheadline}
        </p>

        <p className="text-gray-300 text-xs sm:text-base font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          {finalCta.description}
        </p>

        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          {/* Prominent Call Button: CALL US TODAY! */}
          <a
            href="tel:2405432203"
            id="about-cta-call-btn"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#dfba73] via-[#cba04e] to-[#b88d3d] text-[#0c0c0e] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-xl shadow-[#cba04e]/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <Phone className="w-4 h-4" />
            <span>{finalCta.buttonText}</span>
            <span className="text-xs font-medium opacity-90">({finalCta.phone})</span>
          </a>

          {/* Book Event / Quote Button */}
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#171722] hover:bg-[#20202e] text-white border border-[#cba04e]/40 hover:border-[#cba04e]/80 font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <CalendarCheck2 className="w-4 h-4 text-[#dfba73]" />
            <span>GET FREE QUOTE</span>
            <ArrowRight className="w-4 h-4 text-[#dfba73]" />
          </button>

          {/* WhatsApp Direct Chat */}
          <button
            onClick={handleWhatsApp}
            title="Chat directly on WhatsApp"
            className="w-full sm:w-14 h-14 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 shrink-0"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
            <span className="sm:hidden ml-2 font-semibold text-xs uppercase tracking-wider">WHATSAPP CHAT</span>
          </button>
        </div>

        {/* Reassurance strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-gray-400 text-xs font-light">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dfba73]" />
            <span>Serving DC, Maryland & Northern Virginia</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dfba73]" />
            <span>100% Certified Halal Quality</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#dfba73]" />
            <span>Complimentary Initial Consultation</span>
          </div>
        </div>

      </div>
    </section>
  );
}
