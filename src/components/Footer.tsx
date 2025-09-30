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

// import React from 'react';
// import { Code, Heart } from 'lucide-react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12 border-t-4 border-gradient-to-r border-red-500">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Main Footer Content */}
//           <div className="grid md:grid-cols-4 gap-8 mb-12">
//             {/* KAGADA Info */}
//             <div className="md:col-span-2">
//               <div className="mb-6">
//                 <h3 className="text-3xl font-bold mb-4">
//                   <span className="text-red-400">KAGADA</span>
//                   <span className="text-yellow-400 ml-2">25</span>
//                 </h3>
//                 <p className="text-gray-300 leading-relaxed max-w-md">
//                   National Level Tech Fest organized by IEEE UVCE Student Branch.
//                   Join us on November 8th, 2025, for an unforgettable celebration of
//                   innovation and technology.
//                 </p>
//               </div>

//               <div className="flex gap-4 mb-6">
//                 <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
//                   Nov 8, 2025
//                 </div>
//                 <div className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
//                   UVCE Bangalore
//                 </div>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div>
//               <h4 className="text-xl font-bold mb-4 text-yellow-400">Quick Links</h4>
//               <ul className="space-y-2">
//                 {['About UVCE', 'About IEEE', 'Explore Tracks', 'Previous Winners', 'Gallery', 'FAQs'].map((link) => (
//                   <li key={link}>
//                     <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-300 hover:text-red-400 transition-colors duration-300 hover:underline">
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact Info */}
//             <div>
//               <h4 className="text-xl font-bold mb-4 text-yellow-400">Contact</h4>
//               <div className="space-y-3 text-gray-300">
//                 <div>
//                   <div className="font-semibold text-white">Email</div>
//                   <div className="text-sm">kagada2025@uvce.ac.in</div>
//                 </div>
//                 <div>
//                   <div className="font-semibold text-white">Phone</div>
//                   <div className="text-sm">+91 9876543210</div>
//                 </div>
//                 <div>
//                   <div className="font-semibold text-white">Address</div>
//                   <div className="text-sm">UVCE, K.R. Circle<br />Bangalore - 560001</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Tracks Section */}
//           <div className="border-t border-gray-800 pt-8 mb-8">
//             <h4 className="text-2xl font-bold mb-6 text-center text-yellow-400">Competition Tracks</h4>
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//               {[
//                 'Poster Presentation',
//                 'Paper Presentation',
//                 'Project Presentation',
//                 'Ottige Kaliyona',
//                 'Food for Cause'
//               ].map((track) => (
//                 <div key={track} className="bg-gradient-to-r from-red-500/20 to-yellow-500/20 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center hover:border-white/30 transition-all duration-300 transform hover:scale-105">
//                   <div className="text-white font-semibold text-sm">{track}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="border-t border-gray-800 pt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//               {/* Copyright */}
//               <div className="text-gray-400 text-sm">
//                 © 2025 KAGADA - IEEE UVCE Student Branch. All rights reserved.
//               </div>

//               {/* Developer Credit */}
//               <div className="flex items-center gap-2 text-gray-300">
//                 <Code className="text-red-400" size={18} />
//                 <span className="text-sm">Developed with</span>
//                 <Heart className="text-red-500" size={16} fill="currentColor" />
//                 <span className="text-sm">by</span>
//                 <span className="font-semibold text-yellow-400">Software Development SIG</span>
//               </div>

//               {/* Social Links */}
//               <div className="flex gap-3">
//                 {['IG', 'LI', 'TW', 'YT', 'FB'].map((platform) => (
//                   <div key={platform} className="w-10 h-10 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm hover:shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer">
//                     {platform}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Final Tagline */}
//           {/* <div className="text-center mt-8 pt-6 border-t border-gray-800">
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
//               <span className="text-lg font-bold">✨ Innovation • Excellence • Technology ✨</span>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from 'react';
// import { Code, Heart } from 'lucide-react';

// const Footer: React.FC = () => {
//   const socialLinks: Record<string, string> = {
//     IG: "https://www.instagram.com/ieeeuvce",
//     LI: "https://www.linkedin.com/in/ieee-uvce-66563332/",
//     TW: "https://twitter.com/ieeeuvce",
//     YT: "https://www.youtube.com/@ieeeuvce",
//     FB: "https://www.facebook.com/ieeeuvce",
//   };

//   return (
//     <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12 border-t-4 border-gradient-to-r border-red-500">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Main Footer Content */}
//           <div className="grid md:grid-cols-4 gap-8 mb-12">
//             {/* KAGADA Info */}
//             <div className="md:col-span-2">
//               <div className="mb-6">
//                 <h3 className="text-3xl font-bold mb-4">
//                   <span className="text-red-400">KAGADA</span>
//                   <span className="text-yellow-400 ml-2">25</span>
//                 </h3>
//                 <p className="text-gray-300 leading-relaxed max-w-md">
//                   National Level Tech Fest organized by IEEE UVCE Student Branch.
//                   Join us on November 8th, 2025, for an unforgettable celebration of
//                   innovation and technology.
//                 </p>
//               </div>

