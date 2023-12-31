import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import useAuthContext from "./context/AuthContext";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const { user, logout } = useAuthContext();

  return (
    <div>
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
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
