// AuthenAdmin.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const AuthenAdmin = ({ children }) => {
  const role = "student";

  // Check if the user has the "admin" role
  if (role === "admin") {
    return children; // Return the children components
  } else {
    // Redirect to a different route if the user doesn't have the "admin" role
    return <Navigate to="/login" />;
  }
};

export default AuthenAdmin;
