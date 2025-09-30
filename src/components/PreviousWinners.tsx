import React from "react";
import { Trophy, Star, Award } from "lucide-react";

// --- Reusable Blueprint Card Style ---
const cardStyle = `bg-white/70 backdrop-blur-md border border-blue-600/20 shadow-lg rounded-lg
                   bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] 
                   bg-[length:2rem_2rem]`;

// --- Section Title Component ---
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

// --- Previous Winners Component ---
const PreviousWinners: React.FC = () => {
  const winners = [
    {
      year: "2024",
      title: "Innovation Excellence",
      winner: "Team Alpha",
      college: "IIT Bangalore",
      project: "AI-Powered Healthcare Assistant",
      icon: Trophy,
    },
    {
      year: "2023",
      title: "Technical Mastery",
      winner: "Team Beta",
      college: "NIT Karnataka",
      project: "Smart City Infrastructure",
      icon: Star,
    },
    {
      year: "2022",
      title: "Creative Solution",
      winner: "Team Gamma",
      college: "RVCE Bangalore",
      project: "Sustainable Energy Management",
      icon: Award,
    },
  ];

  return (
    <>
      {/* The Google Font imports would be in your main index.html or a root App component */}
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
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-rajdhani text-2xl font-bold text-slate-800">
                        {winner.title}
                      </h3>
                      <p className="font-semibold text-blue-700">
                        {winner.year}
                      </p>
                    </div>
                    <div className="bg-blue-600/10 p-3 rounded-lg">
                      <winner.icon className="text-blue-600" size={28} />
                    </div>
                  </div>

                  <div className="flex-grow space-y-4">
                    <div className="text-left">
                      <p className="text-lg font-bold text-slate-700">
                        {winner.winner}
                      </p>
                      <p className="text-sm text-slate-500">{winner.college}</p>
                    </div>

                    <div className="bg-black/5 p-4 rounded-md border border-blue-600/10">
                      <p className="text-xs text-slate-500 mb-1">
                        Winning Project
                      </p>
                      <p className="font-semibold text-slate-800 leading-tight">
                        {winner.project}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full bg-slate-800 text-white px-6 py-2 rounded-md font-semibold hover:bg-slate-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className={`${cardStyle} text-center mt-16 p-8 sm:p-12`}>
              <h3 className="font-rajdhani text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Ready to Join the Hall of Fame?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                KAGADA 2025 is your opportunity to showcase your innovations and
                potentially become our next champion!
              </p>
              <button className="bg-blue-600 text-white font-bold py-3 px-8 sm:px-10 rounded-md text-base sm:text-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PreviousWinners;
