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

              {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
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
              </div> */}

              <div className={`${cardStyle} p-8 sm:p-12`}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-slate-700 leading-relaxed text-justify">
                      <b>IEEE UVCE</b> is an IEEE student branch at the{" "}
                      <b>University of Visvesvaraya College of Engineering</b>,
                      under the aegis of the IEEE Bangalore Section. Started in
                      2001, IEEE UVCE is dedicated to <b>spreading knowledge</b>{" "}
                      through a variety of activities. The branch{" "}
                      <b>provides students with opportunities</b> to attend
                      global and national IEEE workshops, symposiums, guest
                      lectures, and conferences. It also{" "}
                      <b>supports various technical interest groups</b>,
                      offering guidance and a nurturing platform for students.
                      IEEE UVCE enriches students' experiences with social,
                      cultural, and technical events, encourages the use of IEEE
                      membership benefits, and <b>promotes collaboration</b>{" "}
                      with the global IEEE community. It has become one of the{" "}
                      <b>most recognized student branches in IEEE Region 10.</b>{" "}
                      This year is particularly special as IEEE UVCE celebrates
                      its{" "}
                      <b>
                        Silver Jubilee, marking 25 years of fostering
                        innovation, professional growth, and academic excellence
                        among students.
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
                      <b>KAGADA</b> is our esteemed{" "}
                      <b>Annual National-Level Technical Student Conference</b>,
                      showcasing{" "}
                      <b>
                        Paper and Poster Presentations alongside Project
                        Exhibitions.
                      </b>{" "}
                      Its 20th edition is set for <b>October 26, 2024.</b> At
                      IEEE UVCE, we are dedicated to expanding technical
                      knowledge beyond the classroom. KAGADA, recognized with
                      the <b>Darrel Chong Student Activity Award</b> in both
                      2016 and 2019, aims to inspire students to pursue research
                      during their undergraduate studies. This conference
                      provides an engaging platform for motivated students to{" "}
                      <b>
                        sharpen their technical skills, improve their
                        presentation abilities, and share innovative ideas.
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
