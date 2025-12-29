"use client"

import { Search, Menu, TrendingUp} from "lucide-react"
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
    <div className="bg-slate-900 text-white sticky top-0 z-50 shadow-md pt-2 border-b border-slate-700  ">
      {/* Main Header */}
      <div className=" border-slate-700">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">Polymarket</span>
             <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
              <Input
                placeholder="Search polymarket"
                className="w-122 h-10 pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
            </div>
          </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-4">
            <button className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-lg">
              <span>How it works</span>
            </button>
            <Button  className="text-lg">
              Log In
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white text-lg">Sign Up</Button>
            <button className="p-2 hover:bg-slate-800 rounded">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="overflow-x-auto">
        <div className="flex items-center gap-6 px-4 py-3 min-w-max">
          {categories.map((category) => (
            <button
              key={category}
              className={`whitespace-nowrap text-lg transition-colors ${
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