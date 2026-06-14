# MPIT CoE - User Flow Diagrams

## 🎯 Complete User Journey Maps

---

## Flow 1: New Student Enrollment Journey

```
┌─────────────────────────────────────────────────────────────┐
│                    LANDING PAGE                              │
│  • Hero with 3D animation                                    │
│  • "Explore Courses" CTA                                     │
└────────────┬────────────────────────────────────────────────┘
             │
             ↓
┌────────────────────────────────────────────────────────────┐
│                   COURSES PAGE                              │
│  • Filter by: AI, Cyber, Drone, 3D Printing               │
│  • Sort by: Price, Rating, Duration                        │
│  • Course Cards with: Title, Price, Rating, Duration       │
└────────────┬───────────────────────────────────────────────┘
             │
             ↓ [Click Course Card]
┌────────────────────────────────────────────────────────────┐
│                COURSE DETAIL PAGE                           │
│  • Course banner & overview                                │
│  • Curriculum accordion                                    │
│  • Instructor profile                                      │
│  • Student reviews                                         │
│  • FAQs section                                            │
│  • Sticky "Enroll Now" button                             │
└────────────┬───────────────────────────────────────────────┘
             │
             ↓ [Click "Enroll Now"]
┌────────────────────────────────────────────────────────────┐
│              AUTH CHECK MIDDLEWARE                          │
└────────────┬──────────────────────┬────────────────────────┘
             │                      │
      [Not Logged In]         [Already Logged In]
             │                      │
             ↓                      ↓
┌─────────────────────┐    ┌───────────────────────────────┐
│   REGISTER PAGE     │    │     PAYMENT PAGE              │
│                     │    │  • Course summary             │
│ Step 1: Basic Info  │    │  • Price breakdown            │
│ - First Name        │    │  • Apply coupon code          │
│ - Last Name         │    │  • "Proceed to Pay" button    │
│ - Email             │    └───────────┬───────────────────┘
│ - Phone             │                │
│ - Password          │                ↓
│                     │    ┌───────────────────────────────┐
│ Step 2: Profile     │    │   RAZORPAY GATEWAY            │
│ - Education         │    │  • UPI                        │
│ - Occupation        │    │  • Credit/Debit Card          │
│ - City/State        │    │  • Net Banking                │
│                     │    │  • Wallets                    │
│ Step 3: Verify      │    └───────────┬───────────────────┘
│ - Email OTP         │                │
│ - Phone OTP         │                ↓
└──────────┬──────────┘    ┌───────────────────────────────┐
           │               │   PAYMENT SUCCESS              │
           │               │  • Success animation           │
           │               │  • Order ID                    │
           │               │  • Download invoice            │
           └───────┬───────┤  • "Go to Dashboard" CTA      │
                   │       └───────────┬───────────────────┘
                   │                   │
                   ↓                   ↓
           ┌─────────────────────────────────────────────┐
           │         STUDENT DASHBOARD                    │
           │  • Welcome message                           │
           │  • Enrolled course card                      │
           │  • "Start Learning" button                   │
           │  • Progress: 0%                              │
           └────────────┬────────────────────────────────┘
                        │
                        ↓
           ┌─────────────────────────────────────────────┐
           │       COURSE LEARNING PAGE                   │
           │  • Module navigation sidebar                 │
           │  • Video player                              │
           │  • Notes section                             │
           │  • Resources download                        │
           │  • Mark as complete checkbox                 │
           └────────────┬────────────────────────────────┘
                        │
                        ↓
           ┌─────────────────────────────────────────────┐
           │      PROGRESS TRACKING                       │
           │  • Modules: 5/10 completed (50%)            │
           │  • Assignments: 3/5 submitted               │
           │  • Quiz scores: 85% average                 │
           └────────────┬────────────────────────────────┘
                        │
                        ↓
           ┌─────────────────────────────────────────────┐
           │      COURSE COMPLETION                       │
           │  • Congratulations animation                 │
           │  • Final assessment (optional)              │
           │  • Feedback form                            │
           └────────────┬────────────────────────────────┘
                        │
                        ↓
           ┌─────────────────────────────────────────────┐
           │     CERTIFICATE GENERATION                   │
           │  • Auto-generated certificate               │
           │  • Unique certificate number                │
           │  • Download PDF                             │
           │  • Share on LinkedIn                        │
           │  • Add to profile                           │
           └─────────────────────────────────────────────┘
```

---

## Flow 2: Quick Google Login Journey

```
┌──────────────────────────┐
│     ANY PAGE             │
│  Click "Login" button    │
└───────────┬──────────────┘
            │
            ↓
┌──────────────────────────────────────────┐
│         LOGIN PAGE                        │
│  • Email/Password form                   │
│  • "Login with Google" button (OAuth)    │
│  • "Login with OTP" option               │
└───────────┬──────────────────────────────┘
            │
            ↓ [Click "Login with Google"]
┌──────────────────────────────────────────┐
│      GOOGLE OAUTH POPUP                   │
│  • Select Google account                 │
│  • Grant permissions                     │
└───────────┬──────────────────────────────┘
            │
            ↓
┌──────────────────────────────────────────┐
│     PROFILE COMPLETION CHECK              │
└───────────┬──────────────┬───────────────┘
            │              │
   [First Time User]   [Existing User]
            │              │
            ↓              ↓
┌────────────────────┐  ┌──────────────────┐
│ COMPLETE PROFILE   │  │  REDIRECT TO     │
│ • Education        │  │  LAST PAGE or    │
│ • Occupation       │  │  DASHBOARD       │
│ • City/State       │  └──────────────────┘
└────────────┬───────┘
             │
             ↓
┌────────────────────────┐
│   DASHBOARD            │
│   Ready to Explore     │
└────────────────────────┘
```

---

## Flow 3: OTP Login (Passwordless)

```
┌──────────────────────────┐
│     LOGIN PAGE           │
│  Click "Login with OTP"  │
└───────────┬──────────────┘
            │
            ↓
┌──────────────────────────────────────┐
│   ENTER PHONE NUMBER                 │
│  • Input: +91 XXXXXXXXXX             │
│  • Click "Send OTP"                  │
└───────────┬──────────────────────────┘
            │
            ↓
┌──────────────────────────────────────┐
│   SMS SENT                            │
│  • "OTP sent to your phone"          │
│  • 6-digit OTP input boxes           │
│  • Resend OTP (60s timer)            │
└───────────┬──────────────────────────┘
            │
            ↓
┌──────────────────────────────────────┐
│   OTP VERIFICATION                    │
└───────────┬──────────────┬───────────┘
            │              │
      [Valid OTP]    [Invalid OTP]
            │              │
            ↓              ↓
┌────────────────┐  ┌──────────────────┐
│ LOGIN SUCCESS  │  │  ERROR MESSAGE   │
│ Redirect to    │  │  "Try Again"     │
│ Dashboard      │  └──────────────────┘
└────────────────┘
```

---

## Flow 4: Admin Course Creation

