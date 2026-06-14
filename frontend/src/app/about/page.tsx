'use client';

import { Card } from '@/components/ui/card';
import { Award, Target, Eye, Users, Building, Cpu, Shield, Plane, Printer, GraduationCap, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About MPIT Centre of Excellence</h1>
            <p className="text-xl text-blue-100">
              Empowering students with industry-focused technical education and cutting-edge technology
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 -mt-20">
            <Card className="p-6 text-center bg-white hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-orange-600 mb-2">2024</div>
              <p className="text-gray-600 font-semibold">Established</p>
            </Card>
            <Card className="p-6 text-center bg-white hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-orange-600 mb-2">4</div>
              <p className="text-gray-600 font-semibold">Advanced Labs</p>
            </Card>
            <Card className="p-6 text-center bg-white hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <p className="text-gray-600 font-semibold">Industry Courses</p>
            </Card>
            <Card className="p-6 text-center bg-white hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <p className="text-gray-600 font-semibold">Placement Rate</p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Institute */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              About Our Institute
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong className="text-orange-600">Maharana Pratap Institute of Technology (MPIT)</strong> Centre of Excellence 
                is a premier technical education institution located in Gorakhpur, Uttar Pradesh. Established in 2024, we are 
                dedicated to providing world-class technical education and skill development programs.
              </p>
              <p>
                Under the umbrella of <strong>Maharana Pratap Shiksha Parishad, Gorakhpur</strong>, MPIT Centre of Excellence 
                is approved by <strong>AICTE, New Delhi</strong> and affiliated to <strong>Dr. A.P.J. Abdul Kalam Technical 
                University, Lucknow</strong>. We focus on bridging the gap between academic knowledge and industry requirements.
              </p>
              <p>
                Our state-of-the-art labs include <strong>AI & Machine Learning Lab powered by NVIDIA H200 GPU Cluster</strong>, 
                Cyber Security Lab, Drone Technology Lab, and 3D Printing Lab, providing students with hands-on experience 
                in cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vision */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become a leading Centre of Excellence in technical education, recognized globally for 
                producing skilled professionals equipped with cutting-edge knowledge and practical expertise 
                in emerging technologies. We aim to create future-ready engineers and technologists who can 
                drive innovation and contribute to India's technological advancement.
              </p>
            </Card>

            {/* Mission */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Provide industry-oriented technical education with hands-on training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Foster innovation and research in emerging technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Develop industry-ready professionals with practical skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Ensure 100% placement assistance and career support</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Labs & Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Our Advanced Labs
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            State-of-the-art facilities equipped with industry-grade infrastructure
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AI Lab */}
            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI & ML Lab</h3>
              <p className="text-gray-600 text-sm mb-4">
                Powered by NVIDIA DGX H200 GPU Cluster for advanced AI training and research
              </p>
              <Link href="/labs/ai-lab" className="text-orange-600 hover:underline text-sm font-semibold">
                Learn More →
              </Link>
            </Card>

            {/* Cyber Security Lab */}
            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cyber Security Lab</h3>
              <p className="text-gray-600 text-sm mb-4">
                Ethical hacking and penetration testing with industry-standard tools
              </p>
              <Link href="/labs/cyber-security" className="text-orange-600 hover:underline text-sm font-semibold">
                Learn More →
              </Link>
            </Card>

            {/* Drone Lab */}
            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Plane className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Drone Technology Lab</h3>
              <p className="text-gray-600 text-sm mb-4">
                DGCA certified training with hands-on drone building and flying
              </p>
              <Link href="/labs/drone-technology" className="text-orange-600 hover:underline text-sm font-semibold">
                Learn More →
              </Link>
            </Card>

            {/* 3D Printing Lab */}
            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Printer className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3D Printing Lab</h3>
              <p className="text-gray-600 text-sm mb-4">
                Additive manufacturing with professional-grade 3D printers
              </p>
              <Link href="/labs/3d-printing" className="text-orange-600 hover:underline text-sm font-semibold">
                Learn More →
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose MPIT CoE?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">World-Class Infrastructure</h3>
              <p className="text-gray-600">
                State-of-the-art labs, modern classrooms, and industry-grade equipment for practical learning
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Faculty</h3>
              <p className="text-gray-600">
                Learn from industry experts and experienced professors with hands-on mentorship
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">95% Placement Rate</h3>
              <p className="text-gray-600">
                Strong industry connections ensuring excellent placement opportunities for students
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Certifications</h3>
              <p className="text-gray-600">
                Earn recognized certifications from AICTE, NVIDIA, and other industry partners
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Practical Training</h3>
              <p className="text-gray-600">
                Project-based learning with real-world applications and live industry projects
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Career Support</h3>
              <p className="text-gray-600">
                Dedicated placement cell, resume building, interview preparation, and career guidance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approvals & Affiliations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Approvals & Affiliations
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 border-l-4 border-orange-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2">AICTE Approved</h3>
                <p className="text-gray-600">
                  Approved by All India Council for Technical Education (AICTE), New Delhi - 
                  the statutory body for technical education in India
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2">AKTU Affiliated</h3>
                <p className="text-gray-600">
                  Affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow, 
                  Uttar Pradesh for degree programs
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2">NVIDIA Partner</h3>
                <p className="text-gray-600">
                  Official NVIDIA AI Lab partner with access to DGX H200 GPU Cluster 
                  for advanced AI and ML training
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Collaborations</h3>
                <p className="text-gray-600">
                  Partnerships with leading tech companies for internships, projects, 
                  and placement opportunities
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Join MPIT Centre of Excellence and transform your career with industry-focused technical education
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/courses"
              className="px-8 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Courses
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
