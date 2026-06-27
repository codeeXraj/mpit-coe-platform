import mongoose, { Document, Schema } from 'mongoose';

export interface ICourse extends Document {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: 'AI' | 'CyberSecurity' | 'Drone' | '3DPrinting' | 'Other';
  thumbnail: string;
  instructor: { name: string; designation: string };
  duration: { weeks: number; totalHours: number };
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  pricing: { originalPrice: number; discountedPrice: number; isDiscountActive: boolean };
  studentsEnrolled: number;
  rating: { average: number; count: number };
  isFeatured: boolean;
  isActive: boolean;
  createdAt: Date;
}

const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    shortDescription: { type: String, required: true },
    description: { type: String, default: '' },
    category: { type: String, enum: ['AI', 'CyberSecurity', 'Drone', '3DPrinting', 'Other'], required: true },
    thumbnail: { type: String, default: '' },
    instructor: {
      name: { type: String, default: '' },
      designation: { type: String, default: '' },
    },
    duration: {
      weeks: { type: Number, default: 0 },
      totalHours: { type: Number, default: 0 },
    },
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
    pricing: {
      originalPrice: { type: Number, required: true },
      discountedPrice: { type: Number, required: true },
      isDiscountActive: { type: Boolean, default: false },
    },
    studentsEnrolled: { type: Number, default: 0 },
    rating: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<ICourse>('Course', courseSchema);
