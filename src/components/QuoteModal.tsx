import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceTitle?: string;
}

export default function QuoteModal({ isOpen, onClose, selectedServiceTitle }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    eventType: selectedServiceTitle || 'Wedding Catering',
    guestCount: '50-100',
    eventDate: '',
    location: 'Washington DC',
    cuisinePreferences: ['Desi Food', 'Mediterranean & Kabob'],
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3 seconds if needed
    }, 3500);
  };

  const toggleCuisine = (cuisine: string) => {
    setFormData((prev) => ({
      ...prev,
      cuisinePreferences: prev.cuisinePreferences.includes(cuisine)
        ? prev.cuisinePreferences.filter((c) => c !== cuisine)
        : [...prev.cuisinePreferences, cuisine]
    }));
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-xl bg-[#121217] border border-[#cba04e]/30 rounded-xl shadow-2xl p-6 sm:p-8 text-white my-8 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-[#cba04e]/10 border border-[#cba04e] flex items-center justify-center mx-auto mb-4 text-[#cba04e]">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-white mb-2">
                Thank You for Your Inquiry!
              </h3>
              <p className="text-gray-300 text-sm max-w-md mx-auto mb-6">
                We have received your event details for <span className="text-[#cba04e] font-semibold">{formData.eventType}</span>. Our executive chef and event coordinator will reach out to you within 24 hours with a tailored proposal.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-sm bg-[#cba04e] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#dfba73] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-6">
                <span className="text-[#cba04e] text-[10px] uppercase font-bold tracking-[0.25em] flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> FREE CONSULTATION & ESTIMATE
                </span>
                <h3 className="font-serif-luxury text-2xl font-normal text-white mt-1">
                  Request a Custom Quote
                </h3>
                <p className="text-gray-400 text-xs mt-1">
                  Tell us about your event and our team across DC, MD & VA will craft your custom menu.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-1 font-medium">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#1c1c24] border border-white/10 rounded px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#cba04e]"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1 font-medium">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (240) 543-2203"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1c1c24] border border-white/10 rounded px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#cba04e]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-1 font-medium">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1c1c24] border border-white/10 rounded px-3 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#cba04e]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-gray-300 mb-1 font-medium">Event Type</label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#1c1c24] border border-white/10 rounded px-3 py-2.5 text-white focus:outline-none focus:border-[#cba04e]"
                    >
                      <option value="Wedding Catering">Wedding Catering</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Birthday & Private Party">Birthday & Private Party</option>
                      <option value="Private Dinner">Private Dinner</option>
                      <option value="Baby Shower">Baby Shower</option>
                      <option value="Dessert & Mocktail Bar">Dessert & Mocktail Bar</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1 font-medium">Guest Count</label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full bg-[#1c1c24] border border-white/10 rounded px-3 py-2.5 text-white focus:outline-none focus:border-[#cba04e]"
                    >
                      <option value="Under 25">Under 25 Guests</option>
                      <option value="25-50">25 - 50 Guests</option>
                      <option value="50-100">50 - 100 Guests</option>
                      <option value="100-250">100 - 250 Guests</option>
                      <option value="250-500">250 - 500 Guests</option>
                      <option value="500+">500+ Guests</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-1 font-medium">Service Region</label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#1c1c24] border border-white/10 rounded px-3 py-2.5 text-white focus:outline-none focus:border-[#cba04e]"
                    >
                      <option value="Washington DC">Washington DC</option>
                      <option value="Maryland">Maryland</option>
                      <option value="Northern Virginia">Northern Virginia</option>
                      <option value="Montgomery County">Montgomery County</option>
                      <option value="Loudoun County">Loudoun County</option>
                    </select>
                  </div>
                </div>

                {/* Cuisine Preferences */}
                <div>
                  <label className="block text-gray-300 mb-1.5 font-medium">Cuisine Interests</label>
                  <div className="flex flex-wrap gap-2">
                    {['Desi Food', 'Mediterranean & Kabob', 'Indo-Chinese', 'American & Italian', 'Dessert Bar', 'Mocktails'].map((c) => {
                      const selected = formData.cuisinePreferences.includes(c);
                      return (
                        <button
                          key={c}
                          type="button"
                          onClick={() => toggleCuisine(c)}
                          className={`px-2.5 py-1 rounded-full border text-[11px] transition-colors ${
                            selected
                              ? 'bg-[#cba04e] text-black border-[#cba04e] font-semibold'
                              : 'bg-[#1c1c24] text-gray-300 border-white/10 hover:border-[#cba04e]/50'
                          }`}
                        >
                          {c}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-1 font-medium">Special Requests & Date Info</label>
                  <textarea
                    rows={2}
                    placeholder="Tentative date, dietary requirements (100% Halal, vegetarian, nut allergies), venue..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#1c1c24] border border-white/10 rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#cba04e]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-sm bg-[#cba04e] hover:bg-[#dfba73] text-black font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#cba04e]/20"
                  >
                    <span>SUBMIT QUOTE REQUEST</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
