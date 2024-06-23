import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./components/DonatePage/Donate";
import Dashboard from "./components/DonatePage/Dashboard";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/donate" element={<Donate/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  );
}

export default App;
