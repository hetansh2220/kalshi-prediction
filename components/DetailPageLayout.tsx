"use client";
import { Link2, Bookmark, Info, ChevronDown, FileText, Code, Settings } from "lucide-react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { TradePanel } from "@/components/trade-panel"
import { Button } from "@/components/ui/button"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { time: "8:00am", probability: 85 },
  { time: "9:00am", probability: 85 },
  { time: "10:00am", probability: 45 },
  { time: "11:00am", probability: 45 },
  { time: "12:00pm", probability: 60 },
  { time: "1:00pm", probability: 68 },
  { time: "2:00pm", probability: 68 },
  { time: "3:00pm", probability: 65 },
  { time: "4:00pm", probability: 65 },
  { time: "5:00pm", probability: 63 },
  { time: "6:00pm", probability: 63 },
  { time: "7:00pm", probability: 63 },
  { time: "8:00pm", probability: 63 },
]

const chartConfig = {
  probability: {
    label: "Probability",
    color: "#4C82FB",
  },
} satisfies ChartConfig

export default function DetailPageLayout() {
  const [timeRange, setTimeRange] = useState('ALL')

  return (
    <div className="min-h-screen bg-[#0B1217] text-white">
      <Navbar />

      <main className="container mx-auto px-4 lg:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,380px] gap-6 max-w-350 mx-auto">
          {/* Main Content */}
          <div className="space-y-4">
            {/* Market Header */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-2xl shrink-0">
                👨‍💼
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-xl lg:text-2xl font-semibold mb-2 leading-tight">
                  Will anyone be charged over Daycare fraud in Minnesota?
                </h1>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <span className="text-gray-500">$91,345</span> Vol.
                  </span>
                  <span className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-gray-500">
                      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M7 3.5V7L9.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    Jan 31, 2026
                  </span>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-[#1A2128] text-gray-400 rounded-lg"
                >
                  <Link2 className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-[#1A2128] text-gray-400 rounded-lg"
                >
                  <Bookmark className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Price Display & Chart */}
            <div className="bg-[#141B22] rounded-xl border border-[#1E2731]">
              <div className="p-5">
                {/* Current Probability */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl lg:text-5xl font-bold text-[#4C82FB]">
                    63% chance
                  </span>
                  <span className="text-green-500 flex items-center gap-1 text-base font-medium">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 3L7 11M7 3L3 7M7 3L11 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    7%
                  </span>
                </div>

                {/* Chart */}
                <div className="mb-4">
                  <ChartContainer config={chartConfig} className="h-[280px] w-full">
                    <LineChart
                      data={chartData}
                      margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                    >
                      <defs>
                        <linearGradient id="colorProbability" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4C82FB" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#4C82FB" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid 
                        strokeDasharray="0" 
                        stroke="#1E2731" 
                        vertical={false}
                      />
                      <XAxis
                        dataKey="time"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tick={{ fill: '#52606D', fontSize: 11 }}
                        tickFormatter={(value) => {
                          const times = ['8:00am', '12:00pm', '4:00pm', '8:00pm']
                          return times.includes(value) ? value : ''
                        }}
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tick={{ fill: '#52606D', fontSize: 12 }}
                        domain={[35, 95]}
                        ticks={[40, 50, 60, 70, 80, 90]}
                        tickFormatter={(value) => `${value}%`}
                      />
                      <ChartTooltip
                        content={<ChartTooltipContent className="bg-[#1A2128] border-[#2A3641]" />}
                      />
                      <Line
                        type="monotone"
                        dataKey="probability"
                        stroke="#4C82FB"
                        strokeWidth={2.5}
                        dot={false}
                        fill="url(#colorProbability)"
                        fillOpacity={1}
                      />
                    </LineChart>
                  </ChartContainer>
                </div>

                {/* Chart Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {['1H', '6H', '1D', '1W', '1M', 'ALL'].map((range) => (
                      <button
                        key={range}
                        onClick={() => setTimeRange(range)}
                        className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                          timeRange === range
                            ? 'bg-[#1E2731] text-white'
                            : 'text-gray-500 hover:text-gray-300'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-1">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="p-2 hover:bg-[#1E2731] h-auto rounded-md"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-500">
                        <path d="M2 8h12M8 2v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="p-2 hover:bg-[#1E2731] h-auto rounded-md"
                    >
                      <FileText className="w-4 h-4 text-gray-500" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="p-2 hover:bg-[#1E2731] h-auto rounded-md"
                    >
                      <Code className="w-4 h-4 text-gray-500" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="p-2 hover:bg-[#1E2731] h-auto rounded-md"
                    >
                      <Settings className="w-4 h-4 text-gray-500" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Book */}
            <div className="bg-[#141B22] rounded-xl border border-[#1E2731] p-5">
              <button className="flex items-center justify-between w-full text-left">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-medium">Order Book</h3>
                  <Info className="w-4 h-4 text-gray-500" />
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Market Context */}
            <div className="bg-[#141B22] rounded-xl border border-[#1E2731] p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-medium">Market Context</h3>
                <button className="text-[#4C82FB] text-sm font-medium hover:text-[#5A8DFC]">
                  Generate
                </button>
              </div>
            </div>

            {/* Rules */}
            <div className="bg-[#141B22] rounded-xl border border-[#1E2731] p-5">
              <h3 className="text-base font-medium mb-3">Rules</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                This market will resolve to "Yes" if any Federal or State jurisdiction of the United States formally charges or otherwise announces a...
              </p>
              <button className="text-[#4C82FB] text-sm font-medium mt-2 hover:text-[#5A8DFC]">
                Show more ↓
              </button>
            </div>
          </div>

          {/* Sidebar - Trade Panel */}
          <div className="lg:sticky lg:top-6 h-fit">
            <TradePanel />
          </div>
        </div>
      </main>
    </div>
  )
}