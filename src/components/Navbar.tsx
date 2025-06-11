
import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#timeline', label: 'Journey' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${
      darkMode ? 'bg-gray-900/95' : 'bg-white/95'
    } border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl transition-all duration-300 hover:scale-110">
            <span className={`animate-fade-in ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Syed Wilayath
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`transition-all duration-300 hover:text-blue-600 hover:scale-110 text-sm relative group animate-fade-in ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-125 hover:rotate-180 ${
                darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-125 hover:rotate-180 ${
                darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <div className="relative">
                <Menu 
                  size={24} 
                  className={`transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`}
                />
                <X 
                  size={24} 
                  className={`absolute top-0 left-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-3 px-4 transition-all duration-300 hover:text-blue-600 hover:bg-opacity-50 hover:translate-x-2 animate-fade-in ${
                  darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
