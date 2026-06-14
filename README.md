# 🎓 MPIT Centre of Excellence - EdTech Platform

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-brightgreen)](https://www.mongodb.com/)

> A premium, world-class course-selling platform for MPIT Centre of Excellence with glassmorphism UI, 3D elements, and smooth animations.

---

## 🚀 Features

### Student Features
- 🔍 Browse & Filter Courses
- 🎨 Premium Glassmorphism UI
- 💳 Secure Payment Gateway (Razorpay)
- 📊 Progress Tracking Dashboard
- 🎓 Digital Certificates
- 📱 Fully Responsive Design
- 🌓 Dark/Light Mode

### Admin Features
- 📚 Course Management (CRUD)
- 👥 Student Management
- 💰 Payment Tracking
- 📈 Analytics Dashboard
- 📧 Lead Management
- 🎫 Certificate Generation

### Technical Features
- ⚡ Next.js 14 with App Router
- 🎭 Framer Motion Animations
- 🎨 Tailwind CSS + Shadcn UI
- 🔐 JWT Authentication
- 🔄 Google OAuth Integration
- 📧 Email & SMS Notifications
- 🔒 Role-based Access Control

---

## 📁 Project Structure

```
mpit-coe-platform/
├── frontend/          # Next.js 14 Frontend
├── backend/           # Express.js Backend
├── docs/              # Documentation
├── ARCHITECTURE.md    # System Architecture
├── SITEMAP.md         # Complete Sitemap
└── USER_FLOWS.md      # User Journey Maps
```

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | Next.js 14, TypeScript, Tailwind CSS, Framer Motion |
| **Backend** | Node.js, Express.js, MongoDB, Mongoose |
| **Authentication** | JWT, Google OAuth, OTP |
| **Payment** | Razorpay |
| **UI Components** | Shadcn UI, Radix UI |
| **Styling** | Glassmorphism, 3D Cards, Smooth Animations |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ installed
- MongoDB installed or MongoDB Atlas account
- Git

### Installation

#### 1. Clone Repository
```bash
cd MPIT
cd mpit-coe-platform
```

#### 2. Setup Frontend
```bash
cd frontend
npm install
cp .env.example .env.local
# Edit .env.local with your configuration
npm run dev
```
Frontend will run at: http://localhost:3000

#### 3. Setup Backend
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```
Backend will run at: http://localhost:5000

---

## 🗄️ Database Setup

### Local MongoDB
```bash
# Start MongoDB
mongod

# Or use MongoDB Compass for GUI
```

### MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Add to `.env` file

---

## 🔑 Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/mpit-coe
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
EMAIL_USER=your_email@gmail.com
```

---

## 📚 Documentation

- **[Architecture](./ARCHITECTURE.md)** - Complete system architecture
- **[Sitemap](./SITEMAP.md)** - All pages and navigation
- **[User Flows](./USER_FLOWS.md)** - User journey diagrams

---

## 🎯 Development Phases

### ✅ Phase 1: Architecture (Current)
- [x] Project structure
- [x] Database schema
- [x] User flows
- [x] Configuration files

### 📋 Phase 2: UI Design & Home Page
- [ ] Glassmorphism components
- [ ] 3D Hero section
- [ ] Course grid
- [ ] Animations

### 📋 Phase 3: Authentication
- [ ] Email/Password login
- [ ] Google OAuth
- [ ] OTP verification

### 📋 Phase 4: Course Module
- [ ] Course listing
- [ ] Course details
- [ ] Enrollment system

### 📋 Phase 5: Dashboard
- [ ] Student dashboard
- [ ] Admin panel
- [ ] Analytics

### 📋 Phase 6: Payment Gateway
- [ ] Razorpay integration
- [ ] Invoice generation

### 📋 Phase 7: Production Deployment
- [ ] Testing
- [ ] Optimization
- [ ] Deployment

---

## 🎨 Design System

### Color Palette
- **Deep Blue**: `#0A1929`
- **Midnight Blue**: `#0F172A`
- **Electric Cyan**: `#06B6D4`
- **Purple Gradient**: `#667EEA → #764BA2`

### Typography
- **Primary**: Inter
- **Display**: Clash Display
- **Mono**: JetBrains Mono

---

## 🔐 Security Features

- Password hashing (bcrypt)
- JWT token authentication
- Role-based access control
- Rate limiting
- Input validation
- XSS protection
- CSRF protection

---

## 📞 Support

For queries, contact:
- **Email**: support@mpitcoe.com
- **Phone**: +91 98765 43210

---

## 📄 License

Private & Proprietary - MPIT Centre of Excellence

---

## 👨‍💻 Development Team

Built with ❤️ by the MPIT CoE Development Team

---

**Status**: ✅ Phase 1 Complete - Ready for Phase 2
