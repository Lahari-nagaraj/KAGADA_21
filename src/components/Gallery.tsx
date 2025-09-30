// import React from 'react';

// const Gallery: React.FC = () => {
//   // Sample gallery images from Pexels
//   const topRowImages = [
//     'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800',
//     'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
//     'https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800',
//     'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
//     'https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&w=800',
//     'https://images.pexels.com/photos/3862085/pexels-photo-3862085.jpeg?auto=compress&cs=tinysrgb&w=800',
//   ];

//   const middleRowImages = [
//     'https://images.pexels.com/photos/3861450/pexels-photo-3861450.jpeg?auto=compress&cs=tinysrgb&w=800',
//     'https://images.pexels.com/photos/3863335/pexels-photo-3863335.jpeg?auto=compress&cs=tinysrgb&w=800',
//     'https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=800',
//     'https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800',
//     'https://images.pexels.com/photos/3861962/pexels-photo-3861962.jpeg?auto=compress&cs=tinysrgb&w=800',
//     'https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg?auto=compress&cs=tinysrgb&w=800',
//   ];

//   const bottomRowImages = [
//     'https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&w=800',
//     'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800',
//     'https://images.pexels.com/photos/3862623/pexels-photo-3862623.jpeg?auto=compress&cs=tinysrgb&w=800',
//     'https://images.pexels.com/photos/3862385/pexels-photo-3862385.jpeg?auto=compress&cs=tinysrgb&w=800',
//     'https://images.pexels.com/photos/3861963/pexels-photo-3861963.jpeg?auto=compress&cs=tinysrgb&w=800',
//     'https://images.pexels.com/photos/3862348/pexels-photo-3862348.jpeg?auto=compress&cs=tinysrgb&w=800',
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-6xl font-bold mb-6">
//             <span className="text-red-600">Gallery</span>
//             <span className="text-yellow-500 ml-4">Moments</span>
//           </h2>
//           <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full mb-8"></div>
//           <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//             Capturing the essence of innovation, creativity, and celebration from KAGADA events
//           </p>
//         </div>

//         {/* Gallery Rows */}
//         <div className="space-y-8">
//           {/* Top Row - Moving Right */}
//           <div className="relative overflow-hidden">
//             <div className="flex animate-scroll-right gap-6">
//               {[...topRowImages, ...topRowImages].map((image, index) => (
//                 <div
//                   key={index}
//                   className="min-w-80 h-64 bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
//                 >
//                   <img
//                     src={image}
//                     alt={`Gallery image ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Middle Row - Moving Left */}
//           <div className="relative overflow-hidden">
//             <div className="flex animate-scroll-left gap-6">
//               {[...middleRowImages, ...middleRowImages].map((image, index) => (
//                 <div
//                   key={index}
//                   className="min-w-80 h-64 bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
//                 >
//                   <img
//                     src={image}
//                     alt={`Gallery image ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
//                     <span className="text-white font-semibold">KAGADA Memories</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Bottom Row - Moving Right */}
//           <div className="relative overflow-hidden">
//             <div className="flex animate-scroll-right gap-6">
//               {[...bottomRowImages, ...bottomRowImages].map((image, index) => (
//                 <div
//                   key={index}
//                   className="min-w-80 h-64 bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
//                 >
//                   <img
//                     src={image}
//                     alt={`Gallery image ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* View All Button */}
//         <div className="text-center mt-16">
//           <button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
//             View Complete Gallery
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll-right {
//           0% {
//             transform: translateX(-50%);
//           }
//           100% {
//             transform: translateX(0%);
//           }
//         }

//         @keyframes scroll-left {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .animate-scroll-right {
//           animation: scroll-right 30s linear infinite;
//         }

//         .animate-scroll-left {
//           animation: scroll-left 30s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Gallery;

import React from "react";

// --- Section Title Component ---
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="text-center mb-12 sm:mb-16">
    <h2 className="font-rajdhani text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-wider">
      {children}
    </h2>
    <div className="w-32 h-1 bg-blue-600/50 mx-auto rounded-full mt-4"></div>
  </div>
);

const Gallery: React.FC = () => {
  // Sample gallery images
  const images = [
    "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861450/pexels-photo-3861450.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  // To make the scrolling effect seamless, we duplicate the images
  const allImages = [...images, ...images];

  const ImageCard = ({ src, index }: { src: string; index: number }) => (
    <div className="flex-shrink-0 w-64 sm:w-80 h-56 sm:h-64 bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-slate-200 group relative">
      <img
        src={src}
        alt={`Gallery image ${index + 1}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
        <span className="text-white font-bold font-rajdhani text-lg">
          KAGADA Moments
        </span>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        .font-roboto-mono { font-family: 'Roboto Mono', monospace; }

        @keyframes scroll-right {
          from { transform: translateX(-100%); }
          to { transform: translateX(0%); }
        }

        @keyframes scroll-left {
          from { transform: translateX(0%); }
          to { transform: translateX(-100%); }
        }
        
        /* The parent container uses flex to lay out the two identical blocks of images */
        .scroller-inner {
            display: flex;
            flex-wrap: nowrap;
            width: fit-content;
        }

        .animate-scroll-right .scroller-inner {
            /* Slower animation duration: changed from 40s to 80s */
            animation: scroll-right 80s linear infinite;
        }

        .animate-scroll-left .scroller-inner {
            animation: scroll-left 80s linear infinite;
        }
      `}</style>

      <section className="py-16 sm:py-20 bg-slate-100 font-roboto-mono overflow-hidden">
        <div className="container mx-auto">
          <SectionTitle>
            Gallery <span className="text-blue-600">Moments</span>
          </SectionTitle>
          <p className="text-center text-slate-600 max-w-3xl mx-auto leading-relaxed -mt-8 mb-16 px-4">
            Capturing the essence of innovation, creativity, and celebration
            from past KAGADA events.
          </p>

          <div className="space-y-6">
            {/* Scroller Row 1 */}
            <div className="w-full overflow-hidden animate-scroll-right">
              <div className="scroller-inner">
                <div className="flex gap-6 pr-6">
                  {images.map((image, index) => (
                    <ImageCard
                      src={image}
                      index={index}
                      key={`row1a-${index}`}
                    />
                  ))}
                </div>
                <div className="flex gap-6 pr-6">
                  {images.map((image, index) => (
                    <ImageCard
                      src={image}
                      index={index}
                      key={`row1b-${index}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Scroller Row 2 */}
            <div className="w-full overflow-hidden animate-scroll-left">
              <div className="scroller-inner">
                <div className="flex gap-6 pr-6">
                  {/* Shuffling images for visual variety */}
                  {[...images.slice(4), ...images.slice(0, 4)].map(
                    (image, index) => (
                      <ImageCard
                        src={image}
                        index={index}
                        key={`row2a-${index}`}
                      />
                    )
                  )}
                </div>
                <div className="flex gap-6 pr-6">
                  {[...images.slice(4), ...images.slice(0, 4)].map(
                    (image, index) => (
                      <ImageCard
                        src={image}
                        index={index}
                        key={`row2b-${index}`}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 px-4">
            <button className="bg-blue-600 text-white font-bold py-3 px-8 sm:px-10 rounded-md text-base sm:text-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20">
              View Complete Gallery
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
