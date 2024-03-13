import ordersModel from '../models/OrdersModel';
import { Request, Response } from 'express';

const OrdersController = {
    getAllOrders: async (req: Request, res: Response) => {
        try {
            const orders = await ordersModel.getAllOrders();
            res.json(orders);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al leer la orden' });
        }
    },
    
    getOrder: async (req: Request, res: Response) => {
        try {
            const ordersId: string = req.params.id;
            const orders = await ordersModel.getOrder(ordersId);
            if (!orders) {
                res.status(404).json({ message: `Esta orden con id ${ordersId} no se encuentra` });
                return;
            }
            res.json(orders);
        } catch (error) {
            console.log(error);
        }
    },

    addOrder: async (req: Request, res: Response) => {
        try {
            const { ammount, user_id } = req.body;
            if ( !ammount || !user_id) {
                res.status(400).json({ message: 'Por favor introduzca todos los datos de la orden ' });
                return;
            }
            await ordersModel.createOrder(req.body);
            res.status(200).json({ message: 'Creada la orden' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al crear esta orden' });
        }   
    },

    updateOrder: async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id;
            const { ammount, description} = req.body;
            if (!ammount || !description) {
                res.status(400).json({ message: 'Por favor introduzca todos los datos de a orden' });
                return;
            }
            await ordersModel.updateOrder(id, req.body);
            res.status(200).json({ message: 'Actualizada la orden!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al actualizar la orden' });
        }        
    },
    
    deleteOrder: async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id;
            await ordersModel.deleteOrder(id);
            res.status(200).json({ message: 'La orden se ha eliminado correctamente' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al eliminar la orden' });
        }
    },
};

export default OrdersController;
