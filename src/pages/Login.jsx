import { useState } from "react";
import useAuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, errors } = useAuthContext();

  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div>
      <form className="w-full max-w-sm" onSubmit={handleLogin}>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="inline-email-name"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="inline-email-name"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="inline-password"
            >
              Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="inline-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
          </div>
        </div>
        {errors && (
          <div className="flex">
            <span className="m-2 p-2 text-sm text-red-400">{errors}</span>
          </div>
        )}
        <div className="flex items-baseline justify-around">
          <div className="mb-4 md:w-2/3">
            <button
              className="focus:shadow-outline rounded bg-gray-700 px-4 py-2 font-bold text-white shadow hover:bg-gray-400 focus:outline-none"
              type="submit"
            >
              Log In
            </button>
          </div>
          <Link
            to="/register"
            className="inline-box border-b-4 border-solid border-transparent font-sans text-lg font-semibold tracking-wider text-gray-700 no-underline hover:border-gray-900 hover:text-gray-900"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