//               <div className="flex gap-4 mb-6">
//                 <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
//                   Nov 8, 2025
//                 </div>
//                 <div className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
//                   UVCE Bangalore
//                 </div>
//               </div>
//             </div>

//             {/* Quick Links */}
//             {/* <div>
//               <h4 className="text-xl font-bold mb-4 text-yellow-400">Quick Links</h4>
//               <ul className="space-y-2">
//                 {['About UVCE', 'About IEEE', 'Explore Tracks', 'Previous Winners', 'Gallery', 'FAQs'].map((link) => (
//                   <li key={link}>
//                     <a
//                       href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
//                       className="text-gray-300 hover:text-red-400 transition-colors duration-300 hover:underline"
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div> */}

//             {/* Contact Info */}
//             {/* <div>
//               <h4 className="text-xl font-bold mb-4 text-yellow-400">Contact</h4>
//               <div className="space-y-3 text-gray-300">
//                 <div>
//                   <div className="font-semibold text-white">Email</div>
//                   <div className="text-sm">kagada2025@uvce.ac.in</div>
//                 </div>
//                 <div>
//                   <div className="font-semibold text-white">Phone</div>
//                   <div className="text-sm">+91 9876543210</div>
//                 </div>
//                 <div>
//                   <div className="font-semibold text-white">Address</div>
//                   <div className="text-sm">UVCE, K.R. Circle<br />Bangalore - 560001</div>
//                 </div>
//               </div>
//             </div> */}
//             <div className="md:col-start-4 md:col-end-5">
//   <h4 className="text-xl font-bold mb-4 text-yellow-400">Contact</h4>
//   <div className="space-y-3 text-gray-300">
//     <div>
//       <div className="font-semibold text-white">Email</div>
//       <div className="text-sm">kagada2025@uvce.ac.in</div>
//     </div>
//     <div>
//       <div className="font-semibold text-white">Phone</div>
//       <div className="text-sm">+91 9876543210</div>
//     </div>
//     <div>
//       <div className="font-semibold text-white">Address</div>
//       <div className="text-sm">
//         UVCE, K.R. Circle<br />
//         Bangalore - 560001
//       </div>
//     </div>
//   </div>
// </div>

//           </div>

//           {/* Tracks Section */}
//           <div className="border-t border-gray-800 pt-8 mb-8">
//             <h4 className="text-2xl font-bold mb-6 text-center text-yellow-400">Competition Tracks</h4>
//             <div className="flex justify-center gap-4 flex-wrap">
//               {[
//                 'Poster Presentation',
//                 'Paper Presentation',
//                 'Project Presentation'
//               ].map((track) => (
//                 <div
//                   key={track}
//                   className="bg-gradient-to-r from-red-500/20 to-yellow-500/20 backdrop-blur-sm p-4 rounded-xl border border-white/10 text-center hover:border-white/30 transition-all duration-300 transform hover:scale-105"
//                 >
//                   <div className="text-white font-semibold text-sm">{track}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="border-t border-gray-800 pt-8">
//             <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//               {/* Copyright */}
//               <div className="text-gray-400 text-sm">
//                 © 2025 KAGADA - IEEE UVCE Student Branch. All rights reserved.
//               </div>

//               {/* Developer Credit */}
//               {/* <div className="flex items-center gap-2 text-gray-300">
//                 <Code className="text-red-400" size={18} />
//                 <span className="text-sm">Developed with</span>
//                 {/* <Heart className="text-red-500" size={16} fill="currentColor" /> */}
//                 {/* <span className="text-sm">by</span>
//                 <span className="font-semibold text-yellow-400">Software Development SIG</span> */}
//               {/* </div> */ }
//             <div className="flex items-center gap-2 text-gray-300">
//                     <Code className="text-red-400" size={18} />
//                     <span className="text-sm">Developed</span>
//                     <span className="text-sm">by</span>
//                     <span className="font-semibold text-yellow-400">Software Development SIG</span>

//               {/* Developer Names */}
//                 <div className="flex gap-2 ml-2">
//                   {[
//                     { name: "Dhruv Rathi", url: "https://www.linkedin.com/in/dhruv-rathi-399378282/" },
//                     { name: "Lahari Priya N", url: "https://www.linkedin.com/in/lahari-priya-n/" },
//                     { name: "Rahita H Puthran", url: "https://www.linkedin.com/in/rahita-puthran-1262202a5/" },
//                   ].map((dev, idx, arr) => (
//                     <span key={dev.name} className="flex items-center gap-1">
//                       <a
//                           href={dev.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-sm text-blue-400 hover:text-yellow-400 transition-colors duration-300 hover:underline"
//                       >
//                       {dev.name}
//                       </a>
//                     {idx < arr.length - 1 && <span className="text-gray-500">•</span>}
//                     </span>
//                     ))}
//                 </div>
//               </div>

//               {/* Social Links */}
//               {/* <div className="flex gap-3">
//                 {Object.entries(socialLinks).map(([platform, url]) => (
//                   <a
//                     key={platform}
//                     href={url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-10 h-10 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm hover:shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer"
//                   >
//                     {platform}
//                   </a>
//                 ))}
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
