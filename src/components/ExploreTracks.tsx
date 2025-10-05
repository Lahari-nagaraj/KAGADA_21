// import React, { useEffect, useRef, useState } from "react";
// import { ArrowLeft, ArrowRight, Users, BookOpen, Wrench, Heart, Coffee } from "lucide-react";

// // --- Blueprint background and font ---
// const backgroundStyle = `
//   @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
//   .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
//   .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
//   .site-background {
//     background-color: #f8fafc;
//     background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
//     min-height: 100vh;
//     width: 100%;
//   }
//   .track-card {
//     transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
//     transform-origin: center;
//   }
//   .blur-card {
//     filter: blur(4px);
//     opacity: 0.6;
//     transform: scale(0.85);
//   }
//   .active-card {
//     filter: none;
//     opacity: 1;
//     transform: scale(1);
//     z-index: 10;
//   }
// `;

// // --- Track Data with optimized content ---
// const tracks = [
//   {
//     id: "poster",
//     title: "Poster Presentation",
//     icon: Users,
//     description: `Showcase innovative solutions through technical posters. Choose from Engineering, Technology, Science, or Social Innovation domains. Hybrid format with flexible presentation modes.`,
//     img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396074/Screenshot_2025-10-02_143440_yoo4lb.png",
//     fee: "₹150 per team",
//     features: ["Hybrid Format", "Innovation"],
//     duration: "15 mins presentation",
//   },
//   {
//     id: "paper",
//     title: "Paper Presentation",
//     icon: BookOpen,
//     description: `Present your research and innovations to advance society. Open to undergraduates and postgraduates. Emphasis on original research and meaningful contributions to knowledge.`,
//     img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396194/6950be6b-5651-43e2-8a7e-cade88d16a4d_wize9x.jpg",
//     fee: "₹200 per team",
//     features: ["Research", "Academic Excellence"],
//     duration: "20 mins presentation",
//   },
//   {
//     id: "project",
//     title: "Project Presentation",
//     icon: Wrench,
//     description: `Demonstrate working models across IoT, AI, Robotics, and Environmental Solutions. Collaborate with peers and engage industry experts in a hands-on exhibition format.`,
//     img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396266/20241026_124756_xi3yqo.jpg",
//     fee: "₹180 per team",
//     features: ["Working Models", "Industry Focus"],
//     duration: "25 mins demonstration",
//   },
//   {
//     id: "ottige",
//     title: "Ottige Kaliyona",
//     icon: Heart,
//     description: `IEEE UVCE WIE initiative uplifting society through tech education. Teach underprivileged students digital literacy and STEM subjects to bridge the digital divide.`,
//     img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396336/_storage_emulated_0_DCIM_Camera_IMG_20241026_105853_a49rdk.jpg",
//     fee: "Free",
//     features: ["Social Impact", "Education"],
//     duration: "Full day event",
//   },
//   {
//     id: "food",
//     title: "Food for Cause",
//     icon: Coffee,
//     description: `Delicious meals served with all profits donated to NGOs. A warm atmosphere combining community service with networking opportunities throughout the event.`,
//     img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396128/Screenshot_2025-10-02_143521_i6bymk.png",
//     fee: "As per menu",
//     features: ["Charity", "Networking"],
//     duration: "Throughout event",
//   },
// ];

// export default function ExploreTracksCarousel() {
//   const [active, setActive] = useState(0);
//   const [pause, setPause] = useState(false);
//   const timerRef = useRef<number | null>(null);

//   useEffect(() => {
//     if (pause) return;
//     timerRef.current = window.setInterval(() => {
//       setActive((a) => (a + 1) % tracks.length);
//     }, 2000); // Faster rotation every 2 seconds
//     return () => {
//       if (timerRef.current) window.clearInterval(timerRef.current);
//     };
//   }, [pause]);

//   const idx = (i: number) =>
//     ((i % tracks.length) + tracks.length) % tracks.length;
//   const leftIndex = idx(active - 1);
//   const rightIndex = idx(active + 1);

//   const handlePrev = () => {
//     setActive(leftIndex);
//     setPause(true);
//     setTimeout(() => setPause(false), 3000); // Resume auto-rotation after 3 seconds
//   };
//   const handleNext = () => {
//     setActive(rightIndex);
//     setPause(true);
//     setTimeout(() => setPause(false), 3000); // Resume auto-rotation after 3 seconds
//   };

