# MPIT CoE Platform - Sitemap

## 🗺️ Complete Site Structure

```
mpit-coe.com
│
├── 🏠 Home (/)
│   ├── Hero Section
│   ├── Course Categories (4 Labs)
│   ├── Featured Courses
│   ├── Stats Counter
│   ├── Success Stories
│   ├── Industry Partners
│   ├── Testimonials
│   └── CTA Section
│
├── 📚 Courses (/courses)
│   ├── All Courses Grid
│   ├── Filter by Category
│   │   ├── AI Lab
│   │   ├── Cyber Security
│   │   ├── Drone Technology
│   │   └── 3D Printing
│   ├── Sort (Price, Rating, Duration)
│   └── Search Bar
│
├── 📖 Course Details (/courses/[slug])
│   ├── Course Hero
│   ├── Overview Tab
│   ├── Curriculum Tab
│   ├── Instructor Tab
│   ├── Reviews Tab
│   ├── FAQs Tab
│   ├── Sidebar (Enroll Widget)
│   └── Related Courses
│
├── 🔐 Authentication
│   ├── Login (/auth/login)
│   │   ├── Email/Password
│   │   ├── Google OAuth
│   │   └── OTP Login
│   ├── Register (/auth/register)
│   │   ├── Step 1: Basic Info
│   │   ├── Step 2: Profile Details
│   │   └── Step 3: Verification
│   └── Verify Email (/auth/verify)
│
├── 🎓 Student Dashboard (/dashboard)
│   ├── Overview (/dashboard)
│   │   ├── Welcome Card
│   │   ├── Progress Summary
│   │   ├── Upcoming Sessions
│   │   └── Quick Actions
│   ├── My Courses (/dashboard/courses)
│   │   ├── Active Courses
│   │   ├── Completed Courses
│   │   └── Continue Learning
│   ├── Progress (/dashboard/progress)
│   │   ├── Module Completion
│   │   ├── Assignments Status
│   │   └── Performance Metrics
│   ├── Certificates (/dashboard/certificates)
│   │   ├── Earned Certificates
│   │   ├── Download Option
│   │   └── Share on LinkedIn
│   ├── Assignments (/dashboard/assignments)
│   │   ├── Pending Assignments
│   │   ├── Submitted
│   │   └── Graded
│   ├── Recordings (/dashboard/recordings)
│   │   └── Session Recordings
│   └── Profile (/dashboard/profile)
│       ├── Personal Info
│       ├── Change Password
│       └── Preferences
│
├── 👨‍💼 Admin Panel (/admin)
│   ├── Admin Dashboard (/admin/dashboard)
│   │   ├── Key Metrics
│   │   ├── Revenue Chart
│   │   ├── Enrollment Trends
│   │   └── Recent Activity
│   ├── Course Management (/admin/courses)
│   │   ├── All Courses Table
│   │   ├── Add New Course
│   │   ├── Edit Course
│   │   └── Delete Course
│   ├── Student Management (/admin/students)
│   │   ├── All Students Table
│   │   ├── Student Details
│   │   ├── Enrollment History
│   │   └── Issue Certificate
│   ├── Payment Tracking (/admin/payments)
│   │   ├── All Transactions
│   │   ├── Pending Payments
│   │   ├── Refunds
│   │   └── Generate Invoice
│   ├── Certificates (/admin/certificates)
│   │   ├── Issued Certificates
│   │   ├── Generate Certificate
│   │   └── Verify Certificate
│   ├── Lead Management (/admin/leads)
│   │   ├── All Leads
│   │   ├── Lead Status Pipeline
│   │   ├── Follow-up Tasks
│   │   └── Convert to Student
│   ├── Analytics (/admin/analytics)
│   │   ├── Revenue Analytics
│   │   ├── Course Performance
│   │   ├── Traffic Sources
│   │   └── Conversion Rates
│   └── Settings (/admin/settings)
│       ├── Platform Settings
│       ├── Email Templates
│       └── Admin Users
│
├── ℹ️ About CoE (/about)
│   ├── Vision & Mission
│   ├── 4 Labs Showcase
│   │   ├── NVIDIA AI Lab
│   │   ├── Cyber Security Lab
│   │   ├── Drone Technology Lab
│   │   └── 3D Printing Lab
│   ├── Infrastructure
│   ├── Faculty Team
│   ├── Industry Partners
│   └── Achievements
│
├── 📞 Contact (/contact)
│   ├── Contact Form
│   ├── WhatsApp Quick Connect
│   ├── Google Maps
│   ├── Office Address
│   └── Email & Phone
│
├── 💳 Payment (/payment/[orderId])
│   ├── Order Summary
│   ├── Coupon Code
│   ├── Razorpay Gateway
│   └── Payment Success/Failure
│
├── 🧾 Invoice (/invoice/[invoiceId])
│   └── Downloadable Invoice PDF
│
├── 🎓 Certificate Verification (/verify-certificate)
│   └── Enter Certificate Number
│
└── 📄 Legal & Policies
    ├── Privacy Policy (/privacy)
    ├── Terms of Service (/terms)
    ├── Refund Policy (/refund)
    └── Cookie Policy (/cookies)
```

