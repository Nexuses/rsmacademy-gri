import React from 'react';
import { Clock, Check } from 'lucide-react';

const CourseAgenda = () => {
  const modules = [
    {
      day: 'Day 1',
      title: 'Introduction to Sustainability Reporting',
      topics: [
        'Overview of sustainability reporting landscape',
        'Introduction to GRI Standards and framework',
        'Reporting principles and quality',
        'Materiality assessment process',
        'Stakeholder engagement strategies'
      ]
    },
    {
      day: 'Day 2',
      title: 'GRI Universal Standards in Practice',
      topics: [
        'GRI 1: Foundation - Core concepts and principles',
        'GRI 2: General Disclosures - Organizational reporting',
        'GRI 3: Material Topics - Identifying and managing impacts',
        'Practical exercises and case studies',
        'Implementing double materiality in reporting'
      ]
    },
    {
      day: 'Day 3',
      title: 'Topic-Specific Standards & Sector Standards',
      topics: [
        'Economic, environmental, and social disclosures',
        'Sector-specific materiality considerations',
        'Human rights reporting and due diligence',
        'Climate change disclosures and TCFD alignment',
        'Practical reporting exercises with feedback'
      ]
    },
    {
      day: 'Day 4',
      title: 'Reporting Process & Certification Preparation',
      topics: [
        'Developing a sustainability reporting strategy',
        'Data collection and management systems',
        'Report assurance and verification',
        'Aligning with UN SDGs and other frameworks',
        'GRI Certification exam preparation and practice'
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Course Agenda</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our four-day intensive program covers all aspects of GRI sustainability reporting 
            through interactive sessions, practical exercises, and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {modules.map((module, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-green-600 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{module.day}</h3>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">09:00 - 17:00</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-green-700 mb-4">{module.title}</h4>
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-800 text-white rounded-xl p-8 shadow-lg">
          <div className="md:flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to become GRI Certified?</h3>
              <p className="max-w-2xl">
                Upon completion of this training, participants will be prepared to take the GRI Certification Exam 
                and join the global community of certified sustainability professionals.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-bold transition transform hover:scale-105 shadow-md">
                Download Full Agenda
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAgenda;