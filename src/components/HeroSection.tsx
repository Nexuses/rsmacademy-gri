import React from 'react';
import { Calendar, Clock, Users, Download } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-900 to-green-800 text-white">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://cdn.coverr.co/videos/coverr-aerial-view-of-a-forest-5224/1080p.mp4"
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 md:pr-12 mb-10 md:mb-0">
            <div className="inline-block px-3 py-1 bg-green-700 text-green-100 rounded-full text-sm font-semibold mb-4 animate-pulse">
              Limited Seats Available
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              GRI Certified Sustainability Professional Training
            </h1>
            <div className="flex flex-wrap items-center text-lg mb-8">
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="h-5 w-5 mr-2" />
                <span>29 Jun - 2 Jul 2025</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Clock className="h-5 w-5 mr-2" />
                <span>9:00 AM - 5:00 PM (GMT+3)</span>
              </div>
              <div className="flex items-center mb-2">
                <Users className="h-5 w-5 mr-2" />
                <span>Limited to 25 participants</span>
              </div>
            </div>
            
            <p className="text-lg mb-8 text-green-50">
              Become a GRI Certified Sustainability Professional and master the globally recognized 
              standards for sustainability reporting. This comprehensive training equips you with 
              essential tools to lead your organization towards transparent, responsible, 
              and sustainable business practices.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold transition transform hover:scale-105 shadow-lg">
                Apply Now
              </button>
              <button className="px-6 py-3 bg-transparent hover:bg-white/10 border-2 border-white text-white rounded-lg font-bold transition flex items-center gap-2">
                <Download className="h-5 w-5" />
                Brochure
              </button>
            </div>
          </div>
          
          <div className="md:w-2/5">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
              <CountdownTimer targetDate="2025-06-29T09:00:00" />
              <div className="text-center mt-6">
                <p className="text-green-100 mb-4">Secure your spot before registration closes</p>
                <button className="w-full px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold transition transform hover:scale-105 shadow-lg">
                  Reserve Your Seat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;