import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

const LoadingScreen: React.FC = () => {
  const [count, setCount] = useState(3);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          setIsComplete(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(countdownTimer);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
        
        @keyframes count-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        .animate-count-pulse {
          animation: count-pulse 1s ease-in-out;
        }

        @keyframes loading-bar-fill {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-loading-bar-fill {
          animation: loading-bar-fill 3s linear forwards;
        }

        @keyframes fade-in-scale-up {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale-up {
            animation: fade-in-scale-up 0.5s ease-out forwards;
        }
      `}</style>

      <div className="fixed inset-0 bg-slate-100 flex items-center justify-center z-50 overflow-hidden font-roboto-mono">
        {/* Animated blueprint grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[length:2rem_2rem] opacity-50 animate-pulse"></div>

        <div className="text-center z-10 animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-rajdhani text-slate-900 mb-4 tracking-wider">
            KAGADA <span className="text-blue-600">2025</span>
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl mb-12">
            Initializing Conference Interface...
          </p>

          <div className="relative h-24 w-24 mx-auto flex items-center justify-center">
            {!isComplete ? (
              <span
                key={count}
                className="text-7xl sm:text-8xl font-bold font-rajdhani text-blue-600 animate-count-pulse"
              >
                {count}
              </span>
            ) : (
              <CheckCircle
                className="text-blue-600 animate-fade-in-scale-up"
                size={80}
                strokeWidth={1.5}
              />
            )}
          </div>
        </div>

        {/* Loading bar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-1.5 bg-blue-600/20 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 rounded-full animate-loading-bar-fill"></div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
