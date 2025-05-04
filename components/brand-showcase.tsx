import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function BrandShowcase() {
  const brands = [
    {
      id: "ridge-eyewear",
      name: "Ridge Eyewear",
      description: "Bold, trend-driven designs for the fashion-forward generation.",
      image: "/placeholder.svg?height=300&width=300",
      color: "from-rose-500 to-orange-500",
    },
    {
      id: "elian-martin",
      name: "Elian Martin",
      description: "Premium, elegant, and timeless eyewear for the sophisticated individual.",
      image: "/placeholder.svg?height=300&width=300",
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "limon-eye",
      name: "Limon Eye",
      description: "German precision engineering and quality craftsmanship in every frame.",
      image: "/placeholder.svg?height=300&width=300",
      color: "from-sky-500 to-indigo-500",
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
      {brands.map((brand) => (
        <Card key={brand.id} className="overflow-hidden">
          <div className={`bg-gradient-to-r ${brand.color} p-6 h-48 flex items-center justify-center`}>
            <h3 className="text-2xl font-bold text-white">{brand.name}</h3>
          </div>
          <CardContent className="p-6">
            <p className="mb-4 text-gray-500">{brand.description}</p>
            <Button asChild>
              <Link href={`/products/${brand.id}`}>Explore Collection</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
