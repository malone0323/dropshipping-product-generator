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
  Briefcase,
  LineChart,
  Megaphone,
  DollarSign,
  Clock,
  Layers,
} from "lucide-react"
import { generateBusinessIdea, filterIdeas } from "@/lib/idea-generator"
import type { BusinessIdea, IdeaFilter } from "@/lib/types"
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

export function BusinessIdeaGenerator() {
  const [currentIdea, setCurrentIdea] = useState<BusinessIdea | null>(null)
  const [savedIdeas, setSavedIdeas] = useState<BusinessIdea[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [activeTab, setActiveTab] = useState("current")
  const [filter, setFilter] = useState<IdeaFilter>({})
  const [showFilters, setShowFilters] = useState(false)
  const [shareUrl, setShareUrl] = useState("")
  const [showShareDialog, setShowShareDialog] = useState(false)

  const handleGenerateIdea = () => {
    setIsGenerating(true)
    // Simulate API call delay
    setTimeout(() => {
      const newIdea = generateBusinessIdea()
      setCurrentIdea(newIdea)
      setIsGenerating(false)
      setActiveTab("current")
    }, 800)
  }

  const handleSaveIdea = () => {
    if (currentIdea && !savedIdeas.some((idea) => idea.id === currentIdea.id)) {
      setSavedIdeas([...savedIdeas, currentIdea])
    }
  }

  const handleExportIdeas = () => {
    const ideasToExport = activeTab === "current" && currentIdea ? [currentIdea] : savedIdeas

    if (ideasToExport.length === 0) return

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(ideasToExport, null, 2))
    const downloadAnchorNode = document.createElement("a")
    downloadAnchorNode.setAttribute("href", dataStr)
    downloadAnchorNode.setAttribute("download", "business-ideas.json")
    document.body.appendChild(downloadAnchorNode)
    downloadAnchorNode.click()
    downloadAnchorNode.remove()
  }

  const handleRateIdea = (idea: BusinessIdea, rating: number) => {
    if (activeTab === "current") {
      setCurrentIdea({ ...idea, userRating: rating })
    } else {
      setSavedIdeas(savedIdeas.map((i) => (i.id === idea.id ? { ...i, userRating: rating } : i)))
    }
  }

  const handleShareIdea = (idea: BusinessIdea) => {
    // In a real app, this would generate a shareable link
    setShareUrl(`https://business-idea-generator.com/share/${idea.id}`)
    setShowShareDialog(true)
  }

  const handleFilterChange = (key: keyof IdeaFilter, value: any) => {
    setFilter({ ...filter, [key]: value })
  }

  const filteredSavedIdeas = filter && Object.keys(filter).length > 0 ? filterIdeas(savedIdeas, filter) : savedIdeas

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center gap-4">
        <Button
          size="lg"
          className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          onClick={handleGenerateIdea}
          disabled={isGenerating}
        >
          <Lightbulb className="mr-2 h-5 w-5" />
          {isGenerating ? "Genererar..." : "Generera Affärsidé"}
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
                <Layers className="mr-2 h-4 w-4" />
                Förbättringar
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Kommande Förbättringar</DialogTitle>
                <DialogDescription>Dessa funktioner planeras för framtida versioner.</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="flex items-start gap-3">
                  <Filter className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">Filtrering</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Filtrera idéer efter bransch, investeringsnivå eller komplexitet
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Star className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">Betygsättning</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Betygsätt idéer för att förbättra genereringsalgoritmen
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Share2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">Delning</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Dela lovande idéer på sociala medier</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">Utökade Detaljer</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Lägg till mer detaljerade affärsplanelement för utvalda idéer
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-rose-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium">AI-Integration</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Integrera med en AI-tjänst för att generera ännu mer skräddarsydda idéer
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
          <h3 className="font-medium mb-4">Filtrera Idéer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="category-filter">Kategori</Label>
              <Select onValueChange={(value) => handleFilterChange("category", value)} value={filter.category || ""}>
                <SelectTrigger id="category-filter">
                  <SelectValue placeholder="Alla kategorier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alla kategorier</SelectItem>
                  {businessComponents.categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="investment-filter">Investeringsnivå</Label>
              <Select
                onValueChange={(value: any) => handleFilterChange("investmentLevel", value)}
                value={filter.investmentLevel || ""}
              >
                <SelectTrigger id="investment-filter">
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
              <Label htmlFor="complexity-filter">Komplexitet</Label>
              <Select
                onValueChange={(value: any) => handleFilterChange("complexity", value)}
                value={filter.complexity || ""}
              >
                <SelectTrigger id="complexity-filter">
                  <SelectValue placeholder="Alla nivåer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alla nivåer</SelectItem>
                  <SelectItem value="simple">Enkel</SelectItem>
                  <SelectItem value="moderate">Måttlig</SelectItem>
                  <SelectItem value="complex">Komplex</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="current">Aktuell Idé</TabsTrigger>
          <TabsTrigger value="saved">Sparade Idéer ({savedIdeas.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="mt-6">
          {currentIdea ? (
            <BusinessIdeaCard
              idea={currentIdea}
              onSave={handleSaveIdea}
              onExport={handleExportIdeas}
              onRate={handleRateIdea}
              onShare={handleShareIdea}
              isSaved={savedIdeas.some((idea) => idea.id === currentIdea.id)}
            />
          ) : (
            <div className="text-center py-20 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <Lightbulb className="mx-auto h-12 w-12 text-slate-400 dark:text-slate-500 mb-4" />
              <h3 className="text-xl font-medium text-slate-700 dark:text-slate-300 mb-2">Ingen idé genererad ännu</h3>
              <p className="text-slate-500 dark:text-slate-400">Klicka på "Generera Affärsidé" för att komma igång</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          {savedIdeas.length > 0 ? (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium">Dina Sparade Idéer</h3>
                <Button variant="outline" size="sm" onClick={handleExportIdeas}>
                  <Download className="mr-2 h-4 w-4" />
                  Exportera Alla
                </Button>
              </div>

              {filteredSavedIdeas.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {filteredSavedIdeas.map((idea) => (
                    <BusinessIdeaCard
                      key={idea.id}
                      idea={idea}
                      isSaved={true}
                      isCompact={true}
                      onRate={handleRateIdea}
                      onShare={handleShareIdea}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <Filter className="mx-auto h-8 w-8 text-slate-400 dark:text-slate-500 mb-2" />
                  <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-1">Inga matchande idéer</h3>
                  <p className="text-slate-500 dark:text-slate-400">Justera dina filter för att se fler idéer</p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <Save className="mx-auto h-12 w-12 text-slate-400 dark:text-slate-500 mb-4" />
              <h3 className="text-xl font-medium text-slate-700 dark:text-slate-300 mb-2">Inga sparade idéer</h3>
              <p className="text-slate-500 dark:text-slate-400">Generera och spara idéer för att se dem här</p>
            </div>
          )}
        </TabsContent>
      </Tabs>

      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dela Affärsidé</DialogTitle>
            <DialogDescription>Kopiera länken nedan för att dela denna affärsidé med andra.</DialogDescription>
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

interface BusinessIdeaCardProps {
  idea: BusinessIdea
  onSave?: () => void
  onExport?: () => void
  onRate?: (idea: BusinessIdea, rating: number) => void
  onShare?: (idea: BusinessIdea) => void
  isSaved?: boolean
  isCompact?: boolean
}

function BusinessIdeaCard({
  idea,
  onSave,
  onExport,
  onRate,
  onShare,
  isSaved = false,
  isCompact = false,
}: BusinessIdeaCardProps) {
  return (
    <Card className={cn("transition-all", isCompact ? "h-full" : "")}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-2">{idea.name}</CardTitle>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge
                variant="outline"
                className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800"
              >
                {idea.category}
              </Badge>
              <Badge
                variant="outline"
                className="bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
              >
                {idea.marketPotential}
              </Badge>
            </div>
            <CardDescription>{idea.shortDescription}</CardDescription>
          </div>

          {idea.userRating && (
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < idea.userRating! ? "text-amber-500 fill-amber-500" : "text-slate-300 dark:text-slate-600",
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className={cn(isCompact ? "pb-2" : "")}>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="problem-solution">
            <AccordionTrigger className="text-base font-medium">Problem & Lösning</AccordionTrigger>
            <AccordionContent>
              <p className="text-slate-700 dark:text-slate-300 mb-4">{idea.problemSolution}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="target-audience">
            <AccordionTrigger className="text-base font-medium">Målgrupp & Intäktsmodell</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Målgrupp</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{idea.targetAudience}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Intäktsmodell</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{idea.revenueModel}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Konkurrensfördel</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{idea.competitiveAdvantage}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="detailed-audience">
            <AccordionTrigger className="text-base font-medium">
              <div className="flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Detaljerad Målgruppsanalys
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Åldersgrupp</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{idea.targetAudienceDetails.ageRange}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Sociala Egenskaper</h4>
                    <ul className="mt-1 space-y-1">
                      {idea.targetAudienceDetails.socialCharacteristics.map((trait, index) => (
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
                      {idea.targetAudienceDetails.psychographics.map((trait, index) => (
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
                      {idea.targetAudienceDetails.geographicFocus.join(", ")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Target className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Nischspecifikation</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {idea.targetAudienceDetails.nicheSpecifics}
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="seo-keywords">
            <AccordionTrigger className="text-base font-medium">SEO & Sökord</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Bästa Sökord för SEO</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {idea.seoKeywords.map((keyword, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Sökvolym</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{idea.searchVolume}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Konkurrensnivå</h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{idea.competitionLevel}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="trends">
            <AccordionTrigger className="text-base font-medium">Marknadstrender</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {idea.trends.map((trend, index) => (
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
            <AccordionTrigger className="text-base font-medium">Nyckelfunktioner</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 list-disc pl-5">
                {idea.keyFeatures.map((feature, index) => (
                  <li key={index} className="text-sm text-slate-700 dark:text-slate-300">
                    {feature}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="business-plan">
            <AccordionTrigger className="text-base font-medium">
              <div className="flex items-center">
                <Briefcase className="mr-2 h-4 w-4" />
                Affärsplan
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <LineChart className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Strategi</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{idea.businessPlan.strategy}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Megaphone className="h-5 w-5 text-indigo-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Marknadsföringsstrategi</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">{idea.businessPlan.marketingStrategy}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Share2 className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Marknadsföringskanaler</h4>
                    <ul className="mt-1 space-y-1">
                      {idea.businessPlan.marketingChannels.map((channel, index) => (
                        <li key={index} className="text-sm text-slate-700 dark:text-slate-300 flex items-start">
                          <span className="mr-2">•</span> {channel}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Megaphone className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Annonsmetod</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {idea.businessPlan.advertisingApproach}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <DollarSign className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Uppskattad Budget</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <span className="font-medium">Uppstart:</span> {idea.businessPlan.estimatedBudget.startup}
                      <br />
                      <span className="font-medium">Månatlig drift:</span> {idea.businessPlan.estimatedBudget.monthly}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-slate-100">Tidslinje</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <span className="font-medium">Planering:</span> {idea.businessPlan.timeline.planning}
                      <br />
                      <span className="font-medium">Lansering:</span> {idea.businessPlan.timeline.launch}
                      <br />
                      <span className="font-medium">Tillväxt:</span> {idea.businessPlan.timeline.growth}
                    </p>
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
                      <DialogTitle>Betygsätt denna affärsidé</DialogTitle>
                      <DialogDescription>Ditt betyg hjälper oss att förbättra våra rekommendationer.</DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-center py-4">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            className="p-1"
                            onClick={() => {
                              onRate(idea, rating)
                            }}
                          >
                            <Star
                              className={cn(
                                "h-8 w-8 transition-all",
                                (idea.userRating || 0) >= rating
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
            <Button variant="outline" size="sm" onClick={() => onShare && onShare(idea)}>
              <Share2 className="mr-2 h-4 w-4" />
              Dela
            </Button>

            <Button variant={isSaved ? "secondary" : "default"} size="sm" onClick={onSave} disabled={isSaved}>
              <Save className="mr-2 h-4 w-4" />
              {isSaved ? "Sparad" : "Spara Idé"}
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  )
}

// Import business components for filtering
const businessComponents = {
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
}
