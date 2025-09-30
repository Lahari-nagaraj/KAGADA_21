import React from "react";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

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

// --- Reusable Blueprint Card Style ---
const cardStyle = `bg-white/70 backdrop-blur-md border border-blue-600/20 shadow-lg rounded-lg
                   bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] 
                   bg-[length:2rem_2rem]`;

const ContactMap: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      lines: [
        "University Visvesvaraya College of Engineering (UVCE)",
        "K.R. Circle, Bengaluru - 560001",
        "Karnataka, India",
      ],
    },
    {
      icon: Phone,
      title: "Phone",
      lines: ["+91 98765 43210", "+91 87654 32109"],
      links: ["tel:+919876543210", "tel:+918765432109"],
    },
    {
      icon: Mail,
      title: "Email",
      lines: ["kagada2025@uvce.ac.in", "ieee.uvce@gmail.com"],
      links: ["mailto:kagada2025@uvce.ac.in", "mailto:ieee.uvce@gmail.com"],
    },
    {
      icon: Clock,
      title: "Event Timing",
      lines: ["November 8th, 2025", "9:00 AM - 6:00 PM"],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
      `}</style>

      <section className="py-16 sm:py-20 bg-slate-100 font-roboto-mono">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <SectionTitle>
              Contact <span className="text-blue-600">& Location</span>
            </SectionTitle>
            <p className="text-center text-slate-600 max-w-3xl mx-auto leading-relaxed -mt-8 mb-16">
              Get in touch with us and find your way to KAGADA 2025.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
              {/* Contact Information */}
              <div className={`${cardStyle} p-6 sm:p-8`}>
                <h3 className="font-rajdhani text-3xl font-bold mb-6 text-slate-900">
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center border border-blue-600/20">
                        <item.icon className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-800 mb-1">
                          {item.title}
                        </h4>
                        <div className="text-slate-600 leading-relaxed text-sm">
                          {item.lines.map((line, lineIndex) => (
                            <div key={lineIndex}>
                              {item.links?.[lineIndex] ? (
                                <a
                                  href={item.links[lineIndex]}
                                  className="hover:text-blue-600 hover:underline"
                                >
                                  {line}
                                </a>
                              ) : (
                                line
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Section */}
              <div className={`${cardStyle} p-6 sm:p-8`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-rajdhani text-3xl font-bold text-slate-900">
                    Find Us Here
                  </h3>
                  <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center border border-blue-600/20">
                    <Navigation className="text-blue-600" size={24} />
                  </div>
                </div>

                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-blue-600/20 shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.025114798031!2d77.58189331526495!3d12.9702334908564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167528153489%3A0x286a111257418850!2sUniversity%20Visvesvaraya%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1668586043132!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="UVCE Location"
                  ></iframe>
                </div>

                <a
                  href="https://maps.google.com/?q=University Visvesvaraya College of Engineering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-md text-base w-full flex items-center justify-center gap-2 hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
                >
                  <MapPin size={18} /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;
