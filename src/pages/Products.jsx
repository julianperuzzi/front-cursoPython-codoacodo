import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductsList from '../components/ProductList';



const Products = () => {
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
    <div className="container mx-auto mb-40 " >
      
      <h2 className="text-3xl font-bold my-8">Productos</h2>
      <div className=" mx-auto my-8">
      <Link to="/products/new" className="my-8 text-center bg-green-200 px-6 py-3 text-xl text-green-600 hover:text-green-900 font-semibold shadow-md">
              Añadir Producto
            </Link>
            </div>

      <ProductsList products={products} />
    </div>
  );
};

export default Products;
