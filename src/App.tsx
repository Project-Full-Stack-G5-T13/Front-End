import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/SignIn";
import Login from "./pages/Login";

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/" element={<Dashboard />} />
			</Routes>
		</div>
	);
};

export default App;
