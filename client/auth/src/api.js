import axios from "axios";

// Automatically uses correct backend depending on environment
const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api",
  withCredentials: true, // Needed for cookies (e.g., JWT in cookies)
});

export default API;
