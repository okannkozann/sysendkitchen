
import React, { useRef } from 'react';
import { REFERENCES } from '../constants';
import { Building2, ChevronLeft, ChevronRight } from 'lucide-react';

const References: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Her tıklamada yaklaşık bir kart genişliği + gap kadar kaydır
      const scrollAmount = 380; 
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="references" className="py-24 bg-sys-light relative overflow-hidden scroll-mt-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-sys-silver rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 ">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-6 md:mb-0">
                <h2 className="text-sm font-bold text-sys-accent uppercase tracking-widest mb-2">Başarılarımız</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-sys-navy">Referanslarımız</h3>
                <p className="text-sys-steel max-w-xl mt-4">
                    Sektörün öncü firmalarıyla yaptığımız iş birlikleri, kalitemizin en büyük kanıtıdır.
                </p>
            </div>
            
             {/* Mobile Controls (visible only on mobile) */}
             <div className="flex md:hidden gap-2">
                <button onClick={() => scroll('left')} className="p-2 rounded-full border border-sys-silver text-sys-navy"><ChevronLeft size={20} /></button>
                <button onClick={() => scroll('right')} className="p-2 rounded-full border border-sys-silver text-sys-navy"><ChevronRight size={20} /></button>
            </div>
        </div>

        <div className="relative group px-4 md:px-0">
            {/* Desktop Left Arrow - Fixed at Start */}
            <button 
                onClick={() => scroll('left')}
                className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-sys-silver rounded-full items-center justify-center text-sys-navy shadow-lg hover:bg-sys-accent hover:text-white hover:border-sys-accent transition-all duration-300"
                aria-label="Önceki"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Scrollable Container */}
            <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-12 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory no-scrollbar scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
            {REFERENCES.map((ref) => (
                <div 
                key={ref.id} 
                className="min-w-[300px] md:min-w-[350px] flex-shrink-0 snap-center group/card bg-white border border-sys-metallic p-8 rounded-2xl hover:border-sys-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between h-full"
                >
                <div>
                    <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-sys-light rounded-xl text-sys-accent group-hover/card:bg-sys-accent group-hover/card:text-white transition-colors duration-300">
                        <Building2 size={28} />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-sys-navy leading-tight">{ref.name}</h4>
                        <span className="text-xs text-sys-steel uppercase tracking-wide">{ref.category}</span>
                    </div>
                    </div>
                    
                    <p className="text-slate-600 text-sm leading-relaxed">
                    {ref.description}
                    </p>
                </div>
                </div>
            ))}
            </div>

             {/* Desktop Right Arrow - Fixed at End */}
             <button 
                onClick={() => scroll('right')}
                className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-sys-silver rounded-full items-center justify-center text-sys-navy shadow-lg hover:bg-sys-accent hover:text-white hover:border-sys-accent transition-all duration-300"
                aria-label="Sonraki"
            >
                <ChevronRight size={24} />
            </button>
            
        </div>
      </div>
    </section>
  );
};

export default References;
