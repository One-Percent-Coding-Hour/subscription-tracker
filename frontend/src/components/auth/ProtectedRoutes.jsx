import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  console.log("ProtectedRoute -> user:", user);

  if (!user) {
    return <Navigate to="/auth/signup" replace />;
  }

  return children;
};
