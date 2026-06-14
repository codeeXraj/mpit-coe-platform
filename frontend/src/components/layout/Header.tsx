"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, MapPin, Shield, GraduationCap } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Courses', 
      href: '/courses',
      dropdown: [
        { name: 'AI & Machine Learning Lab', href: '/courses?category=AI' },
        { name: 'Cyber Security Lab', href: '/courses?category=CyberSecurity' },
        { name: 'Drone Technology Lab', href: '/courses?category=Drone' },
        { name: '3D Printing Lab', href: '/courses?category=3DPrinting' },
      ]
    },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Portals', href: '#' },
  ]

  return (
    <>
      {/* Top Bar - Dark Blue - Desktop Only */}
      <div className={`hidden md:block bg-[#1a237e] text-white py-2.5 text-sm transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Left Side - Badges */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="font-medium">AICTE APPROVED</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span className="font-medium">AKTU AFFILIATED</span>
              </div>
            </div>

            {/* Right Side - Location & Portals */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">GORAKHPUR, UTTAR PRADESH</span>
              </div>
              <div className="relative group">
                <button className="font-medium flex items-center gap-1 hover:text-orange-400 transition-colors">
                  PORTALS
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white text-gray-900 shadow-xl rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/dashboard" className="block px-4 py-3 hover:bg-gray-100 transition-colors">
                    Student Portal
                  </Link>
                  <Link href="/admin" className="block px-4 py-3 hover:bg-gray-100 transition-colors">
                    Admin Portal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - White Background - Desktop Only */}
      <div className={`hidden md:block bg-white shadow-sm transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            {/* Logo Section with Institute Name */}
            <div className="flex-1 flex justify-end pr-8">
              <Link href="/" className="flex items-center gap-4">
                <div className="w-28 h-28 relative flex-shrink-0">
                  <Image
                    src="/assets/img/logo_colour.png"
                    alt="MPIT Logo"
                    width={112}
                    height={112}
                    className="object-contain"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#1a237e] leading-tight mb-1">
                    MAHARANA PRATAP
                  </h1>
                  <h2 className="text-xl font-bold text-[#1a237e] leading-tight">
                    INSTITUTE OF TECHNOLOGY
                  </h2>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <span>Gorakhpur, Uttar Pradesh</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-[10px] font-semibold rounded">
                      AICTE
                    </span>
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-800 text-[10px] font-semibold rounded">
                      AKTU
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Center Text - Centre of Excellence */}
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-3 tracking-wide whitespace-nowrap">
                <span className="text-[#1a237e]">CENTRE OF </span>
                <span className="text-orange-600">EXCELLENCE</span>
              </h1>
              <p className="text-lg text-gray-700 font-semibold italic mb-2">
                Empowering Future Innovators
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Industry-Focused Training</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>State-of-the-Art Labs</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Expert Mentorship</span>
                </div>
              </div>
            </div>

            {/* Right Side - Photos - Fixed Width */}
            <div className="flex-1 flex items-center gap-2 pl-8">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-gray-300 shadow-md">
                <Image
                  src="/assets/img/1st.png"
                  alt="Patron 1"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-orange-500 shadow-lg">
                <Image
                  src="/assets/img/2nd.png"
                  alt="Chief Patron"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-gray-300 shadow-md">
                <Image
                  src="/assets/img/3rd.png"
                  alt="Patron 3"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Sticky */}
      <nav className="sticky top-0 z-50 shadow-lg">
        {/* Mobile Header - White Background */}
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image
                    src="/assets/img/logo_colour.png"
                    alt="MPIT Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-xs font-bold leading-tight text-[#1a237e]">MAHARANA PRATAP</h1>
                  <h2 className="text-xs font-bold leading-tight text-[#1a237e]">INSTITUTE OF TECHNOLOGY</h2>
                  <p className="text-[9px] text-gray-600 mt-0.5">Gorakhpur, Uttar Pradesh, India</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-[8px] font-semibold rounded">
                      AICTE APPROVED
                    </span>
                    <span className="px-1.5 py-0.5 bg-orange-100 text-orange-800 text-[8px] font-semibold rounded">
                      AKTU AFFILIATED
                    </span>
                  </div>
                </div>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700 flex-shrink-0"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation - Blue Background */}
        <div className="hidden md:block bg-[#1a237e] text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className="px-6 py-4 hover:bg-white/10 transition-all flex items-center gap-1 font-medium text-sm"
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {link.dropdown && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-b-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all border-b border-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg font-medium text-sm transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 space-y-1 mt-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-xs text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          • {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Header
