import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Cake,
  Search,
  Check,
  Plus,
  ArrowRight,
  Phone,
  Eye,
  CheckCircle2,
  X,
  Maximize2,
  RotateCcw,
  Heart
} from 'lucide-react';

interface DessertBarPageProps {
  onOpenQuote: (selectedMenuSummary?: string) => void;
}

interface DessertItem {
  id: string;
  name: string;
  tag?: string;
  isBestseller?: boolean;
}

interface DessertShowcase {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  aspect: string;
}

// 26 exact dessert items from the screenshot
const DESSERT_ITEMS: DessertItem[] = [
  { id: 'd-1', name: 'Dubai Chocolate Parfait', tag: 'Trending', isBestseller: true },
  { id: 'd-2', name: 'Tiramisu Parfait', tag: 'Classic', isBestseller: true },
  { id: 'd-3', name: 'Strawberry Short Cake Parfait', tag: 'Fresh Fruit' },
  { id: 'd-4', name: 'Chocolate Mousse Parfait', tag: 'Rich Cocoa' },
  { id: 'd-5', name: 'Fudge Brownie Parfait', tag: 'Decadent' },
  { id: 'd-6', name: 'Nutella Parfait', tag: 'Hazelnut', isBestseller: true },
  { id: 'd-7', name: 'Belgium Biscoff Parfait', tag: 'Lotus Biscoff', isBestseller: true },
  { id: 'd-8', name: 'Belgium Biscoff Donuts', tag: 'Artisan Bakery' },
  { id: 'd-9', name: 'Italian Cannoli', tag: 'Handmade' },
  { id: 'd-10', name: 'Desi Sweets Tray', tag: 'Traditional', isBestseller: true },
  { id: 'd-11', name: 'Pakistani Gajar Halwa', tag: 'Warm & Rich' },
  { id: 'd-12', name: 'Sana Platter', tag: 'Specialty' },
  { id: 'd-13', name: 'Habshi Halwa', tag: 'Heritage' },
  { id: 'd-14', name: 'Tosha Halwa', tag: 'Signature' },
  { id: 'd-15', name: 'Chocolate Covered Strawberry', tag: 'Gourmet Dip', isBestseller: true },
  { id: 'd-16', name: 'Assorted Brownie Platter', tag: 'Fresh Baked' },
  { id: 'd-17', name: 'Baklava Platter', tag: 'Pistachio Honey', isBestseller: true },
  { id: 'd-18', name: 'Banana Pudding', tag: 'Creamy Classic' },
  { id: 'd-19', name: 'Persian Rice Pudding', tag: 'Cardamom & Rose' },
  { id: 'd-20', name: 'Mango Mousse Parfait', tag: 'Tropical' },
  { id: 'd-21', name: 'Arabian Kunefe Platter', tag: 'Warm Sweet Cheese', isBestseller: true },
  { id: 'd-22', name: 'French Macaroons', tag: 'Artisan Flavors' },
  { id: 'd-23', name: 'Portuguese Churros', tag: 'Cinnamon Sugar' },
  { id: 'd-24', name: 'Cake Pop', tag: 'Bite Size' },
  { id: 'd-25', name: 'Fresh Fruits Platter', tag: 'Organic Selection' },
  { id: 'd-26', name: 'Carvel Ice Cream Bar', tag: 'Live Scoop Station', isBestseller: true }
];

// Visual showcases matching the 4 photo exhibits in the user screenshot
const DESSERT_SHOWCASES: DessertShowcase[] = [
  {
    id: 'showcase-1',
    title: 'Wedding Dessert Bar',
    subtitle: 'Opulent Multi-Tiered Confectionery Stage & Crystal Setup',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=85',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 'showcase-2',
    title: 'Vanilla Cream Fruit Tart',
    subtitle: 'Handmade Phyllo Cups with Fresh Raspberries, Blueberries & Mint',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 'showcase-3',
    title: 'Wedding Dessert Bar at Gaylord National Resort and Convention Center.',
    subtitle: 'Grand Saffron & Halwa Tiered Tower with Ambient Illumination',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=85',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 'showcase-4',
    title: 'Wedding Dessert Bar at Lansdowne Resort.',
    subtitle: 'Bespoke Golden Chafing Presentation & Candlelit Velvet Stations',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    aspect: 'aspect-[4/5]'
  }
];

