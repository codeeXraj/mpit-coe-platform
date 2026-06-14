import HeroSection from '@/components/home/HeroSection'
import FeaturedCourses from '@/components/home/FeaturedCourses'
import StatsCounter from '@/components/home/StatsCounter'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedCourses />
      <StatsCounter />
    </main>
  )
}
