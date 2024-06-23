import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./components/DonatePage/Donate";
import Dashboard from "./components/DonatePage/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Contact from "./pages/Contact";
import { AuthProvider } from "./context/AuthContext";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

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
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
