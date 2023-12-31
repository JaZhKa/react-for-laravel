import { Navigate, Outlet, Link } from "react-router-dom";
import useAuthContext from "../context/AuthContext";

const AuthLayout = () => {
  const { user, logout } = useAuthContext();

  return user ? (
    <>
      <nav>
        <Link to='/'>Home</Link>
        {user ? (
          <button onClick={logout}>logout</button>
        ) : (
          <div>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  ) : (
    <Navigate to='/login' />
  );
};

export default AuthLayout;
