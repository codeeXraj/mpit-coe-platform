'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star, Clock, Users, IndianRupee } from 'lucide-react';

interface APICourse {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  category: string;
  thumbnail: string;
  level: string;
  pricing: { originalPrice: number; discountedPrice: number; isDiscountActive: boolean };
  duration: { weeks: number };
  studentsEnrolled: number;
  rating: { average: number; count: number };
  isFeatured: boolean;
}

const categoryColors: Record<string, string> = {
  AI: 'bg-purple-100 text-purple-700',
  CyberSecurity: 'bg-red-100 text-red-700',
  Drone: 'bg-blue-100 text-blue-700',
  '3DPrinting': 'bg-green-100 text-green-700',
  Other: 'bg-gray-100 text-gray-700',
};

const categoryEmoji: Record<string, string> = {
  AI: '🤖', CyberSecurity: '🛡️', Drone: '🚁', '3DPrinting': '🖨️', Other: '📚',
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export default function CourseCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [courses, setCourses] = useState<APICourse[]>([]);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/courses?active=true`)
      .then(r => r.json())
      .then(d => { if (d.success) setCourses(d.data); })
      .catch(() => {});
  }, []);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, [courses, checkScroll]);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' });
  };

  if (courses.length === 0) return (
    <div className="text-center py-10 text-gray-400">
      <p className="text-lg">No courses available yet.</p>
      <p className="text-sm mt-1">Admin se courses add karwao 🎓</p>
    </div>
  );

  return (
    <div className="relative group">
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        disabled={!canLeft}
        aria-label="Scroll left"
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200
          ${canLeft ? 'opacity-100 hover:shadow-xl hover:scale-110 cursor-pointer' : 'opacity-0 cursor-default'}`}
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 px-1"
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {courses.map((course) => {
          const price = course.pricing.isDiscountActive
            ? course.pricing.discountedPrice
            : course.pricing.originalPrice;

          return (
            <div
              key={course._id}
              className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Thumbnail */}
              <div className="relative h-44 bg-gradient-to-br from-gray-100 to-gray-200">
                {course.thumbnail ? (
                  <Image src={course.thumbnail} alt={course.title} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl">
                    {categoryEmoji[course.category] || '📚'}
                  </div>
                )}
                {course.isFeatured && (
                  <div className="absolute top-3 left-3 bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" /> Featured
                  </div>
                )}
                <div className="absolute bottom-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[course.category] || 'bg-gray-100 text-gray-700'}`}>
                    {course.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-gray-800">{course.rating.average || '—'}</span>
                    <span className="text-xs text-gray-400">({course.rating.count})</span>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    course.level === 'Beginner' ? 'bg-green-100 text-green-700'
                    : course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                  }`}>
                    {course.level}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2">{course.title}</h3>
                <p className="text-xs text-gray-500 line-clamp-2">{course.shortDescription}</p>

                <div className="flex items-center gap-3 text-xs text-gray-400 pt-1 pb-2 border-b border-gray-100">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{course.duration.weeks} Weeks</span>
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{course.studentsEnrolled} students</span>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center text-lg font-bold text-orange-600">
                    <IndianRupee className="w-4 h-4" />
                    {price.toLocaleString('en-IN')}
                  </div>
                  <Link href={`/courses/${course.slug || course._id}`}>
                    <button className="text-xs px-4 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        disabled={!canRight}
        aria-label="Scroll right"
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200
          ${canRight ? 'opacity-100 hover:shadow-xl hover:scale-110 cursor-pointer' : 'opacity-0 cursor-default'}`}
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}
