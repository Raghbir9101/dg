import Link from "next/link"
import { CheckCircle, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CheckoutSuccessPage() {
  // Generate a random order number
  const orderNumber = `DG${Math.floor(100000 + Math.random() * 900000)}`

  return (
    <div className="container mx-auto px-4 py-16 text-center max-w-md">
      <div className="flex justify-center mb-6">
        <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>

      <p className="text-gray-500 mb-6">
        Thank you for your purchase. Your order has been confirmed and will be shipped soon.
      </p>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <div className="text-left space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-500">Order number:</span>
            <span className="font-medium">{orderNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Order date:</span>
            <span className="font-medium">{new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Estimated delivery:</span>
            <span className="font-medium">
              {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()} -{" "}
              {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Button asChild>
          <Link href="/account/orders">View Order</Link>
        </Button>

        <div>
          <Button variant="outline" asChild>
            <Link href="/products">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
