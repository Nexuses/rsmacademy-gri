import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type SupportedLanguage = "en" | "ar";

type TranslationsDict = Record<string, Record<SupportedLanguage, string>>;

const translations: TranslationsDict = {
  // Navbar
  nav_home: { en: "Home", ar: "الرئيسية" },
  nav_about_us: { en: "About Us", ar: "عنّا" },
  nav_courses: { en: "Courses", ar: "البرامج التدريبية" },
  nav_corporate_training: { en: "Corporate Training", ar: "تدريب المؤسسات" },
  nav_training_calendar: { en: "Training Calendar", ar: "التقويم" },
  nav_blog: { en: "Blog", ar: "المدونة" },
  nav_gallery: { en: "Gallery", ar: "المعرض" },
  nav_contact_us: { en: "Contact Us", ar: "اتصل بنا" },
  nav_sign_in: { en: "Sign in", ar: "تسجيل الدخول" },
  nav_search: { en: "Search", ar: "بحث" },
  nav_share: { en: "Share", ar: "مشاركة" },
  bag_empty: { en: "Your shopping bag is empty", ar: "سلة التسوق فارغة" },
  nav_about_foreword: { en: "Foreword", ar: "المقدمة" },
  nav_about_vision: { en: "Vision", ar: "الرؤية" },
  nav_about_mission: { en: "Mission", ar: "الرسالة" },
  nav_about_objectives: { en: "Objectives", ar: "الأهداف" },
  nav_about_core_values: { en: "Core Values", ar: "القيم الأساسية" },
  nav_courses_live: { en: "Live Courses", ar: "دورات مباشرة" },
  nav_courses_recorded: { en: "Recorded Courses", ar: "دورات مسجلة" },

  // Hero
  hero_limited_seats: { en: "Limited Seats Available", ar: "أماكن محدودة متاحة" },
  hero_title: { en: "GRI Certified Sustainability Professional Training", ar: "تدريب مهني معتمد من GRI في الاستدامة" },
  hero_date: { en: "19th Oct - 28th Oct 2025", ar: "19 - 28 أكتوبر 2025" },
  hero_time: { en: "5:00 PM - 9:00 PM KSA", ar: "5:00 مساءً - 9:00 مساءً بتوقيت السعودية" },
  hero_mode: { en: "Mode: Virtual", ar: "النمط: افتراضي" },
  hero_desc: {
    en: "Become a GRI Certified Sustainability Professional and lead the way in transparent, impactful, and globally aligned sustainability reporting. This hands-on training is designed to equip professionals with in-demand ESG skills and prepare them for official GRI certification.",
    ar: "كن محترفًا معتمدًا من GRI في الاستدامة وقُد منظمتك نحو تقارير شفافة وذات أثر ومتوافقة عالميًا. يزودك هذا التدريب العملي بمهارات ESG المطلوبة ويهيئك للاعتماد الرسمي من GRI.",
  },
  hero_enroll_now: { en: "Enroll Now", ar: "سجّل الآن" },
  hero_download_brochure: { en: "Download Brochure", ar: "تحميل الكتيب" },
  hero_reserve_seat: { en: "Reserve Your Seat", ar: "احجز مقعدك" },

  // Forms
  form_ready_to_enroll: { en: "Ready to Enroll?", ar: "هل أنت مستعد للتسجيل؟" },
  form_enroll_cta: { en: "Enroll now and take the first step toward GRI Certification.", ar: "سجّل الآن واتخذ الخطوة الأولى نحو اعتماد GRI." },
  form_full_name: { en: "Full Name*", ar: "الاسم الكامل*" },
  form_email: { en: "Email Address*", ar: "البريد الإلكتروني*" },
  form_phone: { en: "Phone Number*", ar: "رقم الهاتف*" },
  form_register_as: { en: "Register as*", ar: "سجّل كـ*" },
  form_individual: { en: "Individual", ar: "فرد" },
  form_org: { en: "Organization", ar: "منشأة" },
  form_org_name: { en: "Organization Name*", ar: "اسم المنشأة*" },
  form_register_now: { en: "Register Now", ar: "أكمِل التسجيل" },
  form_processing: { en: "Processing...", ar: "جاري المعالجة..." },
  form_terms: { en: "By signing up, you agree to our Terms of Service and Privacy Policy", ar: "بتسجيلك، فإنك توافق على شروط الخدمة وسياسة الخصوصية" },
  form_success: { en: "Enrollment successful! Check your email for confirmation.", ar: "تم التسجيل بنجاح! تحقق من بريدك الإلكتروني للتأكيد." },
  form_failed: { en: "Failed to process enrollment. Please try again.", ar: "تعذر معالجة التسجيل. يرجى المحاولة مرة أخرى." },
  form_unexpected: { en: "An unexpected error occurred. Please try again later.", ar: "حدث خطأ غير متوقع. يرجى المحاولة لاحقًا." },

  // Registration section
  reg_program_badge: { en: "Professional Certification Program", ar: "برنامج الشهادة المهنية" },
  reg_title_line1: { en: "GRI Certified Sustainability", ar: "الاستدامة المعتمدة من GRI" },
  reg_title_line2: { en: "Professional Training", ar: "تدريب مهني" },
  reg_intro: {
    en: "Master essential sustainability reporting skills to drive measurable impact and stay ahead in today's ESG-driven world. Learn from certified experts with hands-on experience using GRI Standards.",
    ar: "أتقن مهارات إعداد تقارير الاستدامة لإحداث أثر ملموس والتقدم في عالم تقوده معايير ESG. تعلّم من خبراء معتمدين وذوي خبرة عملية في استخدام معايير GRI.",
  },
  reg_what_gain: { en: "What You'll Gain", ar: "ماذا ستكتسب" },
  reg_course_details: { en: "Course Details", ar: "تفاصيل الدورة" },
  reg_course_start: { en: "Course Start Date", ar: "تاريخ بدء الدورة" },
  reg_course_duration: { en: "Course Duration", ar: "مدة الدورة" },
  reg_learning_format: { en: "Learning Format", ar: "صيغة التعلم" },
  reg_live_virtual: { en: "Live Virtual Training", ar: "تدريب افتراضي مباشر" },
  reg_via_zoom: { en: "Delivered via Zoom", ar: "يتم عبر منصة زووم" },

  // Course Overview
  overview_title: { en: "Course Overview", ar: "نظرة عامة على الدورة" },
  overview_learn_title: { en: "What You'll Learn", ar: "ما الذي ستتعلمه" },
  overview_adv_title: { en: "Course Advantages", ar: "مزايا الدورة" },
  overview_intro_1: {
    en: "Our GRI Certified Sustainability Professional Training provides participants with essential tools and internationally recognized methodologies to enhance their sustainability reporting practices.",
    ar: "يوفر تدريب GRI المهني المعتمد للمشاركين أدوات أساسية ومنهجيات معترفًا بها دوليًا لتعزيز ممارسات إعداد تقارير الاستدامة لديهم.",
  },
  overview_learn_desc: {
    en: "This comprehensive training equips participants with the knowledge and skills to effectively understand and apply sustainability reporting using the GRI Standards.",
    ar: "يُكسب هذا التدريب الشامل المشاركين المعرفة والمهارات اللازمة لفهم وتطبيق تقارير الاستدامة باستخدام معايير GRI بكفاءة.",
  },
  overview_adv_desc: {
    en: "By completing this training, professionals gain the expertise needed to lead their organizations toward more transparent, responsible, and sustainable business strategies.",
    ar: "عند إكمال هذا التدريب، يكتسب المختصون الخبرة اللازمة لقيادة مؤسساتهم نحو استراتيجيات أعمال أكثر شفافية ومسؤولية واستدامة.",
  },
  overview_learn_item_1: { en: "Comprehensive understanding of GRI Standards structure", ar: "فهم شامل لبنية معايير GRI" },
  overview_learn_item_2: { en: "Application of GRI reporting principles", ar: "تطبيق مبادئ إعداد التقارير وفق GRI" },
  overview_learn_item_3: { en: "Human rights reporting in accordance with GRI", ar: "إعداد تقارير حقوق الإنسان وفق معايير GRI" },
  overview_learn_item_4: { en: "Aligning sustainability reporting with UN SDGs", ar: "مواءمة تقارير الاستدامة مع أهداف التنمية المستدامة للأمم المتحدة" },
  overview_learn_item_5: { en: "Improving quality and credibility of reports", ar: "تحسين جودة ومصداقية التقارير" },
  overview_learn_item_6: { en: "Preparation for GRI Certification Exam", ar: "الاستعداد لاختبار اعتماد GRI" },
  overview_adv_item_1: { en: "Official GRI Certification enhancing professional credibility", ar: "اعتماد GRI الرسمي يعزّز المصداقية المهنية" },
  overview_adv_item_2: { en: "Hands-on, practical training with real-world case studies", ar: "تدريب عملي تطبيقي مع دراسات حالة واقعية" },
  overview_adv_item_3: { en: "Led by a GRI Certified Trainer with extensive experience", ar: "بقيادة مدرّب معتمد من GRI وذو خبرة واسعة" },
  overview_adv_item_4: { en: "Alignment with global best practices in sustainability", ar: "مواءمة مع أفضل الممارسات العالمية في الاستدامة" },
  overview_adv_item_5: { en: "Applicable knowledge across diverse industries", ar: "معرفة قابلة للتطبيق عبر صناعات متنوعة" },
  overview_adv_item_6: { en: "Exclusive Q&A with ESG Expert Kareem Abu Eid", ar: "جلسة أسئلة وأجوبة حصرية مع خبير ESG كريم أبو عيد" },

  // Registration: What You'll Gain items
  reg_gain_expert_title: { en: "Expert Access", ar: "وصول إلى الخبراء" },
  reg_gain_expert_desc: { en: "Direct access to GRI Certified Trainers with global and regional ESG expertise", ar: "وصول مباشر إلى مدرّبين معتمدين من GRI بخبرة عالمية وإقليمية في ESG" },
  reg_gain_official_title: { en: "Official Certification", ar: "اعتماد رسمي" },
  reg_gain_official_desc: { en: "Official GRI training materials and eligibility for the GRI Certification Exam", ar: "مواد تدريب GRI الرسمية والأهلية لاختبار الاعتماد" },
  reg_gain_practical_title: { en: "Practical Learning", ar: "تعلّم تطبيقي" },
  reg_gain_practical_desc: { en: "Case studies, interactive sessions, and real-world examples", ar: "دراسات حالة وجلسات تفاعلية وأمثلة من الواقع" },
  reg_gain_dual_title: { en: "Dual Accreditation", ar: "اعتماد مزدوج" },
  reg_gain_dual_desc: { en: "Accredited certificate from both GRI and RSM Saudi Academy", ar: "شهادة معتمدة من كلٍ من GRI وأكاديمية RSM السعودية" },
  reg_gain_network_title: { en: "Professional Network", ar: "شبكة مهنية" },
  reg_gain_network_desc: { en: "Post-training support and opportunities to connect with ESG professionals", ar: "دعم بعد التدريب وفرص للتواصل مع محترفي ESG" },
  reg_gain_career_title: { en: "Career Advancement", ar: "تقدّم مهني" },
  reg_gain_career_desc: { en: "Enhance your profile with globally recognized sustainability credentials", ar: "عزّز ملفك المهني باعتمادات استدامة معترف بها عالميًا" },

  // Course Highlights
  ch_vocational_title: { en: "Vocational Learning", ar: "تعلم مهني" },
  ch_vocational_desc: { en: "Practical, job-ready skills through real case studies and exercises.", ar: "مهارات عملية جاهزة للعمل عبر دراسات حالة وتمارين واقعية." },
  ch_interactive_title: { en: "Interactive Sessions", ar: "جلسات تفاعلية" },
  ch_interactive_desc: { en: "Live, expert-led discussions to deepen your understanding.", ar: "نقاشات مباشرة يقودها خبراء لتعميق فهمك." },
  ch_partner_title: { en: "GRI Certified Training Partner", ar: "شريك تدريب معتمد من GRI" },
  ch_partner_desc: { en: "Delivered in collaboration with the Global Reporting Initiative.", ar: "يُقدَّم بالتعاون مع المبادرة العالمية لإعداد التقارير (GRI)." },
  ch_dual_title: { en: "Dual Certification", ar: "اعتماد مزدوج" },
  ch_dual_desc: { en: "Earn recognized certificates from GRI and RSM Saudi Academy.", ar: "احصل على شهادات معترف بها من GRI وأكاديمية RSM السعودية." },
  ch_qa_title: { en: "Exclusive Q&A with ESG Expert", ar: "جلسة أسئلة وأجوبة حصرية مع خبير ESG" },
  ch_qa_desc: { en: "Interact with regional sustainability leadership.", ar: "تفاعل مع قيادات الاستدامة في المنطقة." },

  // Learning Approach
  la_heading: { en: "Empower Your ESG Journey with Practical Learning", ar: "عزّز رحلتك في ESG عبر تعلم عملي" },
  la_subheading: { en: "Build the skills you need to lead sustainability reporting in your organization. This training offers practical, easy-to-apply knowledge designed for real-world impact.", ar: "ابنِ المهارات اللازمة لقيادة تقارير الاستدامة في مؤسستك. يقدّم هذا التدريب معرفة عملية وسهلة التطبيق لتحقيق أثر واقعي." },
  la_video_heading: { en: "Discover the GRI Standards: Watch the Training Overview", ar: "تعرّف على معايير GRI: شاهد نظرة عامة على التدريب" },
  la_play_aria: { en: "Play video", ar: "تشغيل الفيديو" },
  la_why_heading: { en: "Why This Training Matters", ar: "لماذا هذا التدريب مهم" },
  la_why_paragraph: { en: "As global demand for transparency and accountability rises, sustainability reporting has become a critical skill across all industries. The GRI Standards are the world's most widely used framework, helping professionals deliver trusted, impactful ESG reports that meet stakeholder expectations and regulatory demands.", ar: "مع تزايد الطلب العالمي على الشفافية والمساءلة، أصبحت تقارير الاستدامة مهارة أساسية عبر جميع القطاعات. تُعد معايير GRI الإطار الأكثر استخدامًا عالميًا، إذ تساعد المختصين على تقديم تقارير ESG موثوقة وذات أثر تلبي توقعات أصحاب المصلحة والمتطلبات التنظيمية." },
  la_metric_countries: { en: "Countries Using GRI", ar: "دول تستخدم GRI" },
  la_metric_l250: { en: "Of the World's Largest 250 Companies", ar: "من أكبر 250 شركة في العالم" },
  la_metric_orgs: { en: "Organizations Reporting with GRI", ar: "منظمات تُعد تقارير وفق GRI" },

  // Trainer Profile
  tp_heading: { en: "Learn from GRI Certified Trainers", ar: "تعلّم على يد مدرّبين معتمدين من GRI" },
  tp_paragraph: { en: "Our training is delivered by GRI Certified Trainers with extensive experience in sustainability, ESG strategy, and reporting. With backgrounds spanning architecture, engineering, consultancy, and climate-risk management, they bring a wealth of knowledge and real-world expertise to the sessions.", ar: "يقدّم تدريبنا مدرّبون معتمدون من GRI يتمتعون بخبرة واسعة في الاستدامة واستراتيجيات ESG وإعداد التقارير. وبخلفيات تمتد إلى العمارة والهندسة والاستشارات وإدارة مخاطر المناخ، يجلبون معرفة ثرية وخبرة عملية إلى الجلسات." },
  tp_practical_insights: { en: "Practical insights", ar: "رؤى عملية" },
  tp_practical_insights_desc: { en: "Guidance from professionals who’ve led ESG transformations across industries.", ar: "إرشاد من مختصين قادوا تحولات ESG عبر قطاعات متعددة." },
  tp_hands_on: { en: "Hands-on learning", ar: "تعلّم تطبيقي" },
  tp_hands_on_desc: { en: "Real projects, case studies, and global best practices.", ar: "مشروعات حقيقية ودراسات حالة وأفضل الممارسات العالمية." },
  tp_expert_guidance: { en: "Expert-led guidance", ar: "إرشاد يقوده خبراء" },
  tp_expert_guidance_desc: { en: "On GRI Standards, stakeholder engagement, and materiality assessments.", ar: "حول معايير GRI وإشراك أصحاب المصلحة وتقييمات الأهمية النسبية." },
  tp_highlight: { en: "Special Highlight", ar: "لمحة مميّزة" },
  tp_highlight_desc: { en: "An exclusive Q&A with a senior ESG leader sharing perspectives on sustainability challenges and best practices in the MENA region.", ar: "جلسة أسئلة وأجوبة حصرية مع قيادي في ESG يشارك رؤى حول تحديات الاستدامة وأفضل الممارسات في منطقة الشرق الأوسط وشمال أفريقيا." },

  // Countdown Timer
  cd_registration_closes: { en: "Registration Closes In:", ar: "يغلق التسجيل خلال:" },
  cd_days: { en: "Days", ar: "أيام" },
  cd_hours: { en: "Hours", ar: "ساعات" },
  cd_minutes: { en: "Minutes", ar: "دقائق" },
  cd_seconds: { en: "Seconds", ar: "ثوانٍ" },

  // Footer
  footer_policies: { en: "National Center Policies", ar: "سياسات المركز الوطني" },
  footer_guidelines: { en: "Guidelines", ar: "إرشادات" },
  footer_support: { en: "Technical Support", ar: "الدعم الفني" },
  footer_accreditation: { en: "National Center for E-Learning Accreditation", ar: "الاعتماد من المركز الوطني للتعلم الإلكتروني" },
  footer_attendance: { en: "Attendance Policy", ar: "سياسة الحضور" },
  footer_privacy: { en: "Privacy and Usage Policy", ar: "سياسة الخصوصية والاستخدام" },
  footer_support_policy: { en: "Technical and Educational Support Policy", ar: "سياسة الدعم الفني والتعليمي" },
  footer_integrity: { en: "Academic Integrity", ar: "النزاهة الأكاديمية" },
  footer_ip_rights: { en: "Principles of Intellectual Property Rights and Copyrights", ar: "مبادئ حقوق الملكية الفكرية وحقوق النشر" },
  footer_org_structure: { en: "Organizational Structure Document & Roles and Responsibilities", ar: "الهيكل التنظيمي والأدوار والمسؤوليات" },
  footer_student_guide: { en: "Trainee's Guide", ar: "دليل المتدرب" },
  footer_guidelines_trainers: { en: "Guidelines for Trainers and Trainees", ar: "إرشادات للمدربين والمتدربين" },
  footer_beneficiary_survey: { en: "Beneficiary Satisfaction Measurement Questionnaire", ar: "استبيان قياس رضا المستفيدين" },
  footer_complaints: { en: "Complaints and Suggestions", ar: "الشكاوى والاقتراحات" },

  // FAQ
  faq_title: { en: "Frequently Asked Questions", ar: "الأسئلة الشائعة" },
  faq_intro: { en: "Get answers to common questions about our GRI Certified Sustainability Professional Training.", ar: "اطّلع على إجابات لأبرز الأسئلة حول تدريب GRI المهني المعتمد." },
  faq_contact_cta: { en: "Don't see your question answered here?", ar: "لم تجد إجابتك هنا؟" },
  contact_us: { en: "Contact Us", ar: "تواصل معنا" },
};

type I18nContextType = {
  language: SupportedLanguage;
  isRtl: boolean;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: keyof typeof translations) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<SupportedLanguage>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (saved === "ar" || saved === "en") return saved;
    return "en";
  });

  const isRtl = language === "ar";

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
    }
  };

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", language);
    html.setAttribute("dir", isRtl ? "rtl" : "ltr");
    if (isRtl) {
      html.classList.add("rtl");
    } else {
      html.classList.remove("rtl");
    }
  }, [language, isRtl]);

  const t = useMemo(() => {
    return (key: keyof typeof translations) => {
      const entry = translations[key];
      if (!entry) return key as string;
      return entry[language] ?? entry.en;
    };
  }, [language]);

  const value: I18nContextType = { language, isRtl, setLanguage, t };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};


