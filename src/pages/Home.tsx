import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { products } from '../data';
import imgHero1 from '../public/1.png';
import imgCollection2 from '../public/2.jpeg';
import imgCollection3 from '../public/3.jpeg';

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative w-full h-[600px] md:h-[700px] flex overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-end pointer-events-none">
          <img 
            src={imgHero1} 
            alt="Asbella Model" 
            className="w-full h-full object-cover opacity-90 object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent lg:from-white/70"></div>
        </div>

        <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex flex-col pt-10 md:pt-20 max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col text-[40px] md:text-[60px] lg:text-[70px] font-black leading-[1.1] tracking-tighter text-gray-800"
            >
              <span>MORE THAN</span>
              <span>BEAUTIFUL</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-sm md:text-base font-medium max-w-sm leading-relaxed text-gray-700"
            >
              Contemporary fashion designed to make every woman feel confident, elegant and uniquely herself.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10"
            >
              <Link to="/shop" className="border border-gray-400 text-gray-700 px-10 py-4 rounded-full text-xs font-bold tracking-[0.2em] hover:bg-gray-50 hover:text-gray-900 hover:scale-105 transition-all shadow-sm inline-block">
                SHOP NOW
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BESTSELLERS SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-16 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-2xl md:text-[40px] font-black tracking-wider uppercase text-gray-800">
            Bestsellers
          </h2>
          <Link to="/shop" className="border border-gray-300 text-gray-600 rounded-full px-8 py-3 text-[10px] font-bold tracking-[0.2em] hover:bg-gray-50 hover:text-gray-900 transition-all inline-block text-center">
            VIEW ALL
          </Link>
        </div>

        <div className="relative group">
          {/* Grid: 2 columns mobile, 3 columns desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="group/card cursor-pointer flex flex-col">
                <div className="relative aspect-[3/4] bg-gray-50 rounded-xl overflow-hidden mb-4 border border-gray-100 shadow-sm group-hover/card:shadow-md transition-shadow duration-300">
                  {product.images && product.images[1] && (
                    <img 
                      src={product.images[1]} 
                      alt={`${product.name} alternate`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105 z-0"
                    />
                  )}
                  <img 
                    src={product.images ? product.images[0] : product.img} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover/card:scale-105 z-10 group-hover/card:opacity-0"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/card:opacity-100 transition-opacity z-20"></div>
                  <button className="absolute top-3 right-3 md:top-4 md:right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-gray-800 hover:bg-white transition-all opacity-0 group-hover/card:opacity-100 translate-y-2 group-hover/card:translate-y-0 duration-300 z-30" onClick={(e) => e.preventDefault()}>
                    <Heart size={16} className="fill-transparent" />
                  </button>
                </div>
                <div className="flex flex-col gap-1 px-1">
                  <div className="flex justify-between items-center text-xs md:text-sm font-bold tracking-wider text-gray-800">
                    <span className="truncate pr-2">{product.name}</span>
                    <span className="text-gray-900 shrink-0">{product.price}</span>
                  </div>
                  <span className="text-[9px] md:text-[10px] text-gray-500 tracking-widest uppercase">{product.category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEPARATED TWO IMAGES COLLECTION */}
      <section className="py-16 md:py-24 px-4 md:px-12 max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="w-full relative group rounded-2xl overflow-hidden aspect-[4/5] shadow-sm">
            <img 
              src={imgCollection2} 
              alt="Collection Image 1" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="w-full relative group rounded-2xl overflow-hidden aspect-[4/5] shadow-sm">
            <img 
              src={imgCollection3} 
              alt="Collection Image 2" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
