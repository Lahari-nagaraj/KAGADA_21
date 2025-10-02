import React, { useState, useEffect } from "react";
import { ScrollText, Feather, School, Sparkles, X, Loader } from "lucide-react";

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-11-08T00:00:00").getTime();
    const timer = setInterval(() => {
      const difference = targetDate - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="grid grid-cols-4 gap-3 sm:gap-4 text-center">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="p-3 sm:p-4 rounded-lg bg-black/5 border border-blue-600/10"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800">
              {String(value).padStart(2, "0")}
            </div>
            <div className="text-xs uppercase tracking-widest text-blue-800/80 font-semibold">
              {unit}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// // AI Helper Modal Props
// interface AIHelperModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// // AI Helper Modal with Enhanced Context
// const AIHelperModal: React.FC<AIHelperModalProps> = ({ isOpen, onClose }) => {
//   const [query, setQuery] = useState("");
//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   if (!isOpen) return null;

//   const handleGenerate = async () => {
//     if (!query) {
//       setError("Please enter a question.");
//       return;
//     }
//     setLoading(true);
//     setError("");
//     setResult("");

//     const systemPrompt = `You are a helpful and friendly AI assistant for the KAGADA 2025 technical conference. Your goal is to answer user questions based ONLY on the information provided below. Be concise and professional. If the answer isn't in this information, say that the information is not available yet.

// --- WEBSITE INFORMATION ---

// ## GENERAL ##
// - Event Name: KAGADA 2025
// - Date: November 8th, 2025
// - Event Time: 9:00 AM - 6:00 PM
// - Location: University Visvesvaraya College of Engineering (UVCE), K.R. Circle, Bengaluru - 560001, Karnataka, India.
// - Type: Annual National-Level Technical Student Conference organized by IEEE UVCE.

// ## ABOUT KAGADA ##
// - Description: KAGADA is a premier platform for students to showcase technical skills, innovative projects, and research. It features Paper and Poster Presentations, and Project Exhibitions.
// - Award: KAGADA received the Darrel Chong Platinum Level Student Activity Award in 2019.
// - Initiatives:
//   - Ottige Kaliyona: An initiative to teach government school students about technology.
//   - Food for Cause: A project that donates proceeds from a food stall to an orphanage.

// ## EVENT TRACKS ##
// 1.  **Poster Presentation:** Showcase research and ideas through compelling visual presentations.
// 2.  **Paper Presentation:** Present technical papers and research findings to expert panels.
// 3.  **Project Presentation:** Demonstrate innovative projects and technical solutions.
// 4.  **Ottige Kaliyona:** Fun technical games and brain-teasing challenges.
// 5.  **Food for Cause:** A social initiative supporting causes through community engagement.

// ## REGISTRATION & PRIZES ##
// - How to Register: Registration will open soon on the official website. Early bird discounts will be available.
// - Prizes: Over ₹5 lakhs in prizes, including cash, certificates, trophies, and potential internship/job opportunities.

// ## PARTICIPATION & LOGISTICS ##
// - Who can participate: Open to all undergraduate and postgraduate engineering students from across India.
// - Accommodation: Assistance is provided for outstation participants, with limited on-campus accommodation available on a first-come, first-served basis.

// ## CONTACT INFORMATION ##
// - Event Coordinators:
//   - Mohith Monnappa T A (Chair, IEEE UVCE): +91 63609 65351, mohithmonnappa.ta@ieee.org
//   - Bharath P Nambiar (Vice Chair, IEEE UVCE): +91 91089 40867, bharathpnambiar@ieee.org
//   - Vaishnavi N Mahadev (Vice Chair, IEEE UVCE): +91 93803 82355, vaishnavinm15@ieee.org

// ## ABOUT IEEE UVCE & UVCE ##
// - IEEE UVCE: A recognized Student Branch in IEEE Region 10, rekindled in 2001. Received the 2023 IEEE R10 Special Recognition Award. Motto is "Striding Ahead".
// - UVCE: Established in 1917 by Sir M. Visvesvaraya, it became an autonomous college in 2022 and has a legacy of over 100 years.

// --- END OF INFORMATION ---
// `;
//     // Access API key using import.meta.env for Vite projects
//     const apiKey = import.meta.env.VITE_GEMINI_API_KEY || "";

//     if (!apiKey) {
//       setError("API key is not configured. Please set the VITE_GEMINI_API_KEY in your .env.local file.");
//       setLoading(false);
//       return;
//     }

//     const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
//     const payload = {
//       contents: [{ parts: [{ text: query }] }],
//       systemInstruction: { parts: [{ text: systemPrompt }] },
//     };
//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       if (!response.ok) throw new Error(`API error: ${response.statusText}`);
//       const data = await response.json();
//       const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
//       if (text) setResult(text);
//       else throw new Error("No content received from API.");
//     } catch (err) {
//       setError(
//         err instanceof Error ? err.message : "An unknown error occurred."
//       );
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm animate-fade-in-up p-4">
//       <div className="relative w-11/12 max-w-2xl p-6 sm:p-8 text-left blueprint-card-light font-roboto-mono text-slate-900">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-slate-500 hover:text-slate-900 transition-colors"
//         >
//           <X size={24} />
//         </button>
//         <h3 className="font-rajdhani text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
//           Ask AI Assistant
//         </h3>
//         <p className="text-slate-600 mb-4 text-sm sm:text-base">
//           Have a question about KAGADA 2025? Ask away!
//         </p>
//         <textarea
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="e.g., Who can participate?"
//           className="w-full p-3 border-2 border-blue-600/20 rounded-md bg-white/70 focus:outline-none focus:border-blue-600 text-slate-800 text-base"
//           rows={3}
//         />
//         <button
//           onClick={handleGenerate}
//           disabled={loading}
//           className="bg-blue-600 text-white font-bold py-2 px-6 rounded-md text-base mt-3 flex items-center justify-center
//                      hover:bg-blue-500 transition-all duration-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
//         >
//           {loading ? (
//             <Loader className="animate-spin mr-2" />
//           ) : (
//             <Sparkles className="mr-2" size={16} />
//           )}
//           {loading ? "Thinking..." : "Get Answer"}
//         </button>
//         {error && <p className="text-red-600 mt-4">{error}</p>}
//         {result && (
//           <div className="mt-4 p-4 bg-black/5 rounded-md border border-blue-600/20 text-slate-800 whitespace-pre-wrap">
//             {result}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// Main App Component
const App = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
        .blueprint-card-light {
          background-color: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border-radius: 0.75rem;
          background-image: linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 2rem 2rem;
        }
      `}</style>

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-roboto-mono text-slate-800 bg-slate-100">
        <div className="absolute inset-0 z-0">
          <img
            src="https://uvce.ac.in/img/slides/UVCE_Home9.jpg"
            alt="UVCE College Campus"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-white/40 backdrop-grayscale-[0.5]"></div> */}
        </div>

        <div className="absolute inset-0 pointer-events-none z-10 opacity-25">
          <ScrollText
            className="absolute top-[15%] left-[20%] text-blue-800/50 animate-float"
            size={40}
            style={{ animationDuration: "8s" }}
          />
          <Feather
            className="absolute bottom-[20%] right-[15%] text-blue-800/50 animate-float"
            size={44}
            style={{ animationDelay: "2s", animationDuration: "10s" }}
          />
          <School
            className="absolute top-[50%] right-[30%] text-blue-800/50 animate-float"
            size={38}
            style={{ animationDelay: "1s", animationDuration: "9s" }}
          />
        </div>

        <main className="relative z-20 w-11/12 max-w-5xl p-6 sm:p-10 md:p-12 text-center blueprint-card-light">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold font-rajdhani text-slate-900 tracking-wider">
              KAGADA 2025
            </h1>
            <p className="font-semibold text-blue-800 text-base sm:text-lg md:text-xl tracking-wider">
              Annual National-Level Technical Student Conference
            </p>
            <div className="w-48 h-px bg-blue-600/30 mx-auto"></div>
            <CountdownTimer />
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-blue-600 text-white font-bold py-3 px-8 sm:px-10 rounded-md text-base sm:text-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20 w-full sm:w-auto">
                Register Now
              </button>
              {/* <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600/10 text-blue-800 font-bold py-3 px-8 sm:px-10 rounded-md text-base sm:text-lg hover:bg-blue-600/20 transition-all duration-300 transform hover:scale-105 shadow-lg border border-blue-600/30 flex items-center justify-center w-full sm:w-auto"
              >
                <Sparkles size={20} className="mr-2" />
                Ask AI Assistant
              </button> */}
            </div>
          </div>
        </main>
      </div>

      {/* <AIHelperModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </>
  );
};

export default App;
