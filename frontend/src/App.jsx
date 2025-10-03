import React from "react";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "./components/auth/ProtectedRoutes";
import { Dashboard } from "./pages/Dashboard";

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/auth/signup" element={<Signup />}/>

        <Route path="/dashboard" element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        } />
      </Routes>

    </Router>
  );
};

export default App;
