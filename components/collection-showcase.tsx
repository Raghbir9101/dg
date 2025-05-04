import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CollectionShowcase() {
  const collections = [
    {
      id: "sunglasses",
      name: "Sunglasses",
      description: "Stylish protection for your eyes with UV-blocking lenses",
      image: "/sunglasses.png",
    },
    {
      id: "optical",
      name: "Optical Frames",
      description: "Sophisticated frames for prescription lenses",
      image: "/frames.png",
    },
    {
      id: "premium",
      name: "Premium Collection",
      description: "Luxury eyewear crafted with exceptional materials",
      image: "/premium_collection.png",
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {collections.map((collection) => (
        <div key={collection.id} className="group relative overflow-hidden rounded-lg">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={collection.image || "/placeholder.svg"}
              alt={collection.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
            <p className="text-white/80 mb-4">{collection.description}</p>
            {/* <Button asChild variant="outline" className="w-fit border-white text-white hover:bg-white/20">
              <Link href={`/products?collection=${collection.id}`}>
                Explore
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button> */}
          </div>
        </div>
      ))}
    </div>
  )
}
