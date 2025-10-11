// // import React, { useEffect, useRef, useState } from "react";
// // import { ArrowLeft, ArrowRight, Users, BookOpen, Wrench, Heart, Coffee } from "lucide-react";

// // // --- Blueprint background and font ---
// // const backgroundStyle = `
// //   @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
// //   .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
// //   .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
// //   .site-background {
// //     background-color: #f8fafc;
// //     background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
// //     min-height: 100vh;
// //     width: 100%;
// //   }
// //   .track-card {
// //     transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
// //     transform-origin: center;
// //   }
// //   .blur-card {
// //     filter: blur(4px);
// //     opacity: 0.6;
// //     transform: scale(0.85);
// //   }
// //   .active-card {
// //     filter: none;
// //     opacity: 1;
// //     transform: scale(1);
// //     z-index: 10;
// //   }
// // `;

// // // --- Track Data ---
// // const tracks = [
// //   {
// //     id: "poster",
// //     title: "Poster Presentation",
// //     icon: Users,
// //     description: `Poster presentation provides and opportunity to present innovative ideas through technical posters to depict how real life problems can be solved participants are free to choose the domain of their choice and presentation will be in hybrid mode participants can choose their interested Mode to  present.`,
// //     img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396074/Screenshot_2025-10-02_143440_yoo4lb.png",
// //     fee: "₹150 per team",
// //     features: ["Hybrid Format", "Innovation"],
// //     duration: "15 mins presentation",
// //   },
// //   {
// //     id: "paper",
// //     title: "Paper Presentation",
// //     icon: BookOpen,
// //     description: `Paper presentation competition gives participants a chance to presente technical research papers on their interested domain and lay and initial stone to engrave once knowledge to serve society with their innovative ideas including categories ug/pg paper presentation will be in online mode`,
// //     img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396194/6950be6b-5651-43e2-8a7e-cade88d16a4d_wize9x.jpg",
// //     fee: "₹200 per team",
// //     features: ["Research", "Academic Excellence"],
// //     duration: "20 mins presentation",
// //   },
// //   {
// //     id: "project",
// //     title: "Project Presentation",
// //     icon: Wrench,
// //     description: `Project presentation make survey for students to bring out the inventors in them and their creativity to pure reality through walking model demonstrations this also help them to display the innovative thoughts on different domains`,
// //     img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396266/20241026_124756_xi3yqo.jpg",
// //     fee: "₹180 per team",
// //     features: ["Working Models", "Industry Focus"],
// //     duration: "25 mins demonstration",
// //   },
// //   {
// //     id: "ottige",
// //     title: "Ottige Kaliyona",
// //     icon: Heart,
// //     description: `Ottige Kaliyona conducted by IEEE WIE during KAGADA 25 as an initiative to contribute in uprising of the society inviting students from the government schools with technical education and fun activities`,
// //     img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396336/_storage_emulated_0_DCIM_Camera_IMG_20241026_105853_a49rdk.jpg",
// //     fee: "Free",
// //     features: ["Social Impact", "Education"],
// //     duration: "Full day event",
// //   },
// //   {
// //     id: "food",
// //     title: "Food for Cause",
// //     icon: Coffee,
// //     description: `A special event conducted where all the students of the college can  take part where the food stalls will be set up with delicious foods and profit collected from the same will be donated to an NGO`,
// //     img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396128/Screenshot_2025-10-02_143521_i6bymk.png",
// //     fee: "As per menu",
// //     features: ["Charity", "Networking"],
// //     duration: "Throughout event",
// //   },
// // ];

// // export default function ExploreTracksCarousel() {
// //   const [active, setActive] = useState(0);
// //   const [pause, setPause] = useState(false);
// //   const timerRef = useRef<number | null>(null);

