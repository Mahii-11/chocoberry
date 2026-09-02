export interface FusionMenuItem {
  id: string;
  name: string;
  dietary?: 'halal' | 'vegetarian' | 'vegan' | 'spicy' | 'chef-special';
  badge?: string;
}

export interface FusionCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  tagColor: string; // gradient / accent
  coverImage: string;
  items: string[];
}

export const FUSION_MENU_CATEGORIES: FusionCategory[] = [
  {
    id: "mocktails-juice-bar",
    title: "Mocktails & Juice Bar",
    subtitle: "Handcrafted Refreshments & Artisan Fusions",
    iconName: "Wine",
    tagColor: "from-[#d97706] to-[#b45309]",
    coverImage: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    items: [
      "Mint Mojito",
      "Tamarind Mojito",
      "Mango Mojito",
      "Mango Tango",
      "POG Juice",
      "Watermelon Lemonade",
      "Cran-Lemonade",
      "Cran-Pineapple",
      "Orange Lemonade",
      "Classic Lemonade",
      "Berry-Lemonade",
      "Peach Lemonade",
      "Dirty Cola",
      "Dirty Dr. Pepper"
    ]
  },
  {
    id: "starters",
    title: "Starters",
    subtitle: "Gourmet Finger Foods & Small Bites",
    iconName: "Utensils",
    tagColor: "from-[#c25e1a] to-[#9a3412]",
    coverImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    items: [
      "Mild Wings",
      "Ghost Pepper Wings",
      "Garlic Parmesan Wings",
      "Bang-Bang Wings",
      "Sweet Chili Wings",
      "Boneless Wings",
      "Olive Platter",
      "Hummus & Pita",
      "Thai Veggie Rolls",
      "Veggie Samosas",
      "Samosa Chaat",
      "Cajun Shrimp Boil",
      "Fried Ravioli",
      "Beef Chili",
      "Chicken Chili",
      "Bow Tie Pasta Salad",
      "Philly Steak Sliders",
      "Chicken Philly Sliders",
      "Fried Meatballs",
      "Bang-Bang Meatballs",
      "Chicken Philly Taco",
      "Fish Taco",
      "Steak Taco"
    ]
  },
  {
    id: "desi-food",
    title: "Desi Food",
    subtitle: "Traditional Heritage Recipes & Royal Curries",
    iconName: "Flame",
    tagColor: "from-[#b45309] to-[#78350f]",
    coverImage: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    items: [
      "Polaw Rice",
      "Motor Polaw",
      "Cilantro Rice",
      "Kabuli Rice",
      "Beef Keema Polaw",
      "Chicken Keema Polaw",
      "Kebab Polaw",
      "Chicken Biryani",
      "Beef Tehari",
      "Chicken Shish Kebab",
      "Chicken Tikka Masala",
      "Chicken Korma",
      "Lamb Kofta",
      "Beef Rezala",
      "Aloo Beef Curry",
      "Desi Mix Veggie",
      "Aloo Do-Piaza (Veggie)",
      "Chana Masala (Veggie)",
      "Naan Bread",
      "Desi Mix Salad",
      "Tomato & Onion Salad",
      "Pepper Salad",
      "Tomato Chutney",
      "Bele Gha Shutki",
      "Rosun Shrimp Bhorta"
    ]
  },
  {
    id: "rice-biriyani",
    title: "Rice & Biriyani",
    subtitle: "Aromatic Persian & Royal Dum Grain Selections",
    iconName: "Sparkles",
    tagColor: "from-[#d97706] to-[#92400e]",
    coverImage: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    items: [
      "Plain Polaw",
      "Motor Polaw",
      "Chana Polaw",
      "Keema Polaw",
      "Kebab Polaw",
      "Persian Lime Rice",
      "Persian Saffron Rice",
      "Bhuna Khichuri",
      "Akhni Beef Khichuri",
      "Beef Tehari",
      "Goat Biryani",
      "Chicken Biryani",
      "Kabsa Goat",
      "Kabsa Chicken",
      "Mediterranean Veggie Rice",
      "Chicken Over Rice",
      "Egg Fried Rice",
      "Vegetable Fried Rice",
      "Manchurian Chicken Fried Rice",
      "Manchurian Shrimp Fried Rice"
    ]
  },
  {
    id: "mediterranean-kabob",
    title: "Mediterranean & Kabob",
    subtitle: "Charcoal Grilled Skewers & Levant Specialties",
    iconName: "Flame",
    tagColor: "from-[#ca8a04] to-[#854d0e]",
    coverImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    items: [
      "Maghreb Persian Polaw",
      "Lamb over Rice",
      "Chicken over Rice",
      "Goat Biryani",
      "Yellow Rice",
      "Greek Salad",
      "Hummus & Pita",
      "Tomato Cucumber Salad",
      "Olive & Cheese Platter",
      "Shish Kabob",
      "Lamb Kofta",
      "Kabab Rolls",
      "Mediterranean Pasta",
      "Bread & Dip Platter",
      "Fruits & Feta Platter",
      "Brown Roasted Potatoes",
      "Mediterranean Penne Pasta",
      "Mediterranean Potato Salad",
      "Tabbouleh (Salad)",
      "Tzatziki with Pita",
      "Salad-e-Shirazi",
      "Mast-o-Khiar",
      "Mini Turkish Bread Platter"
    ]
  },
  {
    id: "indo-chinese",
    title: "Indo-Chinese",
    subtitle: "Wok-Tossed Noodles & Szechuan Fusion Specials",
    iconName: "Soup",
    tagColor: "from-[#ea580c] to-[#9a3412]",
    coverImage: "https://images.unsplash.com/photo-1514944298352-78d128d54203?auto=format&fit=crop&w=800&q=80",
    items: [
      "Hakka Noodles",
      "Shrimp Lo-Mein",
      "Chicken Lo-Mein",
      "Veggie Lo-Mein",
      "Shrimp Bok Choy",
      "Stir Fried Shrimp",
      "Bang-Bang Shrimp & Rice",
      "Shrimp Fried Rice",
      "Chicken Fried Rice",
      "Combination Fried Rice (Chicken & Shrimp)",
      "Teriyaki Vegetable",
      "Stir Fried Vegetable",
      "Chili Chicken",
      "Chili Beef",
      "Manchurian Chicken",
      "Manchurian Chili Beef"
    ]
  },
  {
    id: "american-italian-fusion",
    title: "American & Italian Fusion",
    subtitle: "Artisan Sliders, Stone-Baked Pizzas & Pastas",
    iconName: "Pizza",
    tagColor: "from-[#dc2626] to-[#991b1b]",
    coverImage: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
    items: [
      "Sliders (Steak)",
      "Sliders (Grilled Chicken)",
      "Beef Chili",
      "Chicken Chili",
      "Vegetarian Chili",
      "Steak Taco",
      "Grill Chicken Taco",
      "Fish Taco",
      "Pasta Salad",
      "Meatball Marinara",
      "Chicken Parm Sub",
      "Sicilian Pizza",
      "Boneless Wings",
      "Wings",
      "Chicken Tender Platter",
      "Fried Meatballs",
      "Grilled Potatoes",
      "Stir Fried Veggie",
      "BBQ Chicken"
    ]
  },
  {
    id: "cake-flavors",
    title: "Cake Flavors",
    subtitle: "Bespoke Event Cakes & Multi-Layered Sponge",
    iconName: "Cake",
    tagColor: "from-[#d97706] to-[#a16207]",
    coverImage: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80",
    items: [
      "Fresh Fruits & Cream",
      "Strawberry Cream",
      "Vanilla Cream",
      "Chocolate Lovers",
      "Chocolate Mocha",
      "Red Velvet",
      "Caramel",
      "Tiramisu"
    ]
  },
  {
    id: "extra-platters",
    title: "Extra Platters",
    subtitle: "Grand Grazing Boards & Seafood Hors d'oeuvres",
    iconName: "Layers",
    tagColor: "from-[#b45309] to-[#78350f]",
    coverImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    items: [
      "Olive Platter",
      "Tomato Mozzarella",
      "Grazing Appetizer Platter",
      "Fruits Platter",
      "Chips & Dip",
      "Cole Slaw",
      "Shrimp Platter",
      "Beef Ribs",
      "Garlic Butter Shrimp",
      "Cheese & Crackers",
      "Veggie & Dip Platter"
    ]
  },
  {
    id: "salads",
    title: "Salads",
    subtitle: "Crisp Organic Greens & Artisan Vinaigrettes",
    iconName: "Salad",
    tagColor: "from-[#65a30d] to-[#4d7c0f]",
    coverImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    items: [
      "House Salad",
      "Caesar Salad",
      "Mediterranean Salad",
      "Greek Salad",
      "Asian Salad",
      "Deshi Salad",
      "Onion Cucumber",
      "Vinegar Salad",
      "Tomato Chutney",
      "Pepper Salad",
      "3 Beans Salad",
      "Taco Salad",
      "Village Salad",
      "Waldorf Salad",
      "Fruit Salad"
    ]
  }
];
