import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  // Check if the user is in localStorage when the app loads
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Load user from localStorage into context
    }
    setLoading(false); // After the check, stop the loading state
  }, [setUser]);

  if (loading) {
    // Show loading state while checking user auth
    return <div>Loading...</div>;
  }

  // If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Otherwise, render the protected component
  return children;
};

export default PrivateRoute;
