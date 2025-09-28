import React from 'react';
import { GraduationCap, Book, PenTool } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="College Campus"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-yellow-900/20"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <GraduationCap 
          className="absolute top-1/4 left-1/4 text-yellow-500 animate-bounce" 
          size={48}
          style={{ animationDelay: '0s', animationDuration: '3s' }}
        />
        <Book 
          className="absolute top-1/3 right-1/4 text-red-500 animate-pulse" 
          size={40}
          style={{ animationDelay: '1s', animationDuration: '4s' }}
        />
        <PenTool 
          className="absolute bottom-1/3 left-1/3 text-yellow-600 animate-bounce" 
          size={44}
          style={{ animationDelay: '2s', animationDuration: '3.5s' }}
        />
        <GraduationCap 
          className="absolute bottom-1/4 right-1/3 text-red-400 animate-pulse" 
          size={52}
          style={{ animationDelay: '0.5s', animationDuration: '5s' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-7xl md:text-9xl font-bold">
            <span className="text-red-600 drop-shadow-2xl">KAGADA</span>
            <span className="text-yellow-500 ml-4 drop-shadow-2xl">25</span>
          </h1>
          
          <div className="space-y-4">
            <p className="text-2xl md:text-4xl font-semibold text-gray-800 drop-shadow-lg">
              National Level Tech Fest
            </p>
            
            <div className="inline-block bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-red-200">
              <p className="text-xl md:text-2xl font-bold text-red-700">
                8th November 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-red-500 to-yellow-400 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default Hero;