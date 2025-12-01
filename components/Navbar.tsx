import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Concept', href: '#philosophy' },
    { name: 'Projects', href: '#projects' },
    { name: 'Studio', href: '#contact' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-6 md:py-8 flex justify-between items-center bg-transparent`}
      >
        {/* Logo - mimicking D/SENSE style */}
        <a href="#" className="font-serif text-2xl md:text-3xl font-light tracking-widest text-rola-dark relative z-50 mix-blend-difference text-white md:text-rola-dark md:mix-blend-normal">
          <span className="italic">ROLA</span>/DSGN
        </a>

        {/* Desktop Menu - Minimalist */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-rola-dark hover:text-rola-gray transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-rola-dark text-rola-bg px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors">
            Get in touch
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-rola-dark z-50 relative p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-rola-bg flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-serif font-light italic text-rola-dark hover:opacity-70 transition-opacity"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;