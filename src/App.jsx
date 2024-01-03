import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";
import Posts from "./pages/Posts";
import NewPost from "./pages/NewPost";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/new_post' element={<NewPost />} />
        </Route>
        <Route element={<GuestLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
