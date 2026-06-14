"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Award, Users, BookOpen, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 px-4 py-2 rounded-full mb-6"
            >
              <Award className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-semibold text-orange-700">
                AICTE Approved | AKTU Affiliated
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
            >
              Welcome to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                MPIT Centre of Excellence
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Empowering students with industry-focused technical education in 
              <strong className="text-orange-600"> Artificial Intelligence, Cyber Security, Drone Technology & 3D Printing</strong>. 
              Build your future with hands-on learning and expert guidance.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/courses">
                <button className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  Explore Our Courses
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 border-2 border-orange-500 text-orange-600 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all">
                  Admission Enquiry
                </button>
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200"
            >
              {[
                { icon: Users, value: '2000+', label: 'Students Enrolled' },
                { icon: BookOpen, value: '50+', label: 'Expert Courses' },
                { icon: TrendingUp, value: '95%', label: 'Placement Rate' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Lab Cards Stack */}
            <div className="relative">
              {[
                { 
                  name: 'AI & ML Lab', 
                  icon: '🤖',
                  color: 'from-purple-500 to-purple-700',
                  delay: 0.4 
                },
                { 
                  name: 'Cyber Security Lab', 
                  icon: '🛡️',
                  color: 'from-red-500 to-red-700',
                  delay: 0.5 
                },
                { 
                  name: 'Drone Technology Lab', 
                  icon: '🚁',
                  color: 'from-blue-500 to-blue-700',
                  delay: 0.6 
                },
                { 
                  name: '3D Printing Lab', 
                  icon: '🖨️',
                  color: 'from-green-500 to-green-700',
                  delay: 0.7 
                },
              ].map((lab, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50, rotate: 0 }}
                  animate={{ opacity: 1, x: 0, rotate: index * -2 }}
                  transition={{ delay: lab.delay }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 0,
                    zIndex: 10,
                    transition: { duration: 0.2 }
                  }}
                  className={`card-simple p-6 mb-4 bg-gradient-to-r ${lab.color} cursor-pointer hover:shadow-2xl`}
                  style={{
                    transformOrigin: 'center',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{lab.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {lab.name}
                      </h3>
                      <p className="text-white/90 text-sm">
                        Industry-Standard Equipment
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border-2 border-orange-500"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <div className="font-bold text-gray-900">NVIDIA</div>
                <div className="text-xs text-gray-600">Certified Lab</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <p className="text-center text-sm text-gray-500 mb-4">
            Trusted by Leading Organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['AICTE', 'AKTU', 'NVIDIA', 'ISO 9001', 'NAAC'].map((badge) => (
              <div key={badge} className="px-6 py-3 bg-gray-100 rounded-lg font-semibold text-gray-700">
                {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
