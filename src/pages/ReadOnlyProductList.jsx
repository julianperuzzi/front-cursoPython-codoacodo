import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ReadOnlyProductList = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://julianperuzzi.pythonanywhere.com/productos');
      if (!response.ok) {
        throw new Error('Error al cargar los productos');
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.error('Error al cargar los productos:', error);
      setError(true);
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    setLoading(true);
    setError(false);
    fetchData();
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return (
    <div>
      <p>Ocurrió un error... Por favor refresca la página.</p>
      <button onClick={handleRefresh} className="bg-blue-500 text-white px-3 py-1 rounded-md mt-4 hover:bg-blue-600">Refrescar</button>
    </div>
  );

  return (
    <div className={`mx-auto p-6 ${darkMode ? 'bg-slate-900/80': 'bg-indigo-100'}`}>
    <h2 className={`text-4xl font-bold mb-3 text-center ${darkMode? 'text-white' : 'text-gray-800'}`}>Productos</h2>
    <div className={`mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 `} data-aos="fade-up" >
        
      {products.map(product => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-xl hover:scale-105 transition duration-500" >
          <img src={product.imagen} alt={product.nombre} className="w-full h-40 object-cover mb-2 rounded-md" />
          <h2 className="text-lg font-semibold">{product.nombre}</h2>
          <p className="text-gray-600">${product.precio}</p>
          <p className="text-gray-600">Stock: {product.stock}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ReadOnlyProductList;
