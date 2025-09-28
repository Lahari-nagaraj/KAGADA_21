import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

const PreviousWinners: React.FC = () => {
  const winners = [
    {
      year: '2024',
      title: 'Innovation Excellence',
      winner: 'Team Alpha',
      college: 'IIT Bangalore',
      project: 'AI-Powered Healthcare Assistant',
      icon: Trophy,
      gradient: 'from-yellow-400 via-yellow-500 to-yellow-600',
      bgGradient: 'from-yellow-50 to-yellow-100'
    },
    {
      year: '2023',
      title: 'Technical Mastery',
      winner: 'Team Beta',
      college: 'NIT Karnataka',
      project: 'Smart City Infrastructure',
      icon: Star,
      gradient: 'from-gray-300 via-gray-400 to-gray-500',
      bgGradient: 'from-gray-50 to-gray-100'
    },
    {
      year: '2022',
      title: 'Creative Solution',
      winner: 'Team Gamma',
      college: 'RVCE Bangalore',
      project: 'Sustainable Energy Management',
      icon: Award,
      gradient: 'from-orange-400 via-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-yellow-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-400">Previous</span>
              <span className="text-red-400 ml-4">Winners</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Celebrating the brilliant minds who have left their mark on KAGADA's legacy
            </p>
          </div>

          {/* Winner Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {winners.map((winner, index) => (
              <div 
                key={index}
                className="group relative transform hover:scale-105 transition-all duration-500 hover:z-10"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-lg border border-white/20 group-hover:border-white/40 transition-all duration-500"></div>
                
                {/* Card Content */}
                <div className="relative p-8 text-center">
                  {/* Trophy Icon */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${winner.gradient} rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-2xl`}>
                      <winner.icon className="text-white" size={40} />
                    </div>
                    
                    {/* Year Badge */}
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {winner.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                      {winner.title}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="text-xl font-semibold text-white">
                        {winner.winner}
                      </div>
                      <div className="text-gray-300 font-medium">
                        {winner.college}
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                      <div className="text-sm text-gray-400 mb-2">Winning Project</div>
                      <div className="text-white font-medium">
                        {winner.project}
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-6">
                      <button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-red-500/20 to-yellow-500/20 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Ready to Join the Hall of Fame?
              </h3>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                KAGADA 2025 is your opportunity to showcase your innovations and potentially become our next champion!
              </p>
              <button className="bg-gradient-to-r from-yellow-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousWinners;