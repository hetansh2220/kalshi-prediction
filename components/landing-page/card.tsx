import { Bookmark, Gift } from "lucide-react"
import Link from "next/link";

interface MarketCardProps {
  id: string
  title: string
  image?: string
  mainProbability: number
  volume: string
}

export function MarketCard({ id, title, image, mainProbability, volume }: MarketCardProps) {
  const radius = 34
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (mainProbability / 100) * circumference

  return (
    <div className="
      w-full max-w-xl rounded overflow-hidden cursor-pointer
      bg-[#2a2c33] border border-slate-800
     hover:shadow-xl hover:shadow-black/10
      transition-all duration-300
    ">
      <Link href={`/market/${id}`}>
        {/* HEADER */}
        <div className="p-4 border-b border-slate-800">
          <div className="flex gap-4">

            {/* Image */}
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-700 shrink-0">
              {image ? (
                <img src={image} alt={title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm">
                  No Img
                </div>
              )}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-white leading-snug line-clamp-2">
                {title}
              </h3>
              <span className="text-xs text-slate-400 block mt-1">
                {volume} Volume
              </span>
            </div>

            {/* Gauge */}
            <div className="flex flex-col items-center scale-90">
              <div className="relative w-16 h-16">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                  <defs>
                    <linearGradient id="probGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>

                  <circle cx="40" cy="40" r={radius} strokeWidth="6" className="stroke-slate-700" fill="none" />

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

                <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
                  {mainProbability}%
                </span>
              </div>

              <span className="text-xs text-slate-400 mt-1">
                chance
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* YES / NO BUTTONS */}
      <div className="px-3 py-2 flex gap-3">
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); console.log("YES clicked"); }}
          className="
            flex-1 py-3  font-semibold text-sm
            bg-emerald-500/20 hover:bg-emerald-500/30
            text-emerald-400 
            transition cursor-pointer
          "
        >
          Yes
        </button>

        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); console.log("NO clicked"); }}
          className="
            flex-1 py-3 font-semibold text-sm
            bg-red-500/20 hover:bg-red-500/30
            text-red-400 
            transition cursor-pointer
          "
        >
          No
        </button>
      </div>

      {/* FOOTER */}
      <div className="px-4 py-3 border-t border-slate-800 bg-[#262830] flex items-center justify-between">
        <span className="text-xs text-slate-500">
          {id}
        </span>

        <div className="flex gap-1">
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); console.log("Gift clicked"); }}
            className="p-2 hover:bg-slate-800 rounded-lg transition text-slate-400 hover:text-white"
          >
            <Gift className="w-4 h-4" />
          </button>

          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); console.log("Bookmark clicked"); }}
            className="p-2 hover:bg-slate-800 rounded-lg transition text-slate-400 hover:text-white"
          >
            <Bookmark className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
