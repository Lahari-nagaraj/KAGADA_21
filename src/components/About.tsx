import React from "react";
import { Zap, Globe, Users, Star, Trophy, Rocket } from "lucide-react";

// --- Reusable Blueprint Card Style ---
const cardStyle = `bg-white/70 backdrop-blur-md border border-blue-600/20 shadow-lg rounded-lg
                   bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] 
                   bg-[length:2rem_2rem]`;

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
    <>
      <section id="about">
        {/* The Google Font imports would be in your main index.html or a root App component */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
          .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
          .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
      `}</style>

        {/* --- 3. AboutUVCE Section --- */}
        <section className="py-16 sm:py-20 bg-slate-50 font-roboto-mono">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle>
                About <span className="text-blue-600">UVCE</span>
              </SectionTitle>
              <div className={`${cardStyle} p-8 sm:p-12`}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <p className="text-slate-700 leading-relaxed text-justify">
                      Established in 1917 by Bharat Ratna Sir M. Visvesvaraya,
                      University Visvesvaraya College of Engineering (UVCE) is a
                      prestigious, AICTE-approved institution. After celebrating
                      its centenary, UVCE became an autonomous college in March
                      2022. The college hosts numerous successful events driven
                      by diligent students and boasts quality placements and
                      successful alumni ventures. UVCE not only shapes careers
                      but also prepares students to face real-world challenges.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <img
                      src="https://res.cloudinary.com/dr3ypljez/image/upload/v1759395273/clg_oacyq7.jpg"
                      alt="Students in a library"
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

        {/* --- 1. AboutIEEE Section --- */}
        <section className="py-16 sm:py-20 bg-slate-50 font-roboto-mono">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SectionTitle>
                About <span className="text-blue-600">IEEE UVCE</span>
              </SectionTitle>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    icon: Zap,
                    title: "Innovation",
                    text: "IEEE fosters technological innovation and excellence for the benefit of humanity through cutting-edge research.",
                  },
                  {
                    icon: Globe,
                    title: "Global Reach",
                    text: "With over 400,000 members, IEEE is the largest technical professional organization dedicated to advancing technology.",
                  },
                  {
                    icon: Users,
                    title: "Community",
                    text: "IEEE builds a strong community of professionals and students working together to shape the future of technology.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${cardStyle} p-8 text-center transform hover:-translate-y-2 transition-transform duration-300`}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/10 rounded-full mb-6">
                      <item.icon className="text-blue-600" size={32} />
                    </div>
                    <h3 className="font-rajdhani text-2xl font-bold text-slate-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className={`${cardStyle} p-8 sm:p-12`}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-slate-700 leading-relaxed text-justify">
                      IEEE UVCE has come to be one of the most recognised
                      Student Branches across Region 10 of IEEE. Rekindled in
                      2001, it has grown to a strength of around 400 student
                      members. The organization's commitment is reflected in
                      activities like symposiums, workshops, and our flagship
                      events: KAGADA, IMPETUS, and CodeFury. We stand by our
                      motto “Striding Ahead,” engaging the community in
                      technical, humanitarian, and societal causes. Our efforts
                      were recognized with the 2023 IEEE R10 Special Recognition
                      of Student Branch Award.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFxPh-uOxPwwavbagc0XXc7gNEXriflhjjRg&s"
                      alt="IEEE Logo"
                      className="w-64 h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. AboutKagada Section --- */}
        <section className="py-16 sm:py-20 bg-slate-100 font-roboto-mono">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <SectionTitle>
                About <span className="text-blue-600">KAGADA</span>
              </SectionTitle>

              <div className={`${cardStyle} p-8 sm:p-12`}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-slate-700 leading-relaxed text-justify mb-6">
                      KAGADA is our Annual National-Level Technical Student
                      Conference featuring Paper and Poster Presentations and
                      Project Exhibitions. We believe that furthering technical
                      knowledge cannot be achieved in the classroom alone.
                      KAGADA, a recipient of the Darrel Chong Platinum Level
                      Student Activity Award, provides a platform for students
                      to pursue undergraduate research, sharpen their intellect,
                      and exchange ideas.
                    </p>
                    <p className="text-slate-700 leading-relaxed text-justify">
                      As part of KAGADA, we run initiatives like{" "}
                      <span className="font-bold text-blue-700">
                        Ottige Kaliyona
                      </span>
                      , teaching technology to government school students, and{" "}
                      <span className="font-bold text-blue-700">
                        Food for Cause
                      </span>
                      , a food stall that donates proceeds to an orphanage.
                    </p>
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
                      { icon: Trophy, value: "₹5L+", label: "Total Prizes" },
                      { icon: Rocket, value: "24", label: "Years of Legacy" },
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
                        <div className="text-xs text-slate-600">
                          {stat.label}
                        </div>
                      </div>
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

export default AboutPage;
