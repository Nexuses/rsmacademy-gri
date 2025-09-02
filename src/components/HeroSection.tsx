import {
  Calendar,
  Clock,
  Download,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Video,
  X,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CountdownTimer from "./CountdownTimer";
import { downloadBrochure } from "../utils/download";
import { sendEnrollmentEmail } from "../utils/email";
import { useI18n } from "../utils/i18n";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  enrollmentType: string;
  organizationName: string;
};

const HeroSection = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const { t, language } = useI18n();
  const shareTitle = t('hero_title');

  const videoPath = "/cover-video-2.mp4";

  const shareLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareTitle)}`,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: `mailto:?subject=${encodeURIComponent(
        shareTitle
      )}&body=${encodeURIComponent(shareUrl)}`,
    },
  ];

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
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-darkGray mb-1"
                >
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-darkGray mb-1"
                >
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
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-darkGray mb-1"
                >
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
                <label
                  htmlFor="enrollmentType"
                  className="block text-sm font-medium text-darkGray mb-1"
                >
                  {t('form_register_as')}
                </label>
                <select
                  id="enrollmentType"
                  className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-800"
                  {...register("enrollmentType", { required: true })}
                >
                  <option value="individual">{t('form_individual')}</option>
                  <option value="business">{t('form_org')}</option>
                </select>
              </div>
              {enrollmentType === "business" && (
                <div>
                  <label
                    htmlFor="organizationName"
                    className="block text-sm font-medium text-darkGray mb-1"
                  >
                    {t('form_org_name')}
                  </label>
                  <input
                    id="organizationName"
                    type="text"
                    className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder={language === 'ar' ? "اكتب اسم المنشأة" : "Enter your organization name"}
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
    <>
      <div className="relative overflow-hidden bg-gradient-to-r from-navy to-primary text-white">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src={videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="container-padding pt-32 pb-16 md:pt-40 md:pb-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 md:pr-12 mb-10 md:mb-0">
              <div className="inline-block px-3 py-1 bg-primary text-white rounded-full text-sm font-semibold mb-4 animate-pulse">
                {t('hero_limited_seats')}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                {t('hero_title')}
              </h1>
              <div className="flex flex-wrap items-center text-xl mb-8">
                <div className="flex items-center mr-6 mb-2">
                  <Calendar className="h-6 w-6 mr-2" />
                  <span>{t('hero_date')}</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Clock className="h-6 w-6 mr-2" />
                  <span>{t('hero_time')}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Video className="h-6 w-6 mr-2" />
                  <span>{t('hero_mode')}</span>
                </div>
              </div>

              <p className="text-lg mb-8 text-white">
                {t('hero_desc')}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://rsmacademy-sa.com/courses/40"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-white rounded-lg font-bold transition transform hover:scale-105 shadow-lg text-lg inline-block"
                >
                  {t('hero_enroll_now')}
                </a>
                <button
                  onClick={downloadBrochure}
                  className="px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white text-white rounded-lg font-bold transition flex items-center gap-2 text-lg"
                >
                  <Download className="h-5 w-5" />
                  {t('hero_download_brochure')}
                </button>
              </div>
            </div>

            <div className="md:w-2/5">
              {/* Share buttons positioned above the card */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-3 bg-navy/40 backdrop-blur-sm rounded-full px-5 py-3 shadow-md">
                  <div className="flex items-center mr-2">
                    <Share2 className="h-6 w-6 mr-2" />
                    <span className="text-base font-medium">{t('nav_share')}</span>
                  </div>
                  {shareLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 hover:bg-white/20 rounded-full transition-colors"
                      title={`Share on ${link.name}`}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(link.url, "_blank", "width=600,height=400");
                      }}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-navy/30 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
                <CountdownTimer targetDate="2025-09-07T17:00:00+03:00" />
                <div className="text-center mt-6">
                  <p className="text-white mb-4">
                    {language === 'ar' ? 'سارع بالحجز قبل إغلاق التسجيل' : 'Secure your spot before registration closes'}
                  </p>
                  <a
                    href="https://rsmacademy-sa.com/courses/40"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-10 py-5 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold transition transform hover:scale-105 shadow-lg text-xl inline-block text-center"
                  >
                    {t('hero_reserve_seat')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showSignup && <SignupModal />}
      </div>
    </>
  );
};

export default HeroSection;