```
┌──────────────────────────────────┐
│   ADMIN DASHBOARD                │
│   Navigate to "Courses"          │
└────────────┬─────────────────────┘
             │
             ↓
┌──────────────────────────────────────────┐
│   COURSES MANAGEMENT PAGE                 │
│  • Table: All courses                    │
│  • Click "Add New Course" button         │
└────────────┬─────────────────────────────┘
             │
             ↓
┌────────────────────────────────────────────────────────┐
│              CREATE COURSE FORM                         │
│  (Multi-step wizard with progress indicator)           │
│                                                         │
│  Step 1: BASIC INFORMATION                             │
│  ├─ Course Title                                       │
│  ├─ Category (AI/Cyber/Drone/3D)                      │
│  ├─ Short Description                                  │
│  ├─ Detailed Description (Rich text editor)           │
│  └─ Level (Beginner/Intermediate/Advanced)            │
│                                                         │
│  Step 2: CURRICULUM                                    │
│  ├─ Add Module 1                                       │
│  │   ├─ Module Title                                   │
│  │   ├─ Topics (Dynamic add/remove)                   │
│  │   └─ Duration                                       │
│  ├─ Add Module 2                                       │
│  └─ ... (Add more modules)                            │
│                                                         │
│  Step 3: INSTRUCTOR & OUTCOMES                         │
│  ├─ Instructor Name                                    │
│  ├─ Instructor Avatar                                  │
│  ├─ Bio & Designation                                  │
│  ├─ Learning Outcomes (Multiple entries)              │
│  └─ Prerequisites                                      │
│                                                         │
│  Step 4: PRICING & DURATION                            │
│  ├─ Original Price                                     │
│  ├─ Discounted Price                                   │
│  ├─ Discount End Date (Optional)                      │
│  ├─ Course Duration (Weeks)                           │
│  ├─ Hours per week                                     │
│  └─ Max capacity                                       │
│                                                         │
│  Step 5: MEDIA & ASSETS                                │
│  ├─ Thumbnail Upload (16:9)                           │
│  ├─ Banner Image Upload                                │
│  ├─ Course Brochure PDF                                │
│  └─ Preview Images                                     │
│                                                         │
│  Step 6: ADDITIONAL INFO                               │
│  ├─ Features List                                      │
│  ├─ FAQs (Question & Answer pairs)                    │
│  ├─ Tags (SEO)                                         │
│  ├─ Start Date                                         │
│  └─ Certificate Included (Yes/No)                     │
│                                                         │
│  Step 7: PREVIEW & PUBLISH                             │
│  ├─ Preview how course will look                      │
│  ├─ Edit any section                                   │
│  └─ [Save as Draft] or [Publish Course]               │
└────────────┬───────────────────────────────────────────┘
             │
             ↓
┌──────────────────────────────────┐
│   COURSE PUBLISHED                │
│  • Success notification           │
│  • View course on live site       │
│  • Share course link              │
└───────────────────────────────────┘
```

---

## Flow 5: Lead Capture & Conversion

```
┌──────────────────────────────────┐
│   GUEST USER BROWSING            │
│   Views course without login     │
└────────────┬─────────────────────┘
             │
             ↓
┌─────────────────────────────────────────┐
│   COURSE DETAIL PAGE                     │
│   • "Download Brochure" button          │
│   • "Get Free Demo" CTA                 │
│   • "Request Callback" link             │
└────────────┬────────────────────────────┘
             │
             ↓ [Click any CTA]
┌─────────────────────────────────────────┐
│   LEAD CAPTURE MODAL                     │
│   • Name (Required)                      │
│   • Email (Required)                     │
│   • Phone (Required)                     │
│   • Interested Course (Auto-filled)     │
│   • Message (Optional)                   │
│   • [Submit] button                      │
└────────────┬────────────────────────────┘
             │
             ↓
┌─────────────────────────────────────────┐
│   BACKEND: LEAD CREATED                  │
│   • Save to Leads collection            │
│   • Status: "New"                       │
│   • Timestamp: Created                  │
└────────────┬────────────────────────────┘
             │
             ├──────────────┬──────────────┬────────────────┐
             ↓              ↓              ↓                ↓
┌──────────────────┐ ┌──────────────┐ ┌─────────────┐ ┌──────────┐
│ AUTO WHATSAPP    │ │ EMAIL TO     │ │ SMS TO      │ │ ADMIN    │
│ MESSAGE SENT     │ │ USER         │ │ USER        │ │ NOTIF.   │
│                  │ │              │ │             │ │          │
│ "Thanks for      │ │ "Thank you   │ │ "Your req   │ │ "New lead│
│  interest!       │ │  for your    │ │  received"  │ │  from    │
│  We'll contact   │ │  interest!"  │ │             │ │  website"│
│  you soon"       │ │              │ │             │ │          │
└──────────────────┘ └──────────────┘ └─────────────┘ └──────────┘
             │
             ↓
┌─────────────────────────────────────────┐
│   ADMIN DASHBOARD                        │
│   • New lead appears in "Leads" tab     │
│   • Status: "New" (Red badge)           │
│   • Assigned to: Sales team member      │
└────────────┬────────────────────────────┘
             │
             ↓
┌─────────────────────────────────────────┐
│   ADMIN TAKES ACTION                     │
│   • Calls the lead                      │
│   • Updates status: "Contacted"         │
│   • Adds notes: "Interested in AI Lab"  │
└────────────┬────────────────────────────┘
             │
             ↓
┌─────────────────────────────────────────┐
│   FOLLOW-UP REMINDERS                    │
│   • Admin gets reminder to follow up    │
│   • Status updated: "Interested"        │
└────────────┬────────────────────────────┘
             │
             ↓
┌─────────────────────────────────────────┐
│   CONVERSION                             │
│   • Lead registers on platform          │
│   • Status updated: "Enrolled"          │
│   • Lead moved to Students table        │
│   • ROI tracking updated                │
└─────────────────────────────────────────┘
```

