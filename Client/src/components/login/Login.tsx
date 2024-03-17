import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthService from "../services/AuthLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

     // Verificar la longitud del nombre de usuario
  if (username.length < 4 || username.length > 20) {
    setError("Username must be between 4 and 20 characters");
    return;
  }else if (password.length < 4 || password.length > 20) {
    setError("Password must be between 4 and 20 characters");
    return;
  }

    const user = await AuthService.login(username, password);
    if (user) {
      navigate("/");
    } else {
      setError("User not found, please check your username or password is incorrect");
    }
  };

  return (
    <section className="flex justify-center items-center lg:py-32 md:py-16 sm:py-8">
      <div className="py-16 px-16 bg-transparent rounded-2xl shadow-xl z-20">
        <div>
          <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
            Log in to your account
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="User Name"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-yellow-500"
            value={username}
            onChange={handleUserNameChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="block text-sm py-3 px-4 rounded-lg w-full border outline-yellow-500"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="text-center mt-6">
            <button
              type="submit"
              className="w-full py-2 text-xl text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-all"
            >
              Log in
            </button>
            <p className="mt-4 text-sm">
              Don't yet An Account?{" "}
              <Link to="/registerPage" className="underline cursor-pointer">
                Register
              </Link>
            </p>
          </div>
        </form>
        {error && (
          <p className="text-purple-800 font-bold text-center mt-4">{error}</p>
        )}
      </div>
    </section>
  );
};

export default Login;