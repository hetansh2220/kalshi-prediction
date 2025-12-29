"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TradePanel() {
  const [outcome, setOutcome] = useState<"Yes" | "No">("Yes");
  const [amount, setAmount] = useState(0);
  const [tab, setTab] = useState("All");

  return (
    <div className="bg-[#141B22] border border-[#1E2731] rounded-xl shadow-sm">
      <div className="p-4 space-y-4">

        {/* Buy / Sell */}
        <div className="flex gap-2">
          <button className="flex-1 py-2 text-sm bg-[#1E2731] rounded-md">Buy</button>
          <button className="flex-1 py-2 text-sm text-gray-500 hover:text-white rounded-md">Sell</button>
        </div>

        {/* Market */}
        <button className="w-full flex justify-between items-center bg-[#0B1217] border border-[#1E2731] rounded-lg px-3 py-2 text-sm">
          Market
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </button>

        {/* Yes / No */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setOutcome("Yes")}
            className={`py-4 rounded-xl ${
              outcome === "Yes"
                ? "bg-[#3FB950] text-white"
                : "bg-[#3FB950]/10 text-[#3FB950]"
            }`}
          >
            <div className="text-xs">Yes</div>
            <div className="text-xl font-semibold">63¢</div>
          </button>

          <button
            onClick={() => setOutcome("No")}
            className={`py-4 rounded-xl ${
              outcome === "No"
                ? "bg-[#1E2731] text-white"
                : "bg-[#1E2731]/70 text-gray-400"
            }`}
          >
            <div className="text-xs">No</div>
            <div className="text-xl font-semibold">38¢</div>
          </button>
        </div>

        {/* Amount */}
        <div>
          <div className="text-3xl text-gray-500 font-semibold mb-2">${amount}</div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 20, 100].map(v => (
              <button key={v} onClick={() => setAmount(amount + v)} className="bg-[#1E2731] rounded-md py-1.5 text-xs">
                +${v}
              </button>
            ))}
            <button className="bg-[#1E2731] rounded-md py-1.5 text-xs">Max</button>
          </div>
        </div>

        <Button className="w-full bg-[#4C82FB] hover:bg-[#5A8DFC] h-10">
          Trade
        </Button>
      </div>

      {/* Related */}
      <div className="border-t border-[#1E2731] p-4 space-y-3">
        <div className="flex gap-2 flex-wrap">
          {["All","Politics","Trump","Trump Presidency"].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1.5 text-xs rounded-md ${
                tab === t ? "bg-[#1E2731]" : "text-gray-500"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {["Tim Walz charged by March 31?","AI charged before 2027?","Jerome Powell charged?"].map((m,i)=>(
          <div key={i} className="flex justify-between text-sm text-gray-400 hover:text-white cursor-pointer">
            <span>{m}</span>
            <span className="font-semibold">13%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