---

## 🔗 Navigation Structure

### Main Navigation (Header)
```
Logo | Courses | About CoE | Contact | Login/Dashboard
```

### Footer Navigation
```
Column 1: Quick Links
- Home
- All Courses
- About Us
- Contact

Column 2: Labs
- AI Lab
- Cyber Security
- Drone Tech
- 3D Printing

Column 3: Resources
- Blog
- FAQs
- Career Support
- Certificate Verify

Column 4: Legal
- Privacy Policy
- Terms of Service
- Refund Policy

Column 5: Contact
- Address
- Phone
- Email
- Social Media
```

### Student Dashboard Navigation (Sidebar)
```
- Dashboard
- My Courses
- Progress
- Certificates
- Assignments
- Recordings
- Profile
- Logout
```

### Admin Panel Navigation (Sidebar)
```
- Dashboard
- Courses
- Students
- Payments
- Certificates
- Leads
- Analytics
- Settings
- Logout
```

---

## 📱 Mobile Navigation

### Hamburger Menu (Mobile)
```
☰
├── Home
├── Courses
│   ├── AI Lab
│   ├── Cyber Security
│   ├── Drone Tech
│   └── 3D Printing
├── About CoE
├── Contact
└── Login / Dashboard
```

---

## 🎯 Conversion Paths

### Path 1: Guest → Student
```
Home → Browse Courses → Course Detail → Enroll → Register → Payment → Dashboard
```

### Path 2: Guest → Lead
```
Home → Download Brochure → Lead Form → WhatsApp Follow-up → Convert
```

### Path 3: Returning Student
```
Login → Dashboard → Continue Course → Complete Module → Certificate
```

---

## 🔍 SEO-Optimized URLs

| Page | URL | Meta Focus |
|------|-----|------------|
| Home | `/` | MPIT CoE, Best courses |
| All Courses | `/courses` | Engineering courses online |
| AI Lab | `/courses/ai-lab` | AI courses, NVIDIA certified |
| Cyber Security | `/courses/cyber-security` | Cybersecurity training |
| Drone Tech | `/courses/drone-technology` | Drone certification course |
| 3D Printing | `/courses/3d-printing` | 3D printing course India |
| About | `/about` | MPIT Centre of Excellence |
| Contact | `/contact` | Contact MPIT CoE |

---

## 🚀 Page Load Priority

### Critical (First Paint)
1. Home Page
2. Courses Listing
3. Course Detail
4. Login/Register

### High Priority
1. Student Dashboard
2. Payment Page

### Normal Priority
1. About Page
2. Contact Page
3. Admin Panel

### Low Priority
1. Legal Pages
2. Certificate Verification

---

**Status:** ✅ Sitemap Complete
