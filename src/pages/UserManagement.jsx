import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const UserManagement = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    contrasena: '',
    foto_perfil: '',
    ciudad: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://julianperuzzi.pythonanywhere.com/usuarios');
      if (!response.ok) {
        throw new Error('Error al cargar los usuarios');
      }
      const data = await response.json();
      setUsers(data);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.error('Error al cargar los usuarios:', error);
      setError(true);
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    setLoading(true);
    setError(false);
    fetchData();
  };

  const addUser = async (user) => {
    try {
      const response = await fetch('https://julianperuzzi.pythonanywhere.com/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      if (!response.ok) {
        throw new Error('Error al agregar usuario');
      }
      fetchData();
    } catch (error) {
      console.error('Error al agregar usuario:', error);
    }
  };

  const updateUser = async (id, user) => {
    try {
      const response = await fetch(`https://julianperuzzi.pythonanywhere.com/usuarios/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      if (!response.ok) {
        throw new Error('Error al actualizar usuario');
      }
      fetchData();
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`https://julianperuzzi.pythonanywhere.com/usuarios/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Error al eliminar usuario');
      }
      fetchData();
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  const handleEditClick = (user) => {
    setEditingUser(user);
    setFormData({
      nombre: user.nombre,
      contrasena: user.contrasena,
      foto_perfil: user.foto_perfil,
      ciudad: user.ciudad
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const user = formData;
    if (editingUser) {
      updateUser(editingUser.id, user);
    } else {
      addUser(user);
    }
    setEditingUser(null);
    setFormData({
      nombre: '',
      contrasena: '',
      foto_perfil: '',
      ciudad: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
      <h2 className={`text-4xl font-bold mb-3 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Gestión de Usuarios</h2>
      <div className="grid grid-cols-1 gap-4">
        {users.map(user => (
          <div key={user.id} className="bg-white p-4 rounded-lg shadow-lg" data-aos="fade-up">
            <img src={user.foto_perfil} alt={user.nombre} className="w-16 h-16 object-cover rounded-full mb-2" />
            <h2 className="text-lg font-semibold">{user.nombre}</h2>
            <p className="text-gray-600">Ciudad: {user.ciudad}</p>
            <button onClick={() => handleEditClick(user)} className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600">Editar</button>
            <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-3 py-1 rounded-md m-2 hover:bg-red-600">Eliminar</button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{editingUser ? 'Editar Usuario' : 'Agregar Usuario'}</h3>
        <form onSubmit={handleFormSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="contrasena">Contraseña</label>
            <input
              type="password"
              name="contrasena"
              placeholder="Contraseña"
              className="block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              value={formData.contrasena}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="foto_perfil">Foto de perfil (URL)</label>
            <input
              type="text"
              name="foto_perfil"
              placeholder="Foto de perfil (URL)"
              className="block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              value={formData.foto_perfil}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="ciudad">Ciudad</label>
            <input
              type="text"
              name="ciudad"
              placeholder="Ciudad"
              className="block w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              value={formData.ciudad}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded-md mt-2 hover:bg-green-600">{editingUser ? 'Actualizar' : 'Agregar'}</button>
        </form>
      </div>
    </div>
  );
};

export default UserManagement;
