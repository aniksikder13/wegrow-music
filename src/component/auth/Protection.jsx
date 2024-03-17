import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const ProtectedRoute = ({ children }) => {
  const [cookies, setCookie] = useCookies(['user']);

  // Access the specific cookie value for authentication (replace 'userId' if necessary)
  const user = cookies?.user; // Safely access userId from the 'user' cookie

  // Concisely check for authentication based on cookie presence and value
  const isAuthenticated = !!user;  // Double negation for a boolean check

  if (!isAuthenticated) {
    // Redirect if not authenticated (cookie missing or empty userId)
    return <Navigate to="/auth" replace />;
  }

  return children; // Render children if authenticated
};

export default ProtectedRoute;
