
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
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${
          darkMode ? 'bg-blue-600' : 'bg-blue-300'
        }`} style={{ animationDuration: '4s' }}></div>
        <div className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 animate-pulse ${
          darkMode ? 'bg-purple-600' : 'bg-purple-300'
        }`} style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 transform hover:scale-105 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
          style={{ 
            animationDelay: '0.2s',
            animationFillMode: 'both'
          }}>
            Syed Wilayath{' '}
            <span className="text-blue-600 animate-pulse">Khadari</span>
          </h1>
          
          <h2 className={`text-2xl md:text-3xl font-light mb-8 animate-fade-in ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
          style={{ 
            animationDelay: '0.4s',
            animationFillMode: 'both'
          }}>
            Lead SDET (Software Development Engineer in Test)
          </h2>
          
          <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
          style={{ 
            animationDelay: '0.6s',
            animationFillMode: 'both'
          }}>
            A results-oriented Lead SDET with four years of comprehensive experience in crafting 
            and executing robust automation strategies. Expert in API and UI automation with a 
            strong command of AWS cloud services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
          style={{ 
            animationDelay: '0.8s',
            animationFillMode: 'both'
          }}>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 animate-pulse"
              style={{ animationDuration: '2s' }}
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-blue-500' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-blue-500'
              }`}
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-300 hover:scale-125 ${
          darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
