import React, { useState, useEffect } from "react";
import { Menu, X, Search, User, ChevronDown, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

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
      <div className="container-padding px-0">
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
                  About Us
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
                      Foreword
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/vision"
                      target="_blank"
                      className="block text-lg font-medium text-darkGray hover:text-primary border-b border-gray-200 pb-3"
                    >
                      Vision
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/mission"
                      target="_blank"
                      className="block text-lg font-medium text-darkGray hover:text-primary border-b border-gray-200 pb-3"
                    >
                      Mission
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/objectives"
                      target="_blank"
                      className="block text-lg font-medium text-darkGray hover:text-primary border-b border-gray-200 pb-3"
                    >
                      Objectives
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/core_values"
                      target="_blank"
                      className="block text-lg font-medium text-darkGray hover:text-primary"
                    >
                      Core Values
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button
                  className="flex items-center text-darkGray hover:text-primary focus:outline-none peer text-lg font-medium"
                >
                  Courses
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
                      Live Courses
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/courses/recorded"
                      target="_blank"
                      className="block text-lg font-medium text-darkGray hover:text-primary"
                    >
                      Recorded Courses
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="https://gri-training.rsmacademy-sa.co"
                target="_blank"
                className="text-darkGray hover:text-primary text-lg font-medium"
              >
                GRI™ Training
              </a>
              <a
                href="https://rsmacademy-sa.com/corporate-training"
                target="_blank"
                className="text-darkGray hover:text-primary text-lg font-medium"
              >
                Corporate Training
              </a>
              <a
                href="https://rsmacademy-sa.com/contact_us"
                target="_blank"
                className="text-darkGray hover:text-primary text-lg font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="https://rsmacademy-sa.com/login" target="_blank" className="flex items-center text-darkGray hover:text-primary text-lg font-medium">
              <User className="h-5 w-5 mr-2" />
              <span>Sign in</span>
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
                <p className="text-darkGray text-base">Your shopping bag is empty</p>
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
                  About Us
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isAboutDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href="https://rsmacademy-sa.com/foreword"
                      target="_blank"
                      className="block text-darkGray hover:text-primary"
                    >
                      Foreword
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/vision"
                      target="_blank"
                      className="block text-darkGray hover:text-primary"
                    >
                      Vision
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/mission"
                      target="_blank"
                      className="block text-darkGray hover:text-primary"
                    >
                      Mission
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/objectives"
                      target="_blank"
                      className="block text-darkGray hover:text-primary"
                    >
                      Objectives
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/core_values"
                      target="_blank"
                      className="block text-darkGray hover:text-primary"
                    >
                      Core Values
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
                  Courses
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isCoursesDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href="https://rsmacademy-sa.com/courses/online"
                      target="_blank"
                      className="block text-darkGray hover:text-primary"
                    >
                      Live Courses
                    </a>
                    <a
                      href="https://rsmacademy-sa.com/courses/recorded"
                      target="_blank"
                      className="block text-darkGray hover:text-primary"
                    >
                      Recorded Courses
                    </a>
                  </div>
                )}
              </div>
              <a 
                href="https://rsmacademy-sa.com/gri-training" 
                target="_blank" 
                className="text-darkGray hover:text-primary"
              >
                GRI™ Training
              </a>
              <a 
                href="https://rsmacademy-sa.com/corporate-training" 
                target="_blank" 
                className="text-darkGray hover:text-primary"
              >
                Corporate Training
              </a>
              <a 
                href="https://rsmacademy-sa.com/contact_us" 
                target="_blank" 
                className="text-darkGray hover:text-primary"
              >
                Contact Us
              </a>
              
              {/* Mobile action buttons */}
              <div className="flex items-center space-x-4 pt-2 border-t border-gray-100 mt-2">
                <a 
                  href="https://rsmacademy-sa.com/login" 
                  target="_blank"
                  className="flex items-center text-darkGray hover:text-primary"
                >
                  <User className="h-5 w-5 mr-2" />
                  <span>Sign in</span>
                </a>
                <div className="relative flex items-center">
                  <button 
                    className="flex items-center text-darkGray hover:text-primary"
                  >
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    <span>Cart</span>
                  </button>
                </div>
                <a 
                  href="https://rsmacademy-sa.com/courses/search/view" 
                  target="_blank"
                  className="flex items-center text-darkGray hover:text-primary"
                >
                  <Search className="h-5 w-5 mr-2" />
                  <span>Search</span>
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