//   return (
//     <div className="site-background font-roboto-mono">
//       <style>{backgroundStyle}</style>
//       <section id="tracks" className="py-16 sm:py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center mb-12">
//             <h2 className="font-rajdhani text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-800 tracking-wider">
//               Explore Event Tracks
//             </h2>
//           </div>

//           {/* Carousel Container */}
//           <div className="relative max-w-7xl mx-auto">
//             <div className="flex items-center justify-center gap-4 sm:gap-8">
//               {/* Left Preview Card */}
//               <div className="hidden lg:block w-full max-w-xs">
//                 <TrackCard
//                   track={tracks[leftIndex]}
//                   isActive={false}
//                   index={leftIndex}
//                 />
//               </div>

//               {/* Main Active Card */}
//               <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
//                 <TrackCard
//                   track={tracks[active]}
//                   isActive={true}
//                   index={active}
//                   setPause={setPause}
//                 />
//               </div>

//               {/* Right Preview Card */}
//               <div className="hidden lg:block w-full max-w-xs">
//                 <TrackCard
//                   track={tracks[rightIndex]}
//                   isActive={false}
//                   index={rightIndex}
//                 />
//               </div>
//             </div>

//             {/* Central Arrow Controls */}
//             <div className="flex justify-center gap-8 mt-8">
//               <button
//                 onClick={handlePrev}
//                 onMouseEnter={() => setPause(true)}
//                 onMouseLeave={() => setPause(false)}
//                 className="group bg-slate-700 hover:bg-slate-800 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
//                 aria-label="Previous Track"
//               >
//                 <ArrowLeft size={24} className="group-hover:translate-x-[-2px] transition-transform" />
//               </button>
//               <button
//                 onClick={handleNext}
//                 onMouseEnter={() => setPause(true)}
//                 onMouseLeave={() => setPause(false)}
//                 className="group bg-slate-700 hover:bg-slate-800 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
//                 aria-label="Next Track"
//               >
//                 <ArrowRight size={24} className="group-hover:translate-x-[2px] transition-transform" />
//               </button>
//             </div>

//             {/* Progress Indicators */}
//             <div className="flex justify-center gap-2 mt-6">
//               {tracks.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActive(index)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                     index === active ? "bg-slate-800 scale-125" : "bg-slate-400 hover:bg-slate-600"
//                   }`}
//                   aria-label={`Go to track ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// function TrackCard({
//   track,
//   isActive,
//   index,
//   setPause,
// }: {
//   track: (typeof tracks)[number];
//   isActive: boolean;
//   index: number;
//   setPause?: React.Dispatch<React.SetStateAction<boolean>>;
// }) {
//   const IconComponent = track.icon;
  
//   const hasRegisterButton = ["poster", "paper", "project"].includes(track.id);
  
//   return (
//     <div 
//       className={`track-card ${
//         isActive ? "active-card" : "blur-card"
//       } bg-white rounded-xl shadow-lg overflow-hidden h-[500px] flex flex-col`}
//       onMouseEnter={() => setPause && setPause(true)}
//       onMouseLeave={() => setPause && setPause(false)}
//     >
//       {/* Header */}
//       <div className="bg-slate-800 p-4 text-center flex-shrink-0">
//         <h3 className="font-rajdhani text-xl sm:text-2xl font-bold text-white leading-tight">
//           {track.title}
//         </h3>
//       </div>

//       {/* Image - Uniform Size */}
//       <div className="flex justify-center px-4 pt-3 flex-shrink-0">
//         <img
//           src={track.img}
//           alt={track.title}
//           className="rounded-lg shadow-md object-cover w-full h-[160px] bg-gray-100"
//         />
//       </div>

//       {/* Content - Flexible Height */}
//       <div className="flex flex-col flex-grow px-4 pt-2 pb-3 justify-between min-h-0">
//         {/* Description */}
//         <p className="text-slate-700 text-left text-xs leading-relaxed mb-3 overflow-hidden" style={{
//           display: '-webkit-box',
//           WebkitLineClamp: 6,
//           WebkitBoxOrient: 'vertical'
//         }}>
//           {track.description}
//         </p>
        
