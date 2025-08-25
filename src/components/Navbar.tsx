
import { useState, useEffect } from "react";
import { Menu, X, Search, User, ChevronDown, ShoppingBag } from "lucide-react";
import { useI18n } from "../utils/i18n";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Only for mobile
  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    if (!isAboutDropdownOpen) {
      setIsCoursesDropdownOpen(false);
    }
  };

  // Only for mobile
  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
    if (!isCoursesDropdownOpen) {
      setIsAboutDropdownOpen(false);
    }
  };

  

  // Close mobile dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsAboutDropdownOpen(false);
      setIsCoursesDropdownOpen(false);
    };

    if (isAboutDropdownOpen || isCoursesDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isAboutDropdownOpen, isCoursesDropdownOpen]);



  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      } py-4`}
    >
      <div className="container mx-auto px-4 sm:px-6 ">
        <div className="flex justify-between items-center">
          {/* Left side with logo and navigation */}
          <div className="flex items-center gap-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="https://rsmacademy-sa.com/" target="_blank">
                <img
                  src="https://res.cloudinary.com/rsmglobal/image/fetch/t_default/f_auto/q_auto/https://www.rsm.global/profiles/rsm_global_platform/themes/rsm_global_platform_2022/images/logo@2x.png"
                  alt="RSM Logo"
                  className="h-16"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <div className="relative group">
                <button
                  className="flex items-center text-darkGray hover:text-primary focus:outline-none peer text-lg font-medium"
                >
                  {t('nav_about_us')}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div
                  className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out"
                  style={{ transform: "translateY(20px)", top: "100%", paddingTop: '10px'}}
                >
                  <div className="py-6 px-6 space-y-6">
                    <a
                      href="https://rsmacademy-sa.com/foreword"
                      target="_blank"
                      className="block text-lg font-medium text-darkGray hover:text-primary border-b border-gray-200 pb-3"
                    >
                      {t('nav_about_foreword')}
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/vision"
                      target="_blank"
                      className="block text-lg font-medium text-darkGray hover:text-primary border-b border-gray-200 pb-3"
                    >
                      {t('nav_about_vision')}
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/mission"
                      target="_blank"
                      className="block text-lg font-medium text-darkGray hover:text-primary border-b border-gray-200 pb-3"
                    >
                      {t('nav_about_mission')}
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/objectives"
                      target="_blank"
                      className="block text-lg font-medium text-darkGray hover:text-primary border-b border-gray-200 pb-3"
                    >
                      {t('nav_about_objectives')}
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/core_values"
                      target="_blank"
                      className="block text-lg font-medium text-darkGray hover:text-primary"
                    >
                      {t('nav_about_core_values')}
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button
                  className="flex items-center text-darkGray hover:text-primary focus:outline-none peer text-lg font-medium"
                >
                  {t('nav_courses')}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div
                  className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out"
                  style={{ transform: "translateY(20px)", top: "100%", paddingTop: '10px'}}
                >
                  <div className="py-6 px-6 space-y-6">
                    <a
                      href="https://rsmacademy-sa.com/courses/online"
                      target="_blank"
                      className="block text-lg font-medium text-darkGray hover:text-primary border-b border-gray-200 pb-3"
                    >
                      {t('nav_courses_live')}
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/courses/recorded"
                      target="_blank"
                      className="block text-lg font-medium text-darkGray hover:text-primary"
                    >
                      {t('nav_courses_recorded')}
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <a
                  className="flex items-center text-darkGray hover:text-primary focus:outline-none peer text-lg font-medium"
                  href="https://rsmacademy-sa.com/corporate-training"
                  target="_blank"
                >
                  {t('nav_corporate_training')}
                  {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
                </a>
                {/* <div
                  className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out"
                  style={{ transform: "translateY(20px)", top: "100%", paddingTop: '10px'}}
                >
                  <div className="py-6 px-6 space-y-6">
                    <a
                      href="https://gri-training.rsmacademy-sa.co"
                      target="_blank"
                      className="block text-lg font-medium text-darkGray hover:text-primary"
                    >
                      GRI™ Training
                    </a>
                  </div>
                </div> */}
              </div>
              <a
                href="https://training-calendar.rsmacademy-sa.co/"
                target="_blank"
                className="text-darkGray hover:text-primary text-lg font-medium"
              >
                {t('nav_training_calendar')}
              </a>
              <a
                href="https://blog.rsmacademy-sa.com/"
                target="_blank"
                className="text-darkGray hover:text-primary text-lg font-medium"
              >
                {t('nav_blog')}
              </a>
              <a
                href="https://rsmacademy-sa.com/contact_us"
                target="_blank"
                className="text-darkGray hover:text-primary text-lg font-medium"
              >
                {t('nav_contact_us')}
              </a>
            </div>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="https://rsmacademy-sa.com/login" target="_blank" className="flex items-center text-darkGray hover:text-primary text-lg font-medium">
              <User className="h-5 w-5 mr-2" />
              <span>{t('nav_sign_in')}</span>
            </a>
            <div className="relative group flex items-center">
              <button 
                className="text-darkGray hover:text-primary flex items-center"
              >
                <ShoppingBag className="h-5 w-5" />
              </button>
              <div 
                className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-6 px-6 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out"
                style={{ transform: "translateY(20px)", top: '100%', paddingTop: '10px' }}
              >
                <p className="text-darkGray text-base">{t('bag_empty')}</p>
              </div>
            </div>
            <a href="https://rsmacademy-sa.com/courses/search/view" target="_blank" className="flex items-center">
              <button className="text-darkGray hover:text-primary flex items-center">
                <Search className="h-5 w-5" />
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <div>
                <button
                  className="flex items-center text-darkGray hover:text-primary focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleAboutDropdown();
                  }}
                >
                  {t('nav_about_us')}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isAboutDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href="https://rsmacademy-sa.com/foreword"
                      target="_blank"
                      className="block text-darkGray hover:text-primary"
                    >
                      {t('nav_about_foreword')}
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/vision"
                      target="_blank"
                      className="block text-darkGray hover:text-primary"
                    >
                      {t('nav_about_vision')}
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/mission"
                      target="_blank"
                      className="block text-darkGray hover:text-primary"
                    >
                      {t('nav_about_mission')}
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/objectives"
                      target="_blank"
                      className="block text-darkGray hover:text-primary"
                    >
                      {t('nav_about_objectives')}
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/core_values"
                      target="_blank"
                      className="block text-darkGray hover:text-primary"
                    >
                      {t('nav_about_core_values')}
                    </a>
                  </div>
                )}
              </div>
              <div>
                <button
                  className="flex items-center text-darkGray hover:text-primary focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCoursesDropdown();
                  }}
                >
                  {t('nav_courses')}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isCoursesDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href="https://rsmacademy-sa.com/courses/online"
                      target="_blank"
                      className="block text-darkGray hover:text-primary"
                    >
                      {t('nav_courses_live')}
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/courses/recorded"
                      target="_blank"
                      className="block text-darkGray hover:text-primary"
                    >
                      {t('nav_courses_recorded')}
                    </a>
                  </div>
                )}
              </div>
              <div>
                <a
                  href="https://rsmacademy-sa.com/corporate-training"
                  target="_blank"
                  className="text-darkGray hover:text-primary"
                >
                  {t('nav_corporate_training')}
                </a>
              </div>
              <a
                href="https://training-calendar.rsmacademy-sa.co/"
                target="_blank"
                className="text-darkGray hover:text-primary"
              >
                {t('nav_training_calendar')}
              </a>
              <a
                href="https://blog.rsmacademy-sa.com/"
                target="_blank"
                className="text-darkGray hover:text-primary"
              >
                {t('nav_blog')}
              </a>
              <a
                href="https://rsmacademy-sa.com/contact_us"
                target="_blank"
                className="text-darkGray hover:text-primary"
              >
                {t('nav_contact_us')}
              </a>
              <div className="border-t border-gray-200 pt-4 mt-2 flex flex-col space-y-4">
                <a
                  href="https://rsmacademy-sa.com/login"
                  target="_blank"
                  className="flex items-center text-darkGray hover:text-primary"
                >
                  <User className="h-5 w-5 mr-2" />
                  <span>{t('nav_sign_in')}</span>
                </a>
                <a
                  href="https://rsmacademy-sa.com/courses/search/view"
                  target="_blank"
                  className="flex items-center text-darkGray hover:text-primary"
                >
                  <Search className="h-5 w-5 mr-2" />
                  <span>{t('nav_search')}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
