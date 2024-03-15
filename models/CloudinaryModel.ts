import cloudinary from '../cloudinary.config';

export async function uploadImage(file: Express.Multer.File): Promise<string> {
        const result = await cloudinary.uploader.upload(file.path);
        return result.secure_url;
    
}