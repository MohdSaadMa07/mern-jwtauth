import axios from "axios";

// Set up base instance for axios
const API = axios.create({
  baseURL: "https://mern-jwtauth.onrender.com/api", // your backend base URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // set to true if using cookies/session auth
});

export default API;
