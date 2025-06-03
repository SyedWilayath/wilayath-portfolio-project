
import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center relative ${
        darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Syed Wilayath{' '}
            <span className="text-blue-600">Khadari</span>
          </h1>
          
          <h2 className={`text-2xl md:text-3xl font-light mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Lead SDET (Software Development Engineer in Test)
          </h2>
          
          <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A results-oriented Lead SDET with four years of comprehensive experience in crafting 
            and executing robust automation strategies. Expert in API and UI automation with a 
            strong command of AWS cloud services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-200 transform hover:scale-105 ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
          darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
        } transition-colors duration-200`}
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
