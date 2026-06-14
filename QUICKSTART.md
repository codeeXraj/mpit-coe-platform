# 🚀 Quick Start Guide - MPIT CoE Platform

## 📦 Installation Commands

### Frontend Setup
```bash
cd d:\MPIT\mpit-coe-platform\frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd d:\MPIT\mpit-coe-platform\backend
npm install
npm run dev
```

---

## 🌐 Development URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Docs**: http://localhost:5000/api-docs (Future)

---

## 🎯 Key Pages to Build (Phase 2 onwards)

### Frontend Routes
1. `/` - Home page with 3D hero
2. `/courses` - All courses with filters
3. `/courses/[slug]` - Course detail page
4. `/auth/login` - Login page
5. `/auth/register` - Registration
6. `/dashboard` - Student dashboard
7. `/admin` - Admin panel

---

## 📋 Phase Checklist

### Phase 1: ✅ COMPLETE
- [x] Folder structure
- [x] Database schema
- [x] User flows documented
- [x] Configuration files
- [x] Architecture documentation

### Phase 2: Next Up
- [ ] Global CSS with glassmorphism
- [ ] Reusable UI components (Button, Card, Input)
- [ ] Layout components (Header, Footer)
- [ ] Home page sections:
  - [ ] Hero with 3D animation
  - [ ] Course categories grid
  - [ ] Stats counter
  - [ ] Testimonials
  - [ ] CTA section

---

## 🎨 Design Tokens (Quick Reference)

### Colors
```css
--deep-blue: #0A1929
--midnight-blue: #0F172A
--electric-cyan: #06B6D4
--purple-gradient: linear-gradient(135deg, #667EEA 0%, #764BA2 100%)
```

### Glassmorphism
```css
background: rgba(255, 255, 255, 0.1)
backdrop-filter: blur(10px)
border: 1px solid rgba(255, 255, 255, 0.18)
```

### 3D Card Shadow
```css
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37)
```

---

## 🔧 Essential npm Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Backend
```bash
npm run dev      # Start with nodemon (auto-reload)
npm run build    # Compile TypeScript
npm start        # Start compiled version
```

---

## 📊 Database Collections (Summary)

1. **users** - Student/Admin accounts
2. **courses** - All courses data
3. **enrollments** - Student enrollments
4. **payments** - Payment transactions
5. **certificates** - Generated certificates
6. **leads** - Marketing leads
7. **announcements** - Platform announcements
8. **contactForms** - Contact submissions

---

## 🔐 Authentication Flow

```
1. User registers → Email verification
2. JWT token issued → Stored in cookies
3. Access Token: 1 hour
4. Refresh Token: 7 days
5. Google OAuth as alternative
```

---

## 💡 Important Notes

### Before Starting Phase 2:
1. Install all frontend dependencies
2. Setup MongoDB (local or Atlas)
3. Configure environment variables
4. Test backend server startup

### Shadcn UI Components to Add:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add dropdown-menu
```

---

## 🎯 Next Steps for Phase 2

1. Create `globals.css` with glassmorphism styles
2. Build reusable UI components
3. Create layout (Header + Footer)
4. Design hero section with 3D elements
5. Implement Framer Motion animations
6. Build course cards with hover effects
7. Add responsive design

---

## 📞 Quick Links

- **Architecture**: [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Sitemap**: [SITEMAP.md](./SITEMAP.md)
- **User Flows**: [USER_FLOWS.md](./USER_FLOWS.md)
- **Tailwind Docs**: https://tailwindcss.com
- **Shadcn UI**: https://ui.shadcn.com
- **Framer Motion**: https://www.framer.com/motion

---

**Ready to build Phase 2!** 🚀
