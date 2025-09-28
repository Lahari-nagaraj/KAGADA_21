import React from 'react';
import { Play, Film } from 'lucide-react';

const AfterMovies: React.FC = () => {
  const videos = [
    {
      title: 'KAGADA 2024 - Official After Movie',
      thumbnail: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '5:32',
      description: 'Relive the excitement and energy of KAGADA 2024 with highlights from all events, competitions, and celebrations.',
    },
    {
      title: 'Innovation Showcase - Best Projects',
      thumbnail: 'https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '8:15',
      description: 'A compilation of the most innovative projects and presentations that made KAGADA 2024 unforgettable.',
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-yellow-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mb-8">
              <Film className="text-white" size={40} />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-red-400">After</span>
              <span className="text-yellow-400 ml-4">Movies</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the magic of KAGADA through our cinematic after movies
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {videos.map((video, index) => (
              <div 
                key={index}
                className="group transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 group-hover:border-white/40 transition-all duration-500">
                  {/* Video Thumbnail */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center transform group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300 cursor-pointer shadow-2xl">
                        <Play className="text-white ml-1" size={32} fill="white" />
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {video.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {video.description}
                    </p>

                    <div className="flex gap-4">
                      <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                        <Play size={16} />
                        Watch Now
                      </button>
                      <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 rounded-full font-semibold transition-all duration-300">
                        Share
                      </button>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              </div>
            ))}
          </div>

          {/* Subscribe Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-red-500/20 to-yellow-500/20 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Don't Miss Future Updates!
              </h3>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                Subscribe to our channel for exclusive behind-the-scenes content and early access to KAGADA 2025 updates.
              </p>
              <button className="bg-gradient-to-r from-yellow-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterMovies;