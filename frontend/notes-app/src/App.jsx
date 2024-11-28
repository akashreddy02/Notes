import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp"; // Assuming you have this component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

const App = () => {
  return (
    <div>
      <AppRoutes />
    </div>
  );
};

export default App;
