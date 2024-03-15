import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiBee, GiTreeBeehive } from "react-icons/gi";

const AuthPage= () => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoginForm) {
      // Lógica para el inicio de sesión
      console.log("Logging in with:", email, password);
      setConfirmationMessage("Successful login!");
    } else {
      // Lógica para el registro
      console.log("Register user:", email, password);
      if (password !== confirmPassword) {
        setConfirmationMessage("Passwords don't match!");
        return;
      }
      // Aquí iría la lógica para enviar el formulario de registro al servidor
      setConfirmationMessage("Successful registration!");
    }
  };

  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-yellow-800 border border-yellow-600 rounded-md p-8 shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-20 relative">
        <h1 className="text-6xl font-bold text-center mb-12">
          {isLoginForm ? "Login" : "Sign Up"}
        </h1>
        {confirmationMessage && (
          <p className="text-center text-white mb-4">{confirmationMessage}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="relative my-4">
            <input
              type="email"
              className="block w-72 py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-yellow-300 apperance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:text-white focus:border-yellow-600 peer"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label
              htmlFor=""
              className="absolute text-md text-white duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0} peer=focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Email
            </label>
            <GiBee className="absolute top-1 right-4 text-yellow-500" />
          </div>
          <div className="relative my-4">
            <input
              type="password"
              className="block w-72 py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-yellow-300 apperance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:text-white focus:border-yellow-600 peer"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label
              htmlFor=""
              className="absolute text-md text-white duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0} peer=focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Password
            </label>
            <GiTreeBeehive className="absolute top-1 right-4 text-yellow-500" />
          </div>
          {!isLoginForm && (
            <div className="relative my-4">
              <input
                type="password"
                className="block w-72 py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-yellow-300 apperance-none dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:text-white focus:border-yellow-600 peer"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <label
                htmlFor=""
                className="absolute text-md text-white duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0} peer=focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm Password
              </label>
              <GiTreeBeehive
                className="absolute top-1 right-4 text-yellow-500"
              />
            </div>
          )}
          {/* Mostrar los elementos solo si es el formulario de inicio de sesión */}
          {isLoginForm && (
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2 items-center">
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <Link to="/" className="text-yellow-500">
                Forgot Password?
              </Link>
            </div>
          )}
          <button
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-yellow-500 text-yellow-800 hover:bg-yellow-300 hover:text-white py-2 transition-colors"
            type="submit"
          >
            {isLoginForm ? "Login" :"Register"}
          </button>
          <div>
            <span className="m-4 flex justify-center items-center">
              {isLoginForm
                ? "New Here?"
                : "Already have an account?"}{" "}
              <button
                className="text-yellow-500"
                onClick={() => setIsLoginForm(!isLoginForm)}
              >
                {isLoginForm ? "Create an Account" : "Login"}
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;