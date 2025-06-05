import React from 'react';
import { Play, ArrowUpRight, Laptop, Users, Briefcase } from 'lucide-react';

const LearningApproach = () => {
  const approaches = [
    {
      title: "Understand the GRI Standards",
      description: "Learn how the GRI Standards are structured and how to use them in your reports — including Universal, Sector, and Topic Standards.",
      icon: <ArrowUpRight className="w-6 h-6" />
    },
    {
      title: "Report on Key Sustainability Issues",
      description: "Gain the ability to report on human rights, environmental impact, and governance, while meeting global due diligence and disclosure expectations.",
      icon: <Laptop className="w-6 h-6" />
    },
    {
      title: "Create Clear and Trusted Reports",
      description: "Learn how to improve the quality, accuracy, and transparency of your reports to meet the needs of stakeholders and regulators.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Align with the UN SDGs and Get Certified",
      description: "See how your work connects to the UN Sustainable Development Goals, and get ready to pass the GRI Certification Exam with confidence.",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container-padding">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-navy">Empower Your ESG Journey with Practical Learning</h2>
          <p className="text-xl text-darkGray">
            Build the skills you need to lead sustainability reporting in your organization. This training offers practical, easy-to-apply knowledge designed for real-world impact.
          </p>
        </div>

        <div className="relative mb-12">
          <div className="bg-primary rounded-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 relative" style={{ maxHeight: '360px' }}>
              <video 
                id="overview-video"
                className="w-full h-full object-cover"
                poster="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                preload="metadata"
              >
                <source src="/full-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={() => {
                  const video = document.getElementById('overview-video') as HTMLVideoElement;
                  if (video) {
                    video.controls = true;
                    video.play();
                    // Hide the overlay once video starts playing
                    const overlay = video.nextElementSibling as HTMLElement;
                    if (overlay) overlay.style.display = 'none';
                  }
                }}
              >
                <div className="text-white text-center">
                  <button className="bg-white/20 rounded-full p-3 inline-block mb-3 hover:bg-white/30 transition-colors">
                    <Play className="w-6 h-6" />
                  </button>
                  <h3 className="text-xl font-semibold mb-1">GRI Standards: Course Overview</h3>
                  <p className="text-sm">0:40</p>
                </div>
              </div>
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
              As global demand for transparency and accountability rises, sustainability reporting has become a critical skill
              across all industries. The GRI Standards are the world's most widely used framework, helping professionals deliver
              trusted, impactful ESG reports that meet stakeholder expectations and regulatory demands.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-secondary/20 rounded-lg">
                <p className="text-3xl font-bold">100+</p>
                <p className="text-sm">Countries Using GRI</p>
              </div>
              <div className="p-4 bg-secondary/20 rounded-lg">
                <p className="text-3xl font-bold">77%</p>
                <p className="text-sm">Of the World's Largest 250 Companies</p>
              </div>
              <div className="p-4 bg-secondary/20 rounded-lg">
                <p className="text-3xl font-bold">14,000+</p>
                <p className="text-sm">Organizations Reporting with GRI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningApproach;