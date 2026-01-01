"use client"

import { useState } from "react"
import { Search, ChevronRight, Settings, Bookmark } from "lucide-react"
import { Input } from "@/components/ui/input"
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
    options: [],
    volume: "$91k Vol.",
  },
  {
    id: "2",
    title: "What will Trump say during Zelenskyy event on Sunday?",
    mainProbability: 64,
    options: [],
    volume: "$130k Vol.",
  },
  {
    id: "3",
    title: "Super Bowl Champion 2026",
    mainProbability: 17,
    options: [],
    volume: "$636m Vol.",
  },
  {
    id: "4",
    title: "Russia x Ukraine ceasefire by January 31...",
    mainProbability: 11,
    options: [],
    volume: "$3m Vol.",
  },
  {
    id: "5",
    title: "Palace vs Spurs",
    mainProbability: 43,
    options: [],
    volume: "$684k Vol.",
    timeframe: "1H - 40'",
  },
  {
    id: "6",
    title: "Bologna FC 1909 vs US Sassuolo Calcio",
    mainProbability: 47,
    options: [],
    volume: "$475k Vol.",
    timeframe: "1H - 11",
  },
  {
    id: "7",
    title: "Jaguars vs Colts",
    mainProbability: 66,
    options: [],
    volume: "$1m Vol.",
    timeframe: "NFL 11:30 PM",
  },
  {
    id: "8",
    title: "Steelers vs Browns",
    mainProbability: 67,
    options: [],
    volume: "$838k Vol.",
    timeframe: "NFL 11:30 PM",
  },
]

export function Page() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-[#1a1b1e] text-white">

      {/* HEADER BAR */}
      <div className="border-b border-slate-700 bg-[#1a1b1e] backdrop-blur-sm p-3 sm:p-4 sticky top-0 z-50">
        <div className="flex flex-col gap-3">

          {/* Search + Icons */}
       {/* Search + Filters Bar */}
<div className=" border-slate-700">
  <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">

    {/* Search */}
    <div className="relative w-[340px] shrink-0">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
      <Input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 bg-[#1e293b] border-transparent text-white placeholder-slate-400 rounded-xl"
      />
    </div>

    {/* Icons */}
    <div className="flex items-center gap-4 shrink-0">
      <Settings className="w-5 h-5 text-slate-300" />
      <Bookmark className="w-5 h-5 text-slate-300" />
    </div>

    {/* Divider */}
    <div className="w-px h-6 bg-slate-700 shrink-0" />

    {/* Tabs Row */}
    <div className="flex items-center gap-4 shrink-0">
      {FILTER_TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveFilter(tab)}
          className={`whitespace-nowrap text-sm transition-all ${
            activeFilter === tab
              ? "bg-primary text-white px-3 py-1 rounded-lg"
              : "text-slate-300 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}

      {/* Chevron */}
      <ChevronRight className="w-5 h-5 text-slate-300" />
    </div>

  </div>
</div>


        </div>
      </div>

      {/* MARKETS GRID */}
      <div className="p-3 sm:p-4">
        <div className="
          grid 
          grid-cols-1
          md:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4
          gap-3 sm:gap-4
        ">
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
