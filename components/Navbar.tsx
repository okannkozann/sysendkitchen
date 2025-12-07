import React, { useState, useEffect } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Sticky header height
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      const finalPosition = targetId === 'hero' ? 0 : offsetPosition;

      window.scrollTo({
        top: finalPosition,
        behavior: 'smooth'
      });
    }
  };

  // Dynamic Styles
  const navBackground = isScrolled 
    ? 'bg-blue/90 backdrop-blur-md shadow-sm border-b border-sys-metallic py-4' 
    : 'bg-transparent py-6';
    
  const textColor = isScrolled ? 'text-sys-navy' : 'text-white';
  const logoBg = isScrolled ? 'bg-sys-metallic text-sys-navy' : 'bg-white/20 text-white';
  const buttonStyle = isScrolled 
    ? 'bg-sys-navy text-white hover:bg-sys-accent' 
    : 'bg-white text-sys-navy hover:bg-sys-silver';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group"
        >
          <div className={`p-2 rounded-lg border border-transparent transition-colors ${logoBg}`}>
             <ChefHat className="w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-bold tracking-tight leading-none transition-colors ${textColor}`}>SYS</span>
            <span className={`text-[10px] tracking-widest uppercase transition-colors ${isScrolled ? 'text-sys-steel' : 'text-sys-silver'}`}>Mutfak Sistemleri</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-medium transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-sys-accent after:transition-all hover:after:w-full ${textColor} hover:text-sys-accent`}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`px-6 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg ${buttonStyle}`}
          >
            Teklif Al
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-sys-metallic p-6 shadow-2xl h-screen">
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-sys-navy hover:text-sys-accent"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full bg-sys-accent text-white py-3 rounded-lg font-bold shadow-lg"
            >
              Teklif Al
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;