import { createContext, useContext, useState } from "react";
import axios from "./../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const csrf = async () => await axios.get("/sanctum/csrf-cookie");
  localStorage.setItem("JWT", token);
  const getUser = async () => {
    const { data } = await axios.post("api/auth/me");
    setUser(data);
  };

  const login = async ({ ...data }) => {
    await csrf();
    try {
      await axios
        .post("api/auth/login", data)
        .then((response) => setToken(response.data.access_token));
      getUser();
      navigate("/");
    } catch (error) {
      if (error.response.status !== 200) {
        setErrors("Incorrect data!");
      }
    }
  };

  const register = async ({ ...data }) => {
    await csrf();
    try {
      await axios.post("api/auth/register", data);
      getUser();
      navigate("/");
    } catch (error) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, errors, getUser, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
