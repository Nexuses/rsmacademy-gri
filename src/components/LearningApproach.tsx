import React from 'react';
import { Play, ArrowUpRight, Laptop, Users, Briefcase } from 'lucide-react';

const LearningApproach = () => {
  const approaches = [
    {
      title: "On-Demand Learning",
      description: "Access comprehensive GRI Standards training materials and resources anytime, anywhere through our digital learning platform.",
      icon: <ArrowUpRight className="w-6 h-6" />
    },
    {
      title: "Hands-On Learning",
      description: "Apply GRI Standards through practical exercises, real-world case studies, and guided sustainability reporting projects.",
      icon: <Laptop className="w-6 h-6" />
    },
    {
      title: "Cohort Learning",
      description: "Join a community of sustainability professionals, sharing experiences and insights throughout the training program.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Professional Services",
      description: "Get personalized guidance and support from our GRI certified experts to accelerate your learning journey.",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-navy">Modern skills need a modern learning approach</h2>
          <p className="text-xl text-darkGray">
            Learning solutions shouldn't be one-size-fits-all. For effective training, you need the right skills and
            the right modalities. That's where we come in.
          </p>
        </div>

        <div className="relative mb-12">
          <div className="bg-primary rounded-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 relative" style={{ maxHeight: '360px' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <button className="bg-white/20 rounded-full p-3 inline-block mb-3 hover:bg-white/30 transition-colors">
                    <Play className="w-6 h-6" />
                  </button>
                  <h3 className="text-xl font-semibold mb-1">GRI Standards: Course Overview</h3>
                  <p className="text-sm">1:38</p>
                </div>
              </div>
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Course Overview"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {approaches.map((approach, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="mb-4 p-3 rounded-full inline-block border border-mediumGray group-hover:border-primary transition-colors">
                {approach.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy group-hover:text-primary transition-colors">
                {approach.title}
              </h3>
              <p className="text-darkGray">
                {approach.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-navy text-white rounded-xl overflow-hidden shadow-xl">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4">Why This Training Matters</h3>
            <p className="mb-6">
              As corporate transparency and environmental responsibility gain increasing global attention,
              the ability to report on sustainability has become a vital competency for professionals across industries.
              According to the Global Reporting Initiative (GRI), thousands of organizations in over 100 countries
              use the GRI Standards, including a significant majority of the world's leading companies.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-secondary/20 rounded-lg">
                <p className="text-3xl font-bold">100+</p>
                <p className="text-sm">Countries Using GRI</p>
              </div>
              <div className="p-4 bg-secondary/20 rounded-lg">
                <p className="text-3xl font-bold">75%</p>
                <p className="text-sm">Of Fortune 250</p>
              </div>
              <div className="p-4 bg-secondary/20 rounded-lg">
                <p className="text-3xl font-bold">10k+</p>
                <p className="text-sm">Organizations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningApproach;