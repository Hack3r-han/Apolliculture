import cloudinary from '../cloudinary.config';

export async function uploadImage(path : string) : Promise < string > {
    const result = await cloudinary
        .uploader
        .upload(path);
    return result.secure_url;

}