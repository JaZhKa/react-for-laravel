import { Navigate, Outlet, Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const AuthLayout = () => {
  const { user, logout } = useAuthContext();

  return user ? (
    <>
      <div className='flex justify-end w-full'>
        <nav className='mb-8 flex flex-row space-x-4 space-x justify-end'>
          <Link
            to='/'
            className='inline-box border-b-4 border-solid border-transparent font-sans text-lg font-semibold tracking-wider text-gray-700 no-underline hover:border-gray-900 hover:text-gray-900'
          >
            Home
          </Link>
          <Link
            to='/posts'
            className='inline-box border-b-4 border-solid border-transparent font-sans text-lg font-semibold tracking-wider text-gray-700 no-underline hover:border-gray-900 hover:text-gray-900'
          >
            Posts
          </Link>
          {user ? (
            <button
              onClick={logout}
              className='inline-box border-b-4 border-solid border-transparent font-sans text-lg font-semibold tracking-wider text-gray-700 no-underline hover:border-gray-900 hover:text-gray-900'
            >
              Logout
            </button>
          ) : (
            <div>
              <Link
                to='/login'
                className='inline-box border-b-4 border-solid border-transparent font-sans text-lg font-semibold tracking-wider text-gray-700 no-underline hover:border-gray-900 hover:text-gray-900'
              >
                Login
              </Link>
              <Link
                to='/register'
                className='inline-box border-b-4 border-solid border-transparent font-sans text-lg font-semibold tracking-wider text-gray-700 no-underline hover:border-gray-900 hover:text-gray-900'
              >
                Register
              </Link>
            </div>
          )}
        </nav>
      </div>
      <div className='min-h-dvh relative w-9/12'>
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to='/login' />
  );
};

export default AuthLayout;
