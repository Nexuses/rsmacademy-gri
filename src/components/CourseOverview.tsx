import React from 'react';
import { BookOpen, Award, Check } from 'lucide-react';

const CourseOverview = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Commented out course overview content
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Course Overview
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our GRI Certified Sustainability Professional Training provides participants with essential 
            tools and internationally recognized methodologies to enhance their sustainability reporting practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-green-700 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">What You'll Learn</h3>
              </div>
              <p className="text-gray-600 mb-6">
                This comprehensive training equips participants with the knowledge and skills to effectively
                understand and apply sustainability reporting using the GRI Standards.
              </p>
              <ul className="space-y-3">
                {[
                  'Comprehensive understanding of GRI Standards structure',
                  'Application of GRI reporting principles',
                  'Human rights reporting in accordance with GRI',
                  'Aligning sustainability reporting with UN SDGs',
                  'Improving quality and credibility of reports',
                  'Preparation for GRI Certification Exam'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-green-700 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Course Advantages</h3>
              </div>
              <p className="text-gray-600 mb-6">
                By completing this training, professionals gain the expertise needed to lead their organizations
                toward more transparent, responsible, and sustainable business strategies.
              </p>
              <ul className="space-y-3">
                {[
                  'Official GRI Certification enhancing professional credibility',
                  'Hands-on, practical training with real-world case studies',
                  'Led by a GRI Certified Trainer with extensive experience',
                  'Alignment with global best practices in sustainability',
                  'Applicable knowledge across diverse industries',
                  'Exclusive Q&A with ESG Expert Kareem Abu Eid'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default CourseOverview;