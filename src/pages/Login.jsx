import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import fondoLogin from '../assets/slick-blur-violet-5k-4f.jpg';

function Login({ darkMode }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, logout, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://julianperuzzi.pythonanywhere.com/usuarios');
      if (!response.ok) {
        throw new Error('Error fetching users');
      }
      const data = await response.json();
      const authenticatedUser = data.find(user => user.nombre === username && user.contrasena === password);
      
      if (!authenticatedUser) {
        throw new Error('Invalid credentials');
      }
      login(authenticatedUser);
      localStorage.setItem('authUser', JSON.stringify(authenticatedUser));

      navigate('/myaccount');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed: ' + error.message);
    }
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem('authUser');
  };

  return (
    <div className={`relative flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat ${darkMode ? 'bg-gray-600' : 'bg-gray-400'} transition duration-500`} style={{ backgroundImage: `url(${fondoLogin})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <form onSubmit={handleSubmit} className={`relative mx-4 p-8 rounded-xl shadow-xl w-full max-w-md border-2 border-gray-400 hover:scale-105 transition duration-700 ${darkMode ? 'bg-gray-800 text-white' : 'bg-purple-50'}`}>
        <h2 className="text-2xl mb-4 text-center">Login de Usuario</h2>
        <div className="mb-4">
          <label className="block p-2">Username</label>
          <input
            type="text"
            className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-600 text-white' : ''}`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="my-4">
          <label className="block p-2">Password</label>
          <input
            type="password"
            className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-600 text-white' : ''}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isAuthenticated ? (
          <button onClick={handleLogout} className="w-full bg-red-500 text-white p-2 mt-6 rounded">
            Logout
          </button>
        ) : (
          <button type="submit" className="w-full bg-violet-800 text-white p-2 mt-6 rounded">
            Login
          </button>
        )}
      </form>
    </div>
  );
}

export default Login;
