import { useState } from "react";
import {  X, Calendar, Clock, Video, Download } from "lucide-react";
import { useForm } from "react-hook-form";
import { sendEnrollmentEmail } from "../utils/email";
import { downloadBrochure } from "../utils/download";
import { useI18n } from "../utils/i18n";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  enrollmentType: string;
  organizationName: string;
};

const RegistrationSection = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const { t, language } = useI18n();

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
          message: t('form_success'),
        });
        // Reset form after successful submission
        reset();
      } else {
        setSubmitStatus({
          success: false,
          message: t('form_failed'),
        });
      }
    } catch (error: unknown) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        success: false,
        message: t('form_unexpected'),
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
              {t('hero_title')}
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
            type="button"
          >
            <X className="h-6 w-6" />
          </button>

          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-navy">
              {t('form_ready_to_enroll')}
            </h2>
            <p className="text-darkGray mb-6">
              {t('form_enroll_cta')}
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
                <label htmlFor="fullName" className="block text-sm font-medium text-darkGray mb-1">
                  {t('form_full_name')}
                </label>
                <input
                  id="fullName"
                  type="text"
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder={language === 'ar' ? "اكتب اسمك الكامل" : "Enter your full name"}
                  {...register("fullName", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-darkGray mb-1">
                  {t('form_email')}
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder={language === 'ar' ? "اكتب بريدك الإلكتروني" : "Enter your email"}
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-darkGray mb-1">
                  {t('form_phone')}
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder={language === 'ar' ? "اكتب رقم هاتفك" : "Enter your phone number"}
                  {...register("phone", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="enrollmentType" className="block text-sm font-medium text-darkGray mb-1">
                  {t('form_register_as')}
                </label>
                <select
                  id="enrollmentType"
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  {...register("enrollmentType", { required: true })}
                >
                  <option value="individual">{t('form_individual')}</option>
                  <option value="business">{t('form_org')}</option>
                </select>
              </div>
              {enrollmentType === "business" && (
                <div>
                  <label htmlFor="organizationName" className="block text-sm font-medium text-darkGray mb-1">
                    {t('form_org_name')}
                  </label>
                  <input
                    id="organizationName"
                    type="text"
                    className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder={language === 'ar' ? "اكتب اسم المنشأة" : "Enter your organization name"}
                    {...register("organizationName", { 
                      required: enrollmentType === "business" 
                    })}
                  />
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 ${
                  loading
                    ? "bg-gray-400"
                    : "bg-green-600 hover:bg-green-700"
                } text-white rounded-lg font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex justify-center items-center`}
              >
                {loading ? t('form_processing') : t('form_register_now')}
              </button>
              <p className="text-xs md:text-sm text-mediumGray text-center">
                {t('form_terms')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-white" id="register">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gray-100 px-4 py-2 rounded-full mb-4">
            <span className="flex items-center justify-center w-5 h-5 bg-navy rounded-full mr-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" />
              </svg>
            </span>
            <span className="text-sm text-gray-800 font-medium">{t('reg_program_badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-2">{t('reg_title_line1')}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t('reg_title_line2')}</h3>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-700">
            {t('reg_intro')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {/* What You'll Gain Section - 2/3 width */}
          <div className="bg-white p-8 rounded-xl shadow-md md:col-span-2">
            <div className="flex items-center mb-6">
              {/* <CheckCircle className="h-6 w-6 text-primary mr-2" /> */}
              <h3 className="text-2xl font-bold text-navy">{t('reg_what_gain')}</h3>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Expert Access */}
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-green-100 rounded-full mr-3 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.95 7.95 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" fill="#047857" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-bold text-navy mb-1">{t('reg_gain_expert_title')}</h4>
                  <p className="text-sm text-gray-600">{t('reg_gain_expert_desc')}</p>
                </div>
              </div>

              {/* Official Certification */}
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-green-100 rounded-full mr-3 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.67-3.13 8.94-7 10.27-3.87-1.33-7-5.6-7-10.27V6.3l7-3.12zm-1 8.32l-3-3-1.4 1.4 4.4 4.4 8-8-1.4-1.4-6.6 6.6z" fill="#047857" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-bold text-navy mb-1">{t('reg_gain_official_title')}</h4>
                  <p className="text-sm text-gray-600">{t('reg_gain_official_desc')}</p>
                </div>
              </div>

              {/* Practical Learning */}
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-green-100 rounded-full mr-3 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6h16v2H4zm0 6h16v6H4z" fill="#047857" />
                    <path d="M2 4v16h20V4H2zm2 2h16v12H4V6z" fill="#047857" />
                    <path d="M6 13h5v2H6z" fill="#047857" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-bold text-navy mb-1">{t('reg_gain_practical_title')}</h4>
                  <p className="text-sm text-gray-600">{t('reg_gain_practical_desc')}</p>
                </div>
              </div>

              {/* Dual Accreditation */}
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-green-100 rounded-full mr-3 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zm0-14H7V3h10v1z" fill="#047857" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-bold text-navy mb-1">{t('reg_gain_dual_title')}</h4>
                  <p className="text-sm text-gray-600">{t('reg_gain_dual_desc')}</p>
                </div>
              </div>

              {/* Professional Network */}
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-green-100 rounded-full mr-3 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58C.48 14.9 0 15.62 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" fill="#047857" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-bold text-navy mb-1">{t('reg_gain_network_title')}</h4>
                  <p className="text-sm text-gray-600">{t('reg_gain_network_desc')}</p>
                </div>
              </div>

              {/* Career Advancement */}
              <div className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-green-100 rounded-full mr-3 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" fill="#047857" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-bold text-navy mb-1">{t('reg_gain_career_title')}</h4>
                  <p className="text-sm text-gray-600">{t('reg_gain_career_desc')}</p>
                </div>
              </div>
            </div>
            
            {/* Banner Image */}
            <div className="mt-8 flex justify-center bg-primary/10 rounded-lg p-4">
              <img 
                src="/small-banner.png" 
                alt="GRI Certified Training" 
                className="h-16 w-auto object-contain rounded-md shadow-sm" 
              />
            </div>
          </div>

          {/* Course Details - 1/3 width */}
          <div className="bg-navy text-white p-8 rounded-xl shadow-md">
            <div className="">
              <h3 className="text-2xl font-bold mb-6">{t('reg_course_details')}</h3>

              {/* Course Start Date */}
              <div className="flex items-center mb-10">
                <Calendar className="h-6 w-6 text-primary mr-4" />
                <div>
                  <h4 className="text-sm font-medium text-gray-300">{t('reg_course_start')}</h4>
                  <p className="text-xl font-bold">2nd - 11th November 2025</p>
                </div>
              </div>

              {/* Course Duration */}
              <div className="flex items-center mb-10">
                <Clock className="h-6 w-6 text-primary mr-4" />
                <div>
                  <h4 className="text-sm font-medium text-gray-300">{t('reg_course_duration')}</h4>
                  <p className="text-lg font-semibold">6-day program (24 hours)</p>
                </div>
              </div>

              {/* Learning Format */}
              <div className="flex items-center mb-10">
                <Video className="h-6 w-6 text-primary mr-4" />
                <div>
                  <h4 className="text-sm font-medium text-gray-300">{t('reg_learning_format')}</h4>
                  <p className="text-lg font-semibold">{t('reg_live_virtual')}</p>
                  <p className="text-sm text-gray-300">{t('reg_via_zoom')}</p>
                </div>
              </div>
            </div>

            {/* Enroll Now Button */}
            <a
              href="https://rsmacademy-sa.com/courses/45"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center"
            >
              {t('hero_enroll_now')}
              <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Download Brochure Button */}
            <button
              className="w-full mt-4 bg-transparent border border-white text-white py-3 px-6 rounded-lg font-medium text-lg transition-all hover:bg-white/10"
              type="button"
              onClick={downloadBrochure}
            >
              <Download className="mr-2 h-5 w-5 inline" />
              {t('hero_download_brochure')}
            </button>

          </div>
        </div>


      </div>
      {showSignup && <SignupModal />}
    </section>
  );
};

export default RegistrationSection;
