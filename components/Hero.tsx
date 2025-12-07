import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-[#002845] scroll-mt-24">
      {/* Deep Blue Gradient Background */}
      <div className="absolute inset-0 z-0">
        {/* Background Image with Blur */}
        <img
          src="/assets/resim12.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover blur-md"
        />
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#075985]/20 via-[#002845]/25 to-[#021d30]/30"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-brand-600/10 rounded-full blur-[128px]"></div>
      </div>

      {/* Decorative Border Frame Container */}
      <div className="absolute inset-x-4 sm:inset-x-12 top-24 bottom-12 border border-brand-300/20 rounded-xl z-10 pointer-events-none hidden md:block"></div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-900/50 border border-brand-400/30 backdrop-blur-md mb-8 shadow-lg">
          <CheckCircle2 size={16} className="text-brand-400" />
          <span className="text-sm font-medium text-brand-100 tracking-wide">Profesyonel Mutfak Çözümleri</span>
        </div>
        
        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tight mb-8 leading-[1.1]">
          SYS <span className="text-brand-400">Endüstriyel</span> <br/>
          Mutfak Sistemleri
        </h1>
        
        {/* Description */}
        <p className="mt-2 text-xl md:text-2xl text-brand-100/90 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
          Kafe, restoran, otel ve catering işletmeleri için yüksek performanslı, 
          paslanmaz çelik mutfak ekipmanları. Projelendirme, üretim ve kurulumda 
          uzman çözüm ortağınız.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <a
            href="#products"
            onClick={(e) => scrollToSection(e, '#products')}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-900 text-lg font-bold rounded-lg hover:bg-brand-50 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl min-w-[200px]"
          >
            Ürün Kataloğu
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-brand-400/30 text-white text-lg font-bold rounded-lg hover:bg-brand-400/10 hover:border-brand-400/50 transition-all backdrop-blur-sm min-w-[240px] group"
          >
            Bizimle İletişime Geçin
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </a>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
    </section>
  );
};

export default Hero;