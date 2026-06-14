# 🔌 MPIT CoE - API Endpoints Documentation

Base URL: `http://localhost:5000/api`

---

## 🔐 Authentication Endpoints

### Register User
```
POST /api/auth/register
Content-Type: application/json

Body:
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "password": "SecurePass123",
  "education": "B.Tech",
  "occupation": "Student"
}

Response: 201
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "userId": "507f1f77bcf86cd799439011",
    "email": "john@example.com",
    "verificationRequired": true
  }
}
```

### Login
```
POST /api/auth/login
Content-Type: application/json

Body:
{
  "email": "john@example.com",
  "password": "SecurePass123"
}

Response: 200
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "email": "john@example.com",
      "firstName": "John",
      "role": "student"
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
  }
}
```

### Google OAuth Login
```
POST /api/auth/google
Content-Type: application/json

Body:
{
  "token": "google_oauth_token_here"
}

Response: 200
{
  "success": true,
  "message": "Google login successful",
  "data": {
    "user": {...},
    "accessToken": "...",
    "refreshToken": "..."
  }
}
```

### Send OTP
```
POST /api/auth/send-otp
Content-Type: application/json

Body:
{
  "phone": "+919876543210"
}

Response: 200
{
  "success": true,
  "message": "OTP sent successfully",
  "data": {
    "otpId": "otp_123456",
    "expiresIn": 300
  }
}
```

### Verify OTP
```
POST /api/auth/verify-otp
Content-Type: application/json

Body:
{
  "phone": "+919876543210",
  "otp": "123456"
}

Response: 200
{
  "success": true,
  "message": "OTP verified",
  "data": {
    "accessToken": "...",
    "refreshToken": "..."
  }
}
```

### Refresh Token
```
POST /api/auth/refresh
Content-Type: application/json

Body:
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}

Response: 200
{
  "success": true,
  "data": {
    "accessToken": "new_access_token_here"
  }
}
```

---

## 📚 Course Endpoints (Public)

### Get All Courses
```
GET /api/courses?category=AI&level=Beginner&page=1&limit=10

Response: 200
{
  "success": true,
  "data": {
    "courses": [
      {
        "_id": "507f1f77bcf86cd799439011",
        "title": "AI & Machine Learning Fundamentals",
        "slug": "ai-ml-fundamentals",
        "category": "AI",
        "thumbnail": "https://...",
        "pricing": {
          "originalPrice": 15000,
          "discountedPrice": 9999
        },
        "duration": {
          "weeks": 12,
          "totalHours": 48
        },
        "rating": {
          "average": 4.8,
          "count": 234
        },
        "studentsEnrolled": 1250,
        "level": "Beginner"
      }
    ],
    "pagination": {
      "total": 45,
      "page": 1,
      "pages": 5
    }
  }
}
```

### Get Course by ID/Slug
```
GET /api/courses/:slug

Response: 200
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "AI & Machine Learning Fundamentals",
    "description": "Complete course description...",
    "curriculum": [
      {
        "module": 1,
        "title": "Introduction to AI",
        "topics": ["What is AI", "History", "Applications"],
        "duration": "4 hours"
      }
    ],
    "instructor": {
      "name": "Dr. Rajesh Kumar",
      "avatar": "https://...",
      "bio": "PhD in AI...",
      "designation": "Senior AI Researcher"
    },
    "learningOutcomes": [...],
    "prerequisites": [...],
    "faqs": [...]
  }
}
```

### Search Courses
```
GET /api/courses/search?q=machine+learning

Response: 200
{
  "success": true,
  "data": {
    "results": [...],
    "count": 12
  }
}
```

---

## 🎓 Student Endpoints (Protected)

### Get Student Dashboard
```
GET /api/student/dashboard
Authorization: Bearer {accessToken}

Response: 200
{
  "success": true,
  "data": {
    "enrolledCourses": 3,
    "completedCourses": 1,
    "totalProgress": 67,
    "recentActivity": [...],
    "upcomingSessions": [...]
  }
}
```

### Get My Enrollments
```
GET /api/student/enrollments
Authorization: Bearer {accessToken}

Response: 200
{
  "success": true,
  "data": [
    {
      "_id": "enrollment_id",
      "course": {
        "title": "AI Fundamentals",
        "thumbnail": "..."
      },
      "enrollmentDate": "2024-01-15",
      "status": "active",
      "progress": {
        "percentage": 45,
        "completedModules": [1, 2, 3],
        "currentModule": 4
      }
    }
  ]
}
```

