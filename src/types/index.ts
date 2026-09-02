export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
  features?: string[];
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  image: string;
  iconName: string;
  itemCount: number;
  items: MenuItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  eventType: string;
  location: string;
  rating: number;
}

export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  iconName: string;
  primaryText: string;
  secondaryText: string;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  guestCount: string;
  eventDate: string;
  location: string;
  cuisinePreferences: string[];
  notes: string;
}

export interface AboutServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tag?: string;
  isHalal?: boolean;
  image: string;
  highlights: string[];
}

export interface AboutOccasionItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  capacity: string;
  features: string[];
  image: string;
}

export interface BentoGalleryItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  colSpan?: string;
  rowSpan?: string;
  caption: string;
}
