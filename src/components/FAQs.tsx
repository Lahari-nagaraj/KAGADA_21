import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

// --- Reusable Blueprint Card Style ---
const cardStyle = `bg-white/70 backdrop-blur-md border border-blue-600/20 shadow-lg rounded-lg
                   bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] 
                   bg-[length:2rem_2rem]`;

// --- Blueprint SVG Grid Background Style ---
const backgroundStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
  .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
  .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
  .site-background {
    background-color: #f8fafc;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240 / 1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
    min-height: 100vh;
    width: 100%;
  }
`;

// --- Section Title Component ---
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="text-center mb-12 sm:mb-16">
    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-600/10 rounded-full mb-6">
      <HelpCircle className="text-blue-600" size={40} />
    </div>
    <h2 className="font-rajdhani text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-wider">
      {children}
    </h2>
    <div className="w-32 h-1 bg-blue-600/50 mx-auto rounded-full mt-4"></div>
  </div>
);

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is KAGADA and when is it?",
      answer:
        "KAGADA is an Annual National Level Technical Student Conference conducted by IEEE UVCE. It will be held on 18th November, 2025.",
    },
    {
      question: "What can I present in KAGADA?",
      answer:
        "KAGADA has 3 tracks in it viz., Paper Presentation, Poster Presentation and Project Presentation. You can choose any of these tracks.",
    },
    {
      question: "Why should I participate in KAGADA 2025?",
      answer:
        "As KAGADA is a national level technical student conference, one gets a national level platform to exhibit their innovative ideas and thoughts. This also provides an opportunity to showcase their presentation skills.",
    },
    {
      question: "What is the domain for presentation?",
      answer:
        "There is no specific domain for presentation but the sole purpose is to come up with ideas for the betterment of society.",
    },
    {
      question: "Where will KAGADA 2025 take place?",
      answer: "KAGADA 2025 will take place at UVCE, KR Circle.",
    },
    {
      question: "Can one participate in more than one track?",
      answer: "Yes, participants can take part in more than one track.",
    },
    {
      question: "What all events are there in KAGADA 2025?",
      answer: `KAGADA consists of two category events.\n\nThe Presentation tracks:\n• Paper Presentation\n• Poster Presentation\n• Project Presentation\n\nHumanitarian activities:\n• Ottige Kaliyona\n• Food for Cause`,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="site-background font-roboto-mono">
      <style>{backgroundStyle}</style>
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            {/* FAQ List */}
            <div className={`${cardStyle} p-4 sm:p-6 space-y-2`}>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border border-transparent rounded-lg transition-all duration-300 overflow-hidden ${
                    openFAQ === index ? "bg-blue-600/5 border-blue-600/20" : ""
                  }`}
                >
                  <button
                    className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 hover:bg-blue-600/5 transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-base sm:text-lg font-bold text-slate-800">
                      {faq.question}
                    </h3>
                    <div
                      className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300 ${
                        openFAQ === index
                          ? "bg-blue-600 text-white transform rotate-180"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      openFAQ === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-5 pb-5">
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base border-t border-blue-600/20 pt-4 whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
