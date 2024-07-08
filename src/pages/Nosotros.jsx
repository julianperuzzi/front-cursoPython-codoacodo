import React from 'react';
import { Parallax } from 'react-parallax';


// Importar las imágenes de cada persona
import imagenJulian from '../assets/julian_peruzzi.png';   
//import imagenMirta from '../assets/mirta_britez.jpg';
//import imagenNora from '../assets/nora_tresmas.jpg';

import imagenFondo from '../assets/slick-blur-violet-5k-4f.jpg';

const Nosotros = () => {
  // Datos de cada integrante
  const integrantes = [
    { 
      nombre: 'Julian Peruzzi', 
      dni: '12345678', 
      profesion: 'Desarrollador Web', 
      imagen: imagenJulian, 
      descripcion: 'Con más de 5 años de experiencia en desarrollo web, Julian se especializa en frontend y backend, creando aplicaciones web robustas y escalables.'
    },
    { 
      nombre: 'Mirta Britez', 
      dni: '87654321', 
      profesion: 'Diseñadora UX/UI', 
      imagen: imagenJulian, 
      descripcion: 'Mirta es una diseñadora apasionada por crear experiencias de usuario intuitivas y atractivas. Ha trabajado en múltiples proyectos de diseño de interfaces.'
    },
    { 
      nombre: 'Nora Tresmas', 
      dni: '56789123', 
      profesion: 'Ingeniera de Software', 
      imagen: imagenJulian, 
      descripcion: 'Nora tiene una vasta experiencia en ingeniería de software y ha liderado equipos de desarrollo en grandes proyectos de tecnología.'
    }
  ];

  return (
    <div className="px-4">
      <Parallax bgImage={imagenFondo} bgImageAlt="fondo" strength={700}>
    <div className="container md:w-8/12 mx-auto my-16 text-white">
      
      <h2 className="text-4xl font-bold text-center mb-8">Nosotros</h2>
      <p className="text-lg text-center mb-8">Somos Argentina Hardware y ofrecemos soluciones tecnológicas innovadoras para satisfacer las necesidades de nuestros clientes.</p>


      
      {integrantes.map((persona, index) => (
        <div key={index} className={`bg-white shadow-lg overflow-hidden flex md:flex-row flex-col-reverse hover:scale-105 transition duration-500 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mt-8`}>
          {/* Imagen de la persona */}
          <img src={persona.imagen} alt={persona.nombre} className="w-full h-72 object-cover md:w-1/3" />

          {/* Información de la persona */}
          <div className="px-8 content-center  text-gray-700">
            <h3 className="text-xl font-bold mb-2">{persona.nombre}</h3>
            <p><strong>DNI:</strong> {persona.dni}</p>
            <p><strong>Profesión:</strong> {persona.profesion}</p>
            <p>{persona.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
    </Parallax>
    </div>
  );
};

export default Nosotros;
