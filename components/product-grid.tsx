"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/components/ui/use-toast"

export function ProductGrid() {
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [favorites, setFavorites] = useState<string[]>([])

  // This would typically come from an API or database
  const products = [
    {
      id: "1",
      name: "Ridge Aviator",
      brand: "Ridge Eyewear",
      price: 1999,
      image: "/placeholder.svg?height=300&width=300",
      category: "sunglasses",
      isNew: true,
    },
    {
      id: "2",
      name: "Elian Classic",
      brand: "Elian Martin",
      price: 2499,
      image: "/placeholder.svg?height=300&width=300",
      category: "optical",
      isNew: false,
    },
    {
      id: "3",
      name: "Limon Precision",
      brand: "Limon Eye",
      price: 3999,
      image: "/placeholder.svg?height=300&width=300",
      category: "sunglasses",
      isNew: true,
    },
    {
      id: "4",
      name: "Ridge Urban",
      brand: "Ridge Eyewear",
      price: 1799,
      image: "/placeholder.svg?height=300&width=300",
      category: "optical",
      isNew: false,
    },
    {
      id: "5",
      name: "Elian Elegance",
      brand: "Elian Martin",
      price: 2799,
      image: "/placeholder.svg?height=300&width=300",
      category: "sunglasses",
      isNew: true,
    },
    {
      id: "6",
      name: "Limon Titanium",
      brand: "Limon Eye",
      price: 4299,
      image: "/placeholder.svg?height=300&width=300",
      category: "optical",
      isNew: false,
    },
    {
      id: "7",
      name: "Ridge Sport",
      brand: "Ridge Eyewear",
      price: 1899,
      image: "/placeholder.svg?height=300&width=300",
      category: "sunglasses",
      isNew: false,
    },
    {
      id: "8",
      name: "Elian Vintage",
      brand: "Elian Martin",
      price: 2599,
      image: "/placeholder.svg?height=300&width=300",
      category: "optical",
      isNew: true,
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
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
              className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
              onClick={() => toggleFavorite(product.id)}
            >
              <Heart className={`h-5 w-5 ${favorites.includes(product.id) ? "fill-rose-500 text-rose-500" : ""}`} />
              <span className="sr-only">Add to favorites</span>
            </Button>
            {product.isNew && (
              <Badge className="absolute top-2 left-2" variant="secondary">
                New
              </Badge>
            )}
          </div>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
            <Link href={`/products/${product.id}`} className="font-medium hover:underline">
              {product.name}
            </Link>
            <div className="mt-2 font-bold">₹{product.price.toLocaleString()}</div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full" onClick={() => handleAddToCart(product)}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
