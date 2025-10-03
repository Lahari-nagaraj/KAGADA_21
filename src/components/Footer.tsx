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
    .site-background {
      background-color: #f8fafc;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
      min-height: 100vh;
      width: 100%;
    }
  `;

  return (
    <>
      <div className="site-background font-roboto-mono">
        <style>{backgroundStyle}</style>
        <footer className="py-8 px-4 flex flex-col items-center justify-center w-full">
          {/* Social links top, centered */}
          <div className="flex justify-center mb-4">
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 transition-all duration-300 transform hover:scale-110 hover:bg-blue-600 hover:text-white"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
          {/* Centered developer credit */}
          <div className="flex flex-col items-center text-center gap-1 w-full">
            <div className="flex items-center gap-2 text-sm sm:text-base justify-center">
              <Code className="text-blue-600" size={18} />
              <span>Developed by</span>
              <span className="font-semibold text-slate-600">
                Software Development SIG
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-2 text-[0.58rem] sm:text-xs">
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
                    <span className="text-slate-400">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
