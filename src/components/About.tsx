
import React from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const features = [
    'API Test Automation with REST Assured',
    'UI Automation with Selenium WebDriver',
    'AWS Cloud Services Integration',
    'Team Leadership & Mentoring',
    'Test Strategy & Planning'
  ];

  return (
    <section 
      id="about" 
      className={`py-20 transition-all duration-700 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 hover:scale-105 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto transform scale-x-0 animate-[scale-in_0.8s_ease-out_0.3s_forwards] transition-all duration-500 hover:w-32"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed animate-fade-in transition-all duration-500 hover:scale-105 hover:translate-x-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              A results-oriented Lead SDET with approximately four years of comprehensive 
              experience in crafting and executing robust automation strategies. I specialize 
              in building scalable testing solutions that ensure product quality and reliability.
            </p>
            
            <p className={`text-lg leading-relaxed animate-fade-in transition-all duration-500 hover:scale-105 hover:translate-x-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              My expertise spans API test automation using REST Assured and UI automation 
              with Selenium WebDriver, coupled with a strong command of AWS cloud services 
              for scalable testing solutions.
            </p>
            
            <p className={`text-lg leading-relaxed animate-fade-in transition-all duration-500 hover:scale-105 hover:translate-x-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              I effectively manage and mentor a team of junior SDETs, guiding them through 
              code reviews, analyzing Jira stories to define test scope, and providing 
              critical input on business requirements to ensure comprehensive test coverage 
              and alignment with project goals.
            </p>
          </div>
          
          <div className={`p-8 rounded-2xl transition-all duration-700 hover:transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl animate-fade-in ${
            darkMode ? 'bg-gray-900 border border-gray-700 hover:shadow-blue-500/20 hover:border-blue-500/50' : 'bg-gray-50 border border-gray-200 hover:shadow-blue-500/10 hover:border-blue-500/30'
          }`}
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <h3 className={`text-2xl font-bold mb-6 transition-all duration-500 hover:text-blue-600 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              What I Do
            </h3>
            
            <div className="space-y-4">
              {features.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 group transition-all duration-500 hover:transform hover:translate-x-4 hover:scale-105 animate-fade-in cursor-pointer"
                  style={{ 
                    animationDelay: `${0.5 + index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-blue-400 group-hover:shadow-lg group-hover:shadow-blue-400/50"></div>
                  <span className={`transition-all duration-500 group-hover:font-semibold ${darkMode ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'}`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
