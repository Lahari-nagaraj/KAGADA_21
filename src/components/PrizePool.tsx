// import React from "react";
// import { Trophy } from "lucide-react";
// import { useScrollAnimation } from "../hooks/useScrollAnimation";

// // --- Blueprint Card Style & Background ---
// const cardStyle = `relative bg-white/70 backdrop-blur-md border border-blue-500/30 shadow-lg rounded-lg
//                    overflow-hidden 
//                    bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] 
//                    bg-[length:2rem_2rem]`;

// const backgroundStyle = `
//   @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');
//   .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
//   .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
//   .font-poppins { font-family: 'Poppins', sans-serif; }
//   .site-background {
//     background-color: #f8fafc;
//     background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
//     min-height: auto; /* changed from 100vh to fit content */
//     width: 100%;
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

// // --- Section Title ---
// const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => (
//   <div className="text-center mb-6">
//     <h2 className="font-rajdhani text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-wider">
//       {children}
//     </h2>
//     <div className="w-32 h-1 bg-blue-600/50 mx-auto rounded-full mt-3"></div>
//   </div>
// );

// // --- PrizePool Component ---
// const PrizePool: React.FC = () => {
//   const { ref: prizeRef, isVisible: prizeVisible } = useScrollAnimation();
  
//   return (
//     <div className="site-background font-roboto-mono">
//       <style>{backgroundStyle}</style>
//       {/* --- Reduced Top/Bottom Padding --- */}
//       <section id="prizes" className="pt-6 pb-0 sm:pt-8 sm:pb-0">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto">
//             <SectionTitle>
//               <span className="text-slate-900">Prize</span> <span className="text-blue-600">Pool</span>
//             </SectionTitle>
//             <div className="flex justify-center">
//               <div
//                 ref={prizeRef}
//                 className={`${cardStyle} p-8 sm:p-10 max-w-md w-full text-center border-amber-500/50 fade-in-up ${prizeVisible ? 'animate' : ''}`}
//               >
//                 <div className="flex flex-col items-center">
//                   <div className="p-4 rounded-full mb-4 ring-4 ring-amber-400/30 bg-amber-50">
//                     <Trophy className="text-amber-500" size={42} />
//                   </div>
//                   <h3 className="font-rajdhani text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
//                     Total Prize Money
//                   </h3>
//                   <p className="font-rajdhani text-5xl sm:text-6xl font-extrabold text-blue-600 mb-3 tracking-tight">
//                     ₹40,000
//                   </p>
//                   <p className="text-slate-900 text-sm text-justify font-poppins">
//                     Exciting rewards await at{" "}
//                     <span className="font-semibold text-blue-700">
//                       KAGADA 2025
//                     </span>
//                     ! A total prize pool of <strong>₹40,000</strong> will be
//                     shared across{" "}
//                     <span className="text-slate-800">
//                       Paper, Poster, and Project
//                     </span>{" "}
//                     presentations, celebrating creativity, technical excellence
//                     and impactful ideas.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-4 sm:mt-6 text-center p-5 bg-blue-100/60 border-l-4 border-blue-600 rounded-lg font-semibold text-blue-800 font-poppins">
//               🎖️ Every participant will be awarded a{" "}
//               <span className="text-slate-900">
//                 Certificate of Participation
//               </span>
//               .
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PrizePool;


import React from "react";
import { Trophy } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// --- Blueprint Card Style & Background ---
const cardStyle = `relative bg-white/70 backdrop-blur-md border border-blue-500/30 shadow-lg rounded-lg
                   overflow-hidden 
                   bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] 
                   bg-[length:2rem_2rem]`;

const backgroundStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap');
  .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
  .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
  .font-poppins { font-family: 'Poppins', sans-serif; }
  .site-background {
    background-color: #f8fafc;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
    min-height: auto; /* fits content */
    width: 100%;
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

// --- Section Title ---
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-center mb-6">
    <h2 className="font-rajdhani text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-wider">
      {children}
    </h2>
    <div className="w-32 h-1 bg-blue-600/50 mx-auto rounded-full mt-3"></div>
  </div>
);

// --- PrizePool Component ---
const PrizePool: React.FC = () => {
  const { ref: prizeRef, isVisible: prizeVisible } = useScrollAnimation();

  return (
    <div className="site-background font-roboto-mono">
      <style>{backgroundStyle}</style>
      {/* ✅ scroll-mt-24 ensures heading is fully visible with navbar */}
      <section id="prizes" className="pt-6 pb-0 sm:pt-8 sm:pb-0 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle>
              <span className="text-slate-900">Prize</span>{" "}
              <span className="text-blue-600">Pool</span>
            </SectionTitle>

            <div className="flex justify-center">
              <div
                ref={prizeRef}
                className={`${cardStyle} p-8 sm:p-10 max-w-md w-full text-center border-amber-500/50 fade-in-up ${prizeVisible ? "animate" : ""}`}
              >
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-full mb-4 ring-4 ring-amber-400/30 bg-amber-50">
                    <Trophy className="text-amber-500" size={42} />
                  </div>
                  <h3 className="font-rajdhani text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
                    Total Prize Money
                  </h3>
                  <p className="font-rajdhani text-5xl sm:text-6xl font-extrabold text-blue-600 mb-3 tracking-tight">
                    ₹40,000
                  </p>
                  <p className="text-slate-900 text-sm text-justify font-poppins">
                    Exciting rewards await at{" "}
                    <span className="font-semibold text-blue-700">
                      KAGADA 2025
                    </span>
                    ! A total prize pool of <strong>₹40,000</strong> will be
                    shared across{" "}
                    <span className="text-slate-800">
                      Paper, Poster, and Project
                    </span>{" "}
                    presentations, celebrating creativity, technical excellence
                    and impactful ideas.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 text-center p-5 bg-blue-100/60 border-l-4 border-blue-600 rounded-lg font-semibold text-blue-800 font-poppins">
              🎖️ Every participant will be awarded a{" "}
              <span className="text-slate-900">Certificate of Participation</span>.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrizePool;
