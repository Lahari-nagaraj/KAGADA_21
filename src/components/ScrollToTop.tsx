import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          aria-label="Scroll to top"
        >
          <div className="flex items-center justify-center w-full h-full">
            <ChevronUp size={24} className="animate-bounce" />
          </div>
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          
          {/* Pulsing Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-red-300 animate-ping opacity-20"></div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;