// //   useEffect(() => {
// //     if (pause) return;
// //     timerRef.current = window.setInterval(() => {
// //       setActive((a) => (a + 1) % tracks.length);
// //     }, 2000);
// //     return () => {
// //       if (timerRef.current) window.clearInterval(timerRef.current);
// //     };
// //   }, [pause]);

// //   const idx = (i: number) => ((i % tracks.length) + tracks.length) % tracks.length;
// //   const leftIndex = idx(active - 1);
// //   const rightIndex = idx(active + 1);

// //   const handlePrev = () => {
// //     setActive(leftIndex);
// //     setPause(true);
// //     setTimeout(() => setPause(false), 3000);
// //   };
// //   const handleNext = () => {
// //     setActive(rightIndex);
// //     setPause(true);
// //     setTimeout(() => setPause(false), 3000);
// //   };

// //   return (
// //     <div className="site-background font-roboto-mono">
// //       <style>{backgroundStyle}</style>
// //       {/* --- Reduced Padding --- */}
// //       <section id="tracks" className="py-6 sm:py-8">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center mb-12">
// //             <h2 className="font-rajdhani text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-800 tracking-wider">
// //               Explore Event Tracks
// //             </h2>
// //           </div>

// //           {/* Carousel Container */}
// //           <div className="relative max-w-7xl mx-auto">
// //             <div className="flex items-center justify-center gap-2 sm:gap-4">
// //               <div className="hidden lg:block w-full max-w-xs">
// //                 <TrackCard track={tracks[leftIndex]} isActive={false} index={leftIndex} />
// //               </div>
// //               <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
// //                 <TrackCard track={tracks[active]} isActive={true} index={active} setPause={setPause} />
// //               </div>
// //               <div className="hidden lg:block w-full max-w-xs">
// //                 <TrackCard track={tracks[rightIndex]} isActive={false} index={rightIndex} />
// //               </div>
// //             </div>

// //             <div className="flex justify-center gap-8 mt-8">
// //               <button
// //                 onClick={handlePrev}
// //                 onMouseEnter={() => setPause(true)}
// //                 onMouseLeave={() => setPause(false)}
// //                 className="group bg-slate-700 hover:bg-slate-800 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
// //                 aria-label="Previous Track"
// //               >
// //                 <ArrowLeft size={24} className="group-hover:translate-x-[-2px] transition-transform" />
// //               </button>
// //               <button
// //                 onClick={handleNext}
// //                 onMouseEnter={() => setPause(true)}
// //                 onMouseLeave={() => setPause(false)}
// //                 className="group bg-slate-700 hover:bg-slate-800 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
// //                 aria-label="Next Track"
// //               >
// //                 <ArrowRight size={24} className="group-hover:translate-x-[2px] transition-transform" />
// //               </button>
// //             </div>

// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // function TrackCard({
// //   track,
// //   isActive,
// //   index,
// //   setPause,
// // }: {
// //   track: (typeof tracks)[number];
// //   isActive: boolean;
// //   index: number;
// //   setPause?: React.Dispatch<React.SetStateAction<boolean>>;
// // }) {
// //   const IconComponent = track.icon;
// //   const hasRegisterButton = ["poster", "paper", "project"].includes(track.id);

// //   return (
// //     <div
// //       className={`track-card ${isActive ? "active-card" : "blur-card"} bg-white rounded-xl shadow-lg overflow-hidden h-[500px] flex flex-col`}
// //       onMouseEnter={() => setPause && setPause(true)}
// //       onMouseLeave={() => setPause && setPause(false)}
// //     >
// //       <div className="bg-slate-800 p-4 text-center flex-shrink-0">
// //         <h3 className="font-rajdhani text-xl sm:text-2xl font-bold text-white leading-tight">{track.title}</h3>
// //       </div>

// //       <div className="flex justify-center px-4 pt-3 flex-shrink-0">
// //         <img
// //           src={track.img}
// //           alt={track.title}
// //           className="rounded-lg shadow-md object-cover w-full h-[160px] bg-gray-100"
// //         />
// //       </div>