export default function DessertBarPage({ onOpenQuote }: DessertBarPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDesserts, setSelectedDesserts] = useState<string[]>([]);
  const [previewImage, setPreviewImage] = useState<DessertShowcase | null>(null);

  const toggleDessertSelection = (name: string) => {
    setSelectedDesserts((prev) =>
      prev.includes(name) ? prev.filter((d) => d !== name) : [...prev, name]
    );
  };

  const filteredDesserts = DESSERT_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRequestQuote = () => {
    if (selectedDesserts.length > 0) {
      onOpenQuote(`Custom Dessert Bar (${selectedDesserts.length} items): ${selectedDesserts.join(', ')}`);
    } else {
      onOpenQuote('Luxury Dessert Bar Package');
    }
  };

  return (
    <div id="dessert-bar-page" className="min-h-screen bg-[#faf8f5] text-[#1a1a1e] pt-24 sm:pt-28 pb-0">
      
      {/* Top Title & Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#cba04e]/10 border border-[#cba04e]/30 text-[#9c7526] text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
            <Cake className="w-3.5 h-3.5 text-[#cba04e]" />
            <span>LUXURY CONFECTIONERY & SWEET STATIONS</span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1a1a1e] tracking-tight mb-4 leading-tight">
            Dessert Bar
          </h1>

          <p className="text-[#555350] text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto mb-6">
            From viral Dubai Chocolate Parfaits and artisanal French Macaroons to authentic South Asian Halwa platters, our bespoke dessert tables are styled with crystal displays, fairy lights, and live stations.
          </p>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 py-3 px-6 rounded-2xl bg-white border border-[#e8e2d7] shadow-sm max-w-xl mx-auto text-xs text-[#555350]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#cba04e]" />
              <span className="font-semibold text-[#1a1a1e]">26 Artisan Selections</span>
            </div>
            <div className="text-gray-300">•</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#cba04e]" />
              <span className="font-semibold text-[#1a1a1e]">Custom Decor Included</span>
            </div>
            <div className="text-gray-300">•</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="font-semibold text-[#1a1a1e]">100% Halal Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Selection Action Pill */}
      <AnimatePresence>
        {selectedDesserts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-8 z-40 max-w-lg bg-[#14141c] text-white p-4 rounded-2xl shadow-2xl border border-[#cba04e]/50 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#dfba73] to-[#cba04e] text-black font-bold flex items-center justify-center shrink-0 shadow-md">
                {selectedDesserts.length}
              </div>
              <div>
                <p className="text-xs font-bold text-white">Custom Dessert Selection</p>
                <p className="text-[11px] text-[#dfba73] line-clamp-1">
                  {selectedDesserts.join(', ')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setSelectedDesserts([])}
                className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 text-xs transition-colors"
                title="Clear selection"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={handleRequestQuote}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#cba04e] hover:bg-[#dfba73] text-[#0c0c0e] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main 2-Column Split Layout matching the screenshot (Left Menu Board, Right 4 Photo Showcases) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Modernized Dessert Bar Menu Board (lg:col-span-5) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-3xl bg-white border border-[#e8e2d7] hover:border-[#cba04e] shadow-xl overflow-hidden transition-all duration-300">
              
              {/* Terracotta/Gold Luxury Header */}
              <div className="p-5 sm:p-6 bg-gradient-to-r from-[#b35e26] via-[#cb6f33] to-[#9e4c19] text-white relative shadow-inner overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-md">
                      <Cake className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="font-serif-luxury text-2xl font-bold tracking-wide text-white">
                        Dessert Bar
                      </h2>
                      <p className="text-white/80 text-[11px] font-light">
                        26 Handcrafted Confectionery Items
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-black/25 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold tracking-wider uppercase">
                    All Halal
                  </span>
                </div>
              </div>

              {/* Search Inside Menu */}
              <div className="p-3 bg-[#faf8f5] border-b border-[#f0eae0]">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Filter desserts (e.g. Parfait, Halwa, Biscoff)..."
                    className="w-full pl-9 pr-8 py-2 rounded-xl bg-white border border-[#e8e2d7] focus:border-[#cba04e] outline-none text-xs text-[#1a1a1e] placeholder-gray-400"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 hover:text-gray-700 bg-gray-100 px-1.5 py-0.5 rounded"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Alternating Sleek Row List (matching the alternating stripes in the screenshot with modern refinement) */}
              <div className="divide-y divide-[#f0eae0] max-h-[640px] overflow-y-auto no-scrollbar">
                {filteredDesserts.map((item, idx) => {
                  const isSelected = selectedDesserts.includes(item.name);
                  const isEven = idx % 2 === 0;

                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleDessertSelection(item.name)}
                      className={`group flex items-center justify-between p-3.5 sm:px-5 transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#faf3e3] border-l-4 border-l-[#cba04e]'
                          : isEven
                          ? 'bg-white hover:bg-[#faf7f2]'
                          : 'bg-[#fbf9f6] hover:bg-[#faf7f2]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-2">
                        {/* Bullet / Check Icon */}
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] transition-all ${
                            isSelected
                              ? 'bg-[#cba04e] text-black font-bold shadow-sm'
                              : 'bg-[#ede5d8] text-[#8c7853] group-hover:bg-[#cba04e]/30'
                          }`}
                        >
                          {isSelected ? (
                            <Check className="w-3 h-3 stroke-[3]" />
                          ) : (
                            <span className="text-[9px] font-semibold">{idx + 1}</span>
                          )}
                        </div>

                        {/* Dessert Title */}
                        <div>
                          <span
                            className={`text-xs sm:text-[13px] block leading-snug truncate ${
                              isSelected
                                ? 'font-bold text-[#1a1a1e]'
                                : 'font-medium text-[#2d2d32] group-hover:text-[#9c7526]'
                            }`}
                          >
                            {item.name}
                          </span>
                        </div>
                      </div>

                      {/* Right Tag / Plus toggle */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        {item.tag && (
                          <span
                            className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${
                              item.isBestseller
                                ? 'bg-amber-50 text-amber-900 border-amber-200'
                                : 'bg-gray-50 text-gray-600 border-gray-200'
                            }`}
                          >
                            {item.tag}
                          </span>
                        )}

                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                            isSelected
                              ? 'bg-[#cba04e] text-black'
                              : 'opacity-0 group-hover:opacity-100 bg-gray-100 text-gray-600 hover:bg-[#cba04e] hover:text-black'
                          }`}
                        >
                          {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Quick Inquiry Footer */}
              <div className="p-4 bg-[#faf8f5] border-t border-[#f0eae0] flex items-center justify-between gap-3">
                <span className="text-[11px] text-[#7a7672]">
                  {selectedDesserts.length > 0
                    ? `${selectedDesserts.length} desserts selected`
                    : 'Click any dessert to build custom platter'}
                </span>

                <button
                  onClick={handleRequestQuote}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#dfba73] to-[#cba04e] text-[#0c0c0e] font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center gap-1.5"
                >
                  <span>Inquire Bar</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: 4 High-Resolution Dessert Showcases with Labels (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-12">
            
            {DESSERT_SHOWCASES.map((showcase, index) => (
              <motion.div
                key={showcase.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center"
              >
                {/* Photo Frame with subtle luxury gold outline & hover zoom */}
                <div
                  onClick={() => setPreviewImage(showcase)}
                  className="w-full relative overflow-hidden rounded-3xl bg-gray-900 shadow-xl border border-[#e8e2d7] group-hover:border-[#cba04e] cursor-pointer transition-all duration-500"
                >
                  <div className="relative w-full h-[420px] sm:h-[520px] overflow-hidden">
                    <img
                      src={showcase.image}
                      alt={showcase.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Gradient Overlay for subtle depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70 group-hover:opacity-90 transition-opacity" />

                    {/* Top Watermark Badge for specific venue branding matching screenshot */}
                    {showcase.id === 'showcase-4' && (
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none">
                        <div className="px-5 py-2 rounded-2xl bg-black/50 backdrop-blur-md border border-white/20 text-white shadow-2xl">
                          <p className="font-serif-luxury text-sm font-semibold tracking-widest uppercase text-[#dfba73]">
                            👑 Chocoberry Events
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Floating Zoom Action Button */}
                    <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-[#1a1a1e] flex items-center justify-center shadow-lg transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </div>

                    {/* Venue / Setup Tag */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold tracking-wider uppercase">
                        Signature Setup
                      </span>
                    </div>
                  </div>
                </div>

                {/* Refined Label Beneath the Photo (Exact text from user's screenshot) */}
                <div className="mt-4 text-center max-w-xl px-4">
                  <h3 className="font-serif-luxury text-lg sm:text-xl font-medium text-[#1a1a1e] tracking-tight">
                    {showcase.title}
                  </h3>
                  {showcase.subtitle && (
                    <p className="text-xs sm:text-[13px] text-[#7a7672] font-light mt-1">
                      {showcase.subtitle}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </div>

      {/* Note & Direct Callout Banner */}
      <div className="max-w-4xl mx-auto mb-16 text-center text-[#555350] space-y-3 px-4">
        <p className="text-sm sm:text-base leading-relaxed">
          <strong className="text-[#1a1a1e] font-semibold">Custom Confectionery Styling:</strong> We provide full dessert tables complete with crystal stands, floral risers, ambient LED candles, customized favor boxes, and professional attendants.
        </p>

        <p className="text-xs sm:text-sm italic text-gray-500 font-light">
          For custom cake flavor combinations or themed dessert setups, contact our catering specialists directly.
        </p>

        <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:716-545-0941"
            className="px-6 py-3 rounded-xl bg-white hover:bg-[#faf5ec] text-[#1a1a1e] border border-[#e8e2d7] hover:border-[#cba04e] font-bold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#cba04e]" />
            <span>CALL (716) 545-0941</span>
          </a>

          <button
            onClick={() => onOpenQuote('Dessert Bar Complete Setup')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#dfba73] via-[#cba04e] to-[#b88d3d] text-[#0c0c0e] font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#cba04e]/20 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
          >
            <span>REQUEST DESSERT QUOTE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Full-Width Panoramic Bottom Food Showcase Image matching the screenshot */}
      <div className="w-full relative h-72 sm:h-96 lg:h-[480px] overflow-hidden bg-gray-900 border-t border-[#e8e2d7]">
        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=2000&q=85"
          alt="Gourmet Sliders, Appetizers & Catering Spread"
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 max-w-7xl mx-auto flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#dfba73] animate-pulse" />
            <p className="text-xs sm:text-sm font-light tracking-wider text-gray-200 uppercase">
              Bespoke Dessert Buffets, Sliders & Canapés Stations
            </p>
          </div>
          <span className="text-[11px] text-[#dfba73] font-bold uppercase tracking-widest hidden sm:block">
            Chocoberry Events & Catering
          </span>
        </div>
      </div>

      {/* Fullscreen Lightbox for Dessert Showcase Photos */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-xl"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full flex flex-col items-center"
            >
              <img
                src={previewImage.image}
                alt={previewImage.title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl ring-1 ring-white/20"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="font-serif-luxury text-xl font-medium">{previewImage.title}</h3>
                {previewImage.subtitle && (
                  <p className="text-xs text-gray-300 font-light mt-0.5">{previewImage.subtitle}</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
