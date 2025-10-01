import React, { useState } from "react";
import { Play, Download } from "lucide-react";
import video2024 from "../assets/videos/kagada2024.mp4";
import video2023 from "../assets/videos/kagada2023.mp4";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

// --- Section Title Component ---
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-center mb-12 sm:mb-16">
    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-600/10 rounded-full mb-6">
      <Play className="text-blue-600" size={40} />
    </div>
    <h2 className="font-rajdhani text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-wider">
      {children}
    </h2>
    <div className="w-32 h-1 bg-blue-600/50 mx-auto rounded-full mt-4"></div>
  </div>
);

// --- Reusable Blueprint Card Style ---
const cardStyle =
  "bg-white/70 backdrop-blur-md border border-blue-600/20 shadow-lg rounded-lg bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[length:2rem_2rem]";

const AfterMovies: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const videos = [
    {
      title: "KAGADA 2024",
      thumbnail:img1,
      duration: "1:30",
      video: video2024,
      description:
        "Relive the excitement and energy of KAGADA 2024 with highlights from all events, competitions, and celebrations.",
    },
    {
      title: "KAGADA 2023",
      thumbnail:
        img2,
      duration: "1:35",
      video: video2023,
      description:
        "Relive the excitement and energy of KAGADA 2023 with highlights from all events, competitions, and celebrations.",
    },
  ];

  // Function to close modal
  const closeModal = () => setCurrentVideo(null);

  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
      `}
      </style>

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
                        <Play className="text-white ml-1" size={32} fill="white" />
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
                      {/* Watch Now */}
                      <button
                        onClick={() => setCurrentVideo(video.video)}
                        className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md text-base hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <Play size={16} /> Watch Here
                      </button>

                      {/* Download */}
                      <a
                        href={video.video}
                        download={`${video.title}.mp4`}
                        className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md text-base hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <Download size={16} /> Download
                      </a>
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
                Subscribe to our channel for exclusive content and early access to KAGADA 2025 announcements.
              </p>
              <button className="bg-blue-600 text-white font-bold py-3 px-8 sm:px-10 rounded-md text-base sm:text-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
                Subscribe to Channel
              </button>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {currentVideo && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={closeModal} // Close when clicking outside
          >
            <div
              className="bg-white rounded-lg overflow-hidden max-w-3xl w-full relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside video
            >
              <button
                className="absolute top-2 right-2 text-black font-bold text-xl"
                onClick={closeModal}
              >
                ✕
              </button>
              <video src={currentVideo} controls autoPlay className="w-full h-auto" />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AfterMovies;
