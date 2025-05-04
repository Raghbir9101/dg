"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/components/ui/use-toast"

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart()
  const { toast } = useToast()
  const [couponCode, setCouponCode] = useState("")
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false)

  const handleRemoveItem = (id: string) => {
    removeFromCart(id)
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
      duration: 2000,
    })
  }

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    updateQuantity(id, newQuantity)
  }

  const handleApplyCoupon = () => {
    setIsApplyingCoupon(true)
    setTimeout(() => {
      setIsApplyingCoupon(false)
      if (couponCode.toLowerCase() === "welcome10") {
        toast({
          title: "Coupon applied",
          description: "10% discount has been applied to your order.",
          duration: 2000,
        })
      } else {
        toast({
          title: "Invalid coupon",
          description: "The coupon code you entered is invalid or expired.",
          variant: "destructive",
          duration: 2000,
        })
      }
    }, 1000)
  }

  const shippingCost = totalPrice > 999 ? 0 : 99
  const discount = couponCode.toLowerCase() === "welcome10" ? totalPrice * 0.1 : 0
  const finalTotal = totalPrice + shippingCost - discount

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-8">Looks like you haven't added any items to your cart yet.</p>
        <Button asChild>
          <Link href="/products">
            Continue Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-lg border overflow-hidden">
            <div className="bg-muted px-6 py-4">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <h3 className="font-medium">Product</h3>
                </div>
                <div className="col-span-2 text-center">
                  <h3 className="font-medium">Price</h3>
                </div>
                <div className="col-span-2 text-center">
                  <h3 className="font-medium">Quantity</h3>
                </div>
                <div className="col-span-2 text-right">
                  <h3 className="font-medium">Total</h3>
                </div>
              </div>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="px-6 py-4 border-t">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.brand}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-center">
                    <p>₹{item.price.toLocaleString()}</p>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center justify-center border rounded-md max-w-[120px] mx-auto">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="col-span-2 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <p className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-500 hover:text-red-500"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-bold mb-4">Order Summary</h3>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? "Free" : `₹${shippingCost}`}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹{discount.toLocaleString()}</span>
                </div>
              )}

              <Separator />

              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>₹{finalTotal.toLocaleString()}</span>
              </div>

              <div className="pt-4">
                <div className="flex gap-2 mb-4">
                  <Input placeholder="Coupon code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                  <Button variant="outline" onClick={handleApplyCoupon} disabled={!couponCode || isApplyingCoupon}>
                    {isApplyingCoupon ? "Applying..." : "Apply"}
                  </Button>
                </div>

                <Button asChild className="w-full">
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>

                <p className="text-xs text-gray-500 mt-4 text-center">Secure checkout powered by Stripe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
