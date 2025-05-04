import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BrandsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Our Brands</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Discover our exclusive eyewear brands, each with its own unique identity and style
          </p>
        </div>
      </section>

      {/* Ridge Eyewear */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <img src="/placeholder.svg?height=80&width=200" alt="Ridge Eyewear logo" className="h-12" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ridge Eyewear</h2>
              <p className="text-gray-600 mb-6">
                Bold, trend-driven designs for the fashion-forward generation. Ridge Eyewear pushes boundaries with its
                contemporary styles and vibrant colors, designed for those who want to make a statement with their
                eyewear.
              </p>
              <p className="text-gray-600 mb-8">
                Our Ridge collection features cutting-edge designs that combine style with functionality, ensuring you
                not only look good but also enjoy exceptional comfort and durability.
              </p>
              <Button asChild className="px-8">
                <Link href="/products/ridge-eyewear">
                  Explore Ridge Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Ridge Eyewear product 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Ridge Eyewear product 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Ridge Eyewear product 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Ridge Eyewear product 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elian Martin */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Elian Martin product 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Elian Martin product 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Elian Martin product 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Elian Martin product 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="mb-6">
                <img src="/placeholder.svg?height=80&width=200" alt="Elian Martin logo" className="h-12" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Elian Martin</h2>
              <p className="text-gray-600 mb-6">
                Premium, elegant, and timeless eyewear for the sophisticated individual. Elian Martin represents
                understated luxury and classic design, perfect for those who appreciate refined aesthetics and superior
                craftsmanship.
              </p>
              <p className="text-gray-600 mb-8">
                Each Elian Martin frame is meticulously crafted using premium materials, ensuring exceptional quality
                and longevity. Our designs draw inspiration from classic styles while incorporating modern elements for
                a contemporary twist.
              </p>
              <Button asChild className="px-8">
                <Link href="/products/elian-martin">
                  Explore Elian Martin Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Limon Eye */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <img src="/placeholder.svg?height=80&width=200" alt="Limon Eye logo" className="h-12" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Limon Eye</h2>
              <p className="text-gray-600 mb-6">
                German precision engineering and quality craftsmanship in every frame. As the exclusive Pan India
                distributor for Limon Eye, we bring world-class eyewear to the Indian market.
              </p>
              <p className="text-gray-600 mb-8">
                Limon Eye is renowned for its attention to detail, innovative designs, and use of premium materials.
                Each frame undergoes rigorous quality control to ensure it meets the highest standards of excellence.
              </p>
              <Button asChild className="px-8">
                <Link href="/products/limon-eye">
                  Explore Limon Eye Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Limon Eye product 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Limon Eye product 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Limon Eye product 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Limon Eye product 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
