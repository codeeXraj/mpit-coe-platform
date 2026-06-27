import { Request, Response } from 'express';
import multer from 'multer';
import cloudinary from '../config/cloudinary';
import Media from '../models/Media';
import { Readable } from 'stream';

const storage = multer.memoryStorage();

const fileFilter = (req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp|svg/;
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'));
  }
};

export const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: fileFilter
});

const uploadToCloudinary = (buffer: Buffer, folder: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `mpit-coe/${folder}`,
        resource_type: 'image',
        transformation: [
          { width: 1920, height: 1080, crop: 'limit' },
          { quality: 'auto:good' },
          { fetch_format: 'auto' }
        ]
      },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );

    const readableStream = new Readable();
    readableStream.push(buffer);
    readableStream.push(null);
    readableStream.pipe(uploadStream);
  });
};

export const uploadMedia = async (req: Request, res: Response): Promise<any> => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'No file uploaded'
      });
    }

    const userId = (req as any).userId;
    const { alt, caption, folder } = req.body;

    const result = await uploadToCloudinary(req.file.buffer, folder || 'general');

    const media = await Media.create({
      fileName: result.public_id,
      originalName: req.file.originalname,
      mimeType: req.file.mimetype,
      fileSize: req.file.size,
      url: result.secure_url,
      thumbnail: result.secure_url.replace('/upload/', '/upload/c_thumb,w_300,h_300/'),
      alt: alt || '',
      caption: caption || '',
      folder: folder || 'general',
      uploadedBy: userId
    });

    return res.status(201).json({
      success: true,
      message: 'Image uploaded successfully',
      data: media
    });
  } catch (error: any) {
    console.error('Upload error:', error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getAllMedia = async (req: Request, res: Response): Promise<any> => {
  try {
    const { folder, search, page = 1, limit = 20 } = req.query;
    let query: any = {};

    if (folder) query.folder = folder;
    if (search) {
      query.$or = [
        { originalName: { $regex: search, $options: 'i' } },
        { alt: { $regex: search, $options: 'i' } }
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);
    const total = await Media.countDocuments(query);

    const media = await Media.find(query)
      .populate('uploadedBy', 'name email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    return res.status(200).json({
      success: true,
      count: media.length,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
      data: media
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const deleteMedia = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;

    const media = await Media.findById(id);
    if (!media) {
      return res.status(404).json({
        success: false,
        message: 'Media not found'
      });
    }

    await cloudinary.uploader.destroy(media.fileName);
    await Media.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: 'Media deleted successfully'
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const updateMedia = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const { alt, caption, folder } = req.body;

    const media = await Media.findByIdAndUpdate(
      id,
      { alt, caption, folder, updatedAt: Date.now() },
      { new: true }
    );

    if (!media) {
      return res.status(404).json({
        success: false,
        message: 'Media not found'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Media updated successfully',
      data: media
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
