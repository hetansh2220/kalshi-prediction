"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TradePanel() {
  const [selectedOutcome, setSelectedOutcome] = useState('Yes');
  const [amount, setAmount] = useState(0);
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Politics', 'Trump', 'Trump Presidency'];
  
  const relatedMarkets = [
    { name: 'Tim Walz charged by March 31?', percentage: '13%', image: '👤' },
    { name: 'Will AI be charged with a crime before 2027?', percentage: '8%', image: '🤖' },
    { name: 'Jerome Powell federally charged in 2025?', percentage: '<1%', image: '👔' },
  ];

  const incrementAmount = (value: number) => {
    setAmount(prev => prev + value);
  };

  return (
    <div className="bg-[#141B22] rounded-xl border border-[#1E2731]">
      <div className="p-5">
        {/* Buy/Sell Tabs */}
        <div className="flex gap-2 mb-5">
          <button className="flex-1 py-2.5 text-sm font-medium text-white bg-[#1E2731] rounded-lg">
            Buy
          </button>
          <button className="flex-1 py-2.5 text-sm font-medium text-gray-500 hover:text-white rounded-lg">
            Sell
          </button>
        </div>

        {/* Market Dropdown */}
        <div className="mb-5">
          <label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">
            Market
          </label>
          <button className="w-full bg-[#0B1217] border border-[#1E2731] rounded-lg px-4 py-3 flex items-center justify-between hover:border-[#2A3641] transition-colors">
            <span className="text-sm text-left">
              Will anyone be charged over Daycare fraud in Minnesota?
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0 ml-2" />
          </button>
        </div>

        {/* Yes/No Outcome Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <button 
            onClick={() => setSelectedOutcome('Yes')}
            className={`relative py-6 rounded-xl font-medium transition-all ${
              selectedOutcome === 'Yes' 
                ? 'bg-[#00D298] text-white shadow-lg shadow-[#00D298]/20' 
                : 'bg-[#00D298]/10 text-[#00D298] hover:bg-[#00D298]/20'
            }`}
          >
            <div className="text-xs mb-1">Yes</div>
            <div className="text-2xl font-bold">63¢</div>
          </button>
          <button 
            onClick={() => setSelectedOutcome('No')}
            className={`relative py-6 rounded-xl font-medium transition-all ${
              selectedOutcome === 'No' 
                ? 'bg-[#FF6B9D] text-white shadow-lg shadow-[#FF6B9D]/20' 
                : 'bg-[#FF6B9D]/10 text-[#FF6B9D] hover:bg-[#FF6B9D]/20'
            }`}
          >
            <div className="text-xs mb-1">No</div>
            <div className="text-2xl font-bold">38¢</div>
          </button>
        </div>

        {/* Amount Input */}
        <div className="mb-5">
          <label className="text-xs text-gray-500 uppercase tracking-wide mb-2 block">
            Amount
          </label>
          <div className="text-4xl font-bold text-gray-600 mb-3">
            ${amount}
          </div>
          <div className="grid grid-cols-4 gap-2">
            <button 
              onClick={() => incrementAmount(1)}
              className="px-3 py-2 bg-[#1E2731] hover:bg-[#2A3641] rounded-lg text-sm font-medium transition-colors"
            >
              +$1
            </button>
            <button 
              onClick={() => incrementAmount(20)}
              className="px-3 py-2 bg-[#1E2731] hover:bg-[#2A3641] rounded-lg text-sm font-medium transition-colors"
            >
              +$20
            </button>
            <button 
              onClick={() => incrementAmount(100)}
              className="px-3 py-2 bg-[#1E2731] hover:bg-[#2A3641] rounded-lg text-sm font-medium transition-colors"
            >
              +$100
            </button>
            <button className="px-3 py-2 bg-[#1E2731] hover:bg-[#2A3641] rounded-lg text-sm font-medium transition-colors">
              Max
            </button>
          </div>
        </div>

        {/* Trade Button */}
        <Button 
          className="w-full bg-[#4C82FB] hover:bg-[#5A8DFC] text-white py-3.5 rounded-xl font-semibold transition-colors mb-4 h-auto"
        >
          Trade
        </Button>

        <p className="text-xs text-gray-500 text-center">
          By trading, you agree to the{' '}
          <span className="text-[#4C82FB] hover:underline cursor-pointer">
            Terms of Use
          </span>.
        </p>
      </div>

      {/* Related Markets Section */}
      <div className="border-t border-[#1E2731] px-5 py-4">
        <div className="flex gap-2 flex-wrap mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-[#1E2731] text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Related Markets List */}
        <div className="space-y-2">
          {relatedMarkets.map((market, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 hover:bg-[#0B1217] rounded-lg cursor-pointer transition-colors group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                {market.image}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-400 group-hover:text-gray-300 line-clamp-2 leading-relaxed">
                  {market.name}
                </p>
              </div>
              <div className="text-base font-bold flex-shrink-0">
                {market.percentage}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}