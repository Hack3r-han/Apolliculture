// En un controlador de tu aplicación
// CloudinaryController.ts
import { Request, Response } from 'express';
import { uploadImage } from '../models/CloudinaryModel';
import fs from 'fs';

export async function uploadImageController(req: Request, res: Response) {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No se ha proporcionado ninguna imagen' });
        }

        // Obtener la extensión del archivo original
        const originalNameParts = req.file.originalname.split('.');
        const extension = originalNameParts[originalNameParts.length - 1];

        // Generar un nombre de archivo único y legible
        const uniqueFileName = `${Date.now()}-${Math.round(Math.random() * 10000)}.${extension}`;

        // Guardar la imagen en la carpeta "uploads" con el nuevo nombre
        const newPath = `uploads/${uniqueFileName}`;
        fs.renameSync(req.file.path, newPath);

        // Luego, subir la imagen a Cloudinary
        const imageUrl = await uploadImage(req.file);

        res.json({ imageUrl });
    } catch (error) {
        console.error('Error en el controlador de subida de imágenes:', error);
        res.status(500).json({ error: 'Error en el controlador de subida de imágenes' });
    }
}

