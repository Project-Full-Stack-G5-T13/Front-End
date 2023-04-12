import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/SignUp";
import Login from "./pages/Login";
import Car from "./pages/Car";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/car" element={<Car/>} />
      </Routes>
      <ToastContainer limit={1} autoClose={1500} />
    </div>
  );
};

export default App;
