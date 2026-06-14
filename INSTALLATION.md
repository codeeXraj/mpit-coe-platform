# 🚀 Installation & Setup Guide

## Prerequisites Checklist

Before starting, ensure you have:

- [ ] **Node.js 20+** installed ([Download](https://nodejs.org/))
- [ ] **npm** or **yarn** package manager
- [ ] **MongoDB** installed locally OR MongoDB Atlas account
- [ ] **Git** installed
- [ ] **VS Code** or preferred IDE
- [ ] **Windows Terminal** or Command Prompt

---

## 📥 Step-by-Step Installation

### Step 1: Verify Node.js Installation
```bash
node --version
# Should show: v20.x.x or higher

npm --version
# Should show: 10.x.x or higher
```

---

### Step 2: Navigate to Project Directory
```bash
cd d:\MPIT\mpit-coe-platform
```

---

### Step 3: Install Frontend Dependencies

```bash
# Navigate to frontend
cd frontend

# Install all dependencies
npm install

# This will install:
# ✅ Next.js 14
# ✅ React 18
# ✅ TypeScript
# ✅ Tailwind CSS
# ✅ Framer Motion
# ✅ Shadcn UI components
# ✅ Axios
# ✅ React Hook Form + Zod
# ✅ And more...
```

**Expected Output:**
```
added 350+ packages in 2m
```

---

### Step 4: Install Backend Dependencies

```bash
# Navigate to backend (from project root)
cd ../backend

# Install all dependencies
npm install

# This will install:
# ✅ Express.js
# ✅ MongoDB & Mongoose
# ✅ JWT & bcrypt
# ✅ Nodemailer
# ✅ Razorpay SDK
# ✅ And more...
```

**Expected Output:**
```
added 200+ packages in 1m
```

---

### Step 5: Setup Environment Variables

#### Frontend Environment (.env.local)
```bash
cd ../frontend
copy .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id_here
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

#### Backend Environment (.env)
```bash
cd ../backend
copy .env.example .env
```

Edit `.env`:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mpit-coe
JWT_SECRET=mpit_super_secret_key_change_in_production_2024
JWT_REFRESH_SECRET=mpit_refresh_secret_key_change_in_production_2024
JWT_EXPIRE=1h
JWT_REFRESH_EXPIRE=7d

# Add other credentials as needed
```

---

### Step 6: Setup MongoDB

#### Option A: Local MongoDB
```bash
# Start MongoDB service
mongod

# Or using MongoDB Compass (GUI)
# Download from: https://www.mongodb.com/products/compass
```

#### Option B: MongoDB Atlas (Cloud)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create cluster
4. Get connection string
5. Update `MONGODB_URI` in backend `.env`

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mpit-coe?retryWrites=true&w=majority
```

---

### Step 7: Install Shadcn UI Components (Frontend)

```bash
cd ../frontend

# Initialize Shadcn UI (already configured)
# Install essential components:

npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add select
```

---

### Step 8: Verify Installation

#### Check Frontend
```bash
cd frontend
npm run dev
```

**Expected Output:**
```
  ▲ Next.js 14.1.0
  - Local:        http://localhost:3000
  - Ready in 2.5s
```

Open browser: http://localhost:3000

#### Check Backend
```bash
cd ../backend
npm run dev
```

**Expected Output:**
```
[nodemon] starting `ts-node src/server.ts`
🚀 Server running on port 5000
✅ MongoDB Connected
```

---

## 🧪 Testing Installation

### Test 1: Frontend Running
```bash
curl http://localhost:3000
# Should return HTML
```

### Test 2: Backend API
```bash
curl http://localhost:5000/api/health
# Should return: {"status":"ok"}
```

### Test 3: MongoDB Connection
Check backend console for:
```
✅ MongoDB Connected Successfully
Database: mpit-coe
```

---

## 🔧 Troubleshooting

### Issue: "Module not found"
**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Issue: "Port 3000 already in use"
**Solution:**
```bash
# Kill process on port 3000
npx kill-port 3000

# Or change port in package.json
"dev": "next dev -p 3001"
```

### Issue: "MongoDB connection failed"
**Solution:**
1. Check if MongoDB is running: `mongod --version`
2. Verify connection string in `.env`
3. Check firewall settings
4. For Atlas: Whitelist your IP address

### Issue: "TypeScript errors"
**Solution:**
```bash
# Rebuild TypeScript
npm run build

# Or ignore during dev (not recommended)
# Set in tsconfig.json: "skipLibCheck": true
```

---

## 📂 Project Structure Verification

After installation, verify these directories exist:

```
✅ frontend/
   ✅ node_modules/
   ✅ src/
   ✅ .env.local

✅ backend/
   ✅ node_modules/
   ✅ src/
   ✅ .env
```

---

## 🎨 Optional: VS Code Extensions

Recommended extensions for development:

1. **ES7+ React/Redux/React-Native snippets**
2. **Tailwind CSS IntelliSense**
3. **Prisma** (if using Prisma later)
4. **ESLint**
5. **Prettier**
6. **MongoDB for VS Code**
7. **Thunder Client** (API testing)

Install from VS Code Extensions marketplace.

---

## 📝 Environment Variables Checklist

### Frontend (.env.local)
- [ ] `NEXT_PUBLIC_API_URL` - Backend API URL
- [ ] `NEXT_PUBLIC_GOOGLE_CLIENT_ID` - For OAuth
- [ ] `NEXT_PUBLIC_RAZORPAY_KEY_ID` - For payments
- [ ] `NEXT_PUBLIC_SITE_URL` - Frontend URL
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` - Contact number

### Backend (.env)
- [ ] `NODE_ENV` - development/production
- [ ] `PORT` - Server port (5000)
- [ ] `MONGODB_URI` - Database connection
- [ ] `JWT_SECRET` - Token secret
- [ ] `JWT_REFRESH_SECRET` - Refresh token secret
- [ ] Email config (for Phase 3)
- [ ] Razorpay secrets (for Phase 6)
- [ ] Twilio config (for SMS, Phase 5)

---

## 🚀 Running Both Servers Simultaneously

### Option 1: Two Terminal Windows

**Terminal 1 - Backend:**
```bash
cd d:\MPIT\mpit-coe-platform\backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd d:\MPIT\mpit-coe-platform\frontend
npm run dev
```

### Option 2: Using Concurrently (Future)

Create `package.json` in root:
```json
{
  "scripts": {
    "dev": "concurrently \"npm run dev --prefix backend\" \"npm run dev --prefix frontend\""
  }
}
```

---

## ✅ Installation Complete Checklist

- [ ] Node.js 20+ installed
- [ ] Frontend dependencies installed (350+ packages)
- [ ] Backend dependencies installed (200+ packages)
- [ ] Frontend `.env.local` configured
- [ ] Backend `.env` configured
- [ ] MongoDB running (local or Atlas)
- [ ] Frontend server running on port 3000
- [ ] Backend server running on port 5000
- [ ] MongoDB connected successfully
- [ ] Shadcn UI components installed
- [ ] VS Code extensions installed (optional)

---

## 🎯 Next Steps After Installation

1. ✅ Verify both servers are running
2. ✅ Check MongoDB connection
3. ✅ Review documentation files
4. 🚀 Start Phase 2: Build Home Page UI

---

## 📞 Getting Help

If you encounter issues:

1. Check console for error messages
2. Verify all dependencies installed
3. Ensure environment variables are correct
4. Check MongoDB is running
5. Review troubleshooting section above

---

## 🎉 Success!

If both servers are running without errors:

```
✅ Frontend: http://localhost:3000
✅ Backend:  http://localhost:5000
✅ Database: Connected
```

**You're ready to start building!** 🚀

---

**Installation Guide Complete** ✅

*Proceed to Phase 2: Home Page Development* 🎨
