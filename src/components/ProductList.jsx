import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductList = ({ products, handleDelete }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!products.length) return <p>Cargando...</p>;

  return (
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" data-aos="fade-in">
      {products.map(product => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-xl hover:scale-105 transition duration-500">
          <img src={product.imagen} alt={product.nombre} className="w-full h-40 object-cover mb-2 rounded-md" />
          <h2 className="text-lg font-semibold">{product.nombre}</h2>
          <p className="text-gray-600">${product.precio}</p>
          <p className="text-gray-600">Stock: {product.stock}</p>
          <div className="mt-4">
            <Link to={`/adminproducts/edit/${product.id}`} className="bg-cyan-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-black">Editar</Link>
            <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-black">Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
