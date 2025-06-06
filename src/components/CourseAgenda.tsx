import React, { useState } from 'react';
import { Check, ChevronDown, BookOpen, BookText, ShieldCheck, Target } from 'lucide-react';
import { downloadBrochure } from '../utils/download';

const CourseAgenda = () => {
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);

  const modules = [
    {
      day: 'Day 1',
      title: 'Introduction to Sustainability Reporting and the GRI Standards',
      icon: BookOpen,
      topics: [
        'Understand the concept and purpose of sustainability reporting',
        'Explore the role and mission of the Global Reporting Initiative (GRI)',
        'Learn why transparency in ESG performance matters to stakeholders and regulators',
        'Get familiar with key sustainability terms and the global reporting landscape'
      ]
    },
    {
      day: 'Day 2',
      title: 'Introduction to Sustainability Reporting and the GRI Standards',
      icon: BookText,
      topics: [
        'Dive deeper into the GRI Standards framework: Universal, Sector, and Topic Standards',
        'Learn how to apply reporting principles and define your reporting boundaries',
        'Conduct stakeholder engagement and identify organizational impacts',
        'Understand how to determine and prioritize material topics for reporting'
      ]
    },
    {
      day: 'Day 3',
      title: 'Reporting on Human Rights with the GRI Standards',
      icon: ShieldCheck,
      topics: [
        'Learn how to identify and address human rights issues through GRI disclosures',
        'Understand due diligence processes related to labor, equity, and social responsibility',
        'Explore GRI Standards related to human rights and their implementation',
        'Apply knowledge through case-based learning and real-world scenarios'
      ]
    },
    {
      day: 'Day 4',
      title: 'Integrating the SDGs into Sustainability Reporting',
      icon: Target,
      topics: [
        'Understand the United Nations Sustainable Development Goals (SDGs) and their relevance to business',
        'Learn how to link your sustainability efforts to the SDG framework',
        'Follow step-by-step guidance on integrating SDGs into GRI-based reporting',
        'Review reporting examples and case studies from organizations leading in SDG alignment'
      ]
    }
  ];

  return (
    <div className="pt-16 bg-white">
      <div className="container-padding">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Course Agenda</h2>
          <p className="text-lg text-darkGray max-w-3xl mx-auto">
            This 4-day GRI Certified Training is designed to guide participants through the key pillars of sustainability reporting. Each day builds on
            foundational knowledge, helping you apply the GRI Standards effectively while aligning with international ESG expectations.
          </p>
        </div>

        <div className="space-y-4 mb-12 p-6 rounded-lg">
          {/* <h3 className="text-2xl font-bold mb-4">Courses in this program (4)</h3> */}
          
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden border border-primary"
              onMouseEnter={() => setHoveredDay(module.day)}
              onMouseLeave={() => setHoveredDay(null)}
            >
              <div className="w-full flex justify-between items-center p-4 text-primary text-left">
                <div className="flex items-center">
                  {React.createElement(module.icon, { className: "h-5 w-5 mr-3" })}
                  <span className="text-lg font-medium">{module.day}: {module.title}</span>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform duration-500 ${hoveredDay === module.day ? 'transform rotate-180' : ''}`} />
              </div>
              
              <div 
                className={`transition-all duration-700 ease-in-out overflow-hidden ${hoveredDay === module.day ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 bg-white">
                  <ul className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <Check className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span className="text-darkGray">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-navy text-white rounded-xl p-8 shadow-lg">
          <div className="md:flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Become GRI Certified?</h3>
              <p className="max-w-2xl">
                Join a growing network of global professionals certified by the GRI. This training prepares you to pass the GRI Certification Exam with confidence.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <button 
                onClick={downloadBrochure}
                className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-lg font-bold transition transform hover:scale-105 shadow-md">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAgenda;