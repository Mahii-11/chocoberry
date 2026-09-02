import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, Phone, Utensils, Cake, Calendar, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'about' | 'gallery' | 'menu' | 'set-menu' | 'dessert-bar' | 'contact';
  onNavigate: (page: 'home' | 'about' | 'gallery' | 'menu' | 'set-menu' | 'dessert-bar' | 'contact') => void;
  onOpenQuote: (serviceTitle?: string) => void;
  onOpenMenu: (categoryName?: string) => void;
  onOpenGallery: () => void;
}

export default function Navbar({
  currentPage,
  onNavigate,
  onOpenQuote,
  onOpenMenu,
  onOpenGallery
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'about' | 'gallery' | 'menu' | 'set-menu' | 'dessert-bar' | 'contact', sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page);
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactScroll = () => {
    handleNavClick('contact');
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? 'bg-[#0b0b0f]/95 py-3 shadow-2xl border-b border-[#cba04e]/25'
          : 'bg-[#0a0a0d]/80 py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo: "Chocoberry Events" */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group cursor-pointer text-left"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#dfba73] via-[#cba04e] to-[#9b7226] p-[1.5px] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#111116] rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#dfba73]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-cormorant text-2xl font-bold tracking-wide text-white group-hover:text-[#e5bf73] transition-colors leading-none">
                Chocoberry Events
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#cba04e] font-semibold">
                & CATERING • EST. 1995
              </span>
            </div>
          </button>

          {/* Nav Links: Home, About (Active), Gallery, Fusion Menu, Dessert Bar, Set Menu, Contact */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[12px] font-medium tracking-wider text-gray-300">
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-1.5 rounded-full uppercase tracking-widest text-xs transition-all duration-200 ${
                currentPage === 'home'
                  ? 'text-white bg-[#cba04e]/20 border border-[#cba04e]/40 font-semibold'
                  : 'hover:text-[#dfba73] hover:bg-white/5'
              }`}
            >
              HOME
            </button>

            {/* About (Active) */}
            <button
              onClick={() => handleNavClick('about')}
              className={`px-3.5 py-1.5 rounded-full uppercase tracking-widest text-xs transition-all duration-200 flex items-center gap-1.5 ${
                currentPage === 'about'
                  ? 'text-[#0c0c0e] bg-gradient-to-r from-[#dfba73] to-[#cba04e] font-bold shadow-md shadow-[#cba04e]/20'
                  : 'hover:text-[#dfba73] hover:bg-white/5'
              }`}
            >
              <span>ABOUT</span>
              {currentPage === 'about' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c0c0e]" />
              )}
            </button>

            {/* Gallery */}
            <button
              onClick={() => handleNavClick('gallery')}
              className={`px-3.5 py-1.5 rounded-full uppercase tracking-widest text-xs transition-all duration-200 flex items-center gap-1.5 ${
                currentPage === 'gallery'
                  ? 'text-[#0c0c0e] bg-gradient-to-r from-[#dfba73] to-[#cba04e] font-bold shadow-md shadow-[#cba04e]/20'
                  : 'hover:text-[#dfba73] hover:bg-white/5'
              }`}
            >
              <span>GALLERY</span>
              {currentPage === 'gallery' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c0c0e]" />
              )}
            </button>

            {/* Fusion Menu */}
            <button
              onClick={() => handleNavClick('menu')}
              className={`px-3.5 py-1.5 rounded-full uppercase tracking-widest text-xs transition-all duration-200 flex items-center gap-1.5 ${
                currentPage === 'menu'
                  ? 'text-[#0c0c0e] bg-gradient-to-r from-[#dfba73] to-[#cba04e] font-bold shadow-md shadow-[#cba04e]/20'
                  : 'hover:text-[#dfba73] hover:bg-white/5'
              }`}
            >
              <span>FUSION MENU</span>
              {currentPage === 'menu' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c0c0e]" />
              )}
            </button>

            {/* Dessert Bar */}
            <button
              onClick={() => handleNavClick('dessert-bar')}
              className={`px-3.5 py-1.5 rounded-full uppercase tracking-widest text-xs transition-all duration-200 flex items-center gap-1.5 ${
                currentPage === 'dessert-bar'
                  ? 'text-[#0c0c0e] bg-gradient-to-r from-[#dfba73] to-[#cba04e] font-bold shadow-md shadow-[#cba04e]/20'
                  : 'hover:text-[#dfba73] hover:bg-white/5'
              }`}
            >
              <span>DESSERT BAR</span>
              {currentPage === 'dessert-bar' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c0c0e]" />
              )}
            </button>

            {/* Set Menu */}
            <button
              onClick={() => handleNavClick('set-menu')}
              className={`px-3.5 py-1.5 rounded-full uppercase tracking-widest text-xs transition-all duration-200 flex items-center gap-1.5 ${
                currentPage === 'set-menu'
                  ? 'text-[#0c0c0e] bg-gradient-to-r from-[#dfba73] to-[#cba04e] font-bold shadow-md shadow-[#cba04e]/20'
                  : 'hover:text-[#dfba73] hover:bg-white/5'
              }`}
            >
              <span>SET MENU</span>
              {currentPage === 'set-menu' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c0c0e]" />
              )}
            </button>

            {/* Contact */}
            <button
              onClick={handleContactScroll}
              className={`px-3.5 py-1.5 rounded-full uppercase tracking-widest text-xs transition-all duration-200 flex items-center gap-1.5 ${
                currentPage === 'contact'
                  ? 'text-[#0c0c0e] bg-gradient-to-r from-[#dfba73] to-[#cba04e] font-bold shadow-md shadow-[#cba04e]/20'
                  : 'hover:text-[#dfba73] hover:bg-white/5'
              }`}
            >
              <span>CONTACT</span>
              {currentPage === 'contact' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#0c0c0e]" />
              )}
            </button>
          </nav>

          {/* CTA Button: "Book Event" or "Contact Us" */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="nav-book-event-btn"
              onClick={() => onOpenQuote()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#dfba73] via-[#cba04e] to-[#b88d3d] text-[#0c0c0e] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md shadow-[#cba04e]/20 hover:shadow-lg hover:shadow-[#cba04e]/40 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK EVENT</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={() => onOpenQuote()}
              className="px-3 py-1.5 rounded-lg bg-[#cba04e] text-[#0c0c0e] font-bold text-[11px] uppercase tracking-wider"
            >
              BOOK EVENT
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#101016] border-b border-[#cba04e]/30 px-6 py-5 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-3 text-sm font-medium tracking-wide">
              {/* Home */}
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left py-2 px-3 rounded-lg flex justify-between items-center ${
                  currentPage === 'home'
                    ? 'bg-[#cba04e]/20 text-[#dfba73] font-bold border border-[#cba04e]/40'
                    : 'text-gray-200 hover:text-[#dfba73]'
                }`}
              >
                <span>HOME</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </button>

              {/* About (Active) */}
              <button
                onClick={() => handleNavClick('about')}
                className={`text-left py-2 px-3 rounded-lg flex justify-between items-center ${
                  currentPage === 'about'
                    ? 'bg-gradient-to-r from-[#dfba73] to-[#cba04e] text-[#0c0c0e] font-bold shadow-md'
                    : 'text-gray-200 hover:text-[#dfba73]'
                }`}
              >
                <span>ABOUT US</span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-black/20 px-2 py-0.5 rounded">
                  30+ YEARS
                </span>
              </button>

              {/* Gallery */}
              <button
                onClick={() => handleNavClick('gallery')}
                className={`text-left py-2 px-3 rounded-lg flex justify-between items-center ${
                  currentPage === 'gallery'
                    ? 'bg-gradient-to-r from-[#dfba73] to-[#cba04e] text-[#0c0c0e] font-bold shadow-md'
                    : 'text-gray-200 hover:text-[#dfba73]'
                }`}
              >
                <span>GALLERY</span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-black/20 px-2 py-0.5 rounded">
                  PORTFOLIO
                </span>
              </button>

              {/* Fusion Menu */}
              <button
                onClick={() => handleNavClick('menu')}
                className={`text-left py-2 px-3 rounded-lg flex justify-between items-center ${
                  currentPage === 'menu'
                    ? 'bg-gradient-to-r from-[#dfba73] to-[#cba04e] text-[#0c0c0e] font-bold shadow-md'
                    : 'text-gray-200 hover:text-[#dfba73]'
                }`}
              >
                <span>FUSION MENU</span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-black/20 px-2 py-0.5 rounded">
                  10 CATEGORIES
                </span>
              </button>

              {/* Dessert Bar */}
              <button
                onClick={() => handleNavClick('dessert-bar')}
                className={`text-left py-2 px-3 rounded-lg flex justify-between items-center ${
                  currentPage === 'dessert-bar'
                    ? 'bg-gradient-to-r from-[#dfba73] to-[#cba04e] text-[#0c0c0e] font-bold shadow-md'
                    : 'text-gray-200 hover:text-[#dfba73]'
                }`}
              >
                <span>DESSERT BAR</span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-black/20 px-2 py-0.5 rounded">
                  26 SWEETS
                </span>
              </button>

              {/* Set Menu */}
              <button
                onClick={() => handleNavClick('set-menu')}
                className={`text-left py-2 px-3 rounded-lg flex justify-between items-center ${
                  currentPage === 'set-menu'
                    ? 'bg-gradient-to-r from-[#dfba73] to-[#cba04e] text-[#0c0c0e] font-bold shadow-md'
                    : 'text-gray-200 hover:text-[#dfba73]'
                }`}
              >
                <span>SET MENU</span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-black/20 px-2 py-0.5 rounded">
                  3 PACKAGES
                </span>
              </button>

              {/* Contact */}
              <button
                onClick={handleContactScroll}
                className={`text-left py-2 px-3 rounded-lg flex justify-between items-center ${
                  currentPage === 'contact'
                    ? 'bg-gradient-to-r from-[#dfba73] to-[#cba04e] text-[#0c0c0e] font-bold shadow-md'
                    : 'text-gray-200 hover:text-[#dfba73]'
                }`}
              >
                <span>CONTACT US</span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-black/20 px-2 py-0.5 rounded">
                  24/7 INQUIRY
                </span>
              </button>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#dfba73] via-[#cba04e] to-[#b88d3d] text-[#0c0c0e] font-bold text-center uppercase tracking-widest text-xs shadow-lg"
                >
                  BOOK EVENT / GET FREE QUOTE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
