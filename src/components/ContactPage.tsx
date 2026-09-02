import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Send,
  Calendar,
  Users,
  Utensils,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  HelpCircle,
  ShieldCheck,
  Building2,
  ArrowRight,
  Cake,
  GlassWater,
  Copy,
  Check
} from 'lucide-react';

interface ContactPageProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    question: "Is all your catering 100% Halal certified?",
    answer: "Yes, absolutely. All our meats (chicken, beef, goat, lamb) are 100% certified Halal from reputable and verified suppliers. We strictly adhere to clean, cross-contamination-free preparation and zero alcohol in our culinary cooking recipes."
  },
  {
    question: "How far in advance should we book our event?",
    answer: "For grand weddings and large galas (150+ guests), we recommend booking 3 to 6 months in advance, especially for peak spring and autumn wedding seasons. For corporate luncheons, birthdays, and private dinners, a 2 to 3 weeks' notice is usually sufficient depending on date availability."
  },
  {
    question: "Do you offer complimentary menu tastings?",
    answer: "Yes! We offer curated tasting sessions for confirmed wedding packages and large celebrations. You will meet our executive culinary director to sample your chosen appetizers, entrees, and signature desserts before finalizing the menu."
  },
  {
    question: "What regions do you serve?",
    answer: "We primarily serve the entire Washington D.C., Maryland (Montgomery, Prince George's, Howard, Baltimore), and Northern Virginia (Fairfax, Loudoun, Arlington, Alexandria) regions. We also take select destination weddings in New York, Pennsylvania, and nationwide."
  },
  {
    question: "Do you provide staff, servers, and live chef stations?",
    answer: "Yes! We provide full-service catering packages including uniformed captains, food attendants, live grilling chefs (for Tacos, BBQ, Samosa Chaat, Sliders), and bartending staff for smoked botanical mocktail lounges."
  },
  {
    question: "Can you accommodate dietary restrictions and allergies?",
    answer: "Certainly. We can prepare vegetarian, vegan, gluten-sensitive, dairy-free, and nut-allergy safe items. All dishes are clearly labeled for your guests' peace of mind."
  }
];

const SERVICE_REGIONS = [
  {
    name: "Washington D.C. Metro",
    description: "Downtown D.C., Capitol Hill, Georgetown, Embassy Row & Luxury Hotel Ballrooms.",
    badge: "Primary Hub"
  },
  {
    name: "Northern Virginia",
    description: "Fairfax, Loudoun County, Lansdowne, Tysons Corner, Arlington & Alexandria.",
    badge: "Full Service"
  },
  {
    name: "Maryland",
    description: "National Harbor, Potomac, Bethesda, Silver Spring, Howard County & Baltimore.",
    badge: "Full Service"
  },
  {
    name: "New York & Destination",
    description: "Buffalo, Tri-State, and destination celebration venues nationwide.",
    badge: "By Request"
  }
];

