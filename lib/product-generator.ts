import type { DropshippingProduct, ProductFilter } from "./types"

// Product components that will be mixed and matched
const productComponents = {
  productTypes: [
    "smart home accessories",
    "eco-friendly kitchen gadgets",
    "pet care innovations",
    "beauty and skincare devices",
    "fitness and wellness products",
    "travel accessories",
    "phone and tech accessories",
    "home organization solutions",
    "baby and parenting gadgets",
    "outdoor and camping gear",
    "car accessories",
    "fashion accessories",
    "home decor items",
    "health monitoring devices",
    "productivity tools",
  ],

  productFeatures: [
    "wireless charging capability",
    "water-resistant design",
    "eco-friendly materials",
    "compact and portable form",
    "customizable options",
    "smart app connectivity",
    "energy-efficient operation",
    "ergonomic design",
    "multifunctional use cases",
    "innovative storage solution",
    "time-saving automation",
    "premium look and feel",
    "unique aesthetic appeal",
    "durable construction",
    "easy maintenance",
  ],

  audiences: [
    "busy professionals",
    "parents with young children",
    "fitness enthusiasts",
    "environmentally conscious consumers",
    "digital nomads",
    "homeowners",
    "tech enthusiasts",
    "students and educators",
    "health-conscious individuals",
    "elderly individuals",
    "creative professionals",
    "urban apartment dwellers",
    "frequent travelers",
    "outdoor adventurers",
    "pet owners",
  ],

  categories: [
    "Home & Kitchen",
    "Beauty & Personal Care",
    "Electronics",
    "Sports & Outdoors",
    "Health & Wellness",
    "Baby & Kids",
    "Pet Supplies",
    "Fashion & Accessories",
    "Car & Automotive",
    "Office & Productivity",
    "Travel & Luggage",
    "Eco-Friendly Products",
    "Smart Home",
    "Seasonal Items",
    "Gifts & Novelties",
  ],

  niches: {
    "Home & Kitchen": [
      "Kitchen Gadgets",
      "Home Organization",
      "Bathroom Accessories",
      "Bedding & Sleep",
      "Smart Kitchen",
      "Cleaning Tools",
      "Home Decor",
      "Coffee & Tea Accessories",
    ],
    "Beauty & Personal Care": [
      "Skincare Tools",
      "Hair Accessories",
      "Makeup Organizers",
      "Massage & Relaxation",
      "Beauty Devices",
      "Natural & Organic",
      "Men's Grooming",
      "Bath Accessories",
    ],
    Electronics: [
      "Phone Accessories",
      "Wireless Earbuds",
      "Charging Solutions",
      "Laptop Accessories",
      "Smart Watches",
      "Camera Accessories",
      "Audio Gadgets",
      "Portable Electronics",
    ],
    "Sports & Outdoors": [
      "Fitness Accessories",
      "Yoga Equipment",
      "Outdoor Gear",
      "Camping Essentials",
      "Water Sports",
      "Hiking & Trekking",
      "Sports Recovery",
      "Bike Accessories",
    ],
    "Health & Wellness": [
      "Sleep Aids",
      "Posture Correctors",
      "Stress Relief",
      "Health Monitors",
      "Massage Tools",
      "Aromatherapy",
      "Fitness Trackers",
      "Wellness Supplements",
    ],
    "Baby & Kids": [
      "Baby Safety",
      "Feeding Accessories",
      "Educational Toys",
      "Travel Accessories",
      "Nursery Organization",
      "Bath & Grooming",
      "Developmental Toys",
      "Children's Room Decor",
    ],
    "Pet Supplies": [
      "Pet Grooming",
      "Pet Toys",
      "Pet Travel",
      "Pet Feeding",
      "Pet Beds & Furniture",
      "Pet Training",
      "Pet Health",
      "Pet Clothing",
    ],
    "Fashion & Accessories": [
      "Jewelry",
      "Watches",
      "Bags & Wallets",
      "Sunglasses",
      "Scarves & Wraps",
      "Hair Accessories",
      "Phone Cases",
      "Hats & Caps",
    ],
    "Car & Automotive": [
      "Car Organization",
      "Car Tech",
      "Car Cleaning",
      "Car Comfort",
      "Car Safety",
      "Car Exterior",
      "Car Phone Mounts",
      "Car Lighting",
    ],
    "Office & Productivity": [
      "Desk Organization",
      "Stationery",
      "Ergonomic Accessories",
      "Tech Organizers",
      "Desk Decor",
      "Planners & Journals",
      "Work From Home",
      "Desk Lighting",
    ],
    "Travel & Luggage": [
      "Packing Organizers",
      "Travel Comfort",
      "Travel Security",
      "Luggage Accessories",
      "Travel Electronics",
      "Travel Containers",
      "Neck Pillows",
      "Passport & Document Holders",
    ],
    "Eco-Friendly Products": [
      "Reusable Alternatives",
      "Sustainable Kitchen",
      "Eco Bathroom",
      "Zero Waste",
      "Organic Products",
      "Energy Saving",
      "Biodegradable Items",
      "Eco Packaging",
    ],
    "Smart Home": [
      "Smart Lighting",
      "Smart Security",
      "Voice Assistants",
      "Smart Kitchen",
      "Smart Plugs",
      "Smart Thermostats",
      "Smart Sensors",
      "Smart Entertainment",
    ],
    "Seasonal Items": [
      "Summer Essentials",
      "Winter Products",
      "Holiday Decorations",
      "Gardening Tools",
      "Back to School",
      "Halloween Items",
      "Christmas Products",
      "Valentine's Day Gifts",
    ],
    "Gifts & Novelties": [
      "Unique Gadgets",
      "Personalized Items",
      "Desk Toys",
      "Quirky Home Decor",
      "Novelty Lighting",
      "Conversation Starters",
      "Unusual Kitchen Items",
      "Fun Tech Accessories",
    ],
  },

  priceRanges: {
    low: {
      supplierPrice: "$1-5",
      retailPrice: "$10-25",
      customerPrice: "$15-30",
      profitMargin: "60-80%",
    },
    medium: {
      supplierPrice: "$5-15",
      retailPrice: "$25-50",
      customerPrice: "$30-60",
      profitMargin: "50-70%",
    },
    high: {
      supplierPrice: "$15-30",
      retailPrice: "$50-100",
      customerPrice: "$60-120",
      profitMargin: "40-60%",
    },
    premium: {
      supplierPrice: "$30-80",
      retailPrice: "$100-250",
      customerPrice: "$120-300",
      profitMargin: "30-50%",
    },
  },

  supplierRegions: [
    "China (Mainland)",
    "China (Hong Kong)",
    "United States",
    "Europe",
    "Southeast Asia",
    "India",
    "South Korea",
    "Japan",
    "Taiwan",
    "Vietnam",
  ],

  shippingTimes: ["7-14 days", "14-21 days", "21-30 days", "3-7 days (express)", "30-45 days", "5-10 days"],

  moqRanges: ["No minimum", "5-10 units", "10-50 units", "50-100 units", "100+ units"],

  qualityRatings: ["★★★★★ (Excellent)", "★★★★☆ (Very Good)", "★★★☆☆ (Good)", "★★☆☆☆ (Average)"],

  reliabilityRatings: ["★★★★★ (Excellent)", "★★★★☆ (Very Good)", "★★★☆☆ (Good)", "★★☆☆☆ (Average)"],

  marketPotentials: ["Trending Upward", "High Demand", "Steady Seller", "Emerging Niche", "Seasonal Spike"],

  competitionLevels: [
    "Low - Few established sellers in this niche",
    "Moderate - Some competition but room for new sellers",
    "High - Saturated market requiring strong differentiation",
    "Emerging - New category with early competition forming",
    "Fragmented - Many small sellers without dominant leaders",
  ],

  searchVolumes: [
    "High (100K+ monthly searches)",
    "Medium (10K-100K monthly searches)",
    "Low-Medium (1K-10K monthly searches)",
    "Niche (100-1K monthly searches)",
    "Emerging (under 100 monthly searches, but growing)",
  ],

  trendDirections: ["up", "down", "stable"] as const,

  trendNames: [
    "Eco-friendly products",
    "Home fitness equipment",
    "Work-from-home accessories",
    "Smart home devices",
    "Portable tech gadgets",
    "Self-care products",
    "Pet accessories",
    "Outdoor recreation",
    "Home organization",
    "Kitchen gadgets",
    "Beauty tools",
    "Travel accessories",
    "Car accessories",
    "Phone accessories",
    "Wellness products",
  ],

  trendDescriptions: {
    up: [
      "Rapidly growing trend with increasing consumer interest",
      "Significant year-over-year growth in search volume",
      "Accelerating demand on social media platforms",
      "Expanding market with new customer segments",
      "Strong upward trajectory predicted to continue",
    ],
    down: [
      "Declining interest as newer alternatives emerge",
      "Gradually being replaced by more innovative products",
      "Facing challenges from changing consumer preferences",
      "Market saturation leading to price competition",
      "Seasonal decline expected to continue",
    ],
    stable: [
      "Consistent demand with predictable sales patterns",
      "Mature market with established customer base",
      "Reliable interest providing steady sales opportunity",
      "Evergreen product with consistent search patterns",
      "Stable market with predictable seasonal variations",
    ],
  },

  // SEO and market analysis
  keywordsByCategory: {
    "Home & Kitchen": [
      "kitchen gadgets",
      "home organization",
      "space saving",
      "kitchen tools",
      "home improvement",
      "cooking accessories",
      "bathroom organizer",
      "home decor",
    ],
    "Beauty & Personal Care": [
      "skincare tools",
      "beauty devices",
      "makeup organizer",
      "hair accessories",
      "facial tools",
      "massage devices",
      "grooming kit",
      "self-care products",
    ],
    Electronics: [
      "phone accessories",
      "wireless charger",
      "earbuds",
      "smart gadgets",
      "tech accessories",
      "laptop stand",
      "portable charger",
      "phone holder",
    ],
    "Sports & Outdoors": [
      "fitness accessories",
      "workout equipment",
      "outdoor gear",
      "camping essentials",
      "sports equipment",
      "hiking gear",
      "exercise tools",
      "water bottle",
    ],
    "Health & Wellness": [
      "health monitor",
      "sleep aid",
      "posture corrector",
      "stress relief",
      "massage tool",
      "wellness products",
      "aromatherapy",
      "fitness tracker",
    ],
    "Baby & Kids": [
      "baby essentials",
      "kids toys",
      "baby safety",
      "feeding accessories",
      "educational toys",
      "nursery decor",
      "baby monitor",
      "children's products",
    ],
    "Pet Supplies": [
      "pet accessories",
      "dog toys",
      "cat products",
      "pet grooming",
      "pet bed",
      "pet feeder",
      "pet carrier",
      "pet training",
    ],
    "Fashion & Accessories": ["jewelry", "watches", "sunglasses", "bags", "wallets", "scarves", "hats", "phone cases"],
    "Car & Automotive": [
      "car accessories",
      "car organizer",
      "car phone mount",
      "car charger",
      "car cleaning",
      "car gadgets",
      "car interior",
      "car lights",
    ],
    "Office & Productivity": [
      "desk organizer",
      "office gadgets",
      "stationery",
      "desk accessories",
      "work from home",
      "ergonomic office",
      "planner",
      "desk lamp",
    ],
    "Travel & Luggage": [
      "travel accessories",
      "packing cubes",
      "travel pillow",
      "luggage tags",
      "travel organizer",
      "passport holder",
      "travel bottles",
      "travel gadgets",
    ],
    "Eco-Friendly Products": [
      "reusable products",
      "eco friendly",
      "sustainable",
      "zero waste",
      "biodegradable",
      "plastic free",
      "organic products",
      "eco conscious",
    ],
    "Smart Home": [
      "smart lights",
      "smart plugs",
      "voice assistant",
      "smart home devices",
      "home automation",
      "smart security",
      "smart sensors",
      "wifi gadgets",
    ],
    "Seasonal Items": [
      "summer essentials",
      "winter products",
      "holiday decorations",
      "christmas gifts",
      "halloween items",
      "back to school",
      "valentine gifts",
      "seasonal decor",
    ],
    "Gifts & Novelties": [
      "unique gifts",
      "gadget gifts",
      "novelty items",
      "desk toys",
      "quirky gifts",
      "gift ideas",
      "unusual presents",
      "conversation pieces",
    ],
  },

  featuresByCategory: {
    "Home & Kitchen": [
      "Space-saving design",
      "Multifunctional use",
      "Easy to clean",
      "Durable materials",
      "Elegant appearance",
      "Time-saving operation",
      "Ergonomic handle",
      "Compact storage",
    ],
    "Beauty & Personal Care": [
      "Gentle on skin",
      "Rechargeable battery",
      "Multiple settings",
      "Waterproof design",
      "Travel-friendly size",
      "Professional results",
      "LED indicators",
      "Hypoallergenic materials",
    ],
    Electronics: [
      "Fast charging capability",
      "Universal compatibility",
      "Compact design",
      "Long battery life",
      "Noise cancellation",
      "Water resistance",
      "Smart connectivity",
      "Premium materials",
    ],
    "Sports & Outdoors": [
      "Lightweight construction",
      "Weather resistance",
      "Portable design",
      "Durable materials",
      "Easy setup",
      "Comfortable grip",
      "Multiple functions",
      "Adjustable settings",
    ],
    "Health & Wellness": [
      "Easy to use",
      "Clinically tested",
      "Portable design",
      "Rechargeable",
      "Multiple intensity levels",
      "Quiet operation",
      "Comfortable materials",
      "App connectivity",
    ],
    "Baby & Kids": [
      "Child-safe materials",
      "Easy to clean",
      "Developmental benefits",
      "Compact storage",
      "Adjustable sizing",
      "Engaging design",
      "Durable construction",
      "Parent-friendly features",
    ],
    "Pet Supplies": [
      "Durable construction",
      "Easy to clean",
      "Comfortable for pets",
      "Adjustable sizing",
      "Interactive features",
      "Portable design",
      "Safe materials",
      "Noise-free operation",
    ],
    "Fashion & Accessories": [
      "Adjustable sizing",
      "Premium materials",
      "Versatile style",
      "Comfortable wear",
      "Durable construction",
      "Elegant design",
      "Water resistance",
      "Lightweight",
    ],
    "Car & Automotive": [
      "Universal fit",
      "Easy installation",
      "Durable construction",
      "Weather resistance",
      "Compact design",
      "Multiple functions",
      "Premium appearance",
      "Strong adhesive",
    ],
    "Office & Productivity": [
      "Space-saving design",
      "Multiple compartments",
      "Ergonomic features",
      "Elegant appearance",
      "Durable materials",
      "Cable management",
      "Adjustable settings",
      "Portable design",
    ],
    "Travel & Luggage": [
      "Lightweight design",
      "Water-resistant material",
      "Compact when stored",
      "Durable construction",
      "Multiple compartments",
      "RFID protection",
      "Easy to clean",
      "Comfortable to carry",
    ],
    "Eco-Friendly Products": [
      "Biodegradable materials",
      "Plastic-free packaging",
      "Reusable design",
      "Sustainable sourcing",
      "Chemical-free",
      "Energy efficient",
      "Recyclable components",
      "Reduced carbon footprint",
    ],
    "Smart Home": [
      "App control",
      "Voice command compatibility",
      "Energy monitoring",
      "Scheduling features",
      "Remote access",
      "Easy setup",
      "Multiple device connectivity",
      "Compact design",
    ],
    "Seasonal Items": [
      "Weather appropriate",
      "Festive design",
      "Compact storage",
      "Durable for repeated use",
      "Easy setup",
      "Multiple functions",
      "Attractive appearance",
      "High-quality materials",
    ],
    "Gifts & Novelties": [
      "Unique design",
      "Conversation starter",
      "Gift-ready packaging",
      "Multiple functions",
      "Surprising features",
      "High-quality materials",
      "Memorable experience",
      "Customizable options",
    ],
  },

  // Detailed target audience
  ageRangesByAudience: {
    "busy professionals": "25-45",
    "parents with young children": "28-45",
    "fitness enthusiasts": "18-40",
    "environmentally conscious consumers": "22-50",
    "digital nomads": "25-40",
    homeowners: "30-65",
    "tech enthusiasts": "18-45",
    "students and educators": "18-65",
    "health-conscious individuals": "25-65",
    "elderly individuals": "65+",
    "creative professionals": "25-45",
    "urban apartment dwellers": "22-38",
    "frequent travelers": "28-55",
    "outdoor adventurers": "20-45",
    "pet owners": "25-65",
  },

  socialCharacteristicsByAudience: {
    "busy professionals": [
      "Career-focused individuals",
      "Higher income bracket",
      "Limited free time",
      "Value efficiency and convenience",
      "Willing to pay for time-saving solutions",
    ],
    "parents with young children": [
      "Family-oriented decision makers",
      "Time-constrained",
      "Safety and security conscious",
      "Value educational content",
      "Seek community and support",
    ],
    "fitness enthusiasts": [
      "Health-conscious lifestyle",
      "Regular exercise routine",
      "Interested in performance metrics",
      "Community-oriented",
      "Willing to invest in health",
    ],
    "environmentally conscious consumers": [
      "Prioritize sustainability",
      "Research before purchasing",
      "Willing to pay premium for eco-friendly options",
      "Community-minded",
      "Politically engaged",
    ],
    "digital nomads": [
      "Location-independent workers",
      "Tech-savvy",
      "Value experiences over possessions",
      "Adaptable to new environments",
      "International outlook",
    ],
    homeowners: [
      "Property investors",
      "Interested in home improvement",
      "Value security and stability",
      "Higher disposable income",
      "Long-term planning mindset",
    ],
    "tech enthusiasts": [
      "Early adopters",
      "Higher spending on gadgets",
      "Follow tech news and trends",
      "Appreciate innovation",
      "Influence others' tech purchases",
    ],
    "students and educators": [
      "Knowledge-seeking",
      "Budget-conscious",
      "Tech-adopters",
      "Value intellectual growth",
      "Community-oriented",
    ],
    "health-conscious individuals": [
      "Preventative health focus",
      "Regular health monitoring",
      "Research health products",
      "Willing to invest in wellbeing",
      "Follow health trends",
    ],
    "elderly individuals": [
      "Value simplicity and reliability",
      "Often have fixed income",
      "Increasing tech adoption",
      "Health-conscious",
      "Value independence",
    ],
    "creative professionals": [
      "Visually oriented",
      "Value unique experiences",
      "Early adopters of creative tools",
      "Portfolio-focused career",
      "Appreciate design and aesthetics",
    ],
    "urban apartment dwellers": [
      "Space-conscious",
      "Convenience-oriented",
      "Often use public transportation",
      "Value community amenities",
      "Mobile-first lifestyle",
    ],
    "frequent travelers": [
      "Experience-seeking",
      "Higher disposable income",
      "Tech-savvy planners",
      "Value convenience on the go",
      "Internationally minded",
    ],
    "outdoor adventurers": [
      "Active lifestyle",
      "Value durability and functionality",
      "Willing to invest in quality gear",
      "Environmental awareness",
      "Community-oriented",
    ],
    "pet owners": [
      "Consider pets as family members",
      "Spend significantly on pet products",
      "Research pet-related purchases",
      "Value pet health and comfort",
      "Engage with pet communities",
    ],
  },

  psychographicsByAudience: {
    "busy professionals": [
      "Achievement-oriented",
      "Status-conscious",
      "Efficiency-driven",
      "Appreciate luxury and convenience",
      "Delegate when possible",
    ],
    "parents with young children": [
      "Child-centered decision making",
      "Seek parenting validation",
      "Value safety and security",
      "Nostalgia-influenced",
      "Desire to be 'good parents'",
    ],
    "fitness enthusiasts": [
      "Goal-oriented mindset",
      "Competitive nature",
      "Body-conscious",
      "Routine-driven",
      "Identity tied to fitness achievements",
    ],
    "environmentally conscious consumers": [
      "Ethical consumption values",
      "Long-term thinking",
      "Concerned about future generations",
      "Research-oriented before purchasing",
      "Willing to sacrifice convenience for principles",
    ],
    "digital nomads": [
      "Value freedom and flexibility",
      "Experience-seeking",
      "Minimalist tendencies",
      "Adaptable to change",
      "Community-oriented despite mobility",
    ],
    homeowners: [
      "Investment-minded",
      "Pride in ownership",
      "DIY interest",
      "Neighborhood-conscious",
      "Value stability and security",
    ],
    "tech enthusiasts": [
      "Innovation-focused",
      "Early adopter mentality",
      "Enjoy learning new systems",
      "Status through latest technology",
      "Community participation in tech forums",
    ],
    "students and educators": [
      "Lifelong learning mindset",
      "Value intellectual growth",
      "Curious and inquisitive",
      "Structured thinking",
      "Value knowledge sharing",
    ],
    "health-conscious individuals": [
      "Prevention-oriented",
      "Self-improvement focus",
      "Research-driven decisions",
      "Holistic health perspective",
      "Willing to invest in wellbeing",
    ],
    "elderly individuals": [
      "Tradition-oriented",
      "Value reliability over novelty",
      "Security-conscious",
      "Legacy-minded",
      "Appreciate personal connection",
    ],
    "creative professionals": [
      "Aesthetically driven",
      "Value originality",
      "Identity tied to creative output",
      "Seek inspiration",
      "Appreciate artistic expression",
    ],
    "urban apartment dwellers": [
      "Value location over space",
      "Experience-oriented lifestyle",
      "Socially connected",
      "Convenience-prioritizing",
      "Adaptable to small spaces",
    ],
    "frequent travelers": [
      "Novelty-seeking",
      "Adaptable to new situations",
      "Value memorable experiences",
      "Efficiency-minded when traveling",
      "Culturally curious",
    ],
    "outdoor adventurers": [
      "Risk-tolerant",
      "Experience-seeking",
      "Nature-connected",
      "Self-reliant",
      "Value authenticity and quality",
    ],
    "pet owners": [
      "Nurturing personality",
      "Emotionally connected to pets",
      "Willing to splurge on pet comfort",
      "Research-oriented for pet products",
      "Community engagement with other pet owners",
    ],
  },

  geographicFocusByCategory: {
    "Home & Kitchen": ["North America", "Western Europe", "Australia", "Urban centers", "Suburban areas"],
    "Beauty & Personal Care": ["Global", "North America", "Europe", "East Asia", "Australia"],
    Electronics: ["Global", "North America", "East Asia", "Western Europe", "Urban centers"],
    "Sports & Outdoors": ["North America", "Europe", "Australia", "Outdoor recreation areas", "Suburban communities"],
    "Health & Wellness": ["North America", "Western Europe", "Australia", "Urban centers", "Affluent communities"],
    "Baby & Kids": ["Global", "North America", "Western Europe", "Australia", "Urban and suburban areas"],
    "Pet Supplies": [
      "North America",
      "Western Europe",
      "Australia",
      "Urban and suburban areas",
      "Pet-friendly communities",
    ],
    "Fashion & Accessories": ["Global", "North America", "Europe", "East Asia", "Urban centers"],
    "Car & Automotive": ["North America", "Europe", "Australia", "Suburban areas", "Commuter regions"],
    "Office & Productivity": ["Global", "North America", "Europe", "Urban centers", "Business districts"],
    "Travel & Luggage": ["Global", "North America", "Europe", "Australia", "Urban centers"],
    "Eco-Friendly Products": [
      "Western Europe",
      "North America",
      "Australia",
      "Urban centers",
      "Progressive communities",
    ],
    "Smart Home": ["North America", "Western Europe", "East Asia", "Urban centers", "Tech-forward communities"],
    "Seasonal Items": [
      "North America",
      "Europe",
      "Australia",
      "Regions with distinct seasons",
      "Holiday-celebrating areas",
    ],
    "Gifts & Novelties": ["Global", "North America", "Western Europe", "Urban centers", "Gift-giving cultures"],
  },

  nicheSpecificsByAudience: {
    "busy professionals":
      "Career-focused individuals with high income but limited time, seeking efficiency and convenience in daily tasks",
    "parents with young children":
      "Adults with children under 12 who prioritize family needs, safety, education, and time-saving solutions",
    "fitness enthusiasts":
      "Health-conscious individuals who regularly exercise and track their fitness progress, seeking optimization and community",
    "environmentally conscious consumers":
      "Individuals who prioritize sustainability in purchasing decisions and lifestyle choices, willing to pay premium for eco-friendly options",
    "digital nomads":
      "Location-independent workers who travel while working remotely, seeking tools for mobility, connectivity, and community",
    homeowners:
      "Property owners interested in home improvement, maintenance, security, and value appreciation of their investment",
    "tech enthusiasts":
      "Early adopters who stay current with technology trends, willing to pay premium for innovative features and cutting-edge design",
    "students and educators":
      "Knowledge-seekers and knowledge-sharers across educational institutions, valuing learning efficiency and information access",
    "health-conscious individuals":
      "People actively monitoring and improving their health through products, diet, exercise, and lifestyle choices",
    "elderly individuals":
      "People over 65 seeking to maintain independence, health, and connection while adapting to technology",
    "creative professionals":
      "Workers in design, art, media, and creative fields seeking tools to enhance their creative output and workflow",
    "urban apartment dwellers":
      "City residents in smaller living spaces seeking to optimize space, convenience, and urban lifestyle benefits",
    "frequent travelers":
      "Individuals who travel regularly for business or pleasure, seeking convenience, experiences, and efficiency while mobile",
    "outdoor adventurers":
      "Active individuals who enjoy hiking, camping, and outdoor sports, seeking durable, functional gear for their activities",
    "pet owners":
      "People with companion animals who prioritize their pets' comfort, health, and happiness, treating them as family members",
  },

  marketingPlatforms: {
    "Home & Kitchen": ["Instagram", "Pinterest", "Facebook", "TikTok", "Google Shopping"],
    "Beauty & Personal Care": ["Instagram", "TikTok", "YouTube", "Pinterest", "Facebook", "Influencer Partnerships"],
    Electronics: ["YouTube", "TikTok", "Instagram", "Google Shopping", "Tech Forums", "Facebook"],
    "Sports & Outdoors": ["Instagram", "YouTube", "Facebook", "TikTok", "Pinterest", "Niche Forums"],
    "Health & Wellness": ["Instagram", "Pinterest", "Facebook Groups", "YouTube", "Health Blogs", "TikTok"],
    "Baby & Kids": ["Instagram", "Facebook", "Pinterest", "Parenting Forums", "YouTube", "TikTok"],
    "Pet Supplies": ["Instagram", "Facebook", "TikTok", "Pinterest", "Pet Forums", "YouTube"],
    "Fashion & Accessories": ["Instagram", "TikTok", "Pinterest", "Facebook", "Fashion Blogs", "Influencer Marketing"],
    "Car & Automotive": ["YouTube", "Facebook", "Instagram", "Automotive Forums", "TikTok", "Google Shopping"],
    "Office & Productivity": ["LinkedIn", "Facebook", "Instagram", "Google Shopping", "YouTube", "Productivity Blogs"],
    "Travel & Luggage": ["Instagram", "Pinterest", "Facebook", "Travel Blogs", "YouTube", "TikTok"],
    "Eco-Friendly Products": ["Instagram", "Pinterest", "Facebook Groups", "Eco Blogs", "TikTok", "YouTube"],
    "Smart Home": ["YouTube", "TikTok", "Instagram", "Tech Forums", "Facebook", "Google Shopping"],
    "Seasonal Items": ["Pinterest", "Instagram", "Facebook", "TikTok", "Google Shopping", "Seasonal Blogs"],
    "Gifts & Novelties": ["Pinterest", "Instagram", "TikTok", "Facebook", "Gift Blogs", "Google Shopping"],
  },

  contentIdeas: {
    "Home & Kitchen": [
      "Before and after organization videos",
      "Time-saving kitchen hacks",
      "Product demonstration videos",
      "Home transformation showcases",
      "Problem-solving tutorials",
    ],
    "Beauty & Personal Care": [
      "Before and after transformations",
      "Step-by-step tutorials",
      "Product reviews by influencers",
      "Comparison videos",
      "Quick beauty hacks",
    ],
    Electronics: [
      "Unboxing videos",
      "Feature demonstrations",
      "Comparison with alternatives",
      "Problem-solving tutorials",
      "Tech tips and tricks",
    ],
    "Sports & Outdoors": [
      "Product in action videos",
      "Before and after fitness results",
      "Outdoor adventure showcases",
      "Expert testimonials",
      "How-to tutorials",
    ],
    "Health & Wellness": [
      "Before and after results",
      "Expert endorsements",
      "Day-in-the-life with product",
      "Educational content about health benefits",
      "User testimonials",
    ],
    "Baby & Kids": [
      "Parenting hack videos",
      "Problem-solving demonstrations",
      "Safety feature highlights",
      "Parent testimonials",
      "Day-in-the-life with product",
    ],
    "Pet Supplies": [
      "Cute pet videos using product",
      "Before and after results",
      "Problem-solving demonstrations",
      "Pet owner testimonials",
      "Day-in-the-life with product",
    ],
    "Fashion & Accessories": [
      "Styling tutorials",
      "Outfit inspiration",
      "Unboxing videos",
      "Product quality close-ups",
      "Influencer showcases",
    ],
    "Car & Automotive": [
      "Installation tutorials",
      "Before and after transformations",
      "Problem-solving demonstrations",
      "Feature highlights",
      "Comparison videos",
    ],
    "Office & Productivity": [
      "Desk setup inspiration",
      "Organization before and after",
      "Productivity hack videos",
      "Work-from-home setups",
      "Time-saving demonstrations",
    ],
    "Travel & Luggage": [
      "Packing tutorials",
      "Travel hack videos",
      "Product durability demonstrations",
      "Space-saving showcases",
      "Travel experience with product",
    ],
    "Eco-Friendly Products": [
      "Environmental impact education",
      "Sustainable lifestyle tips",
      "Before and after waste reduction",
      "Product lifecycle explanations",
      "Eco-friendly home tours",
    ],
    "Smart Home": [
      "Setup tutorials",
      "Feature demonstrations",
      "Smart home transformation videos",
      "Problem-solving tutorials",
      "Integration with other devices",
    ],
    "Seasonal Items": [
      "Seasonal decoration inspiration",
      "Holiday preparation tips",
      "Festive atmosphere creation",
      "Seasonal problem-solving",
      "Holiday tradition showcases",
    ],
    "Gifts & Novelties": [
      "Reaction videos",
      "Gift unboxing",
      "Creative use demonstrations",
      "Gift guide inclusions",
      "Unique feature showcases",
    ],
  },

  advertisingApproaches: {
    "Home & Kitchen":
      "Showcase before-and-after transformations and time-saving benefits with clean, aspirational home settings",
    "Beauty & Personal Care":
      "Highlight transformative results with before-and-after imagery and authentic user testimonials",
    Electronics: "Focus on innovative features and problem-solving capabilities with sleek, modern visual presentation",
    "Sports & Outdoors": "Demonstrate products in action with dynamic imagery and emphasis on performance enhancement",
    "Health & Wellness":
      "Emphasize health benefits and improved quality of life with clean, professional medical aesthetic",
    "Baby & Kids": "Highlight safety features and developmental benefits with warm, family-oriented imagery",
    "Pet Supplies":
      "Feature adorable pet content with emotional appeal and focus on pet happiness and owner convenience",
    "Fashion & Accessories": "Showcase style versatility and premium quality with aspirational lifestyle imagery",
    "Car & Automotive": "Emphasize ease of installation and practical benefits with clear demonstration videos",
    "Office & Productivity": "Focus on organization and efficiency gains with clean, professional aesthetic",
    "Travel & Luggage":
      "Highlight convenience and durability with aspirational travel imagery and practical demonstrations",
    "Eco-Friendly Products": "Emphasize environmental impact and sustainable materials with natural, clean aesthetic",
    "Smart Home": "Showcase convenience and modern lifestyle with tech-forward, minimalist presentation",
    "Seasonal Items": "Create emotional connection to seasonal traditions with warm, festive imagery",
    "Gifts & Novelties": "Focus on uniqueness and recipient reactions with fun, engaging presentation style",
  },

  adCostEstimates: {
    low: {
      startup: "$300-500",
      monthly: "$200-400",
    },
    medium: {
      startup: "$500-1,000",
      monthly: "$400-800",
    },
    high: {
      startup: "$1,000-2,500",
      monthly: "$800-1,500",
    },
  },

  sellingPointsByCategory: {
    "Home & Kitchen": [
      "Space-saving design",
      "Time-saving functionality",
      "Durable construction",
      "Elegant appearance",
      "Multifunctional use",
    ],
    "Beauty & Personal Care": [
      "Professional-grade results",
      "Time-saving application",
      "Gentle on skin/hair",
      "Long-lasting effects",
      "Travel-friendly design",
    ],
    Electronics: [
      "Innovative technology",
      "Universal compatibility",
      "Long battery life",
      "Premium build quality",
      "Space-saving design",
    ],
    "Sports & Outdoors": [
      "Performance enhancement",
      "Durable construction",
      "Comfortable use",
      "Weather resistance",
      "Portable design",
    ],
    "Health & Wellness": [
      "Clinically supported benefits",
      "Easy daily use",
      "Noticeable results",
      "Comfortable design",
      "Premium quality materials",
    ],
    "Baby & Kids": [
      "Child safety features",
      "Developmental benefits",
      "Easy to clean",
      "Durable construction",
      "Parent-friendly design",
    ],
    "Pet Supplies": [
      "Improved pet comfort",
      "Durable construction",
      "Easy to clean",
      "Time-saving for owners",
      "Veterinarian recommended",
    ],
    "Fashion & Accessories": [
      "Versatile styling options",
      "Premium materials",
      "Comfortable wear",
      "Unique design",
      "Durable construction",
    ],
    "Car & Automotive": [
      "Easy installation",
      "Universal fit",
      "Durable construction",
      "Enhanced driving experience",
      "Space-saving design",
    ],
    "Office & Productivity": [
      "Increased efficiency",
      "Space optimization",
      "Ergonomic benefits",
      "Professional appearance",
      "Durable construction",
    ],
    "Travel & Luggage": [
      "Space-saving design",
      "Lightweight construction",
      "Durable materials",
      "Convenient features",
      "Stylish appearance",
    ],
    "Eco-Friendly Products": [
      "Reduced environmental impact",
      "Sustainable materials",
      "Durable construction",
      "Chemical-free composition",
      "Ethical manufacturing",
    ],
    "Smart Home": [
      "Convenience automation",
      "Energy savings",
      "Remote control capability",
      "Easy installation",
      "Compatibility with other devices",
    ],
    "Seasonal Items": [
      "High-quality construction",
      "Unique design",
      "Reusable for multiple seasons",
      "Space-saving storage",
      "Enhanced seasonal experience",
    ],
    "Gifts & Novelties": [
      "Unique conversation starter",
      "High-quality construction",
      "Memorable gift experience",
      "Practical functionality",
      "Attractive packaging",
    ],
  },
}

