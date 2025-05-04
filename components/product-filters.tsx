"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([1000, 5000])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Filters</h3>
        <Accordion type="multiple" defaultValue={["brands", "categories", "price"]}>
          <AccordionItem value="brands">
            <AccordionTrigger>Brands</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="ridge" />
                  <Label htmlFor="ridge">Ridge Eyewear</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="elian" />
                  <Label htmlFor="elian">Elian Martin</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="limon" />
                  <Label htmlFor="limon">Limon Eye</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="categories">
            <AccordionTrigger>Categories</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="sunglasses" />
                  <Label htmlFor="sunglasses">Sunglasses</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="optical" />
                  <Label htmlFor="optical">Optical Frames</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="sports" />
                  <Label htmlFor="sports">Sports Eyewear</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="reading" />
                  <Label htmlFor="reading">Reading Glasses</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price">
            <AccordionTrigger>Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <Slider
                  defaultValue={[1000, 5000]}
                  max={10000}
                  min={500}
                  step={100}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
                <div className="flex items-center justify-between">
                  <span>₹{priceRange[0].toLocaleString()}</span>
                  <span>₹{priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="frame">
            <AccordionTrigger>Frame Shape</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="round" />
                  <Label htmlFor="round">Round</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="square" />
                  <Label htmlFor="square">Square</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="rectangle" />
                  <Label htmlFor="rectangle">Rectangle</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cat-eye" />
                  <Label htmlFor="cat-eye">Cat Eye</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="aviator" />
                  <Label htmlFor="aviator">Aviator</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="color">
            <AccordionTrigger>Frame Color</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="black" />
                  <Label htmlFor="black">Black</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="brown" />
                  <Label htmlFor="brown">Brown</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="gold" />
                  <Label htmlFor="gold">Gold</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="silver" />
                  <Label htmlFor="silver">Silver</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="multicolor" />
                  <Label htmlFor="multicolor">Multicolor</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
