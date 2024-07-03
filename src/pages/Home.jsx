import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';

import imagenFondo from '../assets/imagenFondo2.jpg';
import imagenFondo1 from '../assets/imagenFondo1.jpg';
import imagenProducto1 from '../assets/producto1.jpg';
import imagenProducto2 from '../assets/producto2.jpg';
import imagenProducto3 from '../assets/producto3.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = ({ darkMode }) => {
  const [offerIndex, setOfferIndex] = useState(0);
  const offers = [
    "¡Ofertas de Invierno, no te las pierdas!",
    "Envíos Gratis en todos los productos",
    "Descuentos exclusivos con tarjetas bancarias",
    "20% Off utilizando el codigo ARG-HARD20",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 1500); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className={`max-w-100 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>

      {/* Cartel de Ofertas */}
      <div className="bg-black text-white text-center py-4 ">
        <p className="text-l md:text-lg font-semibold">{offers[offerIndex]}</p>
      </div>

      {/* Presentacion + Imagen */}
      <Parallax className="bg-cover bg-center md:h-[50vh] h-[50vh]" bgImage={imagenFondo} strength={700}>
        <div className="flex flex-col items-center text-center justify-center md:mt-40 mt-10" data-aos="zoom-in">
          <h1 className={`lg:text-7xl text-6xl font-bold p-6  bg-clip-text text-transparent ${darkMode ? 'bg-gradient-to-r from-purple-500 to-pink-300' : 'bg-gradient-to-r from-pink-500 to-violet-300'} hover:scale-105 transition duration-700`}>Argentina Hardware</h1>
          <p className="mt-2 text-xl px-10 text-white">Productos de hardware para trabajar y también divertirse.</p>
        </div>
      </Parallax>

      {/* HOME de la web, con articulos, productos etc */}
      <div className="container mx-auto pt-4 pb-16">
        {/* Bienvenida a la página web */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-4 mb-24 w-10/12 mx-auto border-y border-gray" data-aos="fade-up">
          <div className="md:order-2">
            <img src={imagenFondo1} alt="Imagen de Fondo" className=" shadow-lg md:float-right md:w-10/12" />
          </div>
          <div className="md:order-1">
            <div>
              <h2 className="md:text-4xl text-3xl font-bold text-center" style={{ color: darkMode ? '#FFFFFF' : '#2D3748' }}>Bienvenido a nuestra página</h2>
              <p className="mt-4 text-lg" style={{ color: darkMode ? '#E2E8F0' : '#4A5568' }}>
                Explora el mundo de la tecnología con Argentina Hardware. Ofrecemos una amplia gama de productos diseñados para satisfacer tus necesidades tecnológicas.
              </p>
              <p className="mt-4  italic text-left mx-auto">"La tecnología es solo una herramienta. En términos de motivación e impacto en la humanidad, es lo que lleva a las personas a lograr cosas maravillosas."</p>
              <p className="mt-4 text-sm text-left mx-auto">- Sony Moore, Fundador Argentina Hardware</p>
            </div>
          </div>
        </div>

        {/* Posteo de productos */}
        <div className="grid grid-cols-1 gap-10 w-10/12 mx-auto" data-aos="fade-right">
          <h2 className={`text-4xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Explora Nuestros Productos</h2>

          {/* Primer Producto */}
          <div className={`bg-white shadow-lg overflow-hidden flex md:flex-row flex-col-reverse hover:scale-105 transition duration-500`}>
            <div className="p-4 md:w-1/2">
              <h3 className="text-xl font-bold mb-2 text-gray-700">Productos para Oficina</h3>
              <p className="text-gray-600">Descubre nuestra selección de productos ideales para tu espacio de oficina. Desde componentes esenciales hasta accesorios prácticos.</p>
              <Link to="/" className="block mt-2 text-sm font-semibold text-blue-500 hover:text-blue-600">Ver más</Link>
            </div>
            <img src={imagenProducto1} alt="Producto 1" className="w-full h-60 object-cover md:w-1/2" />
          </div>

          {/* Segundo Producto */}
          <div className={`bg-white shadow-lg overflow-hidden flex md:flex-row flex-col hover:scale-105 transition duration-500 `}>
            <img src={imagenProducto2} alt="Producto 2" className="w-full h-60 object-cover md:w-1/2" />
            <div className="p-4 md:w-1/2">
              <h3 className="text-xl font-bold mb-2 text-gray-700">Productos Gamer</h3>
              <p className="text-gray-600">Sumérgete en el mundo del gaming con nuestros productos diseñados para maximizar tu experiencia. Equipos de última generación y accesorios imprescindibles.</p>
              <Link to="/" className="block mt-2 text-sm font-semibold text-blue-500 hover:text-blue-600">Ver más</Link>
            </div>
          </div>

          {/* Tercer Producto */}
          <div className={`bg-white shadow-lg overflow-hidden flex md:flex-row flex-col-reverse hover:scale-105 transition duration-500 `}>
            <div className="p-4 md:w-1/2">
              <h3 className="text-xl font-bold mb-2 text-gray-700">Productos eSports</h3>
              <p className="text-gray-600">Explora nuestra colección de productos diseñados para los jugadores más competitivos. Equipos optimizados y tecnología de vanguardia para tu rendimiento.</p>
              <Link to="/" className="block mt-2 text-sm font-semibold text-blue-500 hover:text-blue-600">Ver más</Link>
            </div>
            <img src={imagenProducto3} alt="Producto 3" className="w-full h-60 object-cover md:w-1/2" />
          </div>
        </div>

        {/* Administrador de Productos */}
        <div className="container my-24 w-10/12 mx-auto">
          <h3 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Administrador de Productos</h3>
          <p className={`text-gray-600 mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Ingresa al menú de Administración de Productos: Agrega, Edita o Elimina Productos</p>
          <Link to="/products" className={`text-center bg-slate-200 px-6 py-2 md:text-xl text-sm text-violet-700 hover:text-violet-900 font-semibold shadow-md ${darkMode ? 'hover:bg-gray-300' : 'hover:bg-gray-200'}`}>
            Ir al Administrador de Productos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
