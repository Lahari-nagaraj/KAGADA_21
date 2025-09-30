import React from 'react';
import { Zap, Globe, Users } from 'lucide-react';

const AboutIEEE: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-red-600">About</span>
              <span className="text-yellow-500 ml-4">IEEE UVCE</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Striding Ahead!
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-red-200">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 group-hover:bg-red-200 transition-colors">
                  <Zap className="text-red-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-red-700 mb-4">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">
                  IEEE fosters technological innovation and excellence for the benefit of humanity through 
                  cutting-edge research and development initiatives.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-yellow-200">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6 group-hover:bg-yellow-200 transition-colors">
                  <Globe className="text-yellow-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-yellow-600 mb-4">Global Reach</h3>
                <p className="text-gray-600 leading-relaxed">
                  With over 400,000 members worldwide, IEEE is the largest technical professional 
                  organization dedicated to advancing technology globally.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-red-200">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 group-hover:bg-red-200 transition-colors">
                  <Users className="text-red-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-red-700 mb-4">Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  IEEE builds a strong community of professionals, students, and academics working 
                  together to shape the future of technology.
                </p>
              </div>
            </div>
          </div>

          {/* IEEE UVCE Section (Updated Layout) */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            {/* Left: Text */}
            <div>
              
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                IEEE UVCE has come to be one of the most recognised Student Branch across the Region 10 of IEEE. 
                Rekindled in 2001, the student branch has since grown to the strength of around 400 student members. 
                The organization's commitment to improving and upgrading its members' core knowledge base to industry 
                standards is reflected in a variety of activities organised throughout the year. Symposiums, guest lectures, 
                hands-on workshops, the Annual National Level Technical Student Conference - KAGADA, the Annual National 
                Level Technical Extravaganza - IMPETUS, Annual National Level Hackathon - CodeFury and industrial tours 
                are some of the events held throughout the year. We stood with our motto “Striding Ahead” even during the 
                pandemic, engaging the community not only with technical skills but also in humanitarian and societal causes. 
                Our diligent efforts haven’t been left unrecognized. In September 2023, IEEE UVCE received a token of appreciation 
                as 2023 IEEE R10 Special Recognition of Student Branch Award by IEEE R10 Awards and Recognitions Committee.
              </p>
            </div>

            {/* Right: Logo */}
            <div className="flex justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6c/IEEE_logo.svg"
                alt="IEEE Logo"
                className="w-64 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIEEE;
