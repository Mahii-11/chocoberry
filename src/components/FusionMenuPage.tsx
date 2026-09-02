import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Search,
  Check,
  Plus,
  Phone,
  ArrowRight,
  Flame,
  Utensils,
  Soup,
  Pizza,
  Cake,
  Wine,
  Layers,
  Salad,
  RotateCcw,
  CheckCircle2,
  Share2
} from 'lucide-react';
import { FUSION_MENU_CATEGORIES, FusionCategory } from '../data/fusionMenuData';

interface FusionMenuPageProps {
  onOpenQuote: (selectedMenuSummary?: string) => void;
}

export default function FusionMenuPage({ onOpenQuote }: FusionMenuPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>('all');
  const [selectedDishes, setSelectedDishes] = useState<string[]>([]);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  // Helper for dynamic category icons
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wine':
        return <Wine className="w-4 h-4 text-white" />;
      case 'Utensils':
        return <Utensils className="w-4 h-4 text-white" />;
      case 'Flame':
        return <Flame className="w-4 h-4 text-white" />;
      case 'Soup':
        return <Soup className="w-4 h-4 text-white" />;
      case 'Pizza':
        return <Pizza className="w-4 h-4 text-white" />;
      case 'Cake':
        return <Cake className="w-4 h-4 text-white" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-white" />;
      case 'Salad':
        return <Salad className="w-4 h-4 text-white" />;
      default:
        return <Sparkles className="w-4 h-4 text-white" />;
    }
  };

  // Helper to determine dietary tag
  const getDietaryTag = (dishName: string) => {
    const lower = dishName.toLowerCase();
    if (lower.includes('veggie') || lower.includes('chana') || lower.includes('paneer') || lower.includes('hummus')) {
      return { label: 'Veg', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
    }
    if (lower.includes('spicy') || lower.includes('ghost pepper') || lower.includes('chili') || lower.includes('shrimp boil')) {
      return { label: 'Spicy', color: 'bg-rose-50 text-rose-700 border-rose-200' };
    }
    if (lower.includes('shrimp') || lower.includes('fish')) {
      return { label: 'Seafood', color: 'bg-sky-50 text-sky-700 border-sky-200' };
    }
    if (lower.includes('biryani') || lower.includes('tehari') || lower.includes('polaw') || lower.includes('korma') || lower.includes('rezala')) {
      return { label: 'Signature', color: 'bg-amber-50 text-amber-800 border-amber-200' };
    }
    return null;
  };

  // Toggle dish in selected list
  const toggleDishSelection = (dishName: string) => {
    setSelectedDishes((prev) =>
      prev.includes(dishName) ? prev.filter((d) => d !== dishName) : [...prev, dishName]
    );
  };

  // Filtered categories based on search and selected tab
  const filteredCategories = useMemo(() => {
    let list = FUSION_MENU_CATEGORIES;

    if (selectedCategoryTab !== 'all') {
      list = list.filter((cat) => cat.id === selectedCategoryTab);
    }

    if (!searchQuery.trim()) {
      return list;
    }

    const q = searchQuery.toLowerCase().trim();
    return list
      .map((cat) => {
        const matchingItems = cat.items.filter((item) =>
          item.toLowerCase().includes(q)
        );
        const matchesCatTitle = cat.title.toLowerCase().includes(q);
        if (matchesCatTitle) {
          return cat;
        }
        if (matchingItems.length > 0) {
          return { ...cat, items: matchingItems };
        }
        return null;
      })
      .filter(Boolean) as FusionCategory[];
  }, [searchQuery, selectedCategoryTab]);

  const totalDishCount = useMemo(() => {
    return FUSION_MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  const handleRequestQuoteWithSelection = () => {
    if (selectedDishes.length > 0) {
      const summary = `Selected ${selectedDishes.length} Dishes: ${selectedDishes.join(', ')}`;
      onOpenQuote(summary);
    } else {
      onOpenQuote('Fusion Catering Menu Package');
    }
  };

  const handleShareMenu = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Fusion Catering Menu',
          text: 'Check out this full fusion catering menu featuring over 150+ gourmet selections!',
          url: window.location.href
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedSuccess(true);
      setTimeout(() => setCopiedSuccess(false), 2500);
    }
  };

  return (
    <div id="fusion-menu-page" className="min-h-screen bg-[#faf8f5] text-[#1a1a1e] pt-24 pb-20 sm:pt-28 sm:pb-28">
      {/* Top Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#cba04e]/10 border border-[#cba04e]/30 text-[#9c7526] text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#cba04e]" />
            <span>FULL FUSION CATERING PORTFOLIO</span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1a1a1e] tracking-tight mb-4 leading-tight">
            Our Fusion Menu
          </h1>

          <p className="text-[#555350] text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto mb-8">
            Explore our curated culinary collection spanning traditional Desi recipes, charcoal Mediterranean kabobs, Indo-Chinese fusion, American-Italian favorites, mocktail infusions, and artisan cakes.
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 py-3.5 px-6 rounded-2xl bg-white border border-[#e8e2d7] shadow-sm max-w-2xl mx-auto mb-8 text-xs text-[#555350]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#cba04e]" />
              <span className="font-semibold text-[#1a1a1e]">10 Unique Categories</span>
            </div>
            <div className="hidden sm:block text-gray-300">•</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#cba04e]" />
              <span className="font-semibold text-[#1a1a1e]">{totalDishCount}+ Gourmet Items</span>
            </div>
            <div className="hidden sm:block text-gray-300">•</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="font-semibold text-[#1a1a1e]">100% Halal Certified</span>
            </div>
          </div>

          {/* Search Bar & Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any dish (e.g. Biryani, Mojito, Wings, Sliders, Tacos, Cake)..."
                className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-white border border-[#e8e2d7] focus:border-[#cba04e] focus:ring-2 focus:ring-[#cba04e]/20 outline-none text-sm text-[#1a1a1e] placeholder-gray-400 shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-2 py-0.5 rounded-full"
                >
                  Clear
                </button>
              )}
            </div>

            <button
              onClick={handleShareMenu}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white hover:bg-[#faf5ec] border border-[#e8e2d7] hover:border-[#cba04e] text-[#1a1a1e] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all whitespace-nowrap"
              title="Share Menu"
            >
              <Share2 className="w-4 h-4 text-[#cba04e]" />
              <span>{copiedSuccess ? 'Link Copied!' : 'Share Menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sticky / Scrollable Category Filter Pills */}
      <div className="sticky top-20 z-30 bg-[#faf8f5]/95 backdrop-blur-md py-3 border-y border-[#ede7dd] mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setSelectedCategoryTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategoryTab === 'all'
                  ? 'bg-[#1a1a1e] text-[#dfba73] shadow-md scale-105'
                  : 'bg-white hover:bg-[#faf5ec] text-[#555350] border border-[#e8e2d7]'
              }`}
            >
              <span>All Categories</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/10 opacity-80">
                10
              </span>
            </button>

            {FUSION_MENU_CATEGORIES.map((cat) => {
              const active = selectedCategoryTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryTab(cat.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    active
                      ? 'bg-gradient-to-r from-[#dfba73] to-[#cba04e] text-[#0c0c0e] font-bold shadow-md scale-105'
                      : 'bg-white hover:bg-[#faf5ec] text-[#555350] border border-[#e8e2d7]'
                  }`}
                >
                  <span>{cat.title}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/5">
                    {cat.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Selected Dishes Bar (If user selected any dish) */}
      <AnimatePresence>
        {selectedDishes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-8 z-40 max-w-lg bg-[#14141c] text-white p-4 rounded-2xl shadow-2xl border border-[#cba04e]/50 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#dfba73] to-[#cba04e] text-black font-bold flex items-center justify-center shrink-0 shadow-md">
                {selectedDishes.length}
              </div>
              <div>
                <p className="text-xs font-bold text-white">Custom Event Menu Selection</p>
                <p className="text-[11px] text-[#dfba73] line-clamp-1">
                  {selectedDishes.join(', ')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setSelectedDishes([])}
                className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 text-xs transition-colors"
                title="Clear selection"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={handleRequestQuoteWithSelection}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#cba04e] hover:bg-[#dfba73] text-[#0c0c0e] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The 10 Luxury Menu Cards in Responsive Multi-Column Board */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#e8e2d7] p-8 max-w-lg mx-auto shadow-sm">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="font-serif-luxury text-xl font-bold text-[#1a1a1e] mb-1">
              No Dishes Found
            </h3>
            <p className="text-sm text-[#555350] mb-4">
              We couldn't find any dishes matching "{searchQuery}". Try searching for another item or clear your search filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategoryTab('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#cba04e] text-black font-semibold text-xs uppercase tracking-wider shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 items-start">
            {filteredCategories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (idx % 6) * 0.06 }}
                className="group rounded-3xl bg-white border border-[#e8e2d7] hover:border-[#cba04e] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header Bar with Luxury Terracotta/Copper-Gold Style */}
                  <div className="relative p-5 sm:p-6 bg-gradient-to-r from-[#a85220] via-[#c2672b] to-[#9c4618] text-white shadow-inner overflow-hidden">
                    {/* Subtle patterned overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-md">
                          {getCategoryIcon(cat.iconName)}
                        </div>
                        <div>
                          <h2 className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                            {cat.title}
                          </h2>
                          <p className="text-white/80 text-[11px] font-light mt-0.5 line-clamp-1">
                            {cat.subtitle}
                          </p>
                        </div>
                      </div>

                      <span className="px-2.5 py-1 rounded-full bg-black/25 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold tracking-wider uppercase shrink-0">
                        {cat.items.length} Items
                      </span>
                    </div>
                  </div>

                  {/* High Quality Category Cover Preview Banner */}
                  <div className="relative h-28 w-full overflow-hidden bg-gray-100 border-b border-[#f0eae0]">
                    <img
                      src={cat.coverImage}
                      alt={cat.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#9c7526] bg-[#faf5ec]/90 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-[#e8ddcb]">
                        Handcrafted Fresh Daily
                      </span>
                    </div>
                  </div>

                  {/* Dishes Itemized List */}
                  <div className="p-3 sm:p-4 space-y-1.5 max-h-[460px] overflow-y-auto no-scrollbar">
                    {cat.items.map((dish, dIdx) => {
                      const isSelected = selectedDishes.includes(dish);
                      const tag = getDietaryTag(dish);

                      return (
                        <div
                          key={dIdx}
                          onClick={() => toggleDishSelection(dish)}
                          className={`group/item flex items-center justify-between p-2.5 sm:p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'bg-[#faf3e3] border-[#cba04e] shadow-sm'
                              : 'bg-white hover:bg-[#faf8f5] border-[#f0eae0] hover:border-[#cba04e]/50'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0 pr-2">
                            {/* Checkmark or Index circle */}
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold transition-all ${
                                isSelected
                                  ? 'bg-[#cba04e] text-black'
                                  : 'bg-[#f4efe6] text-[#8c7853] group-hover/item:bg-[#cba04e]/20 group-hover/item:text-[#8c7853]'
                              }`}
                            >
                              {isSelected ? (
                                <Check className="w-3 h-3 stroke-[3]" />
                              ) : (
                                <span className="text-[9px]">{dIdx + 1}</span>
                              )}
                            </div>

                            {/* Dish Name */}
                            <span
                              className={`text-xs sm:text-[13px] leading-snug truncate ${
                                isSelected
                                  ? 'font-bold text-[#1a1a1e]'
                                  : 'font-normal text-[#2d2d32] group-hover/item:text-[#9c7526]'
                              }`}
                            >
                              {dish}
                            </span>
                          </div>

                          {/* Right Side: Dietary tag & Quick Add Button */}
                          <div className="flex items-center gap-1.5 shrink-0">
                            {tag && (
                              <span
                                className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${tag.color}`}
                              >
                                {tag.label}
                              </span>
                            )}

                            <div
                              className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                                isSelected
                                  ? 'bg-[#cba04e] text-black'
                                  : 'opacity-0 group-hover/item:opacity-100 bg-gray-100 text-gray-600 hover:bg-[#cba04e] hover:text-black'
                              }`}
                              title={isSelected ? 'Remove from selection' : 'Add to selection'}
                            >
                              {isSelected ? (
                                <Check className="w-3.5 h-3.5" />
                              ) : (
                                <Plus className="w-3.5 h-3.5" />
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 pt-2 border-t border-[#f0eae0] bg-[#faf8f5]/50 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-[#7a7672]">
                    {cat.items.length} dishes in this category
                  </span>

                  <button
                    onClick={() => onOpenQuote(`${cat.title} Catering Package`)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#faf5ec] hover:bg-[#cba04e] text-[#8d671c] hover:text-[#0c0c0e] font-semibold text-[11px] uppercase tracking-wider border border-[#e8ddcb] hover:border-transparent transition-all flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Full-Width Custom Menu CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0f0f13] border border-[#cba04e]/30 shadow-2xl relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#cba04e]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#cba04e]/10 border border-[#cba04e]/30 text-[#dfba73] text-[10px] font-semibold uppercase tracking-[0.2em] mb-4">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#cba04e]" />
              <span>CUSTOM TASTINGS & BESPOKE COMBINATIONS</span>
            </div>

            <h2 className="font-serif-luxury text-2xl sm:text-4xl font-normal text-white mb-3">
              Want a Tailored Multi-Course Tasting Menu?
            </h2>

            <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
              Our executive chefs can combine any of the 10 categories above into custom packages for weddings, Gaaye Holud ceremonies, corporate summits, and intimate private dinners.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:716-545-0941"
                className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#dfba73] via-[#cba04e] to-[#b88d3d] text-[#0c0c0e] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] shadow-lg shadow-[#cba04e]/20 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5"
              >
                <Phone className="w-4 h-4 transition-transform group-hover:rotate-12 duration-300" />
                <span>CALL: (716) 545-0941</span>
              </a>

              <button
                onClick={() => onOpenQuote('Custom Tailored Fusion Menu')}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-[#cba04e]/60 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300"
              >
                REQUEST PROPOSAL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
