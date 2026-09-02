import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Phone, ArrowRight, ChevronRight, CheckCircle2, Utensils } from 'lucide-react';

interface SetMenuPageProps {
  onOpenQuote: (selectedMenuSummary?: string) => void;
}

// Static Set Menu Data embedded directly in the page as requested
interface SetMenuData {
  id: string;
  menuNumber: number;
  title: string;
  badge: string;
  bgImage: string;
  appetizersTitle: string;
  appetizers: string[];
  mainCourseTitle: string;
  mainCourses: string[];
  dessertTitle: string;
  desserts: string[];
  optionalUpgrades: string[];
}

const SET_MENUS: SetMenuData[] = [
  {
    id: 'set-menu-1',
    menuNumber: 1,
    title: 'Set Menu #1',
    badge: 'HALAL',
    bgImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    appetizersTitle: 'APPETIZERS (3)',
    appetizers: [
      'Hakka Noodles With Chicken',
      'Chaat Papri Served With Tamarind And Mint Sauce',
      'Veggie Singara Served With Tamarind Sauce',
      'Live Station Option Available'
    ],
    mainCourseTitle: 'MAIN COURSE (8)',
    mainCourses: [
      'Chocoberry Fresh Salad',
      'Traditional Raita',
      'Garlic Butter Naan',
      'Pulao Rice',
      'Greek Roasted Vegetables',
      'Kabuli Chana',
      'Beef Rezala',
      'Curry Chicken'
    ],
    dessertTitle: 'DESSERT (3)',
    desserts: [
      'Fresh Seasonal Fruit Platter',
      'Persian Rice Pudding',
      'Brownie And Cookie Platter'
    ],
    optionalUpgrades: [
      'Live taco station with chicken, fish, and veggie options',
      'Luxury dessert bar with expanded dessert selections and décor',
      'Texas-style BBQ chicken station served with assorted rolls',
      'Samosa chaat live station with server',
      'Lollipop chicken as an individual item or staffed live station'
    ]
  },
  {
    id: 'set-menu-2',
    menuNumber: 2,
    title: 'Set Menu #2',
    badge: 'HALAL',
    bgImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=80',
    appetizersTitle: 'APPETIZERS (4)',
    appetizers: [
      'Creamy Alfredo Penne Pasta With Chicken',
      'Chaat Papri Served With Tamarind And Mint Sauce',
      'Choice of Princess Salad Or Chocoberry Garden Salad',
      'Veggie Singara Served With Tamarind Sauce',
      'Live Station Option Available'
    ],
    mainCourseTitle: 'MAIN COURSE (8)',
    mainCourses: [
      'Mediterranean Fresh Salad',
      'Traditional Raita',
      'Garlic Butter Naan',
      'Motor Pulao Rice',
      'Greek Roasted Vegetables',
      'Kabuli Chana',
      'Beef Rezala',
      'Chicken Karahi'
    ],
    dessertTitle: 'DESSERT (3)',
    desserts: [
      'Fresh Seasonal Fruit Platter',
      'Halwa Platter',
      'Persian Rice Pudding'
    ],
    optionalUpgrades: [
      'Live taco station with chicken, fish, and veggie options',
      'Luxury dessert bar with expanded dessert selections and décor',
      'Texas-style BBQ chicken station served with assorted rolls',
      'Samosa chaat live station with server',
      'Lollipop chicken as an individual item or staffed live station'
    ]
  },
  {
    id: 'set-menu-3',
    menuNumber: 3,
    title: 'Set Menu #3',
    badge: 'HALAL',
    bgImage: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80',
    appetizersTitle: 'APPETIZERS (3)',
    appetizers: [
      'Choice of Mediterranean Penne Pasta or Fettuccine Alfredo With Chicken',
      'Chaat Papri Served With Tamarind And Mint Sauce',
      'Choice of Waldorf Salad Or Chocoberry Garden Salad',
      'Veggie Singara Served With Tamarind And Mint Chutney',
      'Philly Steak Sliders',
      'Live Station Options Available'
    ],
    mainCourseTitle: 'MAIN COURSE (8)',
    mainCourses: [
      'Choice of Dahi Salad or Mediterranean Salad',
      'Roasted Tomato Chutney',
      'Garlic Butter Naan',
      'Cucumber Raita',
      'Motor Pulao',
      'Persian Lime Rice',
      'Kabuli Chana Masala',
      'Choice of Greek Roasted Vegetables or Motor-Alu Dom',
      'Choice of Beef Kala Bhuna or Beef Rezala',
      'Choice of Chicken Tikka Masala or Medium-Spicy Karahi Chicken',
      'Lamb Kofta Korma'
    ],
    dessertTitle: 'DESSERT (3)',
    desserts: [
      'Fresh Fruit And Cheese Platter',
      'Persian Saffron Rice Pudding',
      'Halwa Platter Feat. Tosha, Habshi, Badam Halwa',
      'Assorted Parfaits With Dubai, Biscoff, Or Nutella Flavors'
    ],
    optionalUpgrades: [
      'Live taco station with chicken, fish, and veggie options',
      'Luxury dessert bar with expanded dessert selections and décor',
      'Texas-style BBQ chicken station served with assorted rolls',
      'Samosa chaat live station with server',
      'Lollipop chicken as an individual item or staffed live station'
    ]
  }
];

