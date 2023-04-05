import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route />
        <Route />
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
