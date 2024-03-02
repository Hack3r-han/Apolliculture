import UsersModel from '../models/UsersModel';
import { Request, Response, NextFunction } from 'express';

interface UserRequestBody {
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    email: string;
    admin: boolean;
}

const UsersController = {

    //Funcion para obtener datos de usuarios:
    getAllUsers: async (req: Request, res: Response) => {
        try {
            const users = await UsersModel.getAllUsers();
            res.json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al leer el usuario' });
        }
    },

    //funcion para obtener datos de usuario por id
    getUser: async (req: Request, res: Response) => {
        try {
            const userId = req.params.id;
            const users = await UsersModel.getUser(userId);
            if (!Array.isArray(users) || users.length === 0) {
                res.status(404).json({ message: `El usuario con id: ${userId}, no se encuentra` });
                return;
            }
            res.json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al leer el usuario' });
        }
    },

    //funcion para agregar un nuevo usuario
    addUser: async (req: Request, res: Response) => {
        try {
            const { first_name, last_name, username, password, email, admin }: UserRequestBody = req.body;
            if (!first_name || !last_name || !username || !password || !email || (admin === undefined)) {
                res.status(400).json({ message: 'Por favor introduzca los datos de usuario' });
                return;
            }
            await UsersModel.createUser(first_name, last_name, username, password, email, admin);
            res.status(200).json({ message: 'Creado!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al crear este usuario' });
        }
    },

    //Funcion para actualizar un usuario
    updateUser: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const { first_name, last_name, username, password, email, admin }: UserRequestBody = req.body;
            if (!first_name || !last_name || !username || !password || !email || (admin === undefined)) {
                res.status(400).json({ message: 'Por favor introduzca los datos de usuario' });
                return;
            }
            await UsersModel.updateUser(id, first_name, last_name, username, password, email, admin);
            res.status(200).json({ message: 'Actualizado!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al Actualizar el usuario' });
        }
    },

    //funcion para eleminar usuario
    deleteUser: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await UsersModel.deleteUser(id);
            res.status(200).json({ message: 'Usuario eliminado correctamente' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al eliminar el usuario' });
        }
    },
};

export default UsersController;
