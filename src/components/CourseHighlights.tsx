import React from 'react';
import { DollarSign, Building, BookOpen, Users } from 'lucide-react';

const CourseHighlights = () => {
  const highlights = [
    {
      title: "SAR 9,995+",
      subtitle: "AVERAGE SALARY INCREASE",
      icon: <DollarSign className="w-12 h-12 text-primary" />,
      bgImage: "bg-[url('https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg')]"
    },
    {
      title: "Top companies hiring",
      subtitle: "GET HIRED BY LEADING ORGANIZATIONS",
      icon: <Building className="w-12 h-12 text-primary" />,
      bgImage: "bg-[url('https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg')]"
    },
    {
      title: "Real-world projects",
      subtitle: "LEARN BY DOING",
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      bgImage: "bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')]"
    },
    {
      title: "Live Q&A sessions",
      subtitle: "INTERACT WITH INDUSTRY EXPERTS",
      icon: <Users className="w-12 h-12 text-primary" />,
      bgImage: "bg-[url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg')]"
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`absolute inset-0 opacity-5 ${highlight.bgImage} bg-cover bg-center`} />
              <div className="relative p-6">
                <div className="mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-darkGray uppercase tracking-wider">
                  {highlight.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseHighlights;