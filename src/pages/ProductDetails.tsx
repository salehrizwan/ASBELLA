import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { ChevronLeft, Instagram } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
        <Link to="/" className="mt-4 text-sm text-gray-500 hover:text-gray-800">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-12 py-12">
      <Link to="/" className="inline-flex items-center text-xs font-bold tracking-widest text-gray-500 hover:text-gray-900 uppercase mb-8 transition-colors">
        <ChevronLeft size={16} className="mr-1" /> Back to Catalog
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Product Images */}
        <div className="flex flex-col gap-6">
          {product.images?.map((img, idx) => (
            <div key={idx} className="aspect-[3/4] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <img 
                src={img} 
                alt={`${product.name} view ${idx + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <span className="text-[10px] tracking-[0.2em] text-gray-500 font-bold uppercase mb-2">
            {product.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-wide mb-4">
            {product.name}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-800 mb-8">
            {product.price}
          </p>

          <div className="w-12 h-[1px] bg-gray-300 mb-8"></div>

          <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
            {product.description}
          </p>

          {(product as any).features && (
            <ul className="list-disc list-inside text-gray-600 mb-8 text-sm md:text-base space-y-2">
              {(product as any).features.map((feature: string, idx: number) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          )}

          {(product as any).tags && (
            <div className="flex flex-wrap gap-2 mb-8">
              {(product as any).tags.map((tag: string, idx: number) => (
                <span key={idx} className="bg-gray-100 text-gray-500 px-3 py-1.5 text-[9px] uppercase tracking-widest rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {(product as any).legal && (
            <p className="text-[10px] text-gray-400 italic mb-10 leading-relaxed border-l-2 border-gray-200 pl-3">
              *{(product as any).legal}
            </p>
          )}

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-widest uppercase text-gray-800">How to Order</h3>
            <p className="text-sm text-gray-600">
              Orders are currently processed via Instagram DM. Please take a screenshot or note the product name.
            </p>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-800 px-8 py-4 rounded-full text-xs font-bold tracking-wider hover:bg-gray-50 hover:border-gray-400 transition-all w-full sm:w-auto shadow-sm">
              <Instagram size={18} />
              ORDER VIA DM
            </a>
          </div>
          
          <p className="mt-8 text-center md:text-left text-[10px] text-gray-400 tracking-widest uppercase">
            Developed by Saleh Rizwan
          </p>
        </div>
      </div>
    </div>
  );
}