// //       <div className="flex flex-col flex-grow px-4 pt-2 pb-3 justify-between min-h-0">
// //         <p
// //           className="text-slate-700 text-left text-xs leading-relaxed mb-3 overflow-hidden"
// //           style={{
// //             display: "-webkit-box",
// //             WebkitLineClamp: 6,
// //             WebkitBoxOrient: "vertical",
// //           }}
// //         >
// //           {track.description}
// //         </p>

// //       </div>

// //       {hasRegisterButton && (
// //         <div className="px-4 pb-3 flex-shrink-0">
// //           <button
// //             className="w-full bg-slate-700 text-white font-semibold py-2.5 px-4 rounded-lg text-sm hover:bg-slate-800 transition-all transform hover:scale-105 shadow-md"
// //             onClick={(e) => {
// //               e.stopPropagation();
// //               setPause && setPause(true);
// //             }}
// //           >
// //             Register Now
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// import React, { useEffect, useRef, useState } from "react";
// import { ArrowLeft, ArrowRight, Users, BookOpen, Wrench, Heart, Coffee } from "lucide-react";
// import { useScrollAnimation } from "../hooks/useScrollAnimation";

// // --- Blueprint background and font ---
// const backgroundStyle = `
//   @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');
//   .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
//   .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
//   .font-poppins { font-family: 'Poppins', sans-serif; }
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
  
//   .fade-in-up {
//     opacity: 0;
//     transform: translateY(30px);
//     transition: all 0.6s ease-out;
//   }
  
//   .fade-in-up.animate {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// // --- Track Data ---
// const tracks = [
//   {
//     id: "poster",
//     title: "Poster Presentation",
//     icon: Users,
//     description: `Poster presentation provides an opportunity to present innovative ideas through technical posters to depict how real-life problems can be solved. Participants are free to choose the domain of their choice and the presentation will be held in hybrid mode. This event encourages creativity, critical thinking, and clear communication of technical concepts. Additionally, participants get a chance to engage with judges and peers, receive valuable feedback, and inspire others with their innovative solutions.`,
//     img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396074/Screenshot_2025-10-02_143440_yoo4lb.png",
//     fee: "₹150 per team",
//     features: ["Hybrid Format", "Innovation"],
//     duration: "15 mins presentation",
//     registerLink: "https://bit.ly/KAGADA2025_call_for_posterpresentation", // 🔗 Update link here
//   },
//   {
//     id: "paper",
//     title: "Paper Presentation",
//     icon: BookOpen,
//     description: `Paper presentation competition gives participants a chance to present their technical research papers in their domain of interest and lay an initial stone to engrave one's knowledge to serve society with their innovative ideas including categories UG/PG. Paper presentation will be in online mode, allowing participants to showcase their work. It also provides an opportunity to receive constructive feedback from experts, enhancing their research and presentation skills. Additionally, participants can network with peers and professionals, fostering collaboration and the exchange of new ideas.`,
//     img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396194/6950be6b-5651-43e2-8a7e-cade88d16a4d_wize9x.jpg",
//     fee: "₹200 per team",
//     features: ["Research", "Academic Excellence"],
//     duration: "20 mins presentation",
//     registerLink: "http://bit.ly/KAGADA2025_call_for_paperpresentation", // 🔗 Update link here
//   },
//   {
//     id: "project",
//     title: "Project Presentation",
//     icon: Wrench,
//     description: `Project presentation makes way for students to bring out the inventors in them and their creativity to pure reality through working model demonstrations. This also helps them to display their innovative thoughts on different domains, encouraging problem-solving and critical thinking. The event also helps students gain confidence in presenting their projects, while inspiring peers and fostering a culture of learning and innovation.`,
//     img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396266/20241026_124756_xi3yqo.jpg",
//     fee: "₹180 per team",
//     features: ["Working Models", "Industry Focus"],
//     duration: "25 mins demonstration",
//     registerLink: "https://bit.ly/Kagada2025_CallforProjectPresenatation", // 🔗 Update link here
//   },
//   {
//     id: "ottige",
//     title: "Ottige Kaliyona",
//     icon: Heart,
//     description: `Ottige Kaliyona, conducted by IEEE WIE during KAGADA 25, is an initiative to contribute in uprising of the society, inviting students from a government school for technical education and fun activities. The program provides hands-on learning experiences, fostering curiosity and creativity among young minds.`,
//     img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396336/_storage_emulated_0_DCIM_Camera_IMG_20241026_105853_a49rdk.jpg",
//     fee: "Free",
//     features: ["Social Impact", "Education"],
//     duration: "Full day event",
//   },
//   {
//     id: "food",
//     title: "Food for Cause",
//     icon: Coffee,
//     description: `The event is conducted b ECE students of UVCE where food stalls serve a variety of delicious foods to visitors. The profits collected from these stalls are donated to an NGO, supporting a meaningful cause. Along with enjoying good food, attendees also get to engage with vibrant student student community, making the event both fun and impactful`,
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
//   const { ref: tracksRef, isVisible: tracksVisible } = useScrollAnimation();

