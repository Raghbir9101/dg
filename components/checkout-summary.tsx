"use client"

import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart-provider"

export function CheckoutSummary() {
  const { cartItems, totalPrice } = useCart()

  const shippingCost = totalPrice > 999 ? 0 : 99
  const tax = Math.round(totalPrice * 0.18) // 18% GST
  const finalTotal = totalPrice + shippingCost + tax

  return (
    <div className="rounded-lg border p-6">
      <h3 className="text-lg font-bold mb-4">Order Summary</h3>

      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              <p className="text-sm font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-4" />

      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{totalPrice.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{shippingCost === 0 ? "Free" : `₹${shippingCost}`}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax (18% GST)</span>
          <span>₹{tax.toLocaleString()}</span>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>₹{finalTotal.toLocaleString()}</span>
      </div>
    </div>
  )
}
