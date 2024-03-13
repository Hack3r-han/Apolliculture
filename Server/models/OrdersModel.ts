//import { connection } from "../database/Config";
import connectionPrisma from "../database/PrismaConnection";

const OrdersModel = {
    getAllOrders: async () => {
        const result = connectionPrisma.orders.findMany();
        //const [result] = await connection.query('SELECT * FROM orders');
        return result;
    },

    getOrder: async (id: string) => {
        const result = connectionPrisma.orders.findUnique({
            where: {
              id: id,
            },
          });
        //const [result] = await connection.query(`SELECT * FROM orders WHERE id = ${id}`);
        return result;
    },

    createOrder: async (body: any) => {
        //
        body.create_date = new Date();
        const result = connectionPrisma.orders.create({
                data: body,
            });

        //const [result] = await connection.query(`INSERT INTO orders (name, price, description, image, create_date, units_stock, user_id) VALUES ('${name}', ${price}, '${description}', '${image}', '${create_date}', ${units_stock}, '${user_id}')`);
        return result;
    },

    updateOrder: async (id: string, body: any) => {
        body.create_date = new Date();        
        const result = connectionPrisma.orders.update({
                where: { id: id },
                data: body,
            });

    
        //const [result] = await connection.query(`UPDATE orders SET name = '${name}', price = ${price}, description = '${description}', image = '${image}', category = '${category}', create_date = '${create_date}', units_stock = ${units_stock} WHERE id = ${id}`);
        return result;
    },

    deleteOrder: async (id: string) => {
        const result = connectionPrisma.orders.delete({
            where: { id: id },
          })
        //const [result] = await connection.query(`DELETE FROM orders WHERE id = ${id}`);
        return result;
    },
};

export default OrdersModel;
