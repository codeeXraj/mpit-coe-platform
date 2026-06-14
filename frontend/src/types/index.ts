export interface Course {
  id: string
  title: string
  slug: string
  shortDescription: string
  description: string
  category: 'AI' | 'CyberSecurity' | 'Drone' | '3DPrinting'
  thumbnail: string
  bannerImage: string
  instructor: Instructor
  curriculum: Module[]
  learningOutcomes: string[]
  prerequisites: string[]
  projects: Project[]
  pricing: Pricing
  duration: Duration
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  language: string
  certificateIncluded: boolean
  rating: Rating
  studentsEnrolled: number
  features: string[]
  faqs: FAQ[]
  isFeatured: boolean
  tags: string[]
}

export interface Instructor {
  name: string
  avatar: string
  bio: string
  designation: string
}

export interface Module {
  module: number
  title: string
  topics: string[]
  duration: string
}

export interface Project {
  title: string
  description: string
}

export interface Pricing {
  originalPrice: number
  discountedPrice: number
  currency: string
  isDiscountActive: boolean
  discountEndDate?: string
}

export interface Duration {
  weeks: number
  hoursPerWeek: number
  totalHours: number
}

export interface Rating {
  average: number
  count: number
}

export interface FAQ {
  question: string
  answer: string
}

export interface Testimonial {
  id: string
  name: string
  avatar: string
  role: string
  company: string
  rating: number
  text: string
  courseName: string
}

export interface Stat {
  label: string
  value: number
  suffix?: string
  icon: string
}

export interface Partner {
  name: string
  logo: string
}
