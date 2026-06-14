'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { mockCourses } from '@/lib/course-detail-data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Check, 
  Clock, 
  Users, 
  Award, 
  BookOpen, 
  Video, 
  Download,
  ChevronDown,
  Star,
  Shield
} from 'lucide-react';
import { useState } from 'react';

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = mockCourses.find(c => c.slug === params.slug);
  const [activeTab, setActiveTab] = useState('overview');
  const [openModule, setOpenModule] = useState<number | null>(null);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              {course.category}
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">{course.title}</h1>
            <p className="text-base md:text-xl mb-4 md:mb-6 text-blue-100">{course.description}</p>
            
            <div className="flex flex-wrap gap-3 md:gap-6 text-xs md:text-sm">
              <div className="flex items-center gap-1.5 md:gap-2">
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Users className="w-4 h-4 md:w-5 md:h-5" />
                <span>{course.enrolled} Students</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                <span>{course.rating} ({course.reviews})</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Award className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">Certificate Included</span>
                <span className="sm:hidden">Certificate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
              <div className="flex border-b overflow-x-auto scrollbar-hide">
                {['overview', 'curriculum', 'outcomes', 'certification'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 sm:px-6 py-3 sm:py-4 font-semibold text-xs sm:text-sm whitespace-nowrap transition-colors ${
                      activeTab === tab
                        ? 'text-orange-600 border-b-2 border-orange-600'
                        : 'text-gray-600 hover:text-orange-600'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="p-4 sm:p-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">About This Course</h2>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                        {course.description}
                      </p>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        This comprehensive program is designed to equip you with industry-relevant skills 
                        through hands-on projects, expert mentorship, and real-world applications.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">What You'll Learn</h3>
                      <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                        {course.curriculum.slice(0, 6).map((topic, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base text-gray-700">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Course Highlights</h3>
                      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                        <Card className="p-3 sm:p-4">
                          <Video className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mb-1 sm:mb-2" />
                          <h4 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">Live Classes</h4>
                          <p className="text-xs sm:text-sm text-gray-600">Interactive sessions with experts</p>
                        </Card>
                        <Card className="p-3 sm:p-4">
                          <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mb-1 sm:mb-2" />
                          <h4 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">Hands-on Projects</h4>
                          <p className="text-xs sm:text-sm text-gray-600">Real-world practical experience</p>
                        </Card>
                        <Card className="p-3 sm:p-4">
                          <Award className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mb-1 sm:mb-2" />
                          <h4 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">Industry Certificate</h4>
                          <p className="text-xs sm:text-sm text-gray-600">Recognized certification</p>
                        </Card>
                        <Card className="p-3 sm:p-4">
                          <Users className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mb-1 sm:mb-2" />
                          <h4 className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">Placement Support</h4>
                          <p className="text-xs sm:text-sm text-gray-600">Career guidance & assistance</p>
                        </Card>
                      </div>
                    </div>
                  </div>
                )}

                {/* Curriculum Tab */}
                {activeTab === 'curriculum' && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
                    {course.curriculum.map((topic, idx) => (
                      <div key={idx} className="border rounded-lg overflow-hidden">
                        <button
                          onClick={() => setOpenModule(openModule === idx ? null : idx)}
                          className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold text-sm">
                              {idx + 1}
                            </div>
                            <span className="font-semibold text-left">{topic}</span>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              openModule === idx ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {openModule === idx && (
                          <div className="p-4 bg-white border-t">
                            <ul className="space-y-2 text-sm text-gray-600">
                              <li className="flex items-center gap-2">
                                <Video className="w-4 h-4" />
                                Video Lectures (2 hours)
                              </li>
                              <li className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4" />
                                Reading Materials
                              </li>
                              <li className="flex items-center gap-2">
                                <Check className="w-4 h-4" />
                                Hands-on Assignment
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Outcomes Tab */}
                {activeTab === 'outcomes' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Career Outcomes</h2>
                      <p className="text-gray-600 mb-4">
                        Upon successful completion of this course, you'll be prepared for roles such as:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {['Software Developer', 'AI Engineer', 'Data Scientist', 'ML Engineer', 
                          'Research Analyst', 'Technical Consultant'].map((role, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-orange-600" />
                            <span className="font-medium">{role}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Skills You'll Gain</h3>
                      <div className="flex flex-wrap gap-2">
                        {course.curriculum.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Certification Tab */}
                {activeTab === 'certification' && (
                  <div className="space-y-4 sm:space-y-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Certification</h2>
                    
                    {/* Certificate Preview */}
                    <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-3 sm:p-6 md:p-8 rounded-lg border-2 sm:border-4 border-orange-500 shadow-xl">
                      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-inner relative">
                        {/* Certificate Header */}
                        <div className="text-center border-b-2 border-orange-500 pb-3 sm:pb-4 mb-4 sm:mb-6">
                          <div className="flex justify-center items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 relative flex-shrink-0">
                              <Image
                                src="/assets/img/logo_colour.png"
                                alt="MPIT Logo"
                                width={64}
                                height={64}
                                className="object-contain"
                              />
                            </div>
                            <div className="text-left">
                              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1a237e]">MPIT</h3>
                              <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">Centre of Excellence</p>
                            </div>
                          </div>
                          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#1a237e] mb-1 sm:mb-2">CERTIFICATE OF COMPLETION</h2>
                          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-gray-600">
                            <span className="flex items-center justify-center gap-1">
                              <Award className="w-3 h-3" /> AICTE Approved
                            </span>
                            <span className="flex items-center justify-center gap-1">
                              <Award className="w-3 h-3" /> Industry Recognized
                            </span>
                          </div>
                        </div>

                        {/* Certificate Body */}
                        <div className="text-center space-y-2 sm:space-y-4">
                          <p className="text-xs sm:text-sm md:text-base text-gray-700">This is to certify that</p>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600 border-b-2 border-dotted border-gray-300 pb-1 sm:pb-2 inline-block px-4 sm:px-8">
                            [Student Name]
                          </h3>
                          <p className="text-xs sm:text-sm md:text-base text-gray-700">has successfully completed the course</p>
                          <h4 className="text-base sm:text-xl md:text-2xl font-bold text-[#1a237e] px-2">{course.title}</h4>
                          <p className="text-xs sm:text-sm text-gray-600">Duration: {course.duration} | Category: {course.category}</p>
                          
                          <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-8 pt-3 sm:pt-6 border-t border-gray-200">
                            <div className="text-center">
                              <div className="border-t-2 border-gray-800 w-20 sm:w-32 mx-auto mb-1 sm:mb-2"></div>
                              <p className="text-[10px] sm:text-xs font-semibold text-gray-700">Director Signature</p>
                              <p className="text-[9px] sm:text-xs text-gray-500">MPIT Gorakhpur</p>
                            </div>
                            <div className="text-center">
                              <div className="border-t-2 border-gray-800 w-20 sm:w-32 mx-auto mb-1 sm:mb-2"></div>
                              <p className="text-[10px] sm:text-xs font-semibold text-gray-700">Course Instructor</p>
                              <p className="text-[9px] sm:text-xs text-gray-500">Centre of Excellence</p>
                            </div>
                          </div>

                          <div className="mt-3 sm:mt-6 pt-2 sm:pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0 text-[9px] sm:text-xs text-gray-500">
                            <span>Certificate ID: MPIT-{new Date().getFullYear()}-XXXX</span>
                            <span>Date: [Issue Date]</span>
                          </div>
                        </div>

                        {/* Decorative Corner Elements */}
                        <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-4 h-4 sm:w-8 sm:h-8 border-t-2 border-l-2 sm:border-t-4 sm:border-l-4 border-orange-500 opacity-50"></div>
                        <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-4 h-4 sm:w-8 sm:h-8 border-t-2 border-r-2 sm:border-t-4 sm:border-r-4 border-orange-500 opacity-50"></div>
                        <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-4 h-4 sm:w-8 sm:h-8 border-b-2 border-l-2 sm:border-b-4 sm:border-l-4 border-orange-500 opacity-50"></div>
                        <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 h-4 sm:w-8 sm:h-8 border-b-2 border-r-2 sm:border-b-4 sm:border-r-4 border-orange-500 opacity-50"></div>
                      </div>
                    </div>

                    {/* Certificate Features */}
                    <Card className="p-4 sm:p-6 bg-gradient-to-br from-orange-50 to-blue-50 relative overflow-hidden">
                      <Award className="w-10 h-10 sm:w-12 sm:h-12 text-orange-600 mb-3 sm:mb-4" />
                      <h3 className="text-lg sm:text-xl font-bold mb-2">
                        MPIT Centre of Excellence Certificate
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                        Earn an industry-recognized certificate upon successful completion of the course.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm sm:text-base">Verified Certificate of Completion</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm sm:text-base">Shareable on LinkedIn</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm sm:text-base">Add to your resume</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm sm:text-base">Digitally verifiable with unique ID</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm sm:text-base">Recognized by industry partners</span>
                        </li>
                      </ul>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Sticky Enrollment Card */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="lg:sticky lg:top-4">
              <Card className="p-4 sm:p-6 shadow-lg">
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-baseline gap-2 mb-1 sm:mb-2">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                      ₹{course.price.toLocaleString()}
                    </span>
                    {course.originalPrice && (
                      <span className="text-base sm:text-lg text-gray-400 line-through">
                        ₹{course.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  {course.discount && (
                    <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs sm:text-sm font-semibold">
                      {course.discount}% OFF
                    </span>
                  )}
                </div>

                <Link href={`/register?course=${encodeURIComponent(course.title)}`} className="block">
                  <Button className="w-full mb-2 sm:mb-3 bg-orange-600 hover:bg-orange-700 text-sm sm:text-base py-2 sm:py-3">
                    Enroll Now
                  </Button>
                </Link>
                <Button variant="outline" className="w-full mb-4 sm:mb-6 text-sm sm:text-base py-2 sm:py-3">
                  <Download className="w-4 h-4 mr-2" />
                  Download Brochure
                </Button>

                <div className="space-y-4 border-t pt-4">
                  <h3 className="font-bold">This course includes:</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-gray-600" />
                      <span>{course.duration} of content</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Video className="w-5 h-5 text-gray-600" />
                      <span>Live & Recorded Sessions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-gray-600" />
                      <span>Hands-on Projects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-gray-600" />
                      <span>Certificate of Completion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-gray-600" />
                      <span>Placement Assistance</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Need help?</strong> Contact our admission team
                  </p>
                  <p className="text-sm text-blue-600 font-semibold mt-1">
                    📞 +91 98765 43210
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
