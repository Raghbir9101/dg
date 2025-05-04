import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Fashion Blogger",
      content:
        "Ridge Eyewear has completely transformed my style. The designs are bold yet sophisticated, and the quality is exceptional for the price point.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Marketing Executive",
      content:
        "I've been wearing Elian Martin frames for over a year now. The elegance and comfort are unmatched. Definitely worth every rupee!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Architect",
      content:
        "The precision engineering of Limon Eye glasses is evident from the moment you put them on. German quality that's now accessible in India!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Don't just take our word for it. Here's what our customers have to say about DG Lifestyle eyewear.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="text-left">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
