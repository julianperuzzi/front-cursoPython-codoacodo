import React from 'react';
import { Parallax } from 'react-parallax';


// Importar las imágenes de cada persona
import imagenJulian from '../assets/julian_peruzzi.png';   
import imagenMirta from '../assets/mirta_mamani.jpeg';
import imagenNora from '../assets/FotoNora.png';

import imagenFondo from '../assets/imagenFondo.jpg';

const Nosotros = () => {
  // Datos de cada integrante
  const integrantes = [
    { 
      nombre: 'Julian Peruzzi', 
      dni: '39955389', 
      profesion: 'Desarrollador Web', 
      imagen: imagenJulian, 
      descripcion: 'Con más de 5 años de experiencia en desarrollo web, Julian se especializa en frontend y backend, creando aplicaciones web robustas y escalables.'
    },
    { 
      nombre: 'Mirta Graciela Mamaní', 
      dni: '24483612', 
      profesion: 'Diseñadora UX/UI', 
      imagen: imagenMirta, 
      descripcion: 'Mirta es una diseñadora apasionada por crear experiencias de usuario intuitivas y atractivas. Ha trabajado en múltiples proyectos de diseño de interfaces.'
    },
    { 
      nombre: 'Nora Alejandra Rivero', 
      dni: '32802839', 
      profesion: 'Ingeniera de Software', 
      imagen: imagenNora, 
      descripcion: 'Nora tiene una vasta experiencia en ingeniería de software y ha liderado equipos de desarrollo en grandes proyectos de tecnología.'
    }
  ];

  return (
    <div className="">
      <Parallax bgImage={imagenFondo}  bgImageAlt="fondo" strength={700}>
    <div className="container md:w-8/12 mx-auto my-16 text-white px-4 ">
    <h2 className={`lg:text-7xl text-6xl font-bold p-6 bg-clip-text text-transparent text-center bg-gradient-to-r from-purple-400 to-pink-500 hover:scale-105 transition duration-700`}>
          Argentina Hardware
        </h2>
      <h2 className="text-4xl font-bold text-center mb-8">Nosotros</h2>
      <p className="text-lg text-center mb-8">Somos Argentina Hardware y ofrecemos soluciones tecnológicas innovadoras para satisfacer las necesidades de nuestros clientes.</p>


      
      {integrantes.map((persona, index) => (
        <div key={index} className={`bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg overflow-hidden flex md:flex-row flex-col-reverse hover:scale-105 transition duration-500 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mt-8`}>
          {/* Imagen de la persona */}
          <img src={persona.imagen} alt={persona.nombre} className="w-full h-72 object-cover md:w-1/3" />

          {/* Información de la persona */}
          <div className="p-8 content-center  text-gray-200">
            <h3 className="text-xl font-bold mb-2">{persona.nombre}</h3>
            <p><strong>DNI:</strong> {persona.dni}</p>
            <p><strong>Profesión:</strong> {persona.profesion}</p>
            <p>{persona.descripcion}</p>
          </div>
        </div>
      ))}
      <h2 className="text-4xl font-bold text-center my-8">¿Cómo se desarrolló esta pagina?</h2>
      <p className="text-lg text-center mb-8">Para el desarrollo de esta web se usaron las siguientes herramientas:
En la parte del front se trabajó con React y Vite, este último es un paquete JS que toma el código React JSX y lo transforma en archivos HTML, CSS y JS sin formato que pueden ejecutar la mayoría de los navegadores.
Los Frameworks de diseño fueron:
-Tailwind CSS que es un framework de CSS de código abierto​ para el diseño de páginas web. Se diferencia de otras bibliotecas, como Bootstrap por ejemplo, en que no genera una serie de clases predefinidas para elementos como botones o tablas.
-React route: este nos permitió agregar dinamismo para lograr una SPA que permite que el contenido se muestre más rápido sin que la página sea actualizada.
-Parallax que provoca la sensación de que las imágenes lejanas se mueven más lentamente que los objetos cercanos.
-AOS (Animate On Scroll) que es una librería que proporciona una serie de animaciones a los bloques de nuestro html cuando nos situamos en la posición del elemento haciendo scroll.
En el desarrollo del Backend y de la base de datos se utilizaron el lenguaje de Python y MySQL, respectivamente.</p>
    </div>
      
    </Parallax>
    </div>
  );
};

export default Nosotros;
