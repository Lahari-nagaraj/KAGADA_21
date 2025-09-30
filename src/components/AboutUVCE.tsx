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
                {/* Paragraph Section */}
                <div className="space-y-6">
                  <div className="transform hover:scale-105 transition-transform duration-300">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Established in the year 1917 by Bharat Ratna Sir M Visvesvaraya,
                      University of Visvesvaraya College of Engineering (UVCE) is an AICTE
                      approved establishment imparting education in B.E/B.Tech, M.E/M.Tech,
                      B.Arch, M.Sc (Engineering) and PhD degrees in the various disciplines
                      of Engineering and Architecture. After celebrating its centenary year
                      in 2018, this college has marked its name amongst one of the most
                      prestigious institutions in the country and it is designated as an
                      autonomous college from 25th March, 2022. The college hosts several
                      successful technical and non–technical events with diligent efforts
                      from the students. Every year, the college boasts of quality placements
                      while taking pride in its alumni's successful ventures. In a way, UVCE
                      not only shapes the careers of its students but also makes them fit to
                      face the real-world challenges that are posed in society.
                    </p>
                  </div>
                </div>

                {/* Image + Stats */}
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
                      <div className="text-2xl font-bold text-red-600">100+</div>
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
