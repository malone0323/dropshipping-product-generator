export interface BusinessIdea {
  id: string
  name: string
  category: string
  marketPotential: string
  shortDescription: string
  problemSolution: string
  targetAudience: string
  revenueModel: string
  competitiveAdvantage: string

  // SEO and market analysis
  seoKeywords: string[]
  searchVolume: string
  competitionLevel: string
  trends: {
    name: string
    direction: "up" | "down" | "stable"
    description: string
  }[]
  keyFeatures: string[]

  // Detailed target audience
  targetAudienceDetails: {
    ageRange: string
    socialCharacteristics: string[]
    psychographics: string[]
    geographicFocus: string[]
    nicheSpecifics: string
  }

  // Business planning
  businessPlan: {
    strategy: string
    marketingStrategy: string
    marketingChannels: string[]
    advertisingApproach: string
    estimatedBudget: {
      startup: string
      monthly: string
    }
    timeline: {
      planning: string
      launch: string
      growth: string
    }
  }

  userRating?: number
}

export interface DropshippingProduct {
  id: string
  name: string
  category: string
  niche: string
  shortDescription: string
  problemSolution: string
  targetAudience: string

  // Pricing information
  supplierPrice: string
  retailPrice: string
  customerPrice: string
  profitMargin: string

  // Supplier information
  supplierInfo: {
    regions: string[]
    shippingTime: string
    moq: string // Minimum Order Quantity
    qualityRating: string
    reliabilityRating: string
  }

  // SEO and market analysis
  seoKeywords: string[]
  searchVolume: string
  competitionLevel: string
  trends: {
    name: string
    direction: "up" | "down" | "stable"
    description: string
  }[]
  keyFeatures: string[]

  // Detailed target audience
  targetAudienceDetails: {
    ageRange: string
    socialCharacteristics: string[]
    psychographics: string[]
    geographicFocus: string[]
    nicheSpecifics: string
  }

  // Marketing strategy
  marketingStrategy: {
    bestPlatforms: string[]
    contentIdeas: string[]
    advertisingApproach: string
    estimatedAdCost: {
      startup: string
      monthly: string
    }
    sellingPoints: string[]
  }

  // User ratings (for saved products)
  userRating?: number
}

export type IdeaFilter = {
  category?: string
  investmentLevel?: "low" | "medium" | "high"
  complexity?: "simple" | "moderate" | "complex"
  marketPotential?: string
  targetAgeGroup?: string
  geographicRegion?: string
}

export type ProductFilter = {
  category?: string
  niche?: string
  priceRange?: "low" | "medium" | "high"
  profitMargin?: "low" | "medium" | "high"
  competitionLevel?: "low" | "medium" | "high"
  searchVolume?: "low" | "medium" | "high"
  targetAgeGroup?: string
  geographicRegion?: string
}
