import React from 'react';
import { Car, Users, Shield, Zap } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  VNR VJIET
                  <span className="block text-blue-600">Parking Finder</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Find your vehicle details easily by number or owner name. Register vehicles for quick access. 
                  Designed specifically for students and faculty of VNR VJIET.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold shadow-lg">
                  Find Vehicle
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors font-semibold">
                  Register Now
                </button>
              </div>
            </div>

            {/* Right Content - College Image */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="VNR VJIET Campus"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">VNR VJIET Campus</p>
                  <p className="text-xs opacity-90">Hyderabad, Telangana</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose VNR Parking Finder?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined parking management system designed to make vehicle tracking effortless for our campus community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Car,
                title: 'Easy Vehicle Registration',
                description: 'Quick and simple registration process for all vehicle types including EVs.',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                icon: Users,
                title: 'For Everyone',
                description: 'Designed for both students and faculty members with role-based features.',
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: Shield,
                title: 'Secure & Reliable',
                description: 'Your data is safe with our secure system and admin oversight.',
                color: 'bg-purple-100 text-purple-600'
              },
              {
                icon: Zap,
                title: 'Instant Search',
                description: 'Find any vehicle instantly by number, owner name, or department.',
                color: 'bg-orange-100 text-orange-600'
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Campus Parking at a Glance</h2>
            <p className="text-xl text-blue-100">Real-time statistics from our parking management system</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Registered Vehicles', value: '1,250+', icon: Car },
              { label: 'Active Students', value: '3,500+', icon: Users },
              { label: 'Faculty Members', value: '200+', icon: Users },
              { label: 'EV Vehicles', value: '85+', icon: Zap }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-200 group-hover:text-white transition-colors" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of VNR VJIET community members who are already using our parking management system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg">
              Register Your Vehicle
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors font-semibold text-lg">
              Search Vehicles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;