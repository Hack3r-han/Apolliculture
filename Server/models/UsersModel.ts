//Importa la conexión a BD desde el archivo de configuración Config
import { connection } from "../database/Config";

const UsersModel = {

    // ejecuta consulta SQL que obtiene TODOS los usuarios de la tabla users, retorna result
    getAllUsers: async () => {
        const [result] = await connection.query('SELECT * FROM users');
        return result;
    },

    //getUser tiene parámetro id y ejecuta consulta SQL para obtener un usuario por  ID
    getUser: async (id: string) => {
        const [result] = await connection.query(`SELECT * FROM users WHERE id = '${id}'`);
        return result;
    },

    //toma un parámetro (username) y ejecuta consulta SQL para obtener un usuario por su username
    getUserByUsername: async (username: string) => {
        const [result] = await connection.query(`SELECT * FROM users WHERE username = '${username}'`);
        return result;
    },    

    //CREA un nuevo usuario en BD con los datos proporcionados y devuelve el resultado de la operación de inserción
    createUser: async (first_name: string, last_name: string, username: string, password: string, email: string, admin: boolean) => {
        const [result] = await connection.query(`INSERT INTO users (first_name, last_name, username, password, email, admin) VALUES ('${first_name}', '${last_name}', '${username}', '${password}', '${email}', ${admin})`);
        return result;
    },

    //ACTUALIZA los datos de usuario existente, con los nuevos datos y devuelve el resultado de la operación
    updateUser: async (id: string, first_name: string, last_name: string, username: string, password: string, email: string, admin: boolean) => {
        // SE DEBE: Agregar select * from users where id= id; para verificar que usuario existe antes de actualizar
        const [result] = await connection.query(`UPDATE users SET first_name = '${first_name}', last_name = '${last_name}', username = '${username}', password = '${password}', email = '${email}', admin = ${admin} WHERE id = '${id}'`);
        return result;
    },

    //ELIMINA usuario de la BD por ID y devuelve resultado de la operación de eliminación
    deleteUser: async (id: string) => {
        // SE DEBE: Agregar select * from users where id= id; para verificar que usuario existe antes de eliminar
        const [result] = await connection.query(`DELETE FROM users WHERE id = '${id}'`);
        return result;
    },
};

export default UsersModel;
