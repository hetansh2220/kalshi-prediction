"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";
import { useState } from "react";

interface MarketCardProps {
  id: string;
  title: string;
  image?: string;
  mainProbability: number;
  volume: string;
}

export function MarketCard({
  id,
  title,
  image,
  mainProbability,
  volume,
}: MarketCardProps) {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (mainProbability / 100) * circumference;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSelection, setActiveSelection] = useState<"yes" | "no">("yes");
  const [betAmount, setBetAmount] = useState(10);

  const winnings = Math.round(betAmount * (100 / Math.max(mainProbability, 1)));

  const openModal = (e: React.MouseEvent, selection: "yes" | "no") => {
    e.preventDefault();
    e.stopPropagation();
    setActiveSelection(selection);
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className="
          w-full 
          max-w-xl 
          rounded 
          overflow-hidden 
          cursor-pointer
          bg-transparent
          border border-slate-800
          hover:shadow-xl hover:shadow-black/10
          transition-all duration-300
        "
      >
        <Link href={`/market/${id}`}>
          {/* HEADER */}
          <div className="p-3 sm:p-4">
            <div className="flex gap-3 sm:gap-4">
              {/* Image */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-slate-700 shrink-0">
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs sm:text-sm">
                    No Img
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-semibold text-white leading-snug line-clamp-2">
                  {title}
                </h3>
                <span className="text-[10px] sm:text-xs text-slate-400 block mt-1">
                  {volume} Volume
                </span>
              </div>

              {/* Gauge */}
              <div className="flex flex-col items-center scale-75 sm:scale-90 md:scale-100">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                    <defs>
                      <linearGradient
                        id="probGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#34d399" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>

                    <circle
                      cx="40"
                      cy="40"
                      r={radius}
                      strokeWidth="6"
                      className="stroke-slate-700"
                      fill="none"
                    />

                    <circle
                      cx="40"
                      cy="40"
                      r={radius}
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                      stroke="url(#probGradient)"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      className="transition-all duration-500"
                    />
                  </svg>

                  <span className="absolute inset-0 flex items-center justify-center text-base sm:text-lg font-bold text-white">
                    {mainProbability}%
                  </span>
                </div>

                <span className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  chance
                </span>
              </div>
            </div>
          </div>

          {/* YES / NO BUTTONS */}
          <div className="px-2 sm:px-3 py-2 flex gap-2 sm:gap-3">
            <button
              onClick={(e) => openModal(e, "yes")}
              className="
                flex-1 py-2 sm:py-3 rounded-md font-semibold text-xs sm:text-sm
                bg-emerald-500/20 hover:bg-emerald-500/30
                text-emerald-400 transition cursor-pointer
              "
            >
              Yes
            </button>

            <button
              onClick={(e) => openModal(e, "no")}
              className="
                flex-1 py-2 sm:py-3 font-semibold text-xs sm:text-sm rounded-md
                bg-red-500/20 hover:bg-red-500/30
                text-red-400 transition cursor-pointer
              "
            >
              No
            </button>
          </div>

          {/* FOOTER */}
        </Link>
      </div>

      {/* RESPONSIVE DIALOG */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent
          className="
            w-[95vw]
            sm:max-w-sm
            bg-[#2a2c33]
            text-white
            rounded-lg
            border-none
            p-5 sm:p-6
          "
        >
          <div className="space-y-6 pt-2">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover bg-[#444654]"
                  />
                ) : (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-[#444654]" />
                )}

                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-sm sm:text-base leading-tight">
                    {title}
                  </h2>
                </div>
              </div>
            </div>

            <div className="h-px bg-[#444654]" />

            {/* Amount */}
            <div className="space-y-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wide font-medium text-gray-400 mb-1">
                    Amount
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    Balance $0.00
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-3xl sm:text-4xl font-bold text-gray-400">
                    <span className="text-2xl sm:text-3xl text-gray-400">
                      $
                    </span>
                    {betAmount}
                  </p>
                </div>
              </div>

              {/* Quick buttons */}
              <div className="grid grid-cols-2 sm:flex sm:gap-2 gap-2">
                <button
                  onClick={() => setBetAmount(1)}
                  className="px-3 py-2 bg-[#393C44] hover:bg-[#4A4E57] rounded-md text-xs sm:text-sm text-gray-400 hover:text-white transition"
                >
                  +$1
                </button>
                <button
                  onClick={() => setBetAmount(betAmount + 20)}
                  className="px-3 py-2 bg-[#393C44] hover:bg-[#4A4E57] rounded-md text-xs sm:text-sm text-gray-400 hover:text-white transition"
                >
                  +$20
                </button>
                <button
                  onClick={() => setBetAmount(betAmount + 100)}
                  className="px-3 py-2 bg-[#393C44] hover:bg-[#4A4E57] rounded-md text-xs sm:text-sm text-gray-400 hover:text-white transition"
                >
                  +$100
                </button>
                <button
                  onClick={() => setBetAmount(1000)}
                  className="px-3 py-2 bg-[#393C44] hover:bg-[#4A4E57] rounded-md text-xs sm:text-sm text-gray-400 hover:text-white transition"
                >
                  Max
                </button>
              </div>

              <Slider
                value={[betAmount]}
                onValueChange={(val) => setBetAmount(val[0])}
                min={1}
                max={1000}
                step={1}
                className="w-full text-gray-400"
              />
            </div>

            <div className="h-px bg-[#444654]" />

            {/* CTA */}
            <Button
              onClick={() => setIsModalOpen(false)}
              className={`
                w-full
                font-semibold 
                py-6 sm:p-8
                rounded-lg 
                transition
                ${
                  activeSelection === "yes"
                    ? "bg-emerald-500/30 hover:bg-emerald-500/50 text-emerald-300"
                    : "bg-red-500/30 hover:bg-red-500/50 text-red-300"
                }
              `}
            >
              <div className="flex flex-col gap-1">
                <span className="text-base sm:text-lg font-bold">
                  Buy {activeSelection === "yes" ? "Yes" : "No"}
                </span>
                <span className="text-[10px] sm:text-xs opacity-90">
                  To win ${winnings}
                </span>
              </div>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
