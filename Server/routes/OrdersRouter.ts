import { Router } from "express";
import OrdersController from "../controllers/OrdersController";
import { isAdmin } from "../middelwares/sesionMiddelwares";

const OrdersRouter = Router();

OrdersRouter.route("/").get(OrdersController.getAllOrders);
OrdersRouter.route("/:id").get(OrdersController.getOrder);

//proteccion de conexion
OrdersRouter.route("/").post(OrdersController.addOrder);
OrdersRouter.route("/:id").put(OrdersController.updateOrder);
OrdersRouter.route("/:id").delete(OrdersController.deleteOrder);

export default OrdersRouter;