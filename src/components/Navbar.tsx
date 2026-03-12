import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'pt-6'} px-4 md:px-8 bg-transparent`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        
        {/* Left: Logo (Removed per request) */}
        <div className="w-32"></div>

        {/* Center: Floating Pill Nav (Desktop) */}
        <nav className={`hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${isScrolled ? 'top-1/2 -translate-y-1/2' : 'top-0'}`}>
          <ul className={`flex items-center gap-1 backdrop-blur-md border px-4 py-2 rounded-full transition-all duration-500 bg-white/10 border-white/20 shadow-lg`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all text-sm tracking-wide text-white/90 hover:text-white hover:bg-white/20`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: CTA Button (Desktop) */}
        <div className="hidden md:block z-50">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-emerald-500 text-white px-7 py-3.5 rounded-full font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:-translate-y-0.5"
          >
            Get a Free Estimate
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2.5 rounded-full border z-50 transition-all text-white bg-black/20 backdrop-blur-md border-white/20`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20 md:hidden overflow-hidden z-40"
            >
              <ul className="flex flex-col py-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="block px-6 py-4 text-lg text-stone-800 hover:bg-sage-50 hover:text-emerald-600 font-medium text-center border-b border-gray-100 last:border-0"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="p-4 bg-gray-50">
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 bg-emerald-500 text-white px-5 py-4 rounded-xl font-bold hover:bg-emerald-600 transition-colors w-full shadow-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get a Free Estimate
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
