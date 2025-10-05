import React from "react";
import { ExternalLink, Handshake } from "lucide-react";

// --- Reusable Blueprint Card Style ---
const cardStyle = `bg-white/70 backdrop-blur-md border border-blue-600/20 shadow-lg rounded-lg
                   bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] 
                   bg-[length:2rem_2rem]`;

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

type Sponsor = {
  name: string;
  logoUrl: string;
  website: string;
};

const sponsors: Sponsor[] = [
  {
    name: "IEEE UVCE",
    logoUrl: "https://ieeeuvce.in/img/logo.png",
    website: "https://ieeeuvce.in",
  },
  {
    name: "UVCE Alumni Association",
    logoUrl: "https://uvcega.org/wp-content/uploads/2022/12/uvcega-logo.png",
    website: "https://uvcega.org",
  },
  {
    name: "UVCE",
    logoUrl: "https://uvce.ac.in/img/logo.png",
    website: "https://uvce.ac.in",
  },
];

const Sponsors: React.FC = () => {
  return (
    <div className="site-background font-roboto-mono">
      <style>{backgroundStyle}</style>
      <section id="sponsors" className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <SectionTitle>
              <span className="text-blue-600">Our Sponsors</span>
            </SectionTitle>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {sponsors.map((sponsor) => (
                <div key={sponsor.name} className={`${cardStyle} p-6 flex flex-col items-center text-center`}>
                  <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white rounded-md flex items-center justify-center overflow-hidden border border-blue-600/10 shadow">
                    <img
                      src={sponsor.logoUrl}
                      alt={`${sponsor.name} logo`}
                      className="w-full h-full object-contain p-3"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-4 font-rajdhani text-2xl font-bold text-slate-900">{sponsor.name}</h3>
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-500 transition-colors"
                    aria-label={`Visit ${sponsor.name} website`}
                  >
                    Explore More
                    <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>

            {/* Optional CTA Row */}
            <div className="mt-8 text-center text-slate-600">
              Interested in sponsoring? <a href="#contact" className="text-blue-700 font-semibold hover:underline">Contact us</a>.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;


