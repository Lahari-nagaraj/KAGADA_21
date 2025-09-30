import React from 'react';
import { Star, Trophy, Rocket, Users } from 'lucide-react';

const AboutKagada: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-red-500">KAGADA</span>
              <span className="text-yellow-400 ml-4">2025</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
          </div>

          {/* Content + Stats Side by Side */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <p className="text-lg text-gray-300 leading-relaxed text-justify">
                KAGADA is our Annual National Level Technical Student Conference which has the tracks
                Paper and Poster Presentation along with Project Exhibitions. We, at IEEE UVCE,
                fervently believe that the cause of furthering technical knowledge cannot be achieved
                in the classroom alone. KAGADA, which was awarded the Darrel Chong Platinum Level
                Student Activity Award in 2019, aims to break the barriers, limitations and image of
                being a student by encouraging the contestants to pursue research at the Undergraduate
                level. KAGADA provides a conducive platform for vivacious students to sharpen their
                technical intellect, presentation skills and exchange ideas and learn from one another
                and ultimately become better engineers in the process. <br />
                <br />
                <span className="text-yellow-400 font-semibold">Ottige Kaliyona</span>, an initiative
                where we teach government school students how to utilize technology and improve social
                skills, and <span className="text-yellow-400 font-semibold">Food for Cause</span>, a
                project that resembles a food stall and donates the proceeds from sales there to an
                orphanage, are both carried out as a part of KAGADA. Paper presentations will be held
                online this year in order to encourage greater participation from various colleges and
                to give them the finest platform for expressing their views.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-500/20 to-red-700/20 p-6 rounded-2xl backdrop-blur-sm border border-red-500/30 transform hover:scale-105 transition-transform duration-300">
                <Star className="text-yellow-400 mb-3" size={32} />
                <div className="text-3xl font-bold text-red-400">1000+</div>
                <div className="text-gray-300 text-sm">Participants Expected</div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-700/20 p-6 rounded-2xl backdrop-blur-sm border border-yellow-500/30 transform hover:scale-105 transition-transform duration-300">
                <Users className="text-red-400 mb-3" size={32} />
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-gray-300 text-sm">Colleges Participating</div>
              </div>

              <div className="bg-gradient-to-br from-red-500/20 to-yellow-500/20 p-6 rounded-2xl backdrop-blur-sm border border-red-500/30 transform hover:scale-105 transition-transform duration-300">
                <Trophy className="text-yellow-400 mb-3" size={32} />
                <div className="text-3xl font-bold text-red-400">₹5L+</div>
                <div className="text-gray-300 text-sm">Total Prizes</div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500/20 to-red-500/20 p-6 rounded-2xl backdrop-blur-sm border border-yellow-500/30 transform hover:scale-105 transition-transform duration-300">
                <Rocket className="text-red-400 mb-3" size={32} />
                <div className="text-3xl font-bold text-yellow-400">24</div>
                <div className="text-gray-300 text-sm">Years of Legacy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKagada;
