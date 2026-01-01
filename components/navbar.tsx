"use client"

import { Search, Menu, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const categories = [
  "Trending",
  "Breaking",
  "New",
  "Politics",
  "Sports",
  "Crypto",
  "Finance",
  "Geopolitics",
  "Earnings",
  "Tech",
  "Culture",
  "World",
  "Economy",
  "Trump",
  "Elections",
  "Mentions",
  "More",
]

export function Navbar() {
  return (
    <div className="bg-[#1a1b1e] text-white sticky top-0 z-50 shadow-md pt-2 border-b border-slate-700">
      
      {/* Main Header */}
      <div className="border-slate-700">
        <div className="flex items-center justify-between px-4 py-3">
          
          {/* Left Section */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">Polymarket</span>

            {/* Search (Hidden on mobile) */}
            <div className="hidden md:flex flex-1 max-w-md mx-6">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <Input
                  placeholder="Search polymarket"
                  className="w-124 md:w-112 h-10 pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="hidden lg:block">
              <span className="md:text-sm">How it works</span>
            </button>

            {/* Visible on mobile now */}
            <Button className="bg-transparent hover:bg-primary text-sm px-3">
              Log In
            </Button>

            <Button className="text-sm px-3">
              Sign Up
            </Button>

            {/* Menu icon untouched */}
            <button className="p-2 hover:bg-slate-800 rounded">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-6 px-4 py-3 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              className={`whitespace-nowrap text-sm transition-colors ${
                category === "Trending"
                  ? "text-white font-semibold flex items-center gap-1"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              {category === "Trending" && <TrendingUp />}
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
