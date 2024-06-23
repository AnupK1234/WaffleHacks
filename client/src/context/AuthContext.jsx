import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve tokens from cookies
    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");

    if (accessToken && refreshToken) {
      // Optionally validate tokens here
      // Fetch user data if tokens are valid
      const user = JSON.parse(Cookies.get("user"));
      setUser(user);
    }
  }, []);

  const login = (userData, accessToken, refreshToken) => {
    setUser(userData);
    Cookies.set("user", JSON.stringify(userData));
    Cookies.set("accessToken", accessToken);
    Cookies.set("refreshToken", refreshToken);
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("user");
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    navigate("/signin");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
