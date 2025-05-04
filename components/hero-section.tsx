import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundPositionY: "10%",
          filter: "brightness(0.4)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">We Are For Style</h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
          Bringing You Exceptional Eyewear That Catches Your Eye
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 px-8">
            <Link href="/products">Explore Collections</Link>
          </Button> */}
          <Button asChild variant="outline" size="lg" className="border-white text-black px-8">
            <Link href="/our-story">
              Our Story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
