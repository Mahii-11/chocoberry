import {
  ServiceItem,
  WhyChooseItem,
  MenuCategory,
  GalleryItem,
  TestimonialItem,
  StepItem,
  StatItem,
  AboutServiceItem,
  AboutOccasionItem,
  BentoGalleryItem
} from '../types';

export const HERO_DATA = {
  eyebrow: "PREMIUM FUSION CATERING & EVENT EXPERIENCES",
  titleLine1: "Unforgettable Events.",
  titleLine2: "Exceptional Catering.",
  description: "From intimate gatherings to grand celebrations, we create delicious memories with our exquisite cuisine and flawless service across DC, Maryland & Virginia.",
  primaryCta: "GET A FREE QUOTE",
  secondaryCta: "EXPLORE OUR MENU",
  stats: [
    {
      iconName: "Award",
      primaryText: "Serving Since",
      secondaryText: "1995"
    },
    {
      iconName: "Users",
      primaryText: "500+",
      secondaryText: "Events Catered"
    },
    {
      iconName: "FileText",
      primaryText: "Custom Menus",
      secondaryText: "Tailored for You"
    },
    {
      iconName: "MapPin",
      primaryText: "DC, MD & VA",
      secondaryText: "Service Area"
    }
  ] as StatItem[]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "wedding",
    title: "Wedding Catering",
    description: "Make your special day unforgettable with our exquisite menu and flawless service.",
    iconName: "HeartHandshake",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    features: ["Grand Bridal Buffets", "Plated Multi-Course Dinner", "Custom Table Setting", "Dedicated Event Captain"]
  },
  {
    id: "corporate",
    title: "Corporate Events",
    description: "Professional catering solutions for meetings, conferences and corporate events.",
    iconName: "Briefcase",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    features: ["Executive Luncheons", "Networking Hors d'oeuvres", "Punctual Delivery", "Dietary Option Labeling"]
  },
  {
    id: "birthday",
    title: "Birthday & Private Parties",
    description: "Delicious food and great service for birthdays and private celebrations.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    features: ["Themed Food Stations", "Live Grilling Stalls", "Finger Foods & Sliders", "Custom Cake Cutting"]
  },
  {
    id: "private-dining",
    title: "Private Dinners & Gatherings",
    description: "Intimate dining experience crafted just for you and your guests.",
    iconName: "UtensilsCrossed",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    features: ["Personal Chef Experience", "Curated Wine/Mocktail Pairing", "Artisan Plating", "Zero Clean-up Hassle"]
  },
  {
    id: "baby-showers",
    title: "Baby Showers & Celebrations",
    description: "Celebrate your special moments with our beautifully curated menus.",
    iconName: "Gift",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
    features: ["Pastel Sweet Tables", "Artisan Mini Quiches", "Fresh Fruit Cascades", "Custom Welcome Drinks"]
  },
  {
    id: "dessert-mocktails",
    title: "Dessert Bar & Mocktail Bar",
    description: "Add a sweet touch with our dessert bar and refreshing mocktails.",
    iconName: "GlassWater",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
    features: ["Mini Tartlets & Mousse Shooters", "Smoke & Botanical Mocktails", "Chocolate Fountain", "Custom Flavored Syrups"]
  }
];

