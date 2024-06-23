import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./components/DonatePage/Donate";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/donate" element={<Donate/>} />
      </Routes>
    </>
  );
}

export default App;
