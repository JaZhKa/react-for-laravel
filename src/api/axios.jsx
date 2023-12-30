import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("JWT")}`,
  },
});