export default function SetMenuPage({ onOpenQuote }: SetMenuPageProps) {
  return (
    <div id="set-menu-page" className="min-h-screen bg-white text-[#1a1a1e] pt-24 sm:pt-28 pb-0">
      {/* Container for Top 3 Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#cba04e]/10 border border-[#cba04e]/30 text-[#9c7526] text-[11px] font-semibold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#cba04e]" />
            <span>CURATED TASTING PACKAGES</span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-[#1a1a1e] tracking-tight mb-4 leading-tight">
            Our Set Menus
          </h1>

          <p className="text-[#555350] text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Carefully orchestrated multi-course set menus featuring our signature appetizers, royal main courses, handcrafted desserts, and live chef station upgrades.
          </p>
        </div>

        {/* 3 Overlapping Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10 items-stretch">
          {SET_MENUS.map((menu, idx) => (
            <motion.div
              key={menu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(107,15,26,0.3)] transition-all duration-500 flex flex-col justify-between"
            >
              {/* Background Food Image Layer */}
              <div className="absolute inset-0 z-0">
                <img
                  src={menu.bgImage}
                  alt={menu.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Overlapping Deep Crimson Card with Gold Dashed Border */}
              <div className="relative z-10 m-3 sm:m-4 flex-1 flex flex-col justify-between rounded-xl bg-[#6b0f1a]/94 backdrop-blur-md shadow-2xl border border-[#dfba73]/40">
                {/* Inner Dashed Gold Border Container */}
                <div className="m-2 sm:m-3 p-4 sm:p-5 border border-dashed border-[#dfba73]/70 rounded-lg flex-1 flex flex-col justify-between text-white">
                  
                  {/* Top Header: Title + Halal Seal */}
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-[#dfba73]/30 pb-3 mb-4">
                      <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-wide text-[#fdf8ee]">
                        {menu.title}
                      </h2>

                      {/* Halal Green Round Seal */}
                      <div className="w-10 h-10 rounded-full bg-emerald-700 border-2 border-white flex flex-col items-center justify-center text-white shrink-0 shadow-md">
                        <span className="text-[8px] font-bold leading-none">حلال</span>
                        <span className="text-[7px] font-black tracking-tighter leading-none mt-0.5">HALAL</span>
                      </div>
                    </div>

                    {/* Section 1: Appetizers */}
                    <div className="mb-5 text-center">
                      <h3 className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#dfba73] uppercase mb-2">
                        {menu.appetizersTitle}
                      </h3>
                      <ul className="space-y-1 text-center">
                        {menu.appetizers.map((item, i) => (
                          <li
                            key={i}
                            className={`text-[11px] sm:text-xs leading-snug ${
                              item.includes('Live Station')
                                ? 'italic text-[#dfba73] font-medium pt-0.5'
                                : 'text-gray-100 font-light'
                            }`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Section 2: Main Course */}
                    <div className="mb-5 text-center">
                      <h3 className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#dfba73] uppercase mb-2">
                        {menu.mainCourseTitle}
                      </h3>
                      <ul className="space-y-1 text-center">
                        {menu.mainCourses.map((item, i) => (
                          <li key={i} className="text-[11px] sm:text-xs text-gray-100 font-light leading-snug">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Section 3: Dessert */}
                    <div className="mb-5 text-center">
                      <h3 className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#dfba73] uppercase mb-2">
                        {menu.dessertTitle}
                      </h3>
                      <ul className="space-y-1 text-center">
                        {menu.desserts.map((item, i) => (
                          <li key={i} className="text-[11px] sm:text-xs text-gray-100 font-light leading-snug">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Section 4: Optional Upgrades */}
                    <div className="mb-6 pt-3 border-t border-[#dfba73]/30 text-center">
                      <h3 className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#dfba73] uppercase mb-2">
                        OPTIONAL UPGRADES
                      </h3>
                      <ul className="space-y-1.5 text-left max-w-xs mx-auto">
                        {menu.optionalUpgrades.map((item, i) => (
                          <li key={i} className="text-[10px] sm:text-[11px] text-gray-200 font-light leading-snug flex items-start gap-1.5">
                            <span className="text-[#dfba73] font-bold mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Ornate Gold Footer Divider & Learn More Button */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between gap-2 mb-3 opacity-75">
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#dfba73] to-transparent" />
                      <div className="flex items-center gap-1.5 text-[#dfba73]">
                        <span className="text-[10px]">❖</span>
                        <Utensils className="w-3.5 h-3.5" />
                        <span className="text-[10px]">❖</span>
                      </div>
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#dfba73] to-transparent" />
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={() => onOpenQuote(`${menu.title} Catering Package`)}
                        className="group/btn inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-[#801320] hover:bg-[#dfba73] text-white hover:text-black border border-[#dfba73]/80 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
                      >
                        <span className="text-[#dfba73] group-hover/btn:text-black font-black">»</span>
                        <span>LEARN MORE</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note / Callout Section matching the screenshot */}
        <div className="max-w-3xl mx-auto mt-16 text-center text-[#555350] space-y-3 px-4">
          <p className="text-sm sm:text-base leading-relaxed">
            <strong className="text-[#1a1a1e] font-semibold">Please note:</strong> Servers are available at an additional cost. We also offer customized menus tailored to your specific events and programs.{' '}
            <strong className="text-[#1a1a1e] font-semibold italic">
              For a free quote and to discuss your needs, please call us directly at{' '}
              <a
                href="tel:571-237-2592"
                className="text-[#9c7526] hover:underline font-bold not-italic"
              >
                571-237-2592
              </a>{' '}
              or{' '}
              <a
                href="tel:716-545-0941"
                className="text-[#9c7526] hover:underline font-bold not-italic"
              >
                (716) 545-0941
              </a>.
            </strong>
          </p>

          <p className="text-xs sm:text-sm italic text-gray-500 font-light">
            * Some restrictions may apply depending on event arrangements.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => onOpenQuote('Set Menu Custom Catering')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#dfba73] via-[#cba04e] to-[#b88d3d] text-[#0c0c0e] font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-[#cba04e]/20 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
            >
              <span>REQUEST CUSTOM SET MENU</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
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
              Bespoke Buffet, Sliders & Canapés Stations
            </p>
          </div>
          <span className="text-[11px] text-[#dfba73] font-bold uppercase tracking-widest hidden sm:block">
            Chocoberry Events & Catering
          </span>
        </div>
      </div>
    </div>
  );
}
