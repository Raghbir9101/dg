import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturedBrands() {
  const brands = [
    {
      id: "ridge-eyewear",
      name: "Ridge Eyewear",
      description: "Bold, trend-driven designs for the fashion-forward generation.",
      image: "/brand1.jpg",
      logo: "/brand1.jpg",
    },
    {
      id: "elian-martin",
      name: "Elian Martin",
      description: "Premium, elegant, and timeless eyewear for the sophisticated individual.",
      image: "/brand2.jpg",
      logo: "/brand2.jpg",
    },
    // {
    //   id: "limon-eye",
    //   name: "Limon Eye",
    //   description: "German precision engineering and quality craftsmanship in every frame.",
    //   image: "/brand2.jpg",
    //   logo: "/brand2.jpg",
    // },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {brands.map((brand) => (
        <Link key={brand.id} href={`/brands/${brand.id}`} className="block group">
          <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
            <div className="aspect-video overflow-hidden bg-gray-100">
              <img  style={{ filter: "brightness(0.95)" }}
                src={brand.image || "/placeholder.svg"}
                alt={brand.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <div className="h-16 flex items-center mb-4">
                <img src={brand.logo || "/placeholder.svg"} alt={`${brand.name} logo`} className="max-h-full" />
              </div>
              <p className="text-gray-600 mb-4">{brand.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
