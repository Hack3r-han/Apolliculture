import ProductsModel from '../models/ProductsModel';
import { Request, Response } from 'express';

const ProductsController = {
    getAllProducts: async (req: Request, res: Response) => {
        try {
            const products = await ProductsModel.getAllProducts();
            res.json(products);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al leer el producto' });
        }
    },
    
    getProduct: async (req: Request, res: Response) => {
        try {
            const productId: string = req.params.id;
            const products = await ProductsModel.getProduct(productId);
            if (!products) {
                res.status(404).json({ message: `Este producto con id ${productId} no se encuentra` });
                return;
            }
            res.json(products);
        } catch (error) {
            console.log(error);
        }
    },

    addProduct: async (req: Request, res: Response) => {
        try {
            const { name, price, description, image, units_stock, user_id } = req.body;
            if (!name || !price || !description || !image || !units_stock || !user_id) {
                res.status(400).json({ message: 'Por favor introduzca todos los datos del producto' });
                return;
            }
            await ProductsModel.createProduct(req.body);
            res.status(200).json({ message: 'Creado!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al crear este producto' });
        }   
    },

    updateProduct: async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id;
            const { name, price, description, image, units_stock } = req.body;
            if (!name || !price || !description || !image || !units_stock) {
                res.status(400).json({ message: 'Por favor introduzca todoslos datos del producto' });
                return;
            }
            await ProductsModel.updateProduct(id, req.body);
            res.status(200).json({ message: 'Actualizado!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al actualizar el producto' });
        }        
    },
    
    deleteProduct: async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id;
            await ProductsModel.deleteProduct(id);
            res.status(200).json({ message: 'Producto eliminado correctamente' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al eliminar el producto' });
        }
    },
};

export default ProductsController;
