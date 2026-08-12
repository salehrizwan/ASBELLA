import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Placeholder from './pages/Placeholder';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-gray-200 flex flex-col">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/shop" element={<Placeholder title="Shop" />} />
            <Route path="/collections" element={<Placeholder title="Collections" />} />
            <Route path="/about" element={<Placeholder title="About Us" />} />
            <Route path="/contact" element={<Placeholder title="Contact" />} />
            <Route path="/search" element={<Placeholder title="Search" />} />
            <Route path="/wishlist" element={<Placeholder title="Wishlist" />} />
            <Route path="/cart" element={<Placeholder title="Shopping Cart" />} />
          </Routes>
        </div>
        
        <footer className="py-12 border-t border-gray-100 flex flex-col items-center justify-center gap-2 mt-auto">
          <p className="text-center text-xs text-gray-400 tracking-widest uppercase">&copy; {new Date().getFullYear()} Asbella — By Asma Javed. All Rights Reserved.</p>
          <p className="text-center text-[10px] text-gray-400 tracking-widest uppercase">Developed by Saleh Rizwan</p>
        </footer>
      </div>
    </Router>
  );
}
