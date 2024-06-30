import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-violet-50 to-fuchsia-800 w-full sticky top-0 z-30 shadow-lg">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="text-gray-800 font-bold hover:text-purple-800 md:text-2xl text-lg">
          Argentina Hardware
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 hover:text-purple-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex items-center transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" className="block md:inline-block text-gray-200 hover:text-white hover:font-semibold px-3 py-2 transition-colors duration-300">
            Inicio
          </Link>
          <Link to="/products" className="block md:inline-block text-gray-200 hover:text-white hover:font-semibold px-3 py-2 transition-colors duration-300">
            Productos
          </Link>
          <Link to="/products/new" className="block md:inline-block text-gray-200 hover:text-white hover:font-semibold px-3 py-2 transition-colors duration-300">
            Añadir Producto
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
