import React, { useState } from "react";
import { Zap, Globe, Users, Star, Trophy, Rocket } from "lucide-react";
import logo2 from "../assets/logo2.png";

// --- Reusable "Highlighted Glass Pane" Card Style ---
const cardStyle = `bg-slate-50/60 backdrop-blur-xl border-2 border-blue-500/30 shadow-2xl rounded-lg`;

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

// --- Combined About Page Component ---
const AboutPage = () => {
  return (
    <div className="site-background">
      <style>{`
        /* --- Google Font Imports --- */
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
        
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        .font-roboto-mono { font-family: 'Roboto Mono', monospace; }

        .site-background {
          background-color: #f8fafc; /* slate-50 */
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
          min-height: 100vh;
          width: 100%;
        }
      `}</style>
      {/* Mobile truncation helper */}
      <MobileTruncatedStyle />

      {/* --- About UVCE Section --- */}
      <section className="py-6 sm:py-8 font-roboto-mono">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle>
              About <span className="text-blue-600">UVCE</span>
            </SectionTitle>
            <div className={`${cardStyle} p-8 sm:p-12`}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  {/* Mobile-only truncation wrapper */}
                  <MobileTruncated>
                    <p className="text-slate-700 leading-relaxed text-justify">
                    <b>University of Visvesvaraya College of Engineering</b>,
                    established in <b>1917</b> by{" "}
                    <b>Bharat Ratna Sir M Visvesvaraya</b>. UVCE stands as the
                    fifth engineering college in India and the first in
                    Karnataka. UVCE provides 8 undergraduate, 24 postgraduate,
                    and various research programs in fields such as Computer
                    Science and Engineering, Information Science and
                    Engineering, Artificial Intelligence and Machine Learning,
                    Electronics and Communication Engineering, Electrical and
                    Electronics Engineering, Mechanical Engineering, Civil
                    Engineering, and Architecture. UVCE is dedicated to
                    delivering <b>high-quality</b> technical education and is
                    recognized as one of the{" "}
                    <b>top engineering colleges in Karnataka.</b>
                    </p>
                  </MobileTruncated>
                </div>
                <div className="space-y-6">
                  <img
                    src="https://th-i.thgim.com/public/incoming/mgxxq/article65508289.ece/alternates/FREE_1200/UVCE_03.jpg"
                    alt="UVCE College Campus"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <div className="bg-blue-600/5 p-4 rounded-lg border border-blue-600/10 text-center">
                    <div className="text-3xl font-bold text-slate-800">
                      100+
                    </div>
                    <div className="text-sm text-slate-600">
                      Years of Legacy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- About IEEE Section --- */}
      <section className="py-6 sm:py-8 font-roboto-mono">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionTitle>
              About <span className="text-blue-600">IEEE UVCE</span>
            </SectionTitle>

            <div className={`${cardStyle} p-8 sm:p-12`}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <MobileTruncated>
                    <p className="text-slate-700 leading-relaxed text-justify">
                    <b>IEEE UVCE</b> is an IEEE student branch at the{" "}
                    <b>University of Visvesvaraya College of Engineering</b>,
                    under the aegis of the IEEE Bangalore Section. Started in
                    2001, IEEE UVCE is dedicated to <b>spreading knowledge</b>{" "}
                    through a variety of activities. The branch{" "}
                    <b>provides students with opportunities</b> to attend global
                    and national IEEE workshops, symposiums, guest lectures, and
                    conferences. It also{" "}
                    <b>supports various technical interest groups</b>, offering
                    guidance and a nurturing platform for students. IEEE UVCE
                    enriches students' experiences with social, cultural, and
                    technical events, encourages the use of IEEE membership
                    benefits, and <b>promotes collaboration</b> with the global
                    IEEE community. It has become one of the{" "}
                    <b>most recognized student branches in IEEE Region 10.</b>{" "}
                    This year is particularly special as IEEE UVCE celebrates
                    its{" "}
                    <b>
                      Silver Jubilee, marking 25 years of fostering innovation,
                      professional growth, and academic excellence among
                      students.
                    </b>{" "}
                    To commemorate this milestone, a series of special events
                    and activities are planned. This year aims to honour the
                    legacy of IEEE UVCE and its impact on countless students'
                    lives, highlighting the achievements of its members and
                    their contributions to the engineering field. The{" "}
                    <b>Silver Jubilee</b> is a testament to the branch's
                    enduring <b>commitment to excellence</b> and its pivotal
                    role in shaping future engineers.
                    </p>
                  </MobileTruncated>
                </div>
                <div className="flex justify-center">
                  <img
                    src={logo2}
                    alt="IEEE Logo"
                    className="w-64 h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- About Kagada Section --- */}
      <section className="py-6 sm:py-8 font-roboto-mono">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <SectionTitle>
              About <span className="text-blue-600">KAGADA</span>
            </SectionTitle>

            <div className={`${cardStyle} p-8 sm:p-12`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <MobileTruncated>
                    <p className="text-slate-700 leading-relaxed text-justify mb-6">
                    <b>KAGADA</b> is our esteemed{" "}
                    <b>Annual National-Level Technical Student Conference</b>,
                    showcasing{" "}
                    <b>
                      Paper and Poster Presentations alongside Project
                      Exhibitions.
                    </b>{" "}
                    Its 21st edition is set for <b>November 8, 2025.</b> At IEEE
                    UVCE, we are dedicated to expanding technical knowledge
                    beyond the classroom. KAGADA, recognized with the{" "}
                    <b>Darrel Chong Student Activity Award</b> in both 2016 and
                    2019, aims to inspire students to pursue research during
                    their undergraduate studies. This conference provides an
                    engaging platform for motivated students to{" "}
                    <b>
                      sharpen their technical skills, improve their presentation
                      abilities, and share innovative ideas.
                    </b>{" "}
                    Participants emerge as more capable and well-rounded
                    engineers.
                    </p>
                    <p className="text-slate-700 leading-relaxed text-justify">
                    Additionally, KAGADA features initiatives like{" "}
                    <b>"Ottige Kaliyona,"</b> which teaches government school
                    students to utilize technology and develop social skills,
                    and <b>"Food For Cause," </b>a charitable project where
                    profits from a food stall are donated to an orphanage.
                    </p>
                  </MobileTruncated>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {[
                    {
                      icon: Star,
                      value: "1000+",
                      label: "Participants Expected",
                    },
                    {
                      icon: Users,
                      value: "50+",
                      label: "Colleges Participating",
                    },
                    { icon: Trophy, value: "₹40K+", label: "Total Prizes" },
                    { icon: Rocket, value: "20", label: "Years of Legacy" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="bg-blue-600/5 p-4 rounded-lg border border-blue-600/10 text-center transform hover:scale-105 transition-transform duration-300"
                    >
                      <stat.icon
                        className="text-blue-600 mb-2 mx-auto"
                        size={28}
                      />
                      <div className="text-2xl sm:text-3xl font-bold text-slate-800">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

// --- Helper: Injects fade style and provides mobile-only truncation logic ---
const MobileTruncatedStyle: React.FC = () => (
  <style>{`
    @media (max-width: 640px) {
      .mobile-clamp {
        position: relative;
        display: block;
        max-height: 7.5rem; /* ~5 lines depending on font-size */
        overflow: hidden;
      }
      .mobile-clamp::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 3rem;
        background: linear-gradient(to bottom, rgba(248,250,252,0), rgba(248,250,252,1));
      }
    }
  `}</style>
);

const MobileTruncated: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div className={expanded ? "" : "sm:hidden mobile-clamp"}>{children}</div>
      {/* Desktop shows full content always */}
      {!expanded && <div className="hidden sm:block">{children}</div>}
      <button
        className="sm:hidden mt-3 inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {expanded ? "Show less" : "Know more"}
      </button>
    </div>
  );
};
