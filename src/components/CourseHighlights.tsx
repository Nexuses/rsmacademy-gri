import React from 'react';
import { Award, Users, MessageSquare, BookOpen } from 'lucide-react';
import SmallBanner from '../../public/small-banner.png';

const CourseHighlights = () => {
  return (
    <div className="py-6 bg-white mt-12">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Left column */}
          <div className="space-y-3">
            {/* Vocational Learning card (previously GRI Certified) */}
            <div className="bg-[#FEF9EF] rounded-xl shadow-sm p-4 border border-gray-100 h-32">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#333] mb-1">
                    Vocational Learning
                  </h3>
                  <p className="text-xs text-[#666] tracking-wide">
                    Practical, job-ready skills through real case studies and exercises.
                  </p>
                </div>
                <div className="w-10 h-10 bg-[#f8f8f5] rounded-full flex items-center justify-center ml-2 flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-gray-300" />
                </div>
              </div>
            </div>
            
            {/* Interactive Sessions card */}
            <div className="bg-[#FEF9EF] rounded-xl shadow-sm p-4 border border-gray-100 h-32">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#333] mb-1">
                    Interactive Sessions
                  </h3>
                  <p className="text-xs text-[#666] tracking-wide">
                    Live, expert-led discussions to deepen your understanding.
                  </p>
                </div>
                <div className="w-10 h-10 bg-[#f8f8f5] rounded-full flex items-center justify-center ml-2 flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Center column - GRI Certified Training Partner */}
          <div className="flex items-stretch">
            <div className="bg-[#FEF9EF] rounded-xl shadow-sm p-4 border border-gray-100 flex-1 relative overflow-hidden">
              <div className="flex flex-col h-full relative z-10">
                {/* Icon centered at the top */}
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 bg-[#f8f8f5] rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-gray-300" />
                  </div>
                </div>
                
                {/* Content centered */}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-[#333] mb-1">
                    GRI Certified Training Partner
                  </h3>
                  <p className="text-xs text-[#666] tracking-wide">
                    Delivered in collaboration with the Global Reporting Initiative.
                  </p>
                </div>
                
                {/* Banner at the bottom - styled to blend with background */}
                <div className="mt-auto">
                  <div className="bg-white bg-opacity-60 rounded-lg p-2 mx-auto w-full">
                    <img 
                      src={SmallBanner as string} 
                      alt="GRI Certified Training Partner Banner"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div className="space-y-3">
            {/* Dual Certification card */}
            <div className="bg-[#FEF9EF] rounded-xl shadow-sm p-4 border border-gray-100 h-32">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#333] mb-1">
                    Dual Certification
                  </h3>
                  <p className="text-xs text-[#666] tracking-wide">
                    Earn recognized certificates from GRI and RSM Saudi Academy.
                  </p>
                </div>
                <div className="w-10 h-10 bg-[#f8f8f5] rounded-full flex items-center justify-center ml-2 flex-shrink-0">
                  <Award className="w-5 h-5 text-gray-300" />
                </div>
              </div>
            </div>
            
            {/* Exclusive Q&A card */}
            <div className="bg-[#FEF9EF] rounded-xl shadow-sm p-4 border border-gray-100 h-32">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#333] mb-1">
                    Exclusive Q&A with ESG Expert
                  </h3>
                  <p className="text-xs text-[#666] tracking-wide">
                    Interact with regional sustainability leadership.
                  </p>
                </div>
                <div className="w-10 h-10 bg-[#f8f8f5] rounded-full flex items-center justify-center ml-2 flex-shrink-0">
                  <Users className="w-5 h-5 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHighlights;