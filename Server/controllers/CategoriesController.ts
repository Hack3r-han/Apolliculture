import CategoriesModel from '../models/CategoriesModel';
import { Request, Response } from 'express';

export const CategoriesController = {
    getAllCategories: async (req: Request, res: Response) => {
        try {
            const categories = await CategoriesModel.getAllCategories();
            res.json(categories);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al leer la categoría' });
        }
    },

    getCategorie: async (req: Request, res: Response) => {
        try {
            const categorieId: string = req.params.id;
            const categories = await CategoriesModel.getCategorie(categorieId);
            if (!Array.isArray(categories) || categories.length === 0) {
                res.status(404).json({ message: `Esta categoría con id ${categorieId} no se encuentra` });
                return;
            }
            res.json(categories);
        } catch (error) {
            console.log(error);
        }
    },

    addCategorie: async (req: Request, res: Response) => {
        try {
            const { name, description } = req.body;
            if (!name || !description ) {
                res.status(400).json({ message: 'Por favor introduzca los datos de la categoría' });
                return;
            }
            await CategoriesModel.createCategorie(name, description);
            res.status(200).json({ message: 'Creado!' });
            return;
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Hubo un error al crear esta categoría' }); 
        }
    },

    updateCategorie: async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id;
            const { name, description } = req.body;
            if (!name || !description ) {
                res.status(400).json({ message: 'Por favor introduzca los datos de la categoría' });
                return;
            }
            await CategoriesModel.updateCategorie(id, name, description);
            res.status(200).json({ message: '¡Actualizado!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al actualizar la categoría' });
        }
    },

    deleteCategorie: async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id;
            await CategoriesModel.deleteCategorie(id);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al eliminar la categoría' });
        }
    },
};

export default CategoriesController;
