import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-navy/90 backdrop-blur shadow-md' : 'py-5 bg-transparent'}`}>
      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-teal font-mono text-xl font-bold">SG</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ol className="flex space-x-8">
            {navLinks.map((link, i) => (
              <li key={i} className="text-sm">
                <a href={link.href} className="nav-link">
                  <span className="text-teal font-mono mr-1">0{i+1}.</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ol>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn"
          >
            Resume
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-teal focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-navy-light/90 backdrop-blur z-50 transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <button 
            onClick={toggleMenu} 
            className="text-teal focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-[80%]">
          <ol className="flex flex-col items-center space-y-8">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a 
                  href={link.href} 
                  className="text-slate-light text-lg font-mono hover:text-teal transition-colors"
                  onClick={toggleMenu}
                >
                  <span className="text-teal">0{i+1}.</span> {link.name}
                </a>
              </li>
            ))}
          </ol>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn mt-12"
            onClick={toggleMenu}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
