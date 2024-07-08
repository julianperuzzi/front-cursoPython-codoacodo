// Products.jsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductsList from '../components/ProductList';

const Products = ({ darkMode }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://julianperuzzi.pythonanywhere.com/productos')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(() => setError(true));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://julianperuzzi.pythonanywhere.com/productos/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(() => setError(true));
  };

  if (error) return <p>Ocurrió un error...</p>;

  return (
    <div className={` mx-auto pb-40 pt-8 px-4 ${darkMode ? 'bg-neutral-800 text-white' : 'bg-orange-100 text-gray-800'}`}>
      <div className='container mx-auto'>
      <h2 className="text-3xl font-bold text-center">Administrador de Productos</h2>
      <div className="mx-auto my-8">
        <Link
          to="/products/new"
          className={`my-8 text-center px-6 py-3 text-xl font-semibold shadow-md ${darkMode ? 'bg-green-600 text-white hover:bg-green-700 hover:text-gray-100' : 'bg-green-200 text-green-600 hover:text-green-900 hover:bg-green-300'}`}>
          Añadir Producto
        </Link>
      </div>

      <ProductsList products={products} darkMode={darkMode} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Products;
