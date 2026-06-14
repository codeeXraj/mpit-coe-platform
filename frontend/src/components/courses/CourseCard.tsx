"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, Users, Award, IndianRupee } from 'lucide-react'
import { Course } from '@/types'

interface CourseCardProps {
  course: Course
  index?: number
}

const CourseCard = ({ course, index = 0 }: CourseCardProps) => {
  const categoryColors: Record<string, string> = {
    AI: 'bg-purple-100 text-purple-700',
    CyberSecurity: 'bg-red-100 text-red-700',
    Drone: 'bg-blue-100 text-blue-700',
    '3DPrinting': 'bg-green-100 text-green-700',
  }

  const categoryNames: Record<string, string> = {
    AI: 'Artificial Intelligence',
    CyberSecurity: 'Cyber Security',
    Drone: 'Drone Technology',
    '3DPrinting': '3D Printing',
  }

  const discount = course.pricing.isDiscountActive
    ? Math.round(
        ((course.pricing.originalPrice - course.pricing.discountedPrice) /
          course.pricing.originalPrice) *
          100
      )
    : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="card-simple overflow-hidden h-full flex flex-col group">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Overlays */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {course.isFeatured && (
              <span className="inline-flex items-center gap-1 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                <Star className="w-3 h-3 fill-current" />
                FEATURED
              </span>
            )}
          </div>

          {discount > 0 && (
            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
              {discount}% OFF
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute bottom-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[course.category]}`}>
              {categoryNames[course.category]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          {/* Rating & Level */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold text-gray-900">{course.rating.average}</span>
              <span className="text-sm text-gray-500">({course.rating.count} reviews)</span>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
              course.level === 'Beginner' ? 'bg-green-100 text-green-700' :
              course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {course.level}
            </span>
          </div>

          {/* Title */}
          <Link href={`/courses/${course.slug}`}>
            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-orange-600 transition-colors">
              {course.title}
            </h3>
          </Link>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1">
            {course.shortDescription}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration.weeks} Weeks</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.studentsEnrolled}</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4" />
              <span>Certificate</span>
            </div>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between">
            <div>
              {course.pricing.isDiscountActive ? (
                <div className="flex items-baseline gap-2">
                  <div className="flex items-center text-2xl font-bold text-orange-600">
                    <IndianRupee className="w-5 h-5" />
                    {course.pricing.discountedPrice.toLocaleString('en-IN')}
                  </div>
                  <div className="flex items-center text-sm text-gray-400 line-through">
                    <IndianRupee className="w-3 h-3" />
                    {course.pricing.originalPrice.toLocaleString('en-IN')}
                  </div>
                </div>
              ) : (
                <div className="flex items-center text-2xl font-bold text-orange-600">
                  <IndianRupee className="w-5 h-5" />
                  {course.pricing.originalPrice.toLocaleString('en-IN')}
                </div>
              )}
            </div>
            <Link href={`/courses/${course.slug}`}>
              <button className="px-5 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CourseCard
