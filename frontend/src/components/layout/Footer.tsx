import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About MPIT', href: '/about' },
    { name: 'Admissions', href: '/contact' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const labs = [
    { name: 'AI & Machine Learning', href: '/courses?category=AI' },
    { name: 'Cyber Security', href: '/courses?category=CyberSecurity' },
    { name: 'Drone Technology', href: '/courses?category=Drone' },
    { name: '3D Printing', href: '/courses?category=3DPrinting' },
  ]

  const resources = [
    { name: 'Student Portal', href: '/dashboard' },
    { name: 'Faculty', href: '#' },
    { name: 'Placements', href: '#' },
    { name: 'E-Library', href: '#' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-600' },
  ]

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">M</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">MPIT</h3>
                <p className="text-xs text-gray-400">Centre of Excellence</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Maharana Pratap Institute of Technology, Gorakhpur - 
              A premier technical institution providing quality education and 
              industry-focused training.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>
                  Lachhipur, Sonauli Road, Gorakhnath<br />
                  Gorakhpur, U.P. - 273015
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>info@mpit.ac.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Labs */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Our Labs</h4>
            <ul className="space-y-2">
              {labs.map((lab) => (
                <li key={lab.name}>
                  <Link
                    href={lab.href}
                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {lab.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Social */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-white">Connect With Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 ${social.color} transition-all hover:scale-110`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Accreditations */}
        <div className="py-6 border-y border-gray-800">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">
                A
              </div>
              <span>AICTE Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
                U
              </div>
              <span>AKTU Affiliated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold">
                N
              </div>
              <span>NVIDIA Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center text-white text-xs font-bold">
                I
              </div>
              <span>ISO 9001:2015</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Maharana Pratap Institute of Technology. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-white transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