### Enroll in Course
```
POST /api/student/enroll
Authorization: Bearer {accessToken}
Content-Type: application/json

Body:
{
  "courseId": "507f1f77bcf86cd799439011",
  "paymentId": "pay_123456"
}

Response: 201
{
  "success": true,
  "message": "Enrollment successful",
  "data": {
    "enrollmentId": "enrollment_id",
    "courseAccess": true
  }
}
```

### Update Progress
```
PUT /api/student/progress/:enrollmentId
Authorization: Bearer {accessToken}
Content-Type: application/json

Body:
{
  "moduleId": 4,
  "completed": true
}

Response: 200
{
  "success": true,
  "message": "Progress updated",
  "data": {
    "newProgress": 50
  }
}
```

### Get My Certificates
```
GET /api/student/certificates
Authorization: Bearer {accessToken}

Response: 200
{
  "success": true,
  "data": [
    {
      "_id": "cert_id",
      "certificateNumber": "MPIT-2024-AI-001",
      "courseName": "AI Fundamentals",
      "issuedDate": "2024-01-20",
      "certificateUrl": "https://..."
    }
  ]
}
```

---

## 💳 Payment Endpoints (Protected)

### Create Razorpay Order
```
POST /api/payment/create-order
Authorization: Bearer {accessToken}
Content-Type: application/json

Body:
{
  "courseId": "507f1f77bcf86cd799439011",
  "couponCode": "SAVE20"
}

Response: 200
{
  "success": true,
  "data": {
    "orderId": "order_xyz123",
    "amount": 999900,
    "currency": "INR",
    "key": "rzp_live_...",
    "discountApplied": 2000
  }
}
```

### Verify Payment
```
POST /api/payment/verify
Authorization: Bearer {accessToken}
Content-Type: application/json

Body:
{
  "razorpay_order_id": "order_xyz123",
  "razorpay_payment_id": "pay_abc456",
  "razorpay_signature": "signature_here",
  "courseId": "507f1f77bcf86cd799439011"
}

Response: 200
{
  "success": true,
  "message": "Payment verified successfully",
  "data": {
    "paymentId": "payment_record_id",
    "enrollmentId": "enrollment_id",
    "invoiceUrl": "https://..."
  }
}
```

### Get Payment History
```
GET /api/payment/history
Authorization: Bearer {accessToken}

Response: 200
{
  "success": true,
  "data": [
    {
      "_id": "payment_id",
      "amount": 9999,
      "course": "AI Fundamentals",
      "status": "completed",
      "date": "2024-01-15",
      "invoiceNumber": "INV-2024-001"
    }
  ]
}
```

### Download Invoice
```
GET /api/payment/invoice/:invoiceId
Authorization: Bearer {accessToken}

Response: 200 (PDF File)
```

---

## 👨💼 Admin Endpoints (Protected + Admin Role)

### Admin Dashboard Stats
```
GET /api/admin/dashboard
Authorization: Bearer {adminToken}

Response: 200
{
  "success": true,
  "data": {
    "totalStudents": 1245,
    "totalCourses": 45,
    "totalRevenue": 5600000,
    "activeEnrollments": 890,
    "recentEnrollments": [...],
    "revenueChart": [...]
  }
}
```

### Create Course
```
POST /api/admin/courses
Authorization: Bearer {adminToken}
Content-Type: application/json

Body:
{
  "title": "Advanced Cyber Security",
  "category": "CyberSecurity",
  "description": "...",
  "curriculum": [...],
  "pricing": {
    "originalPrice": 20000,
    "discountedPrice": 14999
  },
  "duration": {
    "weeks": 16,
    "hoursPerWeek": 4
  },
  "instructor": {...},
  "level": "Advanced"
}

Response: 201
{
  "success": true,
  "message": "Course created successfully",
  "data": {
    "courseId": "new_course_id",
    "slug": "advanced-cyber-security"
  }
}
```

### Update Course
```
PUT /api/admin/courses/:id
Authorization: Bearer {adminToken}
Content-Type: application/json

Body: { ...updated fields... }

Response: 200
{
  "success": true,
  "message": "Course updated successfully"
}
```

### Delete Course
```
DELETE /api/admin/courses/:id
Authorization: Bearer {adminToken}

Response: 200
{
  "success": true,
  "message": "Course deleted successfully"
}
```