export default function ContactPage({ onOpenQuote }: ContactPageProps) {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: 'Wedding & Reception',
    guestCount: '100 - 200 Guests',
    eventDate: '',
    eventLocation: '',
    services: ['Catering & Buffet', 'Dessert Bar'] as string[],
    notes: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleService = (svc: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(svc)
        ? prev.services.filter((s) => s !== svc)
        : [...prev.services, svc]
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const copyPhoneNumber = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const openWhatsApp = () => {
    const text = `Hi Chocoberry Events! I would like to inquire about catering for an event on ${formData.eventDate || 'an upcoming date'}. Guest count: ${formData.guestCount}. My name is ${formData.fullName || 'Guest'}.`;
    window.open(`https://wa.me/17165450941?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div id="contact-page" className="min-h-screen bg-[#faf8f5] text-[#1a1a1e] pt-24 sm:pt-28 pb-0">
      
      {/* Top Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#cba04e]/10 border border-[#cba04e]/30 text-[#9c7526] text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#cba04e]" />
            <span>CONNECT WITH OUR EVENT DIRECTORS</span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1a1a1e] tracking-tight mb-4 leading-tight">
            Contact & Bookings
          </h1>

          <p className="text-[#555350] text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Ready to craft an unforgettable culinary experience? Reach out to our dedicated event managers for bespoke proposals, date availability, and complimentary tasting sessions.
          </p>
        </div>
      </div>

      {/* 4 Core Direct Contact Channels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Channel 1: Primary Hotline */}
          <div className="p-6 rounded-3xl bg-white border border-[#e8e2d7] hover:border-[#cba04e] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#cba04e]/15 border border-[#cba04e]/30 flex items-center justify-center text-[#9c7526] mb-5 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#9c7526] bg-[#cba04e]/10 px-2.5 py-1 rounded-full">
                DIRECT BOOKING LINE
              </span>
              <h3 className="font-serif-luxury text-xl font-bold text-[#1a1a1e] mt-3 mb-1">
                Call Us Directly
              </h3>
              <p className="text-xs text-[#6b6965] font-light leading-relaxed mb-4">
                Instant consultation with our senior catering coordinator.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#f0eae0]">
              <a
                href="tel:716-545-0941"
                className="block text-sm font-bold text-[#1a1a1e] hover:text-[#9c7526] transition-colors"
              >
                (716) 545-0941
              </a>
              <a
                href="tel:571-237-2592"
                className="block text-xs font-semibold text-[#6b6965] hover:text-[#9c7526] transition-colors"
              >
                571-237-2592 <span className="text-[10px] text-[#9c7526] font-medium">(DMV Team)</span>
              </a>
            </div>
          </div>

          {/* Channel 2: WhatsApp & Quick Chat */}
          <div className="p-6 rounded-3xl bg-white border border-[#e8e2d7] hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                INSTANT MESSAGING
              </span>
              <h3 className="font-serif-luxury text-xl font-bold text-[#1a1a1e] mt-3 mb-1">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-[#6b6965] font-light leading-relaxed mb-4">
                Fast responses for date checks, photo samples & pricing.
              </p>
            </div>

            <div className="pt-2 border-t border-[#f0eae0]">
              <button
                onClick={openWhatsApp}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>CHAT ON WHATSAPP</span>
              </button>
            </div>
          </div>

          {/* Channel 3: Email Proposals */}
          <div className="p-6 rounded-3xl bg-white border border-[#e8e2d7] hover:border-[#cba04e] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#cba04e]/15 border border-[#cba04e]/30 flex items-center justify-center text-[#9c7526] mb-5 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#9c7526] bg-[#cba04e]/10 px-2.5 py-1 rounded-full">
                EMAIL PROPOSALS
              </span>
              <h3 className="font-serif-luxury text-xl font-bold text-[#1a1a1e] mt-3 mb-1">
                Email Inquiries
              </h3>
              <p className="text-xs text-[#6b6965] font-light leading-relaxed mb-4">
                Send RFPs, banquet hall guidelines & dietary requirements.
              </p>
            </div>

            <div className="pt-2 border-t border-[#f0eae0]">
              <a
                href="mailto:events@chocoberryevents.com"
                className="block text-xs font-bold text-[#1a1a1e] hover:text-[#9c7526] truncate transition-colors"
              >
                events@chocoberryevents.com
              </a>
              <span className="text-[10px] text-gray-400 block mt-0.5">
                Replies within 24 business hours
              </span>
            </div>
          </div>

          {/* Channel 4: Operational Hours */}
          <div className="p-6 rounded-3xl bg-white border border-[#e8e2d7] hover:border-[#cba04e] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#cba04e]/15 border border-[#cba04e]/30 flex items-center justify-center text-[#9c7526] mb-5 group-hover:scale-110 transition-transform">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#9c7526] bg-[#cba04e]/10 px-2.5 py-1 rounded-full">
                AVAILABILITY
              </span>
              <h3 className="font-serif-luxury text-xl font-bold text-[#1a1a1e] mt-3 mb-1">
                Operating Hours
              </h3>
              <p className="text-xs text-[#6b6965] font-light leading-relaxed mb-4">
                Available 7 days a week for event bookings & logistics.
              </p>
            </div>

            <div className="space-y-1 pt-2 border-t border-[#f0eae0] text-xs">
              <div className="flex justify-between text-[#1a1a1e]">
                <span className="font-medium">Mon - Sat:</span>
                <span className="text-[#6b6965]">8:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between text-[#1a1a1e]">
                <span className="font-medium">Sunday:</span>
                <span className="text-[#6b6965]">9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Two-Column Layout: Rich Interactive Booking Form (Left) & Service Regions + Guarantee (Right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Event Booking Form (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#e8e2d7] shadow-xl p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#dfba73]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cba04e]/10 text-[#9c7526] text-[10px] font-bold uppercase tracking-widest mb-3">
                <Sparkles className="w-3 h-3 text-[#cba04e]" />
                <span>ONLINE EVENT ESTIMATE FORM</span>
              </div>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1a1a1e]">
                Request a Customized Catering Proposal
              </h2>
              <p className="text-xs sm:text-sm text-[#6b6965] font-light mt-1">
                Fill in your celebration details below and our team will prepare an itemized quote within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-6 text-center space-y-4 bg-[#faf7f0] rounded-2xl border border-[#cba04e]/40"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#1a1a1e]">
                  Thank You, {formData.fullName || 'Valued Guest'}!
                </h3>
                <p className="text-sm text-[#555350] max-w-md mx-auto leading-relaxed">
                  We have received your event inquiry for <strong>{formData.eventType}</strong> ({formData.guestCount}). Our catering director will contact you via email or phone within 24 hours.
                </p>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-white border border-[#e8e2d7] text-xs font-bold hover:bg-gray-50 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                  <button
                    onClick={openWhatsApp}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Follow Up on WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Full Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1a1a1e] mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Farhan & Sarah Rahman"
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8e2d7] focus:border-[#cba04e] focus:bg-white text-xs text-[#1a1a1e] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1a1a1e] mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. (571) 237-2592"
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8e2d7] focus:border-[#cba04e] focus:bg-white text-xs text-[#1a1a1e] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email & Event Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1a1a1e] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. client@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8e2d7] focus:border-[#cba04e] focus:bg-white text-xs text-[#1a1a1e] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1a1a1e] mb-1.5">
                      Venue / City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.eventLocation}
                      onChange={(e) => setFormData({ ...formData, eventLocation: e.target.value })}
                      placeholder="e.g. Lansdowne Resort, VA / Gaylord, MD"
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8e2d7] focus:border-[#cba04e] focus:bg-white text-xs text-[#1a1a1e] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Event Type & Expected Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1a1a1e] mb-1.5">
                      Occasion / Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8e2d7] focus:border-[#cba04e] focus:bg-white text-xs text-[#1a1a1e] outline-none transition-all"
                    >
                      <option value="Wedding & Reception">Wedding & Reception</option>
                      <option value="Mehendi & Gaaye Holud">Mehendi & Gaaye Holud</option>
                      <option value="Corporate Gala & Conference">Corporate Gala & Conference</option>
                      <option value="Birthday & Milestone Party">Birthday & Milestone Party</option>
                      <option value="Dessert Bar & Sweets Table">Dessert Bar & Sweets Table Only</option>
                      <option value="Private Tasting & Dinner">Private Chef Dinner</option>
                      <option value="Other Celebration">Other Celebration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1a1a1e] mb-1.5">
                      Estimated Guest Count
                    </label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8e2d7] focus:border-[#cba04e] focus:bg-white text-xs text-[#1a1a1e] outline-none transition-all"
                    >
                      <option value="20 - 50 Guests">20 - 50 Guests (Intimate)</option>
                      <option value="50 - 100 Guests">50 - 100 Guests (Medium)</option>
                      <option value="100 - 200 Guests">100 - 200 Guests (Standard Gala)</option>
                      <option value="200 - 350 Guests">200 - 350 Guests (Grand Banquet)</option>
                      <option value="350 - 500+ Guests">350 - 500+ Guests (Royal Wedding)</option>
                    </select>
                  </div>
                </div>

                {/* Event Date */}
                <div>
                  <label className="block text-xs font-semibold text-[#1a1a1e] mb-1.5">
                    Target Event Date
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8e2d7] focus:border-[#cba04e] focus:bg-white text-xs text-[#1a1a1e] outline-none transition-all"
                  />
                </div>

                {/* Services Needed Checklist */}
                <div>
                  <label className="block text-xs font-semibold text-[#1a1a1e] mb-2">
                    Services of Interest (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      'Catering & Buffet',
                      'Dessert Bar',
                      'Mocktail Lounge',
                      'Live Chef Stations',
                      'Custom Cake',
                      'Servers & Staff'
                    ].map((svc) => {
                      const selected = formData.services.includes(svc);
                      return (
                        <div
                          key={svc}
                          onClick={() => toggleService(svc)}
                          className={`p-2.5 rounded-xl border text-xs cursor-pointer select-none transition-all flex items-center gap-2 ${
                            selected
                              ? 'bg-[#cba04e]/15 border-[#cba04e] text-[#1a1a1e] font-semibold'
                              : 'bg-[#faf8f5] border-[#e8e2d7] text-[#6b6965] hover:border-[#cba04e]'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                              selected ? 'bg-[#cba04e] text-black' : 'border border-gray-300'
                            }`}
                          >
                            {selected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="truncate">{svc}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Special Requests / Notes */}
                <div>
                  <label className="block text-xs font-semibold text-[#1a1a1e] mb-1.5">
                    Special Dietary Requests, Theme, or Menu Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your menu preferences (e.g. Beef Rezala, Biryani, live sliders, Dubai chocolate parfait, nut-free)..."
                    className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8e2d7] focus:border-[#cba04e] focus:bg-white text-xs text-[#1a1a1e] outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-[#dfba73] via-[#cba04e] to-[#b88d3d] text-[#0c0c0e] font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#cba04e]/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>SUBMIT EVENT REQUEST</span>
                  </button>

                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="w-full sm:w-auto py-4 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WHATSAPP</span>
                  </button>
                </div>

                <p className="text-[11px] text-center text-gray-400 font-light">
                  🔒 We respect your privacy. Your information is strictly used for your event estimate.
                </p>
              </form>
            )}

          </div>

          {/* Right Column: Service Coverage, Experience Guarantee & Direct Dial Card (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Service Coverage Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#e8e2d7] shadow-lg">
              <div className="flex items-center gap-2 text-[#9c7526] text-xs font-bold uppercase tracking-widest mb-3">
                <MapPin className="w-4 h-4 text-[#cba04e]" />
                <span>SERVICE REGIONS</span>
              </div>

              <h3 className="font-serif-luxury text-2xl font-bold text-[#1a1a1e] mb-4">
                Where We Cater
              </h3>

              <div className="space-y-4 divide-y divide-[#f0eae0]">
                {SERVICE_REGIONS.map((region, i) => (
                  <div key={i} className={`pt-3 ${i === 0 ? 'pt-0' : ''}`}>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm font-bold text-[#1a1a1e]">{region.name}</h4>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#cba04e]/15 text-[#9c7526] border border-[#cba04e]/30">
                        {region.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#6b6965] font-light leading-relaxed">
                      {region.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#f0eae0] flex items-center gap-3 text-xs text-[#555350]">
                <Building2 className="w-4 h-4 text-[#cba04e] shrink-0" />
                <span>Preferred vendor at top hotel ballrooms & country clubs.</span>
              </div>
            </div>

            {/* Our Commitment & Guarantees */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#14141a] to-[#1c1c24] text-white shadow-xl border border-[#dfba73]/30 relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-[#dfba73] text-[11px] font-bold uppercase tracking-widest mb-3">
                  <ShieldCheck className="w-4 h-4" />
                  <span>THE CHOCOBERRY PROMISE</span>
                </div>

                <h3 className="font-serif-luxury text-2xl font-bold text-white mb-4">
                  Why Clients Trust Us Since 1995
                </h3>

                <ul className="space-y-3 text-xs text-gray-300 font-light">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#dfba73] shrink-0 mt-0.5" />
                    <span><strong>100% Halal Assurance:</strong> Certified meats, dedicated zero-alcohol cooking standards.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#dfba73] shrink-0 mt-0.5" />
                    <span><strong>Custom Tasting Sessions:</strong> Taste your menu before your wedding or major milestone.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#dfba73] shrink-0 mt-0.5" />
                    <span><strong>Full Service Management:</strong> Set up, live chef stations, chafing equipment, and clean up.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#dfba73] shrink-0 mt-0.5" />
                    <span><strong>Punctual Delivery:</strong> Temperature-controlled hot transportation directly to your venue.</span>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] text-gray-400">Need Immediate Help?</p>
                    <p className="text-sm font-bold text-[#dfba73]">571-237-2592</p>
                  </div>

                  <a
                    href="tel:5712372592"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#dfba73]" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cba04e]/10 text-[#9c7526] text-[10px] font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#cba04e]" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-normal text-[#1a1a1e]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#6b6965] font-light mt-1">
            Have questions about tastings, bookings, or venue setup? Here is what you need to know.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-[#e8e2d7] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif-luxury text-base sm:text-lg font-medium text-[#1a1a1e] hover:text-[#9c7526] transition-colors"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#cba04e] text-black rotate-180' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm text-[#555350] font-light leading-relaxed border-t border-[#f0eae0] pt-3">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Width Panoramic Bottom Food Showcase Image */}
      <div className="w-full relative h-72 sm:h-96 lg:h-[450px] overflow-hidden bg-gray-900 border-t border-[#e8e2d7]">
        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=2000&q=85"
          alt="Chocoberry Events & Catering Showcase"
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white max-w-3xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-[0.3em] text-[#dfba73] mb-2">
            EXPERIENCE THE DIFFERENCE
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal leading-tight mb-4">
            Making Every Celebration Unforgettable
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-light max-w-xl mb-6">
            Call our team today or request a tailored proposal online. We look forward to serving you and your guests!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:716-545-0941"
              className="px-6 py-3 rounded-xl bg-white text-[#0c0c0e] font-bold text-xs uppercase tracking-wider hover:bg-[#dfba73] transition-all shadow-lg flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#9c7526]" />
              <span>(716) 545-0941</span>
            </a>
            <button
              onClick={() => onOpenQuote('General Catering Consultation')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#dfba73] to-[#cba04e] text-[#0c0c0e] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>REQUEST INSTANT QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
