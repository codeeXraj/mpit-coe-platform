import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/User';

dotenv.config();

const createDefaultAdmin = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mpit-coe';
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB Connected');

    const existingAdmin = await User.findOne({ email: 'admin@mpit.com' });
    
    if (existingAdmin) {
      console.log('⚠️ Admin account already exists');
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash('admin123', 10);

    await User.create({
      email: 'admin@mpit.com',
      password: hashedPassword,
      name: 'Admin',
      phone: '+919876543210',
      role: 'admin'
    });

    console.log('✅ Default Admin Account Created');
    console.log('📧 Email: admin@mpit.com');
    console.log('🔑 Password: admin123');
    console.log('⚠️ Please change password after first login!');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

createDefaultAdmin();
