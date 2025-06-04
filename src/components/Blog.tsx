
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BlogProps {
  darkMode: boolean;
}

const Blog: React.FC<BlogProps> = ({ darkMode }) => {
  const blogPosts = [
    {
      id: 1,
      title: "Advanced API Testing Strategies with REST Assured",
      excerpt: "Learn how to implement comprehensive API testing strategies using REST Assured framework for robust test automation.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "API Testing",
      slug: "advanced-api-testing-rest-assured"
    },
    {
      id: 2,
      title: "Building Scalable Test Automation Frameworks",
      excerpt: "Best practices for designing and implementing test automation frameworks that scale with your team and product.",
      date: "2024-01-02",
      readTime: "12 min read",
      category: "Test Automation",
      slug: "scalable-test-automation-frameworks"
    },
    {
      id: 3,
      title: "CI/CD Integration for Test Automation",
      excerpt: "Step-by-step guide to integrating your test automation suite with CI/CD pipelines for continuous quality assurance.",
      date: "2023-12-18",
      readTime: "10 min read",
      category: "DevOps",
      slug: "cicd-integration-test-automation"
    }
  ];

  return (
    <section 
      id="blog" 
      className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Latest Blog Posts
          </h2>
          <p className={`text-xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Sharing insights on test automation and quality assurance
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id}
              className={`transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${
                darkMode 
                  ? 'bg-gray-900 border-gray-700 hover:shadow-xl hover:shadow-blue-500/20' 
                  : 'bg-white border-gray-200 hover:shadow-xl'
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {post.category}
                  </span>
                </div>
                <CardTitle className={`text-xl ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {post.title}
                </CardTitle>
                <CardDescription className={
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }>
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className={`flex items-center justify-between text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-blue-600" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className={`px-8 py-3 ${
              darkMode 
                ? 'border-gray-600 text-gray-300 hover:bg-gray-800' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
