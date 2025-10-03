import React from "react";
import useCountdown from "../hooks/useCountdown";

// The target date is a constant, so define it outside the component
const KAGADA_START_DATE = "2025-11-08T00:00:00";

const CountdownTimer = () => {
  const timeLeft = useCountdown(KAGADA_START_DATE);

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

// Memoize the component to prevent re-renders if parent state changes
export default React.memo(CountdownTimer);
