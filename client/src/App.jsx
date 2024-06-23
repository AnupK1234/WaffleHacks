import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./components/DonatePage/Donate";
import Dashboard from "./components/DonatePage/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Contact from "./pages/Contact";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
