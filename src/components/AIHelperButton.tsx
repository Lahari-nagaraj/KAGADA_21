import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import AIHelperModal from "./AIHelperModal";

const AIHelperButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className={`fixed bottom-20 right-8 z-50 w-12 h-12 bg-sky-500 text-white rounded-full shadow-glow-sky
                   hover:bg-sky-400 transform transition-all duration-300 hover:scale-110 
                   focus:outline-none focus:ring-4 focus:ring-sky-500/50
                   flex items-center justify-center
                   ${
                     isVisible
                       ? "opacity-100 translate-y-0"
                       : "opacity-0 translate-y-4 pointer-events-none"
                   }`}
        aria-label="Ask AI Assistant"
      >
        <Sparkles size={26} />
      </button>
      <AIHelperModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default AIHelperButton;
