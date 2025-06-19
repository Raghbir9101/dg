"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBag, User, Menu } from "lucide-react"
import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useCart } from "@/components/cart-provider"
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer"

export function SiteHeader() {
  const pathname = usePathname()
  const { cartItems } = useCart()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tight text-white">DSG LIFESTYLE</span>
          <span className="text-xs tracking-widest text-white/70">INDIA PVT. LTD</span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium text-white hover:text-white/80 transition-colors",
              pathname === "/" && "border-b-2 border-white pb-1",
            )}
          >
            Home
          </Link>
          <Link
            href="/our-story"
            className={cn(
              "text-sm font-medium text-white hover:text-white/80 transition-colors",
              pathname === "/our-story" && "border-b-2 border-white pb-1",
            )}
          >
            Our Story
          </Link>
          <Link
            href="/brands"
            className={cn(
              "text-sm font-medium text-white hover:text-white/80 transition-colors",
              pathname === "/brands" && "border-b-2 border-white pb-1",
            )}
          >
            Brands
          </Link>
          <Link
            href="/our-ngo"
            className={cn(
              "text-sm font-medium text-white hover:text-white/80 transition-colors",
              pathname === "/our-ngo" && "border-b-2 border-white pb-1",
            )}
          >
            Our NGO
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium text-white hover:text-white/80 transition-colors",
              pathname === "/contact" && "border-b-2 border-white pb-1",
            )}
          >
            Contact
          </Link>
        </nav>
        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-white p-6">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-lg font-medium" onClick={() => setDrawerOpen(false)}>Home</Link>
                <Link href="/our-story" className="text-lg font-medium" onClick={() => setDrawerOpen(false)}>Our Story</Link>
                <Link href="/brands" className="text-lg font-medium" onClick={() => setDrawerOpen(false)}>Brands</Link>
                <Link href="/our-ngo" className="text-lg font-medium" onClick={() => setDrawerOpen(false)}>Our NGO</Link>
                <Link href="/contact" className="text-lg font-medium" onClick={() => setDrawerOpen(false)}>Contact</Link>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
        {/* <div className="flex items-center space-x-4">
          <Link href="/account">
            <Button variant="ghost" size="icon" aria-label="Account" className="text-white hover:bg-white/10">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
          <Link href="/cart">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Shopping Cart"
              className="text-white hover:bg-white/10 relative"
            >
              <ShoppingBag className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-white text-xs text-black flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </Link>
        </div> */}
      </div>
    </header>
  )
}
