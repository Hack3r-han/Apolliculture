// rutas para las operaciones CRUD

import { Router } from "express";
import UsersController from "../controllers/UserController";

// Creo un nuevo enrutador usando el método Router() de Express y lo asigna a la variable UsersRouter
const UsersRouter = Router();

// Se definen las rutas relacionadas con los usuarios y se asocian con las funciones del controlador correspondiente

//Define ruta para GET a la raíz / y asocia la función getAllUsers del controlador UsersController para la solicitud
UsersRouter.route("/").get(UsersController.getAllUsers);
//Define ruta para GET con parámetro id y asocia la función getUser del controlador UsersController para la solicitud
UsersRouter.route("/:id").get(UsersController.getUser);
UsersRouter.route("/").post(UsersController.addUser);
UsersRouter.route("/:id").put(UsersController.updateUser);
UsersRouter.route("/:id").delete(UsersController.deleteUser);
//Define ruta para POST a /login y asocia la función login del controlador UsersController para la solicitud
UsersRouter.route("/login").post(UsersController.login);

export default UsersRouter;
