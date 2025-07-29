import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'STUDENTS', path: '/families' },
    { name: 'TUTORS', path: '/tutors' },
    { name: 'WORKSHOPS', path: '/schools' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'ABOUT US', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-[#4338ca] w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
              <div className="w-5 h-5 bg-white rounded-sm transform rotate-45"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#4338ca]">
                KSCC Nexel
              </span>
              <span className="text-xs text-gray-500 -mt-1">STEM Education</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive(item.path)
                    ? 'text-[#4338ca] bg-[#4338ca]/10'
                    : 'text-gray-700 hover:text-[#4338ca] hover:bg-gray-50'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#4338ca] rounded-full"></div>
                )}
                <div className="absolute inset-0 bg-[#4338ca]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#4338ca] hover:bg-gray-50 transition-all duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6 transform rotate-180 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive(item.path)
                      ? 'text-[#4338ca] bg-[#4338ca]/10 border border-[#4338ca]/20'
                      : 'text-gray-700 hover:text-[#4338ca] hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    {isActive(item.path) && (
                      <Sparkles className="w-4 h-4 text-[#4338ca]" />
                    )}
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;