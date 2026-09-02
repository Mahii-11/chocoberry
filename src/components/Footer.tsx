import { Sparkles, Phone, Mail, Clock, MapPin, Facebook, Instagram, Share2, Globe } from 'lucide-react';
import { FOOTER_DATA } from '../data/cateringData';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about' | 'gallery' | 'menu' | 'set-menu' | 'dessert-bar' | 'contact') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToSection = (href: string, label?: string) => {
    const l = label?.toLowerCase() || '';
    if (l.includes('contact') && onNavigate) {
      onNavigate('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (l === 'gallery' && onNavigate) {
      onNavigate('gallery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (l === 'home' && onNavigate) {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if ((l === 'about us' || l === 'about') && onNavigate) {
      onNavigate('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (l.includes('dessert') && onNavigate) {
      onNavigate('dessert-bar');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (l.includes('set menu') && onNavigate) {
      onNavigate('set-menu');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if ((l.includes('menu') || l.includes('fusion')) && onNavigate) {
      onNavigate('menu');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href.startsWith('#')) {
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contact" className="bg-[#0b0b0e] text-gray-300 pt-16 pb-12 border-t border-[#cba04e]/20 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          {/* Column 1: Brand & Bio & Socials */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#dfba73] to-[#9b7226] p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#111115] rounded-full flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-cormorant text-xl font-bold text-white leading-none">
                  Chocoberry
                </span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-[#cba04e] font-semibold">
                  EVENTS & CATERING
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-[11px] leading-relaxed mb-6 font-light">
              {FOOTER_DATA.about}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#cba04e] hover:border-[#cba04e] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#cba04e] hover:border-[#cba04e] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#cba04e] hover:border-[#cba04e] transition-colors"
                aria-label="Google Business"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
              <a
                href="#"
                className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#cba04e] hover:border-[#cba04e] transition-colors"
                aria-label="Share"
              >
                <Share2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[#cba04e] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-gray-400 text-[11px]">
              {FOOTER_DATA.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(link.href, link.label)}
                    className="hover:text-[#dfba73] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-[#cba04e] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4">
              OUR SERVICES
            </h4>
            <ul className="space-y-2 text-gray-400 text-[11px]">
              {FOOTER_DATA.services.map((srv, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="hover:text-[#dfba73] transition-colors text-left"
                  >
                    {srv}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-[#cba04e] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4">
              CONTACT INFO
            </h4>
            <div className="space-y-3 text-gray-400 text-[11px]">
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#cba04e] shrink-0 mt-0.5" />
                <a href={`tel:${FOOTER_DATA.contact.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">
                  {FOOTER_DATA.contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#cba04e] shrink-0 mt-0.5" />
                <a href={`mailto:${FOOTER_DATA.contact.email}`} className="hover:text-white transition-colors break-all">
                  {FOOTER_DATA.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#cba04e] shrink-0 mt-0.5" />
                <span>{FOOTER_DATA.contact.hours}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#cba04e] shrink-0 mt-0.5" />
                <span>{FOOTER_DATA.contact.area}</span>
              </div>
            </div>
          </div>

          {/* Column 5: Service Area */}
          <div>
            <h4 className="text-[#cba04e] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4">
              SERVICE AREA
            </h4>
            <ul className="space-y-1.5 text-gray-400 text-[11px]">
              {FOOTER_DATA.serviceAreas.map((area, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#cba04e]" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-[11px]">
          <p>© {new Date().getFullYear()} Chocoberry Events & Catering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
