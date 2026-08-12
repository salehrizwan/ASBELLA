import { Search, Heart, ShoppingBag, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      {/* TOP BANNER */}
      <div className="bg-gray-100 text-gray-700 text-[10px] md:text-xs font-medium tracking-[0.2em] text-center py-2 uppercase border-b border-gray-200">
        Pakistan | Orders Via DM
      </div>
      
      {/* HEADER */}
      <header className="flex h-20 border-b border-gray-200 w-full bg-white z-40 sticky top-0">
        <div className="flex-1 flex items-center px-4 md:px-8">
          <button className="lg:hidden mr-4 text-gray-500 hover:text-black transition-colors">
            <Menu size={24} />
          </button>
          <Link to="/" className="font-black text-xl md:text-2xl tracking-[0.2em] uppercase text-gray-800">Asbella</Link>
        </div>
        
        <nav className="hidden lg:flex h-full border-l border-gray-200">
          {[
            { name: 'SHOP', path: '/shop' },
            { name: 'COLLECTIONS', path: '/collections' },
            { name: 'ABOUT', path: '/about' },
            { name: 'CONTACT', path: '/contact' }
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="flex items-center px-8 border-r border-gray-200 text-[10px] font-bold tracking-widest text-gray-500 hover:text-black hover:bg-gray-50 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex h-full">
          <Link to="/search" className="hidden md:flex items-center px-6 border-l border-r border-gray-200 text-[11px] font-bold tracking-wider text-gray-400 hover:bg-gray-50 gap-2 transition-colors">
            <Search size={16} />
            Search
          </Link>
          <Link to="/wishlist" className="hidden md:flex items-center px-6 border-r border-gray-200 hover:bg-gray-50 transition-colors">
            <Heart size={20} className="text-gray-400 hover:text-black transition-colors" />
          </Link>
          <Link to="/cart" className="flex items-center px-6 md:px-8 bg-white text-gray-600 hover:bg-gray-50 transition-colors border-l border-gray-200 lg:border-none">
            <ShoppingBag size={20} />
          </Link>
        </div>
      </header>
    </>
  );
}
