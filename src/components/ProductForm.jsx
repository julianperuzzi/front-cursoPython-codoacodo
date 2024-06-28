import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductForm = ({ isEdit }) => {
  const [product, setProduct] = useState({
    nombre: '',
    precio: '',
    stock: '',
    imagen: ''
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (isEdit) {
      fetch(`https://julianperuzzi.pythonanywhere.com/productos/${id}`)
        .then(response => response.json())
        .then(data => {
          setProduct(data);
        })
        .catch(() => {
          setError(true);
        });
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = isEdit ? 'PUT' : 'POST';
    const url = isEdit ? `https://julianperuzzi.pythonanywhere.com/productos/${id}` : 'https://julianperuzzi.pythonanywhere.com/productos';

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(() => {
      navigate('/products');
    })
    .catch(() => {
      setError(true);
    });
  };

  if (error) return <p>Ocurrió un error...</p>;

  return (
    <div className="container mx-auto my-10 w-8/12">
      <h1 className="text-2xl font-bold mb-4">{isEdit ? 'Editar Producto' : 'Nuevo Producto'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input type="text" name="nombre" value={product.nombre} onChange={handleChange} className="border py-2 px-4 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Precio</label>
          <input type="number" name="precio" value={product.precio} onChange={handleChange} className="border py-2 px-4 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Stock</label>
          <input type="number" name="stock" value={product.stock} onChange={handleChange} className="border py-2 px-4 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Imagen (URL)</label>
          <input type="text" name="imagen" value={product.imagen} onChange={handleChange} className="border py-2 px-4 w-full" required />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{isEdit ? 'Guardar Cambios' : 'Crear Producto'}</button>
      </form>
    </div>
  );
};

export default ProductForm;
