
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialsProps {
  darkMode: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ darkMode }) => {
  const testimonials = [
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

  return (
    <section 
      id="testimonials" 
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Client Testimonials
          </h2>
          <p className={`text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            What colleagues and clients say about working with me
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className={`transition-all duration-300 hover:transform hover:scale-105 relative ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200'
              }`}
            >
              <CardContent className="p-6">
                <Quote className={`w-8 h-8 mb-4 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
                
                <p className={`text-base mb-6 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{testimonial.content}"
                </p>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className="text-yellow-400 fill-current" 
                    />
                  ))}
                </div>

                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-4 ${
                    darkMode ? 'bg-blue-600' : 'bg-blue-500'
                  }`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${
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
  );
};

export default Testimonials;
