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

  // Blueprint SVG grid background style
  const backgroundStyle = `
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap');
    .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
    .footer-background {
      background-color: #f8fafc;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
      width: 100%;
    }
  `;

  return (
    <>
      <div className="footer-background font-roboto-mono">
        <style>{backgroundStyle}</style>
        <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center w-full">
          {/* Social links top, centered */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="flex gap-4 sm:gap-5">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 transition-all duration-300 transform hover:scale-110 hover:bg-blue-600 hover:text-white"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Centered developer credit */}
          <div className="flex flex-col items-center text-center gap-3 sm:gap-4 w-full max-w-2xl">
            <div className="flex items-center gap-3 text-base sm:text-lg lg:text-xl justify-center">
              <Code className="text-blue-600" size={20} />
              <span className="text-slate-800 font-medium">Developed by</span>
              <span className="font-semibold text-slate-800">
                Software Development SIG
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm sm:text-base">
              {developers.map((dev, idx) => (
                <span key={dev.name} className="flex items-center gap-x-3">
                  <a
                    href={dev.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors"
                  >
                    {dev.name}
                  </a>
                  {idx < developers.length - 1 && (
                    <span className="text-slate-500">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom spacing to prevent extra scroll */}
          <div className="pt-4 sm:pt-6"></div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
