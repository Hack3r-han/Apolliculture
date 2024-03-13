//se usa bcrypt para encriptar contraseñas 

//Importa funciones hash y compare de la biblioteca bcrypt
//hash: para generar un hash de una contraseña, y compare: para verificar si una contraseña coincide con un hash dado
import { hash, compare } from "bcrypt";

//funcion de ENCRIPTADO
async function encrypt(password: string) {
    //la función hash de bcrypt: genera un hash de la contraseña dada
    const passwordHash = await hash(password, 8);
    return passwordHash; //retorna hash de la contraseña
}
 
//Funcion de VERIFICADO
async function verify (password: string, passwordHash: string) {
    //función compare de bcrypt: compara la contraseña dada (password) con el hash de contraseña (passwordHash)
    const isValid = await compare(password, passwordHash);
    return isValid;  //retorna boleano
}

export { encrypt, verify };