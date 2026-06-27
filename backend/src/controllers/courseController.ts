import { Request, Response } from 'express';
import Course from '../models/Course';

const slugify = (text: string) =>
  text.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const createCourse = async (req: Request, res: Response): Promise<any> => {
  try {
    const slug = slugify(req.body.title) + '-' + Date.now();
    const course = await Course.create({ ...req.body, slug });
    return res.status(201).json({ success: true, data: course });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllCourses = async (req: Request, res: Response): Promise<any> => {
  try {
    const { category, featured, active } = req.query;
    const query: any = {};
    if (active === 'true') query.isActive = true;
    if (category && category !== 'all') query.category = category;
    if (featured === 'true') query.isFeatured = true;

    const courses = await Course.find(query).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: courses.length, data: courses });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updateCourse = async (req: Request, res: Response): Promise<any> => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' });
    return res.status(200).json({ success: true, data: course });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteCourse = async (req: Request, res: Response): Promise<any> => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ success: false, message: 'Course not found' });
    return res.status(200).json({ success: true, message: 'Course deleted' });
  } catch (error: any) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
