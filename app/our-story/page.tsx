import Image from "next/image"

export default function OurStoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/ourStory.png')",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            The journey of DSG LifeStyle and our passion for exceptional eyewear
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2>Our Beginning</h2>
              <p>
                DSG LifeStyle is a fast-growing eyewear company based in New Delhi, redefining how India sees fashion and
                function. Founded with a vision to transform eyewear from a necessity into a fashion statement, we've
                quickly established ourselves as a brand that combines style, quality, and affordability.
              </p>

              <div className="my-12 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/ceo.jpg"
                    alt="DSG LifeStyle founding team"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h3>The Founders' Vision</h3>
                  <p>
                    Led by our founder and CEO Sumit Gupta, along with co-founder Ankita Kataky and CMO Anuj Singh, our
                    team combines passion, expertise, and innovation to deliver exceptional eyewear products and
                    experiences.
                  </p>
                  <p>
                    Their vision was simple yet ambitious: to create eyewear that serves as both a functional necessity
                    and a fashion statement, accessible to all Indians regardless of where they live.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Brands</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center shadow hover:shadow-lg transition">
                  {/* <Image src="/ridge1.jpg" alt="Ridge Eyewear" width={120} height={60} className="rounded mb-4" /> */}
                  <h3 className="font-semibold text-xl mb-2 text-indigo-700">Ridge Eyewear</h3>
                  <p className="text-center text-gray-700 text-sm">Bold, trend-driven designs for the fashion-forward generation. Ridge pushes boundaries with its contemporary styles and vibrant colors.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 flex flex-col items-center shadow hover:shadow-lg transition">
                  {/* <Image src="/elian1.png" alt="Elian Martin" width={120} height={60} className="rounded mb-4" /> */}
                  <h3 className="font-semibold text-xl mb-2 text-amber-700">Elian Martin</h3>
                  <p className="text-center text-gray-700 text-sm">Premium, elegant, and timeless eyewear for the sophisticated individual. Elian Martin represents understated luxury and classic design.</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-6 flex flex-col items-center border border-yellow-200 shadow hover:shadow-lg transition">
                  {/* <Image src="/precision1.jpg" alt="Limon Eye" width={120} height={60} className="rounded mb-4" /> */}
                  <h3 className="font-semibold text-xl mb-2 text-yellow-700">Limon Eye</h3>
                  <p className="text-center text-gray-700 text-sm">Pan India distributor for Limon Eye, a premium German brand known for world-class precision, engineering, and quality craftsmanship.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
              <div className="flex items-start gap-4 mb-8 bg-indigo-50 rounded-lg p-6">
                <span className="text-3xl">🎯</span>
                <p className="text-lg text-gray-800">At DSG LifeStyle, our mission is to bridge the gap in India's eyewear market by offering fashionable, high-quality frames at affordable prices. We believe that eyewear should be an extension of your personality, not just a functional necessity.</p>
              </div>

              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
              <div className="flex items-start gap-4 mb-8 bg-amber-50 rounded-lg p-6">
                <span className="text-3xl">🌟</span>
                <p className="text-lg text-gray-800">We aim to grow Ridge Eye Wear & Elian Martin by DSG LifeStyle into nationally recognized eyewear fashion brands with omnichannel presence and strong consumer loyalty. Our focus on retail expansion and customer experience is shaping the future of eyewear in India.</p>
              </div>

              <div className="my-16 bg-gray-50 p-12 rounded-2xl shadow-lg">
                <h3 className="text-center mb-10 text-3xl font-bold tracking-tight text-gray-900">Our Values</h3>
                <div className="grid md:grid-cols-3 gap-10">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl">🔍</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Quality</h4>
                    <p className="text-base text-gray-700">We never compromise on the quality of our products and services.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl">💡</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                    <p className="text-base text-gray-700">We constantly seek new ways to improve and innovate in the eyewear industry.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl">👥</span>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Customer Focus</h4>
                    <p className="text-base text-gray-700">Our customers are at the heart of everything we do.</p>
                  </div>
                </div>
              </div>

              <h2>Join Our Journey</h2>
              <p>
                As we continue to grow and expand, we invite you to be a part of our journey. Experience the DSG
                Lifestyle difference and discover eyewear that truly reflects your unique style and personality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
