import React from "react";
import { Play, Film } from "lucide-react";

// --- Section Title Component ---
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="text-center mb-12 sm:mb-16">
    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-600/10 rounded-full mb-6">
      <Film className="text-blue-600" size={40} />
    </div>
    <h2 className="font-rajdhani text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-wider">
      {children}
    </h2>
    <div className="w-32 h-1 bg-blue-600/50 mx-auto rounded-full mt-4"></div>
  </div>
);

// --- Reusable Blueprint Card Style ---
const cardStyle = `bg-white/70 backdrop-blur-md border border-blue-600/20 shadow-lg rounded-lg
                   bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] 
                   bg-[length:2rem_2rem]`;

const AfterMovies: React.FC = () => {
  const videos = [
    {
      title: "KAGADA 2024 - Official After Movie",
      thumbnail:
        "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "5:32",
      description:
        "Relive the excitement and energy of KAGADA 2024 with highlights from all events, competitions, and celebrations.",
    },
    {
      title: "Innovation Showcase - Best Projects",
      thumbnail:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "8:15",
      description:
        "A compilation of the most innovative projects and presentations that made KAGADA 2024 unforgettable.",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
      `}</style>

      <section className="py-16 sm:py-20 bg-slate-100 font-roboto-mono">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle>
              After <span className="text-blue-600">Movies</span>
            </SectionTitle>
            <p className="text-center text-slate-600 max-w-3xl mx-auto leading-relaxed -mt-8 mb-16">
              Experience the magic of KAGADA through our cinematic after movies.
            </p>

            {/* Video Grid */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className={`${cardStyle} group overflow-hidden transform hover:-translate-y-2 transition-transform duration-300`}
                >
                  {/* Video Thumbnail */}
                  <div className="relative overflow-hidden cursor-pointer">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600/80 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Play
                          className="text-white ml-1"
                          size={32}
                          fill="white"
                        />
                      </div>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-slate-900/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {video.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6 sm:p-8">
                    <h3 className="font-rajdhani text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                      {video.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md text-base hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                        <Play size={16} />
                        Watch Now
                      </button>
                      <button className="bg-blue-600/10 text-blue-800 font-bold py-3 px-6 rounded-md text-base hover:bg-blue-600/20 transition-all duration-300 transform hover:scale-105 border border-blue-600/30">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subscribe Section */}
            <div className={`${cardStyle} mt-16 text-center p-8 sm:p-12`}>
              <h3 className="font-rajdhani text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Don't Miss Future Updates!
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Subscribe to our channel for exclusive content and early access
                to KAGADA 2025 announcements.
              </p>
              <button className="bg-blue-600 text-white font-bold py-3 px-8 sm:px-10 rounded-md text-base sm:text-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
                Subscribe to Channel
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AfterMovies;
