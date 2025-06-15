import Link from "next/link"
import { ArrowRight, Heart, Recycle, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NGOPage() {
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">Ramya Foundation</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">Seeing the Future, Serving the Nation</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment to Society</h2>
            <p className="text-lg text-gray-600">
              At DG Lifestyle, we believe success means nothing if it doesn't uplift others. That's why we created Ramya
              Foundation—our heartfelt commitment to vision, dignity, and a sustainable Bharat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-6 h-48 flex items-center justify-center">
                <Eye className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Vision for All</h3>
                <p className="text-gray-600">
                  Providing free eye surgeries and prescription eyewear to those who cannot afford it.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-6 h-48 flex items-center justify-center">
                <Recycle className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Giving New Life</h3>
                <p className="text-gray-600">
                  Collecting and upcycling discarded eyewear to distribute to those in need.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 h-48 flex items-center justify-center">
                <Heart className="h-16 w-16 text-white" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Sustainable Bharat</h3>
                <p className="text-gray-600">
                  Building a movement toward a more circular, conscious, and caring India.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision for All */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 mb-6">
                <Eye className="mr-2 h-5 w-5" />
                <span className="font-medium">Vision for All</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Restoring Sight, Restoring Hope</h2>
              <p className="text-gray-600 mb-6">
                Every year, we sponsor 12+ cataract surgeries, restoring sight and hope to those who cannot afford it.
                We also provide free prescription eyewear to underprivileged children, senior citizens, and residents of
                orphanages and old-age homes—empowering them to see the world clearly and live fully.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-amber-600 mb-2">12+</div>
                  <div className="text-gray-600">Cataract surgeries sponsored annually</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-amber-600 mb-2">100+</div>
                  <div className="text-gray-600">Free eyewear distributed each year</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Eye surgery camp"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-2/3 aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Child receiving glasses"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giving New Life to Old Frames */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Collecting old frames"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Repairing eyewear"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Upcycled frames"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Distribution event"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 mb-6">
                <Recycle className="mr-2 h-5 w-5" />
                <span className="font-medium">Recycling Program</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Giving New Life to Old Frames</h2>
              <p className="text-gray-600 mb-6">
                We collect discarded eyewear—scrap frames, broken sunglasses, and outdated stock—from optical stores and
                marketplaces. Through smart upcycling and repair, we breathe new life into them and distribute them at
                zero cost to people who need them the most.
              </p>
              <p className="text-gray-600 mb-6">
                Our recycling program not only helps those in need but also reduces waste and promotes sustainability in
                the eyewear industry.
              </p>
              <div className="flex items-center p-4 bg-emerald-50 rounded-lg border border-emerald-100 mb-6">
                <Recycle className="h-8 w-8 text-emerald-600 mr-4 flex-shrink-0" />
                <p className="text-emerald-800">
                  <strong>Drop-off points:</strong> You can donate your old eyewear at any DG Lifestyle store or
                  authorized collection center.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Promise: A Sustainable Bharat</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Ramya Foundation goes beyond charity. It's a movement toward a more circular, conscious, and caring India.
            As DG Lifestyle grows, our foundation will scale its impact—delivering vision, dignity, and opportunity to
            every corner of the nation.
          </p>
          <blockquote className="text-2xl italic font-light max-w-2xl mx-auto mb-8">
            "We're not just building a fashion-forward eyewear brand. We're building a future where every Indian can see
            it clearly—with pride, purpose, and possibility."
          </blockquote>
        </div>
      </section>

      {/* Impact Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-lg text-gray-600">
              See the difference we're making in communities across India through our various initiatives.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Eye camp in rural village"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Senior citizen with new glasses"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Children at orphanage receiving eyewear"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Recycling workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden md:col-span-2">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Community outreach program"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden md:col-span-2">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Team of volunteers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Recycle Your Old Specs, Gift Someone the Gift of Vision
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Got old spectacles at home? Drop them off at any optical store and help someone in need see the world more
              clearly.
            </p>

            <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-bold mb-4">How It Works</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <p className="text-gray-600">Bring your old spectacles to any optical store</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <p className="text-gray-600">We'll refurbish and distribute them to those in need</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <p className="text-gray-600">Get an exclusive 10% discount on your next eyewear purchase!</p>
                    </div>
                  </div>
                </div>
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Recycling old spectacles"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">As Our Way of Saying Thanks</h3>
              <p className="text-xl mb-6">We'll give you an exclusive 10% discount on your next eyewear purchase!</p>
              <div className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-full font-bold text-lg">
                10% OFF Your Next Purchase
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Do Good. Look Good. Feel Great.</h3>
              <p className="text-lg text-gray-600 mb-8">Let's create a world where everyone sees better together.</p>
              <Button asChild size="lg" className="px-8">
                <Link href="/contact">
                  Visit Your Nearest Store Today!
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
