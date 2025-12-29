"use client";

import { Link2, Bookmark, Info, ChevronDown, FileText, Code, Settings } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { TradePanel } from "@/components/trade-panel";
import { Button } from "@/components/ui/button";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

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
];

const chartConfig = {
  probability: {
    label: "Probability",
    color: "#4C82FB",
  },
} satisfies ChartConfig;

export default function DetailPage() {
  const [timeRange, setTimeRange] = useState("ALL");

  return (
    <div className="min-h-screen bg-[#0B1217] text-white">
      <Navbar />

      <main className="container mx-auto px-4 lg:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 max-w-[1320px] mx-auto">

          {/* Left Column */}
          <div className="space-y-4">

            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-[#1E2731] rounded-xl flex items-center justify-center text-xl shrink-0">
                👨‍💼
              </div>

              <div className="flex-1 min-w-0">
                <h1 className="text-xl lg:text-2xl font-medium leading-tight mb-2">
                  Will anyone be charged over Daycare fraud in Minnesota?
                </h1>

                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span>
                    <span className="text-gray-500">$91,345</span> Vol.
                  </span>
                  <span className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M7 3.5V7L9.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    Jan 31, 2026
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="hover:bg-[#1A2128] text-gray-400">
                  <Link2 className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-[#1A2128] text-gray-400">
                  <Bookmark className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Chart Card */}
            <div className="bg-[#141B22] border border-[#1E2731] rounded-xl p-4">
              <div className="flex items-end gap-2 mb-5">
                <span className="text-5xl font-semibold text-[#4C82FB]">63%</span>
                <span className="text-lg text-[#4C82FB]/80 mb-1">chance</span>
                <span className="ml-2 text-green-500 text-sm font-medium">↑ 7%</span>
              </div>

              <ChartContainer config={chartConfig} className="h-[260px]">
                <LineChart data={chartData}>
                  <CartesianGrid vertical={false} stroke="#1E2731" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: "#52606D", fontSize: 11 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: "#52606D", fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
                  <ChartTooltip content={<ChartTooltipContent className="bg-[#1A2128] border-[#2A3641]" />} />
                  <Line type="monotone" dataKey="probability" stroke="#4C82FB" strokeWidth={2.5} dot={false} />
                </LineChart>
              </ChartContainer>

              {/* Chart Controls */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-1">
                  {["1H","6H","1D","1W","1M","ALL"].map(r => (
                    <button
                      key={r}
                      onClick={() => setTimeRange(r)}
                      className={`px-3 py-1.5 text-xs rounded-md ${
                        timeRange === r ? "bg-[#1E2731] text-white" : "text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>

                <div className="flex gap-1">
                  {[FileText, Code, Settings].map((Icon, i) => (
                    <Button key={i} variant="ghost" size="icon" className="hover:bg-[#1A2128] text-gray-400">
                      <Icon className="w-4 h-4" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Book */}
            <div className="bg-[#141B22] border border-[#1E2731] rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <h3 className="font-medium">Order Book</h3>
                  <Info className="w-4 h-4 text-gray-500" />
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Market Context */}
            <div className="bg-[#141B22] border border-[#1E2731] rounded-xl p-4">
              <div className="flex justify-between">
                <h3 className="font-medium">Market Context</h3>
                <button className="text-[#4C82FB] text-sm">Generate</button>
              </div>
            </div>

            {/* Rules */}
            <div className="bg-[#141B22] border border-[#1E2731] rounded-xl p-4">
              <h3 className="font-medium mb-2">Rules</h3>
              <p className="text-sm text-gray-400">
                This market will resolve to "Yes" if any Federal or State jurisdiction formally charges…
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:sticky lg:top-6 h-fit">
            <TradePanel />
          </div>

        </div>
      </main>
    </div>
  );
}
