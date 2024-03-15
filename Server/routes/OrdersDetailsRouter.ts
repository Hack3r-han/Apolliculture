import { Router } from "express";
import OrdersDetailsController from "../controllers/OrdersDetailsController";
import { isAdmin } from "../middelwares/sesionMiddelwares";

const OrdersDetailsRouter = Router();

OrdersDetailsRouter.route("/").get(OrdersDetailsController.getAllOrderDetails);
OrdersDetailsRouter.route("/:id").get(OrdersDetailsController.getOrderDetail);

//proteccion de conexion
OrdersDetailsRouter.route("/").post(OrdersDetailsController.addOrderDetail);
OrdersDetailsRouter.route("/:id").put(OrdersDetailsController.updateOrderDetail);
OrdersDetailsRouter.route("/:id").delete(OrdersDetailsController.deleteOrderDetail);

export default OrdersDetailsRouter;