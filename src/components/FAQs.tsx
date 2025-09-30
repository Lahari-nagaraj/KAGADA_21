import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

// --- Reusable Blueprint Card Style ---
const cardStyle = `bg-white/70 backdrop-blur-md border border-blue-600/20 shadow-lg rounded-lg
                   bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] 
                   bg-[length:2rem_2rem]`;

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
      question: "What is KAGADA 2025?",
      answer:
        "KAGADA 2025 is a National Level Tech Fest organized by IEEE UVCE Student Branch. It's a premier platform for students across the country to showcase their technical skills, innovative projects, and research work through various competitions and presentations.",
    },
    {
      question: "When and where is KAGADA 2025 taking place?",
      answer:
        "KAGADA 2025 is scheduled for November 8th, 2025, at University Visvesvaraya College of Engineering (UVCE), Bangalore. The event will span the entire day with multiple tracks running simultaneously.",
    },
    {
      question: "Who can participate in KAGADA 2025?",
      answer:
        "KAGADA is open to all undergraduate and postgraduate students from engineering colleges across India. Students can participate individually or as teams, depending on the specific track requirements.",
    },
    {
      question: "What are the different tracks available?",
      answer:
        "KAGADA 2025 features five main tracks: Poster Presentation, Paper Presentation, Project Presentation, Ottige Kaliyona (technical games), and Food for Cause (social initiative). Each track has its own set of rules and evaluation criteria.",
    },
    {
      question: "How do I register for the event?",
      answer:
        "Registration will open soon through our official website. Participants will need to select their preferred tracks, submit required documents, and pay the registration fee. Early bird discounts will be available.",
    },
    {
      question: "Are there any accommodation facilities?",
      answer:
        "Yes, we provide accommodation assistance for outstation participants. Limited on-campus accommodation will be available on a first-come, first-served basis. We also have tie-ups with nearby hostels and hotels.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
        .font-rajdhani { font-family: 'Rajdhani', sans-serif; }
        .font-roboto-mono { font-family: 'Roboto Mono', monospace; }
      `}</style>

      <section className="py-16 sm:py-20 bg-slate-50 font-roboto-mono">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Frequently Asked Questions</SectionTitle>

            <p className="text-center text-slate-600 max-w-3xl mx-auto leading-relaxed -mt-8 mb-12">
              Got questions? We've got answers! Here are the most common
              inquiries about KAGADA 2025.
            </p>

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
                        <p className="text-slate-600 leading-relaxed text-sm sm:text-base border-t border-blue-600/20 pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Support */}
            <div className={`${cardStyle} mt-16 text-center p-8 sm:p-12`}>
              <h3 className="font-rajdhani text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Our team is here to help! Reach out to us for any additional
                questions or support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-slate-800 text-white font-bold py-3 px-8 rounded-md text-base hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </button>
                <button className="bg-blue-600/10 text-blue-800 font-bold py-3 px-8 rounded-md text-base hover:bg-blue-600/20 transition-all duration-300 transform hover:scale-105 border border-blue-600/30">
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
