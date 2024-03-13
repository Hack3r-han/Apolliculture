import UsersModel from '../models/UsersModel';
import { Request, Response, NextFunction } from 'express';
import { encrypt, verify } from '../utils/passwordHandler';
import { generateToken } from '../utils/jwtHandler';

const UsersController = {

    //Funcion para OBTENER TODOS los datos de usuarios:
    //Devuelve una respuesta Json
    getAllUsers: async (req: Request, res: Response) => {
        try {
            const users = await UsersModel.getAllUsers();
            res.json(users);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al leer el usuario' });
        }
    },

    //funcion para OBTENER usuario por ID
    getUser: async (req: Request, res: Response) => {
        try {
            const userId = req.params.id;
            // Llama método del modelo para obtener un usuario por ID
            const users = await UsersModel.getUser(userId);
            if (!Array.isArray(users) || users.length === 0) {
                res.status(404).json({ message: `El usuario con id: ${userId}, no se encuentra` });
                return;
            }
            res.json(users);  // Devuelve el usuario encontrado
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al leer el usuario' });
        }
    },

    //funcion para agregar un nuevo usuario
    addUser: async (req: Request, res: Response) => {
        try {
             // Obtiene los datos del cuerpo de la solicitud
            const { first_name, last_name, username, password, email, admin } = req.body;
            // Verifica si hay datos faltantes
            if (!first_name || !last_name || !username || !password || !email || (admin === undefined)) {
                res.status(400).json({ message: 'Por favor introduzca los datos de usuario' });
                return;
            }
            // Encripta la contraseña antes de guardarla en la BD
            const password_encrypted:string= await encrypt(password);
            await UsersModel.createUser(first_name, last_name, username, password_encrypted, email, admin);
            res.status(200).json({ message: 'Usuario Creado!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al crear este usuario' });
        }
    },

    //Funcion para ACTUALIZAR un usuario
    updateUser: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            // Obtiene los datos del cuerpo de la solicitud
            const { first_name, last_name, username, password, email, admin } = req.body;
            // Verifica si hay datos faltantes
            if (!first_name || !last_name || !username || !password || !email || (admin === undefined)) {
                res.status(400).json({ message: 'Por favor introduzca todos los datos de usuario' });
                return;
            }
            // Encripta la contraseña antes de actualizarla en la base de datos
            const password_encrypted:string= await encrypt(password);
            // Actualiza el usuario utilizando el modelo de usuario
            await UsersModel.updateUser(id, first_name, last_name, username, password_encrypted, email, admin);
            res.status(200).json({ message: 'Actualizado!' });
            return;
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al Actualizar el usuario' });
        }
    },

    //funcion para ELIMINAR usuario
    deleteUser: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            // Elimina el usuario utilizando el modelo de usuario
            await UsersModel.deleteUser(id);
            res.status(200).json({ message: 'Usuario eliminado correctamente' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Hubo un error al eliminar el usuario' });
        }
    },

    // ********** Inicio de sesión ************

    //funcion de solicitud de inicio de sesión
    //recibe 2 parametros: req (solicitud HTTP entrante) y res (respuesta HTTP que se enviara)
    login: async (req: Request, res: Response) => {
        try {
            // Obtiene nombre de username y contraseña del cuerpo de la solicitud HTTP
            const { username, password } = req.body;
            // Busca el usuario en la BD por username, llama función getUserByUsername del modelo UsersModel   
            const user: any = await UsersModel.getUserByUsername(username);

        // Verificar si NO encontro el usuario en BD con el nombre de usuario proporcionado
        if (user.length === 0) {
            res.status(401).json({ message: 'No se encuentra el usuario' });
            return;
          }

          // Obtiene el primer usuario encontrado, posicion cero
          const userFound: any = user[0];
          console.log("Usuario encontrado: " + JSON.stringify(userFound));

          // Verificar que el password es correcto
          //Llama funcion verify. verifica si la contraseña coincide con la almacenada en BD
          const isValid = await verify(String(password), String(userFound.password));

          if(isValid) {  //si es valida
            // Genera un token JWT (JSON Web Token) usando el ID de usuario
            const token = await generateToken(String(userFound.id));

            //se extrae nombre de usuario y el ID encontrado para incluirlos en la respuesta
            const userName = userFound.username;
            const userId = userFound.id;

            const data = {
                token,
                userId,
                userName                
            };
            // Si la autenticación es exitosa, envia respuesta con (token, ID y nombre de usuario) en formato JSON
            res.status(200).json(
                { 
                    message: 'Usuario loggeado',
                    data: data                   
                });
                return;
          }
          
          res.status(401).json( { message: 'Error en el loggeado'});
            return;          
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error al loggearse el usuario' });
        }
    },    
};

export default UsersController;
