'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Upload, User, BookOpen, FileText, CreditCard, ArrowLeft, ArrowRight } from 'lucide-react';

function RegisterForm() {
  const searchParams = useSearchParams();
  const courseTitle = searchParams.get('course') || '';
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    
    // Academic Details
    qualification: '',
    institution: '',
    passingYear: '',
    percentage: '',
    
    // Course Details
    courseName: courseTitle,
    preferredBatch: '',
    learningMode: '',
    
    // Documents
    photo: null as File | null,
    idProof: null as File | null,
    marksheet: null as File | null,
    
    // Payment
    paymentMode: '',
    
    // Terms
    agreeTerms: false,
  });

  const steps = [
    { number: 1, title: 'Personal Details', icon: User },
    { number: 2, title: 'Academic Info', icon: BookOpen },
    { number: 3, title: 'Documents', icon: FileText },
    { number: 4, title: 'Payment', icon: CreditCard },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, [fieldName]: file }));
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully! Our team will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Course Registration</h1>
          <p className="text-gray-600">Complete the form to enroll in your selected course</p>
          {courseTitle && (
            <div className="mt-4 inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-lg font-semibold">
              Course: {courseTitle}
            </div>
          )}
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex-1 relative">
                <div className="flex items-center">
                  {/* Step Circle */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                      currentStep > step.number
                        ? 'bg-green-600 text-white'
                        : currentStep === step.number
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <step.icon className="w-5 h-5" />
                    )}
                  </div>
                  
                  {/* Line */}
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-all ${
                        currentStep > step.number ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    />
                  )}
                </div>
                
                {/* Step Label */}
                <p
                  className={`text-sm mt-2 font-medium ${
                    currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'
                  }`}
                >
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Personal Details</h2>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="10-digit mobile number"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Date of Birth <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Gender <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Academic Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Academic Information</h2>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Highest Qualification <span className="text-red-600">*</span>
                    </label>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select Qualification</option>
                      <option value="8th">8th Pass</option>
                      <option value="10th">10th Pass</option>
                      <option value="12th">12th Pass</option>
                      <option value="diploma">Diploma</option>
                      <option value="btech">B.Tech</option>
                      <option value="bca">BCA</option>
                      <option value="mca">MCA</option>
                      <option value="mtech">M.Tech</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Institution Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="School/College name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Year of Passing <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="number"
                        name="passingYear"
                        value={formData.passingYear}
                        onChange={handleInputChange}
                        required
                        min="2000"
                        max="2025"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="e.g., 2024"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Percentage/CGPA <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        name="percentage"
                        value={formData.percentage}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="e.g., 85% or 8.5 CGPA"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Batch <span className="text-red-600">*</span>
                    </label>
                    <select
                      name="preferredBatch"
                      value={formData.preferredBatch}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select Batch</option>
                      <option value="morning">Morning Batch (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon Batch (2 PM - 5 PM)</option>
                      <option value="evening">Evening Batch (6 PM - 9 PM)</option>
                      <option value="weekend">Weekend Batch (Sat-Sun)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Learning Mode <span className="text-red-600">*</span>
                    </label>
                    <select
                      name="learningMode"
                      value={formData.learningMode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select Mode</option>
                      <option value="offline">Offline (Classroom)</option>
                      <option value="online">Online (Live Sessions)</option>
                      <option value="hybrid">Hybrid (Both)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Documents */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Upload Documents</h2>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Recent Passport-Size Photo <span className="text-red-600">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'photo')}
                        required
                        className="hidden"
                        id="photo"
                      />
                      <label htmlFor="photo" className="cursor-pointer">
                        <span className="text-orange-600 font-semibold">Click to upload</span>
                        <span className="text-gray-600"> or drag and drop</span>
                        <p className="text-xs text-gray-500 mt-1">JPG, PNG (max 2MB)</p>
                      </label>
                      {formData.photo && (
                        <p className="text-sm text-green-600 mt-2">✓ {formData.photo.name}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Government ID Proof <span className="text-red-600">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <input
                        type="file"
                        accept=".pdf,image/*"
                        onChange={(e) => handleFileChange(e, 'idProof')}
                        required
                        className="hidden"
                        id="idProof"
                      />
                      <label htmlFor="idProof" className="cursor-pointer">
                        <span className="text-orange-600 font-semibold">Click to upload</span>
                        <span className="text-gray-600"> Aadhaar/Voter ID/Passport</span>
                        <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (max 5MB)</p>
                      </label>
                      {formData.idProof && (
                        <p className="text-sm text-green-600 mt-2">✓ {formData.idProof.name}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Latest Marksheet <span className="text-red-600">*</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <input
                        type="file"
                        accept=".pdf,image/*"
                        onChange={(e) => handleFileChange(e, 'marksheet')}
                        required
                        className="hidden"
                        id="marksheet"
                      />
                      <label htmlFor="marksheet" className="cursor-pointer">
                        <span className="text-orange-600 font-semibold">Click to upload</span>
                        <span className="text-gray-600"> academic certificate</span>
                        <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (max 5MB)</p>
                      </label>
                      {formData.marksheet && (
                        <p className="text-sm text-green-600 mt-2">✓ {formData.marksheet.name}</p>
                      )}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> All documents will be verified by our admission team. 
                      Please ensure uploaded files are clear and readable.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 4: Payment */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Payment Mode <span className="text-red-600">*</span>
                    </label>
                    <select
                      name="paymentMode"
                      value={formData.paymentMode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select Payment Mode</option>
                      <option value="online">Online Payment (UPI/Card/Net Banking)</option>
                      <option value="offline">Offline Payment (At Institute)</option>
                      <option value="installment">Installment Plan</option>
                    </select>
                  </div>

                  {formData.paymentMode === 'online' && (
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                      <h3 className="font-bold text-green-800 mb-3">Online Payment</h3>
                      <p className="text-sm text-green-700 mb-4">
                        After form submission, you will be redirected to our secure payment gateway 
                        to complete the payment via UPI, Credit/Debit Card, or Net Banking.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-white rounded text-xs font-semibold text-gray-700 border">
                          💳 Cards
                        </span>
                        <span className="px-3 py-1 bg-white rounded text-xs font-semibold text-gray-700 border">
                          📱 UPI
                        </span>
                        <span className="px-3 py-1 bg-white rounded text-xs font-semibold text-gray-700 border">
                          🏦 Net Banking
                        </span>
                      </div>
                    </div>
                  )}

                  {formData.paymentMode === 'offline' && (
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <h3 className="font-bold text-blue-800 mb-3">Offline Payment</h3>
                      <p className="text-sm text-blue-700 mb-2">
                        Visit MPIT Centre of Excellence to complete the payment:
                      </p>
                      <address className="text-sm text-blue-700 not-italic">
                        <strong>MPIT CoE</strong><br />
                        Lachhipur, Sonauli Road<br />
                        Gorakhpur - 273015, Uttar Pradesh<br />
                        📞 +91 98765 43210
                      </address>
                    </div>
                  )}

                  {formData.paymentMode === 'installment' && (
                    <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                      <h3 className="font-bold text-orange-800 mb-3">Installment Plan</h3>
                      <p className="text-sm text-orange-700 mb-3">
                        Pay in flexible installments. Our admission team will contact you to discuss 
                        the installment schedule.
                      </p>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• 30% payment at admission</li>
                        <li>• Remaining amount in 2-3 installments</li>
                        <li>• Zero processing fee</li>
                      </ul>
                    </div>
                  )}

                  <div className="border-t pt-6">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <label htmlFor="agreeTerms" className="text-sm text-gray-700">
                        I agree to the{' '}
                        <a href="/terms" className="text-orange-600 font-semibold hover:underline">
                          Terms & Conditions
                        </a>{' '}
                        and{' '}
                        <a href="/privacy" className="text-orange-600 font-semibold hover:underline">
                          Privacy Policy
                        </a>
                        . I understand that all information provided is accurate and will be verified 
                        by MPIT CoE admission team.
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    onClick={handlePrev}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </Button>
                )}
                
                {currentStep < 4 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="ml-auto bg-orange-600 hover:bg-orange-700 flex items-center gap-2"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="ml-auto bg-green-600 hover:bg-green-700 flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Submit Registration
                  </Button>
                )}
              </div>
            </form>
          </Card>
        </div>

        {/* Help Section */}
        <div className="max-w-2xl mx-auto mt-8 text-center">
          <p className="text-gray-600">
            Need help with registration?{' '}
            <a href="tel:+919876543210" className="text-orange-600 font-semibold hover:underline">
              Call +91 98765 43210
            </a>{' '}
            or{' '}
            <a href="mailto:info@mpit.ac.in" className="text-orange-600 font-semibold hover:underline">
              Email us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading registration form...</p>
        </div>
      </div>
    }>
      <RegisterForm />
    </Suspense>
  );
}
