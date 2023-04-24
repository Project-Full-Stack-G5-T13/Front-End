import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/SignUp";
import Login from "./pages/Login";
import Car from "./pages/Car";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Teste from "./pages/Teste";
import Profile from "./pages/Profile";
import ModalCreateAds from "./components/ModalCreateAds";

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="*" element={<Dashboard />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/car" element={<Car />} />
				<Route path="/teste" element={<Teste />} />
				<Route path="/profile/:userId" element={<Profile />} />
				<Route path="/createadsmodal" element={<ModalCreateAds />} />
			</Routes>
			<ToastContainer limit={1} autoClose={1500} />
			<Footer />
		</>
	);
};

export default App;
