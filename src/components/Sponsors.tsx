import React from "react";
import { Handshake } from "lucide-react";

// --- Blueprint SVG Grid Background Style ---
const backgroundStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
  .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
  .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
  .site-background {
    background-color: #f8fafc;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
    min-height: auto;
    width: 100%;
  }
`;

// --- Section Title Component ---
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="text-center mb-10 sm:mb-14">
    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-600/10 rounded-full mb-4">
      <Handshake className="text-blue-600" size={36} />
    </div>
    <h2 className="font-rajdhani text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-wider">
      {children}
    </h2>
    <div className="w-32 h-1 bg-blue-600/50 mx-auto rounded-full mt-3"></div>
  </div>
);

const sponsorLogos: string[] = [

  "src/assets/spo1.png",
  "src/assets/spo2.png",
   "src/assets/spo3.png",
    "src/assets/spo4.png",
     "src/assets/spon5.png",
      "src/assets/spo6.png",
 
];

const Sponsors: React.FC = () => {
  return (
    <div className="site-background font-roboto-mono">
      <style>{backgroundStyle}</style>
      <section id="sponsors" className="py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionTitle>
              <span className="text-slate-900">Our </span>
              <span className="text-blue-600">Sponsors</span>
            </SectionTitle>

            <div className="mx-auto">
              <div className="grid grid-cols-3 gap-6 sm:gap-8 items-center justify-items-center">
                {sponsorLogos.map((logo, index) => (
                  <div
                    key={logo}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={logo}
                      alt={`Sponsor logo ${index + 1}`}
                      className="max-h-16 sm:max-h-20 object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;


