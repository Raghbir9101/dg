"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Heart, Minus, Plus, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  // This would typically come from an API or database based on the ID
  const product = {
    id: params.id,
    name: "Ridge Aviator",
    brand: "Ridge Eyewear",
    price: 1999,
    description:
      "Bold and trend-driven aviator sunglasses with UV protection and polarized lenses. The perfect blend of style and functionality.",
    features: [
      "100% UV Protection",
      "Polarized Lenses",
      "Lightweight Frame",
      "Scratch-Resistant Coating",
      "Includes Protective Case",
    ],
    specifications: {
      "Frame Material": "Metal",
      "Lens Material": "Polycarbonate",
      "Frame Width": "140mm",
      "Temple Length": "145mm",
      "Bridge Width": "18mm",
      "Lens Height": "45mm",
      "Lens Width": "52mm",
    },
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    reviews: {
      average: 4.5,
      count: 127,
    },
    inStock: true,
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)

    toast({
      title: isFavorite ? "Removed from wishlist" : "Added to wishlist",
      duration: 2000,
    })
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    })
  }

  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-2 mb-6">
        <nav className="flex items-center gap-1 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products" className="hover:text-gray-900">
            Products
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href={`/products/${product.brand.toLowerCase().replace(" ", "-")}`} className="hover:text-gray-900">
            {product.brand}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900">{product.name}</span>
        </nav>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border">
            <img
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
          </div>
          <div className="flex gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`border rounded-md overflow-hidden ${selectedImage === index ? "ring-2 ring-primary" : ""}`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-20 h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(product.reviews.average) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {product.reviews.average} ({product.reviews.count} reviews)
              </span>
            </div>
          </div>

          <div className="text-2xl font-bold">₹{product.price.toLocaleString()}</div>

          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-medium">Quantity</span>
              <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={incrementQuantity}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1" onClick={handleAddToCart} disabled={!product.inStock}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              <Button variant="outline" size="icon" onClick={toggleFavorite}>
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-rose-500 text-rose-500" : ""}`} />
                <span className="sr-only">Add to favorites</span>
              </Button>
            </div>
          </div>

          <div className="pt-6 border-t">
            <Tabs defaultValue="features">
              <TabsList className="w-full">
                <TabsTrigger value="features" className="flex-1">
                  Features
                </TabsTrigger>
                <TabsTrigger value="specifications" className="flex-1">
                  Specifications
                </TabsTrigger>
                <TabsTrigger value="shipping" className="flex-1">
                  Shipping
                </TabsTrigger>
              </TabsList>
              <TabsContent value="features" className="mt-4">
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Badge variant="outline" className="h-2 w-2 p-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="specifications" className="mt-4">
                <div className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-2 gap-2 py-1 border-b last:border-0">
                      <span className="font-medium">{key}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="shipping" className="mt-4">
                <div className="space-y-4">
                  <p>Free shipping on all orders above ₹999.</p>
                  <p>Standard delivery: 3-5 business days.</p>
                  <p>Express delivery (₹100 extra): 1-2 business days.</p>
                  <p>30-day easy returns on all products.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
