import { connection } from "../database/Config";

const CategoriesModel = {
    getAllCategories: async () => {
        const [result] = await connection.query('SELECT * FROM categories');
        return result;
    },

    getCategorie: async (id: string) => {
        const [result] = await connection.query(`SELECT * FROM categories WHERE id = '${id}'`);
        return result;
    },

    createCategorie: async (name: string, description: string) => {
        const [result] = await connection.query(`INSERT INTO categories (name, description) VALUES ('${name}', '${description}')`);
        return result;
    },

    updateCategorie: async (id: string, name: string, description: string) => {
        const [result] = await connection.query(`UPDATE categories SET name = '${name}', description = '${description}' WHERE id = '${id}'`);
        return result;
    },

    deleteCategorie: async (id: string) => {
        const [result] = await connection.query(`DELETE FROM categories WHERE id = '${id}'`);
        return result;
    },
};

export default CategoriesModel;
