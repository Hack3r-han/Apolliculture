import  { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import registerUser from "../services/AuthRegister";
/* import { Link } from "react-router-dom"; */


const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
/*   const [successMessage, setSuccessMessage] = useState("");
 */  const navigate = useNavigate();

  const handleUsernameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Verificar que todos los campos estén llenos
    if (username === "" || password === "" || first_name === "" || last_name === "" || email === "") {
      setError(true);
/*       setSuccessMessage("Welcomo to Apolliculture!");
 */      return;
    }

       // Construir el objeto de usuario
       const newUser = {
        username,
        password,
        first_name,
        last_name,
        email,
        admin : false,
      };
      const success = await registerUser(newUser);
      
      console.log(newUser)
      if (success) {
        // Manejar redirección u otras acciones de éxito aquí
        console.log('Usuario registrado exitosamente.');
        navigate('/loginPage');
      } else {
        // Manejar error de registro aquí
        console.error('Error al registrar el usuario.');
      }
    };

  return (
    <section className="flex justify-center items-center lg:py-12 md:py-8 sm:py-8 ">
      <div className="py-16 px-16 bg-transparent rounded-2xl shadow-xl z-20">
        <div>
          <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
            Register for an account
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-yellow-500"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-yellow-500"
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            type="text"
            placeholder="First Name"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-yellow-500"
            value={first_name}
            onChange={handleFirstNameChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-yellow-500"
            value={last_name}
            onChange={handleLastNameChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-yellow-500"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="text-center mt-6">
            <button type="submit" className="w-full py-2 text-xl text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-all">
              Register
            </button>
          </div>
        </form>
        {error && <p className="text-purple-800 font-bold text-center mt-4">All fields are required</p>}
      </div>
    </section>
  );
};

export default Register;
