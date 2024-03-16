import OrdersDetailsModel from '../models/OrdersDetailsModel';
import { Request, Response } from 'express';

const OrdersDetailsController = {
    getAllOrderDetails: async (req: Request, res: Response) => {
        try {
            const ordersDetails = await OrdersDetailsModel.getAllOrdersDetails();
            res.json(ordersDetails);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the details' });
        }
    },
    
    getOrderDetail: async (req: Request, res: Response) => {
        try {
            const ordersDetailsId: string = req.params.id;
            const ordersDetails = await OrdersDetailsModel.getOrderDetail(ordersDetailsId);
            if (!ordersDetails) {
                res.status(404).json({ message: `The detail with id ${ordersDetailsId} has not found` });
                return;
            }
            res.json(ordersDetails);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the detail' });
        }
    },

    addOrderDetail: async (req: Request, res: Response) => {
        try {
            const { order_id, products_id, price, quantity } = req.body;
            if (!order_id || !products_id || !price || !quantity) {
                res.status(400).json({ message: 'Please enter the information' });
                return;
            }
            await OrdersDetailsModel.createOrderDetail(req.body);
            res.status(201).json({ message: 'Detail created correctly!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error creating this detail' });
        }   
    },

    updateOrderDetail: async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id;
            const { order_id, products_id, price, quantity } = req.body;
            if (!order_id || !products_id || !price || !quantity) {
                res.status(400).json({ message: 'Please enter all information' });
                return;
            }
            await OrdersDetailsModel.updateOrderDetail(id, req.body);
            res.status(200).json({ message: 'detail up to date!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error while Updating the detail' });
        }        
    },
    
    deleteOrderDetail: async (req: Request, res: Response) => {
        try {
            const id: string = req.params.id;
            await OrdersDetailsModel.deleteOrderDetail(id);
            res.status(200).json({ message: 'Detail successfully deleted' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error deleting the detail' });
        }
    },
};

export default OrdersDetailsController;
