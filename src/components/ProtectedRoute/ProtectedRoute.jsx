import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ ...props }) => {
  return props.isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