//         {/* Features */}
//         {track.features && (
//           <div className="mb-3 flex-shrink-0">
//             <div className="flex flex-wrap justify-center gap-1">
//               {track.features.slice(0, 2).map((feature, idx) => (
//                 <span
//                   key={idx}
//                   className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full text-xs font-medium border border-slate-200"
//                 >
//                   {feature}
//                 </span>
//               ))}
//               {track.features.length > 2 && (
//                 <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full text-xs font-medium border border-slate-200">
//                   +{track.features.length - 2}
//                 </span>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Fee and Duration */}
//         <div className="space-y-1 flex-shrink-0">
//           <div className="text-center">
//             <span className="text-xs text-slate-600 font-medium">
//               {track.duration}
//             </span>
//           </div>
//           <div className="text-center">
//             <span className="text-xs font-semibold text-slate-900">
//               Fee: <span className="text-slate-800">{track.fee}</span>
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Register Button - Only for poster, paper, project */}
//       {hasRegisterButton && (
//         <div className="px-4 pb-3 flex-shrink-0">
//           <button
//             className="w-full bg-slate-700 text-white font-semibold py-2.5 px-4 rounded-lg text-sm hover:bg-slate-800 transition-all transform hover:scale-105 shadow-md"
//             onClick={(e) => {
//               e.stopPropagation();
//               setPause && setPause(true);
//             }}
//           >
//             Register Now
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Users, BookOpen, Wrench, Heart, Coffee } from "lucide-react";

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
  .track-card {
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center;
  }
  .blur-card {
    filter: blur(4px);
    opacity: 0.6;
    transform: scale(0.85);
  }
  .active-card {
    filter: none;
    opacity: 1;
    transform: scale(1);
    z-index: 10;
  }
