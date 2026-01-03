"use client";

import { MarketCard } from "@/components/landing-page/card";

interface Market {
  id: string;
  title: string;
  image?: string;
  mainProbability: number;
  options: Array<{
    label: string;
    probability: number;
    outcome: string;
  }>;
  volume: string;
  timeframe?: string;
}

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
];

export function Page() {
  return (
    <div className="min-h-screen bg-[#1a1b1e] text-white">
      <div className="p-3 sm:p-4">
        <div
          className="
          grid 
          grid-cols-1
          md:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4
          gap-3 sm:gap-4
        "
        >
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
  );
}

export default Page;
