import express from 'express';
import { upload, uploadMedia, getAllMedia, deleteMedia, updateMedia } from '../controllers/mediaController';
import { authMiddleware, adminOnly } from '../middleware/auth.middleware';

const router = express.Router();

router.post('/upload', authMiddleware, adminOnly, upload.single('file'), uploadMedia);
router.get('/', authMiddleware, getAllMedia);
router.delete('/:id', authMiddleware, adminOnly, deleteMedia);
router.put('/:id', authMiddleware, adminOnly, updateMedia);

export default router;
