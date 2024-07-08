import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const MyAccount = ({ darkMode }) => {
  const { user, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState(null); // Corregir nombre de estado a userData
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://julianperuzzi.pythonanywhere.com/usuarios/${user.id}`);
      if (!response.ok) {
        throw new Error('Error al cargar los datos del usuario');
      }
      const data = await response.json();
      setUserData(data); // Corregir aquí para usar setUserData en lugar de setUser
      setLoading(false);
      setError(false);
    } catch (error) {
      console.error('Error al cargar los datos del usuario:', error);
      setError(true);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  if (loading) return <p>Cargando...</p>;
  if (error) return (
    <div>
      <p>Ocurrió un error... Por favor refresca la página.</p>
    </div>
  );

  if (!userData) return null; // Agregar verificación de userData

  return (
    <div className={`mx-auto p-6 ${darkMode ? 'bg-slate-900/80' : 'bg-indigo-100'} min-h-screen`}>
      <h2 className={`text-4xl font-bold mb-3 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Mi Cuenta</h2>
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
        <img src={userData.foto_perfil} alt={userData.nombre} className="w-32 h-32 object-cover rounded-full mb-4 shadow-md" />
        <h2 className="text-2xl font-semibold mb-2">Usuario: {userData.nombre}</h2>
        <h3 className="text-l font-semibold mb-2">Contraseña: {userData.contrasena}</h3>
        <p className="text-gray-600 mb-4">Ciudad: {userData.ciudad}</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 mb-4"
        >
          Logout
        </button>
        <div>
        <button
          onClick={() => navigate('/usuarios')}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Gestor de Usuarios
        </button>
        <button
          onClick={() => navigate('/adminproducts')}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 ml-2"
        >
          Gestor de Productos
        </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
