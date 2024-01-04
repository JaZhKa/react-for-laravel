import { useState } from "react";
import useAuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const { register, errors } = useAuthContext();

  const handleRegister = async (e) => {
    e.preventDefault();
    register({ name, email, password, password_confirmation });
  };

  return (
    <div>
      <form className="w-full max-w-sm" onSubmit={handleRegister}>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="inline-full-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
            />
            {errors.name && (
              <div className="flex">
                <span className="m-2 p-2 text-sm text-red-400">
                  {errors.name[0]}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="inline-email"
            >
              Email
            </label>
          </div>
          <div className="relative md:w-2/3">
            <input
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="inline-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="JohnDoe@mail.com"
            />
            {email ? (
              !email.includes("@") && (
                <span className="absolute -bottom-4 left-0 text-xs text-red-500 ">
                  Invalid email!
                </span>
              )
            ) : (
              <span className="absolute text-xs text-red-500" />
            )}
            {errors.email && (
              <div className="flex">
                <span className="m-2 p-2 text-sm text-red-400">
                  {errors.email[0]}
                </span>
              </div>
            )}
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
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="flex">
                <span className="m-2 p-2 text-sm text-red-400">
                  {errors.password[0]}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right"
              htmlFor="inline-comfirm-password"
            >
              Confirm Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="inline-comfirm-password"
              type="password"
              placeholder="********"
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-baseline justify-around">
          <div className="mb-4 md:w-2/3">
            <button
              className="focus:shadow-outline rounded bg-gray-700 px-4 py-2 font-bold text-white shadow hover:bg-gray-400 focus:outline-none"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <Link
            to="/login"
            className="inline-box border-b-4 border-solid border-transparent font-sans text-lg font-semibold tracking-wider text-gray-700 no-underline hover:border-gray-900 hover:text-gray-900"
          >
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
