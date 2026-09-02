export interface MasonryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
  aspectRatio?: 'tall' | 'square' | 'wide' | 'portrait' | 'ultra-tall';
}

export const MASONRY_GALLERY_IMAGES: MasonryImage[] = [
  // 1. Royal Hyderabadi Dum Biryani & Rice Display
  {
    id: "img-01",
    src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=85",
    alt: "Gourmet Catering Food Display",
    category: "Catering",
    aspectRatio: "tall"
  },
  // 2. Luxury Multi-Tier Floral Wedding Cake
  {
    id: "img-02",
    src: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=1000&q=85",
    alt: "Artisan Wedding Cake",
    category: "Cakes & Desserts",
    aspectRatio: "portrait"
  },
  // 3. Grand Banquet Wedding Hall & Table Setting
  {
    id: "img-03",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    alt: "Luxury Wedding Venue Setup",
    category: "Weddings",
    aspectRatio: "wide"
  },
  // 4. Artisanal French Macaron Tower & Pastries
  {
    id: "img-04",
    src: "https://images.unsplash.com/photo-1569864321390-349f257a3e74?auto=format&fit=crop&w=1000&q=85",
    alt: "Dessert Bar Pastries",
    category: "Cakes & Desserts",
    aspectRatio: "square"
  },
  // 5. Mesquite Charcoal BBQ & Grilled Skewers
  {
    id: "img-05",
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85",
    alt: "Live Grill & Kebab Catering",
    category: "Catering",
    aspectRatio: "portrait"
  },
  // 6. Smoked Botanical Mocktail & Garnish
  {
    id: "img-06",
    src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=85",
    alt: "Signature Beverage & Mocktail Bar",
    category: "Beverages",
    aspectRatio: "tall"
  },
  // 7. Opulent Floral Centerpiece & Candlelit Dinner
  {
    id: "img-07",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
    alt: "Event Table Decor & Ambient Lighting",
    category: "Decor & Setup",
    aspectRatio: "wide"
  },
  // 8. Chocolate Drizzled Berry Dessert Cups
  {
    id: "img-08",
    src: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=85",
    alt: "Dessert Cups & Mousse Shooters",
    category: "Cakes & Desserts",
    aspectRatio: "portrait"
  },
  // 9. Deluxe Gourmet Platter & Appetizers
  {
    id: "img-09",
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
    alt: "Artisan Plated Dining",
    category: "Catering",
    aspectRatio: "square"
  },
  // 10. Golden Rustic Outdoor Celebration
  {
    id: "img-10",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
    alt: "Outdoor Evening Celebration",
    category: "Weddings",
    aspectRatio: "tall"
  },
  // 11. White Rose & Gold Pearl Tiered Cake
  {
    id: "img-11",
    src: "https://images.unsplash.com/photo-1525257831700-18389b84b2ec?auto=format&fit=crop&w=1000&q=85",
    alt: "Bespoke Cake Art",
    category: "Cakes & Desserts",
    aspectRatio: "ultra-tall"
  },
  // 12. Elegant Party Grazing & Charcuterie Table
  {
    id: "img-12",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=85",
    alt: "Party Grazing Table",
    category: "Decor & Setup",
    aspectRatio: "wide"
  },
  // 13. Saffron & Cardamom Exotic Dessert Platter
  {
    id: "img-13",
    src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1000&q=85",
    alt: "Artisan Sweet Table Display",
    category: "Cakes & Desserts",
    aspectRatio: "portrait"
  },
  // 14. Fresh Fruit Cascade & Sparkling Mocktails
  {
    id: "img-14",
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=85",
    alt: "Fresh Fruit Display & Event Styling",
    category: "Beverages",
    aspectRatio: "square"
  },
  // 15. Fine Dining Table Setting with Golden Cutlery
  {
    id: "img-15",
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1200&q=85",
    alt: "Luxury Table Setting",
    category: "Decor & Setup",
    aspectRatio: "tall"
  },
  // 16. Handcrafted Chocolate Truffles & Mini Tarts
  {
    id: "img-16",
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85",
    alt: "Artisanal Chocolate & Pastry",
    category: "Cakes & Desserts",
    aspectRatio: "portrait"
  },
  // 17. Sizzling Gourmet Skewers & Naan Presentation
  {
    id: "img-17",
    src: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=85",
    alt: "Savory Fusion Platter",
    category: "Catering",
    aspectRatio: "wide"
  },
  // 18. Romantic Candlelit Wedding Reception
  {
    id: "img-18",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85",
    alt: "Wedding Reception Atmosphere",
    category: "Weddings",
    aspectRatio: "ultra-tall"
  },
  // 19. Sparkling Berry Mocktail Flutes
  {
    id: "img-19",
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=85",
    alt: "Sparkling Mocktails",
    category: "Beverages",
    aspectRatio: "portrait"
  },
  // 20. Luxury Floral Stage & Fairy Lights
  {
    id: "img-20",
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1200&q=85",
    alt: "Stage Floral Installation",
    category: "Decor & Setup",
    aspectRatio: "tall"
  },
  // 21. Freshly Baked Tarts with Edible Flowers
  {
    id: "img-21",
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85",
    alt: "Floral Tartlets",
    category: "Cakes & Desserts",
    aspectRatio: "square"
  },
  // 22. Premium Halal Beef Roast & Herb Garnish
  {
    id: "img-22",
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
    alt: "Gourmet Meat Course",
    category: "Catering",
    aspectRatio: "portrait"
  },
  // 23. Elegant Glassware & Tabletop Arrangement
  {
    id: "img-23",
    src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=85",
    alt: "Glassware & Banquet Setup",
    category: "Decor & Setup",
    aspectRatio: "wide"
  },
  // 24. Red Velvet & Gold Leaf Specialty Cake
  {
    id: "img-24",
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
    alt: "Artisan Velvet Cake",
    category: "Cakes & Desserts",
    aspectRatio: "tall"
  },
  // 25. High-Tea Mini Canapés & Sliders
  {
    id: "img-25",
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=85",
    alt: "Gourmet Finger Foods",
    category: "Catering",
    aspectRatio: "portrait"
  },
  // 26. Citrus Infused Infusion Bar
  {
    id: "img-26",
    src: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1000&q=85",
    alt: "Artisan Infused Refreshments",
    category: "Beverages",
    aspectRatio: "square"
  },
  // 27. Fairy Lit Garden Canopy Dinner
  {
    id: "img-27",
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85",
    alt: "Garden Banquet Dining",
    category: "Weddings",
    aspectRatio: "wide"
  },
  // 28. Artisan Pistachio & Rose Eclairs
  {
    id: "img-28",
    src: "https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=1000&q=85",
    alt: "Gourmet Eclairs & Sweets",
    category: "Cakes & Desserts",
    aspectRatio: "ultra-tall"
  },
  // 29. Golden Buffet Chafing Dishes
  {
    id: "img-29",
    src: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=1200&q=85",
    alt: "Grand Buffet Display",
    category: "Catering",
    aspectRatio: "portrait"
  },
  // 30. Minimalist Modern Wedding Cake
  {
    id: "img-30",
    src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85",
    alt: "Modern Cake Styling",
    category: "Cakes & Desserts",
    aspectRatio: "tall"
  },
  // 31. Live Cooking Wok & Sauté Station
  {
    id: "img-31",
    src: "https://images.unsplash.com/photo-1514944298352-78d128d54203?auto=format&fit=crop&w=1200&q=85",
    alt: "Live Action Food Station",
    category: "Catering",
    aspectRatio: "square"
  },
  // 32. Sunset Skyline Banquet Table
  {
    id: "img-32",
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=85",
    alt: "Skyline Banquet Setup",
    category: "Weddings",
    aspectRatio: "wide"
  }
];
