import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6 mt-10">
      <div className="container mx-auto px-6">
        {/* Top Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-10">
          {/* Branding */}
          <div>
            <h2 className="text-xl font-bold mb-4">MarketingPro</h2>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h2 className="text-xl font-bold mb-4">Help</h2>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Customer Support</a></li>
              <li><a href="#" className="hover:text-white">Delivery Details</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-xl font-bold mb-4">Resources</h2>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Free eBooks</a></li>
              <li><a href="#" className="hover:text-white">Marketing Blog</a></li>
              <li><a href="#" className="hover:text-white">Video Tutorials</a></li>
              <li><a href="#" className="hover:text-white">YouTube Playlist</a></li>
            </ul>
          </div>

          {/* Extra Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Extra Links</h2>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Newsletter</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
              <li><a href="#" className="hover:text-white">Support Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6">
          <div className="flex gap-4 mb-4 md:mb-0 text-gray-400 text-xl">
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaGithub className="hover:text-white" /></a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-gray-300 justify-center md:justify-end">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
          <p className="text-xs text-gray-400 text-center md:text-right mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} MarketingPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
