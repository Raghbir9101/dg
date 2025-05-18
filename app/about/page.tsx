import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About DSG LifeStyle</h1>

        <div className="aspect-video overflow-hidden rounded-lg mb-8">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="DSG LifeStyle Team"
            width={800}
            height={400}
            className="w-full object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Our Story</h2>
          <p>
            DSG LifeStyle is a fast-growing eyewear company based in New Delhi, redefining how India sees fashion and
            function. Founded with a vision to transform eyewear from a necessity into a fashion statement, we've
            quickly established ourselves as a brand that combines style, quality, and affordability.
          </p>

          <h2>Our Brands</h2>
          <p>We proudly own two homegrown brands:</p>
          <ul>
            <li>
              <strong>Ridge Eyewear</strong> – Bold, trend-driven designs for the fashion-forward generation. Ridge
              pushes boundaries with its contemporary styles and vibrant colors.
            </li>
            <li>
              <strong>Elian Martin</strong> – Premium, elegant, and timeless eyewear for the sophisticated individual.
              Elian Martin represents understated luxury and classic design.
            </li>
          </ul>
          <p>
            We are also the Pan India distributor for <strong>Limon Eye</strong>, a premium eyewear brand from Germany,
            known for its world-class precision, engineering, and quality craftsmanship.
          </p>

          <h2>Our Mission</h2>
          <p>
            At DSG LifeStyle, our mission is to bridge the gap in India's eyewear market by offering fashionable,
            high-quality frames at affordable prices. We believe that eyewear should be an extension of your
            personality, not just a functional necessity.
          </p>

          <h2>Our Vision</h2>
          <p>
            We aim to grow Ridge Eye Wear & Elian Martin by DSG LifeStyle into nationally recognized eyewear fashion
            brands with omnichannel presence and strong consumer loyalty. Our focus on retail expansion and customer
            experience is shaping the future of eyewear in India.
          </p>

          <h2>Our Team</h2>
          <p>
            Led by our founder and CEO Sumit Gupta, along with co-founder Ankita Kataky and CMO Anuj Singh, our team
            combines passion, expertise, and innovation to deliver exceptional eyewear products and experiences.
          </p>

          <div className="mt-8 flex justify-center">
            <Button asChild>
              <Link href="/products">
                Explore Our Collections
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