---

## Flow 6: Payment & Enrollment Process

```
┌──────────────────────────────────┐
│   COURSE DETAIL PAGE             │
│   Click "Enroll Now"             │
└────────────┬─────────────────────┘
             │
             ↓
┌──────────────────────────────────────────────┐
│   ENROLLMENT CONFIRMATION PAGE                │
│   ┌────────────────────────────────────┐    │
│   │ Course: AI & ML Fundamentals       │    │
│   │ Duration: 12 Weeks                 │    │
│   │ Price: ₹15,000  ₹9,999            │    │
│   │ Discount: 33% OFF                  │    │
│   └────────────────────────────────────┘    │
│                                               │
│   Have a coupon code?                        │
│   [_______________] [Apply]                  │
│                                               │
│   [Proceed to Payment]                       │
└────────────┬──────────────────────────────────┘
             │
             ↓
┌──────────────────────────────────────────────┐
│   BACKEND: CREATE RAZORPAY ORDER              │
│   • Generate order_id                        │
│   • Amount: 999900 (paise)                   │
│   • Currency: INR                            │
│   • Receipt: AUTO_GENERATED                  │
└────────────┬──────────────────────────────────┘
             │
             ↓
┌──────────────────────────────────────────────┐
│   RAZORPAY CHECKOUT MODAL                     │
│   ┌────────────────────────────────────┐    │
│   │  Pay ₹9,999                        │    │
│   │  ───────────────────────────────   │    │
│   │  [💳] Credit/Debit Card           │    │
│   │  [📱] UPI                          │    │
│   │  [🏦] Net Banking                  │    │
│   │  [👛] Wallets                      │    │
│   │                                     │    │
│   │  Card Number: [_______________]    │    │
│   │  Expiry: [__/__]  CVV: [___]      │    │
│   │  Name: [_______________]           │    │
│   │                                     │    │
│   │  [Pay ₹9,999]                      │    │
│   └────────────────────────────────────┘    │
└────────────┬──────────────────────────────────┘
             │
             ↓ [User completes payment]
┌──────────────────────────────────────────────┐
│   RAZORPAY RESPONSE                           │
│   • razorpay_payment_id                      │
│   • razorpay_order_id                        │
│   • razorpay_signature                       │
└────────────┬──────────────────────────────────┘
             │
             ↓
┌──────────────────────────────────────────────┐
│   BACKEND: VERIFY PAYMENT                     │
│   • Verify signature using secret key       │
│   • Check: signature == HMAC(order_id +     │
│             payment_id, secret)              │
└────────────┬──────────────┬──────────────────┘
             │              │
      [Valid Signature]  [Invalid]
             │              │
             ↓              ↓
┌─────────────────────┐ ┌────────────────────┐
│ PAYMENT SUCCESS     │ │ PAYMENT FAILED     │
│                     │ │                    │
│ 1. Update Payment   │ │ • Show error       │
│    status: "paid"   │ │ • Log incident     │
│                     │ │ • Retry option     │
│ 2. Create           │ └────────────────────┘
│    Enrollment       │
│    record           │
│                     │
│ 3. Add course to    │
│    user.enrolled    │
│                     │
│ 4. Send Welcome     │
│    Email            │
│                     │
│ 5. Generate Invoice │
│                     │
│ 6. Send SMS         │
│    confirmation     │
└──────────┬──────────┘
           │
           ↓
┌──────────────────────────────────────┐
│   SUCCESS PAGE                        │
│   🎉 Enrollment Successful!          │
│                                       │
│   Order ID: #ORD-2024-001            │
│   Amount Paid: ₹9,999                │
│                                       │
│   📧 Confirmation email sent         │
│   📄 Download Invoice                │
│                                       │
│   [Go to Dashboard] [View Course]    │
└──────────┬───────────────────────────┘
           │
           ↓
┌──────────────────────────────────────┐
│   STUDENT DASHBOARD                   │
│   • New course appears                │
│   • Status: Active                    │
│   • Progress: 0%                      │
│   • [Start Learning] button          │
└───────────────────────────────────────┘
```

