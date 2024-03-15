import ProductsModel from '../models/ProductsModel';
import { Request, Response } from 'express';

const ProductsController = {
    getAllProducts: async (req: Request, res: Response) => {
        try {
            const products = await ProductsModel.getAllProducts();
            res.json(products);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the product' });
        }
    },
    
    getProduct: async (req: Request, res: Response) => {
        try {
            const productId: string = req.params.id;
            const product = await ProductsModel.getProduct(productId);
            if (!product) {
                res.status(404).json({ message: `The product with id ${productId} has not found` });
                return;
            }
            res.json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the product' });
        }
    },

    addProduct: async (req: Request, res: Response) => {
        try {
            const { name, price, description, image, units_stock, user_id } = req.body;
            if (!name || !price || !description || !image || !units_stock || !user_id) {
                res.status(400).json({ message: 'Please enter the product information' });
                return;
            }
            await ProductsModel.createProduct(req.body);
            res.status(201).json({ message: 'Product created correctly' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error creating this product' });
        }   
    },

    updateProduct: async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id;
            const { name, price, description, image, units_stock } = req.body;
            if (!name || !price || !description || !image || !units_stock) {
                res.status(400).json({ message: 'Please enter all product information' });
                return;
            }
            await ProductsModel.updateProduct(id, req.body);
            res.status(200).json({ message: 'Product up to date!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error while Updating the product' });
        }        
    },
    
    deleteProduct: async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id;
            await ProductsModel.deleteProduct(id);
            res.status(200).json({ message: 'Product successfully deleted' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error deleting the product' });
        }
    },
};

export default ProductsController;

