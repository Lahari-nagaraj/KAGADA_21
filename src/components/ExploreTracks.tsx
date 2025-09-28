import React, { useState, useEffect } from 'react';
import { FileText, Presentation, Cog, Gamepad2, Heart } from 'lucide-react';

const ExploreTracks: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState(0);
  const [rotation, setRotation] = useState(0);

  const tracks = [
    {
      icon: FileText,
      title: 'Poster Presentation',
      description: 'Showcase your research and ideas through compelling visual presentations',
      color: 'from-red-500 to-red-700',
      iconColor: 'text-red-100'
    },
    {
      icon: Presentation,
      title: 'Paper Presentation',
      description: 'Present your technical papers and research findings to expert panels',
      color: 'from-yellow-500 to-yellow-700',
      iconColor: 'text-yellow-100'
    },
    {
      icon: Cog,
      title: 'Project Presentation',
      description: 'Demonstrate innovative projects and technical solutions',
      color: 'from-red-600 to-yellow-600',
      iconColor: 'text-white'
    },
    {
      icon: Gamepad2,
      title: 'Ottige Kaliyona',
      description: 'Fun technical games and brain-teasing challenges for all',
      color: 'from-yellow-600 to-red-600',
      iconColor: 'text-yellow-100'
    },
    {
      icon: Heart,
      title: 'Food for Cause',
      description: 'Supporting social causes while bringing the community together',
      color: 'from-red-700 to-yellow-500',
      iconColor: 'text-red-100'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 72); // 360/5 = 72 degrees per track
      setActiveTrack(prev => (prev + 1) % tracks.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-red-600">Explore</span>
              <span className="text-yellow-500 ml-4">Tracks</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose your path to excellence - Five exciting tracks to showcase your talent
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Circular Carousel */}
            <div className="relative w-80 h-80 mx-auto">
              <div 
                className="absolute inset-0 transition-transform duration-1000 ease-in-out"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                {tracks.map((track, index) => {
                  const angle = (index * 72) * Math.PI / 180;
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  const TrackIcon = track.icon;
                  
                  return (
                    <div
                      key={index}
                      className="absolute w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      style={{
                        left: `50%`,
                        top: `50%`,
                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${-rotation}deg)`,
                      }}
                      onClick={() => setActiveTrack(index)}
                    >
                      <div className={`w-full h-full bg-gradient-to-br ${track.color} rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 ${activeTrack === index ? 'scale-125 shadow-2xl' : ''}`}>
                        <TrackIcon className={track.iconColor} size={32} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Center Circle */}
              <div className="absolute inset-1/2 w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg border-4 border-gray-200 flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Track Details */}
            <div className="flex-1 max-w-lg">
              <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-gray-100 transform transition-all duration-500">
                {(() => {
                  const ActiveIcon = tracks[activeTrack].icon;
                  return (
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tracks[activeTrack].color} rounded-2xl flex items-center justify-center mr-4`}>
                      <ActiveIcon className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{tracks[activeTrack].title}</h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mt-2"></div>
                  </div>
                </div>
                  );
                })()}
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {tracks[activeTrack].description}
                </p>

                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Learn More
                  </button>
                  <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Register Now
                  </button>
                </div>
              </div>

              {/* Track Indicators */}
              <div className="flex justify-center mt-8 gap-3">
                {tracks.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeTrack === index 
                        ? 'bg-gradient-to-r from-red-500 to-yellow-500 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => setActiveTrack(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreTracks;