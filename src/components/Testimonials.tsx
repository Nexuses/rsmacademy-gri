import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Al-Saud",
      title: "Sustainability Director, Saudi Aramco",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      quote: "This training transformed how we approach sustainability reporting. The practical insights and GRI expertise have been invaluable for our organization's ESG strategy.",
      stars: 5
    },
    {
      name: "Fatima Al-Rashid",
      title: "ESG Manager, SABIC",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      quote: "The hands-on approach and real-world case studies made complex GRI Standards accessible. I immediately applied what I learned to improve our reporting.",
      stars: 5
    },
    {
      name: "Mohammed Al-Harbi",
      title: "Chief Sustainability Officer, National Commercial Bank",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      quote: "The trainer's expertise in both global standards and regional context made this the most valuable professional development course I've taken in years.",
      stars: 5
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from professionals who have completed our GRI Certified Sustainability 
            Professional Training and are now leading sustainability initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full mr-4 object-cover" 
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-lg font-bold transition">
            View More Testimonials
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;