//   useEffect(() => {
//     if (pause) return;
//     timerRef.current = window.setInterval(() => {
//       setActive((a) => (a + 1) % tracks.length);
//     }, 2000);
//     return () => {
//       if (timerRef.current) window.clearInterval(timerRef.current);
//     };
//   }, [pause]);

//   const idx = (i: number) => ((i % tracks.length) + tracks.length) % tracks.length;
//   const leftIndex = idx(active - 1);
//   const rightIndex = idx(active + 1);

//   const handlePrev = () => {
//     setActive(leftIndex);
//     setPause(true);
//     setTimeout(() => setPause(false), 3000);
//   };
//   const handleNext = () => {
//     setActive(rightIndex);
//     setPause(true);
//     setTimeout(() => setPause(false), 3000);
//   };

//   return (
//     <div className="site-background font-roboto-mono">
//       <style>{backgroundStyle}</style>
//       {/* --- Reduced Padding --- */}
//       <section id="tracks" className="py-6 sm:py-8">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center mb-12">
//             <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider">
//               <span className="text-slate-900">Explore Event</span> <span className="text-blue-600">Tracks</span>
//             </h2>
//           </div>

//           {/* Carousel Container */}
//           <div ref={tracksRef} className={`relative max-w-7xl mx-auto fade-in-up ${tracksVisible ? 'animate' : ''}`}>
//             <div className="flex items-center justify-center gap-2 sm:gap-4">
//               <div className="hidden lg:block w-full max-w-xs">
//                 <TrackCard track={tracks[leftIndex]} isActive={false} index={leftIndex} />
//               </div>
//               <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
//                 <TrackCard
//                   track={tracks[active]}
//                   isActive={true}
//                   index={active}
//                   setPause={setPause}
//                 />
//               </div>
//               <div className="hidden lg:block w-full max-w-xs">
//                 <TrackCard track={tracks[rightIndex]} isActive={false} index={rightIndex} />
//               </div>
//             </div>

//             {/* Navigation Buttons */}
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
//   const hasRegisterButton = ["poster", "paper", "project"].includes(track.id);

//   return (
//     <div
//       className={`track-card ${isActive ? "active-card" : "blur-card"} bg-white rounded-xl shadow-lg overflow-hidden h-[480px] sm:h-[520px] md:h-[560px] flex flex-col`}
//       onMouseEnter={() => setPause && setPause(true)}
//       onMouseLeave={() => setPause && setPause(false)}
//     >
//       <div className="bg-slate-800 p-3 text-center flex-shrink-0">
//         <h3 className="font-rajdhani text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
//           {track.title}
//         </h3>
//       </div>

//       <div className="flex justify-center px-3 pt-2 flex-shrink-0">
//         <img
//           src={track.img}
//           alt={track.title}
//           className="rounded-lg shadow-md object-cover w-full h-[120px] sm:h-[140px] md:h-[160px] bg-gray-100"
//         />
//       </div>

//       <div className="flex flex-col flex-grow px-3 pt-1 pb-0 justify-between min-h-0">
//         <p className="text-slate-900 text-justify text-xs sm:text-sm leading-relaxed overflow-hidden flex-grow font-poppins">
//           {track.description}
//         </p>
//       </div>

//       {hasRegisterButton && (
//         <div className="px-3 pb-3 flex-shrink-0">
//           <div className="w-full bg-blue-50 text-slate-700 font-medium py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg text-xs sm:text-sm text-center border border-blue-200 font-poppins">
//             Registrations will be opening soon
//           </div>
//         </div>
//       )}
      
//       {/* Commented out register button - will be restored later */}
//       {/* {hasRegisterButton && track.registerLink && (
//         <div className="px-4 pb-3 flex-shrink-0">
//           <a
//             href={track.registerLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block w-full bg-slate-700 text-white font-semibold py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg text-xs sm:text-sm hover:bg-slate-800 transition-all transform hover:scale-105 shadow-md text-center"
//             onClick={(e) => {
//               e.stopPropagation();
//               setPause && setPause(true);
//             }}
//           >
//             Register Now
//           </a>
//         </div>
//       )} */}
//     </div>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Users, BookOpen, Wrench, Heart, Coffee } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// --- Blueprint background and font ---
const backgroundStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');
  .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
  .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
  .font-poppins { font-family: 'Poppins', sans-serif; }
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
  .fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease-out;
  }
  .fade-in-up.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

