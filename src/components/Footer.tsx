import React from "react";
import {
  Code,
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Youtube,
} from "lucide-react";

const Footer: React.FC = () => {
  const socials = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/ieeeuvce",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ieee-uvce-66563332/",
      icon: Linkedin,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/ieeeuvce",
      icon: Facebook,
    },
    {
      name: "Email",
      url: "mailto:ieeeuvce.ac.in",
      icon: Mail,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCt9I0q7BzuuRBcJKvMcdpow",
      icon: Youtube,
    },
  ];

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
      <footer className="bg-slate-100 text-slate-700 py-8 font-roboto-mono border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="text-slate-500 text-xs text-center md:text-left order-3 md:order-1">
                © 2025 KAGADA - IEEE UVCE Student Branch. All rights reserved.
              </div>

              {/* Developer Credit */}
              <div className="flex flex-col items-center gap-2 text-slate-500 order-2">
                <div className="flex items-center gap-2 text-sm">
                  <Code className="text-blue-600" size={16} />
                  <span>Developed by</span>
                  <span className="font-semibold text-slate-600">
                    Software Development SIG
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-x-2 text-xs">
                  {developers.map((dev, idx) => (
                    <span key={dev.name} className="flex items-center gap-x-2">
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

              {/* Social Links with Icons */}
              <div className="flex gap-3 order-1 md:order-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 transition-all duration-300 transform hover:scale-110 hover:bg-blue-600 hover:text-white"
                      aria-label={social.name}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
