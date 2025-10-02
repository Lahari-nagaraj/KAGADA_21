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
  // Sample gallery images (you can add 10 images for each row)
  const imagesRow1 = [
    "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861450/pexels-photo-3861450.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861380/pexels-photo-3861380.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861391/pexels-photo-3861391.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  const imagesRow2 = [
    "https://images.pexels.com/photos/3861370/pexels-photo-3861370.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861402/pexels-photo-3861402.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861420/pexels-photo-3861420.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861435/pexels-photo-3861435.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861452/pexels-photo-3861452.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861467/pexels-photo-3861467.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861475/pexels-photo-3861475.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861480/pexels-photo-3861480.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861490/pexels-photo-3861490.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3861500/pexels-photo-3861500.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

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
      <section id="gallery">
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        .font-roboto-mono { font-family: 'Roboto Mono', monospace; }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .scroller {
          display: flex;
          width: 200%; /* twice the content width */
        }

        .animate-left {
          animation: scroll-left 60s linear infinite;
        }

        .animate-right {
          animation: scroll-right 60s linear infinite;
        }

        .scroller > div {
          display: flex;
          gap: 1.5rem;
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
              {/* Row 1 - scroll right */}
              <div className="w-full overflow-hidden">
                <div className="scroller animate-right">
                  <div>
                    {imagesRow1.map((image, index) => (
                      <ImageCard
                        src={image}
                        index={index}
                        key={`row1a-${index}`}
                      />
                    ))}
                  </div>
                  <div>
                    {imagesRow1.map((image, index) => (
                      <ImageCard
                        src={image}
                        index={index}
                        key={`row1b-${index}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2 - scroll left */}
              <div className="w-full overflow-hidden">
                <div className="scroller animate-left">
                  <div>
                    {imagesRow2.map((image, index) => (
                      <ImageCard
                        src={image}
                        index={index}
                        key={`row2a-${index}`}
                      />
                    ))}
                  </div>
                  <div>
                    {imagesRow2.map((image, index) => (
                      <ImageCard
                        src={image}
                        index={index}
                        key={`row2b-${index}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Gallery;
