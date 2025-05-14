"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Download,
  Lightbulb,
  Save,
  Share2,
  TrendingDown,
  TrendingUp,
  Minus,
  Filter,
  Star,
  Users,
  Calendar,
  Globe,
  Target,
  ShoppingBag,
  LineChart,
  Megaphone,
  DollarSign,
  Truck,
  Package,
  Search,
  BarChart,
  Instagram,
} from "lucide-react"
import { generateDropshippingProduct, filterProducts } from "@/lib/product-generator"
import type { DropshippingProduct, ProductFilter } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DropshippingProductGenerator() {
  const [currentProduct, setCurrentProduct] = useState<DropshippingProduct | null>(null)
  const [savedProducts, setSavedProducts] = useState<DropshippingProduct[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [activeTab, setActiveTab] = useState("current")
  const [filter, setFilter] = useState<ProductFilter>({})
  const [showFilters, setShowFilters] = useState(false)
  const [shareUrl, setShareUrl] = useState("")
  const [showShareDialog, setShowShareDialog] = useState(false)

  const handleGenerateProduct = () => {
    setIsGenerating(true)
    // Simulate API call delay
    setTimeout(() => {
      const newProduct = generateDropshippingProduct()
      setCurrentProduct(newProduct)
      setIsGenerating(false)
      setActiveTab("current")
    }, 800)
  }

  const handleSaveProduct = () => {
    if (currentProduct && !savedProducts.some((product) => product.id === currentProduct.id)) {
      setSavedProducts([...savedProducts, currentProduct])
    }
  }

  const handleExportProducts = () => {
    const productsToExport = activeTab === "current" && currentProduct ? [currentProduct] : savedProducts

    if (productsToExport.length === 0) return

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(productsToExport, null, 2))
    const downloadAnchorNode = document.createElement("a")
    downloadAnchorNode.setAttribute("href", dataStr)
    downloadAnchorNode.setAttribute("download", "dropshipping-products.json")
    document.body.appendChild(downloadAnchorNode)
    downloadAnchorNode.click()
    downloadAnchorNode.remove()
  }

  const handleRateProduct = (product: DropshippingProduct, rating: number) => {
    if (activeTab === "current") {
      setCurrentProduct({ ...product, userRating: rating })
    } else {
      setSavedProducts(savedProducts.map((p) => (p.id === product.id ? { ...p, userRating: rating } : p)))
    }
  }

  const handleShareProduct = (product: DropshippingProduct) => {
    // In a real app, this would generate a shareable link
    setShareUrl(`https://dropshipping-product-finder.com/share/${product.id}`)
    setShowShareDialog(true)
  }

  const handleFilterChange = (key: keyof ProductFilter, value: any) => {
    if (value === "all") {
      const newFilter = { ...filter }
      delete newFilter[key]
      setFilter(newFilter)
    } else {
      setFilter({ ...filter, [key]: value })
    }
  }

  const filteredSavedProducts =
    filter && Object.keys(filter).length > 0 ? filterProducts(savedProducts, filter) : savedProducts

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center gap-4">
        <Button
          size="lg"
          className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          onClick={handleGenerateProduct}
          disabled={isGenerating}
        >
          <Package className="mr-2 h-5 w-5" />
          {isGenerating ? "Söker..." : "Hitta Trendande Dropshipping Produkt"}
        </Button>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className={showFilters ? "bg-slate-100 dark:bg-slate-800" : ""}
          >
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <LineChart className="mr-2 h-4 w-4" />
                Trender
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Aktuella Produkttrender</DialogTitle>
                <DialogDescription>Dessa produktkategorier visar stark tillväxt just nu.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">Eco-friendly produkter</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Hållbara alternativ till vardagsprodukter visar stark tillväxt
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">Smarta hemtillbehör</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Produkter som förenklar vardagen med smart teknologi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">Wellness-produkter</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Produkter för självvård och välmående ökar stadigt
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">Hemmakontor-tillbehör</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Produkter som förbättrar hemarbetsplatsen fortsätter växa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Minus className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">Säsongsprodukter</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Stabil efterfrågan med förutsägbara säsongsvariationer
                    </p>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => {}}>
                  Stäng
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {showFilters && (
        <Card className="p-4">
          <h3 className="font-medium mb-4">Filtrera Produkter</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="category-filter">Kategori</Label>
              <Select onValueChange={(value) => handleFilterChange("category", value)} value={filter.category || ""}>
                <SelectTrigger id="category-filter">
                  <SelectValue placeholder="Alla kategorier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alla kategorier</SelectItem>
                  {productCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="niche-filter">Nisch</Label>
              <Select onValueChange={(value) => handleFilterChange("niche", value)} value={filter.niche || ""}>
                <SelectTrigger id="niche-filter">
                  <SelectValue placeholder="Alla nischar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alla nischar</SelectItem>
                  {filter.category && productNiches[filter.category]
                    ? productNiches[filter.category].map((niche) => (
                        <SelectItem key={niche} value={niche}>
                          {niche}
                        </SelectItem>
                      ))
                    : Object.values(productNiches)
                        .flat()
                        .map((niche) => (
                          <SelectItem key={niche} value={niche}>
                            {niche}
                          </SelectItem>
                        ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="price-filter">Prisnivå</Label>
              <Select
                onValueChange={(value: any) => handleFilterChange("priceRange", value)}
                value={filter.priceRange || ""}
              >
                <SelectTrigger id="price-filter">
                  <SelectValue placeholder="Alla prisnivåer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alla prisnivåer</SelectItem>
                  <SelectItem value="low">Låg ($1-5)</SelectItem>
                  <SelectItem value="medium">Medium ($5-15)</SelectItem>
                  <SelectItem value="high">Hög ($15+)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="profit-filter">Vinstmarginal</Label>
              <Select
                onValueChange={(value: any) => handleFilterChange("profitMargin", value)}
                value={filter.profitMargin || ""}
              >
                <SelectTrigger id="profit-filter">
                  <SelectValue placeholder="Alla marginaler" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alla marginaler</SelectItem>
                  <SelectItem value="low">Låg (under 50%)</SelectItem>
                  <SelectItem value="medium">Medium (50-70%)</SelectItem>
                  <SelectItem value="high">Hög (över 70%)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="competition-filter">Konkurrensnivå</Label>
              <Select
                onValueChange={(value: any) => handleFilterChange("competitionLevel", value)}
                value={filter.competitionLevel || ""}
              >
                <SelectTrigger id="competition-filter">
                  <SelectValue placeholder="Alla nivåer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alla nivåer</SelectItem>
                  <SelectItem value="low">Låg</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">Hög</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="search-filter">Sökvolym</Label>
              <Select
                onValueChange={(value: any) => handleFilterChange("searchVolume", value)}
                value={filter.searchVolume || ""}
              >
                <SelectTrigger id="search-filter">
                  <SelectValue placeholder="Alla volymer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alla volymer</SelectItem>
                  <SelectItem value="low">Låg (nisch)</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">Hög</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="current">Aktuell Produkt</TabsTrigger>
          <TabsTrigger value="saved">Sparade Produkter ({savedProducts.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="mt-6">
          {currentProduct ? (
            <DropshippingProductCard
              product={currentProduct}
              onSave={handleSaveProduct}
              onExport={handleExportProducts}
              onRate={handleRateProduct}
              onShare={handleShareProduct}
              isSaved={savedProducts.some((product) => product.id === currentProduct.id)}
            />
          ) : (
            <div className="text-center py-20 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <Package className="mx-auto h-12 w-12 text-slate-400 dark:text-slate-500 mb-4" />
              <h3 className="text-xl font-medium text-slate-700 dark:text-slate-300 mb-2">
                Ingen produkt genererad ännu
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                Klicka på "Hitta Trendande Dropshipping Produkt" för att komma igång
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          {savedProducts.length > 0 ? (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium">Dina Sparade Produkter</h3>
                <Button variant="outline" size="sm" onClick={handleExportProducts}>
                  <Download className="mr-2 h-4 w-4" />
                  Exportera Alla
                </Button>
              </div>

              {filteredSavedProducts.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {filteredSavedProducts.map((product) => (
                    <DropshippingProductCard
                      key={product.id}
                      product={product}
                      isSaved={true}
                      isCompact={true}
                      onRate={handleRateProduct}
                      onShare={handleShareProduct}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <Filter className="mx-auto h-8 w-8 text-slate-400 dark:text-slate-500 mb-2" />
                  <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Inga matchande produkter
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400">Justera dina filter för att se fler produkter</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <Save className="mx-auto h-12 w-12 text-slate-400 dark:text-slate-500 mb-4" />
              <h3 className="text-xl font-medium text-slate-700 dark:text-slate-300 mb-2">Inga sparade produkter</h3>
              <p className="text-slate-500 dark:text-slate-400">Generera och spara produkter för att se dem här</p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dela Produkt</DialogTitle>
            <DialogDescription>Kopiera länken nedan för att dela denna produkt med andra.</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <Input value={shareUrl} readOnly />
            <Button
              variant="secondary"
              onClick={() => {
                navigator.clipboard.writeText(shareUrl)
                setShowShareDialog(false)
              }}
            >
              Kopiera
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface DropshippingProductCardProps {
  product: DropshippingProduct
  onSave?: () => void
  onExport?: () => void
  onRate?: (product: DropshippingProduct, rating: number) => void
  onShare?: (product: DropshippingProduct) => void
  isSaved?: boolean
  isCompact?: boolean
}

function DropshippingProductCard({
  product,
  onSave,
  onExport,
  onRate,
  onShare,
  isSaved = false,
  isCompact = false,
}: DropshippingProductCardProps) {
  return (
    <Card className={cn("transition-all", isCompact ? "h-full" : "")}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge
                variant="outline"
                className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
              >
                {product.category}
              </Badge>
              <Badge
                variant="outline"
                className="bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
              >
                {product.niche}
              </Badge>
            </div>
            <CardDescription>{product.shortDescription}</CardDescription>
          </div>

          {product.userRating && (
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < product.userRating! ? "text-amber-500 fill-amber-500" : "text-slate-300 dark:text-slate-600",
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className={cn(isCompact ? "pb-2" : "")}>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="pricing">
            <AccordionTrigger className="text-base font-medium">
              <div className="flex items-center">
                <DollarSign className="mr-2 h-4 w-4" />
                Prissättning & Marginal
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Leverantörspris</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{product.supplierPrice}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Rekommenderat Butikspris</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{product.retailPrice}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Slutkundspris</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{product.customerPrice}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Vinstmarginal</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{product.profitMargin}</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="supplier">
            <AccordionTrigger className="text-base font-medium">
              <div className="flex items-center">
                <Truck className="mr-2 h-4 w-4" />
                Leverantörsinformation
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Leverantörsregioner</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    {product.supplierInfo.regions.join(", ")}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Leveranstid</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{product.supplierInfo.shippingTime}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    Minsta Beställningskvantitet
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{product.supplierInfo.moq}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Kvalitetsbetyg</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{product.supplierInfo.qualityRating}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Pålitlighetsbetyg</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {product.supplierInfo.reliabilityRating}
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="problem-solution">
            <AccordionTrigger className="text-base font-medium">Problem & Lösning</AccordionTrigger>
            <AccordionContent>
              <p className="text-slate-700 dark:text-slate-300 mb-4">{product.problemSolution}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="target-audience">
            <AccordionTrigger className="text-base font-medium">
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Målgrupp
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Åldersgrupp</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {product.targetAudienceDetails.ageRange}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Sociala Egenskaper</h4>
                    <ul className="mt-1 space-y-1">
                      {product.targetAudienceDetails.socialCharacteristics.map((trait, index) => (
                        <li key={index} className="text-sm text-slate-700 dark:text-slate-300 flex items-start">
                          <span className="mr-2">•</span> {trait}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Target className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Psykografiska Egenskaper</h4>
                    <ul className="mt-1 space-y-1">
                      {product.targetAudienceDetails.psychographics.map((trait, index) => (
                        <li key={index} className="text-sm text-slate-700 dark:text-slate-300 flex items-start">
                          <span className="mr-2">•</span> {trait}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Globe className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Geografiskt Fokus</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {product.targetAudienceDetails.geographicFocus.join(", ")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Target className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Nischspecifikation</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {product.targetAudienceDetails.nicheSpecifics}
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="seo-keywords">
            <AccordionTrigger className="text-base font-medium">
              <div className="flex items-center">
                <Search className="mr-2 h-4 w-4" />
                SEO & Sökord
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Bästa Sökord för SEO</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {product.seoKeywords.map((keyword, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Sökvolym</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{product.searchVolume}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Konkurrensnivå</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{product.competitionLevel}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="trends">
            <AccordionTrigger className="text-base font-medium">
              <div className="flex items-center">
                <BarChart className="mr-2 h-4 w-4" />
                Marknadstrender
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {product.trends.map((trend, index) => (
                  <div key={index} className="flex items-start gap-2">
                    {trend.direction === "up" && <TrendingUp className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />}
                    {trend.direction === "down" && <TrendingDown className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />}
                    {trend.direction === "stable" && <Minus className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />}
                    <div>
                      <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">{trend.name}</h4>
                      <p className="text-sm text-slate-700 dark:text-slate-300">{trend.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="features">
            <AccordionTrigger className="text-base font-medium">Produktegenskaper</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 list-disc pl-5">
                {product.keyFeatures.map((feature, index) => (
                  <li key={index} className="text-sm text-slate-700 dark:text-slate-300">
                    {feature}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="marketing">
            <AccordionTrigger className="text-base font-medium">
              <div className="flex items-center">
                <Megaphone className="mr-2 h-4 w-4" />
                Marknadsföringsstrategi
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Instagram className="h-5 w-5 text-pink-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Bästa Plattformar</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {product.marketingStrategy.bestPlatforms.map((platform, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Lightbulb className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Innehållsidéer</h4>
                    <ul className="mt-1 space-y-1">
                      {product.marketingStrategy.contentIdeas.map((idea, index) => (
                        <li key={index} className="text-sm text-slate-700 dark:text-slate-300 flex items-start">
                          <span className="mr-2">•</span> {idea}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Megaphone className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Annonsmetod</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {product.marketingStrategy.advertisingApproach}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <DollarSign className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Uppskattad Annonskostnad</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <span className="font-medium">Uppstart:</span> {product.marketingStrategy.estimatedAdCost.startup}
                      <br />
                      <span className="font-medium">Månatlig:</span> {product.marketingStrategy.estimatedAdCost.monthly}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <ShoppingBag className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Säljargument</h4>
                    <ul className="mt-1 space-y-1">
                      {product.marketingStrategy.sellingPoints.map((point, index) => (
                        <li key={index} className="text-sm text-slate-700 dark:text-slate-300 flex items-start">
                          <span className="mr-2">•</span> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>

      {!isCompact && (
        <CardFooter className="flex justify-between">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={onExport}>
              <Download className="mr-2 h-4 w-4" />
              Exportera
            </Button>

            {onRate && (
              <div className="relative">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Star className="mr-2 h-4 w-4" />
                      Betygsätt
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Betygsätt denna produkt</DialogTitle>
                      <DialogDescription>Ditt betyg hjälper oss att förbättra våra rekommendationer.</DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center py-4">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            className="p-1"
                            onClick={() => {
                              onRate(product, rating)
                            }}
                          >
                            <Star
                              className={cn(
                                "h-8 w-8 transition-all",
                                (product.userRating || 0) >= rating
                                  ? "text-amber-500 fill-amber-500"
                                  : "text-slate-300 hover:text-amber-300 dark:text-slate-600",
                              )}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => onShare && onShare(product)}>
              <Share2 className="mr-2 h-4 w-4" />
              Dela
            </Button>

            <Button variant={isSaved ? "secondary" : "default"} size="sm" onClick={onSave} disabled={isSaved}>
              <Save className="mr-2 h-4 w-4" />
              {isSaved ? "Sparad" : "Spara Produkt"}
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  )
}

// Import product categories and niches for filtering
const productCategories = [
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
]

const productNiches = {
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
}
