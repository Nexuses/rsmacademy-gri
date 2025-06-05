import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Search, User, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    if (!isAboutDropdownOpen) {
      setIsCartOpen(false);
    }
  };

  const toggleCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCartOpen(!isCartOpen);
    if (!isCartOpen) {
      setIsAboutDropdownOpen(false);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsAboutDropdownOpen(false);
      setIsCartOpen(false);
    };

    if (isAboutDropdownOpen || isCartOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isAboutDropdownOpen, isCartOpen]);

  // Stop propagation to prevent dropdown from closing when clicking inside
  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      } py-6`}
    >
      <div className="container-padding">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/rsmglobal/image/fetch/t_default/f_auto/q_auto/https://www.rsm.global/profiles/rsm_global_platform/themes/rsm_global_platform_2022/images/logo@2x.png"
              alt="RSM Logo"
              className="h-8"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
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
                <div
                  className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-20"
                  onClick={handleDropdownClick}
                >
                  <a
                    href="https://rsmacademy-sa.com/foreword"
                    target="_blank"
                    className="block px-4 py-2 text-darkGray hover:bg-gray-100"
                  >
                    Foreword
                  </a>
                  <a
                    href="https://rsmacademy-sa.com/vision"
                    target="_blank"
                    className="block px-4 py-2 text-darkGray hover:bg-gray-100"
                  >
                    Vision
                  </a>
                  <a
                    href="https://rsmacademy-sa.com/mission"
                    target="_blank"
                    className="block px-4 py-2 text-darkGray hover:bg-gray-100"
                  >
                    Mission
                  </a>
                  <a
                    href="https://rsmacademy-sa.com/objectives"
                    target="_blank"
                    className="block px-4 py-2 text-darkGray hover:bg-gray-100"
                  >
                    Objectives
                  </a>
                  <a
                    href="https://rsmacademy-sa.com/core_values"
                    target="_blank"
                    className="block px-4 py-2 text-darkGray hover:bg-gray-100"
                  >
                    Core Values
                  </a>
                </div>
              )}
            </div>
            <a
              href="https://rsmacademy-sa.com/courses"
              target="_blank"
              className="text-darkGray hover:text-primary"
            >
              Courses
            </a>
            <a
              href="https://rsmacademy-sa.com/courses/online"
              target="_blank"
              className="text-darkGray hover:text-primary"
            >
              Live Courses
            </a>
            <a
              href="https://rsmacademy-sa.com/courses/recorded"
              target="_blank"
              className="text-darkGray hover:text-primary"
            >
              Recorded Courses
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
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://rsmacademy-sa.com/courses/search/view" target="_blank">
              <button className="text-darkGray hover:text-primary">
                <Search className="h-5 w-5" />
              </button>
            </a>
            <div className="relative">
              <button 
                className="text-darkGray hover:text-primary"
                onClick={toggleCart}
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
              {isCartOpen && (
                <div 
                  className={`${
                    isMenuOpen ? "relative left-0 mt-2" : "absolute right-0 mt-2"
                  } w-64 bg-white shadow-lg rounded-lg py-4 z-20`}
                  onClick={handleDropdownClick}
                >
                  <div className="px-4 py-2 text-center">
                    <p className="text-darkGray">Your shopping bag is empty</p>
                  </div>
                </div>
              )}
            </div>
            <a href="https://rsmacademy-sa.com/login" target="_blank">
              <button className="text-darkGray hover:text-primary">
                <User className="h-5 w-5" />
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
              <a 
                href="https://rsmacademy-sa.com/courses" 
                target="_blank" 
                className="text-darkGray hover:text-primary"
              >
                Courses
              </a>
              <a 
                href="https://rsmacademy-sa.com/courses/online" 
                target="_blank" 
                className="text-darkGray hover:text-primary"
              >
                Live Courses
              </a>
              <a 
                href="https://rsmacademy-sa.com/courses/recorded" 
                target="_blank" 
                className="text-darkGray hover:text-primary"
              >
                Recorded Courses
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
                  href="https://rsmacademy-sa.com/courses/search/view" 
                  target="_blank"
                  className="flex items-center text-darkGray hover:text-primary"
                >
                  <Search className="h-5 w-5 mr-2" />
                  <span>Search</span>
                </a>
                <button 
                  className="flex items-center text-darkGray hover:text-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCart(e);
                  }}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  <span>Cart</span>
                </button>
                <a 
                  href="https://rsmacademy-sa.com/login" 
                  target="_blank"
                  className="flex items-center text-darkGray hover:text-primary"
                >
                  <User className="h-5 w-5 mr-2" />
                  <span>Login</span>
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
