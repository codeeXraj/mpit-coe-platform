"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import CourseCard from '@/components/courses/CourseCard'
import { getFeaturedCourses } from '@/lib/data'
import { ArrowRight } from 'lucide-react'

const FeaturedCourses = () => {
  const featuredCourses = getFeaturedCourses()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-orange-600 rounded-full" />
            <span className="text-sm font-semibold text-orange-700">
              Our Popular Courses
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Explore Our <span className="text-orange-600">Technical Programs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-focused courses designed to prepare you for real-world challenges. 
            Learn from experienced faculty and get hands-on experience with latest technology.
          </p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/courses">
            <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
              View All Courses
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            50+ courses across 4 specialized labs
          </p>
        </motion.div>

        {/* Why Choose Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 md:p-12 border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose MPIT Centre of Excellence?
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                emoji: '🏆',
                title: 'Industry Recognition',
                desc: 'NVIDIA certified AI lab with cutting-edge infrastructure'
              },
              {
                emoji: '👨‍🏫',
                title: 'Expert Faculty',
                desc: 'Learn from industry professionals with years of experience'
              },
              {
                emoji: '💼',
                title: 'Placement Support',
                desc: '95% placement record with top companies'
              },
              {
                emoji: '📜',
                title: 'Certification',
                desc: 'Industry-recognized certificates on course completion'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedCourses
