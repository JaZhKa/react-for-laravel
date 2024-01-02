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
    <>
      <form className='w-full max-w-sm' onSubmit={handleLogin}>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='inline-email-name'
            >
              Email
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              id='inline-email-name'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='inline-password'
            >
              Password
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              id='inline-password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='********'
            />
          </div>
        </div>
        {errors && (
          <div className='flex'>
            <span className='text-red-400 text-sm m-2 p-2'>{errors}</span>
          </div>
        )}
        <div className='md:flex md:items-center'>
          <div className='md:w-1/3'></div>
          <div className='md:w-2/3'>
            <button
              className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='submit'
            >
              Sign Up
            </button>
          </div>
          <Link to='/register'>Sign In</Link>
        </div>
      </form>
    </>
  );
}

export default Login;