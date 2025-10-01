import React, { useEffect, useMemo, useRef, useState } from "react";

// Base card styles
const cardBase = `bg-white/80 backdrop-blur-md border border-blue-600/20 shadow-lg rounded-xl
  bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)]
  bg-[length:2rem_2rem] transition-all duration-500 ease-in-out`;

export default function ExploreTracksCarousel() {
  const [active, setActive] = useState(0);
  const [pause, setPause] = useState(false);
  const timerRef = useRef<number | null>(null);

  const tracks = useMemo(
    () => [
      {
        id: "poster",
        title: "Poster Presentation",
        description:
          "The poster presentation allows participants to showcase innovative solutions to real-world issues through technical posters. They can choose their preferred domain, and presentations will be held in a hybrid format.\n\nRegistration Fee: ₹150 per team",
        img: "/poster.png",
      },
      {
        id: "paper",
        title: "Paper Presentation",
        description:
          "The paper presentation competition allows participants to showcase their research in their chosen fields, providing a platform for sharing innovative ideas that advance society.\n\nRegistration Fee: ₹200 per team",
        img: "/poster.png",
      },
      {
        id: "project",
        title: "Project Presentation",
        description:
          "The project presentation allows students to unleash their creativity and showcase their inventions through working model demonstrations.\n\nRegistration Fee: ₹180 per team",
        img: "/poster.png",
      },
      {
        id: "ottige",
        title: "Ottige Kaliyona",
        description:
          "Ottige Kaliyona conducted by IEEE UVCE WIE during KAGADA as an initiative to contribute to the upliftment of society.",
        img: "/poster.png",
      },
      {
        id: "food",
        title: "Food for Cause",
        description:
          "The event conducted by ECE students of UVCE where food stalls serve delicious foods and profits are donated to an NGO.",
        img: "/poster.png",
      },
    ],
    []
  );

  // Auto move every 2 seconds (only stops if pause = true)
  useEffect(() => {
    if (pause) return;
    timerRef.current = window.setInterval(() => {
      setActive((a) => (a + 1) % tracks.length);
    }, 2000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [pause, tracks.length]);

  // Relative index helper
  const idx = (i: number) => {
    const len = tracks.length;
    return ((i % len) + len) % len;
  };

  const leftIndex = idx(active - 1);
  const centerIndex = idx(active);
  const rightIndex = idx(active + 1);

  return (
    <>
      <style>{`
        .carousel-wrap { perspective: 1200px; overflow: hidden; }
        .card-viewport { display: flex; align-items: center; justify-content: center; position: relative; height: 520px; width: 100%; }
        .track-card { width: min(680px, 90vw); height: 460px; transition: all 600ms ease; }
        .card-side { position: absolute; top: 30px; width: 42%; max-width: 300px; height: 340px; opacity: 0.6; filter: blur(3px); transform: scale(0.9); }
        .card-left { left: 5%; transform: translateX(-20%) scale(0.9); }
        .card-right { right: 5%; transform: translateX(20%) scale(0.9); }
        .card-center { z-index: 30; transform: scale(1.05); box-shadow: 0 0 20px rgba(59,130,246,0.5); }
        .card-media { height: 55%; display: flex; align-items: center; justify-content: center; overflow: hidden; border-top-left-radius: 0.75rem; border-top-right-radius: 0.75rem; background: white; }
        .card-img { width: 100%; height: 100%; object-fit: contain; }
        .card-body { padding: 1rem 1.25rem; }
        .track-card:hover { box-shadow: 0 0 25px rgba(59,130,246,0.7); transform: scale(1.07); }
        
        @media (max-width: 1024px) {
          .card-side { width: 40%; max-width: 250px; }
        }

        @media (max-width: 768px) {
          .card-side { display: none; }
          .card-viewport { height: 460px; }
          .track-card { width: 92%; height: 440px; }
        }
      `}</style>

      <section className="py-16 sm:py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-wide">
              Explore <span className="text-blue-600">Event Tracks</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600/70 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className={`p-4 sm:p-6 ${cardBase} carousel-wrap`}>
            <div className="card-viewport">
              {/* Left card */}
              <div
                className={`card-side card-left track-card ${cardBase}`}
                style={{ zIndex: 10 }}
                onClick={() => setActive(leftIndex)}
              >
                <CardContent track={tracks[leftIndex]} variant="side" />
              </div>

              {/* Center card */}
              <div
                className={`track-card card-center ${cardBase}`}
                style={{ zIndex: 40 }}
                onClick={() => setActive(centerIndex)}
              >
                <CardContent track={tracks[centerIndex]} variant="center" setPause={setPause} />
              </div>

              {/* Right card */}
              <div
                className={`card-side card-right track-card ${cardBase}`}
                style={{ zIndex: 10 }}
                onClick={() => setActive(rightIndex)}
              >
                <CardContent track={tracks[rightIndex]} variant="side" />
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {tracks.map((t, i) => (
                <button
                  key={t.id}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === active ? "bg-blue-600 scale-110" : "bg-slate-300"
                  }`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CardContent({
  track,
  variant = "center",
  setPause,
}: {
  track: any;
  variant?: "center" | "side";
  setPause?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="card-media">
        <img src={track.img} alt={track.title} className="card-img" />
      </div>

      <div className="card-body flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-3">
            {track.title}
          </h3>
          <p
            className={`text-slate-700 leading-relaxed text-center whitespace-pre-line ${
              variant === "side" ? "line-clamp-3" : ""
            }`}
          >
            {track.description}
          </p>
        </div>

        {["poster", "paper", "project"].includes(track.id) && (
          <div className="mt-4 flex justify-center">
            <button
              className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md text-sm hover:bg-blue-500 transition-transform transform hover:scale-105 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setPause && setPause(true); // pause auto-slide when clicked
              }}
            >
              Register Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
