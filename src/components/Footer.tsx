import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">RSM Saudi Academy</h3>
            <p className="mb-4 text-green-100">
              RSM Saudi Academy provides world-class professional training and certification programs, 
              helping individuals and organizations develop the skills needed for sustainable success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-200 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-green-200 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-green-200 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-green-200 transition">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition">About RSM</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition">Training Programs</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition">Our Trainers</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition">Blog & Resources</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>Riyadh Business District, Saudi Arabia</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>+966 00 000 0000</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>training@rsmsaudi.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-green-200 mb-4 md:mb-0">
            © 2025 RSM Saudi Academy. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-green-200">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;