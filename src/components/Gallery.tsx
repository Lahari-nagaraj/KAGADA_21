import React from 'react';

const Gallery: React.FC = () => {
  // Sample gallery images from Pexels
  const topRowImages = [
    'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3862085/pexels-photo-3862085.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  const middleRowImages = [
    'https://images.pexels.com/photos/3861450/pexels-photo-3861450.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3863335/pexels-photo-3863335.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3861962/pexels-photo-3861962.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  const bottomRowImages = [
    'https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3862623/pexels-photo-3862623.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3862385/pexels-photo-3862385.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3861963/pexels-photo-3861963.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3862348/pexels-photo-3862348.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-red-600">Gallery</span>
            <span className="text-yellow-500 ml-4">Moments</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Capturing the essence of innovation, creativity, and celebration from KAGADA events
          </p>
        </div>

        {/* Gallery Rows */}
        <div className="space-y-8">
          {/* Top Row - Moving Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right gap-6">
              {[...topRowImages, ...topRowImages].map((image, index) => (
                <div 
                  key={index}
                  className="min-w-80 h-64 bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={image} 
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Row - Moving Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left gap-6">
              {[...middleRowImages, ...middleRowImages].map((image, index) => (
                <div 
                  key={index}
                  className="min-w-80 h-64 bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={image} 
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <span className="text-white font-semibold">KAGADA Memories</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Moving Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right gap-6">
              {[...bottomRowImages, ...bottomRowImages].map((image, index) => (
                <div 
                  key={index}
                  className="min-w-80 h-64 bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={image} 
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            View Complete Gallery
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Gallery;