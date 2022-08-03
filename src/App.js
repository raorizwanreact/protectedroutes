import React from "react";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import "./App.css";
import Cart from "./Components/Cart";
import ProtectRoute from "./Components/ProtectedRoute";

//import Header from "";
function App() {
  // const [user, setUser] = React.useState(null);

  // const handleLogin = () => setUser({ id: "1", name: "robin" });
  // const handleLogout = () => setUser(null);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/cart"
          element={
            <ProtectRoute>
              <Cart />
            </ProtectRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
