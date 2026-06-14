# MPIT Centre of Excellence - Platform Architecture

## 🎯 Project Overview

**Platform:** Premium EdTech Course Selling Platform  
**Target:** Students & Professionals seeking advanced tech education  
**Vision:** World-class, conversion-focused learning marketplace

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Mobile  │  │  Tablet  │  │  Laptop  │  │ Desktop  │   │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘   │
└───────┼─────────────┼─────────────┼─────────────┼──────────┘
        │             │             │             │
        └─────────────┴─────────────┴─────────────┘
                      │
        ┌─────────────▼──────────────┐
        │   Next.js 14 (App Router)  │
        │   + TypeScript + Tailwind  │
        │   + Framer Motion          │
        └─────────────┬──────────────┘
                      │
        ┌─────────────▼──────────────┐
        │      API GATEWAY LAYER      │
        │  /api/* (Next.js Routes)    │
        └─────────────┬──────────────┘
                      │
        ┌─────────────▼──────────────┐
        │   Express.js Backend API    │
        │   + JWT Auth + Validation   │
        └─────────────┬──────────────┘
                      │
        ┌─────────────▼──────────────┐
        │    MongoDB Database         │
        │    + Mongoose ODM           │
        └─────────────────────────────┘
```

---

## 📁 Complete Folder Structure

```
mpit-coe-platform/
│
├── frontend/                          # Next.js Frontend
│   ├── src/
│   │   ├── app/                       # App Router (Next.js 14)
│   │   │   ├── (home)/               # Home route group
│   │   │   │   └── page.tsx          # Landing page
│   │   │   ├── courses/              # Courses listing
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/            # Dynamic course detail
│   │   │   │       └── page.tsx
│   │   │   ├── dashboard/            # Student dashboard
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   ├── courses/
│   │   │   │   ├── progress/
│   │   │   │   └── certificates/
│   │   │   ├── auth/                 # Authentication
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   └── verify/
│   │   │   ├── admin/                # Admin panel
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── dashboard/
│   │   │   │   ├── courses/
│   │   │   │   ├── students/
│   │   │   │   ├── payments/
│   │   │   │   └── analytics/
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── api/                  # API routes
│   │   │   │   └── proxy/           # Backend proxy
│   │   │   ├── layout.tsx            # Root layout
│   │   │   └── globals.css
│   │   │
│   │   ├── components/
│   │   │   ├── ui/                   # Shadcn UI components
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   └── ...
│   │   │   ├── layout/               # Layout components
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   └── Navigation.tsx
│   │   │   ├── home/                 # Home page components
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── CourseGrid.tsx
│   │   │   │   ├── StatsCounter.tsx
│   │   │   │   ├── Testimonials.tsx
│   │   │   │   └── CTASection.tsx
│   │   │   ├── courses/              # Course components
│   │   │   │   ├── CourseCard.tsx
│   │   │   │   ├── CourseFilter.tsx
│   │   │   │   ├── CourseDetail.tsx
│   │   │   │   └── EnrollButton.tsx
│   │   │   ├── dashboard/            # Dashboard components
│   │   │   │   ├── ProgressCard.tsx
│   │   │   │   ├── CourseList.tsx
│   │   │   │   └── CertificateCard.tsx
│   │   │   ├── admin/                # Admin components
│   │   │   │   ├── CourseForm.tsx
│   │   │   │   ├── StudentTable.tsx
│   │   │   │   └── AnalyticsChart.tsx
│   │   │   └── common/               # Shared components
│   │   │       ├── GlassCard.tsx
│   │   │       ├── 3DCard.tsx
│   │   │       ├── LoadingSpinner.tsx
│   │   │       └── AnimatedSection.tsx
│   │   │
│   │   ├── lib/                      # Utilities & Config
│   │   │   ├── utils.ts
│   │   │   ├── api.ts               # API client
│   │   │   ├── auth.ts              # Auth helpers
│   │   │   └── constants.ts
│   │   │
│   │   ├── hooks/                    # Custom React hooks
│   │   │   ├── useAuth.ts
│   │   │   ├── useCourses.ts
│   │   │   ├── useTheme.ts
│   │   │   └── useAnimation.ts
│   │   │
│   │   ├── types/                    # TypeScript types
│   │   │   ├── course.ts
│   │   │   ├── user.ts
│   │   │   ├── payment.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── styles/                   # Global styles
│   │   │   ├── animations.css
│   │   │   └── glassmorphism.css
│   │   │
│   │   └── assets/                   # Static assets
│   │       ├── images/
│   │       ├── icons/
│   │       └── animations/
│   │
│   ├── public/                       # Public assets
│   │   ├── images/
│   │   ├── logos/
│   │   └── fonts/
│   │
│   ├── .env.local
│   ├── next.config.js
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   ├── package.json
│   └── components.json               # Shadcn config
│
│
├── backend/                          # Express.js Backend
│   ├── src/
│   │   ├── config/                   # Configuration
│   │   │   ├── database.ts          # MongoDB connection
│   │   │   ├── jwt.ts               # JWT config
│   │   │   ├── razorpay.ts          # Payment gateway
│   │   │   └── email.ts             # Email service
│   │   │
│   │   ├── models/                   # Mongoose Models
│   │   │   ├── User.ts
│   │   │   ├── Course.ts
│   │   │   ├── Enrollment.ts
│   │   │   ├── Payment.ts
│   │   │   ├── Certificate.ts
│   │   │   └── Announcement.ts
│   │   │
│   │   ├── controllers/              # Business logic
│   │   │   ├── authController.ts
│   │   │   ├── courseController.ts
│   │   │   ├── userController.ts
│   │   │   ├── paymentController.ts
│   │   │   ├── enrollmentController.ts
│   │   │   └── adminController.ts
│   │   │
│   │   ├── routes/                   # API Routes
│   │   │   ├── auth.routes.ts
│   │   │   ├── course.routes.ts
│   │   │   ├── user.routes.ts
│   │   │   ├── payment.routes.ts
│   │   │   ├── enrollment.routes.ts
│   │   │   └── admin.routes.ts
│   │   │
│   │   ├── middleware/               # Middleware
│   │   │   ├── auth.middleware.ts   # JWT verification
│   │   │   ├── admin.middleware.ts  # Admin check
│   │   │   ├── validation.middleware.ts
│   │   │   ├── error.middleware.ts
│   │   │   └── rateLimit.middleware.ts
│   │   │
│   │   ├── services/                 # External services
│   │   │   ├── emailService.ts
│   │   │   ├── smsService.ts
│   │   │   ├── paymentService.ts
│   │   │   ├── certificateService.ts
│   │   │   └── storageService.ts
│   │   │
│   │   ├── validators/               # Input validation
│   │   │   ├── auth.validator.ts
│   │   │   ├── course.validator.ts
│   │   │   └── user.validator.ts
│   │   │
│   │   ├── types/                    # TypeScript types
│   │   │   └── index.ts
│   │   │
│   │   ├── utils/                    # Helper functions
│   │   │   ├── token.ts
│   │   │   ├── hash.ts
│   │   │   └── logger.ts
│   │   │
│   │   ├── app.ts                    # Express app setup
│   │   └── server.ts                 # Server entry point
│   │
│   ├── .env
│   ├── .env.example
│   ├── tsconfig.json
│   ├── package.json
│   └── nodemon.json
│
│
├── docs/                             # Documentation
│   ├── API.md                        # API documentation
│   ├── DEPLOYMENT.md                 # Deployment guide
│   └── USER_FLOWS.md                 # User journey maps
│
├── .gitignore
└── README.md
```

---

## 🗄️ Database Schema Design

### Collections Overview

#### 1. **Users Collection**
```typescript
{
  _id: ObjectId,
  email: string (unique, indexed),
  phone: string (unique),
  password: string (hashed),
  googleId?: string,
  profile: {
    firstName: string,
    lastName: string,
    avatar?: string,
    dateOfBirth?: Date,
    education: string,
    occupation: string,
    city: string,
    state: string
  },
  role: enum ['student', 'admin', 'instructor'],
  isVerified: boolean,
  isActive: boolean,
  enrolledCourses: [ObjectId], // ref: Course
  completedCourses: [ObjectId],
  wishlist: [ObjectId],
  createdAt: Date,
  updatedAt: Date,
  lastLogin: Date
}
```

#### 2. **Courses Collection**
```typescript
{
  _id: ObjectId,
  title: string (indexed),
  slug: string (unique, indexed),
  shortDescription: string,
  description: string,
  category: enum ['AI', 'CyberSecurity', 'Drone', '3DPrinting'],
  thumbnail: string (URL),
  bannerImage: string (URL),
  instructor: {
    name: string,
    avatar: string,
    bio: string,
    designation: string
  },
  curriculum: [{
    module: number,
    title: string,
    topics: [string],
    duration: string
  }],
  learningOutcomes: [string],
  prerequisites: [string],
  projects: [{
    title: string,
    description: string
  }],
  pricing: {
    originalPrice: number,
    discountedPrice: number,
    currency: string,
    isDiscountActive: boolean,
    discountEndDate?: Date
  },
  duration: {
    weeks: number,
    hoursPerWeek: number,
    totalHours: number
  },
  level: enum ['Beginner', 'Intermediate', 'Advanced'],
  language: string,
  certificateIncluded: boolean,
  rating: {
    average: number,
    count: number
  },
  studentsEnrolled: number,
  maxCapacity?: number,
  features: [string],
  faqs: [{
    question: string,
    answer: string
  }],
  isActive: boolean,
  isFeatured: boolean,
  startDate?: Date,
  tags: [string],
  createdAt: Date,
  updatedAt: Date
}
```

#### 3. **Enrollments Collection**
```typescript
{
  _id: ObjectId,
  userId: ObjectId (ref: User, indexed),
  courseId: ObjectId (ref: Course, indexed),
  enrollmentDate: Date,
  status: enum ['active', 'completed', 'dropped', 'expired'],
  progress: {
    completedModules: [number],
    currentModule: number,
    percentage: number,
    lastAccessedAt: Date
  },
  payment: {
    paymentId: ObjectId (ref: Payment),
    amountPaid: number,
    transactionId: string
  },
  completionDate?: Date,
  certificateId?: ObjectId (ref: Certificate),
  assignments: [{
    assignmentId: ObjectId,
    submittedAt?: Date,
    grade?: number,
    feedback?: string
  }],
  createdAt: Date,
  updatedAt: Date
}
```

#### 4. **Payments Collection**
```typescript
{
  _id: ObjectId,
  userId: ObjectId (ref: User, indexed),
  courseId: ObjectId (ref: Course),
  enrollmentId?: ObjectId (ref: Enrollment),
  amount: number,
  currency: string,
  status: enum ['pending', 'completed', 'failed', 'refunded'],
  paymentMethod: enum ['razorpay', 'upi', 'card', 'netbanking'],
  razorpayOrderId?: string,
  razorpayPaymentId?: string,
  razorpaySignature?: string,
  couponCode?: string,
  discountAmount?: number,
  finalAmount: number,
  invoice: {
    invoiceNumber: string (unique),
    invoiceUrl?: string
  },
  transactionDetails: object,
  refundDetails?: {
    refundId: string,
    refundAmount: number,
    refundDate: Date,
    reason: string
  },
  createdAt: Date,
  updatedAt: Date
}
```

#### 5. **Certificates Collection**
```typescript
{
  _id: ObjectId,
  userId: ObjectId (ref: User),
  courseId: ObjectId (ref: Course),
  enrollmentId: ObjectId (ref: Enrollment),
  certificateNumber: string (unique, indexed),
  issuedDate: Date,
  certificateUrl: string,
  verificationCode: string (unique),
  studentName: string,
  courseName: string,
  completionDate: Date,
  grade?: string,
  creditsEarned?: number,
  createdAt: Date
}
```

#### 6. **Announcements Collection**
```typescript
{
  _id: ObjectId,
  title: string,
  message: string,
  type: enum ['info', 'success', 'warning', 'urgent'],
  targetAudience: enum ['all', 'students', 'specific_course'],
  courseId?: ObjectId (ref: Course),
  isActive: boolean,
  priority: number,
  expiresAt?: Date,
  createdBy: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

#### 7. **Leads Collection**
```typescript
{
  _id: ObjectId,
  name: string,
  email: string,
  phone: string,
  interestedCourse?: ObjectId (ref: Course),
  source: enum ['website', 'whatsapp', 'email', 'direct'],
  status: enum ['new', 'contacted', 'interested', 'enrolled', 'lost'],
  notes: [string],
  lastContactedAt?: Date,
  assignedTo?: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

#### 8. **ContactForms Collection**
```typescript
{
  _id: ObjectId,
  name: string,
  email: string,
  phone: string,
  subject: string,
  message: string,
  status: enum ['new', 'replied', 'resolved'],
  repliedBy?: ObjectId (ref: User),
  replyMessage?: string,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔄 User Flows

### Flow 1: Student Registration & Enrollment

```
START → Landing Page
  ↓
Browse Courses → Filter by Category
  ↓
View Course Details → Check Curriculum, Pricing, Reviews
  ↓
Click "Enroll Now"
  ↓
[Not Logged In?] → Sign Up/Login Page
  ↓
  ├─→ Email/Password Registration
  ├─→ Google OAuth
  └─→ OTP Login
  ↓
Email Verification → OTP Sent
  ↓
Complete Profile → Multi-Step Form
  ↓
Payment Page → Select Payment Method
  ↓
Razorpay Gateway → Complete Payment
  ↓
Payment Success → Enrollment Confirmed
  ↓
Student Dashboard → Access Course Content
  ↓
Track Progress → Complete Modules
  ↓
Complete Course → Receive Certificate
  ↓
END
```

### Flow 2: Admin Course Management

```
START → Admin Login
  ↓
Admin Dashboard → Analytics Overview
  ↓
Navigate to "Courses" Section
  ↓
Click "Add New Course"
  ↓
Fill Course Details Form
  ├─→ Basic Info
  ├─→ Curriculum
  ├─→ Pricing
  ├─→ Media Upload
  └─→ FAQs
  ↓
Preview Course
  ↓
Publish Course → Status: Active
  ↓
Monitor Enrollments
  ↓
Update Course Content (if needed)
  ↓
Track Student Progress
  ↓
Generate Reports
  ↓
END
```

### Flow 3: Guest User → Lead Conversion

```
START → Landing Page
  ↓
Explore Without Login
  ↓
View Course Details
  ↓
Click "Download Brochure" or "Get Info"
  ↓
Lead Capture Form
  ├─→ Name
  ├─→ Email
  ├─→ Phone
  └─→ Course Interest
  ↓
Submit Form → Lead Created in Database
  ↓
Auto-WhatsApp Message Sent
  ↓
Admin Notification
  ↓
Admin Follows Up
  ↓
Lead Status Updated
  ↓
[Converted] → User Registers & Enrolls
  ↓
END
```

---

## 🔐 Authentication Flow

```
┌──────────────────────────────────────────────────┐
│          Authentication Methods                   │
├──────────────────────────────────────────────────┤
│                                                   │
│  1. Email/Password                               │
│     - Password hashing (bcrypt)                  │
│     - Email verification via OTP                 │
│                                                   │
│  2. Google OAuth 2.0                             │
│     - One-click login                            │
│     - Auto profile creation                      │
│                                                   │
│  3. Phone OTP                                     │
│     - SMS OTP (6-digit)                          │
│     - Quick verification                         │
│                                                   │
└──────────────────────────────────────────────────┘
         ↓
┌──────────────────────────────────────────────────┐
│         JWT Token Management                      │
├──────────────────────────────────────────────────┤
│                                                   │
│  Access Token:  1 hour expiry                    │
│  Refresh Token: 7 days expiry                    │
│                                                   │
│  Stored in:                                       │
│  - HttpOnly Cookies (Secure)                     │
│  - LocalStorage (Token backup)                   │
│                                                   │
└──────────────────────────────────────────────────┘
```

---

## 🎨 Design System Tokens

### Color Palette
```css
--deep-blue: #0A1929
--midnight-blue: #0F172A
--electric-cyan: #06B6D4
--purple-gradient: linear-gradient(135deg, #667EEA 0%, #764BA2 100%)
--glass-white: rgba(255, 255, 255, 0.1)
--glass-border: rgba(255, 255, 255, 0.18)
```

### Typography
```css
--font-primary: 'Inter', sans-serif
--font-display: 'Clash Display', sans-serif
--font-mono: 'JetBrains Mono', monospace
```

### Spacing Scale
```
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
```

---

## 🚀 API Endpoints (Summary)

### Public Routes
- `GET /api/courses` - List all courses
- `GET /api/courses/:id` - Course details
- `POST /api/contact` - Contact form

### Auth Routes
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/google` - Google OAuth
- `POST /api/auth/verify-otp` - OTP verification
- `POST /api/auth/refresh` - Refresh token

### Student Routes (Protected)
- `GET /api/student/dashboard` - Dashboard data
- `GET /api/student/enrollments` - My courses
- `POST /api/student/enroll` - Enroll in course
- `GET /api/student/certificates` - My certificates

### Payment Routes (Protected)
- `POST /api/payment/create-order` - Create Razorpay order
- `POST /api/payment/verify` - Verify payment
- `GET /api/payment/history` - Payment history

### Admin Routes (Protected + Admin)
- `POST /api/admin/courses` - Create course
- `PUT /api/admin/courses/:id` - Update course
- `DELETE /api/admin/courses/:id` - Delete course
- `GET /api/admin/students` - All students
- `GET /api/admin/analytics` - Platform analytics

---

## 🔒 Security Measures

1. **Authentication**
   - JWT with refresh token rotation
   - Password hashing (bcrypt, 12 rounds)
   - OAuth 2.0 integration

2. **Authorization**
   - Role-based access control (RBAC)
   - Route-level protection
   - Resource ownership verification

3. **Data Protection**
   - Input validation (Zod/Joi)
   - SQL injection prevention (Mongoose ODM)
   - XSS protection (sanitization)
   - CSRF tokens

4. **API Security**
   - Rate limiting (express-rate-limit)
   - CORS configuration
   - Helmet.js for headers
   - Request body size limits

5. **Payment Security**
   - Razorpay signature verification
   - Webhook validation
   - PCI DSS compliance

---

## 📊 Performance Optimization

1. **Frontend**
   - Next.js App Router (Server Components)
   - Image optimization (next/image)
   - Code splitting
   - Lazy loading
   - CDN for static assets

2. **Backend**
   - Database indexing
   - Query optimization
   - Caching (Redis - future)
   - Compression (gzip)
   - Connection pooling

3. **SEO**
   - Server-side rendering
   - Meta tags optimization
   - Sitemap generation
   - Structured data (JSON-LD)

---

## 🌐 Deployment Architecture

```
┌─────────────────────────────────────────────┐
│           Vercel (Frontend)                  │
│     Next.js 14 App + Edge Functions         │
└────────────────┬────────────────────────────┘
                 │
                 │ HTTPS
                 │
┌────────────────▼────────────────────────────┐
│        Backend API Server                    │
│   (Railway / AWS EC2 / DigitalOcean)        │
│          Node.js + Express                   │
└────────────────┬────────────────────────────┘
                 │
                 │
┌────────────────▼────────────────────────────┐
│         MongoDB Atlas                        │
│      (Cloud Database Cluster)               │
└─────────────────────────────────────────────┘
```

---

## 📦 Tech Stack Summary

| Layer | Technology |
|-------|-----------|
| Frontend Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | Shadcn UI |
| Animations | Framer Motion |
| State Management | React Context + Zustand |
| Form Handling | React Hook Form + Zod |
| Backend Framework | Express.js |
| Runtime | Node.js 20+ |
| Database | MongoDB 7.0 |
| ODM | Mongoose |
| Authentication | JWT + Google OAuth |
| Payment | Razorpay |
| File Upload | Cloudinary / AWS S3 |
| Email | Nodemailer / SendGrid |
| SMS | Twilio |

---

## ✅ Phase 1 Deliverables Complete

- ✅ Complete folder structure created
- ✅ Database schema designed
- ✅ User flows documented
- ✅ System architecture defined
- ✅ API structure planned
- ✅ Security measures outlined
- ✅ Deployment strategy documented

---

## 🎯 Next Phase Preview

**Phase 2:** High-Fidelity UI Design + Complete Home Page
- Premium glassmorphism components
- 3D animated hero section
- Course grid with filters
- Testimonials slider
- Stats counter animation
- Responsive design implementation

---

**Status:** ✅ Phase 1 Complete - Awaiting Approval
