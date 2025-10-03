import React, { useState, useCallback } from "react";
import { ScrollText, Feather, School, Sparkles } from "lucide-react";

// Import custom components
import CountdownTimer from "./CountdownTimer";
import AIHelperModal from "./AIHelperModal";

// Import styles
import "../index.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use useCallback to prevent re-creating functions on each render
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-roboto-mono text-slate-800 bg-slate-100">
        <div className="absolute inset-0 z-0">
          <img
            src="https://uvce.ac.in/img/slides/UVCE_Home9.jpg"
            alt="UVCE College Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40"></div>
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
              <button
                onClick={openModal}
                className="bg-blue-600/10 text-blue-800 font-bold py-3 px-8 sm:px-10 rounded-md text-base sm:text-lg hover:bg-blue-600/20 transition-all duration-300 transform hover:scale-105 shadow-lg border border-blue-600/30 flex items-center justify-center w-full sm:w-auto"
              >
                <Sparkles size={20} className="mr-2" />
                Ask AI Assistant
              </button>
            </div>
          </div>
        </main>
      </div>

      <AIHelperModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default App;
