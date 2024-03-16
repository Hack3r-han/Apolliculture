//Se usa biblioteca jsonwebtoken. para manejar la generación y verificación de tokens JWT (JSON Web Tokens) 

//Importa funciones sign y verify de la biblioteca jsonwebtoken
//que se utilizan para firmar y verificar tokens JWT
import { sign, verify } from "jsonwebtoken";

//JWT_SECRET: representa clave secreta usada para firmar y verificar los tokens
//JWT_SECRET se obtiene de una variable de entorno en el archivo .env
const JWT_SECRET = process.env.JWT_SECRET || '';

//Fucion que GENERA el token
export async function generateToken(id: string) {
    //función que firma un token JWT usando el id y la clave secreta JWT_SECRET
    const jwt = sign({id}, JWT_SECRET, {
        expiresIn: "1h", //token expirará en 1 hora
    });
    return jwt;//retorna token firmado
}

//Funcion que VERIFICA el token
export async function verifyToken(jwt: string) {
    try {
        //la funcion verify: verifica validez del token y la clave secreta JWT_SECRET
        const isValid = verify(jwt, JWT_SECRET);
        return isValid; //retorna boleano (true)
    } catch (error) {
        console.error("Error de la verificación JWT: ", error);
        return false;
    }
}
