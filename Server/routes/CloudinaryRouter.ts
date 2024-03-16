// CloudinaryRoutes.ts
import { Router } from 'express';
import { uploadImageController } from '../controllers/CloudynaryController';
import multer from 'multer';

const CloudinaryRouter = Router();
const upload = multer();

CloudinaryRouter.post('/upload',upload.single('image'), uploadImageController);

export default CloudinaryRouter;