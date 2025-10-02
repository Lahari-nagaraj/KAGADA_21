// import React from "react";
// import { MapPin, Phone, Mail, Navigation } from "lucide-react";

// // --- Section Title Component ---
// const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => (
//   <div className="text-center mb-12 sm:mb-16">
//     <h2 className="font-rajdhani text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-wider">
//       {children}
//     </h2>
//     <div className="w-32 h-1 bg-blue-600/50 mx-auto rounded-full mt-4"></div>
//   </div>
// );

// // --- Reusable Blueprint Card Style ---
// const cardStyle = `bg-white/70 backdrop-blur-md border border-blue-600/20 shadow-lg rounded-lg
//                    bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] 
//                    bg-[length:2rem_2rem]`;

// const ContactMap: React.FC = () => {
//   const contacts = [
//     {
//       name: "Mohith Monnappa T A",
//       designation: "Chair, IEEE UVCE",
//       phone: "+91 63609 65351",
//       phoneLink: "tel:+916360965351",
//       email: "mohithmonnappa.ta@ieee.org",
//       emailLink: "mailto:mohithmonnappa.ta@ieee.org",
//     },
//     {
//       name: "Bharath P Nambiar",
//       designation: "Vice Chair, IEEE UVCE",
//       phone: "+91 91089 40867",
//       phoneLink: "tel:+919108940867",
//       email: "bharathpnambiar@ieee.org",
//       emailLink: "mailto:bharathpnambiar@ieee.org",
//     },
//     {
//       name: "Vaishnavi N Mahadev",
//       designation: "Vice Chair, IEEE UVCE",
//       phone: "+91 93803 82355",
//       phoneLink: "tel:+919380382355",
//       email: "vaishnavinm15@ieee.org",
//       emailLink: "mailto:vaishnavinm15@ieee.org",
//     },
//   ];

//   return (
//     <>
//       <section id="contact">
//         <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
//         .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
//         .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
//       `}</style>

//         <section className="py-16 sm:py-20 bg-slate-100 font-roboto-mono">
//           <div className="container mx-auto px-4">
//             <div className="max-w-7xl mx-auto">
//               <SectionTitle>
//                 Contact <span className="text-blue-600">Us</span>
//               </SectionTitle>
//               <p className="text-center text-slate-600 max-w-3xl mx-auto leading-relaxed -mt-8 mb-16">
//                 Get in touch with us and find your way to KAGADA 2025.
//               </p>

