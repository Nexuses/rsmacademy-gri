import React, { useState, useEffect } from 'react';
import { Menu, X, Award, ShoppingCart, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    } py-4`}>
      <div className="container mx-auto px-4">
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
              <a href="#" className="text-gray-700 hover:text-green-700">About Us</a>
            </div>
            <a href="#" className="text-gray-700 hover:text-green-700">Courses</a>
            <a href="#" className="text-gray-700 hover:text-green-700">Live Courses</a>
            <a href="#" className="text-gray-700 hover:text-green-700">Recorded Courses</a>
            <a href="#" className="text-gray-700 hover:text-green-700">Corporate Training</a>
            <a href="#" className="text-gray-700 hover:text-green-700">Contact Us</a>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-green-700">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-green-700">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button>
              <img 
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg" 
                alt="Profile" 
                className="h-8 w-8 rounded-full object-cover"
              />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800"
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
              <a href="#" className="text-gray-800 hover:text-green-700">About Us</a>
              <a href="#" className="text-gray-800 hover:text-green-700">Courses</a>
              <a href="#" className="text-gray-800 hover:text-green-700">Live Courses</a>
              <a href="#" className="text-gray-800 hover:text-green-700">Recorded Courses</a>
              <a href="#" className="text-gray-800 hover:text-green-700">Corporate Training</a>
              <a href="#" className="text-gray-800 hover:text-green-700">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;