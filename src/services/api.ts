import axios from "axios";

const api = axios.create({
	//baseURL: "http://localhost:3333",
	baseURL: import.meta.env.VITE_BACKEND_HOST,
	timeout: 15000,
});

export default api;