### Get All Students
```
GET /api/admin/students?page=1&limit=20
Authorization: Bearer {adminToken}

Response: 200
{
  "success": true,
  "data": {
    "students": [
      {
        "_id": "student_id",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john@example.com",
        "enrolledCourses": 2,
        "totalSpent": 19998,
        "joinedDate": "2024-01-10"
      }
    ],
    "pagination": {...}
  }
}
```

### Get Student Details
```
GET /api/admin/students/:id
Authorization: Bearer {adminToken}

Response: 200
{
  "success": true,
  "data": {
    "profile": {...},
    "enrollments": [...],
    "payments": [...],
    "certificates": [...]
  }
}
```

### Get All Payments
```
GET /api/admin/payments?status=completed&page=1
Authorization: Bearer {adminToken}

Response: 200
{
  "success": true,
  "data": {
    "payments": [...],
    "totalRevenue": 5600000,
    "pagination": {...}
  }
}
```

### Generate Certificate
```
POST /api/admin/certificates/generate
Authorization: Bearer {adminToken}
Content-Type: application/json

Body:
{
  "enrollmentId": "enrollment_id"
}

Response: 200
{
  "success": true,
  "message": "Certificate generated",
  "data": {
    "certificateId": "cert_id",
    "certificateUrl": "https://..."
  }
}
```

### Get All Leads
```
GET /api/admin/leads?status=new&page=1
Authorization: Bearer {adminToken}

Response: 200
{
  "success": true,
  "data": {
    "leads": [
      {
        "_id": "lead_id",
        "name": "Jane Smith",
        "email": "jane@example.com",
        "phone": "+919876543210",
        "interestedCourse": "AI Lab",
        "status": "new",
        "createdAt": "2024-01-25"
      }
    ],
    "pagination": {...}
  }
}
```

### Update Lead Status
```
PUT /api/admin/leads/:id
Authorization: Bearer {adminToken}
Content-Type: application/json

Body:
{
  "status": "contacted",
  "notes": "Called and showed interest"
}

Response: 200
{
  "success": true,
  "message": "Lead updated"
}
```

### Get Analytics
```
GET /api/admin/analytics?period=30days
Authorization: Bearer {adminToken}

Response: 200
{
  "success": true,
  "data": {
    "enrollmentTrends": [...],
    "revenueTrends": [...],
    "coursePerformance": [...],
    "conversionRate": 23.5,
    "averageOrderValue": 11250
  }
}
```

---

## 📧 Contact & Lead Endpoints

### Submit Contact Form
```
POST /api/contact
Content-Type: application/json

Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "subject": "Course Inquiry",
  "message": "I want to know more about AI courses"
}

Response: 200
{
  "success": true,
  "message": "Your message has been sent successfully"
}
```

### Submit Lead Form
```
POST /api/leads
Content-Type: application/json

Body:
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+919876543210",
  "interestedCourse": "AI Lab",
  "source": "website"
}

Response: 201
{
  "success": true,
  "message": "Thank you! We'll contact you soon",
  "data": {
    "leadId": "lead_id"
  }
}
```

---

## 🔍 Utility Endpoints

### Verify Certificate
```
GET /api/verify-certificate/:certificateNumber

Response: 200
{
  "success": true,
  "data": {
    "valid": true,
    "studentName": "John Doe",
    "courseName": "AI Fundamentals",
    "issueDate": "2024-01-20",
    "certificateNumber": "MPIT-2024-AI-001"
  }
}
```

### Apply Coupon
```
POST /api/coupon/validate
Content-Type: application/json

Body:
{
  "code": "SAVE20",
  "courseId": "507f1f77bcf86cd799439011"
}

Response: 200
{
  "success": true,
  "data": {
    "valid": true,
    "discountType": "percentage",
    "discountValue": 20,
    "discountAmount": 2000,
    "finalPrice": 7999
  }
}
```

---

## ⚠️ Error Response Format

All errors follow this format:

```json
{
  "success": false,
  "error": {
    "message": "Error description",
    "code": "ERROR_CODE",
    "statusCode": 400
  }
}
```

### Common Error Codes
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `409` - Conflict (e.g., email already exists)
- `422` - Validation Error
- `429` - Too Many Requests
- `500` - Internal Server Error

---

## 🔒 Authentication Headers

Protected endpoints require JWT token:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

**Status:** API Structure Documented - Ready for Implementation
