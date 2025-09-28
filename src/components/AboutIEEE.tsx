import React from 'react';
import { Zap, Globe, Users } from 'lucide-react';

const AboutIEEE: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-red-600">About</span>
              <span className="text-yellow-500 ml-4">IEEE</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The Institute of Electrical and Electronics Engineers - Advancing technology for humanity
            </p>
          </div>

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

          {/* IEEE UVCE Section */}
          <div className="bg-gradient-to-r from-red-600 to-yellow-500 p-8 md:p-12 rounded-3xl text-white">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">IEEE UVCE Student Branch</h3>
              <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
                Our student branch at UVCE is committed to fostering technical excellence, professional development, 
                and innovation among students. We organize workshops, seminars, and technical events like KAGADA to 
                bridge the gap between academic learning and industry requirements.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm opacity-80">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm opacity-80">Annual Events</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-sm opacity-80">Industry Connects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm opacity-80">Years Legacy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIEEE;