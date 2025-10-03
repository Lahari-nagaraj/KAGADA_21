import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// --- Blueprint background and font ---
const backgroundStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
  .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
  .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
  .site-background {
    background-color: #f8fafc;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
    min-height: 100vh;
    width: 100%;
  }
`;

const cardBase = `
  bg-slate-50/80
  backdrop-blur-xl
  border border-blue-500/30
  shadow-xl
  rounded-lg
  transition-all duration-500
`;

// --- Track Data ---
const tracks = [
  {
    id: "poster",
    title: "Poster Presentation",
    description: `The poster presentation allows participants to showcase innovative solutions to real-world issues through technical posters. They can choose their preferred domain, and presentations will be held in a hybrid format. Participants also have the flexibility to select their mode of presentation.`,
    img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396074/Screenshot_2025-10-02_143440_yoo4lb.png",
    fee: "₹150 per team",
  },
  {
    id: "paper",
    title: "Paper Presentation",
    description: `The paper presentation competition allows participants to showcase their research in their chosen fields, providing a platform for sharing innovative ideas that advance society. Open to both undergraduates and postgraduates, the competition will be conducted in a hybrid format.`,
    img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396194/6950be6b-5651-43e2-8a7e-cade88d16a4d_wize9x.jpg",
    fee: "₹200 per team",
  },
  {
    id: "project",
    title: "Project Presentation",
    description: `The project presentation allows students to unleash their creativity and showcase their inventions through working model demonstrations. This platform fosters collaboration as they present innovative ideas across diverse domains and engage with peers.`,
    img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396266/20241026_124756_xi3yqo.jpg",
    fee: "₹180 per team",
  },
  {
    id: "ottige",
    title: "Ottige Kaliyona",
    description: `An IEEE UVCE WIE initiative during KAGADA, aimed at uplifting society.`,
    img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396336/_storage_emulated_0_DCIM_Camera_IMG_20241026_105853_a49rdk.jpg",
  },
  {
    id: "food",
    title: "Food for Cause",
    description: `ECE students serve food with profits donated to NGO.`,
    img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396128/Screenshot_2025-10-02_143521_i6bymk.png",
  },
];

export default function ExploreTracksCarousel() {
  const [active, setActive] = useState(0);
  const [pause, setPause] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (pause) return;
    timerRef.current = window.setInterval(() => {
      setActive((a) => (a + 1) % tracks.length);
    }, 4000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [pause]);

  const idx = (i: number) =>
    ((i % tracks.length) + tracks.length) % tracks.length;
  const leftIndex = idx(active - 1);
  const rightIndex = idx(active + 1);

  const handlePrev = () => {
    setActive(leftIndex);
    setPause(true);
  };
  const handleNext = () => {
    setActive(rightIndex);
    setPause(true);
  };

  return (
    <div className="site-background font-roboto-mono">
      <style>{backgroundStyle}</style>
      <section id="tracks" className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="font-rajdhani text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-wider">
              Explore Event Tracks
            </h2>
            <div className="w-32 h-1 bg-blue-600/50 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Card + Arrows wrapper */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Left Arrow (hidden on mobile) */}
            <button
              className="hidden sm:flex rounded-full p-2 bg-blue-100 hover:bg-blue-200 transition"
              onClick={handlePrev}
              aria-label="Previous Track"
              style={{ boxShadow: "0 2px 8px rgba(59,130,246,0.10)" }}
            >
              <ArrowLeft size={22} className="text-blue-600" />
            </button>

            {/* Card */}
            <div
              className={`${cardBase} p-4 sm:p-6 w-full max-w-sm sm:max-w-md`}
            >
              <TrackCard track={tracks[active]} setPause={setPause} />
            </div>

            {/* Right Arrow (hidden on mobile) */}
            <button
              className="hidden sm:flex rounded-full p-2 bg-blue-100 hover:bg-blue-200 transition"
              onClick={handleNext}
              aria-label="Next Track"
              style={{ boxShadow: "0 2px 8px rgba(59,130,246,0.10)" }}
            >
              <ArrowRight size={22} className="text-blue-600" />
            </button>
          </div>

          {/* Mobile arrows below */}
          <div className="flex sm:hidden justify-center gap-6 mt-6">
            <button
              className="rounded-full p-2 bg-blue-100 hover:bg-blue-200 transition"
              onClick={handlePrev}
              aria-label="Previous Track"
            >
              <ArrowLeft size={20} className="text-blue-600" />
            </button>
            <button
              className="rounded-full p-2 bg-blue-100 hover:bg-blue-200 transition"
              onClick={handleNext}
              aria-label="Next Track"
            >
              <ArrowRight size={20} className="text-blue-600" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function TrackCard({
  track,
  setPause,
}: {
  track: (typeof tracks)[number];
  setPause?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl">
      {/* Title */}
      <h3 className="font-rajdhani text-2xl sm:text-3xl font-bold text-blue-700 text-center px-4 pt-4">
        {track.title}
      </h3>

      {/* Image */}
      <div className="flex justify-center px-4 mt-3">
        <img
          src={track.img}
          alt={track.title}
          className="rounded-lg shadow-sm object-cover w-full h-[220px] bg-white"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow px-4 py-4 justify-between">
        <p className="text-slate-700 text-justify text-sm sm:text-base leading-relaxed">
          {track.description}
        </p>
        {track.fee && (
          <p className="mt-3 font-semibold text-slate-900">
            Registration Fee: <span className="text-blue-600">{track.fee}</span>
          </p>
        )}
      </div>

      {/* Button */}
      {["poster", "paper", "project"].includes(track.id) && (
        <div className="px-4 pb-5 flex justify-center">
          <button
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg text-sm hover:bg-blue-500 transition-transform transform hover:scale-105 shadow-md"
            onClick={(e) => {
              e.stopPropagation();
              setPause && setPause(true);
            }}
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
}
