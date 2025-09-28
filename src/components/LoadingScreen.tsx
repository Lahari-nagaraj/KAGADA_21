import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [count, setCount] = useState(3);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500);

    const countdownTimer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-800 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full opacity-5 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-yellow-500 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2 animate-spin"></div>
      </div>

      <div className="text-center z-10">
        <div className={`transform transition-all duration-1000 ${showText ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-wider">
            KAGADA
            <span className="text-yellow-400 ml-4">25</span>
          </h1>
          
          <div className="text-white text-xl md:text-2xl mb-12">
            <span className="inline-block animate-pulse">Loading in</span>
          </div>

          <div className="relative">
            <div className={`text-8xl md:text-9xl font-bold text-yellow-400 transform transition-all duration-500 ${
              count > 0 ? 'scale-150 rotate-12' : 'scale-100 rotate-0 opacity-0'
            }`}>
              {count > 0 ? count : '🚀'}
            </div>
            
            {count === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl animate-bounce">🎉</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Loading bar */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-white bg-opacity-30 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-yellow-400 to-red-300 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;