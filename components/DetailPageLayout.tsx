"use client";

import { useState, useMemo } from "react";
import { Navbar } from "@/components/navbar";
import { TradePanel } from "@/components/trade-panel";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import {
  Link2,
  Bookmark,
  Info,
  ChevronDown,
  FileText,
  Code,
  Settings,
} from "lucide-react";

const rawChartData = [
  { time: new Date("2024-12-29T08:00:00").getTime(), probability: 85 },
  { time: new Date("2024-12-29T09:00:00").getTime(), probability: 85 },
  { time: new Date("2024-12-29T10:00:00").getTime(), probability: 45 },
  { time: new Date("2024-12-29T11:00:00").getTime(), probability: 45 },
  { time: new Date("2024-12-29T12:00:00").getTime(), probability: 60 },
  { time: new Date("2024-12-29T13:00:00").getTime(), probability: 68 },
  { time: new Date("2024-12-29T14:00:00").getTime(), probability: 68 },
  { time: new Date("2024-12-29T15:00:00").getTime(), probability: 65 },
  { time: new Date("2024-12-29T16:00:00").getTime(), probability: 75 },
  { time: new Date("2024-12-29T17:00:00").getTime(), probability: 63 },
  { time: new Date("2024-12-29T18:00:00").getTime(), probability: 63 },
  { time: new Date("2024-12-29T19:00:00").getTime(), probability: 63 },
  { time: new Date("2024-12-29T20:00:00").getTime(), probability: 63 },
];

const chartConfig = {
  probability: {
    label: "Probability",
    color: "#4C82FB",
  },
} satisfies ChartConfig;

function filterByRange(data: typeof rawChartData, range: string) {
  if (range === "ALL") return data;

  const now = Math.max(...data.map((d) => d.time));

  const ranges: Record<string, number> = {
    "1H": 60 * 60 * 1000,
    "6H": 6 * 60 * 60 * 1000,
    "1D": 24 * 60 * 60 * 1000,
    "1W": 7 * 24 * 60 * 60 * 1000,
    "1M": 30 * 24 * 60 * 60 * 1000,
  };

  const cutoff = now - ranges[range];
  return data.filter((d) => d.time >= cutoff);
}

//page
export default function MarketDetailPage() {
  const [timeRange, setTimeRange] = useState("ALL");

  const chartData = useMemo(
    () => filterByRange(rawChartData, timeRange),
    [timeRange]
  );

  return (
    <div className="min-h-screen bg-[#0B1217] text-white">
      <Navbar />

      <main className="container mx-auto px-4 lg:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 max-w-[1320px] mx-auto">
          {/* LEFT COLUMN */}
          <div className="space-y-4">
            {/* HEADER */}
            <div className="flex items-start gap-4">
              {/* IMAGE */}
              <img
                src="/poly.webp"
                alt="Market"
                className="w-16 h-16 rounded-lg object-cover bg-[#1E2731]"
              />

              {/* TEXT BLOCK */}
              <div className="flex-1 min-w-0">
                {/* TITLE */}
                <h1 className="text-[26px] leading-snug font-semibold text-white mb-1">
                  Will anyone be charged over Daycare fraud in Minnesota?
                </h1>

                {/* META */}
                <div className="flex items-center gap-3 text-[18px] text-[#9AA4AF]">
                  <span>$205,005 Vol.</span>
                  <span className="flex items-center gap-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="opacity-70"
                    >
                      <circle
                        cx="7"
                        cy="7"
                        r="6"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M7 3.5V7L9.5 9.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                    Jan 31, 2026
                  </span>
                </div>

                {/* PROBABILITY */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[22px] font-semibold text-[#3BA9FF]">
                    44%
                  </span>
                  <span className="text-[14px] text-[#3BA9FF]/80">chance</span>
                  <span className="flex items-center gap-1 text-[13px] text-red-400">
                    ▼ 43%
                  </span>
                </div>
              </div>
            </div>

            {/* CHART CARD */}
            <div className="bg-[#141B22] border border-[#1E2731] rounded-xl p-4">
              <div className="flex items-end gap-2 mb-4">
                <span className="text-5xl font-semibold text-[#4C82FB]">
                  63%
                </span>
                <span className="text-lg text-[#4C82FB]/80 mb-1">chance</span>
                <span className="ml-2 text-green-500 text-sm">↑ 7%</span>
              </div>

              <ChartContainer config={chartConfig} className="h-[280px] w-full">
                <LineChart data={chartData}>
                  <CartesianGrid vertical={false} stroke="#1E2731" />

                  <XAxis
                    dataKey="time"
                    type="number"
                    scale="time"
                    domain={["dataMin", "dataMax"]}
                    tickFormatter={(value) =>
                      new Date(value).toLocaleTimeString([], {
                        hour: "numeric",
                        minute: "2-digit",
                      })
                    }
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#52606D", fontSize: 11 }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#52606D", fontSize: 11 }}
                    tickFormatter={(v) => `${v}%`}
                    domain={[0, 100]}
                  />

                  <ChartTooltip
                    content={
                      <ChartTooltipContent className="bg-[#1A2128] border-[#2A3641]" />
                    }
                  />

                  <Line
                    type="monotone"
                    dataKey="probability"
                    stroke="#4C82FB"
                    strokeWidth={2.5}
                    dot={false}
                    isAnimationActive
                    animationDuration={300}
                  />
                </LineChart>
              </ChartContainer>

              {/* TIME RANGE CONTROLS */}
              <div className="flex justify-between items-center mt-3">
                <div className="flex gap-1">
                  {["1H", "6H", "1D", "1W", "1M", "ALL"].map((range) => (
                    <button
                      key={range}
                      onClick={() => setTimeRange(range)}
                      className={`px-3 py-1.5 text-xs rounded-md ${
                        timeRange === range
                          ? "bg-[#1E2731] text-white"
                          : "text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>

                <div className="flex gap-1">
                  {[FileText, Code, Settings].map((Icon, i) => (
                    <Button
                      key={i}
                      variant="ghost"
                      size="icon"
                      className="hover:bg-[#1A2128]"
                    >
                      <Icon className="w-4 h-4" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* ORDER BOOK */}
            <div className="bg-[#141B22] border border-[#1E2731] rounded-xl p-4 flex justify-between">
              <div className="flex gap-2 items-center">
                <span className="font-medium">Order Book</span>
                <Info className="w-4 h-4 text-gray-500" />
              </div>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </div>

            {/* MARKET CONTEXT */}
            <div className="bg-[#141B22] border border-[#1E2731] rounded-xl p-4 flex justify-between">
              <span className="font-medium">Market Context</span>
              <button className="text-[#4C82FB] text-sm">Generate</button>
            </div>

            {/* RULES */}
            <div className="bg-[#141B22] border border-[#1E2731] rounded-xl p-4">
              <span className="font-medium block mb-1">Rules</span>
              <p className="text-sm text-gray-400">
                This market resolves to "Yes" if any Federal or State
                jurisdiction formally charges…
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:sticky lg:top-6 h-fit">
            <TradePanel />
          </div>
        </div>
      </main>
    </div>
  );
}
