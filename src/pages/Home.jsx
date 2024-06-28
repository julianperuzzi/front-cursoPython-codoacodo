import React from 'react';
import { Link } from 'react-router-dom';

import imagenFondo from '../assets/imagenFondo.jpg'; 
import imagenProducto1 from '../assets/producto1.jpg';
import imagenProducto2 from '../assets/producto2.jpg';
import imagenProducto3 from '../assets/producto3.jpg';

const Home = () => {
  return (
    <div className="relative">


      {/* //Presentacion + Imagen// */}
      <div className="h-96 bg-cover bg-center"
           style={{ backgroundImage: `url(${imagenFondo})` }}>
        <div className="bg-black bg-opacity-50 h-full w-full flex flex-col justify-center items-center text-center text-white hover:bg-opacity-70 transition duration-500">
          <h1 className="text-6xl font-bold p-6 my-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-300">Argentina Hardware</h1>
          <p className="mt-2 text-lg">Productos de hardware para trabajar y también divertirse.</p>
        </div>
      </div>


      {/* //bievenida a la pagina web// */}
      
      <div className="container mx-auto my-16">
        <div className="text-center my-16">
          <h2 className="text-4xl font-bold">Bienvenido a nuestra página</h2>
          <p className="mt-4 text-lg text-gray-700">
            Explora el mundo de la tecnología con Argentina Hardware. Ofrecemos una amplia gama de productos diseñados para satisfacer tus necesidades tecnológicas.
          </p>
          <p className="mt-4 text-gray-600 italic">"La tecnología es solo una herramienta. En términos de motivación e impacto en la humanidad, es lo que lleva a las personas a lograr cosas maravillosas."</p>
          <p className="mt-1 text-gray-600 text-sm">- Sony Moore, Fundador Argentina Hardware</p>
        </div>




          {/* //posteo de productos// */}
        
        <div className="grid grid-cols-1 gap-10 w-10/12 mx-auto">
        <h2 className="text-4xl font-bold mb-3">Explora Nuestros Productos</h2>
          {/* Primer Producto */}
          <div className="bg-white shadow-lg overflow-hidden flex md:flex-row flex-col-reverse hover:scale-105 transition duration-500">
            <div className="p-4 md:w-1/2">
              <h3 className="text-xl font-bold mb-2">Productos para Oficina</h3>
              <p className="text-gray-600">Descubre nuestra selección de productos ideales para tu espacio de oficina. Desde componentes esenciales hasta accesorios prácticos.</p>
              <a href="/" className="block mt-2 text-sm font-semibold text-blue-500 hover:text-blue-600">Ver más</a>
            </div>
            <img src={imagenProducto1} alt="Producto 1" className="w-full h-60 object-cover md:w-1/2" />
          </div>

          {/* Segundo Producto */}
          <div className="bg-white shadow-lg overflow-hidden flex md:flex-row flex-col hover:scale-105 transition duration-500">
            <img src={imagenProducto2} alt="Producto 2" className="w-full h-60 object-cover md:w-1/2" />
            <div className="p-4 md:w-1/2">
              <h3 className="text-xl font-bold mb-2">Productos Gamer</h3>
              <p className="text-gray-600">Sumérgete en el mundo del gaming con nuestros productos diseñados para maximizar tu experiencia. Equipos de última generación y accesorios imprescindibles.</p>
              <a href="/" className="block mt-2 text-sm font-semibold text-blue-500 hover:text-blue-600">Ver más</a>
            </div>
          </div>

          {/* Tercer Producto */}
          <div className="bg-white shadow-lg overflow-hidden flex md:flex-row flex-col-reverse hover:scale-105 transition duration-500">
            <div className="p-4 md:w-1/2">
              <h3 className="text-xl font-bold mb-2">Productos eSports</h3>
              <p className="text-gray-600">Explora nuestra colección de productos diseñados para los jugadores más competitivos. Equipos optimizados y tecnología de vanguardia para tu rendimiento.</p>
              <a href="/" className="block mt-2 text-sm font-semibold text-blue-500 hover:text-blue-600">Ver más</a>
            </div>
            <img src={imagenProducto3} alt="Producto 3" className="w-full h-60 object-cover md:w-1/2" />
          </div>
        </div>

        <div className="container my-24 w-10/12 mx-auto">
        <h3 className="text-3xl font-bold mb-6">Administrador de Productos </h3>
        <p className="text-gray-600 mb-6">Ingresa al menu de Administracion de Productos: Agrega, Edita o Elimina Productos</p>
        <Link to="/products" className="text-center bg-slate-200 px-6 py-2 text-xl text-blue-500 hover:text-blue-600 font-semibold shadow-md">
        Ir al Administrador de Productos
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
