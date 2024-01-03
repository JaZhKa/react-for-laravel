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
      <form className='w-full max-w-sm' onSubmit={handleRegister}>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='inline-full-name'
            >
              Full Name
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='inline-full-name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='John Doe'
            />
            {errors.name && (
              <div className='flex'>
                <span className='text-red-400 text-sm m-2 p-2'>
                  {errors.name[0]}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='inline-email'
            >
              Email
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='inline-full-name'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='JohnDoe@mail.com'
            />
            {errors.email && (
              <div className='flex'>
                <span className='text-red-400 text-sm m-2 p-2'>
                  {errors.email[0]}
                </span>
              </div>
            )}
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
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='inline-password'
              type='password'
              placeholder='********'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className='flex'>
                <span className='text-red-400 text-sm m-2 p-2'>
                  {errors.password[0]}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <label
              className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
              htmlFor='inline-comfirm-password'
            >
              Confirm Password
            </label>
          </div>
          <div className='md:w-2/3'>
            <input
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='inline-comfirm-password'
              type='password'
              placeholder='********'
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
        </div>
        <div className='flex items-baseline justify-around'>
          <div className='md:w-2/3 mb-4'>
            <button
              className='shadow bg-gray-700 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='submit'
            >
              Sign In
            </button>
          </div>
          <Link to='/login' className='inline-box border-b-4 border-solid border-transparent font-sans text-lg font-semibold tracking-wider text-gray-700 no-underline hover:border-gray-900 hover:text-gray-900'>Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
