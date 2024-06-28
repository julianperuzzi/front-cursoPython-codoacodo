import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-4 bg-gradient-to-r from-violet-50 to-fuchsia-800 w-full sticky top-0 z-30">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between">
        <Link to="/" className="text-gray-800 px-3 text-2xl font-bold hover:text-purple-800">
        Argentina Hardware
            </Link>
          <div>
            <Link to="/" className="text-gray-200  hover:text-white hover:font-semibold px-3">
              Inicio
            </Link>
            <Link to="/products" className="text-gray-200 hover:text-white hover:font-semibold px-3">
              Productos
            </Link>
            <Link to="/products/new" className="text-gray-200 hover:font-semibold hover:text-white px-3">
              Añadir Producto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
