import React from "react";

// --- Section Title Component ---
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-center mb-12 sm:mb-16">
    <h2 className="font-rajdhani text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-wider">
      {children}
    </h2>
    <div className="w-32 h-1 bg-blue-600/50 mx-auto rounded-full mt-4"></div>
  </div>
);

const Gallery: React.FC = () => {
  // ✅ Replace .heic with Cloudinary JPG transformation (f_jpg)
  const imagesRow1 = [
    "https://res.cloudinary.com/dr3ypljez/image/upload/f_jpg/v1759397360/IMG-20241019-WA0050_xeiwbf.jpg",
    "https://res.cloudinary.com/dr3ypljez/image/upload/v1759398483/IMG_20241026_105755_hrqrcp.jpg",
    "https://res.cloudinary.com/dr3ypljez/image/upload/f_jpg/v1759397308/IMG_3755_md7wy4.heic",
    "https://res.cloudinary.com/dr3ypljez/image/upload/v1759398530/IMG_20241026_095726_ckely7.jpg",
    "https://res.cloudinary.com/dr3ypljez/image/upload/f_jpg/v1759397354/IMG_0814_hk0tg6.heic",
    "https://res.cloudinary.com/dr3ypljez/image/upload/v1759398540/IMG_20241026_100854_foxyqu.jpg",
    "https://res.cloudinary.com/dr3ypljez/image/upload/f_jpg/v1759397379/IMG_20241017_074439_iehaun.jpg",
    "https://res.cloudinary.com/dr3ypljez/image/upload/v1759398546/Screenshot_2025-10-02_151542_gnwmi1.png",
    "https://res.cloudinary.com/dr3ypljez/image/upload/f_jpg/v1759397706/IMG_0889_cmghhn.heic",
    "https://res.cloudinary.com/dr3ypljez/image/upload/v1759396128/Screenshot_2025-10-02_143521_i6bymk.png",
  ];

  const imagesRow2 = [
    "https://res.cloudinary.com/dr3ypljez/image/upload/v1759399153/IMG_20241026_113602745_w7r835.jpg",
    "https://res.cloudinary.com/dr3ypljez/image/upload/v1759397755/Adobe_Express_20241019_1914110_1_ipmbkn.png",
    "https://res.cloudinary.com/dr3ypljez/image/upload/f_jpg/v1759399907/IMG_3802_waimde.heic",
    "https://res.cloudinary.com/dr3ypljez/image/upload/v1759399130/IMG_20241026_113622225_iqeutz.jpg",
    // 🔥 converted to jpg
    "https://res.cloudinary.com/dr3ypljez/image/upload/f_jpg/v1759399208/IMG_3814_rylxxi.heic",
    "https://res.cloudinary.com/dr3ypljez/image/upload/v1759399156/482c0d7d-0b32-4919-89c4-72af06b11a8d_ykjk6c.jpg",
    "https://res.cloudinary.com/dr3ypljez/image/upload/v1759399172/89c51e01-c4b7-49b7-8c4e-8a25c3beb87e_qsz4mo.jpg",
    // 🔥 converted to jpg
    "https://res.cloudinary.com/dr3ypljez/image/upload/f_jpg/v1759399169/IMG_5928_v0qj4n.heic",
     "https://res.cloudinary.com/dr3ypljez/image/upload/v1759399261/Screenshot_2025-10-02_143440_cv3js3.png",
    "https://res.cloudinary.com/dr3ypljez/image/upload/f_jpg/v1759399169/IMG_5928_v0qj4n.heic",
    // 🔥 converted to jpg
   
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
            animation: scroll-left 35s linear infinite; /* faster */
          }

          .animate-right {
            animation: scroll-right 35s linear infinite; /* faster */
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
