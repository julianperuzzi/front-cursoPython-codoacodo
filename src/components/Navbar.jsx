// src/components/Navbar.js
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`w-full sticky top-0 z-30 shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-slate-700'}`}>
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className={`font-bold hover:text-white md:text-2xl text-lg bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-300 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
          Argentina Hardware
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`${darkMode ? 'text-gray-300' : 'text-gray-800'} hover:text-purple-800 focus:outline-none`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center justify-center flex-grow">
          <Link to="/" className={`mx-2 px-4 py-2 rounded-md transition-colors duration-300 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-200 hover:bg-purple-800'}`}>
            Inicio
          </Link>
          <Link to="/clientproducts" className={`mx-2 px-4 py-2 rounded-md transition-colors duration-300 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-200 hover:bg-purple-800'}`}>
            Productos
          </Link>
          <Link to="/adminproducts" className={`mx-2 px-4 py-2 rounded-md transition-colors duration-300 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-200 hover:bg-purple-800'}`}>
            Gestor Productos
          </Link>
          <Link to="/usuarios" className={`mx-2 px-4 py-2 rounded-md transition-colors duration-300 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-200 hover:bg-purple-800'}`}>
            Gestor Usuarios
          </Link>
          <Link to="/nosotros" className={`mx-2 px-4 py-2 rounded-md transition-colors duration-300 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-200 hover:bg-purple-800'}`}>
            Nosotros
          </Link>
          <Link to="/news" className={`mx-2 px-4 py-2 rounded-md transition-colors duration-300 ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-200 hover:bg-purple-800'}`}>
            Noticias
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>

              <Link to="/myaccount" className={`px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'bg-cyan-600 text-white' : 'bg-cyan-200 text-cyan-800'}`}>{user.nombre}</Link>
              
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
          )}
          <button
            onClick={toggleDarkMode}
            className={`hover:text-white px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-600 text-gray-300'}`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-75 z-40 flex justify-end">
          <div className={`w-2/3  shadow-lg flex flex-col p-4 ${darkMode ? 'bg-slate-800 text-gray-200' : 'text-gray-300 bg-white'}`} >
            <button onClick={toggleMenu} className="self-end mb-4">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <Link to="/" onClick={closeMenu} className={`block px-4 py-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'} hover:bg-gray-200`}>Inicio</Link>
            <Link to="/clientproducts" onClick={closeMenu} className={`block px-4 py-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'} hover:bg-gray-200`}>Productos</Link>
            <Link to="/adminproducts" onClick={closeMenu} className={`block px-4 py-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'} hover:bg-gray-200`}>Gestor Productos</Link>
            <Link to="/usuarios" onClick={closeMenu} className={`block px-4 py-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'} hover:bg-gray-200`}>Gestor Usuarios</Link>
            <Link to="/nosotros" onClick={closeMenu} className={`block px-4 py-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'} hover:bg-gray-200`}>Nosotros</Link>
            <Link to="/news" onClick={closeMenu} className={`block px-4 py-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'} hover:bg-gray-200`}>Noticias</Link>
            {isAuthenticated ? (
              <button onClick={() => { logout(); closeMenu(); }} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</button>
            ) : (
              <Link to="/login" onClick={closeMenu} className={`block px-4 py-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'} hover:bg-gray-200`}>Login</Link>
            )}
            <button
              onClick={() => {
                toggleDarkMode();
                closeMenu();
              }}
              className={`mt-4 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-600 text-gray-300'}`}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