export const WHY_CHOOSE_DATA = {
  eyebrow: "WHY CHOOSE CHOCOBERRY",
  headingLine1: "Passion for Food.",
  headingLine2: "Commitment to Excellence.",
  description: "With over two decades of experience, Chocoberry Events & Catering is known for our fusion cuisine, premium quality, and exceptional service. We use the finest ingredients and customize every detail to bring your vision to life.",
  highlights: [
    {
      id: "quality",
      title: "Premium Quality",
      description: "Fresh ingredients, expertly prepared.",
      iconName: "ChefHat"
    },
    {
      id: "custom",
      title: "Custom Menus",
      description: "Tailored to your taste, culture and budget.",
      iconName: "ScrollText"
    },
    {
      id: "team",
      title: "Experienced Team",
      description: "Professional staff dedicated to you.",
      iconName: "Users2"
    },
    {
      id: "halal",
      title: "Halal Friendly",
      description: "Halal meat & hygienic preparation.",
      iconName: "CheckCircle2"
    }
  ] as WhyChooseItem[],
  showcaseImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "desi",
    name: "Desi Food",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    iconName: "Flame",
    itemCount: 14,
    items: [
      {
        id: "d1",
        name: "Hyderabadi Dum Biryani",
        category: "Desi Food",
        description: "Fragrant basmati rice layered with tender spiced goat/chicken, saffron, and caramelised onions.",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
        badge: "Chef Signature",
        popular: true
      },
      {
        id: "d2",
        name: "Butter Chicken Royale",
        category: "Desi Food",
        description: "Tandoori chicken simmered in a velvety tomato, cashew and fenugreek cream reduction.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80",
        popular: true
      },
      {
        id: "d3",
        name: "Mutton Kacchi Biryani",
        category: "Desi Food",
        description: "Traditional slow-cooked raw marinated meat cooked together with premium aromatic grains.",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "d4",
        name: "Shahi Paneer Tikka Masala",
        category: "Desi Food",
        description: "Charred cottage cheese cubes in rich aromatic royal Mughlai gravy.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "mediterranean",
    name: "Mediterranean & Kabob",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
    iconName: "Utensils",
    itemCount: 12,
    items: [
      {
        id: "m1",
        name: "Charcoal Grilled Shish Tawook",
        category: "Mediterranean & Kabob",
        description: "Marinated citrus & garlic chicken skewers grilled over open mesquite coals.",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        popular: true
      },
      {
        id: "m2",
        name: "Gourmet Lamb Kofta & Tzatziki",
        category: "Mediterranean & Kabob",
        description: "Spiced minced lamb skewers served with cucumber mint tzatziki and warm pita.",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "m3",
        name: "Artisan Hummus & Mezze Platter",
        category: "Mediterranean & Kabob",
        description: "Silky hummus, baba ganoush, stuffed grape leaves, olives, and za'atar crisps.",
        image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "indo-chinese",
    name: "Indo-Chinese",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
    iconName: "Soup",
    itemCount: 10,
    items: [
      {
        id: "ic1",
        name: "Chilli Chicken Dry / Gravy",
        category: "Indo-Chinese",
        description: "Crispy chicken tossed with bell peppers, spring onions, garlic and dark soy glaze.",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        popular: true
      },
      {
        id: "ic2",
        name: "Hakka Wok-Tossed Noodles",
        category: "Indo-Chinese",
        description: "Springy noodles tossed in high heat with julienned vegetables and aromatic spices.",
        image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "ic3",
        name: "Crispy Manchurian Balls",
        category: "Indo-Chinese",
        description: "Vegetable dumplings in a tangy ginger coriander sauce with sesame garnish.",
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "american-italian",
    name: "American & Italian Fusion",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
    iconName: "Pizza",
    itemCount: 11,
    items: [
      {
        id: "ai1",
        name: "Truffle Penne Alfredo",
        category: "American & Italian Fusion",
        description: "Al dente penne in a rich parmesan and black truffle cream sauce with roasted garlic.",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
        popular: true
      },
      {
        id: "ai2",
        name: "Gourmet Brioche Sliders",
        category: "American & Italian Fusion",
        description: "Angus beef or seasoned pulled chicken sliders with caramelized onions and house aioli.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "ai3",
        name: "Caprese Salad Skewers",
        category: "American & Italian Fusion",
        description: "Fresh buffalo mozzarella, heirloom cherry tomatoes, basil and balsamic glaze drizzle.",
        image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "desserts",
    name: "Desserts & Cake Flavors",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80",
    iconName: "Cake",
    itemCount: 16,
    items: [
      {
        id: "ds1",
        name: "Pistachio Rose Tres Leches",
        category: "Desserts & Cake Flavors",
        description: "Sponge cake soaked in three scented milks, topped with whipped cream and crushed Iranian pistachios.",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80",
        badge: "Crowd Favorite",
        popular: true
      },
      {
        id: "ds2",
        name: "Artisan Chocolate Mousse Shooters",
        category: "Desserts & Cake Flavors",
        description: "Belgian dark chocolate mousse with gold leaf and raspberry coulis pipette.",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "ds3",
        name: "Mango Kulfi Tartlets",
        category: "Desserts & Cake Flavors",
        description: "Buttery shortbread crust filled with rich Alphonso mango reduction and cardamom cream.",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    id: "mocktails",
    name: "Mocktails & Beverages",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    iconName: "Wine",
    itemCount: 10,
    items: [
      {
        id: "mb1",
        name: "Smoked Rosemary Passion Fruit",
        category: "Mocktails & Beverages",
        description: "Fresh passion fruit puree, sparkling soda, lime juice and smoked organic rosemary twig.",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
        popular: true
      },
      {
        id: "mb2",
        name: "Electric Blue Lagoon Spritz",
        category: "Mocktails & Beverages",
        description: "Blue curacao syrup, crushed mint, fresh lemon splash and sparkling mineral water.",
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "mb3",
        name: "Royal Lychee Rose Fizz",
        category: "Mocktails & Beverages",
        description: "Sweet whole lychees muddled with rosewater extract and bubbly lemonade.",
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=600&q=80"
      }
    ]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "g1",
    title: "Luxury Wedding Reception",
    category: "Wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    alt: "Elegantly arranged banquet with floral arches and romantic chandelier lighting"
  },
  {
    id: "g2",
    title: "Gourmet Live Carving Station",
    category: "Food Display",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    alt: "Live chef catering station with fresh gourmet meats and aromatic spices"
  },
  {
    id: "g3",
    title: "Candlelit Gala Dinner",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    alt: "Corporate banquet hall set with pristine golden tableware and glassware"
  },
  {
    id: "g4",
    title: "Signature Dessert & Mocktail Lounge",
    category: "Dessert Bar",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80",
    alt: "Artisan dessert table display featuring multi-tier cakes and gourmet pastries"
  },
  {
    id: "g5",
    title: "Outdoor Sunset Celebration",
    category: "Private Parties",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
    alt: "Vibrant garden party setup with fairy lights and customized dining tables"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    quote: "Chocoberry catered our wedding and everything was perfect! The food was absolutely delicious and the service was exceptional. Highly recommended!",
    clientName: "Farah & Mahmud",
    eventType: "Wedding",
    location: "Gaylord National Resort",
    rating: 5
  },
  {
    id: "t2",
    quote: "We booked them for our corporate event and the feedback from our guests was amazing. Very professional team and great food!",
    clientName: "Sarah Ahmed",
    eventType: "Corporate Event",
    location: "Washington, DC",
    rating: 5
  },
  {
    id: "t3",
    quote: "From the food to the presentation, everything was beyond our expectations. Their dessert bar was the highlight of the party!",
    clientName: "Tahmina Rahman",
    eventType: "Birthday Celebration",
    location: "Maryland",
    rating: 5
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    stepNumber: 1,
    title: "1. Share Your Details",
    description: "Tell us about your event, date, location and preferences.",
    iconName: "FileSpreadsheet"
  },
  {
    stepNumber: 2,
    title: "2. Custom Proposal",
    description: "We create a tailored menu and proposal just for you.",
    iconName: "ReceiptText"
  },
  {
    stepNumber: 3,
    title: "3. Confirm & Plan",
    description: "You confirm and we plan every detail seamlessly.",
    iconName: "CalendarCheck2"
  },
  {
    stepNumber: 4,
    title: "4. We Cater & Serve",
    description: "Our team delivers an amazing experience for you and your guests.",
    iconName: "UtensilsCrossed"
  },
  {
    stepNumber: 5,
    title: "5. Enjoy Your Event",
    description: "Relax and enjoy while we take care of everything!",
    iconName: "Heart"
  }
];

export const FOOTER_DATA = {
  about: "Premium fusion catering and event experiences across DC, Maryland and Virginia. Making your special moments deliciously unforgettable.",
  quickLinks: [
    { label: "Home", href: "#hero" },
    { label: "Catering", href: "#services" },
    { label: "Events", href: "#why-choose-us" },
    { label: "Menus", href: "#menu" },
    { label: "Dessert Bar", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "About Us", href: "#why-choose-us" },
    { label: "Contact Us", href: "#contact" }
  ],
  services: [
    "Wedding Catering",
    "Corporate Events",
    "Birthday Parties",
    "Private Dinners",
    "Baby Showers",
    "Dessert Bar",
    "Mocktail Bar",
    "Custom Cakes"
  ],
  contact: {
    phone: "(240) 543-2203",
    email: "events@chocoberryevents.com",
    hours: "Mon - Sun: 8:00 AM - 8:00 PM",
    area: "Serving DC, Maryland & Virginia"
  },
  serviceAreas: [
    "Washington DC",
    "Maryland",
    "Northern Virginia",
    "Loudoun County",
    "Montgomery County",
    "Prince George's County",
    "And surrounding areas"
  ],
  socials: [
    { name: "Facebook", icon: "Facebook", href: "#" },
    { name: "Instagram", icon: "Instagram", href: "#" },
    { name: "Google", icon: "Search", href: "#" },
    { name: "Pinterest", icon: "Share2", href: "#" }
  ]
};

export const ABOUT_PAGE_DATA = {
  hero: {
    headline: "WELCOME CHOCOBERRY EVENTS & CATERING",
    badge: "SERVING ONLY THE BEST SINCE 1995",
    description: "For over 30 years, Chocoberry Events & Catering has set the gold standard in premium fusion catering and bespoke event production across DC, Maryland, and Virginia. We blend rich culinary heritage with modern gastronomic innovation to turn life's most precious celebrations into timeless memories.",
    primaryCta: "CONTACT US TODAY!",
    stats: [
      { label: "Founded In", value: "1995", subtitle: "30+ Years of Craft" },
      { label: "Celebrations", value: "500+", subtitle: "Weddings & Galas" },
      { label: "Cuisine Styles", value: "6+", subtitle: "Fusion & Classics" },
      { label: "Halal Quality", value: "100%", subtitle: "Certified & Hygienic" }
    ]
  },
  servicesSection: {
    title: "A MENU AS UNIQUE AS YOUR EVENT",
    subtitle: "We specialize in creating personalized catering experiences, bespoke live stations, and luxury decor tailored to your culture, palate, and celebration size.",
    services: [
      {
        id: "american-italian",
        title: "American-Italian Classics",
        subtitle: "Gourmet comfort & Italian artisanal staples",
        description: "Burgers, hand-tossed artisanal pasta, stone-fired flatbreads, crispy pizzas, Angus beef sliders, and truffle-infused classics tailored for upscale gatherings.",
        iconName: "UtensilsCrossed",
        tag: "Crowd Favorite",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
        highlights: [
          "Truffle Penne Alfredo & Creamy Carbonara",
          "Gourmet Angus & Pulled Brioche Sliders",
          "Artisan Margherita & Prosciutto Flatbreads",
          "Caprese Skewers & Bruschetta Bar"
        ]
      },
      {
        id: "fusion-catering",
        title: "Fusion Catering",
        subtitle: "Authentic subcontinent heritage meets modern culinary flair",
        description: "Authentic subcontinent flavors with a modern twist — royal slow-cooked dum biryanis, velvety tandoori curries, and fusion appetizers that bridge tradition and innovation.",
        iconName: "Flame",
        tag: "Signature Cuisine",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
        highlights: [
          "Hyderabadi & Mutton Kacchi Dum Biryani",
          "Royal Shahi Butter Chicken with Garlic Naan",
          "Charcoal Grilled Shish Tawook & Kabob Platters",
          "Tandoori Paneer & Chaat Canapés"
        ]
      },
      {
        id: "dessert-bar",
        title: "Dessert Bar",
        subtitle: "Decadent sweets & signature interactive dessert lounges",
        description: "Custom cakes, dessert bars & signature ice cream bar with live sundae topping counters, mousse shooter flights, mini French pastries, and artisanal fondue displays.",
        iconName: "IceCream",
        tag: "Sweet Indulgence",
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
        highlights: [
          "Pistachio Rose & Saffron Tres Leches",
          "Belgian Dark Chocolate Mousse Shooters",
          "Signature Nitrogen & Scoop Ice Cream Bar",
          "Mango Kulfi Tartlets & Macaron Towers"
        ]
      },
      {
        id: "pastry-ice-cream-cakes",
        title: "Pastry & Ice Cream Cakes",
        subtitle: "High-end bespoke wedding & event showpiece cakes",
        description: "High-end wedding and milestone event cakes designed to be breathtaking centerpieces, baked fresh with premium ingredients, delicate florals, and verified Halal certification.",
        iconName: "Cake",
        tag: "HALAL CERTIFIED",
        isHalal: true,
        image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80",
        highlights: [
          "100% Certified Halal Ingredients & Gelatin-Free",
          "Multi-Tiered Architectural Wedding Cakes",
          "Custom Ice Cream Cakes & Fondant Textures",
          "Fresh Botanical & Edible 24k Gold Leaf Accents"
        ]
      },
      {
        id: "birthdays",
        title: "Birthdays",
        subtitle: "Elevated celebratory experiences for all ages",
        description: "Elevated celebrations featuring custom themed dining stations, live taco/slider bars, kid-friendly gourmet snacks, and show-stopping birthday cake reveals.",
        iconName: "PartyPopper",
        tag: "Festive Vibes",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
        highlights: [
          "Custom Themed Food & Mocktail Stations",
          "Live Interactive Grilling & Pasta Bars",
          "Gourmet Finger Foods & Sliders",
          "Personalized Dessert Displays"
        ]
      },
      {
        id: "event-management-decor",
        title: "Event Management & Decor",
        subtitle: "Stress-FREE all-in-one event design and execution",
        description: "Stress-FREE all-in-one event design, venue styling, opulent floral centerpieces, Gaaye Holud & bridal stage setups, ambient uplighting, and meticulous day-of coordination.",
        iconName: "Sparkles",
        tag: "Turnkey Planning",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        highlights: [
          "Full Concept Theme & Mood Board Design",
          "Gaaye Holud, Mehendi & Wedding Stage Decor",
          "Luxury Floral Arches & Table Scapes",
          "Day-of Coordination & Dedicated Captains"
        ]
      }
    ] as AboutServiceItem[]
  },
  story: {
    heading: "Crafting Unforgettable Memories Since 1995",
    badge: "OUR 30-YEAR JOURNEY",
    subtitle: "Turning Life's Moments into Extraordinary Culinary Celebrations",
    paragraphs: [
      "Founded in 1995 with a passion for soulful hospitality and culinary perfection, Chocoberry Events & Catering began with a clear purpose: to transform every gathering into an unforgettable memory through remarkable food and seamless service.",
      "Over the past 30+ years, we have grown into one of the most trusted names across Washington DC, Maryland, and Virginia. We pride ourselves on masterfully blending rich, traditional subcontinent spices with modern American and Mediterranean gastronomy — producing an exquisite fusion cuisine that delights diverse palates.",
      "From opulent multi-course wedding banquets and vibrant Gaaye Holud ceremonies to corporate galas and cozy private dinners, our executive chefs and planning team tailor every single menu and tablescape to perfection. We handle every detail so you can be fully present with the people who matter most."
    ],
    features: [
      { title: "30+ Years of Excellence", desc: "Trusted by generations of families & top corporate leaders." },
      { title: "Fusion Catering Mastery", desc: "Bridging authentic South Asian spice heritage with global culinary arts." },
      { title: "Tailored Experiences", desc: "Every menu, dessert bar, and decor layout is built exclusively for your vision." },
      { title: "100% Halal Assurance", desc: "Certified Halal meats, hygienic prep, and meticulous dietary accommodations." }
    ],
    milestones: [
      { year: "1995", label: "Founded with artisan sweets & private dining" },
      { year: "2008", label: "Expanded full-scale wedding & corporate catering" },
      { year: "2018", label: "Launched Signature Dessert Bar & Mocktail Lounge" },
      { year: "Present", label: "500+ celebrated events across DC, MD & VA" }
    ]
  },
  whyChoose: {
    title: "WHY CHOOSE CHOCOBERRY EVENTS & CATERING",
    subtitle: "Every Detail, Every Taste, Perfectly Designed",
    description: "We believe an extraordinary event is born at the intersection of culinary excellence, flawless coordination, and heartfelt hospitality. Here is why clients throughout the DMV region consistently trust Chocoberry.",
    pillars: [
      {
        id: "customization",
        title: "Full Customization",
        subtitle: "Your Vision, Your Flavor",
        description: "Mix cuisines, select dietary preferences, or tailor every single dish. From traditional biryanis to Italian pastas and custom dessert bars, your menu is uniquely yours.",
        iconName: "Sliders",
        badge: "Bespoke"
      },
      {
        id: "quality",
        title: "Uncompromising Quality",
        subtitle: "Fresh Ingredients & Flawless Art",
        description: "We use only the freshest farm-sourced ingredients, certified Halal premium meats, and artisan cooking techniques with magazine-worthy visual presentation.",
        iconName: "Award",
        badge: "100% Halal"
      },
      {
        id: "service",
        title: "Seamless Service",
        subtitle: "Stress-Free Professionalism",
        description: "Our veteran event management team, courteous staff, and dedicated captains ensure punctuality, warm hospitality, and effortless flow from setup to breakdown.",
        iconName: "CheckCircle2",
        badge: "Experienced"
      },
      {
        id: "offerings",
        title: "Diverse Offerings",
        subtitle: "Your Complete Event Solution",
        description: "One-stop destination for savory catering, custom tiered cakes, signature ice cream bars, smoked mocktail lounges, and all-in-one stage decor.",
        iconName: "Layers",
        badge: "All-in-One"
      }
    ]
  },
  eventsWeServe: {
    headline: "CELEBRATING LIFE'S MOMENTS, ONE EVENT AT A TIME",
    subtitle: "Whether you are hosting an intimate celebration for 20 or a grand gala for 500+, our dedicated culinary and management team customizes every detail to ensure flawless execution and unforgettable taste.",
    secondaryNote: "No event is too big or small — our dedicated culinary and management team customizes every detail to ensure flawless execution and unforgettable taste.",
    callCta: "CALL US TODAY!",
    phoneDisplay: "(240) 543-2203",
    phoneUrl: "tel:2405432203",
    occasions: [
      {
        id: "weddings-engagements",
        title: "Weddings & Engagements",
        description: "Grand bridal banquets, plated multi-course dinners, custom Halal wedding cakes, and vibrant Gaaye Holud & Mehendi setups.",
        iconName: "HeartHandshake",
        capacity: "50 - 500+ Guests",
        features: ["Bespoke Bridal Buffet", "Custom Tiered Cake", "Live Chef Stations", "Full Table Service"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "corporate-conferences",
        title: "Corporate Events & Conferences",
        description: "Punctual executive luncheons, networking cocktail & mocktail hours, gourmet boxed meals, and annual celebration banquets.",
        iconName: "Briefcase",
        capacity: "25 - 400+ Guests",
        features: ["Punctual Delivery", "Dietary Labeling", "Coffee & Pastry Bar", "Professional Staffing"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "birthdays-anniversaries",
        title: "Birthday Parties & Anniversaries",
        description: "Milestone birthdays, golden anniversaries, lively slider stations, themed dessert bars, and customized birthday cakes.",
        iconName: "PartyPopper",
        capacity: "30 - 250+ Guests",
        features: ["Themed Dessert Bar", "Slider & Taco Stations", "Mocktail Lounge", "Custom Cake Cutting"],
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "private-dinners",
        title: "Private Dinners & Family Gatherings",
        description: "In-home private chef dining, family reunions, Eid & holiday celebrations, and curated multi-course tasting experiences.",
        iconName: "Utensils",
        capacity: "10 - 60 Guests",
        features: ["Personal Chef Experience", "Artisan Plating", "Zero Clean-up Hassle", "Custom Pairings"],
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "baby-showers-graduations",
        title: "Baby Showers & Graduation Parties",
        description: "Pastel sweet tables, high-tea style finger foods, botanical mocktails, and festive celebration buffets.",
        iconName: "Gift",
        capacity: "20 - 150 Guests",
        features: ["Pastel Sweet Tables", "Mini Quiches & Canapés", "Botanical Mocktails", "Custom Backdrop Decor"],
        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80"
      }
    ] as AboutOccasionItem[]
  },
  bentoGallery: [
    {
      id: "bg1",
      title: "Royal Gourmet Food Platters & Dum Biryani",
      category: "Gourmet Cuisine",
      tag: "Culinary Art",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=80",
      colSpan: "md:col-span-2 md:row-span-2",
      caption: "Authentic Hyderabadi Dum Biryani served with spiced accompaniments and charcoal kabob platters."
    },
    {
      id: "bg2",
      title: "Handcrafted Wedding & Milestone Cakes",
      category: "Pastry & Cakes",
      tag: "100% Halal",
      image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80",
      colSpan: "md:col-span-1 md:row-span-2",
      caption: "Multi-tiered artisanal cake with delicate sugar florals, gold leaf, and pistachio rose sponge."
    },
    {
      id: "bg3",
      title: "Gaaye Holud & Opulent Venue Decor",
      category: "Event Decor & Staging",
      tag: "Custom Staging",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
      colSpan: "md:col-span-2 md:row-span-1",
      caption: "Custom bridal stage with fairy lights, golden arches, and lush exotic floral installations."
    },
    {
      id: "bg4",
      title: "Signature Dessert & Ice Cream Lounge",
      category: "Dessert Bar",
      tag: "Sweet Bar",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
      colSpan: "md:col-span-1 md:row-span-1",
      caption: "Mousse shooter flights, French macarons, and chocolate dipped strawberries."
    },
    {
      id: "bg5",
      title: "Botanical Smoked Mocktail Bar",
      category: "Beverages",
      tag: "Signature Bar",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
      colSpan: "md:col-span-1 md:row-span-1",
      caption: "Rosemary smoked passion fruit and butterfly pea flower mocktails handcrafted to order."
    },
    {
      id: "bg6",
      title: "Charcoal Grilled Mediterranean Mezze",
      category: "Live Stations",
      tag: "Fresh Flavors",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      colSpan: "md:col-span-2 md:row-span-1",
      caption: "Mesquite grilled shish tawook skewers with silky hummus, warm pita, and fresh herbs."
    }
  ] as BentoGalleryItem[],
  finalCta: {
    headline: "BOOK YOUR EVENT TODAY",
    subheadline: "Let's create a one-of-a-kind experience together!",
    description: "Whether planning an intimate gathering or a magnificent celebration, our team is ready to craft a bespoke menu and seamless experience for you.",
    phone: "(240) 543-2203",
    buttonText: "CALL US TODAY!"
  }
};
