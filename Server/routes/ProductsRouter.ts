import { Router } from "express";
import ProductsController from "../controllers/ProductsController";
import { isAdmin } from "../middelwares/sesionMiddelwares";

const ProductsRouter = Router();

ProductsRouter.route("/").get(ProductsController.getAllProducts);
ProductsRouter.route("/:id").get(ProductsController.getProduct);

//proteccion de conexion
ProductsRouter.route("/").post(isAdmin,ProductsController.addProduct);
ProductsRouter.route("/:id").put(ProductsController.updateProduct);
ProductsRouter.route("/:id").delete(ProductsController.deleteProduct);

export default ProductsRouter;