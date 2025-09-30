import React from "react";
import { Code } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks: Record<string, string> = {
    IG: "https://www.instagram.com/ieeeuvce",
    LI: "https://www.linkedin.com/in/ieee-uvce-66563332/",
    TW: "https://twitter.com/ieeeuvce",
    YT: "https://www.youtube.com/@ieeeuvce",
    FB: "https://www.facebook.com/ieeeuvce",
  };

  const developers = [
    {
      name: "Dhruv Rathi",
      url: "https://www.linkedin.com/in/dhruv-rathi-399378282/",
    },
    {
      name: "Lahari Priya N",
      url: "https://www.linkedin.com/in/lahari-priya-n/",
    },
    {
      name: "Rahita H Puthran",
      url: "https://www.linkedin.com/in/rahita-puthran-1262202a5/",
    },
  ];

  return (
    <>
      {/* The Google Font imports would be in your main index.html or a root App component */}
      <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
          .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
          .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
      `}</style>
      <footer className="bg-slate-100 text-slate-700 py-12 font-roboto-mono border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {/* KAGADA Info */}
              <div className="md:col-span-2">
                <div className="mb-6">
                  <h3 className="font-rajdhani text-3xl font-bold mb-4 text-slate-900">
                    KAGADA <span className="text-blue-600">2025</span>
                  </h3>
                  <p className="text-slate-600 leading-relaxed max-w-md text-sm">
                    National Level Tech Fest organized by IEEE UVCE Student
                    Branch. Join us on November 8th, 2025, for an unforgettable
                    celebration of innovation and technology.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="bg-blue-600/10 text-blue-800 px-4 py-2 rounded-full text-xs font-semibold">
                    Nov 8, 2025
                  </div>
                  <div className="bg-blue-600/10 text-blue-800 px-4 py-2 rounded-full text-xs font-semibold">
                    UVCE, Bengaluru
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="md:col-start-4 md:col-end-5">
                <h4 className="font-rajdhani text-xl font-bold mb-4 text-slate-800">
                  Contact
                </h4>
                <div className="space-y-3 text-slate-600 text-sm">
                  <div>
                    <div className="font-semibold text-slate-700">Email</div>
                    <a
                      href="mailto:kagada2025@uvce.ac.in"
                      className="hover:text-blue-600 hover:underline"
                    >
                      kagada2025@uvce.ac.in
                    </a>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-700">Phone</div>
                    <div>+91 98765 43210</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-700">Address</div>
                    <div>UVCE, K.R. Circle, Bengaluru - 560001</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tracks Section */}
            <div className="border-t border-slate-200 pt-8 mb-8">
              <h4 className="font-rajdhani text-2xl font-bold mb-6 text-center text-slate-800">
                Competition Tracks
              </h4>
              <div className="flex justify-center gap-4 flex-wrap">
                {[
                  "Poster Presentation",
                  "Paper Presentation",
                  "Project Presentation",
                ].map((track) => (
                  <div
                    key={track}
                    className="bg-blue-600/5 p-4 rounded-lg border border-blue-600/20 text-center hover:border-blue-600/40 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-blue-800 font-semibold text-sm">
                      {track}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-slate-200 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Copyright */}
                <div className="text-slate-500 text-xs text-center md:text-left">
                  © 2025 KAGADA - IEEE UVCE Student Branch. All rights reserved.
                </div>

                {/* Developer Credit */}
                <div className="flex flex-col items-center gap-2 text-slate-500">
                  <div className="flex items-center gap-2 text-sm">
                    <Code className="text-blue-600" size={16} />
                    <span>Developed by</span>
                    <span className="font-semibold text-slate-600">
                      Software Development SIG
                    </span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-x-2 text-xs">
                    {developers.map((dev, idx) => (
                      <span
                        key={dev.name}
                        className="flex items-center gap-x-2"
                      >
                        <a
                          href={dev.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {dev.name}
                        </a>
                        {idx < developers.length - 1 && (
                          <span className="text-slate-400">/</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {Object.entries(socialLinks).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-bold text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label={platform}
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