// Generate a random dropshipping product by combining components
export function generateDropshippingProduct(): DropshippingProduct {
  const productType = getRandomElement(productComponents.productTypes)
  const productFeature = getRandomElement(productComponents.productFeatures)
  const audience = getRandomElement(productComponents.audiences)
  const category = getRandomElement(productComponents.categories)
  const niche = getRandomElement(productComponents.niches[category] || ["General"])
  const marketPotential = getRandomElement(productComponents.marketPotentials)

  // Generate a product name
  const namePrefix = getProductNamePrefix()
  const nameSuffix = getProductNameSuffix()
  const name = `${namePrefix} ${nameSuffix}`

  // Create short description
  const shortDescription = `A ${productFeature.toLowerCase()} ${productType.toLowerCase()} designed for ${audience.toLowerCase()}.`

  // Create problem-solution description
  const problemSolution = `${capitalizeFirstLetter(audience)} struggle with traditional ${productType}. This product provides an innovative solution through its ${productFeature.toLowerCase()}, making it perfect for daily use.`

  // Generate SEO keywords based on category
  const categoryKeywords = productComponents.keywordsByCategory[category] || []
  const seoKeywords = getRandomSubset(categoryKeywords, 5)

  // Add audience and product-specific keywords
  seoKeywords.push(`${audience} ${productType.split(" ")[0]}`)
  seoKeywords.push(`${productFeature.split(" ")[0]} ${productType}`)

  // Generate competition level
  const competitionLevel = getRandomElement(productComponents.competitionLevels)

  // Generate search volume
  const searchVolume = getRandomElement(productComponents.searchVolumes)

  // Generate trends (2-3 relevant trends)
  const trends = generateTrends(2 + Math.floor(Math.random() * 2))

  // Generate key features based on category
  const categoryFeatures = productComponents.featuresByCategory[category] || []
  const keyFeatures = getRandomSubset(categoryFeatures, 4 + Math.floor(Math.random() * 3))

  // Generate detailed target audience
  const ageRange = productComponents.ageRangesByAudience[audience] || "25-45"
  const socialCharacteristics = getRandomSubset(productComponents.socialCharacteristicsByAudience[audience] || [], 3)
  const psychographics = getRandomSubset(productComponents.psychographicsByAudience[audience] || [], 3)
  const geographicFocus = getRandomSubset(productComponents.geographicFocusByCategory[category] || ["Global"], 2)
  const nicheSpecifics = productComponents.nicheSpecificsByAudience[audience] || ""

  // Generate pricing information
  const priceRange = getRandomElement(Object.keys(productComponents.priceRanges)) as
    | "low"
    | "medium"
    | "high"
    | "premium"
  const prices = productComponents.priceRanges[priceRange]

  // Generate supplier information
  const supplierRegions = getRandomSubset(productComponents.supplierRegions, 2)
  const shippingTime = getRandomElement(productComponents.shippingTimes)
  const moq = getRandomElement(productComponents.moqRanges)
  const qualityRating = getRandomElement(productComponents.qualityRatings)
  const reliabilityRating = getRandomElement(productComponents.reliabilityRatings)

  // Generate marketing strategy
  const bestPlatforms = getRandomSubset(productComponents.marketingPlatforms[category] || [], 4)
  const contentIdeas = getRandomSubset(productComponents.contentIdeas[category] || [], 3)
  const advertisingApproach = productComponents.advertisingApproaches[category] || ""
  const adCostLevel = priceRange === "premium" ? "high" : priceRange === "low" ? "low" : "medium"
  const adCosts = productComponents.adCostEstimates[adCostLevel as "low" | "medium" | "high"]
  const sellingPoints = getRandomSubset(productComponents.sellingPointsByCategory[category] || [], 4)

  return {
    id: generateId(),
    name,
    category,
    niche,
    shortDescription,
    problemSolution,
    targetAudience: capitalizeFirstLetter(audience),

    // Pricing information
    supplierPrice: prices.supplierPrice,
    retailPrice: prices.retailPrice,
    customerPrice: prices.customerPrice,
    profitMargin: prices.profitMargin,

    // Supplier information
    supplierInfo: {
      regions: supplierRegions,
      shippingTime,
      moq,
      qualityRating,
      reliabilityRating,
    },

    // SEO and market analysis
    seoKeywords,
    searchVolume,
    competitionLevel,
    trends,
    keyFeatures,

    // Detailed target audience
    targetAudienceDetails: {
      ageRange,
      socialCharacteristics,
      psychographics,
      geographicFocus,
      nicheSpecifics,
    },

    // Marketing strategy
    marketingStrategy: {
      bestPlatforms,
      contentIdeas,
      advertisingApproach,
      estimatedAdCost: adCosts,
      sellingPoints,
    },
  }
}

