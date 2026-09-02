import { useEffect } from 'react';
import { motion } from 'motion/react';
import AboutHero from './about/AboutHero';
import AboutServicesGrid from './about/AboutServicesGrid';
import AboutStorySection from './about/AboutStorySection';
import AboutWhyChooseGrid from './about/AboutWhyChooseGrid';
import AboutEventsServe from './about/AboutEventsServe';
import AboutBentoGallery from './about/AboutBentoGallery';
import AboutCtaSection from './about/AboutCtaSection';
import { MenuCategory } from '../types';

interface AboutPageProps {
  onOpenQuote: (serviceTitle?: string) => void;
  onOpenMenuCategory: (categoryName: string) => void;
  onOpenFullMenu: () => void;
  onOpenFullGallery: () => void;
}

export default function AboutPage({
  onOpenQuote,
  onOpenMenuCategory,
  onOpenFullMenu,
  onOpenFullGallery
}: AboutPageProps) {
  // Ensure smooth scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      {/* 1. Hero Banner: WELCOME CHOCOBERRY EVENTS & CATERING */}
      <AboutHero
        onOpenQuote={() => onOpenQuote()}
        onExploreMenu={onOpenFullMenu}
      />

      {/* 2. Services & Menu Capabilities: A MENU AS UNIQUE AS YOUR EVENT */}
      <AboutServicesGrid
        onOpenQuote={(serviceTitle) => onOpenQuote(serviceTitle)}
        onOpenMenuCategory={onOpenMenuCategory}
      />

      {/* 3. Our Story Section (Two-Column Layout: Story & Visual Layout) */}
      <AboutStorySection
        onOpenQuote={() => onOpenQuote()}
      />

      {/* 4. Why Choose Us (Value Proposition Grid) */}
      <AboutWhyChooseGrid
        onOpenQuote={() => onOpenQuote()}
      />

      {/* 5. Events We Serve: CELEBRATING LIFE'S MOMENTS, ONE EVENT AT A TIME */}
      <AboutEventsServe
        onOpenQuote={(title) => onOpenQuote(title)}
      />

      {/* 6. Photo Gallery Showcase (Modern Bento Grid with Zoom) */}
      <AboutBentoGallery
        onOpenFullGallery={onOpenFullGallery}
      />

      {/* 7. Final CTA Banner: BOOK YOUR EVENT TODAY - CALL US TODAY! */}
      <AboutCtaSection
        onOpenQuote={() => onOpenQuote()}
      />
    </motion.div>
  );
}
