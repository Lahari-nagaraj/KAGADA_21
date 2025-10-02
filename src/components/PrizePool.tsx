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

  return (
    <>
      <section id="prizes">
        {/* Style block for fonts, copied for consistency */}
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
                Compete for prestige, recognition, and a chance to win a share of
                our massive cash pool at KAGADA 2025.
              </p>

              {/* Main Prize Pool Card */}
              <div className="flex justify-center">
                <div
                  className={`${cardStyle} p-8 sm:p-12 max-w-xl w-full text-center border-amber-500/50`}
                    // CHANGES: Reduced max-w to 'max-w-xl' and padding to 'p-8 sm:p-12'
                >
                  <div className="flex flex-col items-center">
                    {/* Icon */}
                    <div className="p-4 rounded-full mb-4 ring-4 text-amber-500/20">
                      <DollarSign className="text-amber-500" size={40} /> 
                        {/* Reduced icon size slightly */}
                    </div>

                    <h3 className="font-rajdhani text-3xl sm:text-4xl font-bold text-slate-800 mb-3">
                        {/* Reduced title font size */}
                      Total Prize Money
                    </h3>
                    
                    {/* Prize Value (The main focus) */}
                    <p
                      className="font-rajdhani text-5xl sm:text-6xl font-extrabold text-blue-600 mb-5 tracking-tight"
                        // Reduced prize value font size
                    >
                      $40,000
                    </p>

                    {/* Distribution Note */}
                    <p className="text-slate-600 max-w-md text-sm">
                      The pool is distributed across categories,
                      including Paper, Poster, and Project presentations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Note on Participation (Kept for completeness) */}
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