---

## Flow 7: Certificate Generation & Verification

```
┌──────────────────────────────────┐
│   STUDENT COMPLETES COURSE       │
│   • All modules: 100%            │
│   • Assignments: Submitted       │
│   • Final quiz: Passed           │
└────────────┬─────────────────────┘
             │
             ↓
┌──────────────────────────────────────────┐
│   BACKEND: TRIGGER CERTIFICATE GEN       │
│   • Check completion criteria            │
│   • All modules completed ✓              │
│   • Minimum score achieved ✓             │
└────────────┬─────────────────────────────┘
             │
             ↓
┌──────────────────────────────────────────┐
│   GENERATE CERTIFICATE                    │
│   • Unique cert number: MPIT-2024-AI-001 │
│   • Student name from profile            │
│   • Course name                          │
│   • Issue date                           │
│   • Verification QR code                 │
│   • Digital signature                    │
│   • Save as PDF                          │
└────────────┬─────────────────────────────┘
             │
             ↓
┌──────────────────────────────────────────┐
│   SAVE TO DATABASE                        │
│   • Create Certificate record            │
│   • Link to User & Course                │
│   • Store PDF URL                        │
│   • Generate verification code           │
└────────────┬─────────────────────────────┘
             │
             ↓
┌──────────────────────────────────────────┐
│   NOTIFY STUDENT                          │
│   • In-app notification                  │
│   • Email with PDF attachment            │
│   • SMS: "Congrats! Certificate ready"   │
└────────────┬─────────────────────────────┘
             │
             ↓
┌──────────────────────────────────────────┐
│   DASHBOARD: CERTIFICATES TAB             │
│   ┌────────────────────────────────┐    │
│   │  🎓 AI & ML Fundamentals       │    │
│   │  Issued: Jan 15, 2024          │    │
│   │  Cert No: MPIT-2024-AI-001     │    │
│   │                                 │    │
│   │  [Download PDF]                 │    │
│   │  [Share on LinkedIn]            │    │
│   │  [Verify Certificate]           │    │
│   └────────────────────────────────┘    │
└─────────────────────────────────────────┘

CERTIFICATE VERIFICATION (Public Access)
┌──────────────────────────────────────────┐
│   /verify-certificate                     │
│                                           │
│   Enter Certificate Number:              │
│   [MPIT-2024-AI-001_____________]        │
│                                           │
│   [Verify]                                │
└────────────┬──────────────────────────────┘
             │
             ↓
┌──────────────────────────────────────────┐
│   VERIFICATION RESULT                     │
│   ✅ Valid Certificate                   │
│                                           │
│   Student: John Doe                      │
│   Course: AI & ML Fundamentals           │
│   Issue Date: Jan 15, 2024               │
│   Certificate ID: MPIT-2024-AI-001       │
│   Status: Active                         │
└──────────────────────────────────────────┘
```

---

## 🎯 Key User Interactions Summary

| User Type | Primary Goals | Key Actions |
|-----------|---------------|-------------|
| **Guest** | Explore courses | Browse, Filter, Read details, Download brochure |
| **Student** | Learn & Complete | Enroll, Pay, Watch videos, Submit assignments, Get certificate |
| **Admin** | Manage Platform | Add courses, View analytics, Manage students, Track payments |
| **Lead** | Get Information | Fill form, Get contacted, Convert to student |

---

## 📊 Conversion Metrics to Track

1. **Landing → Course Detail**: Click-through rate
2. **Course Detail → Enroll Click**: Intent rate
3. **Enroll → Registration**: Drop-off analysis
4. **Registration → Payment**: Conversion funnel
5. **Payment → Success**: Payment success rate
6. **Lead Form → Enrollment**: Lead conversion rate

---

**Status:** ✅ User Flows Complete
