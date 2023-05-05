import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_HOST,
  // baseURL: 'http://localhost:3333',
  timeout: 15000,
});

export default api;
