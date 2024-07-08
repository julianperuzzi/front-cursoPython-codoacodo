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
  const [cart, setCart] = useState([]);

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

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const generateWhatsAppMessage = () => {
    const baseURL = 'https://wa.me/2645636968?text=';
    let message = ' *Hola Argentina Hardware, Me gustaría ordenar lo siguiente:* ';
    cart.forEach((item, index) => {
      message += `

      *${index + 1}. ${item.nombre}* - $${item.precio} - Cantidad: 1 
      `;
    });
    message += `
> Medios de pago disponibles:  - Transferencia bancaria  - Tarjeta de crédito/débito - Efectivo
    `;
    message += `
> Recuerda que la disponibilidad y stock/color puede variar y será confirmado por el vendedor.
> Para confirmar la compra, por favor contactar al vendedor en WhatsApp con el número 2645636968 o enviar un mensaje con la dirección de envío.
  *Gracias!* `;
    return `${baseURL}${encodeURIComponent(message)}`;
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return (
    <div>
      <p>Ocurrió un error... Por favor refresca la página.</p>
      <button onClick={handleRefresh} className="bg-blue-500 text-white px-3 py-1 rounded-md mt-4 hover:bg-blue-600">Refrescar</button>
    </div>
  );

  return (
    <div className={`mx-auto p-6 ${darkMode ? 'bg-slate-900/80' : 'bg-indigo-100'}`}>
      <h2 className={`text-4xl font-bold mb-3 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Productos</h2>
      <div className={`mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4`} data-aos="fade-up">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-xl hover:scale-105 transition duration-500">
            <img src={product.imagen} alt={product.nombre} className="w-full h-40 object-cover mb-2 rounded-md" />
            <h2 className="text-lg font-semibold">{product.nombre}</h2>
            <p className="text-gray-600">${product.precio}</p>
            <p className="text-gray-600">Stock: {product.stock}</p>
            <button onClick={() => addToCart(product)} className="bg-green-500 text-white px-3 py-1 rounded-md mt-2 hover:bg-green-600">Añadir al carrito</button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className={`mt-6 p-6 rounded-lg shadow-lg ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
          <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Carrito</h2>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-6">
              <div>
                <h3 className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>{item.nombre}</h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>${item.precio}</p>
              </div>
              <button onClick={() => setCart(cart.filter((_, i) => i !== index))} className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600">Eliminar</button>
            </div>
          ))}
          <a href={generateWhatsAppMessage()} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Enviar Carrito por WhatsApp</a>
        </div>
      )}
    </div>
  );
};

export default ReadOnlyProductList;
