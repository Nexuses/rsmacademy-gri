import React, { useState } from "react";
import {
  Check,
  ChevronDown,
  BookOpen,
  BookText,
  ShieldCheck,
  Target,
  X,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { sendEnrollmentEmail } from "../utils/email";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  enrollmentType: string;
  organizationName: string;
};

const CourseAgenda = () => {
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);
  const [showSignup, setShowSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const { register, handleSubmit, reset, watch } = useForm<FormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      enrollmentType: "individual",
      organizationName: "",
    },
  });

  const enrollmentType = watch("enrollmentType");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setSubmitStatus(null);

    try {
      const success = await sendEnrollmentEmail({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        enrollmentType: data.enrollmentType,
        organizationName: data.organizationName,
      });

      if (success) {
        setSubmitStatus({
          success: true,
          message: "Enrollment successful! Check your email for confirmation.",
        });
        // Reset form after successful submission
        reset();
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
              Advance your sustainability career or empower your organization
              through globally recognized GRI Certification. Connect with GRI
              Certified Trainers and industry experts, build ESG capabilities,
              and take the lead in responsible reporting.
            </p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-3/5 p-6 md:p-8">
          <button
            onClick={() => setShowSignup(false)}
            className="absolute right-4 top-4 text-mediumGray hover:text-darkGray transition-colors"
            type="button"
          >
            <X className="h-6 w-6" />
          </button>

          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-navy">
              Ready to Enroll?
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

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-darkGray mb-1"
                >
                  Full Name*
                </label>
                <input
                  id="fullName"
                  type="text"
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                  {...register("fullName", { required: true })}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-darkGray mb-1"
                >
                  Email Address*
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your email"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-darkGray mb-1"
                >
                  Phone Number*
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                  {...register("phone", { required: true })}
                />
              </div>
              <div>
                <label
                  htmlFor="enrollmentType"
                  className="block text-sm font-medium text-darkGray mb-1"
                >
                  Register as*
                </label>
                <select
                  id="enrollmentType"
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-800"
                  {...register("enrollmentType", { required: true })}
                >
                  <option value="individual">Individual</option>
                  <option value="business">Organization</option>
                </select>
              </div>
              {enrollmentType === "business" && (
                <div>
                  <label
                    htmlFor="organizationName"
                    className="block text-sm font-medium text-darkGray mb-1"
                  >
                    Organization Name*
                  </label>
                  <input
                    id="organizationName"
                    type="text"
                    className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your organization name"
                    {...register("organizationName", {
                      required: enrollmentType === "business",
                    })}
                  />
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 ${
                  loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
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

  const modules = [
    {
      day: "Day 1",
      title: "Introduction to Sustainability Reporting and the GRI Standards",
      icon: BookOpen,
      topics: [
        "Understand the concept and purpose of sustainability reporting",
        "Explore the role and mission of the Global Reporting Initiative (GRI)",
        "Learn why transparency in ESG performance matters to stakeholders and regulators",
        "Get familiar with key sustainability terms and the global reporting landscape",
      ],
    },
    {
      day: "Day 2",
      title: "Introduction to Sustainability Reporting and the GRI Standards",
      icon: BookText,
      topics: [
        "Dive deeper into the GRI Standards framework: Universal, Sector, and Topic Standards",
        "Learn how to apply reporting principles and define your reporting boundaries",
        "Conduct stakeholder engagement and identify organizational impacts",
        "Understand how to determine and prioritize material topics for reporting",
      ],
    },
    {
      day: "Day 3",
      title: "Reporting on Human Rights with the GRI Standards",
      icon: ShieldCheck,
      topics: [
        "Learn how to identify and address human rights issues through GRI disclosures",
        "Understand due diligence processes related to labor, equity, and social responsibility",
        "Explore GRI Standards related to human rights and their implementation",
        "Apply knowledge through case-based learning and real-world scenarios",
      ],
    },
    {
      day: "Day 4",
      title: "Integrating the SDGs into Sustainability Reporting",
      icon: Target,
      topics: [
        "Understand the United Nations Sustainable Development Goals (SDGs) and their relevance to business",
        "Learn how to link your sustainability efforts to the SDG framework",
        "Follow step-by-step guidance on integrating SDGs into GRI-based reporting",
        "Review reporting examples and case studies from organizations leading in SDG alignment",
      ],
    },
  ];

  return (
    <div className="pt-16 bg-white">
      <div className="container-padding">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Training Module Structure
          </h2>
          <p className="text-lg text-darkGray max-w-3xl mx-auto">
            This 4-day GRI Certified Training is designed to guide participants
            through the key pillars of sustainability reporting. Each day builds
            on foundational knowledge, helping you apply the GRI Standards
            effectively while aligning with international ESG expectations.
          </p>
        </div>

        <div className="space-y-4 mb-12 p-6 rounded-lg">
          {/* <h3 className="text-2xl font-bold mb-4">Courses in this program (4)</h3> */}

          {modules.map((module, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden border border-primary"
              onMouseEnter={() => setHoveredDay(module.day)}
              onMouseLeave={() => setHoveredDay(null)}
            >
              <div className="w-full flex justify-between items-center p-4 text-primary text-left">
                <div className="flex items-center">
                  {React.createElement(module.icon, {
                    className: "h-5 w-5 mr-3",
                  })}
                  <span className="text-lg font-medium">
                    {module.day}: {module.title}
                  </span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-500 ${
                    hoveredDay === module.day ? "transform rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`transition-all duration-700 ease-in-out overflow-hidden ${
                  hoveredDay === module.day
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 bg-white">
                  <ul className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <Check className="h-4 w-4 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span className="text-darkGray">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-navy text-white rounded-xl p-8 shadow-lg">
          <div className="md:flex justify-between items-center">
            <div className="pl-12">
              <h3 className="text-2xl font-bold mb-2">
                Register today to expand your expertise in <br />
                the field of Global Reporting Initiative
              </h3>
            </div>
            <div className="mt-6 md:mt-0">
              <button
                onClick={() => setShowSignup(true)}
                className="px-6 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-lg font-bold transition transform hover:scale-105 shadow-md"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {showSignup && <SignupModal />}
    </div>
  );
};

export default CourseAgenda;