//               <div className="space-y-12">
//                 {/* Contact Information */}
//                 <div>
//                   <h3 className="font-rajdhani text-3xl font-bold mb-8 text-slate-900 text-center">
//                     Event Coordinators
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {contacts.map((item, index) => (
//                       <div
//                         key={index}
//                         className={`${cardStyle} p-6 text-center flex flex-col items-center`}
//                       >
//                         <h4 className="text-lg font-bold text-slate-800">
//                           {item.name}
//                         </h4>
//                         <p className="text-blue-700 font-semibold text-sm mb-4">
//                           {item.designation}
//                         </p>

//                         <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
//                           <Phone size={14} />
//                           <a
//                             href={item.phoneLink}
//                             className="hover:text-blue-600 hover:underline"
//                           >
//                             {item.phone}
//                           </a>
//                         </div>
//                         <div className="flex items-center gap-2 text-sm text-slate-600">
//                           <Mail size={14} />
//                           <a
//                             href={item.emailLink}
//                             className="hover:text-blue-600 hover:underline truncate"
//                           >
//                             {item.email}
//                           </a>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Map Section */}
//                 <div className={`${cardStyle} p-6 sm:p-8`}>
//                   <div className="flex items-center justify-between mb-6">
//                     <h3 className="font-rajdhani text-3xl font-bold text-slate-900">
//                       Find Us Here
//                     </h3>
//                     <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center border border-blue-600/20">
//                       <Navigation className="text-blue-600" size={24} />
//                     </div>
//                   </div>

//                   <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-blue-600/20 shadow-md">
//                     <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.025114798031!2d77.58189331482207!3d12.9702334908564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167528153489%3A0x286a111257418850!2sUniversity%20Visvesvaraya%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1696190509658!5m2!1sen!2sin"
//                       width="100%"
//                       height="100%"
//                       style={{ border: 0 }}
//                       allowFullScreen={false}
//                       loading="lazy"
//                       referrerPolicy="no-referrer-when-downgrade"
//                       title="UVCE Location"
//                     ></iframe>
//                   </div>

//                   <a
//                     href="https://maps.google.com/?q=University Visvesvaraya College of Engineering"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-md text-base w-full flex items-center justify-center gap-2 hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
//                   >
//                     <MapPin size={18} /> Get Directions
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </section>
//     </>
//   );
// };

// export default ContactMap;
 

// import React from "react";
// import { MapPin, Phone, Mail, Navigation } from "lucide-react";

// // --- Section Title Component ---
// const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => (
//   <div className="text-center mb-12 sm:mb-16">
//     <h2 className="font-rajdhani text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-wider">
//       {children}
//     </h2>
//     <div className="w-32 h-1 bg-blue-600/50 mx-auto rounded-full mt-4"></div>
//   </div>
// );

// // --- Reusable Blueprint Card Style ---
// const cardStyle = `bg-white/70 backdrop-blur-md border border-blue-600/20 shadow-lg rounded-lg
//                    bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] 
//                    bg-[length:2rem_2rem]`;

// const ContactMap: React.FC = () => {
//   const contacts = [
//     {
//       name: "Mohith Monnappa T A",
//       designation: "Chair, IEEE UVCE",
//       phone: "+91 63609 65351",
//       phoneLink: "tel:+916360965351",
//       email: "mohithmonnappa.ta@ieee.org",
//       emailLink: "mailto:mohithmonnappa.ta@ieee.org",
//     },
//     {
//       name: "Bharath P Nambiar",
//       designation: "Vice Chair, IEEE UVCE",
//       phone: "+91 91089 40867",
//       phoneLink: "tel:+919108940867",
//       email: "bharathpnambiar@ieee.org",
//       emailLink: "mailto:bharathpnambiar@ieee.org",
//     },
//     {
//       name: "Vaishnavi N Mahadev",
//       designation: "Vice Chair, IEEE UVCE",
//       phone: "+91 93803 82355",
//       phoneLink: "tel:+919380382355",
//       email: "vaishnavinm15@ieee.org",
//       emailLink: "mailto:vaishnavinm15@ieee.org",
//     },
//   ];

//   // NOTE: Using a real Google Maps embed URL and directions link for UVCE
//   const UVCE_MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.066487504384!2d77.5852431749875!3d12.969640887353985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba357e62a937a89%3A0x6d90049e0134803!2sUniversity%20Visvesvaraya%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1699703473522!5m2!1sen!2sin";
//   const UVCE_DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=University+Visvesvaraya+College+of+Engineering";


//   return (
//     <>
//       <section id="contact">
//         <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
//         .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
//         .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
//       `}</style>

//         <section className="py-16 sm:py-20 bg-slate-100 font-roboto-mono">
//           <div className="container mx-auto px-4">
//             <div className="max-w-7xl mx-auto">
//               <SectionTitle>
//                 Contact <span className="text-blue-600">Us</span>
//               </SectionTitle>
//               <p className="text-center text-slate-600 max-w-3xl mx-auto leading-relaxed -mt-8 mb-16">
//                 Get in touch with us and find your way to KAGADA 2025.
//               </p>

//               <div className="space-y-12">
//                 {/* Contact Information */}
//                 <div>
//                   <h3 className="font-rajdhani text-3xl font-bold mb-8 text-slate-900 text-center">
//                     Event Coordinators
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {contacts.map((item, index) => (
//                       <div
//                         key={index}
//                         className={`${cardStyle} p-6 text-center flex flex-col items-center`}
//                       >
//                         <h4 className="text-lg font-bold text-slate-800">
//                           {item.name}
//                         </h4>
//                         <p className="text-blue-700 font-semibold text-sm mb-4">
//                           {item.designation}
//                         </p>

//                         <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
//                           <Phone size={14} />
//                           <a
//                             href={item.phoneLink}
//                             className="hover:text-blue-600 hover:underline"
//                           >
//                             {item.phone}
//                           </a>
//                         </div>
//                         <div className="flex items-center gap-2 text-sm text-slate-600">
//                           <Mail size={14} />
//                           <a
//                             href={item.emailLink}
//                             className="hover:text-blue-600 hover:underline truncate"
//                           >
//                             {item.email}
//                           </a>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Map Section - CENTERING & SIZING APPLIED HERE */}
//                 <div className={`${cardStyle} p-6 sm:p-8 flex justify-center`}> {/* Added flex justify-center */}
//                   <div className="max-w-3xl w-full"> {/* Constrain width and ensure centering with w-full */}
                    
//                     {/* Header is still centered within the smaller max-w-3xl container */}
//                     <div className="flex items-center justify-between mb-6">
//                       <h3 className="font-rajdhani text-3xl font-bold text-slate-900">
//                         Find Us Here
//                       </h3>
//                       <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center border border-blue-600/20">
//                         <Navigation className="text-blue-600" size={24} />
//                       </div>
//                     </div>

//                     {/* Map Iframe */}
//                     <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-blue-600/20 shadow-md">
//                       <iframe
//                         src={UVCE_MAP_EMBED_URL}
//                         width="100%"
//                         height="100%"
//                         style={{ border: 0 }}
//                         allowFullScreen={false}
//                         loading="lazy"
//                         referrerPolicy="no-referrer-when-downgrade"
//                         title="UVCE Location"
//                       ></iframe>
//                     </div>

//                     {/* Get Directions Button */}
//                     <a
//                       href={UVCE_DIRECTIONS_URL} 
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-md text-base w-full flex items-center justify-center gap-2 hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
//                     >
//                       <MapPin size={18} /> Get Directions
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </section>
//     </>
//   );
// };

// export default ContactMap;

import React from "react";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";

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
                   overflow-hidden 
                   bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] 
                   bg-[length:2rem_2rem]`;

const ContactMap: React.FC = () => {
  const contacts = [
    {
      name: "Mohith Monnappa T A",
      designation: "Chairperson, IEEE UVCE",
      phone: "+91 63609 65351",
      phoneLink: "tel:+916360965351",
      email: "mohithmonnappa.ta@ieee.org",
      emailLink: "mailto:mohithmonnappa.ta@ieee.org",
    },
    {
      name: "Bharath P Nambiar",
      designation: "Vice Chairperson, IEEE UVCE",
      phone: "+91 91089 40867",
      phoneLink: "tel:+919108940867",
      email: "bharathpnambiar@ieee.org",
      emailLink: "mailto:bharathpnambiar@ieee.org",
    },
    {
      name: "Vaishnavi N Mahadev",
      designation: "Vice Chairperson, IEEE UVCE",
      phone: "+91 93803 82355",
      phoneLink: "tel:+919380382355",
      email: "vaishnavinm15@ieee.org",
      emailLink: "mailto:vaishnavinm15@ieee.org",
    },
  ];

  const UVCE_MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.066487504384!2d77.5852431749875!3d12.969640887353985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba357e62a937a89%3A0x6d90049e0134803!2sUniversity%20Visvesvaraya%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1699703473522!5m2!1sen!2sin";
  const UVCE_DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=University+Visvesvaraya+College+of+Engineering";


  return (
    <>
      <section id="contact">
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        .font-roboto-mono { font-family: 'Roboto Mono', monospace; }

        /* --- CSS PADDING HACK FOR GUARANTEED SQUARE (1:1 Aspect Ratio) --- */
        .aspect-square-hack {
            position: relative;
            width: 100%;
            padding-bottom: 100%; /* Height is 100% of the current width */
            height: 0;
        }
        .aspect-square-hack iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        /* ----------------------------------------------- */
      `}</style>

        <section className="py-16 sm:py-20 bg-slate-100 font-roboto-mono">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <SectionTitle>
                For more Queries,  <span className="text-blue-600">Contact </span>
              </SectionTitle>
              <p className="text-center text-slate-600 max-w-3xl mx-auto leading-relaxed -mt-8 mb-16">
                Get in touch with us and find your way to KAGADA 2025.
              </p>

              <div className="space-y-12">
                {/* Contact Information (omitted for brevity) */}
                <div>
                  <h3 className="font-rajdhani text-3xl font-bold mb-8 text-slate-900 text-center">
                    Organisers
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contacts.map((item, index) => (
                      <div
                        key={index}
                        className={`${cardStyle} p-6 text-center flex flex-col items-center`}
                      >
                        <h4 className="text-lg font-bold text-slate-800">
                          {item.name}
                        </h4>
                        <p className="text-blue-700 font-semibold text-sm mb-4">
                          {item.designation}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                          <Phone size={14} />
                          <a
                            href={item.phoneLink}
                            className="hover:text-blue-600 hover:underline"
                          >
                            {item.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Mail size={14} />
                          <a
                            href={item.emailLink}
                            className="hover:text-blue-600 hover:underline truncate"
                          >
                            {item.email}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Section - SIZE REDUCED TO MAX-W-XL */}
                <div className={`${cardStyle} p-6 sm:p-8 flex justify-center`}>
                  {/* CHANGED max-w-2xl to max-w-xl to shrink the overall block */}
                  <div className="max-w-xl w-full"> 
                    
                    {/* Header: Uses w-full to span the max-w-xl container */}
                    <div className="flex items-center justify-between mb-6 w-full"> 
                      <h3 className="font-rajdhani text-3xl font-bold text-slate-900">
                        Find Us Here
                      </h3>
                      <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center border border-blue-600/20">
                        <Navigation className="text-blue-600" size={24} />
                      </div>
                    </div>

                    {/* Map Iframe: Still using the reliable CSS hack for square ratio */}
                    <div className="aspect-square-hack rounded-lg overflow-hidden border border-blue-600/20 shadow-md">
                      <iframe
                        src={UVCE_MAP_EMBED_URL}
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="UVCE Location"
                      ></iframe>
                    </div>

                    {/* Get Directions Button */}
                    <a
                      href={UVCE_DIRECTIONS_URL} 
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
          </div>
        </section>
      </section>
    </>
  );
};

export default ContactMap;