// Filter products based on criteria
export function filterProducts(products: DropshippingProduct[], filter: ProductFilter): DropshippingProduct[] {
  return products.filter((product) => {
    // Filter by category
    if (filter.category && product.category !== filter.category) {
      return false
    }

    // Filter by niche
    if (filter.niche && product.niche !== filter.niche) {
      return false
    }

    // Filter by price range
    if (filter.priceRange) {
      const supplierPrice = product.supplierPrice.replace(/[^0-9-]/g, "")
      const [minPrice, maxPrice] = supplierPrice.split("-").map(Number)
      const avgPrice = (minPrice + maxPrice) / 2

      if (filter.priceRange === "low" && avgPrice > 5) return false
      if (filter.priceRange === "medium" && (avgPrice <= 5 || avgPrice > 15)) return false
      if (filter.priceRange === "high" && avgPrice <= 15) return false
    }

    // Filter by profit margin
    if (filter.profitMargin) {
      const margin = product.profitMargin.replace(/[^0-9-]/g, "")
      const [minMargin, maxMargin] = margin.split("-").map(Number)
      const avgMargin = (minMargin + maxMargin) / 2

      if (filter.profitMargin === "low" && avgMargin > 50) return false
      if (filter.profitMargin === "medium" && (avgMargin <= 50 || avgMargin > 70)) return false
      if (filter.profitMargin === "high" && avgMargin <= 70) return false
    }

    // Filter by competition level
    if (filter.competitionLevel) {
      if (filter.competitionLevel === "low" && !product.competitionLevel.toLowerCase().includes("low")) return false
      if (filter.competitionLevel === "medium" && !product.competitionLevel.toLowerCase().includes("moderate"))
        return false
      if (filter.competitionLevel === "high" && !product.competitionLevel.toLowerCase().includes("high")) return false
    }

    // Filter by search volume
    if (filter.searchVolume) {
      if (filter.searchVolume === "low" && !product.searchVolume.toLowerCase().includes("niche")) return false
      if (filter.searchVolume === "medium" && !product.searchVolume.toLowerCase().includes("medium")) return false
      if (filter.searchVolume === "high" && !product.searchVolume.toLowerCase().includes("high")) return false
    }

    // Filter by target age group
    if (filter.targetAgeGroup) {
      const ageRange = product.targetAudienceDetails.ageRange
      if (!ageRangeMatches(ageRange, filter.targetAgeGroup)) {
        return false
      }
    }

    // Filter by geographic region
    if (filter.geographicRegion) {
      if (!product.targetAudienceDetails.geographicFocus.includes(filter.geographicRegion)) {
        return false
      }
    }

    return true
  })
}

