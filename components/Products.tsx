import React from 'react';
import { PRODUCTS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-sys-dark scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold text-sys-accent uppercase tracking-widest mb-2">Ürünlerimiz</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-sys-navy">Yüksek Standartlı<br />Ekipmanlar</h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sys-navy hover:text-sys-accent transition-colors group font-medium">
            Tüm Ürün Kataloğu 
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative overflow-hidden rounded-xl bg-white shadow-md border border-sys-metallic hover:shadow-xl hover:border-sys-accent/30 transition-all duration-300">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sys-navy/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6">
                <span className="text-xs text-sys-accent font-bold uppercase tracking-wider mb-1 block bg-white/90 backdrop-blur-sm inline-block px-2 py-1 rounded-sm">{product.category}</span>
                <h4 className="text-xl font-bold text-white mb-2 drop-shadow-md">{product.title}</h4>
                <div className="h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
            <button className="inline-flex items-center gap-2 text-sys-navy border-b border-sys-accent pb-1">
                Tüm Ürün Kataloğu 
                <ArrowRight size={16} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Products;