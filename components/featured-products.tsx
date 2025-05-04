"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/components/ui/use-toast"

export function FeaturedProducts() {
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [favorites, setFavorites] = useState<string[]>([])

  const featuredProducts = [
    {
      id: "1",
      name: "Ridge Aviator",
      brand: "Ridge Eyewear",
      price: 1999,
      image: "/placeholder.svg?height=300&width=300",
      isFeatured: true,
      isNew: true,
    },
    {
      id: "2",
      name: "Elian Classic",
      brand: "Elian Martin",
      price: 2499,
      image: "/placeholder.svg?height=300&width=300",
      isFeatured: true,
      isNew: false,
    },
    {
      id: "3",
      name: "Limon Precision",
      brand: "Limon Eye",
      price: 3999,
      image: "/placeholder.svg?height=300&width=300",
      isFeatured: true,
      isNew: true,
    },
    {
      id: "4",
      name: "Ridge Urban",
      brand: "Ridge Eyewear",
      price: 1799,
      image: "/placeholder.svg?height=300&width=300",
      isFeatured: true,
      isNew: false,
    },
  ]

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))

    toast({
      title: favorites.includes(id) ? "Removed from wishlist" : "Added to wishlist",
      duration: 2000,
    })
  }

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image,
      quantity: 1,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden group bg-gray-900 border-gray-800">
          <div className="relative aspect-square overflow-hidden">
            <Link href={`/products/${product.id}`}>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full"
              onClick={() => toggleFavorite(product.id)}
            >
              <Heart className={`h-5 w-5 ${favorites.includes(product.id) ? "fill-rose-500 text-rose-500" : ""}`} />
              <span className="sr-only">Add to favorites</span>
            </Button>
            {product.isNew && (
              <Badge className="absolute top-2 left-2 bg-white text-black hover:bg-white/90">New</Badge>
            )}
          </div>
          <CardContent className="p-4">
            <div className="text-sm text-gray-400 mb-1">{product.brand}</div>
            <Link href={`/products/${product.id}`} className="font-medium text-white hover:underline">
              {product.name}
            </Link>
            <div className="mt-2 font-bold text-white">₹{product.price.toLocaleString()}</div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full bg-white text-black hover:bg-white/90" onClick={() => handleAddToCart(product)}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
