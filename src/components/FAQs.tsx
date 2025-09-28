import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is KAGADA 2025?",
      answer: "KAGADA 2025 is a National Level Tech Fest organized by IEEE UVCE Student Branch. It's a premier platform for students across the country to showcase their technical skills, innovative projects, and research work through various competitions and presentations."
    },
    {
      question: "When and where is KAGADA 2025 taking place?",
      answer: "KAGADA 2025 is scheduled for November 8th, 2025, at University Visvesvaraya College of Engineering (UVCE), Bangalore. The event will span the entire day with multiple tracks running simultaneously."
    },
    {
      question: "Who can participate in KAGADA 2025?",
      answer: "KAGADA is open to all undergraduate and postgraduate students from engineering colleges across India. Students can participate individually or as teams, depending on the specific track requirements."
    },
    {
      question: "What are the different tracks available?",
      answer: "KAGADA 2025 features five main tracks: Poster Presentation, Paper Presentation, Project Presentation, Ottige Kaliyona (technical games), and Food for Cause (social initiative). Each track has its own set of rules and evaluation criteria."
    },
    {
      question: "How do I register for the event?",
      answer: "Registration will open soon through our official website. Participants will need to select their preferred tracks, submit required documents, and pay the registration fee. Early bird discounts will be available for the first 200 registrations."
    },
    {
      question: "What are the prizes and awards?",
      answer: "KAGADA 2025 offers prizes worth over ₹5 lakhs across all tracks. Winners will receive cash prizes, certificates, and trophies. Additionally, top performers will get opportunities for internships and job placements with our industry partners."
    },
    {
      question: "Are there any accommodation facilities?",
      answer: "Yes, we provide accommodation assistance for outstation participants. Limited on-campus accommodation will be available on a first-come, first-served basis. We also have tie-ups with nearby hostels and hotels for additional accommodation options."
    },
    {
      question: "What should I bring on the event day?",
      answer: "Participants should bring their college ID, registration confirmation, laptops/devices for presentations, and any materials specific to their track. Detailed guidelines will be shared with registered participants closer to the event date."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mb-8">
              <HelpCircle className="text-white" size={40} />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-red-600">Frequently</span>
              <span className="text-yellow-500 ml-4">Asked Questions</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Got questions? We've got answers! Here are the most common questions about KAGADA 2025.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 overflow-hidden ${
                  openFAQ === index 
                    ? 'border-red-200 shadow-2xl transform scale-105' 
                    : 'border-gray-100 hover:border-red-100 hover:shadow-xl'
                }`}
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                    openFAQ === index 
                      ? 'bg-red-500 text-white transform rotate-180' 
                      : 'bg-gray-200 text-gray-600 hover:bg-red-100'
                  }`}>
                    {openFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${
                  openFAQ === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className={`bg-gradient-to-r from-red-50 to-yellow-50 p-4 rounded-xl border-l-4 border-red-500 transition-all duration-500 ${
                      openFAQ === index ? 'transform translate-y-0' : 'transform -translate-y-4'
                    }`}>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-red-500 to-yellow-500 p-8 rounded-3xl text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Our team is here to help! Reach out to us for any additional questions or support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Contact Support
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-6 py-3 rounded-full font-bold transition-all duration-300">
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;