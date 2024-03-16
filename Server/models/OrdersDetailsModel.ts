//import { connection } from "../database/Config";
import connectionPrisma from "../database/PrismaConnection";

const OrdersDetailsModel = {
    getAllOrdersDetails: async () => {
        const result = connectionPrisma.order_details.findMany({
            include: {
                orders: true
            }
        });
        //const [result] = await connection.query('SELECT * FROM order_details');
        return result;
    },

    getOrderDetail: async (id: string) => {
        const result = connectionPrisma.order_details.findUnique({
            where: {
              id: id,
            },
          });
        //const [result] = await connection.query(`SELECT * FROM order_details WHERE id = ${id}`);
        return result;
    },

    createOrderDetail: async (body: any) => {
        //
        const result = connectionPrisma.order_details.create({
                data: body,
            });

        //const [result] = await connection.query(`INSERT INTO order_details (name, price, description, image, create_date, units_stock, user_id) VALUES ('${name}', ${price}, '${description}', '${image}', '${create_date}', ${units_stock}, '${user_id}')`);
        return result;
    },

    updateOrderDetail: async (id: string, body: any) => {      
        const result = connectionPrisma.order_details.update({
                where: { id: id },
                data: body,
            });

    
        //const [result] = await connection.query(`UPDATE order_details SET name = '${name}', price = ${price}, description = '${description}', image = '${image}', category = '${category}', create_date = '${create_date}', units_stock = ${units_stock} WHERE id = ${id}`);
        return result;
    },

    deleteOrderDetail: async (id: string) => {
        const result = connectionPrisma.order_details.delete({
            where: { id: id },
          })
        //const [result] = await connection.query(`DELETE FROM order_details WHERE id = ${id}`);
        return result;
    },
};

export default OrdersDetailsModel;
