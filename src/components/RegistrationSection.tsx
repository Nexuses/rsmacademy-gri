import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Building, User, Phone, Mail, CheckCircle, X } from 'lucide-react';

const RegistrationSection = () => {
  const [registrationType, setRegistrationType] = useState<'individual' | 'business'>('individual');
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

  const SignupModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-5xl mx-auto flex overflow-hidden relative">
        {/* Left side - Image */}
        <div className="hidden md:block w-2/5 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/90 z-10" />
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Professional Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
            <p className="text-green-50">
              Connect with sustainability professionals and advance your career with industry-recognized certification.
            </p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-3/5 p-8">
          <button 
            onClick={() => setShowSignup(false)}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div>
            <h2 className="text-2xl font-bold mb-2">Let's get you started!</h2>
            <p className="text-gray-600 mb-6">Start your 7-day free trial today</p>
            
            <div className="flex gap-4 mb-6">
              <button 
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                  registrationType === 'individual' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setRegistrationType('individual')}
              >
                <User className="h-5 w-5 inline-block mr-2" />
                Individual
              </button>
              <button 
                className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                  registrationType === 'business' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setRegistrationType('business')}
              >
                <Building className="h-5 w-5 inline-block mr-2" />
                Organization
              </button>
            </div>

            {registrationType === 'individual' ? (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password*</label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Create a password"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition-colors"
                >
                  Start Free Trial
                </button>
                <p className="text-sm text-gray-500 text-center">
                  By signing up, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            ) : (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name*</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter organization name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Email*</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter business email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person*</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter contact person name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number of Employees*</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="">Select number of employees</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501+">501+ employees</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition-colors"
                >
                  Start Free Trial
                </button>
                <p className="text-sm text-gray-500 text-center">
                  By signing up, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-16 bg-white" id="register">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto flex gap-8">
          {/* Left side - Pricing Card */}
          <div className="w-1/2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-2">
                  Explore this course with RSM Academy Pro subscription
                </h2>
                
                <div className="mt-6 mb-8">
                  <button 
                    onClick={() => setShowSignup(true)}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-4 font-bold text-lg transition-colors"
                  >
                    Start 7-day free trial
                  </button>
                </div>

                <div className="mb-6">
                  <span className="line-through text-gray-400 mr-2">SAR 1,599/month</span>
                  <span className="text-xl font-bold">SAR 799/month</span>
                  <span className="text-gray-600 ml-2">+18% GST</span>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold">What's included in Academy Pro</h3>
                  
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Course Info */}
          <div className="w-1/2">
            <h2 className="text-4xl font-bold mb-4">GRI Certified Sustainability Professional Training</h2>
            <p className="text-xl text-gray-600 mb-8">
              Master all essential sustainability reporting skills to drive results and stay ahead in today's 
              competitive landscape. Learn from industry experts and gain practical experience in GRI Standards implementation.
            </p>

            <div className="space-y-6 mb-12">
              <div>
                <h3 className="text-lg font-semibold mb-2">Cohort start date</h3>
                <p className="text-2xl font-bold">29th June 2025</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Course Duration</h3>
                <p className="text-gray-700">4 days intensive training (32 hours)</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Learning Format</h3>
                <p className="text-gray-700">In-person training with virtual attendance options</p>
              </div>
            </div>

            {/* Course Mentors */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Course Mentors</h3>
              <div className="flex items-center gap-6">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg" 
                    alt="Kareem Abu Eid" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">Kareem Abu Eid</h4>
                    <p className="text-sm text-gray-600">RSM MENA ESG Lead</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg" 
                    alt="Sarah Al-Rashid" 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">Sarah Al-Rashid</h4>
                    <p className="text-sm text-gray-600">Senior Consultant</p>
                  </div>
                </div>
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