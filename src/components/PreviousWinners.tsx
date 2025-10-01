import React from "react";
import { Trophy, Star, Award } from "lucide-react";

// --- Reusable Blueprint Card Style ---
const cardStyle = `relative bg-white/70 backdrop-blur-md border border-blue-600/20 shadow-lg rounded-lg
                   overflow-hidden 
                   bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] 
                   bg-[length:2rem_2rem]`;

// --- Section Title Component ---
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-center mb-12 sm:mb-16">
    <h2 className="font-rajdhani text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-wider">
      {children}
    </h2>
    <div className="w-32 h-1 bg-blue-600/50 mx-auto rounded-full mt-4"></div>
  </div>
);

// --- Previous Winners Component ---
const PreviousWinners: React.FC = () => {
  const winners = [
    {
      title: "Poster Presentation",
      winner: "Team Alpha",
      icon: Trophy,
      bg: "/poster.png", // background image path
    },
    {
      title: "Paper Presentation",
      winner: "Team Beta",
      icon: Star,
      bg: "/poster.png",
    },
    {
      title: "Project Presentation",
      winner: "Team Gamma",
      icon: Award,
      bg: "/poster.png",
    },
  ];

  return (
    <>
      <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
          .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
          .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
      `}</style>

      <section className="py-16 sm:py-20 bg-slate-50 font-roboto-mono">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle>
              Previous <span className="text-blue-600">Winners</span>
            </SectionTitle>

            <p className="text-center text-slate-600 max-w-3xl mx-auto leading-relaxed -mt-8 mb-16">
              Celebrating the brilliant minds who have left their mark on
              KAGADA's legacy.
            </p>

            {/* Winner Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {winners.map((winner, index) => (
                <div
                  key={index}
                  className={`${cardStyle} group p-8 flex flex-col text-left transform hover:-translate-y-2 transition-transform duration-300 hover:border-blue-600/30`}
                >
                  {/* Background Image with 50% opacity */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: `url(${winner.bg})` }}
                  ></div>

                  {/* Overlay Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="font-rajdhani text-2xl font-bold text-slate-800">
                          {winner.title}
                        </h3>
                      </div>
                      <div className="bg-blue-600/10 p-3 rounded-lg">
                        <winner.icon className="text-blue-600" size={28} />
                      </div>
                    </div>

                    <div className="flex-grow">
                      <p className="text-lg font-bold text-slate-700">
                        {winner.winner}
                      </p>
                    </div>

                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-full bg-slate-800 text-white px-6 py-2 rounded-md font-semibold hover:bg-slate-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className={`${cardStyle} text-center mt-16 p-8 sm:p-12`}>
              <h3 className="font-rajdhani text-3xl sm:text-4xl font-bold text-slate-900 mb-4 relative z-10">
                Ready to Join the Hall of Fame?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto relative z-10">
                KAGADA 2025 is your opportunity to showcase your innovations and
                potentially become our next champion!
              </p>
             <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 tracking-wide text-center relative z-10">
  REGISTER SOON!!
</h1>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PreviousWinners;
