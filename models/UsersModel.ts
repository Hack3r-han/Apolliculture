import { connection } from "../database/Config";

const UsersModel = {
    getAllUsers: async () => {
        const [result] = await connection.query('SELECT * FROM users');
        return result;
    },

    getUser: async (id: string) => {
        const [result] = await connection.query(`SELECT * FROM users WHERE id = '${id}'`);
        return result;
    },

    getUserByUsername: async (username: string) => {
        const [result] = await connection.query(`SELECT * FROM users WHERE username = '${username}'`);
        return result;
    },    

    createUser: async (first_name: string, last_name: string, username: string, password: string, email: string, admin: boolean) => {
        const [result] = await connection.query(`INSERT INTO users (first_name, last_name, username, password, email, admin) VALUES ('${first_name}', '${last_name}', '${username}', '${password}', '${email}', ${admin})`);
        return result;
    },

    updateUser: async (id: string, first_name: string, last_name: string, username: string, password: string, email: string, admin: boolean) => {
        // se debe verificar que usuario existe antes de actualizar
        const [result] = await connection.query(`UPDATE users SET first_name = '${first_name}', last_name = '${last_name}', username = '${username}', password = '${password}', email = '${email}', admin = ${admin} WHERE id = '${id}'`);
        return result;
    },

    deleteUser: async (id: string) => {
        // se debe verificar que usuario existe antes de actualizar
        const [result] = await connection.query(`DELETE FROM users WHERE id = '${id}'`);
        return result;
    },
};

export default UsersModel;
