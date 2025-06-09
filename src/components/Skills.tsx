
import React, { useState, useEffect } from 'react';
import { Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SkillEditModal from './SkillEditModal';

interface SkillsProps {
  darkMode: boolean;
}

interface Skill {
  name: string;
  level: number;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  
  const defaultSkills: Skill[] = [
    { name: 'Selenium', level: 95 },
    { name: 'REST Assured', level: 90 },
    { name: 'Java', level: 88 },
    { name: 'API Testing', level: 92 },
    { name: 'AWS', level: 85 },
    { name: 'Jira', level: 90 },
    { name: 'Confluence', level: 85 },
    { name: 'Agile Methodologies', level: 88 }
  ];

  const [skills, setSkills] = useState<Skill[]>(defaultSkills);

  // Load skills from localStorage on component mount
  useEffect(() => {
    const savedSkills = localStorage.getItem('portfolio-skills');
    if (savedSkills) {
      try {
        const parsedSkills = JSON.parse(savedSkills);
        setSkills(parsedSkills);
      } catch (error) {
        console.error('Error parsing saved skills:', error);
        setSkills(defaultSkills);
      }
    }
    // Set initialized flag after loading to prevent animation
    setIsInitialized(true);
  }, []);

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveSkills = (updatedSkills: Skill[]) => {
    setSkills(updatedSkills);
    // Save to localStorage
    localStorage.setItem('portfolio-skills', JSON.stringify(updatedSkills));
  };

  return (
    <>
      <section 
        id="skills" 
        className={`py-20 relative ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105 ${
                  darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                } hover:shadow-lg`}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className={`text-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {skill.name}
                  </h3>
                  <span className={`text-sm font-medium ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {skill.level}%
                  </span>
                </div>
                
                <div className={`w-full bg-gray-200 rounded-full h-3 ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <div 
                    className={`bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full ${
                      isInitialized ? 'transition-all duration-1000 ease-out' : ''
                    }`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SkillEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        skills={skills}
        onSave={handleSaveSkills}
        darkMode={darkMode}
      />
    </>
  );
};

export default Skills;
