import React from "react";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Logout } from "./pages/Logout";
import { Navigation } from "./pages/Navigation";
import "./App.css";
import { CheckBalance } from "./pages";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const toggleAuth = () => {
    setIsAuthenticated((prevState) => !prevState);
  };

  return (
    <div className="h-dvh w-screen bg-white-800">
      <header className="bg-blue-600">
        <div className="container mx-auto py-10">
          <div className="text-white">
            <h1 className="text-2xl font-bold">ATM Machine</h1>
          </div>
        </div>
      </header>
      <div className="container py-6 mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <Home isAuthenticated={isAuthenticated} login={toggleAuth} />
            }
          />
          <Route path="/balance" element={<CheckBalance />} />
          <Route
            path="/navigation"
            element={isAuthenticated ? <Navigation /> : <Navigate to="/" />}
          />
          <Route
            path="/logout"
            element={
              <Logout isAuthenticated={isAuthenticated} logout={toggleAuth} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
