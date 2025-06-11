
import React, { useState, useEffect } from 'react';
import { Star, Quote, Edit } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import TestimonialEditModal from './TestimonialEditModal';

interface TestimonialsProps {
  darkMode: boolean;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  
  const defaultTestimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "QA Manager",
      company: "TechCorp Solutions",
      content: "Syed's expertise in test automation transformed our QA process. His leadership in implementing comprehensive testing frameworks reduced our bug detection time by 60%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager",
      company: "Innovation Labs",
      content: "Working with Syed was exceptional. His attention to detail and systematic approach to testing ensured our product launches were always smooth and bug-free.",
      rating: 5,
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Senior Developer",
      company: "DevFlow Inc",
      content: "Syed's API testing strategies using REST Assured were game-changing for our team. His mentorship helped elevate our entire testing approach.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);

  // Load testimonials from localStorage on component mount
  useEffect(() => {
    const savedTestimonials = localStorage.getItem('portfolio-testimonials');
    if (savedTestimonials) {
      try {
        const parsedTestimonials = JSON.parse(savedTestimonials);
        setTestimonials(parsedTestimonials);
      } catch (error) {
        console.error('Error parsing saved testimonials:', error);
        setTestimonials(defaultTestimonials);
      }
    }
  }, []);

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveTestimonials = (updatedTestimonials: Testimonial[]) => {
    setTestimonials(updatedTestimonials);
    // Save to localStorage
    localStorage.setItem('portfolio-testimonials', JSON.stringify(updatedTestimonials));
  };

  return (
    <>
      <section 
        id="testimonials" 
        className={`py-20 relative ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative animate-fade-in">
            <Button
              onClick={handleEdit}
              variant="outline"
              size="sm"
              className={`absolute top-0 right-0 transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Edit size={16} className="mr-2" />
              Edit
            </Button>
            
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-500 hover:scale-105 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Client Testimonials
            </h2>
            <p className={`text-xl animate-fade-in ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              What colleagues and clients say about working with me
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 transform scale-x-0 animate-[scale-in_0.8s_ease-out_0.4s_forwards]"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id}
                className={`transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-4 relative group animate-fade-in ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700 hover:shadow-2xl hover:shadow-blue-500/30' 
                    : 'bg-white border-gray-200 hover:shadow-2xl hover:shadow-blue-500/20'
                }`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                <CardContent className="p-6 relative overflow-hidden">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                  
                  <Quote className={`w-8 h-8 mb-4 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                  
                  <p className={`text-base mb-6 leading-relaxed transition-all duration-300 group-hover:text-opacity-90 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className="text-yellow-400 fill-current transition-all duration-300 hover:scale-125 animate-pulse" 
                        style={{ 
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '2s'
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                      darkMode ? 'bg-blue-600' : 'bg-blue-500'
                    }`}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className={`font-semibold transition-colors duration-300 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {testimonial.name}
                      </h4>
                      <p className={`text-sm transition-colors duration-300 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TestimonialEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        testimonials={testimonials}
        onSave={handleSaveTestimonials}
        darkMode={darkMode}
      />
    </>
  );
};

export default Testimonials;
