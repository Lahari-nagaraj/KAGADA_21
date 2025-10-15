import React from "react";
import { Image, FileText, Cpu } from "lucide-react";

// --- Reusable Card Style ---
const cardStyle = `relative bg-white/70 backdrop-blur-md border border-blue-400/20 shadow-md rounded-xl
                   overflow-hidden flex flex-col justify-between transition-all duration-500 
                   hover:-translate-y-2 hover:shadow-blue-300/30 hover:border-blue-600/30 hover:bg-white/90 
                   animate-fadeUp`;

// --- Blueprint SVG Background ---
const backgroundStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
  .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
  .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
  .site-background {
    background-color: #f9fbfd;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
    width: 100%;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeUp { animation: fadeUp 0.8s ease-in-out; }
`;

// --- Section Title ---
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-center mb-6 sm:mb-10">
    <h2 className="font-rajdhani text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider 
                   bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 
                   text-transparent bg-clip-text drop-shadow-sm">
      {children}
    </h2>
    <div className="w-24 sm:w-32 h-1 bg-blue-600/50 mx-auto rounded-full mt-3"></div>
  </div>
);

// --- Previous Winners ---
const PreviousWinners: React.FC = () => {
  const winners = [
    {
      title: "Paper Presentation",
      icon: Image,
      bg: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396194/6950be6b-5651-43e2-8a7e-cade88d16a4d_wize9x.jpg",
      link: "https://drive.google.com/drive/folders/14CthRwTQPvgSo7t_LBz21GQYYduK-myK",
    },
    {
      title: "Poster Presentation",
      icon: FileText,
      bg: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396074/Screenshot_2025-10-02_143440_yoo4lb.png",
      link: "https://drive.google.com/drive/folders/1TTTTPN4T3iVWehNnF9VqNnWPY7xn8SA5",
    },
    {
      title: "Project Presentation",
      icon: Cpu,
      bg: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396266/20241026_124756_xi3yqo.jpg",
      link: "https://drive.google.com/drive/folders/17ktvAfeYfGy75NK8MLuJXPb5PvbG2GXO",
    },
  ];

  return (
    <div className="site-background font-roboto-mono">
      <style>{backgroundStyle}</style>

      {/* ✅ scroll-mt-24 ensures heading is fully visible when navigating via navbar */}
      <section id="winners" className="pt-2 pb-10 sm:pt-8 sm:pb-16 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle>
              <span className="text-slate-900">Previous</span>{" "}
              <span className="text-blue-600">Winners</span>
            </SectionTitle>

            <p className="text-center text-slate-900 max-w-2xl mx-auto leading-relaxed -mt-2 mb-10 font-poppins">
              Honoring innovation, creativity, and excellence that shaped{" "}
              <span className="text-blue-600 font-semibold">KAGADA’s journey.</span>
            </p>

            {/* Winner Cards */}
            <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
              {winners.map((winner, index) => (
                <div
                  key={index}
                  className={`${cardStyle}`}
                  style={{ minHeight: 250, animationDelay: `${index * 0.15}s` }}
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-35 transition-all duration-500 group-hover:opacity-50"
                    style={{ backgroundImage: `url(${winner.bg})` }}
                  ></div>

                  {/* Overlay Content */}
                  <div className="relative z-10 flex flex-col justify-between h-full p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-rajdhani text-xl sm:text-2xl font-extrabold text-slate-800 tracking-wide 
                                     bg-gradient-to-r from-black to-black text-blue-600 bg-clip-text text-transparent">
                        {winner.title}
                      </h3>
                      <div className="bg-blue-600/10 p-2.5 rounded-lg shadow-sm group-hover:bg-blue-600/20 transition">
                        <winner.icon className="text-blue-600" size={26} />
                      </div>
                    </div>

                    {/* Button */}
                    <a
                      href={winner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center bg-blue-50 text-blue-700 px-4 py-2.5 rounded-md font-semibold 
                                 shadow-md hover:bg-blue-100 transition-all duration-300 hover:scale-105 
                                 border border-blue-200 focus:ring-2 focus:ring-blue-300 text-sm font-poppins"
                    >
                      Explore Winners
                    </a>
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
