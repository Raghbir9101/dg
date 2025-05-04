import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <ProductFilters />
        </aside>
        <main className="flex-1">
          <h1 className="text-3xl font-bold mb-6">All Eyewear Collections</h1>
          <ProductGrid />
        </main>
      </div>
    </div>
  )
}
