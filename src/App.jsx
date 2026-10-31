import React from "react";
import { Routes, Route } from "react-router-dom";

import Mainlayout from "./components/Mainlayout/Mainlayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Testimonials from "./pages/Testimonials/Testimonials";
import Service from "./pages/Service/Service";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import LandingPage from "./pages/LandingPage/LandingPage";

import UserDashboard from "./pages/UserDashboard/UserDashboard";

function App() {
  return (
    <Routes>

      {/* Public Website */}
      <Route element={<Mainlayout />}>

        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Route>


      {/* User Dashboard */}
      <Route path="/userdashboard" element={<UserDashboard />} />

    </Routes>
  );
}

export default App;