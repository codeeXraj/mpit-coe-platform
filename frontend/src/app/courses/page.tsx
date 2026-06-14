'use client';

import { useState } from 'react';
import CourseCard from '@/components/courses/CourseCard';
import { getCoursesByCategory, mockCourses } from '@/lib/data';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 'all', name: 'All Courses', icon: '📚' },
  { id: 'AI', name: 'Artificial Intelligence', icon: '🤖' },
  { id: 'CyberSecurity', name: 'Cyber Security', icon: '🛡️' },
  { id: 'Drone', name: 'Drone Technology', icon: '🚁' },
  { id: '3DPrinting', name: '3D Printing', icon: '🖨️' },
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const courses = selectedCategory === 'all' ? mockCourses : getCoursesByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Explore Our Courses</h1>
            <p className="text-base md:text-xl text-blue-100">
              Industry-focused technical courses with hands-on training and certifications
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                className={`whitespace-nowrap text-xs md:text-sm ${
                  selectedCategory === category.id
                    ? 'bg-orange-600 hover:bg-orange-700'
                    : 'hover:bg-orange-50'
                }`}
              >
                <span className="mr-1 md:mr-2">{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            {selectedCategory === 'all' 
              ? `All Courses (${courses.length})`
              : `${categories.find(c => c.id === selectedCategory)?.name} (${courses.length})`
            }
          </h2>
        </div>

        {courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 md:py-16">
            <p className="text-gray-500 text-base md:text-lg">No courses found in this category</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-orange-100">
            Contact our admission team for personalized course recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a href="tel:+919876543210" className="inline-block">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base w-full sm:w-auto">
                📞 Call: +91 98765 43210
              </Button>
            </a>
            <a href="mailto:info@mpit.ac.in" className="inline-block">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base w-full sm:w-auto">
                📧 Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
