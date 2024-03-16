//import { connection } from "../database/Config";
import connectionPrisma from "../database/PrismaConnection";

const ProductsModel = {
    getAllProducts: async () => {
        const result = connectionPrisma.products.findMany();
        //const [result] = await connection.query('SELECT * FROM products');
        return result;
    },

    getProduct: async (id: string) => {
        const result = connectionPrisma.products.findUnique({
            where: {
              id: id,
            },
          });
        //const [result] = await connection.query(`SELECT * FROM products WHERE id = ${id}`);
        return result;
    },

    createProduct: async (body: any) => {
        //
        body.create_date = new Date();
        const result = connectionPrisma.products.create({
                data: body,
            });

        //const [result] = await connection.query(`INSERT INTO products (name, price, description, image, create_date, units_stock, user_id) VALUES ('${name}', ${price}, '${description}', '${image}', '${create_date}', ${units_stock}, '${user_id}')`);
        return result;
    },

    updateProduct: async (id: string, body: any) => {
        body.create_date = new Date();        
        const result = connectionPrisma.products.update({
                where: { id: id },
                data: body,
            });

    
        //const [result] = await connection.query(`UPDATE products SET name = '${name}', price = ${price}, description = '${description}', image = '${image}', category = '${category}', create_date = '${create_date}', units_stock = ${units_stock} WHERE id = ${id}`);
        return result;
    },

    deleteProduct: async (id: string) => {
        const result = connectionPrisma.products.delete({
            where: { id: id },
          })
        //const [result] = await connection.query(`DELETE FROM products WHERE id = ${id}`);
        return result;
    },
};

export default ProductsModel;
