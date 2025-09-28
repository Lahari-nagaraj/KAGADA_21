import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-08T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-yellow-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Clock className="text-white" size={40} />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Countdown to <span className="text-yellow-300">KAGADA 25</span>
            </h2>
            <p className="text-xl text-white/90">November 8th, 2025 - The Future Awaits!</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Days */}
            <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl border-2 border-white/20 transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-6xl font-bold text-yellow-300 mb-2 animate-pulse">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="text-white/80 text-lg font-semibold">DAYS</div>
            </div>

            {/* Hours */}
            <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl border-2 border-white/20 transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-6xl font-bold text-yellow-300 mb-2 animate-pulse">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-white/80 text-lg font-semibold">HOURS</div>
            </div>

            {/* Minutes */}
            <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl border-2 border-white/20 transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-6xl font-bold text-yellow-300 mb-2 animate-pulse">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-white/80 text-lg font-semibold">MINUTES</div>
            </div>

            {/* Seconds */}
            <div className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl border-2 border-white/20 transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-6xl font-bold text-yellow-300 mb-2 animate-pulse">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-white/80 text-lg font-semibold">SECONDS</div>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-xl text-white/90 mb-6">
              Every second counts! Don't miss the most spectacular tech event of the year.
            </p>
            <div className="inline-block bg-yellow-500 text-red-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Mark Your Calendar!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;