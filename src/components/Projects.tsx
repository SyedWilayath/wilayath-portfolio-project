
import React from 'react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const project = {
    title: 'IELTS',
    description: 'The International English Language Testing System (IELTS) is a globally recognized standardized test of English language proficiency for non-native English speakers. It is jointly managed by the British Council, IDP IELTS Australia, and Cambridge Assessment English. IELTS is widely accepted for academic, immigration, and professional purposes in many countries, including Australia, Canada, New Zealand, and the United Kingdom.',
    techStack: ['Java', 'Selenium WebDriver', 'REST Assured', 'TestNG'],
    highlights: [
      'Comprehensive test automation framework',
      'API and UI testing integration',
      'Cross-browser compatibility testing',
      'Continuous integration pipeline'
    ]
  };

  return (
    <section 
      id="projects" 
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Project
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:transform hover:scale-105 ${
          darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-gray-50 border border-gray-200'
        }`}>
          <div className="p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-lg leading-relaxed mb-8 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {project.description}
                </p>
                
                <div className="mb-8">
                  <h4 className={`text-xl font-semibold mb-4 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Key Highlights
                  </h4>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={`p-8 rounded-xl ${
                darkMode ? 'bg-gray-800 border border-gray-600' : 'bg-white border border-gray-300'
              }`}>
                <h4 className={`text-xl font-semibold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Technology Stack
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  {project.techStack.map((tech, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg text-center transition-all duration-200 hover:transform hover:scale-105 ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span className="font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600">
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    This project demonstrates comprehensive test automation capabilities 
                    across multiple testing layers, ensuring robust quality assurance 
                    for a globally recognized language proficiency testing system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
