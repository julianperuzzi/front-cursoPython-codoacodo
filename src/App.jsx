import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductForm from './components/ProductForm';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';

function App() {
  return (
    <Router>
     <div className="App bg-slate-100">
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/edit/:id" element={<ProductForm isEdit />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
