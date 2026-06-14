"use client"

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Users, BookOpen, Award, Briefcase, GraduationCap, Trophy } from 'lucide-react'

interface Stat {
  icon: any
  value: number
  suffix: string
  label: string
  description: string
}

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix
      }
    })
  }, [springValue, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const StatsCounter = () => {
  const stats: Stat[] = [
    {
      icon: Users,
      value: 2000,
      suffix: '+',
      label: 'Active Students',
      description: 'Learning across all programs'
    },
    {
      icon: BookOpen,
      value: 50,
      suffix: '+',
      label: 'Expert Courses',
      description: 'Industry-focused curriculum'
    },
    {
      icon: Award,
      value: 1500,
      suffix: '+',
      label: 'Certificates Issued',
      description: 'Recognized certifications'
    },
    {
      icon: Briefcase,
      value: 95,
      suffix: '%',
      label: 'Placement Rate',
      description: 'Students placed in top companies'
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building excellence through quality education and industry partnerships
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="stat-card orange group hover-lift bg-white"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <stat.icon className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {/* Recognition 1 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">AICTE Approved</h3>
                <p className="text-sm text-gray-600">
                  Recognized by All India Council for Technical Education
                </p>
              </div>
            </div>

            {/* Recognition 2 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                <Trophy className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">NVIDIA Certified</h3>
                <p className="text-sm text-gray-600">
                  Official NVIDIA AI Lab with cutting-edge GPU infrastructure
                </p>
              </div>
            </div>

            {/* Recognition 3 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">ISO 9001:2015</h3>
                <p className="text-sm text-gray-600">
                  Quality management system certified institution
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-700 font-medium mb-3">
              Affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                ✓ AKTU Affiliated
              </span>
              <span className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
                ✓ Industry Partnerships
              </span>
              <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                ✓ 100% Job Assistance
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsCounter
