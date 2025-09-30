import React, { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = ["About", "Tracks", "Winners", "Gallery", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
        
        .header-card {
          background-color: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          background-image: linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 2rem 2rem;
        }
      `}</style>

      {/* --- Header --- */}
      <header
        className={`sticky top-4 z-40 transition-all duration-300 mx-auto max-w-7xl px-4 ${
          isScrolled ? "top-2" : ""
        }`}
      >
        <div
          className={`header-card rounded-lg transition-shadow duration-300 ${
            isScrolled ? "shadow-xl" : "shadow-md"
          }`}
        >
          <div className="flex items-center justify-between p-4">
            {/* Logo */}
            <a
              href="#"
              className="font-rajdhani text-3xl font-bold text-slate-900"
            >
              KAGADA <span className="text-blue-600">'25</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 font-roboto-mono text-sm font-semibold">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {link}
                </a>
              ))}
              <button className="bg-blue-600 text-white font-bold py-2 px-5 rounded-md hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-md shadow-blue-500/20">
                Register Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-md bg-blue-600/10 text-blue-600"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 header-card"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div className="relative z-10 p-8">
          <div className="flex justify-between items-center mb-16">
            <a
              href="#"
              className="font-rajdhani text-3xl font-bold text-slate-900"
              onClick={() => setIsMenuOpen(false)}
            >
              KAGADA <span className="text-blue-600">'25</span>
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md bg-blue-600/10 text-blue-600"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col items-center gap-8 font-roboto-mono text-xl font-semibold">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="mt-16 text-center">
            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 w-full">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
