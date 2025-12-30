"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function TradePanel() {
  const [mode, setMode] = useState<"buy" | "sell">("buy");
  const [selection, setSelection] = useState<"yes" | "no">("yes");
  const [amount, setAmount] = useState<number | null>(null);

  const priceYes = 46;
  const priceNo = 55;

  function addAmount(v: number) {
    setAmount(prev => (prev ?? 0) + v);
  }

  return (
    <div className=" border-2 border-[#1E2731] rounded-2xl p-5 w-full max-w-lg">
      
      {/* TABS */}
      <div className="flex items-center mb-5 border-b border-[#1E2731] text-base">
        <button
          onClick={() => setMode("buy")}
          className={`px-5 py-2.5 ${
            mode === "buy"
              ? "text-white border-b-2 border-white"
              : "text-gray-400"
          }`}
        >
          Buy
        </button>

        <button
          onClick={() => setMode("sell")}
          className={`px-5 py-2.5 ${
            mode === "sell"
              ? "text-white border-b-2 border-white"
              : "text-gray-400"
          }`}
        >
          Sell
        </button>
      </div>

      {/* YES / NO */}
      <div className="grid grid-cols-2 gap-3 w-full">
        <button
          onClick={() => setSelection("yes")}
          className={`
            h-10
            rounded-xl
            font-semibold
            text-base
            transition-all
            duration-200
            flex items-center justify-center
            ${
              selection === "yes"
                ? "bg-[#3BAB68] text-white shadow-[0_0_18px_#3bab6835]"
                : "bg-[#141C26] text-gray-400 hover:bg-[#1C2533]"
            }
          `}
        >
          Yes {priceYes}¢
        </button>

        <button
          onClick={() => setSelection("no")}
          className={`
            h-10
            rounded-xl
            font-semibold
            text-base
            transition-all
            duration-200
            flex items-center justify-center
            ${
              selection === "no"
                ? "bg-[#E04444] text-white shadow-[0_0_18px_#e0444435]"
                : "bg-[#141C26] text-gray-400 hover:bg-[#1C2533]"
            }
          `}
        >
          No {priceNo}¢
        </button>
      </div>

      {/* AMOUNT */}
      <div className="mt-7">
        <p className="text-sm text-gray-300 mb-1">Amount</p>
        <p className="text-xs text-gray-500 mb-3">Balance $0.00</p>

        <div className="flex items-center justify-end gap-2 border-[#1E2731] rounded-xl px-4 py-3.5">
          <input
            type="number"
            value={amount === null ? "" : amount}
            onChange={e =>
              setAmount(e.target.value === "" ? null : Number(e.target.value))
            }
            className="bg-transparent border-none outline-none text-white text-3xl font-bold text-right w-[140px]
                       [appearance:textfield] 
                       [&::-webkit-outer-spin-button]:appearance-none 
                       [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="$0"
            min={0}
          />
        </div>

        {/* QUICK ADD */}
        <div className="flex gap-2.5 mt-4">
          <button
            className="bg-[#1E2731] px-4 py-2.5 rounded-md text-sm text-gray-200"
            onClick={() => addAmount(1)}
          >
            +$1
          </button>

          <button
            className="bg-[#1E2731] px-4 py-2.5 rounded-md text-sm text-gray-200"
            onClick={() => addAmount(20)}
          >
            +$20
          </button>

          <button
            className="bg-[#1E2731] px-4 py-2.5 rounded-md text-sm text-gray-200"
            onClick={() => addAmount(100)}
          >
            +$100
          </button>

          <button
            className="bg-[#1E2731] px-4 py-2.5 rounded-md text-sm text-gray-200"
            onClick={() => setAmount(1000)}
          >
            Max
          </button>
        </div>
      </div>

      {/* CTA */}
      <Button className="w-full mt-7 py-5 text-md font-bold bg-primary hover:bg-[#3574E6]">
        {mode === "buy"
          ? `Buy ${selection === "yes" ? "Yes" : "No"}`
          : `Sell ${selection === "yes" ? "Yes" : "No"}`}
      </Button>
    </div>
  );
}
