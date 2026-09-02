import { useState } from 'react';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import FusionMenuPage from './components/FusionMenuPage';
import SetMenuPage from './components/SetMenuPage';
import DessertBarPage from './components/DessertBarPage';
import ContactPage from './components/ContactPage';

// Home Page Sections
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import HowItWorksSection from './components/HowItWorksSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';

// Modals
import QuoteModal from './components/QuoteModal';
import MenuModal from './components/MenuModal';
import GalleryModal from './components/GalleryModal';
import ServiceDetailModal from './components/ServiceDetailModal';

import { ServiceItem, MenuCategory, GalleryItem } from './types';
import { MENU_CATEGORIES } from './data/cateringData';

export default function App() {
  // Page View State: defaults to 'contact' per user's focused request
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'gallery' | 'menu' | 'set-menu' | 'dessert-bar' | 'contact'>('contact');

  // Modal States
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [activeServiceForQuote, setActiveServiceForQuote] = useState<string>('Wedding Catering');

  const handleOpenQuote = (serviceTitle?: string) => {
    if (serviceTitle) {
      setActiveServiceForQuote(serviceTitle);
    }
    setQuoteModalOpen(true);
  };

  const handleOpenMenuModal = (categoryOrName?: MenuCategory | string) => {
    if (typeof categoryOrName === 'string') {
      const found = MENU_CATEGORIES.find(
        (c) => c.name.toLowerCase() === categoryOrName.toLowerCase() || c.id.toLowerCase() === categoryOrName.toLowerCase()
      );
      if (found) {
        setSelectedCategory(found);
      } else {
        setSelectedCategory(MENU_CATEGORIES[0]);
      }
    } else if (categoryOrName) {
      setSelectedCategory(categoryOrName);
    } else {
      setSelectedCategory(null);
    }
    setMenuModalOpen(true);
  };

  const handleOpenGalleryModal = () => {
    setSelectedGalleryItem(null);
    setGalleryModalOpen(true);
  };

  const handleSelectGalleryItem = (item: GalleryItem) => {
    setSelectedGalleryItem(item);
    setGalleryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a1e] flex flex-col font-sans selection:bg-[#cba04e] selection:text-black">
      {/* Sticky Glassmorphic Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenQuote={(title) => handleOpenQuote(title)}
        onOpenMenu={() => {
          setCurrentPage('menu');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenGallery={() => {
          setCurrentPage('gallery');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Body */}
      <main className="flex-grow">
        {currentPage === 'contact' ? (
          /* =================== CONTACT & INQUIRY PAGE =================== */
          <ContactPage onOpenQuote={(summary) => handleOpenQuote(summary)} />
        ) : currentPage === 'dessert-bar' ? (
          /* =================== LUXURY DESSERT BAR PAGE =================== */
          <DessertBarPage onOpenQuote={(summary) => handleOpenQuote(summary)} />
        ) : currentPage === 'set-menu' ? (
          /* =================== CURATED SET MENU PAGE =================== */
          <SetMenuPage onOpenQuote={(summary) => handleOpenQuote(summary)} />
        ) : currentPage === 'menu' ? (
          /* =================== GOURMET FUSION MENU PAGE =================== */
          <FusionMenuPage onOpenQuote={(summary) => handleOpenQuote(summary)} />
        ) : currentPage === 'gallery' ? (
          /* =================== IMAGE-ONLY MASONRY GALLERY PAGE =================== */
          <GalleryPage />
        ) : currentPage === 'about' ? (
          /* =================== ABOUT PAGE =================== */
          <AboutPage
            onOpenQuote={(title) => handleOpenQuote(title)}
            onOpenMenuCategory={(categoryName) => {
              setCurrentPage('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenFullMenu={() => {
              setCurrentPage('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenFullGallery={() => {
              setCurrentPage('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          /* =================== HOME PAGE =================== */
          <>
            <HeroSection
              onOpenQuote={() => handleOpenQuote()}
              onOpenMenu={() => {
                setCurrentPage('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <ServicesSection
              onSelectService={(service) => setSelectedService(service)}
            />

            <WhyChooseUsSection />

            <MenuSection
              onOpenMenu={() => {
                setCurrentPage('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectCategory={(category) => {
                setCurrentPage('menu');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <GallerySection
              onOpenGalleryModal={() => {
                setCurrentPage('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectGalleryItem={() => {
                setCurrentPage('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <TestimonialsSection />

            <HowItWorksSection />

            <CtaBanner onOpenQuote={() => handleOpenQuote()} />
          </>
        )}
      </main>

      {/* 5-Column Luxury Footer */}
      <Footer onNavigate={(page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        selectedServiceTitle={activeServiceForQuote}
      />

      <MenuModal
        isOpen={menuModalOpen}
        onClose={() => setMenuModalOpen(false)}
        initialCategory={selectedCategory}
        onOpenQuote={(title) => handleOpenQuote(title)}
      />

      <GalleryModal
        isOpen={galleryModalOpen}
        onClose={() => setGalleryModalOpen(false)}
        selectedItem={selectedGalleryItem}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuote={(title) => handleOpenQuote(title)}
      />
    </div>
  );
}
