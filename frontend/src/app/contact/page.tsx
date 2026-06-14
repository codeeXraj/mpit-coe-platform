'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Get in touch with MPIT Centre of Excellence. We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20">
            {/* Phone */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+919876543210" className="text-orange-600 hover:underline">
                +91 98765 43210
              </a>
              <p className="text-sm text-gray-600 mt-1">Mon-Sat 9:00 AM - 6:00 PM</p>
            </Card>

            {/* Email */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:info@mpit.ac.in" className="text-blue-600 hover:underline">
                info@mpit.ac.in
              </a>
              <p className="text-sm text-gray-600 mt-1">We'll respond within 24hrs</p>
            </Card>

            {/* Address */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-sm text-gray-600">
                Lachhipur, Sonauli Road<br />
                Gorakhpur - 273015, UP
              </p>
            </Card>

            {/* Timing */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Working Hours</h3>
              <p className="text-sm text-gray-600">
                Monday - Friday<br />
                9:00 AM - 6:00 PM
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="10-digit number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="admission">Admission Enquiry</option>
                    <option value="courses">Course Information</option>
                    <option value="placement">Placement Support</option>
                    <option value="facilities">Lab Facilities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-base font-semibold flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Map & Address */}
            <div className="space-y-6">
              {/* Google Map */}
              <Card className="p-4 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.7426545232374!2d83.36!3d26.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ1JzAwLjAiTiA4M8KwMjEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </Card>

              {/* Address Details */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Campus Address</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        Maharana Pratap Institute of Technology
                      </p>
                      <p className="text-gray-600 text-sm">
                        Lachhipur, Sonauli Road<br />
                        Gorakhpur - 273015<br />
                        Uttar Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600 text-sm">+91 98765 43210</p>
                      <p className="text-gray-600 text-sm">+91 98765 43211</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600 text-sm">info@mpit.ac.in</p>
                      <p className="text-gray-600 text-sm">admission@mpit.ac.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Office Hours</p>
                      <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-gray-600 text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group border border-gray-200 rounded-lg p-5">
              <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                How do I apply for admission?
                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-3 text-sm">
                You can apply online through our website or visit the campus. Fill the admission form, 
                submit required documents, and our team will guide you through the process.
              </p>
            </details>

            <details className="group border border-gray-200 rounded-lg p-5">
              <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                What are the course fees?
                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-3 text-sm">
                Course fees vary by program. Please check individual course pages or contact us for detailed fee structure.
              </p>
            </details>

            <details className="group border border-gray-200 rounded-lg p-5">
              <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                Do you provide placement assistance?
                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-3 text-sm">
                Yes! We have a dedicated placement cell that helps students with job opportunities, 
                resume building, and interview preparation.
              </p>
            </details>

            <details className="group border border-gray-200 rounded-lg p-5">
              <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                Can I visit the campus?
                <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-gray-600 mt-3 text-sm">
                Absolutely! Campus visits are welcome. Please call ahead to schedule your visit so we can 
                arrange a proper tour and meet with our faculty.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
