import CategoriesModel from '../models/CategoriesModel';
import { Request, Response } from 'express';

export const CategoriesController = {
    getAllCategories: async (req: Request, res: Response) => {
        try {
            const categories = await CategoriesModel.getAllCategories();
            res.json(categories);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the categories' });
        }
    },

    getCategorie: async (req: Request, res: Response) => {
        try {
            const categoryId: string = req.params.id;
            const categories:any = await CategoriesModel.getCategorie(categoryId);
            if (!categories || categories.length === 0) {
                res.status(404).json({ message: `The categories with id ${categoryId} has not found` });
                return;
            }
            res.json(categories);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the categories' });
        }
    },

    addCategorie: async (req: Request, res: Response) => {
        try {
            const { name, description } = req.body;
            if (!name || !description ) {
                res.status(400).json({ message: 'Please enter the categories informatio' });
                return;
            }
            await CategoriesModel.createCategorie(name, description);
            res.status(201).json({ message: 'Categories created correctly!' });
            return;
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'There was an error creating this categories' }); 
        }
    },

    updateCategorie: async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id;
            const { name, description } = req.body;
            if (!name || !description ) {
                res.status(400).json({ message: 'Please enter all categories information' });
                return;
            }
            await CategoriesModel.updateCategorie(id, name, description);
            res.status(200).json({ message: 'Categories up to date!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error while Updating the categories' });
        }
    },

    deleteCategorie: async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id;
            await CategoriesModel.deleteCategorie(id);
            res.status(200).json({ message: 'Categories successfully deleted' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error deleting the categories' });
        }
    },
};

export default CategoriesController;
