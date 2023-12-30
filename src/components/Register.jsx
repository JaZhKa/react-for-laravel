import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./../api/axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", {
        name, email, password, password_confirmation,
      });
      setEmail('');
      setPassword('');
      setPasswordConfirmation('');
      setName('');
      navigate('/login');
    } catch (error) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  }

  return (
    <>
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
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              id='inline-full-name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='John Doe'
            />
              {errors.name && (
                <div className='flex'>
                  <span className='text-red-400 text-sm m-2 p-2'>{errors.name[0]}</span>
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
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              id='inline-full-name'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='JohnDoe@mail.com'
            />
            {errors.email && (
                <div className='flex'>
                  <span className='text-red-400 text-sm m-2 p-2'>{errors.email[0]}</span>
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
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              id='inline-password'
              type='password'
              placeholder='********'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
                <div className='flex'>
                  <span className='text-red-400 text-sm m-2 p-2'>{errors.password[0]}</span>
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
              className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
              id='inline-comfirm-password'
              type='password'
              placeholder='********'
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
        </div>
        <div className='md:flex md:items-center'>
          <div className='md:w-1/3'></div>
          <div className='md:w-2/3'>
            <button
              className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='submit'
            >
              Sign In
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
