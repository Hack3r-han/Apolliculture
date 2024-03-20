import UsersModel from '../models/UsersModel';
import { Request, Response, NextFunction } from 'express';
import { encrypt, verify } from '../utils/passwordHandler';
import { generateToken } from '../utils/jwtHandler';

const UsersController = {

    // Función para OBTENER TODOS los datos de usuarios:
    // Devuelve una respuesta Json
    getAllUsers: async (req: Request, res: Response) => {
        try {
            const users = await UsersModel.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the user' });
        }
    },

    // Función para OBTENER usuario por ID
    getUser: async (req: Request, res: Response) => {
        try {
            const userId = req.params.id;
            // Llama método del modelo para obtener un usuario por ID
            const users = await UsersModel.getUser(userId);
            if (!Array.isArray(users) || users.length === 0) {
                res.status(404).json({ message: `The user with id ${userId}, has not found` });
                return;
            }
            res.status(200).json(users);  // Devuelve el usuario encontrado
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error reading the user' });
        }
    },

    // Función para agregar un nuevo usuario
    addUser: async (req: Request, res: Response) => {
        try {
             // Obtiene los datos del cuerpo de la solicitud
            const { first_name, last_name, username, password, email, admin } = req.body;
            // Verifica si hay datos faltantes
            if (!first_name || !last_name || !username || !password || !email) {
                res.status(400).json({ message: 'Please enter the user information' });
                return;
            }
            // Encripta la contraseña antes de guardarla en la BD
            const password_encrypted:string= await encrypt(password);
            await UsersModel.createUser(first_name, last_name, username, password_encrypted, email, admin);
            res.status(201).json({ message: 'User created correctly!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error creating this user' });
        }
    },

    // Función para ACTUALIZAR un usuario
    updateUser: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            // Obtiene los datos del cuerpo de la solicitud
            const { first_name, last_name, username, password, email, admin } = req.body;
            // Verifica si hay datos faltantes
            if (!first_name || !last_name || !username || !password || !email || (admin === undefined)) {
                res.status(400).json({ message: 'Please enter all user information' });
                return;
            }
            // Encripta la contraseña antes de actualizarla en la base de datos
            const password_encrypted:string= await encrypt(password);
            // Actualiza el usuario utilizando el modelo de usuario
            await UsersModel.updateUser(id, first_name, last_name, username, password_encrypted, email, admin);
            res.status(200).json({ message: 'User up to date!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error while Updating the user' });
        }
    },

    // Función para ELIMINAR usuario
    deleteUser: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            // Elimina el usuario utilizando el modelo de usuario
            await UsersModel.deleteUser(id);
            res.status(200).json({ message: 'User successfully deleted' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'There was an error deleting the user' });
        }
    },

    // ********** Inicio de sesión ************

    // Función de solicitud de inicio de sesión
    // Recibe 2 parametros: req (solicitud HTTP entrante) y res (respuesta HTTP que se enviara)
    login: async (req: Request, res: Response) => {
        try {
            // Obtiene nombre de usuario y contraseña del cuerpo de la solicitud HTTP
            const { username, password } = req.body;
            // Busca el usuario en la BD por username, llama función getUserByUsername del modelo UsersModel   
            const user: any = await UsersModel.getUserByUsername(username);

            // Verificar si NO encontró el usuario en BD con el nombre de usuario proporcionado
            if (user.length === 0) {
                res.status(404).json({ message: 'User Not Found' });
                return;
            }

            // Obtiene el primer usuario encontrado, posición cero
            const userFound: any = user[0];
            console.log("User Found: " + JSON.stringify(userFound));

            // Verificar que la contraseña es correcta
            // Llama función verify. verifica si la contraseña coincide con la almacenada en BD
            const isValid = await verify(String(password), String(userFound.password));

            if(isValid) {  // Si es válida
                // Genera un token JWT (JSON Web Token) usando el ID de usuario
                const token = await generateToken(String(userFound.id));

                // Se extrae nombre de usuario y el ID encontrado para incluirlos en la respuesta
                const userName = userFound.username;
                const userId = userFound.id;

                const data = {
                    token,
                    userId,
                    userName                
                };
                // Si la autenticación es exitosa, envía respuesta con (token, ID y nombre de usuario) en formato JSON
                res.status(200).json({ 
                    message: 'User Logged in',
                    data: data                   
                });
                return;
            }
            
            res.status(401).json({ message: 'Logged in error' });
            return;          
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error when logged in' });
        }
    },    
};

export default UsersController;