// Helper function to check if age ranges overlap
function ageRangeMatches(ageRange: string, filterRange: string): boolean {
  // Handle special cases
  if (ageRange.includes("+") || filterRange.includes("+")) {
    const ageMin = Number.parseInt(ageRange.split("-")[0].split("+")[0])
    const filterMin = Number.parseInt(filterRange.split("-")[0].split("+")[0])

    if (ageRange.includes("+") && filterRange.includes("+")) {
      return true // Both are 65+ or similar
    } else if (ageRange.includes("+")) {
      return ageMin <= Number.parseInt(filterRange.split("-")[1])
    } else if (filterRange.includes("+")) {
      return filterMin <= Number.parseInt(ageRange.split("-")[1])
    }
  }

  // Normal range comparison
  const [ageMin, ageMax] = ageRange.split("-").map((n) => Number.parseInt(n))
  const [filterMin, filterMax] = filterRange.split("-").map((n) => Number.parseInt(n))

  return ageMin <= filterMax && ageMax >= filterMin
}

// Helper functions
function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

function getRandomSubset<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, Math.min(count, array.length))
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function getProductNamePrefix(): string {
  const prefixes = [
    "Pro",
    "Ultra",
    "Smart",
    "Eco",
    "Flex",
    "Max",
    "Lite",
    "Elite",
    "Prime",
    "Swift",
    "Zen",
    "Boost",
    "Ergo",
    "Luxe",
    "Nano",
    "Mega",
    "Turbo",
    "Vital",
    "Sleek",
    "Cozy",
  ]
  return getRandomElement(prefixes)
}

function getProductNameSuffix(): string {
  const suffixes = [
    "Organizer",
    "Holder",
    "Stand",
    "Charger",
    "Tracker",
    "Massager",
    "Pillow",
    "Bottle",
    "Lamp",
    "Bag",
    "Case",
    "Pad",
    "Cleaner",
    "Brush",
    "Gadget",
    "Adapter",
    "Dispenser",
    "Diffuser",
    "Cushion",
    "Rack",
  ]
  return getRandomElement(suffixes)
}

function generateTrends(count: number) {
  const trends = []
  const usedNames = new Set()

  for (let i = 0; i < count; i++) {
    let trendName
    do {
      trendName = getRandomElement(productComponents.trendNames)
    } while (usedNames.has(trendName))

    usedNames.add(trendName)
    const direction = getRandomElement(productComponents.trendDirections)
    const description = getRandomElement(productComponents.trendDescriptions[direction])

    trends.push({
      name: trendName,
      direction,
      description,
    })
  }

  return trends
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 15)
}
