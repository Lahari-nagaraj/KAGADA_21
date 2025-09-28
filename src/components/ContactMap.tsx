import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const ContactMap: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-red-400">Contact</span>
              <span className="text-yellow-400 ml-4">& Location</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with us and find your way to KAGADA 2025
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
                <h3 className="text-3xl font-bold mb-8 text-yellow-400">Get In Touch</h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Address</h4>
                      <p className="text-gray-300 leading-relaxed">
                        University Visvesvaraya College of Engineering (UVCE)<br />
                        K.R. Circle, Bangalore - 560001<br />
                        Karnataka, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center group-hover:bg-yellow-600 transition-colors">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Phone</h4>
                      <p className="text-gray-300">
                        +91 9876543210<br />
                        +91 8765432109
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-colors">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
                      <p className="text-gray-300">
                        kagada2025@uvce.ac.in<br />
                        ieee.uvce@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Timing */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center group-hover:bg-yellow-600 transition-colors">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Event Timing</h4>
                      <p className="text-gray-300">
                        November 8th, 2025<br />
                        9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                    <Phone size={20} />
                    Call Now
                  </button>
                  <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                    <Mail size={20} />
                    Send Email
                  </button>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-yellow-400">Find Us Here</h3>
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-xl flex items-center justify-center">
                    <Navigation className="text-white" size={24} />
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl h-80 flex items-center justify-center border border-gray-600">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-red-500 rounded-full mx-auto flex items-center justify-center">
                      <MapPin className="text-white" size={32} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Interactive Map</h4>
                      <p className="text-gray-300 mb-4">
                        UVCE Campus Map<br />
                        K.R. Circle, Bangalore
                      </p>
                      <button className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-red-500/20 p-4 rounded-xl border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400">15 min</div>
                    <div className="text-gray-300 text-sm">From City Center</div>
                  </div>
                  <div className="bg-yellow-500/20 p-4 rounded-xl border border-yellow-500/30">
                    <div className="text-2xl font-bold text-yellow-400">Metro</div>
                    <div className="text-gray-300 text-sm">Accessible</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Quick Links */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-red-500/20 to-yellow-500/20 backdrop-blur-lg p-8 rounded-3xl border border-white/20">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6 text-white">Stay Connected</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Follow us on social media for the latest updates, behind-the-scenes content, and announcements about KAGADA 2025
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  {['Instagram', 'LinkedIn', 'Twitter', 'YouTube', 'Facebook'].map((platform, index) => (
                    <button
                      key={platform}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 hover:scale-105 transform transition-all duration-300"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;