`;

// --- Track Data ---
const tracks = [
  {
    id: "poster",
    title: "Poster Presentation",
    icon: Users,
    description: `Showcase innovative solutions through technical posters. Choose from Engineering, Technology, Science, or Social Innovation domains. Hybrid format with flexible presentation modes.`,
    img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396074/Screenshot_2025-10-02_143440_yoo4lb.png",
    fee: "₹150 per team",
    features: ["Hybrid Format", "Innovation"],
    duration: "15 mins presentation",
  },
  {
    id: "paper",
    title: "Paper Presentation",
    icon: BookOpen,
    description: `Present your research and innovations to advance society. Open to undergraduates and postgraduates. Emphasis on original research and meaningful contributions to knowledge.`,
    img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396194/6950be6b-5651-43e2-8a7e-cade88d16a4d_wize9x.jpg",
    fee: "₹200 per team",
    features: ["Research", "Academic Excellence"],
    duration: "20 mins presentation",
  },
  {
    id: "project",
    title: "Project Presentation",
    icon: Wrench,
    description: `Demonstrate working models across IoT, AI, Robotics, and Environmental Solutions. Collaborate with peers and engage industry experts in a hands-on exhibition format.`,
    img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396266/20241026_124756_xi3yqo.jpg",
    fee: "₹180 per team",
    features: ["Working Models", "Industry Focus"],
    duration: "25 mins demonstration",
  },
  {
    id: "ottige",
    title: "Ottige Kaliyona",
    icon: Heart,
    description: `IEEE UVCE WIE initiative uplifting society through tech education. Teach underprivileged students digital literacy and STEM subjects to bridge the digital divide.`,
    img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396336/_storage_emulated_0_DCIM_Camera_IMG_20241026_105853_a49rdk.jpg",
    fee: "Free",
    features: ["Social Impact", "Education"],
    duration: "Full day event",
  },
  {
    id: "food",
    title: "Food for Cause",
    icon: Coffee,
    description: `Delicious meals served with all profits donated to NGOs. A warm atmosphere combining community service with networking opportunities throughout the event.`,
    img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396128/Screenshot_2025-10-02_143521_i6bymk.png",
    fee: "As per menu",
    features: ["Charity", "Networking"],
    duration: "Throughout event",
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
    }, 2000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [pause]);

  const idx = (i: number) => ((i % tracks.length) + tracks.length) % tracks.length;
  const leftIndex = idx(active - 1);
  const rightIndex = idx(active + 1);

  const handlePrev = () => {
    setActive(leftIndex);
    setPause(true);
    setTimeout(() => setPause(false), 3000);
  };
  const handleNext = () => {
    setActive(rightIndex);
    setPause(true);
    setTimeout(() => setPause(false), 3000);
  };

  return (
    <div className="site-background font-roboto-mono">
      <style>{backgroundStyle}</style>
      {/* --- Reduced Padding --- */}
      <section id="tracks" className="py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-rajdhani text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-800 tracking-wider">
              Explore Event Tracks
            </h2>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-4 sm:gap-8">
              <div className="hidden lg:block w-full max-w-xs">
                <TrackCard track={tracks[leftIndex]} isActive={false} index={leftIndex} />
              </div>
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <TrackCard track={tracks[active]} isActive={true} index={active} setPause={setPause} />
              </div>
              <div className="hidden lg:block w-full max-w-xs">
                <TrackCard track={tracks[rightIndex]} isActive={false} index={rightIndex} />
              </div>
            </div>

            <div className="flex justify-center gap-8 mt-8">
              <button
                onClick={handlePrev}
                onMouseEnter={() => setPause(true)}
                onMouseLeave={() => setPause(false)}
                className="group bg-slate-700 hover:bg-slate-800 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
                aria-label="Previous Track"
              >
                <ArrowLeft size={24} className="group-hover:translate-x-[-2px] transition-transform" />
              </button>
              <button
                onClick={handleNext}
                onMouseEnter={() => setPause(true)}
                onMouseLeave={() => setPause(false)}
                className="group bg-slate-700 hover:bg-slate-800 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
                aria-label="Next Track"
              >
                <ArrowRight size={24} className="group-hover:translate-x-[2px] transition-transform" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {tracks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === active ? "bg-slate-800 scale-125" : "bg-slate-400 hover:bg-slate-600"
                  }`}
                  aria-label={`Go to track ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TrackCard({
  track,
  isActive,
  index,
  setPause,
}: {
  track: (typeof tracks)[number];
  isActive: boolean;
  index: number;
  setPause?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const IconComponent = track.icon;
  const hasRegisterButton = ["poster", "paper", "project"].includes(track.id);

  return (
    <div
      className={`track-card ${isActive ? "active-card" : "blur-card"} bg-white rounded-xl shadow-lg overflow-hidden h-[500px] flex flex-col`}
      onMouseEnter={() => setPause && setPause(true)}
      onMouseLeave={() => setPause && setPause(false)}
    >
      <div className="bg-slate-800 p-4 text-center flex-shrink-0">
        <h3 className="font-rajdhani text-xl sm:text-2xl font-bold text-white leading-tight">{track.title}</h3>
      </div>

      <div className="flex justify-center px-4 pt-3 flex-shrink-0">
        <img
          src={track.img}
          alt={track.title}
          className="rounded-lg shadow-md object-cover w-full h-[160px] bg-gray-100"
        />
      </div>

      <div className="flex flex-col flex-grow px-4 pt-2 pb-3 justify-between min-h-0">
        <p
          className="text-slate-700 text-left text-xs leading-relaxed mb-3 overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 6,
            WebkitBoxOrient: "vertical",
          }}
        >
          {track.description}
        </p>

        {track.features && (
          <div className="mb-3 flex-shrink-0">
            <div className="flex flex-wrap justify-center gap-1">
              {track.features.slice(0, 2).map((feature, idx) => (
                <span
                  key={idx}
                  className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full text-xs font-medium border border-slate-200"
                >
                  {feature}
                </span>
              ))}
              {track.features.length > 2 && (
                <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full text-xs font-medium border border-slate-200">
                  +{track.features.length - 2}
                </span>
              )}
            </div>
          </div>
        )}

        <div className="space-y-1 flex-shrink-0">
          <div className="text-center">
            <span className="text-xs text-slate-600 font-medium">{track.duration}</span>
          </div>
          <div className="text-center">
            <span className="text-xs font-semibold text-slate-900">
              Fee: <span className="text-slate-800">{track.fee}</span>
            </span>
          </div>
        </div>
      </div>

      {hasRegisterButton && (
        <div className="px-4 pb-3 flex-shrink-0">
          <button
            className="w-full bg-slate-700 text-white font-semibold py-2.5 px-4 rounded-lg text-sm hover:bg-slate-800 transition-all transform hover:scale-105 shadow-md"
            onClick={(e) => {
              e.stopPropagation();
              setPause && setPause(true);
            }}
          >
            Register Now
          </button>
        </div>
      )}
    </div>
  );
}
