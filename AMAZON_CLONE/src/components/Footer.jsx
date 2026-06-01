// Footer Component - Professional Amazon-style footer
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-amazon-darkNav text-white border-t border-amazon-secNav">
      {/* Back to Top */}
      <div className="bg-amazon-darkNav text-center py-4 hover:bg-gray-800 cursor-pointer transition">
        <button
          onClick={scrollToTop}
          className="text-sm font-semibold hover:opacity-80 transition"
        >
          Back to Top
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 bg-amazon-secNav">
        <div className="max-w-7xl mx-auto px-4">
          {/* Footer Grid - Responsive Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {/* Section 1 - Get to Know Us */}
            <div>
              <h4 className="font-bold mb-4 text-sm text-white">Get to Know Us</h4>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  About Amazon
                </li>
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  Careers
                </li>
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  Press Releases
                </li>
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  Blog
                </li>
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  Amazon Science
                </li>
              </ul>
            </div>

            {/* Section 2 - Connect With Us */}
            <div>
              <h4 className="font-bold mb-4 text-sm text-white">Connect With Us</h4>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  Facebook
                </li>
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  Twitter
                </li>
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  Instagram
                </li>
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  LinkedIn
                </li>
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  YouTube
                </li>
              </ul>
            </div>

            {/* Section 3 - Make Money With Us */}
            <div>
              <h4 className="font-bold mb-4 text-sm text-white">Make Money With Us</h4>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  Sell on Amazon
                </li>
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  Sell Under Amazon Accelerator
                </li>
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  Protect & Build Your Brand
                </li>
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  Amazon Global Selling
                </li>
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  Become an Affiliate
                </li>
              </ul>
            </div>

            {/* Section 4 - Help & Settings */}
            <div>
              <h4 className="font-bold mb-4 text-sm text-white">Help & Settings</h4>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  Your Account
                </li>
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  Returns
                </li>
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  Contact Us
                </li>
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  Help Center
                </li>
                <li className="text-gray-300 hover:text-amazon-orange cursor-pointer transition duration-200">
                  Accessibility
                </li>
              </ul>
            </div>

            {/* Section 5 - Mobile App (hidden on very small screens) */}
            <div className="hidden sm:block">
              <h4 className="font-bold mb-4 text-sm text-white">Amazon App</h4>
              <div className="space-y-3">
                <p className="text-gray-300 text-xs">Download our app for better experience</p>
                <button className="w-full bg-amazon-orange text-amazon-text px-4 py-2 rounded font-semibold text-xs hover:bg-yellow-400 transition">
                  📱 Download App
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-amazon-darkNav py-6">
            {/* Logo and Copyright */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 text-xs">
              <div className="text-amazon-orange font-bold text-xl cursor-pointer hover:opacity-80 transition">
                amazon
                <span className="text-white">.in</span>
              </div>
              <div className="text-gray-400 text-center md:text-right">
                <p>© 1996-2024 Amazon.com, Inc. or its affiliates</p>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 text-xs text-gray-400">
              <a href="#" className="hover:text-amazon-orange transition">Privacy Notice</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-amazon-orange transition">Your Ads Privacy Choices</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-amazon-orange transition">Terms of Use</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-amazon-orange transition">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-amazon-darkNav py-3 px-4 text-center text-xs text-gray-400 border-t border-amazon-secNav">
        <p>Amazon Clone © 2024 - For Educational & Portfolio Demonstration Purposes Only</p>
      </div>
    </footer>
  );
};

export default Footer;
