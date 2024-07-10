import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';

const Products = ({ darkMode }) => {
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
      setError(false); // Reinicia el estado de error si la carga tiene éxito
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

  const handleDelete = (id) => {
    fetch(`https://julianperuzzi.pythonanywhere.com/productos/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(() => setError(true));
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return (
    <div className="container">
      <p>Ocurrió un error... Por favor refresca la página.</p>
      <button onClick={handleRefresh} className="bg-blue-500 text-white px-3 py-1 rounded-md mt-4 hover:bg-blue-600">Refrescar</button>
    </div>
  );

  return (
    <div className={`mx-auto pb-40 pt-8 px-4 ${darkMode ? 'bg-neutral-800 text-white' : 'bg-orange-100 text-gray-800'}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Administrador de Productos</h2>
        <div className="mx-auto my-8">
          <Link
            to="/adminproducts/new"
            className={`my-8 text-center px-6 py-3 text-xl font-semibold shadow-md ${darkMode ? 'bg-green-600 text-white hover:bg-green-700 hover:text-gray-100' : 'bg-green-200 text-green-600 hover:text-green-900 hover:bg-green-300'}`}
          >
            Añadir Producto
          </Link>
        </div>

        <ProductList products={products} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Products;
