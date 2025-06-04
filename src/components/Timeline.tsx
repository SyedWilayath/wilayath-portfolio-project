
import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

interface TimelineProps {
  darkMode: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ darkMode }) => {
  const timelineEvents = [
    {
      id: 1,
      year: "2024",
      title: "Lead SDET",
      company: "Tech Innovation Corp",
      location: "Remote",
      type: "current",
      description: "Leading a team of 8 SDETs, implementing advanced test automation frameworks, and establishing quality gates for CI/CD pipelines.",
      achievements: [
        "Reduced test execution time by 70%",
        "Implemented API testing strategy covering 95% endpoints",
        "Mentored 5 junior SDETs to senior level"
      ]
    },
    {
      id: 2,
      year: "2022-2024",
      title: "Senior SDET",
      company: "Digital Solutions Ltd",
      location: "Bangalore, India",
      type: "experience",
      description: "Designed and developed comprehensive test automation frameworks using Selenium and REST Assured for web and API testing.",
      achievements: [
        "Built scalable automation framework from scratch",
        "Achieved 90% test automation coverage",
        "Integrated testing with Jenkins CI/CD pipeline"
      ]
    },
    {
      id: 3,
      year: "2020-2022",
      title: "Test Automation Engineer",
      company: "QualityFirst Systems",
      location: "Hyderabad, India",
      type: "experience",
      description: "Specialized in developing automated test scripts and implementing quality assurance processes for multiple client projects.",
      achievements: [
        "Automated 200+ test cases across 5 projects",
        "Reduced manual testing effort by 60%",
        "Implemented data-driven testing approaches"
      ]
    },
    {
      id: 4,
      year: "2018-2020",
      title: "Junior QA Engineer",
      company: "StartupTech Inc",
      location: "Chennai, India",
      type: "experience",
      description: "Started career in manual testing and gradually transitioned to automation testing using Selenium WebDriver.",
      achievements: [
        "Executed 500+ manual test cases",
        "Learned Selenium and Java programming",
        "Contributed to agile development processes"
      ]
    },
    {
      id: 5,
      year: "2018",
      title: "B.Tech in Computer Science",
      company: "University of Technology",
      location: "India",
      type: "education",
      description: "Graduated with honors, focusing on software engineering and quality assurance principles.",
      achievements: [
        "CGPA: 8.5/10",
        "Published research paper on automated testing",
        "Led university coding club"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'current':
        return darkMode ? 'bg-green-500' : 'bg-green-600';
      case 'experience':
        return darkMode ? 'bg-blue-500' : 'bg-blue-600';
      case 'education':
        return darkMode ? 'bg-purple-500' : 'bg-purple-600';
      default:
        return darkMode ? 'bg-gray-500' : 'bg-gray-600';
    }
  };

  return (
    <section 
      id="timeline" 
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Career Journey
          </h2>
          <p className={`text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            My professional growth and achievements over the years
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-gray-700' : 'bg-gray-300'
          }`}></div>

          {timelineEvents.map((event, index) => (
            <div key={event.id} className="relative flex items-start mb-12">
              {/* Timeline dot */}
              <div className={`flex-shrink-0 w-16 h-16 rounded-full ${getTypeColor(event.type)} 
                flex items-center justify-center text-white font-bold text-lg shadow-lg z-10`}>
                {event.type === 'education' ? '🎓' : '💼'}
              </div>

              {/* Content */}
              <div className={`ml-8 flex-1 p-6 rounded-lg shadow-md ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className={darkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`font-bold ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {event.year}
                    </span>
                  </div>
                  {event.type === 'current' && (
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'
                    }`}>
                      Current
                    </span>
                  )}
                </div>

                <h3 className={`text-xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {event.title}
                </h3>

                <div className="flex items-center mb-3">
                  <h4 className={`text-lg font-medium ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {event.company}
                  </h4>
                  <div className="flex items-center ml-4 text-sm">
                    <MapPin size={14} className={`mr-1 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      {event.location}
                    </span>
                  </div>
                </div>

                <p className={`mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {event.description}
                </p>

                <div>
                  <div className="flex items-center mb-2">
                    <TrendingUp size={16} className={`mr-2 ${
                      darkMode ? 'text-green-400' : 'text-green-600'
                    }`} />
                    <span className={`font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Key Achievements:
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1">
                    {event.achievements.map((achievement, idx) => (
                      <li key={idx} className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
