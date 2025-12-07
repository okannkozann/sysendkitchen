
import React, { useState } from 'react';
import { DEALERSHIPS } from '../constants';
import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const ITEMS_PER_PAGE = 4;

const Dealerships: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(DEALERSHIPS.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const currentDealers = DEALERSHIPS.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section id="dealerships" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-sys-accent"></div>
                <span className="text-xs font-bold text-sys-accent uppercase tracking-widest">Global Ağ</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-sys-navy tracking-tight mb-4">Çözüm Ortakları</h3>
            <p className="text-base text-sys-steel leading-relaxed">
                Türkiye genelindeki yetkili satıcı ve servis ağımızla, projelerinizin her aşamasında yanınızdayız.
            </p>
        </div>

        {/* Interactive List */}
        <div className="flex flex-col border-t border-sys-silver min-h-[400px]">
          {currentDealers.map((dealer) => (
            <a 
              href={dealer.website} 
              target="_blank" 
              rel="noopener noreferrer"
              key={dealer.id} 
              className="group relative border-b border-sys-silver py-6 md:py-6 flex flex-col md:flex-row items-center gap-6 md:gap-8 transition-all hover:bg-slate-50/80 px-4 -mx-4 md:px-6 md:-mx-6 rounded-2xl"
            >
              {/* Logo */}
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-white border border-sys-silver rounded-xl p-2 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <img 
                  src={dealer.logo} 
                  alt={`${dealer.name} logo`} 
                  className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Main Info */}
              <div className="flex-1 relative z-10 w-full md:w-auto text-center md:text-left">
                <h4 className="text-lg md:text-xl font-bold text-sys-navy group-hover:text-sys-accent transition-colors duration-300 mb-1">
                    {dealer.name}
                </h4>
                <div className="flex items-center justify-center md:justify-start gap-2 text-sys-steel font-medium text-xs uppercase tracking-wider group-hover:text-sys-navy transition-colors">
                    <MapPin size={14} className="text-sys-accent" />
                    {dealer.location}
                </div>
              </div>

              {/* Description */}
              <div className="md:w-1/3 relative z-10 text-center md:text-left">
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                  {dealer.description}
                </p>
              </div>

              {/* Action Icon */}
              <div className="relative z-10 ml-auto mt-4 md:mt-0 hidden md:block">
                <div className="w-10 h-10 rounded-full bg-white border border-sys-silver text-sys-navy flex items-center justify-center group-hover:bg-sys-accent group-hover:border-sys-accent group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-sm group-hover:shadow-md group-hover:rotate-[-45deg]">
                    <ArrowRight size={18} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-8 flex justify-between items-center border-t border-sys-silver pt-6">
            <span className="text-sm text-sys-steel font-medium">
                Sayfa {currentPage} / {totalPages}
            </span>
            <div className="flex gap-2">
                <button 
                    onClick={handlePrev} 
                    disabled={currentPage === 1}
                    className="p-3 rounded-full border border-sys-silver text-sys-navy hover:bg-sys-light hover:border-sys-navy transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <ChevronLeft size={20} />
                </button>
                <button 
                    onClick={handleNext} 
                    disabled={currentPage === totalPages}
                    className="p-3 rounded-full border border-sys-silver text-sys-navy hover:bg-sys-light hover:border-sys-navy transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Dealerships;
