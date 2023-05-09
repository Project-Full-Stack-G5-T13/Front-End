import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_HOST,
  timeout: 15000,
});

export default api;
