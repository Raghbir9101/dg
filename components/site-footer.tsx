import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold mb-4">DG LIFESTYLE</h3>
            <p className="text-gray-400 mb-4">Make a Statement</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-gray-400 hover:text-white">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/brands" className="text-gray-400 hover:text-white">
                  Brands
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Brands</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/brands/ridge-eyewear" className="text-gray-400 hover:text-white">
                  Ridge Eyewear
                </Link>
              </li>
              <li>
                <Link href="/brands/elian-martin" className="text-gray-400 hover:text-white">
                  Elian Martin
                </Link>
              </li>
              <li>
                <Link href="/brands/limon-eye" className="text-gray-400 hover:text-white">
                  Limon Eye
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p>DG Lifestyle</p>
              <p>New Delhi, India</p>
              <p className="mt-2">Email: info@dglifestyle.com</p>
              <p>Phone: +91 123 456 7890</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DG Lifestyle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
