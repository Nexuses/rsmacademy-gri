import { Award, Briefcase, Leaf, Users } from 'lucide-react';

const TrainerProfile = () => {
  const trainers = [
    {
      name: "Merin Abraham",
      title: "GRI Certified Trainer",
      image: "/Merin.png",
      description: "Merin brings a unique blend of academic expertise and real-world sustainability knowledge. With a Master's in Sustainable Built Environment from UNSW and a LEED Green Associate certification, she has led sustainable architecture, ESG integration, and green building strategy across consulting, education, and design sectors.",
      achievements: [
        { icon: <Award className="h-5 w-5" />, title: "GRI Certified", desc: "Official GRI Trainer" },
        { icon: <Briefcase className="h-5 w-5" />, title: "Built Environment Expert", desc: "Specialist in urban sustainability and environmental design" },
        { icon: <Users className="h-5 w-5" />, title: "Cross-Sector Insight", desc: "Experience in academia, consultancy, and urban planning" }
      ]
    },
    {
      name: "Yousef Abdulhadi",
      title: "GRI Certified Trainer",
      image: "/Yousef.png",
      description: "Yousef is a sustainability strategist with a strong background in engineering, GHG accounting, and climate risk. He has supported ESG implementation in industries including manufacturing, retail, energy, and tech—guiding companies in aligning with international sustainability standards.",
      achievements: [
        { icon: <Award className="h-5 w-5" />, title: "GRI Certified", desc: "Accredited Trainer in GRI Standards" },
        { icon: <Briefcase className="h-5 w-5" />, title: "Industry Experience", desc: "Worked across industrial, commercial, and energy sectors" },
        { icon: <Leaf className="h-5 w-5" />, title: "Climate & Risk Focus", desc: "Expertise in GHG emissions, ESG strategy, and reporting" }
      ]
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container-padding">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-navy mb-3">Learn from GRI-Certified Trainers</h2>
          <p className="text-lg text-darkGray max-w-2xl mx-auto">
            Advance your sustainability journey with guidance from GRI Certified Trainers who blend 
            technical expertise with hands-on experience. Our instructors bring deep knowledge in ESG 
            reporting, stakeholder engagement, and materiality—empowering you to apply the GRI 
            Standards with clarity and confidence across diverse industries.
          </p>
        </div>

        <div className="space-y-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  {/* Image with cropped circular display */}
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-50 shadow-sm">
                      <img 
                        src={trainer.image} 
                        alt={trainer.name} 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-navy">{trainer.name}</h3>
                      <p className="text-primary font-medium">{trainer.title}</p>
                    </div>
                    
                    <p className="text-darkGray mb-5">{trainer.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {trainer.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                          <div className="text-primary bg-white p-2 rounded-full shadow-sm">
                            {achievement.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-navy text-sm">{achievement.title}</h4>
                            <p className="text-xs text-mediumGray">{achievement.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerProfile;