import React, { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

const RegistrationSection = () => {
  const [showSignup, setShowSignup] = useState(false);

  const features = [
    'Official GRI training materials',
    'GRI Certification exam eligibility',
    'Live Q&A sessions with experts',
    '50+ practical exercises & case studies',
    'Lifetime access to course materials',
    'Post-training support',
    'Certificate of completion',
    'Networking opportunities'
  ];

  // Course mentors data from TrainerProfile component
  const mentors = [
    {
      name: "Kareem Abu Eid",
      title: "RSM MENA ESG Lead & GRI Certified Trainer",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
    },
    {
      name: "Sarah Al-Rashid",
      title: "Senior Sustainability Consultant & GRI Trainer",
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg"
    }
  ];

  const SignupModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden relative">
        {/* Left side - Image */}
        <div className="hidden md:block w-2/5 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-primary/90 z-10" />
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Professional Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
            <p className="text-white">
              Connect with sustainability professionals and advance your career with industry-recognized certification.
            </p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-3/5 p-6 md:p-8">
          <button 
            onClick={() => setShowSignup(false)}
            className="absolute right-4 top-4 text-mediumGray hover:text-darkGray"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-navy">Let's get you started!</h2>
            <p className="text-darkGray mb-6">Start your 7-day free trial today</p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-darkGray mb-1">Full Name*</label>
                <input 
                  type="text" 
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-darkGray mb-1">Email Address*</label>
                <input 
                  type="email" 
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-darkGray mb-1">Phone Number*</label>
                <input 
                  type="tel" 
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-darkGray mb-1">Password*</label>
                <input 
                  type="password" 
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Create a password"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold transition-colors"
              >
                Start Free Trial
              </button>
              <p className="text-xs md:text-sm text-mediumGray text-center">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-10 md:py-16 bg-white" id="register">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Left side - Pricing Card */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-2 text-navy">
                  Explore this course with RSM Academy Pro subscription
                </h2>
                
                <div className="mt-6 mb-8">
                  <button 
                    onClick={() => setShowSignup(true)}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-lg py-3 md:py-4 font-bold text-base md:text-lg transition-colors"
                  >
                    Start 7-day free trial
                  </button>
                </div>

                <div className="mb-6">
                  <span className="line-through text-mediumGray mr-2">SAR 1,599/month</span>
                  <span className="text-lg md:text-xl font-bold text-navy">SAR 799/month</span>
                  <span className="text-darkGray ml-2">+18% GST</span>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-lg md:text-xl font-bold text-navy">What's included in Academy Pro</h3>
                  
                  <div className="space-y-3 md:space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm md:text-base text-darkGray">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Course Info */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-navy">GRI Certified Sustainability Professional Training</h2>
            <p className="text-base md:text-lg lg:text-xl text-darkGray mb-6 md:mb-8">
              Master all essential sustainability reporting skills to drive results and stay ahead in today's 
              competitive landscape. Learn from industry experts and gain practical experience in GRI Standards implementation.
            </p>

            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-navy">Cohort start date</h3>
                <p className="text-xl md:text-2xl font-bold text-primary">29th June 2025</p>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-navy">Course Duration</h3>
                <p className="text-darkGray">4 days intensive training (32 hours)</p>
              </div>

              <div>
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-navy">Learning Format</h3>
                <p className="text-darkGray">In-person training with virtual attendance options</p>
              </div>
            </div>

            {/* Course Mentors */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-base md:text-lg font-semibold mb-4 text-navy">Course Mentors</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                {mentors.map((mentor, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-navy">{mentor.name}</h4>
                      <p className="text-sm text-mediumGray">{mentor.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSignup && <SignupModal />}
    </div>
  );
};

export default RegistrationSection;