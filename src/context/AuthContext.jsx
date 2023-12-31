import { createContext, useContext, useEffect, useState } from "react";
import axios from "./../api/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const csrf = async () => await axios.get("/sanctum/csrf-cookie");

  const getUser = async () => {
    try {
      const { data } = await axios.post(
        "api/auth/me",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("JWT")}`,
          },
        }
      );
      setUser(data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const login = async ({ ...data }) => {
    await csrf();
    setErrors([]);
    try {
      const response = await axios.post("api/auth/login", data);
      localStorage.setItem("JWT", response.data.access_token);
      await getUser();
      navigate("/");
    } catch (error) {
      if (error.response.status !== 200) {
        setErrors("Incorrect data!");
      }
    }
  };

  const register = async ({ ...data }) => {
    await csrf();
    setErrors([]);
    try {
      await axios.post("api/auth/register", data);
      navigate("/login");
    } catch (error) {
      if (error.response.status === 422) {
        setErrors(error.response.data.errors);
      }
    }
  };

  const logout = async () => {
    await axios
      .post(
        "api/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("JWT")}`,
          },
        }
      )
      .then(() => {
        setUser(null);
      });
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, errors, getUser, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
