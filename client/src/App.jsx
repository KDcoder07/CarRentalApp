import React, { useState } from "react";
import {Route, Routes, useLocation } from "react-router-dom"; 
import Navbar from "./components/Navbar";

// IMPORT these components
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Cars from "./pages/Cars";
import MyBookings from "./pages/MyBookings";


const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const isOWnerPath = useLocation().pathname.startsWith('/owner');
  // const location = useLocation();

  return (
    <>
      {!isOWnerPath && <Navbar setShowLogin={setShowLogin} />}
    
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/car-details/:id" element={<CarDetails/>} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/my-bookings" element={<MyBookings/>} />
      </Routes>

      </>
)
}

export default App