import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FeaturedBrands } from "@/components/featured-brands"
import { FeaturedProducts } from "@/components/featured-products"
import { CollectionShowcase } from "@/components/collection-showcase"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Eyewear Collections</h2>
            <p className="text-gray-600">
              Discover our curated selection of fashion-forward eyewear from our exclusive brands, designed to make a
              statement.
            </p>
          </div>
          <CollectionShowcase />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Crafted With Precision</h2>
              <p className="text-gray-600 mb-6">
                At DG Lifestyle, we believe that eyewear is more than just a necessity—it's an expression of your unique
                style and personality. Our collections are meticulously crafted with attention to detail, using premium
                materials and innovative designs.
              </p>
              <p className="text-gray-600 mb-8">
                From bold statement pieces to timeless classics, our eyewear is designed to enhance your look while
                providing exceptional comfort and durability.
              </p>
              <Button asChild className="px-8">
                <Link href="/our-story">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/precision3.jpg"
                  alt="Crafted eyewear"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-6 -left-6 w-2/3 aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/precision4.jpg"
                  alt="Eyewear detail"
                  className="w-full h-full object-cover"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Exclusive Brands</h2>
            <p className="text-gray-600">
              Each of our brands has its own unique identity and style, catering to different tastes and preferences.
            </p>
          </div>
          <FeaturedBrands />
          {/* <div className="text-center mt-12">
            <Button asChild variant="outline" className="px-8">
              <Link href="/brands">
                View All Brands
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-400">Explore our latest and most popular eyewear collections.</p>
          </div>
          <FeaturedProducts />
          <div className="text-center mt-12">
            <Button asChild className="bg-white text-black hover:bg-white/90 px-8">
              <Link href="/products">
                Shop All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Statement with DG Lifestyle</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of fashion-forward individuals who have chosen our premium eyewear to express their unique
            style.
          </p>
          <Button asChild className="bg-white text-black hover:bg-white/90 px-8" disabled>
            <Link href={""}>
              Coming Soon
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
