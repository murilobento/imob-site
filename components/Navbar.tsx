import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';
  
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (!isHome) {
      navigate('/');
      // In a real app we might use a context or query param to scroll after navigation
      // keeping it simple for now
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Logic to determine navbar style:
  // On home: Transparent at top, white when scrolled.
  // On other pages: Always white/sticky.
  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
    !isHome || isScrolled 
      ? 'bg-white/95 backdrop-blur-md border-gray-100 shadow-sm' 
      : 'bg-white/90 backdrop-blur-sm border-transparent'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
              <span className="material-symbols-outlined text-2xl">apartment</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-primary font-display leading-none">JR Imóveis</span>
              <span className="text-[10px] tracking-widest uppercase text-text-muted font-medium mt-0.5">Premium Real Estate</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-text-main hover:text-primary transition-colors">Início</Link>
            <Link to="/search" className="text-sm font-medium text-text-main hover:text-primary transition-colors">Imóveis</Link>
            <button onClick={() => scrollToSection('sobre')} className="text-sm font-medium text-text-muted hover:text-primary transition-colors">Sobre Nós</button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-sm font-medium text-text-muted hover:text-primary transition-colors">Depoimentos</button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <button className="group flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 active:scale-95">
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Fale no WhatsApp</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-white text-text-main hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="flex flex-col p-6 space-y-4">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-text-main">Início</Link>
            <Link to="/search" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-text-main">Imóveis</Link>
            <button onClick={() => scrollToSection('sobre')} className="text-base font-medium text-text-muted text-left">Sobre Nós</button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-base font-medium text-text-muted text-left">Depoimentos</button>
            <hr className="border-gray-100" />
            <button className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white w-full">
              <span className="material-symbols-outlined">chat</span>
              <span>Fale no WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;