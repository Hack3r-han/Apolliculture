import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("false");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if(username === "" || password === "") {
      setError("true");
      return
    }

    setLoggedIn(true);

    navigate("/home");
  }

  return (
    <section className="flex justify-center items-center lg:py-32 md:py-16 sm:py-8">
      <div className="py-16 px-16  bg-transparent rounded-2xl shadow-xl z-20">
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
            <button type="submit" className="w-full py-2 text-xl text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 transition-all">
              Log in
            </button>
            <p className="mt-4 text-sm">
              Don't yet An Account?{" "}
              <Link to="/registerPage" className="underline cursor-pointer">Register</Link>
            </p>
          </div>
        </form>
        {error === "true" && <p className="text-purple-800 font-bold text-center mt-4">All fields are required</p>}
      </div>
    </section>
  );
};

export default Login;