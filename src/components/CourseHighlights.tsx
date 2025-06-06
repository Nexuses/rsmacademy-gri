import React from 'react';
import { Award, Users, BookOpen, Bookmark, MessageCircle } from 'lucide-react';
import SmallBanner from '../../public/small-banner.png';

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="mr-4 flex-shrink-0">
    <div className="bg-blue-100 p-2.5 rounded-full shadow-md">
      {children}
    </div>
  </div>
);

const CourseHighlights = () => {
  return (
    <div className="pt-16 bg-white">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Left column */}
          <div className="space-y-3">
            {/* Vocational Learning card */}
            <div className="bg-navy rounded-xl shadow-sm p-5 border border-navy h-[calc(50%-0.375rem)] relative">
              <div className="flex items-start">
                <IconWrapper>
                  <BookOpen className="w-7 h-7 text-blue-600" strokeWidth={1.75} />
                </IconWrapper>
                
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-white mb-1.5">
                    Vocational Learning
                  </h3>
                  <p className="text-sm text-gray-300 tracking-wide max-w-[95%]">
                    Practical, job-ready skills through real case studies and exercises.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Interactive Sessions card */}
            <div className="bg-navy rounded-xl shadow-sm p-5 border border-navy h-[calc(50%-0.375rem)] relative">
              <div className="flex items-start">
                <IconWrapper>
                  <Users className="w-7 h-7 text-blue-600" strokeWidth={1.75} />
                </IconWrapper>
                
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-white mb-1.5">
                    Interactive Sessions
                  </h3>
                  <p className="text-sm text-gray-300 tracking-wide max-w-[95%]">
                    Live, expert-led discussions to deepen your understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Center column - GRI Certified Training Partner */}
          <div className="flex items-stretch">
            <div className="bg-navy rounded-xl shadow-sm p-5 border border-navy flex-1 relative h-full">
              <div className="flex flex-col h-full justify-between">
                {/* Content centered */}
                <div className="text-center mb-3">
                  <div className="mx-auto mb-4">
                    <div className="bg-blue-100 p-2.5 rounded-full inline-block shadow-md">
                      <Award className="w-8 h-8 text-blue-600" strokeWidth={1.75} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1.5">
                    GRI Certified Training Partner
                  </h3>
                  <p className="text-sm text-gray-300 tracking-wide">
                    Delivered in collaboration with the Global Reporting Initiative.
                  </p>
                </div>
                
                {/* Banner at the bottom - styled to blend with background */}
                <div className="mt-auto">
                  <div className="mx-auto w-full">
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
            <div className="bg-navy rounded-xl shadow-sm p-5 border border-navy h-[calc(50%-0.375rem)] relative">
              <div className="flex items-start">
                <IconWrapper>
                  <Bookmark className="w-7 h-7 text-blue-600" strokeWidth={1.75} />
                </IconWrapper>
                
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-white mb-1.5">
                    Dual Certification
                  </h3>
                  <p className="text-sm text-gray-300 tracking-wide max-w-[95%]">
                    Earn recognized certificates from GRI and RSM Saudi Academy.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Exclusive Q&A card */}
            <div className="bg-navy rounded-xl shadow-sm p-5 border border-navy h-[calc(50%-0.375rem)] relative">
              <div className="flex items-start">
                <IconWrapper>
                  <MessageCircle className="w-7 h-7 text-blue-600" strokeWidth={1.75} />
                </IconWrapper>
                
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-white mb-1.5">
                    Exclusive Q&A with ESG Expert
                  </h3>
                  <p className="text-sm text-gray-300 tracking-wide max-w-[95%]">
                    Interact with regional sustainability leadership.
                  </p>
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