import { connection } from "../database/Config";

const ProductsModel = {
    getAllProducts: async () => {
        const [result] = await connection.query('SELECT * FROM products');
        return result;
    },

    getProduct: async (id: string) => {
        const [result] = await connection.query(`SELECT * FROM products WHERE id = ${id}`);
        return result;
    },

    createProduct: async (name: string, price: number, description: string, image: string, category: string, create_date: string, units_stock: number) => {
        const [result] = await connection.query(`INSERT INTO products (name, price, description, image, category, create_date, units_stock) VALUES ('${name}', ${price}, '${description}', '${image}', '${category}', '${create_date}', ${units_stock})`);
        return result;
    },

    updateProduct: async (id: string, name: string, price: number, description: string, image: string, category: string, create_date: string, units_stock: number) => {
        const [result] = await connection.query(`UPDATE products SET name = '${name}', price = ${price}, description = '${description}', image = '${image}', category = '${category}', create_date = '${create_date}', units_stock = ${units_stock} WHERE id = ${id}`);
        return result;
    },

    deleteProduct: async (id: string) => {
        const [result] = await connection.query(`DELETE FROM products WHERE id = ${id}`);
        return result;
    },
};

export default ProductsModel;