// --- Track Data ---
const tracks = [
  {
    id: "poster",
    title: "Poster Presentation",
    icon: Users,
    description: `Poster presentation provides an opportunity to present innovative ideas through technical posters to depict how real-life problems can be solved. Participants are free to choose the domain of their choice and the presentation will be held in hybrid mode. This event encourages creativity, critical thinking, and clear communication of technical concepts. Additionally, participants get a chance to engage with judges and peers, receive valuable feedback, and inspire others with their innovative solutions.`,
    img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396074/Screenshot_2025-10-02_143440_yoo4lb.png",
    fee: "₹150 per team",
  },
  {
    id: "paper",
    title: "Paper Presentation",
    icon: BookOpen,
    description: `Paper presentation competition gives participants a chance to present their technical research papers in their domain of interest and lay an initial stone to engrave one's knowledge to serve society with their innovative ideas including categories UG/PG. Paper presentation will be in online mode, allowing participants to showcase their work. It also provides an opportunity to receive constructive feedback from experts, enhancing their research and presentation skills.`,
    img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396194/6950be6b-5651-43e2-8a7e-cade88d16a4d_wize9x.jpg",
    fee: "₹180 per team",
  },
  {
    id: "project",
    title: "Project Presentation",
    icon: Wrench,
    description: `Project presentation makes way for students to bring out the inventors in them and their creativity to pure reality through working model demonstrations. This also helps them to display their innovative thoughts on different domains, encouraging problem-solving and critical thinking. The event also helps students gain confidence in presenting their projects, while inspiring peers and fostering a culture of learning and innovation.`,
    img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396266/20241026_124756_xi3yqo.jpg",
    fee: "₹200 per team",
  },
  {
    id: "ottige",
    title: "Ottige Kaliyona",
    icon: Heart,
    description: `Ottige Kaliyona, conducted by IEEE WIE during KAGADA 25, is an initiative to contribute in uprising of the society, inviting students from a government school for technical education and fun activities. The program provides hands-on learning experiences, fostering curiosity and creativity among young minds.`,
    img: "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396336/_storage_emulated_0_DCIM_Camera_IMG_20241026_105853_a49rdk.jpg",
    fee: "Free",
    features: ["Social Impact", "Education"],
    duration: "Full day event",
  },
  {
    id: "food",
    title: "Food for Cause",
    icon: Coffee,
    description: `The event is conducted by ECE students of UVCE where food stalls serve a variety of delicious foods to visitors. The profits collected from these stalls are donated to an NGO, supporting a meaningful cause. Along with enjoying good food, attendees also get to engage with the vibrant student community, making the event both fun and impactful.`,
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
  const { ref: tracksRef, isVisible: tracksVisible } = useScrollAnimation();

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
      <section id="tracks" className="py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider">
              <span className="text-slate-900">Explore Event</span>{" "}
              <span className="text-blue-600">Tracks</span>
            </h2>
          </div>

          {/* Carousel */}
          <div ref={tracksRef} className={`relative max-w-7xl mx-auto fade-in-up ${tracksVisible ? "animate" : ""}`}>
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              <div className="hidden lg:block w-full max-w-xs">
                <TrackCard track={tracks[leftIndex]} isActive={false} />
              </div>
              <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <TrackCard track={tracks[active]} isActive={true} setPause={setPause} />
              </div>
              <div className="hidden lg:block w-full max-w-xs">
                <TrackCard track={tracks[rightIndex]} isActive={false} />
              </div>
            </div>

            {/* Nav Buttons */}
            <div className="flex justify-center gap-8 mt-8">
              <button
                onClick={handlePrev}
                onMouseEnter={() => setPause(true)}
                onMouseLeave={() => setPause(false)}
                className="group bg-slate-700 hover:bg-slate-800 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
              >
                <ArrowLeft size={24} className="group-hover:translate-x-[-2px] transition-transform" />
              </button>
              <button
                onClick={handleNext}
                onMouseEnter={() => setPause(true)}
                onMouseLeave={() => setPause(false)}
                className="group bg-slate-700 hover:bg-slate-800 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
              >
                <ArrowRight size={24} className="group-hover:translate-x-[2px] transition-transform" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {tracks.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === active ? "bg-slate-800 scale-125" : "bg-slate-400 hover:bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function TrackCard({ track, isActive, setPause }: any) {
  const hasRegisterButton = ["poster", "paper", "project"].includes(track.id);

  return (
    <div
      className={`track-card ${isActive ? "active-card" : "blur-card"} bg-white rounded-xl shadow-lg overflow-hidden h-[520px] flex flex-col`}
      onMouseEnter={() => setPause && setPause(true)}
      onMouseLeave={() => setPause && setPause(false)}
    >
      <div className="bg-slate-800 p-3 text-center">
        <h3 className="font-rajdhani text-xl font-bold text-white">{track.title}</h3>
      </div>

      <div className="flex justify-center px-3 pt-2">
        <img src={track.img} alt={track.title} className="rounded-lg shadow-md object-cover w-full h-[150px]" />
      </div>

      <div className="flex flex-col flex-grow px-3 pt-2 justify-between">
        <p className="text-slate-900 text-justify text-sm leading-relaxed font-poppins">
          {track.description}
        </p>
      </div>

      {hasRegisterButton && (
        <div className="px-3 pb-3 mt-2">
          {/* 📦 Added Info Box */}
          {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs sm:text-sm mb-2 text-slate-700 font-poppins shadow-sm">
            <p><strong>Fee:</strong> {track.fee}</p>
          </div> */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs sm:text-sm mb-2 text-slate-700 font-poppins shadow-sm flex items-center justify-center">
            <p className="m-0 text-center">
            <strong>Fee:</strong> {track.fee}
             </p>
            </div>


          {/* Registration Placeholder */}
          <div className="w-full bg-blue-50 text-slate-700 font-medium py-2 px-3 rounded-lg text-xs sm:text-sm text-center border border-blue-200 font-poppins">
            Registrations will be opening soon
          </div>
        </div>
      )}
    </div>
  );
}
