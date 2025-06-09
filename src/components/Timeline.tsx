import React, { useState } from 'react';
import { Calendar, MapPin, TrendingUp, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TimelineEditModal from './TimelineEditModal';

interface TimelineProps {
  darkMode: boolean;
}

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
}

const Timeline: React.FC<TimelineProps> = ({ darkMode }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([
    {
      id: 1,
      year: "Sep 2023 - Present",
      title: "Associate",
      company: "Cognizant",
      location: "Hyderabad, Telangana, India · Hybrid",
      type: "current",
      description: "As an SDET on the IELTS project, I played a crucial role in understanding business requirements and framing automated test scenarios. I developed automation test scripts for both frontend and backend testing using Selenium and Rest Assured in Java. Our test automation framework leveraged AWS components, MongoDB for data management, SQL for database queries, WireMock for API mocking, Jira for project management, and Confluence for documentation, all within an Agile methodology. I guided the team in scripting and test scenario identification, and upon completing feature testing, I demonstrated the results to the client, providing transparency and building confidence in the software quality. Additionally, I reviewed test scenarios post-completion to ensure thoroughness and accuracy.",
      achievements: [
        "Developed automation test scripts for frontend and backend testing using Selenium and Rest Assured in Java",
        "Leveraged AWS components, MongoDB for data management, SQL for database queries, WireMock for API mocking",
        "Guided the team in scripting and test scenario identification within Agile methodology",
        "Demonstrated testing results to clients, providing transparency and building confidence in software quality",
        "Reviewed test scenarios post-completion to ensure thoroughness and accuracy"
      ]
    },
    {
      id: 2,
      year: "Sep 2021 - Sep 2023",
      title: "Programming Analyst",
      company: "Cognizant",
      location: "Hyderabad, Telangana, India",
      type: "experience",
      description: "As an SDET on the IELTS project, I played a crucial role in understanding business requirements and framing automated test scenarios. I developed automation test scripts for both frontend and backend testing using Selenium and Rest Assured in Java. Our test automation framework leveraged AWS components, MongoDB for data management, SQL for database queries, WireMock for API mocking, Jira for project management, and Confluence for documentation, all within an Agile methodology. I guided the team in scripting and test scenario identification, and upon completing feature testing, I demonstrated the results to the client, providing transparency and building confidence in the software quality. Additionally, I reviewed test scenarios post-completion to ensure thoroughness and accuracy.",
      achievements: [
        "Built comprehensive test automation framework using AWS components and MongoDB",
        "Implemented API testing and mocking solutions using WireMock",
        "Managed project workflows using Jira and documented processes in Confluence",
        "Applied Agile methodology for efficient project delivery",
        "Ensured software quality through rigorous testing and scenario validation"
      ]
    },
    {
      id: 3,
      year: "Feb 2021 - Aug 2021",
      title: "Trainee",
      company: "Cognizant",
      location: "Hyderabad, Telangana, India",
      type: "experience",
      description: "Started my career journey at Cognizant as a Trainee, focusing on learning core testing fundamentals and software development lifecycle processes. Gained hands-on experience with testing methodologies and automation tools during the comprehensive training program.",
      achievements: [
        "Completed comprehensive training program on software testing fundamentals",
        "Learned automation testing tools and frameworks",
        "Gained understanding of SDLC and Agile methodologies",
        "Participated in hands-on projects to apply theoretical knowledge",
        "Built foundation for career in Software Development Engineering in Test (SDET)"
      ]
    }
  ]);

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

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveTimeline = (updatedEvents: TimelineEvent[]) => {
    setTimelineEvents(updatedEvents);
  };

  return (
    <>
      <section 
        id="timeline" 
        className={`py-20 relative ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <Button
              onClick={handleEdit}
              variant="outline"
              size="sm"
              className={`absolute top-0 right-0 ${
                darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Edit size={16} className="mr-2" />
              Edit
            </Button>
            
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Career Journey
            </h2>
            <p className={`text-xl mb-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              My professional experience in Software Testing & Quality Engineering at Cognizant
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
                  💼
                </div>

                {/* Content */}
                <div className={`ml-8 flex-1 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg ${
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

      <TimelineEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        timelineEvents={timelineEvents}
        onSave={handleSaveTimeline}
        darkMode={darkMode}
      />
    </>
  );
};

export default Timeline;
