import { Router } from "express";
import UsersController from "../controllers/UserController";

// Creo un nuevo enrutador
const UsersRouter = Router();

// Se definen las rutas relacionadas con los usuarios y se asocian con las funciones del controlador correspondiente
UsersRouter.route("/").get(UsersController.getAllUsers);
UsersRouter.route("/:id").get(UsersController.getUser);
UsersRouter.route("/").post(UsersController.addUser);
UsersRouter.route("/:id").put(UsersController.updateUser);
UsersRouter.route("/:id").delete(UsersController.deleteUser);
UsersRouter.route("/login").post(UsersController.login);

export default UsersRouter;
