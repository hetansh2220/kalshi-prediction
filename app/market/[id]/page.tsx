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
import { FileText, Code, Settings } from "lucide-react";

type PageProps = {
  params: {
    id: string;
  };
};

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

export default function MarketDetailPage({ params }: PageProps) {
  const { id } = params;

  const [timeRange, setTimeRange] = useState("ALL");
  const chartData = useMemo(
    () => filterByRange(rawChartData, timeRange),
    [timeRange]
  );

  return (
    <div className="min-h-screen bg-[#1a1b1e] text-white">
      <main className="px-5 py-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-5 w-full">

          {/* LEFT */}
          <div className="space-y-4">
            {/* HEADER */}
            <div className="flex items-start gap-3">
              <img
                src="/poly.webp"
                alt="Market"
                className="w-14 h-14 rounded-lg object-cover bg-[#1E2731]"
              />

              <div className="flex-1 min-w-0">
                <h1 className="text-[22px] leading-snug font-semibold mb-1">
                  Market ID: {id}
                </h1>

                <div className="flex items-center gap-3 text-[15px] text-[#9AA4AF]">
                  <span>$205,005 Vol.</span>
                  <span className="flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M7 3.5V7L9.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    Jan 31, 2026
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[18px] font-semibold text-primary">44%</span>
                  <span className="text-[13px] text-accent">chance</span>
                  <span className="flex items-center gap-1 text-[12px] text-red-400">
                    ▼ 43%
                  </span>
                </div>
              </div>
            </div>

            {/* CHART */}
            <div className=" border-2 border-[#1E2731] rounded-xl p-3.5">
              <div className="flex items-end gap-2 mb-3">
                <span className="text-4xl font-semibold text-primary">63%</span>
                <span className="text-base text-accent- mb-1">chance</span>
                <span className="ml-2 text-green-500 text-xs">↑ 7%</span>
              </div>

              <ChartContainer config={chartConfig} className="h-64 w-full">
                <LineChart data={chartData}>
                  <CartesianGrid vertical={false} stroke="#1E2731" />
                  <XAxis
                    dataKey="time"
                    type="number"
                    scale="time"
                    domain={["dataMin", "dataMax"]}
                    tickFormatter={(v) =>
                      new Date(v).toLocaleTimeString([], {
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
                    strokeWidth={2.2}
                    dot={false}
                    isAnimationActive
                    animationDuration={300}
                  />
                </LineChart>
              </ChartContainer>

              <div className="flex justify-between items-center mt-3">
                <div className="flex gap-1">
                  {["1H", "6H", "1D", "1W", "1M", "ALL"].map((range) => (
                    <button
                      key={range}
                      onClick={() => setTimeRange(range)}
                      className={`px-3 py-1.5 text-xs rounded-md ${
                        timeRange === range
                          ? "bg-primary text-white"
                          : "text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>

                <div className="flex gap-1">
                  {[FileText, Code, Settings].map((Icon, i) => (
                    <Button key={i} variant="ghost" size="icon" className="hover:bg-[#1A2128]">
                      <Icon className="w-4 h-4" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:sticky lg:top-6 h-fit">
            <TradePanel />
          </div>
        </div>
      </main>
    </div>
  );
}
