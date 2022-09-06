import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";
import Chekout from "./components/Chekout";
import Navbar from "./components/Navbar";
import Home from "./home/Home";
import { UserProvider } from "./hooks/context/UserContext";

function App() {
  const [user, setUser] = useState();
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/Chekout" element={<Chekout />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
