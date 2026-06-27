import express from 'express';
import { createCourse, getAllCourses, updateCourse, deleteCourse } from '../controllers/courseController';
import { authMiddleware, adminOnly } from '../middleware/auth.middleware';

const router = express.Router();

router.get('/', getAllCourses);
router.post('/', authMiddleware, adminOnly, createCourse);
router.put('/:id', authMiddleware, adminOnly, updateCourse);
router.delete('/:id', authMiddleware, adminOnly, deleteCourse);

export default router;
