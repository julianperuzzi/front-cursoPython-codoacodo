import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductForm from './components/ProductForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import AuthProvider from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { useState } from 'react';
import Nosotros from './pages/Nosotros';
import NewsPage from './pages/NewsPage';
import BlogPage from './pages/BlogPage';
import ReadOnlyProductList from './pages/ReadOnlyProductList';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <AuthProvider>
      <Router>
        <div className={`App bg-slate-100 ${darkMode ? 'dark' : ''}`}>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<Home  darkMode={darkMode} />} />
            <Route path="/login" element={<Login darkMode={darkMode} />} />
            <Route path="/clientproducts" element={<ReadOnlyProductList darkMode={darkMode}/>}  />
            <Route path="/adminproducts" element={<ProtectedRoute element={<Products darkMode={darkMode}/>} />} />
            <Route path="/adminproducts/new" element={<ProtectedRoute element={<ProductForm />} />} />
            <Route path="/adminproducts/edit/:id" element={<ProtectedRoute element={<ProductForm isEdit />} />} />
            <Route path="/nosotros" element={<Nosotros darkMode={darkMode} />} />
            <Route path="/news" element={<NewsPage darkMode={darkMode} />} />
            <Route path="/blog" element={<BlogPage/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
