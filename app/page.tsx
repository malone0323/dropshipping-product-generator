import { DropshippingProductGenerator } from "@/components/dropshipping-product-generator"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl md:text-6xl mb-4">
            Dropshipping Produktfinnare
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-300">
            Hitta trendande, populära och efterfrågade dropshipping-produkter med hög sökvolym och låg konkurrens.
          </p>
        </div>

        <DropshippingProductGenerator />
      </div>
    </main>
  )
}
