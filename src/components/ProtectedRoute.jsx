// src/components/ProtectedRoute.js
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    alert("¡Debes iniciar sesión para acceder a esta página!");
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
