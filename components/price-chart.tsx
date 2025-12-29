"use client";

import { useState } from 'react';
import { FileText, Code, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PriceChart() {
  const [timeRange, setTimeRange] = useState('ALL');

  return (
    <div className="relative">
      {/* Chart SVG */}
      <div className="relative h-72 mb-4">
        <svg className="w-full h-full" viewBox="0 0 900 280" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4C82FB" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4C82FB" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Horizontal grid lines */}
          {[90, 80, 70, 60, 50, 40].map((val, i) => (
            <g key={i}>
              <line 
                x1="0" 
                y1={280 - ((val - 35) * 280 / 60)} 
                x2="900" 
                y2={280 - ((val - 35) * 280 / 60)} 
                stroke="#1E2731" 
                strokeWidth="1"
              />
              <text 
                x="885" 
                y={280 - ((val - 35) * 280 / 60) + 5} 
                fill="#52606D" 
                fontSize="12" 
                textAnchor="end"
              >
                {val}%
              </text>
            </g>
          ))}

          {/* Area fill */}
          <path
            d={`M 0 ${280 - ((85 - 35) * 280 / 60)} 
                L 150 ${280 - ((85 - 35) * 280 / 60)}
                L 225 ${280 - ((45 - 35) * 280 / 60)}
                L 300 ${280 - ((45 - 35) * 280 / 60)}
                L 375 ${280 - ((60 - 35) * 280 / 60)}
                L 525 ${280 - ((68 - 35) * 280 / 60)}
                L 675 ${280 - ((65 - 35) * 280 / 60)}
                L 900 ${280 - ((63 - 35) * 280 / 60)}
                L 900 280
                L 0 280 Z`}
            fill="url(#chartGradient)"
          />

          {/* Line */}
          <path
            d={`M 0 ${280 - ((85 - 35) * 280 / 60)} 
                L 150 ${280 - ((85 - 35) * 280 / 60)}
                L 225 ${280 - ((45 - 35) * 280 / 60)}
                L 300 ${280 - ((45 - 35) * 280 / 60)}
                L 375 ${280 - ((60 - 35) * 280 / 60)}
                L 525 ${280 - ((68 - 35) * 280 / 60)}
                L 675 ${280 - ((65 - 35) * 280 / 60)}
                L 900 ${280 - ((63 - 35) * 280 / 60)}`}
            fill="none"
            stroke="#4C82FB"
            strokeWidth="2.5"
          />

          {/* Time labels */}
          {['8:00am', '12:00pm', '4:00pm', '8:00pm'].map((time, i) => (
            <text 
              key={i}
              x={i * 300} 
              y="275" 
              fill="#52606D" 
              fontSize="11" 
              textAnchor={i === 0 ? 'start' : 'middle'}
            >
              {time}
            </text>
          ))}
        </svg>
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
  );
}