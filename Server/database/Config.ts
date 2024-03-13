import { createPool } from 'mysql2/promise';

// Objeto CONFIG: contiene la configuración necesaria para establecer la conexión a la base de datos
const CONFIG = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'apolliculture',
    port: 3306
};

export const connection = createPool(CONFIG);

