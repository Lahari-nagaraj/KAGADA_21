import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 w-10 h-10 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/30
                     hover:bg-blue-500 transform transition-all duration-300 hover:scale-110 
                     focus:outline-none focus:ring-4 focus:ring-blue-600/50
                     flex items-center justify-center
                     ${
                       isVisible
                         ? "opacity-100 translate-y-0"
                         : "opacity-0 translate-y-4"
                     }`}
          aria-label="Scroll to top"
        >
          <ChevronUp size={22} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
