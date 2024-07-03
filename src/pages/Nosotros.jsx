import React from 'react';

// Importar las imágenes de cada persona
import imagenJulian from '../assets/julian_peruzzi.png';   
//import imagenMirta from '../assets/mirta_britez.jpg';
//import imagenNora from '../assets/nora_tresmas.jpg';

                  

const Nosotros = () => {
  // Datos de cada integrante
  const integrantes = [
    { nombre: 'Julian Peruzzi', dni: '12345678', profesion: 'Desarrollador Web', imagen: imagenJulian },
    { nombre: 'Mirta Britez', dni: '87654321', profesion: 'Diseñadora UX/UI', imagen: imagenJulian },
    { nombre: 'Nora Tresmas', dni: '56789123', profesion: 'Ingeniera de Software', imagen: imagenJulian }
  ];

  return (
    <div className="container md:w-9/12 mx-auto my-16">
      <h2 className="text-3xl font-bold text-center mb-8">Nosotros</h2>

      {integrantes.map((persona, index) => (
        <div key={index} className={`bg-white shadow-lg overflow-hidden flex md:flex-row flex-col-reverse hover:scale-105 transition duration-500 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mt-8`}>
          {/* Imagen de la persona */}
          <img src={persona.imagen} alt={persona.nombre} className="w-full h-80 object-cover md:w-1/3" />

          {/* Información de la persona */}
          <div className="p-4 md:w-1/2">
            <h3 className="text-xl font-bold mb-2 text-gray-700">{persona.nombre}</h3>
            <p><strong>DNI:</strong> {persona.dni}</p>
            <p><strong>Profesión:</strong> {persona.profesion}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Nosotros;

