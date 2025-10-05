import React from "react";
import { Image, FileText, Cpu } from "lucide-react";

// --- Reusable Blueprint Card Style ---
const cardStyle = `relative bg-white/70 backdrop-blur-md border border-blue-600/20 shadow-lg rounded-lg
                   overflow-hidden 
                   bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] 
                   bg-[length:2rem_2rem]`;

// --- Blueprint SVG Grid Background Style ---
const backgroundStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
  .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
  .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
  .site-background {
    background-color: #f8fafc;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
    min-height: auto; /* changed from 100vh to fit content */
    width: 100%;
  }
`;

// --- Section Title ---
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="text-center mb-6 sm:mb-8">
    <h2 className="font-rajdhani text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-wider">
      {children}
    </h2>
    <div className="w-32 h-1 bg-blue-600/50 mx-auto rounded-full mt-3"></div>
  </div>
);

// --- Previous Winners ---
const PreviousWinners: React.FC = () => {
  const winners = [
    {
      title: "Poster Presentation",
      winner: "Team Alpha",
      icon: Image,
      bg: "/poster.png",
    },
    {
      title: "Paper Presentation",
      winner: "Team Beta",
      icon: FileText,
      bg: "/paper.png",
    },
    {
      title: "Project Presentation",
      winner: "Team Gamma",
      icon: Cpu,
      bg: "/project.png",
    },
  ];

  return (
    <div className="site-background font-roboto-mono">
      <style>{backgroundStyle}</style>
      <section id="winners" className="pt-8 pb-6 sm:pt-10 sm:pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle>
              Previous <span className="text-blue-600">Winners</span>
            </SectionTitle>

            <p className="text-center text-slate-600 max-w-3xl mx-auto leading-relaxed -mt-6 mb-8 sm:mb-10">
              Celebrating the brilliant minds who have left their mark on
              KAGADA’s legacy.
            </p>

            {/* Winner Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {winners.map((winner, index) => (
                <div
                  key={index}
                  className={`${cardStyle} group p-8 flex flex-col text-left transform hover:-translate-y-2 transition-transform duration-300 hover:border-blue-600/30`}
                  style={{ minHeight: 260 }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${winner.bg})` }}
                  ></div>

                  {/* Overlay Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="font-rajdhani text-2xl font-bold text-slate-800">
                        {winner.title}
                      </h3>
                      <div className="bg-blue-600/10 p-3 rounded-lg">
                        <winner.icon className="text-blue-600" size={28} />
                      </div>
                    </div>

                    <p className="text-lg font-bold text-slate-700">
                      {winner.winner}
                    </p>

                    <div className="mt-6">
                      <button className="w-full bg-slate-800 text-white px-6 py-2 rounded-md font-semibold hover:bg-slate-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreviousWinners;
