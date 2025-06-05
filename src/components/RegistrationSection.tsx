import React, { useState, useEffect } from "react";
import { CheckCircle, X, Calendar, Clock, Video } from "lucide-react";
import { sendEnrollmentEmail } from "../utils/email";
import emailjs from '@emailjs/browser';

const RegistrationSection = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    enrollmentType: "individual",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Initialize EmailJS on component mount
  useEffect(() => {
    // Initialize EmailJS with your public key
    // This can also be done in a higher level component like App.tsx
    emailjs.init("your_public_key"); // Replace with your actual public key
  }, []);

  const features = [
    "Direct access to GRI Certified Trainers with global and regional ESG expertise",
    "Official GRI training materials and eligibility for the GRI Certification Exam",
    "Practical learning through case studies, interactive sessions, and real-world examples",
    "An accredited certificate from both GRI and RSM Saudi Academy",
    "Post-training support and opportunities to connect with ESG professionals",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      const success = await sendEnrollmentEmail({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        enrollmentType: formData.enrollmentType,
      });

      if (success) {
        setSubmitStatus({
          success: true,
          message: "Enrollment successful! Check your email for confirmation.",
        });
        // Reset form after successful submission
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          enrollmentType: "individual",
          password: "",
        });
      } else {
        setSubmitStatus({
          success: false,
          message: "Failed to process enrollment. Please try again.",
        });
      }
    } catch (error: unknown) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const SignupModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl w-full max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden relative shadow-2xl">
        {/* Left side - Image */}
        <div className="hidden md:block w-2/5 relative">
          <div className="absolute inset-0 bg-navy/80 z-10" />
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Professional Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join a GRI-Certified Learning Experience
            </h3>
            <p className="text-white">
              Advance your sustainability career or empower your organization through globally recognized GRI Certification. Connect with GRI Certified Trainers and industry experts, build ESG capabilities, and take the lead in responsible reporting.
            </p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-3/5 p-6 md:p-8">
          <button
            onClick={() => setShowSignup(false)}
            className="absolute right-4 top-4 text-mediumGray hover:text-darkGray transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-navy">
              Let's get you started!
            </h2>
            <p className="text-darkGray mb-6">
              Enroll now and take the first step toward GRI Certification.
            </p>

            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-darkGray mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-darkGray mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-darkGray mb-1">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-darkGray mb-1">
                  Enrollment Type*
                </label>
                <select
                  name="enrollmentType"
                  value={formData.enrollmentType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="individual">For Individual</option>
                  <option value="business">For Business</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-darkGray mb-1">
                  Password*
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Create a password"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 ${
                  loading
                    ? "bg-gray-400"
                    : "bg-green-600 hover:bg-green-700"
                } text-white rounded-lg font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex justify-center items-center`}
              >
                {loading ? "Processing..." : "Register Now"}
              </button>
              <p className="text-xs md:text-sm text-mediumGray text-center">
                By signing up, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-16 md:py-20 bg-gray-50" id="register">
      <div className="container-padding">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Enrollment Info */}
            <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10">
              <div className="bg-primary/5 rounded-xl shadow-md overflow-hidden border border-gray-200 p-6 md:p-8 hover:shadow-lg transition-all">
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-navy">
                  Ready to Enroll?
                </h2>

                <div className="mt-6 mb-8">
                  <button
                    onClick={() => setShowSignup(true)}
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3 md:py-4 font-bold text-base md:text-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    Register Now
                  </button>
                </div>

                <div className="mb-6">
                  <p className="text-base text-darkGray leading-relaxed">
                    Advance your sustainability journey with our GRI Certified
                    Sustainability Professional Training — designed for
                    individuals and organizations committed to ESG excellence.
                  </p>
                </div>

                <div className="space-y-5 md:space-y-6">
                  <h3 className="text-lg md:text-xl font-bold text-navy">
                    By enrolling, you'll gain:
                  </h3>

                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start group">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1 group-hover:text-green-600 transition-colors" />
                        <span className="text-sm md:text-base text-darkGray group-hover:text-navy transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Course Info */}
            <div className="w-full lg:w-1/2 bg-navy p-6 md:p-8 lg:p-10 text-white">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                GRI Certified Sustainability Professional Training
              </h2>
              <p className="text-base md:text-lg opacity-90 mb-8 leading-relaxed">
                Master all essential sustainability reporting skills to drive
                measurable impact and stay ahead in today's ESG-driven world.
                Learn from certified experts and gain hands-on experience using
                GRI Standards in real-world scenarios.
              </p>

              <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
                <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all">
                  <Calendar className="h-8 w-8 text-white" />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-1">
                      Cohort Start Date:
                    </h3>
                    <p className="text-xl md:text-2xl font-bold text-white">
                      29th June 2025
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all">
                  <Clock className="h-8 w-8 text-white" />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-1">
                      Course Duration:
                    </h3>
                    <p className="text-white/90">
                      4-day intensive training (32 hours)
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all">
                  <Video className="h-8 w-8 text-white" />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-1">
                      Learning Format:
                    </h3>
                    <p className="text-white/90">
                      Live virtual training delivered via Zoom
                    </p>
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
