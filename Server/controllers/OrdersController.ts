import ordersModel from '../models/OrdersModel';
import { Request, Response } from 'express';

const OrdersController = {
    getAllOrders: async (req: Request, res: Response) => {
        try {
            const orders = await ordersModel.getAllOrders();
            res.json(orders);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the order' });
        }
    },
    
    getOrder: async (req: Request, res: Response) => {
        try {
            const ordersId: string = req.params.id;
            const orders = await ordersModel.getOrder(ordersId);
            if (!orders) {
                res.status(404).json({ message: `The order with id  ${ordersId} has not found` });
                return;
            }
            res.json(orders);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the order' });
        }
    },

    addOrder: async (req: Request, res: Response) => {
        try {
            const { amount, user_id, order_details } = req.body;
            if (!amount || !user_id || !order_details || order_details.length === 0) {
                res.status(400).json({ message: 'Please enter the order information' });
                return;
            }
            await ordersModel.createOrder(req.body);
            res.status(201).json({ message: 'order created correctly!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error creating this order' });
        }   
    },

    updateOrder: async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id;
            const { amount, description} = req.body;
            if (!amount || !description) {
                res.status(400).json({ message: 'Please enter all order information' });
                return;
            }
            await ordersModel.updateOrder(id, req.body);
            res.status(200).json({ message: 'Order up to date!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error while Updating the order' });
        }        
    },
    
    deleteOrder: async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id;
            await ordersModel.deleteOrder(id);
            res.status(200).json({ message: 'Order successfully deleted' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error deleting the order' });
        }
    },
};

export default OrdersController;
