import React from 'react';
import { Trophy, Star, Rocket, Users } from 'lucide-react';

const AboutKagada: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-red-500">KAGADA</span>
              <span className="text-yellow-400 ml-4">2025</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full mb-8"></div>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Where Innovation Meets Excellence - The Premier National Tech Festival
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-3xl font-bold text-red-400 mb-4 flex items-center">
                  <Rocket className="mr-3 text-yellow-400" size={32} />
                  Vision & Mission
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  KAGADA is more than just a tech fest - it's a platform where brilliant minds converge to showcase 
                  innovation, creativity, and technical prowess. Our mission is to inspire the next generation of 
                  engineers and technologists while fostering a culture of innovation and excellence.
                </p>
              </div>

              <div className="transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4 flex items-center">
                  <Trophy className="mr-3 text-red-400" size={32} />
                  What Makes Us Special
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  From cutting-edge project presentations to innovative paper submissions, KAGADA provides a 
                  comprehensive platform for students nationwide to demonstrate their skills, learn from peers, 
                  and connect with industry experts.
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Stats Cards */}
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

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-red-600 to-yellow-500 p-8 md:p-12 rounded-3xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to be Part of History?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join us at KAGADA 2025 and be part of the most spectacular tech fest in the country. 
              Showcase your innovations, learn from the best, and create memories that last a lifetime.
            </p>
            <div className="inline-block bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Register Now - Coming Soon!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutKagada;