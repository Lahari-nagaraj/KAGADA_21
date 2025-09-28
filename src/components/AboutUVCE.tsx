import React from 'react';

const AboutUVCE: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Bordered Container with Fade Effect */}
          <div className="relative">
            <div className="absolute inset-0 border-4 border-red-200 rounded-2xl opacity-100"></div>
            <div className="absolute inset-2 border-2 border-red-100 rounded-xl opacity-70"></div>
            <div className="absolute inset-4 border border-red-50 rounded-lg opacity-40"></div>
            
            <div className="relative bg-white p-12 md:p-16 rounded-2xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="text-red-600">About</span>
                  <span className="text-yellow-500 ml-4">UVCE</span>
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-red-700 mb-4">Excellence in Engineering</h3>
                    <p className="text-gray-700 leading-relaxed">
                      University Visvesvaraya College of Engineering (UVCE) is a premier institution known for its 
                      outstanding contributions to engineering education and research. Established with a vision to 
                      create world-class engineers, UVCE has been at the forefront of technological innovation.
                    </p>
                  </div>

                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-yellow-600 mb-4">Legacy & Innovation</h3>
                    <p className="text-gray-700 leading-relaxed">
                      With decades of academic excellence, UVCE continues to foster creativity, critical thinking, 
                      and technological advancement. Our students and faculty contribute significantly to research 
                      and development in various engineering disciplines.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-red-100 to-yellow-100 p-8 rounded-2xl">
                    <img 
                      src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Engineering Innovation"
                      className="w-full h-64 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  
                  {/* Floating Stats */}
                  <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg border-2 border-red-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">50+</div>
                      <div className="text-sm text-gray-600">Years Legacy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUVCE;