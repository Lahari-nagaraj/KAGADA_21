import React from "react";
import { DollarSign, Zap, Gift } from "lucide-react";

// --- Reusable Blueprint Card Style (Copied for consistency) ---
const cardStyle = `relative bg-white/70 backdrop-blur-md border border-blue-600/20 shadow-lg rounded-lg
                   overflow-hidden 
                   bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] 
                   bg-[length:2rem_2rem]`;

// --- Section Title Component (Copied for reuse) ---
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="text-center mb-12 sm:mb-16">
    <h2 className="font-rajdhani text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-wider">
      {children}
    </h2>
    <div className="w-32 h-1 bg-blue-600/50 mx-auto rounded-full mt-4"></div>
  </div>
);

// --- PrizePool Component ---
const PrizePool: React.FC = () => {
  const prizes = [
    {
      rank: "1st Place",
      value: "$10,000",
      description: "Grand Prize for overall project excellence.",
      icon: DollarSign,
      color: "text-amber-500", // Gold/Amber
      bgClass: "border-amber-500/30",
    },
    {
      rank: "2nd Place",
      value: "$5,000",
      description: "For outstanding innovation and execution.",
      icon: Zap,
      color: "text-slate-400", // Silver/Slate
      bgClass: "border-slate-400/30",
    },
    {
      rank: "Special Mentions",
      value: "Exclusive Goodies",
      description: "Merchandise and certificates for promising teams.",
      icon: Gift,
      color: "text-teal-500", // Bronze/Teal
      bgClass: "border-teal-500/30",
    },
  ];

  return (
    <>
      <section id="prizes">
        {/* Style block for fonts, copied from original component */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
          .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
          .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
        `}</style>

        <section className="py-16 sm:py-20 bg-slate-50 font-roboto-mono">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle>
                The Grand <span className="text-blue-600">Prize Pool</span>
              </SectionTitle>

              <p className="text-center text-slate-600 max-w-3xl mx-auto leading-relaxed -mt-8 mb-16">
                Compete for prestige, recognition, and a substantial pool of
                cash prizes and exclusive rewards at KAGADA 2025.
              </p>

              {/* Prize Cards */}
              <div className="grid md:grid-cols-3 gap-8">
                {prizes.map((prize, index) => (
                  <div
                    key={index}
                    className={`${cardStyle} p-8 flex flex-col items-center text-center transform hover:scale-[1.02] transition-transform duration-300 ${prize.bgClass}`}
                  >
                    {/* Icon & Rank */}
                    <div
                      className={`p-4 rounded-full mb-4 ring-4 ${prize.color}/20`}
                    >
                      <prize.icon className={`${prize.color}`} size={36} />
                    </div>

                    <h3 className="font-rajdhani text-2xl font-bold text-slate-800 mb-2">
                      {prize.rank}
                    </h3>
                    
                    {/* Prize Value */}
                    <p
                      className={`font-rajdhani text-4xl font-extrabold ${prize.color} mb-4`}
                    >
                      {prize.value}
                    </p>

                    {/* Description */}
                    <p className="text-slate-600 text-sm">{prize.description}</p>
                  </div>
                ))}
              </div>

              {/* Note on Participation */}
              <div className="text-center mt-16 p-6 bg-blue-100/50 border-l-4 border-blue-600 rounded-lg">
                <p className="font-semibold text-blue-800">
                  <span className="font-rajdhani text-lg font-bold mr-1">NOTE:</span>
                  All participants will receive a Certificate of Participation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default PrizePool;