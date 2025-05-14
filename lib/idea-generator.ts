import type { BusinessIdea, IdeaFilter } from "./types"

// Business components that will be mixed and matched
const businessComponents = {
  problems: [
    "difficulty tracking multiple subscriptions",
    "food waste from meal planning",
    "maintaining focus while working from home",
    "inconsistent workout routines",
    "managing digital privacy across devices",
    "finding reliable childcare on short notice",
    "tracking home maintenance tasks",
    "organizing digital files across platforms",
    "managing personal finances effectively",
    "finding time for skill development",
    "coordinating schedules in busy families",
    "maintaining social connections remotely",
    "reducing plastic waste in daily life",
    "finding affordable mental health resources",
    "managing chronic health conditions",
  ],

  solutions: [
    "AI-powered platform",
    "subscription service",
    "mobile application",
    "IoT device network",
    "marketplace connecting users",
    "browser extension",
    "smart home integration",
    "wearable technology",
    "community-based platform",
    "blockchain-based system",
    "augmented reality tool",
    "voice-activated assistant",
    "personalized recommendation engine",
    "on-demand service",
    "educational platform",
  ],

  audiences: [
    "remote workers",
    "busy professionals",
    "parents with young children",
    "fitness enthusiasts",
    "environmentally conscious consumers",
    "digital nomads",
    "homeowners",
    "small business owners",
    "students and educators",
    "healthcare patients",
    "elderly individuals",
    "creative professionals",
    "urban apartment dwellers",
    "frequent travelers",
    "tech-savvy millennials",
  ],

  revenueModels: [
    "freemium with premium features",
    "subscription-based pricing tiers",
    "transaction fees on marketplace",
    "one-time purchase with optional add-ons",
    "advertising and sponsored content",
    "white-label licensing to businesses",
    "usage-based pricing",
    "affiliate marketing commissions",
    "enterprise contracts",
    "hardware sales with software service",
    "data insights monetization (privacy-focused)",
    "crowdfunding with backer rewards",
    "membership community model",
    "pay-what-you-want with suggested pricing",
    "bundled services package",
  ],

  categories: [
    "FinTech",
    "HealthTech",
    "EdTech",
    "FoodTech",
    "CleanTech",
    "Smart Home",
    "Productivity",
    "Wellness",
    "E-commerce",
    "Social Impact",
    "Entertainment",
    "Transportation",
    "Remote Work",
    "Sustainability",
    "Family Tech",
  ],

  marketPotentials: ["Emerging Market", "High Growth", "Steady Demand", "Untapped Niche", "Expanding Sector"],

  competitiveAdvantages: [
    "proprietary algorithm providing personalized recommendations",
    "unique combination of hardware and software solution",
    "network effects from community-driven approach",
    "seamless integration with existing platforms and services",
    "patentable technology with significant barriers to entry",
    "first-mover advantage in an emerging market segment",
    "strategic partnerships with established industry players",
    "data-driven insights unavailable to competitors",
    "significantly lower cost structure than alternatives",
    "superior user experience based on extensive research",
    "comprehensive solution where competitors only solve part of the problem",
    "sustainability focus appealing to growing conscious consumer base",
    "unique approach to privacy and data security",
    "scalable business model with low marginal costs",
    "cross-platform compatibility where competitors are limited",
  ],

  // SEO and market analysis
  keywordsByCategory: {
    FinTech: [
      "personal finance",
      "budget app",
      "investment platform",
      "financial planning",
      "expense tracker",
      "banking alternative",
      "money management",
      "wealth tech",
    ],
    HealthTech: [
      "health monitoring",
      "telemedicine",
      "fitness tracking",
      "mental wellness",
      "nutrition planning",
      "sleep improvement",
      "medical records",
      "remote healthcare",
    ],
    EdTech: [
      "online learning",
      "skill development",
      "educational platform",
      "remote education",
      "language learning",
      "professional certification",
      "tutoring service",
      "knowledge management",
    ],
    FoodTech: [
      "meal planning",
      "food delivery",
      "recipe management",
      "nutrition tracking",
      "sustainable food",
      "grocery optimization",
      "food waste reduction",
      "diet planning",
    ],
    CleanTech: [
      "renewable energy",
      "sustainable solutions",
      "carbon footprint",
      "eco-friendly products",
      "green technology",
      "environmental impact",
      "waste reduction",
      "clean energy",
    ],
    "Smart Home": [
      "home automation",
      "smart devices",
      "connected home",
      "iot platform",
      "voice control",
      "energy management",
      "smart security",
      "home monitoring",
    ],
    Productivity: [
      "task management",
      "time tracking",
      "workflow optimization",
      "project management",
      "focus improvement",
      "productivity tools",
      "distraction blocking",
      "efficiency solutions",
    ],
    Wellness: [
      "mental health",
      "meditation app",
      "stress reduction",
      "self-care platform",
      "wellness tracking",
      "holistic health",
      "mindfulness practice",
      "wellness community",
    ],
    "E-commerce": [
      "online marketplace",
      "direct to consumer",
      "subscription box",
      "product discovery",
      "personalized shopping",
      "social commerce",
      "retail technology",
      "shopping assistant",
    ],
    "Social Impact": [
      "community support",
      "social good",
      "nonprofit technology",
      "sustainable development",
      "ethical business",
      "community building",
      "social enterprise",
      "impact measurement",
    ],
    Entertainment: [
      "content streaming",
      "interactive media",
      "digital entertainment",
      "content creation",
      "media platform",
      "entertainment subscription",
      "creative tools",
      "digital experiences",
    ],
    Transportation: [
      "mobility solutions",
      "transportation alternatives",
      "commute optimization",
      "ride sharing",
      "vehicle management",
      "travel planning",
      "logistics platform",
      "transportation efficiency",
    ],
    "Remote Work": [
      "distributed teams",
      "remote collaboration",
      "virtual office",
      "work from home",
      "digital nomad",
      "remote productivity",
      "team management",
      "virtual collaboration",
    ],
    Sustainability: [
      "eco-friendly solutions",
      "sustainable living",
      "green alternatives",
      "environmental impact",
      "carbon reduction",
      "ethical consumption",
      "circular economy",
      "sustainable practices",
    ],
    "Family Tech": [
      "parenting tools",
      "family management",
      "childcare solutions",
      "family scheduling",
      "kid-friendly technology",
      "family safety",
      "education for children",
      "family communication",
    ],
  },

  competitionLevels: [
    "Low - Few direct competitors in this specific niche",
    "Moderate - Some established players but room for innovation",
    "High - Crowded market requiring strong differentiation",
    "Emerging - New category with early competitors forming",
    "Fragmented - Many small players without dominant leaders",
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
    "Remote work adoption",
    "Subscription economy",
    "Privacy concerns",
    "Sustainability focus",
    "Mental health awareness",
    "AI and automation",
    "Voice technology",
    "Mobile-first services",
    "Personalization",
    "Community-based solutions",
    "On-demand economy",
    "Digital wellness",
    "Contactless technology",
    "Data ownership",
    "Micro-entrepreneurship",
  ],

  trendDescriptions: {
    up: [
      "Rapidly growing trend with increasing consumer adoption",
      "Significant year-over-year growth in this sector",
      "Accelerating interest from both users and investors",
      "Expanding market with new segments emerging",
      "Strong upward trajectory predicted to continue",
    ],
    down: [
      "Declining interest as newer alternatives emerge",
      "Gradually being replaced by more innovative solutions",
      "Facing challenges from changing consumer preferences",
      "Market saturation leading to consolidation",
      "Regulatory changes impacting growth potential",
    ],
    stable: [
      "Consistent demand with predictable growth patterns",
      "Mature market with established user expectations",
      "Reliable interest providing steady business opportunity",
      "Evergreen need with consistent search patterns",
      "Stable market with predictable seasonal variations",
    ],
  },

  featuresByCategory: {
    FinTech: [
      "Automated expense categorization",
      "Financial goal setting and tracking",
      "Bill payment reminders and automation",
      "Investment portfolio analysis",
      "Budget visualization and reporting",
      "Bank account integration and synchronization",
      "Subscription management and optimization",
      "Financial education resources",
    ],
    HealthTech: [
      "Health metrics tracking and visualization",
      "Personalized wellness recommendations",
      "Medication management and reminders",
      "Telehealth consultation scheduling",
      "Exercise routine generation",
      "Sleep quality analysis",
      "Nutrition tracking and meal planning",
      "Mental wellness assessment tools",
    ],
    EdTech: [
      "Personalized learning paths",
      "Progress tracking and visualization",
      "Interactive learning materials",
      "Peer collaboration tools",
      "Expert mentorship matching",
      "Certification and credential management",
      "Adaptive learning algorithms",
      "Knowledge retention optimization",
    ],
    FoodTech: [
      "Recipe recommendation based on ingredients",
      "Meal planning calendar",
      "Grocery list generation",
      "Nutrition analysis and tracking",
      "Food waste reduction suggestions",
      "Dietary restriction accommodation",
      "Local food source mapping",
      "Expiration date tracking",
    ],
    CleanTech: [
      "Carbon footprint calculation",
      "Sustainable alternative recommendations",
      "Energy usage optimization",
      "Recycling guidance and tracking",
      "Green product verification",
      "Environmental impact reporting",
      "Sustainable habit formation tools",
      "Community environmental challenges",
    ],
    "Smart Home": [
      "Device integration and management",
      "Automated routines and scenes",
      "Energy usage monitoring and optimization",
      "Voice command customization",
      "Security monitoring and alerts",
      "Remote access and control",
      "Occupancy-based automation",
      "Environmental comfort optimization",
    ],
    Productivity: [
      "Task prioritization algorithms",
      "Focus session timing and tracking",
      "Workflow automation tools",
      "Progress visualization",
      "Distraction blocking mechanisms",
      "Calendar optimization",
      "Team collaboration features",
      "Productivity analytics and insights",
    ],
    Wellness: [
      "Guided meditation sessions",
      "Mood tracking and analysis",
      "Stress reduction exercises",
      "Sleep quality improvement tools",
      "Habit formation assistance",
      "Mindfulness reminders and practices",
      "Community support networks",
      "Personalized wellness recommendations",
    ],
    "E-commerce": [
      "Personalized product recommendations",
      "Price tracking and alerts",
      "Inventory management",
      "Customer relationship management",
      "Automated marketing tools",
      "Social selling integration",
      "Subscription management",
      "Loyalty program administration",
    ],
    "Social Impact": [
      "Impact measurement and reporting",
      "Volunteer matching and management",
      "Donation processing and tracking",
      "Community engagement tools",
      "Cause awareness campaigns",
      "Resource sharing networks",
      "Ethical sourcing verification",
      "Social good marketplace",
    ],
    Entertainment: [
      "Content recommendation algorithms",
      "Creator monetization tools",
      "Interactive viewing experiences",
      "Community discussion forums",
      "Content library management",
      "Personalized content feeds",
      "Cross-platform synchronization",
      "User-generated content tools",
    ],
    Transportation: [
      "Route optimization algorithms",
      "Multi-modal transportation planning",
      "Real-time traffic integration",
      "Ride sharing coordination",
      "Vehicle maintenance tracking",
      "Carbon emission calculation",
      "Commute cost analysis",
      "Transportation alternative comparison",
    ],
    "Remote Work": [
      "Virtual office environment",
      "Asynchronous communication tools",
      "Project management integration",
      "Time zone coordination",
      "Remote team building activities",
      "Work-life boundary management",
      "Productivity tracking and analysis",
      "Digital nomad resource mapping",
    ],
    Sustainability: [
      "Sustainable product verification",
      "Eco-friendly alternative suggestions",
      "Carbon offset integration",
      "Circular economy marketplace",
      "Environmental impact tracking",
      "Community sustainability challenges",
      "Ethical brand directory",
      "Waste reduction tools",
    ],
    "Family Tech": [
      "Family calendar synchronization",
      "Chore assignment and tracking",
      "Location sharing and safety alerts",
      "Educational content curation",
      "Family photo and memory management",
      "Childcare coordination tools",
      "Family budget management",
      "Kid-friendly content filters",
    ],
  },

  // Detailed target audience
  ageRangesByAudience: {
    "remote workers": "25-45",
    "busy professionals": "30-55",
    "parents with young children": "28-45",
    "fitness enthusiasts": "18-40",
    "environmentally conscious consumers": "22-50",
    "digital nomads": "25-40",
    homeowners: "30-65",
    "small business owners": "35-60",
    "students and educators": "18-65",
    "healthcare patients": "35-75",
    "elderly individuals": "65+",
    "creative professionals": "25-45",
    "urban apartment dwellers": "22-38",
    "frequent travelers": "28-55",
    "tech-savvy millennials": "25-40",
  },

  socialCharacteristicsByAudience: {
    "remote workers": [
      "Tech-oriented professionals",
      "Value work-life balance",
      "Comfortable with digital tools",
      "Often have higher education",
      "Value flexibility and autonomy",
    ],
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
    "small business owners": [
      "Entrepreneurial mindset",
      "Time-constrained decision makers",
      "Value cost-effective solutions",
      "Networking-oriented",
      "Wear multiple hats professionally",
    ],
    "students and educators": [
      "Knowledge-seeking",
      "Budget-conscious",
      "Tech-adopters",
      "Value intellectual growth",
      "Community-oriented",
    ],
    "healthcare patients": [
      "Health-conscious",
      "Regular medical interactions",
      "Value privacy and security",
      "Seeking improved quality of life",
      "Often research health information",
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
    "tech-savvy millennials": [
      "Digital natives",
      "Early technology adopters",
      "Value authenticity and transparency",
      "Experience-oriented",
      "Socially conscious consumers",
    ],
  },

  psychographicsByAudience: {
    "remote workers": [
      "Value autonomy and self-direction",
      "Seek work-life integration",
      "Productivity-focused",
      "Appreciate digital community",
      "Value distraction-free environments",
    ],
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
    "small business owners": [
      "Risk-tolerant",
      "Self-reliant",
      "Growth-oriented",
      "Value control and autonomy",
      "Pragmatic decision-makers",
    ],
    "students and educators": [
      "Lifelong learning mindset",
      "Value intellectual growth",
      "Curious and inquisitive",
      "Structured thinking",
      "Value knowledge sharing",
    ],
    "healthcare patients": [
      "Health-anxious",
      "Information-seeking",
      "Value expert opinions",
      "Concerned with privacy",
      "Desire for control over health outcomes",
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
    "tech-savvy millennials": [
      "Digital-first mindset",
      "Value authenticity",
      "Skeptical of traditional institutions",
      "Experience over ownership",
      "Socially conscious purchasing",
    ],
  },

  geographicFocusByCategory: {
    FinTech: ["North America", "Western Europe", "Australia", "Singapore", "Hong Kong"],
    HealthTech: ["United States", "Canada", "United Kingdom", "Germany", "Scandinavia"],
    EdTech: ["Global", "United States", "China", "India", "Brazil"],
    FoodTech: ["Urban centers", "North America", "Western Europe", "Australia", "Japan"],
    CleanTech: ["Scandinavia", "Western Europe", "Coastal United States", "Canada", "Australia"],
    "Smart Home": ["United States", "South Korea", "Japan", "Germany", "United Kingdom"],
    Productivity: ["Global", "United States", "Canada", "United Kingdom", "Australia"],
    Wellness: ["United States", "Canada", "Australia", "Western Europe", "Scandinavia"],
    "E-commerce": ["Global", "United States", "China", "United Kingdom", "Germany"],
    "Social Impact": ["Global", "United States", "Western Europe", "Canada", "Australia"],
    Entertainment: ["Global", "United States", "South Korea", "Japan", "Western Europe"],
    Transportation: ["Urban centers", "United States", "China", "Western Europe", "Japan"],
    "Remote Work": ["United States", "Canada", "Western Europe", "Australia", "Digital nomad hubs"],
    Sustainability: ["Scandinavia", "Western Europe", "Coastal United States", "Canada", "Australia"],
    "Family Tech": ["United States", "Canada", "Western Europe", "Australia", "Japan"],
  },

  nicheSpecificsByAudience: {
    "remote workers":
      "Professionals seeking tools to enhance productivity and work-life balance while working outside traditional office environments",
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
    "small business owners":
      "Entrepreneurs and small company leaders seeking cost-effective solutions to compete with larger businesses",
    "students and educators":
      "Knowledge-seekers and knowledge-sharers across educational institutions, valuing learning efficiency and information access",
    "healthcare patients":
      "Individuals managing health conditions who interact regularly with healthcare systems, seeking better health outcomes and information",
    "elderly individuals":
      "People over 65 seeking to maintain independence, health, and connection while adapting to technology",
    "creative professionals":
      "Workers in design, art, media, and creative fields seeking tools to enhance their creative output and workflow",
    "urban apartment dwellers":
      "City residents in smaller living spaces seeking to optimize space, convenience, and urban lifestyle benefits",
    "frequent travelers":
      "Individuals who travel regularly for business or pleasure, seeking convenience, experiences, and efficiency while mobile",
    "tech-savvy millennials":
      "25-40 year olds who are early adopters of technology, value experiences over possessions, and make digitally-informed decisions",
  },

  // Business planning
  businessStrategies: [
    "Differentiation through superior user experience and design",
    "Cost leadership with efficient operations and scalable technology",
    "Niche focus targeting underserved segment with specialized features",
    "First-mover advantage in emerging market category",
    "Platform strategy creating network effects between users",
    "Freemium model to drive adoption with premium upsell",
    "Strategic partnerships with established industry players",
    "Content marketing leadership establishing thought expertise",
    "Community-building approach creating loyal user base",
    "Data-driven advantage through proprietary algorithms",
    "Vertical integration controlling key aspects of value chain",
    "Subscription model creating predictable recurring revenue",
    "Marketplace strategy connecting supply and demand sides",
    "Open ecosystem approach encouraging third-party development",
    "Social impact focus aligning business with meaningful cause",
  ],

  marketingStrategies: {
    FinTech:
      "Focus on security, reliability and financial benefits with data-driven case studies showing concrete savings or returns",
    HealthTech:
      "Emphasize improved health outcomes and quality of life with testimonials and expert endorsements from healthcare professionals",
    EdTech:
      "Highlight learning effectiveness and outcomes with before/after success stories and educational institution partnerships",
    FoodTech:
      "Showcase convenience, health benefits, and sustainability with visual content featuring appetizing food and lifestyle integration",
    CleanTech:
      "Center on environmental impact and cost savings with comparative metrics showing ecological and financial benefits",
    "Smart Home":
      "Demonstrate convenience, security, and modern lifestyle with video demonstrations of seamless home automation",
    Productivity:
      "Focus on time savings and efficiency gains with case studies showing measurable productivity improvements",
    Wellness:
      "Emphasize holistic benefits and self-improvement with aspirational content and expert-backed wellness advice",
    "E-commerce":
      "Highlight product discovery and shopping experience with personalized recommendations and frictionless purchasing",
    "Social Impact":
      "Center on mission and community impact with stories of positive change and transparent impact reporting",
    Entertainment:
      "Showcase content quality and unique experiences with previews and user testimonials about engagement",
    Transportation: "Focus on convenience, reliability, and time savings with real-world examples of improved mobility",
    "Remote Work":
      "Emphasize flexibility, productivity, and work-life balance with remote success stories and team collaboration examples",
    Sustainability:
      "Center on environmental impact and conscious consumption with transparent sustainability metrics and certifications",
    "Family Tech":
      "Focus on family benefits, safety, and time savings with relatable family scenarios and parenting expert endorsements",
  },

  marketingChannels: {
    FinTech: [
      "Search engine marketing",
      "Financial publications",
      "LinkedIn advertising",
      "Financial advisor partnerships",
      "Webinars and educational content",
    ],
    HealthTech: [
      "Healthcare professional partnerships",
      "Health publications",
      "Patient communities",
      "Wellness influencers",
      "Targeted social media",
    ],
    EdTech: [
      "Educational institution partnerships",
      "Teacher communities",
      "Student organizations",
      "LinkedIn advertising",
      "Educational conferences",
    ],
    FoodTech: [
      "Food influencers",
      "Recipe websites",
      "Instagram advertising",
      "Cooking shows partnerships",
      "Grocery store partnerships",
    ],
    CleanTech: [
      "Environmental publications",
      "Sustainability influencers",
      "Green business certifications",
      "Industry trade shows",
      "Corporate sustainability partnerships",
    ],
    "Smart Home": [
      "Tech review sites",
      "Home improvement retailers",
      "YouTube demonstrations",
      "Smart home expos",
      "Interior design partnerships",
    ],
    Productivity: [
      "Business publications",
      "Professional organizations",
      "LinkedIn advertising",
      "Productivity podcasts",
      "Workplace integration partnerships",
    ],
    Wellness: [
      "Health and wellness influencers",
      "Fitness apps partnerships",
      "Instagram advertising",
      "Wellness retreats",
      "Healthcare provider partnerships",
    ],
    "E-commerce": [
      "Shopping influencers",
      "Google Shopping",
      "Instagram and Pinterest advertising",
      "Retail partnerships",
      "Comparison shopping engines",
    ],
    "Social Impact": [
      "Cause-related partnerships",
      "Impact investors",
      "Social media advocacy",
      "NGO collaborations",
      "Purpose-driven communities",
    ],
    Entertainment: [
      "Social media advertising",
      "Entertainment influencers",
      "Content platforms",
      "Event sponsorships",
      "Fan communities",
    ],
    Transportation: [
      "Urban advertising",
      "Travel publications",
      "Business traveler communities",
      "Transportation hubs",
      "Corporate travel partnerships",
    ],
    "Remote Work": [
      "Remote work communities",
      "Co-working space partnerships",
      "Digital nomad influencers",
      "Remote job boards",
      "Productivity tool integrations",
    ],
    Sustainability: [
      "Environmental influencers",
      "Green living publications",
      "Sustainability certifications",
      "Eco-friendly marketplaces",
      "Climate action events",
    ],
    "Family Tech": [
      "Parenting influencers",
      "Family publications",
      "School partnerships",
      "Parenting podcasts",
      "Family event sponsorships",
    ],
  },

  advertisingApproaches: {
    FinTech:
      "Data-driven campaigns highlighting concrete financial benefits with strong security messaging and professional design aesthetic",
    HealthTech:
      "Empathetic messaging focusing on improved quality of life with clean, trustworthy medical aesthetic and expert testimonials",
    EdTech:
      "Results-oriented advertising showcasing learning outcomes with engaging, interactive demonstrations and educator endorsements",
    FoodTech:
      "Visually rich campaigns featuring appetizing food imagery with convenience and health messaging tailored to target lifestyle",
    CleanTech:
      "Impact-focused advertising with clear environmental benefits metrics and modern, clean design aesthetic",
    "Smart Home":
      "Lifestyle-centered demonstrations showing seamless technology integration with before/after scenarios and ease-of-use emphasis",
    Productivity:
      "Problem-solution format highlighting time savings with clean, efficient design and concrete productivity metrics",
    Wellness:
      "Aspirational messaging with calm, mindful aesthetic focusing on holistic benefits and authentic transformation stories",
    "E-commerce":
      "Product-focused with personalization emphasis, featuring seamless shopping experience and unique product discovery",
    "Social Impact":
      "Purpose-driven storytelling highlighting community impact with authentic, emotional narratives and clear call to action",
    Entertainment:
      "Engaging content previews with emotional hooks, focusing on unique experiences and community participation",
    Transportation:
      "Convenience and reliability messaging with urban lifestyle integration and clear time/cost savings comparisons",
    "Remote Work":
      "Freedom and flexibility narratives with professional yet location-independent imagery and productivity emphasis",
    Sustainability:
      "Conscious consumer messaging with transparent impact metrics and modern, natural aesthetic connecting products to planet",
    "Family Tech":
      "Family-centered scenarios showing practical benefits with warm, trustworthy aesthetic and safety/time-saving emphasis",
  },

  budgetEstimates: {
    low: {
      startup: "$5,000 - $25,000",
      monthly: "$1,000 - $3,000",
    },
    medium: {
      startup: "$25,000 - $100,000",
      monthly: "$3,000 - $10,000",
    },
    high: {
      startup: "$100,000 - $500,000",
      monthly: "$10,000 - $50,000",
    },
  },

  timelineEstimates: {
    planning: [
      "1-2 months for market research and concept validation",
      "2-3 months for product design and development planning",
      "3-4 months for comprehensive business plan and investor pitching",
      "2 weeks for initial concept validation",
      "1 month for MVP feature definition",
    ],
    launch: [
      "3-6 months for MVP development and testing",
      "1-2 months for beta testing with early adopters",
      "2-3 months for marketing preparation and launch campaign",
      "4-8 months for full feature development post-MVP",
      "1 month for initial marketing campaign",
    ],
    growth: [
      "6-12 months to reach product-market fit",
      "12-18 months to establish market presence",
      "18-24 months to reach profitability",
      "24-36 months to scale operations",
      "3-5 years to reach maturity or exit potential",
    ],
  },

  complexityLevels: {
    FinTech: "complex",
    HealthTech: "complex",
    EdTech: "moderate",
    FoodTech: "moderate",
    CleanTech: "complex",
    "Smart Home": "complex",
    Productivity: "moderate",
    Wellness: "moderate",
    "E-commerce": "moderate",
    "Social Impact": "moderate",
    Entertainment: "moderate",
    Transportation: "complex",
    "Remote Work": "moderate",
    Sustainability: "moderate",
    "Family Tech": "moderate",
  },

  investmentLevels: {
    FinTech: "high",
    HealthTech: "high",
    EdTech: "medium",
    FoodTech: "medium",
    CleanTech: "high",
    "Smart Home": "high",
    Productivity: "medium",
    Wellness: "medium",
    "E-commerce": "medium",
    "Social Impact": "low",
    Entertainment: "medium",
    Transportation: "high",
    "Remote Work": "medium",
    Sustainability: "medium",
    "Family Tech": "medium",
  },
}

// Generate a random business idea by combining components
export function generateBusinessIdea(): BusinessIdea {
  const problem = getRandomElement(businessComponents.problems)
  const solution = getRandomElement(businessComponents.solutions)
  const audience = getRandomElement(businessComponents.audiences)
  const revenueModel = getRandomElement(businessComponents.revenueModels)
  const category = getRandomElement(businessComponents.categories)
  const marketPotential = getRandomElement(businessComponents.marketPotentials)
  const competitiveAdvantage = getRandomElement(businessComponents.competitiveAdvantages)

  // Generate a business name
  const namePrefix = getBusinessNamePrefix()
  const nameSuffix = getBusinessNameSuffix()
  const name = `${namePrefix}${nameSuffix}`

  // Create short description
  const shortDescription = `A ${solution.toLowerCase()} that helps ${audience.toLowerCase()} solve the problem of ${problem.toLowerCase()}.`

  // Create problem-solution description
  const problemSolution = `${capitalizeFirstLetter(audience)} struggle with ${problem}. This ${solution.toLowerCase()} provides an innovative way to address this challenge through ${getRandomApproach()}.`

  // Generate SEO keywords based on category
  const categoryKeywords = businessComponents.keywordsByCategory[category] || []
  const seoKeywords = getRandomSubset(categoryKeywords, 5)

  // Add audience and problem-specific keywords
  seoKeywords.push(`${audience} ${problem.split(" ")[0]}`)
  seoKeywords.push(`${solution.split(" ")[0]} for ${audience}`)

  // Generate competition level
  const competitionLevel = getRandomElement(businessComponents.competitionLevels)

  // Generate search volume
  const searchVolume = getRandomElement(businessComponents.searchVolumes)

  // Generate trends (2-3 relevant trends)
  const trends = generateTrends(2 + Math.floor(Math.random() * 2))

  // Generate key features based on category
  const categoryFeatures = businessComponents.featuresByCategory[category] || []
  const keyFeatures = getRandomSubset(categoryFeatures, 4 + Math.floor(Math.random() * 3))

  // Generate detailed target audience
  const ageRange = businessComponents.ageRangesByAudience[audience] || "25-45"
  const socialCharacteristics = getRandomSubset(businessComponents.socialCharacteristicsByAudience[audience] || [], 3)
  const psychographics = getRandomSubset(businessComponents.psychographicsByAudience[audience] || [], 3)
  const geographicFocus = getRandomSubset(businessComponents.geographicFocusByCategory[category] || ["Global"], 2)
  const nicheSpecifics = businessComponents.nicheSpecificsByAudience[audience] || ""

  // Generate business plan
  const strategy = getRandomElement(businessComponents.businessStrategies)
  const marketingStrategy = businessComponents.marketingStrategies[category] || ""
  const marketingChannels = getRandomSubset(businessComponents.marketingChannels[category] || [], 4)
  const advertisingApproach = businessComponents.advertisingApproaches[category] || ""

  // Determine complexity and investment level
  const complexity = businessComponents.complexityLevels[category] || "moderate"
  const investmentLevel = businessComponents.investmentLevels[category] || "medium"

  // Generate budget estimates
  const budgetEstimates = businessComponents.budgetEstimates[investmentLevel]

  // Generate timeline
  const planningTimeline = getRandomElement(businessComponents.timelineEstimates.planning)
  const launchTimeline = getRandomElement(businessComponents.timelineEstimates.launch)
  const growthTimeline = getRandomElement(businessComponents.timelineEstimates.growth)

  return {
    id: generateId(),
    name,
    category,
    marketPotential,
    shortDescription,
    problemSolution,
    targetAudience: capitalizeFirstLetter(audience),
    revenueModel: capitalizeFirstLetter(revenueModel),
    competitiveAdvantage: capitalizeFirstLetter(competitiveAdvantage),

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

    // Business planning
    businessPlan: {
      strategy,
      marketingStrategy,
      marketingChannels,
      advertisingApproach,
      estimatedBudget: budgetEstimates,
      timeline: {
        planning: planningTimeline,
        launch: launchTimeline,
        growth: growthTimeline,
      },
    },
  }
}

// Filter business ideas based on criteria
export function filterIdeas(ideas: BusinessIdea[], filter: IdeaFilter): BusinessIdea[] {
  return ideas.filter((idea) => {
    // Filter by category
    if (filter.category && idea.category !== filter.category) {
      return false
    }

    // Filter by investment level
    const categoryInvestmentLevel = businessComponents.investmentLevels[idea.category] || "medium"
    if (filter.investmentLevel && categoryInvestmentLevel !== filter.investmentLevel) {
      return false
    }

    // Filter by complexity
    const categoryComplexity = businessComponents.complexityLevels[idea.category] || "moderate"
    if (filter.complexity && categoryComplexity !== filter.complexity) {
      return false
    }

    // Filter by market potential
    if (filter.marketPotential && idea.marketPotential !== filter.marketPotential) {
      return false
    }

    // Filter by target age group
    if (filter.targetAgeGroup) {
      const ageRange = idea.targetAudienceDetails.ageRange
      if (!ageRangeMatches(ageRange, filter.targetAgeGroup)) {
        return false
      }
    }

    // Filter by geographic region
    if (filter.geographicRegion) {
      if (!idea.targetAudienceDetails.geographicFocus.includes(filter.geographicRegion)) {
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

function getBusinessNamePrefix(): string {
  const prefixes = [
    "Nova",
    "Eco",
    "Smart",
    "Peak",
    "Flex",
    "Zen",
    "Pulse",
    "Vital",
    "Bright",
    "Swift",
    "Clear",
    "Boost",
    "Flow",
    "Sync",
    "Agile",
    "Nimble",
    "Optimal",
    "Elevate",
    "Thrive",
    "Bloom",
    "Savvy",
    "Fresh",
    "Moti",
    "Focus",
    "Balance",
  ]
  return getRandomElement(prefixes)
}

function getBusinessNameSuffix(): string {
  const suffixes = [
    "Hub",
    "Sync",
    "Flow",
    "Link",
    "Mind",
    "Life",
    "Track",
    "Path",
    "Space",
    "Loop",
    "Wise",
    "Scope",
    "Shift",
    "Spark",
    "Wave",
    "Pulse",
    "Connect",
    "Boost",
    "Flex",
    "Task",
    "Solve",
    "Match",
    "Guard",
    "Sense",
    "Logic",
  ]
  return getRandomElement(suffixes)
}

function getRandomApproach(): string {
  const approaches = [
    "intelligent automation and predictive analytics",
    "seamless integration with daily workflows",
    "community-driven knowledge sharing",
    "personalized recommendations based on user behavior",
    "gamification and behavioral psychology principles",
    "cutting-edge machine learning algorithms",
    "simplified user interface designed for maximum accessibility",
    "real-time data processing and actionable insights",
    "secure and privacy-focused architecture",
    "sustainable and environmentally conscious practices",
    "collaborative tools that enhance productivity",
    "on-demand access to expert resources",
    "adaptive learning systems that improve over time",
    "streamlined processes that eliminate friction points",
    "innovative combination of digital and physical solutions",
  ]
  return getRandomElement(approaches)
}

function generateTrends(count: number) {
  const trends = []
  const usedNames = new Set()

  for (let i = 0; i < count; i++) {
    let trendName
    do {
      trendName = getRandomElement(businessComponents.trendNames)
    } while (usedNames.has(trendName))

    usedNames.add(trendName)
    const direction = getRandomElement(businessComponents.trendDirections)
    const description = getRandomElement(businessComponents.trendDescriptions[direction])

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
