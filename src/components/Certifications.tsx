
import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const certifications = [
    {
      id: 1,
      name: "ISTQB Advanced Level Test Manager",
      issuer: "International Software Testing Qualifications Board",
      date: "2023",
      credentialId: "ISTQB-ATM-2023-001",
      skills: ["Test Management", "Risk Assessment", "Quality Assurance"],
      verified: true
    },
    {
      id: 2,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-2023-789",
      skills: ["Cloud Architecture", "DevOps", "Infrastructure"],
      verified: true
    },
    {
      id: 3,
      name: "Selenium WebDriver Certification",
      issuer: "Selenium Academy",
      date: "2022",
      credentialId: "SEL-WD-2022-456",
      skills: ["Test Automation", "Selenium", "Web Testing"],
      verified: true
    },
    {
      id: 4,
      name: "Agile Testing Certified Practitioner",
      issuer: "Agile Alliance",
      date: "2022",
      credentialId: "AA-ATP-2022-123",
      skills: ["Agile Methodologies", "Scrum", "Continuous Testing"],
      verified: true
    }
  ];

  const handleDownloadResume = () => {
    // Create a simple resume download - in a real app, this would link to an actual PDF
    const resumeContent = `
SYED WILAYATH KHADARI
Lead SDET | Test Automation Expert

CONTACT
Email: syedwilayath2@gmail.com
Portfolio: ${window.location.origin}

SUMMARY
Experienced Lead SDET with expertise in test automation, API testing, and team leadership.
Specialized in Selenium, REST Assured, Java, and CI/CD implementation.

SKILLS
• Test Automation: Selenium, REST Assured, Java
• API Testing & Web Services
• CI/CD Integration & DevOps
• Agile Methodologies & Scrum
• Team Leadership & Mentoring
• Quality Assurance & Test Strategy

CERTIFICATIONS
• ISTQB Advanced Level Test Manager (2023)
• AWS Certified Solutions Architect (2023)
• Selenium WebDriver Certification (2022)
• Agile Testing Certified Practitioner (2022)

For full details, visit my portfolio at ${window.location.origin}
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Syed_Wilayath_Khadari_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section 
      id="certifications" 
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Certifications & Resume
          </h2>
          <p className={`text-xl mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Professional certifications and achievements
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <Button 
            onClick={handleDownloadResume}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            Download Resume
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <Card 
              key={cert.id}
              className={`transition-all duration-300 hover:transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-900 border-gray-700' 
                  : 'bg-white border-gray-200'
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <Award className={`w-8 h-8 mr-3 ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                    <div>
                      <CardTitle className={`text-xl ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {cert.name}
                      </CardTitle>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  {cert.verified && (
                    <div className={`px-2 py-1 rounded text-xs font-medium ${
                      darkMode 
                        ? 'bg-green-900 text-green-300' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      Verified
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm">
                    <Calendar size={16} className={`mr-2 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                      Issued: {cert.date}
                    </span>
                  </div>
                  
                  <div>
                    <p className={`text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Credential ID: {cert.credentialId}
                    </p>
                  </div>

                  <div>
                    <p className={`text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Skills:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className={`px-2 py-1 rounded text-xs ${
                            darkMode 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className={`flex items-center text-sm font-medium ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  } hover:underline`}>
                    View Certificate
                    <ExternalLink size={14} className="ml-1" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
