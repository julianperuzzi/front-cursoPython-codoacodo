import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sección Nosotros */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Nosotros</h3>
            <p className="text-sm text-gray-300 mb-2">
              Somos Argentina Hardware, una tienda online especializada en productos de hardware y tecnología. Nuestro objetivo es proporcionar productos de alta calidad y brindar la mejor experiencia de compra a nuestros clientes.
            </p>
            <p className="text-sm text-gray-300">
              Con más de 10 años en el mercado, nos esforzamos por innovar y mejorar constantemente nuestros servicios para satisfacer tus necesidades tecnológicas.
            </p>
          </div>

          {/* Información Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Información Legal</h3>
            <ul className="text-sm text-gray-300">
              <li className="mb-2"><a href="/" className="hover:text-blue-500">Política de Privacidad</a></li>
              <li className="mb-2"><a href="/" className="hover:text-blue-500">Términos y Condiciones</a></li>
              <li className="mb-2"><a href="/" className="hover:text-blue-500">Aviso Legal</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-sm text-gray-300 mb-2">Correo electrónico: info@argentinahardware.com</p>
            <p className="text-sm text-gray-300">Teléfono: +54 9 1234 5678</p>
          </div>
        </div>

        {/* Derechos de Autor */}
        <div className="border-t border-gray-600 mt-6 pt-4 text-sm text-gray-400">
          <p>&copy; 2024 Argentina Hardware. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
