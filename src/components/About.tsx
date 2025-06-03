
import React from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              A results-oriented Lead SDET with approximately four years of comprehensive 
              experience in crafting and executing robust automation strategies. I specialize 
              in building scalable testing solutions that ensure product quality and reliability.
            </p>
            
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              My expertise spans API test automation using REST Assured and UI automation 
              with Selenium WebDriver, coupled with a strong command of AWS cloud services 
              for scalable testing solutions.
            </p>
            
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I effectively manage and mentor a team of junior SDETs, guiding them through 
              code reviews, analyzing Jira stories to define test scope, and providing 
              critical input on business requirements to ensure comprehensive test coverage 
              and alignment with project goals.
            </p>
          </div>
          
          <div className={`p-8 rounded-2xl ${
            darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              What I Do
            </h3>
            
            <div className="space-y-4">
              {[
                'API Test Automation with REST Assured',
                'UI Automation with Selenium WebDriver',
                'AWS Cloud Services Integration',
                'Team Leadership & Mentoring',
                'Test Strategy & Planning',
                'CI/CD Pipeline Integration'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
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
