import React from 'react';
import { Award, Book, Briefcase, CheckCircle, Users } from 'lucide-react';

const TrainerProfile = () => {
  const trainers = [
    {
      name: "Kareem Abu Eid",
      title: "RSM MENA ESG Lead & GRI Certified Trainer",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
      description: "With over 15 years of experience in sustainability management, Kareem has helped dozens of organizations implement effective ESG strategies and reporting frameworks.",
      quote: "My approach focuses on practical application—turning sustainability theory into actionable strategies that create real business value.",
      skills: ['ESG Strategy', 'GRI Reporting', 'Sustainability Management'],
      achievements: [
        { icon: <Award />, title: "GRI Certified", desc: "Official GRI certification" },
        { icon: <Briefcase />, title: "Industry Expert", desc: "15+ years experience" },
        { icon: <Users />, title: "Master Facilitator", desc: "2,000+ professionals trained" }
      ]
    },
    {
      name: "Sarah Al-Rashid",
      title: "Senior Sustainability Consultant & GRI Trainer",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
      description: "Sarah specializes in helping organizations integrate ESG principles into their business strategies, with particular expertise in MENA region sustainability practices.",
      quote: "Sustainability isn't just about reporting—it's about creating lasting positive impact through strategic transformation.",
      skills: ['ESG Integration', 'Carbon Accounting', 'UN SDGs'],
      achievements: [
        { icon: <Award />, title: "GRI Certified", desc: "Advanced certification" },
        { icon: <Book />, title: "Thought Leader", desc: "Published researcher" },
        { icon: <Briefcase />, title: "Regional Expert", desc: "MENA specialist" }
      ]
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Learn from the Best</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our training is facilitated by GRI Certified Trainers with extensive practical experience 
            in sustainability reporting and ESG strategy.
          </p>
        </div>

        <div className="space-y-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover"
                    style={{ minHeight: '300px' }}
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">{trainer.name}</h3>
                    <p className="text-green-700 font-medium">{trainer.title}</p>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{trainer.description}</p>
                  
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {trainer.achievements.map((achievement, i) => (
                      <div key={i} className="bg-white p-3 rounded-lg text-center">
                        <div className="text-green-600 flex justify-center mb-1">
                          {achievement.icon}
                        </div>
                        <h4 className="text-sm font-semibold">{achievement.title}</h4>
                        <p className="text-xs text-gray-500">{achievement.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white p-3 rounded-lg mb-4 italic text-gray-600">
                    "{trainer.quote}"
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {trainer.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg font-bold transition shadow-md">
            Meet Our Training Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerProfile;