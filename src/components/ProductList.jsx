import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css'

const ProductList = () => {

  useEffect(() => {
    AOS.init({duration: 1000})
  }) 


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://julianperuzzi.pythonanywhere.com/productos')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://julianperuzzi.pythonanywhere.com/productos/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setProducts(products.filter(product => product.id !== id));
    })
    .catch(() => {
      setError(true);
    });
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Ocurrió un error... Por favor refrescar la página</p>;

  return (
    <div className="container  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" data-aos="fade-in">
      {products.map(product => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-xl hover:scale-105 transition duration-500" >

          <img src={product.imagen} alt={product.nombre} className="w-full h-40 object-cover mb-2 rounded-md" />
          <h2 className="text-lg font-semibold">{product.nombre}</h2>
          <p className="text-gray-600">${product.precio}</p>
          <p className="text-gray-600">Stock: {product.stock}</p>
          <div className="mt-4">
            <Link to={`/products/edit/${product.id}`} className="bg-cyan-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-black">Editar</Link>
            <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-black">Eliminar</button>
          </div>
          </div>

      ))}
    </div>
  );
};

export default ProductList;
