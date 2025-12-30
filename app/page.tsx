"use client"

import { useState } from "react"
import { Search, ChevronRight, Settings, Bookmark } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MarketCard } from "@/components/landing-page/card"

interface Market {
  id: string
  title: string
  image?: string
  mainProbability: number
  options: Array<{
    label: string
    probability: number
    outcome: string
  }>
  volume: string
  timeframe?: string
}

const FILTER_TABS = [
  "All",
  "Trump-Zelenskyy",
  "Ukraine",
  "Minnesota Fraud",
  "Epstein",
  "Venezuela",
  "Trump",
  "Fed",
  "Lighter",
  "SpaceX",
  "Warner Bros",
]

const MOCK_MARKETS: Market[] = [
  {
    id: "1",
    title: "Will anyone be charged over Daycare fraud in...",
    mainProbability: 64,
    options: [
      { label: "Yes", probability: 64, outcome: "Yes" },
      { label: "No", probability: 36, outcome: "No" },
    ],
    volume: "$91k Vol.",
  },
  {
    id: "2",
    title: "What will Trump say during Zelenskyy event on Sunday?",
    mainProbability: 64,
    options: [
      { label: "Thousand / Million /...", probability: 64, outcome: "Yes" },
      { label: "Russia / Ukraine 10+...", probability: 72, outcome: "No" },
    ],
    volume: "$130k Vol.",
  },
  {
    id: "3",
    title: "Super Bowl Champion 2026",
    mainProbability: 17,
    options: [
      { label: "Los Angeles R", probability: 17, outcome: "Yes" },
      { label: "Seattle", probability: 12, outcome: "No" },
    ],
    volume: "$636m Vol.",
  },
  {
    id: "4",
    title: "Russia x Ukraine ceasefire by January 31...",
    mainProbability: 11,
    options: [
      { label: "Yes", probability: 11, outcome: "Yes" },
      { label: "No", probability: 89, outcome: "No" },
    ],
    volume: "$3m Vol.",
  },
  {
    id: "5",
    title: "Palace vs Spurs",
    mainProbability: 43,
    options: [
      { label: "Palace", probability: 43, outcome: "Yes" },
      { label: "Spurs", probability: 27, outcome: "No" },
    ],
    volume: "$684k Vol.",
    timeframe: "1H - 40'",
  },
  {
    id: "6",
    title: "Bologna FC 1909 vs US Sassuolo Calcio",
    mainProbability: 47,
    options: [
      { label: "Bologna FC", probability: 47, outcome: "Yes" },
      { label: "US Sassuolo", probability: 24, outcome: "No" },
    ],
    volume: "$475k Vol.",
    timeframe: "1H - 11",
  },
  {
    id: "7",
    title: "Jaguars vs Colts",
    mainProbability: 66,
    options: [
      { label: "Jaguars", probability: 66, outcome: "Yes" },
      { label: "Colts", probability: 35, outcome: "No" },
    ],
    volume: "$1m Vol.",
    timeframe: "NFL 11:30 PM",
  },
  {
    id: "8",
    title: "Steelers vs Browns",
    mainProbability: 67,
    options: [
      { label: "Steelers", probability: 67, outcome: "Yes" },
      { label: "Browns", probability: 34, outcome: "No" },
    ],
    volume: "$838k Vol.",
    timeframe: "NFL 11:30 PM",
  },
]

export function Page() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-[#1a1b1e] text-white">
      {/* Search and Filter Bar */}
      <div className=" border-b border-slate-700 bg-[#1a1b1e] backdrop-blur-sm p-4">
        <div className="flex items-center gap-4 overflow-x-auto pb-1">

          {/* Search */}
          <div className="relative flex-1 max-w-md min-w-55">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-slate-400 placeholder::text-md"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-6 shrink-0">
          
              <Settings className="w-5 h-5  text-slate-500" />
       
            
              <Bookmark className="w-5 h-5  text-slate-500" />
         
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 shrink-0 ">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`whitespace-nowrap px-3 py-1 rounded-md text-sm transition-colors ${activeFilter === tab
                    ? "bg-primary text-white font-semibold"
                    : "text-slate-400 hover:text-slate-200"
                  }`}
              >
                {tab}
              </button>
            ))}
            <button className="text-slate-400 hover:text-slate-200">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>


      {/* Markets Grid */}
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {MOCK_MARKETS.map((market) => (
            <MarketCard
              key={market.id}
              id={market.id}
              title={market.title}
              image={market.image}
              mainProbability={market.mainProbability}
              volume={market.volume}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Page
