import React, { useState } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Cars from "./pages/Cars";
import MyBookings from "./pages/MyBookings";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const location = useLocation();
  // For HashRouter, remove '/#' if present
  const currentPath = location.pathname.startsWith('/#')
      ? location.pathname.slice(2)
      : location.pathname;
  const isOwnerPath = currentPath.startsWith('/owner');

  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        {/* Redirect all unknown routes to Home */}
        <Route path="*" element={<Navigate to="/Home" replace />} />
      </Routes>
    </>
  );
};

export default App;
