import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#4338ca]" />
                <span className="text-gray-600">Koreatown Senior & Community Center</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#4338ca]" />
                <span className="text-gray-600">213-800-1588</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#4338ca]" />
                <span className="text-gray-600">kscctutoring@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-gray-600 hover:text-[#4338ca] transition-colors">
                About Us
              </a>
              <a href="/tutors" className="block text-gray-600 hover:text-[#4338ca] transition-colors">
                Become a Tutor
              </a>
              <a href="/schools" className="block text-gray-600 hover:text-[#4338ca] transition-colors">
                Upcoming Workshops
              </a>
              <a href="/contact" className="block text-gray-600 hover:text-[#4338ca] transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-600 hover:text-[#4338ca] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#4338ca] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#4338ca] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8 text-center">
          <p className="text-gray-500">
            © 2025 KSCC Nexel. Powered by Koreatown Senior and Community Center.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;