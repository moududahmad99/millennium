import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail, MapPin, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/portfolio' },
    { name: 'Membership', path: '/memberships' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? 'py-4 bg-brand-deep/95 backdrop-blur-2xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="group flex items-center gap-3 relative z-[110]">
          <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center transform group-hover:rotate-[360deg] transition-all duration-1000">
            <span className="text-xl font-display font-black text-brand-teal">M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-black tracking-tighter text-white leading-none">MILLENNIUM</span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-teal uppercase mt-1">Boxing & Fitness</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all relative group ${location.pathname === link.path ? 'text-brand-teal' : 'text-white/50 hover:text-white'
                }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-full h-px bg-brand-teal transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100 ${location.pathname === link.path ? 'scale-x-100' : ''}`} />
            </Link>
          ))}

          <Link to="/contact">
            <button className="px-6 py-3 border border-brand-teal/50 text-brand-teal text-[10px] font-black uppercase tracking-[0.3em] hover:bg-brand-teal hover:text-brand-deep transition-all duration-500">
              Join The Elite
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center relative z-[110]">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 transition-transform active:scale-95">
            {isOpen ? <X size={32} className="text-brand-teal" /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Cinematic Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-deep/98 backdrop-blur-3xl z-[100] flex flex-col md:hidden overflow-hidden"
          >
            {/* Background Decorative Text */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.03]">
              <h2 className="text-[30vw] font-display font-black text-white italic rotate-90 whitespace-nowrap leading-none">
                SYNDICATE
              </h2>
            </div>

            {/* Content Container */}
            <div className="flex-grow flex flex-col px-10 pt-40 pb-12 relative z-10">
              {/* Menu Links */}
              <div className="space-y-8 mb-20">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-6"
                    >
                      <span className="text-brand-teal/40 font-display font-black text-xl group-hover:text-brand-teal transition-colors leading-none italic">
                        0{i + 1}
                      </span>
                      <span className={`text-5xl font-display font-black tracking-tighter transition-all group-hover:italic group-hover:translate-x-4 ${location.pathname === link.path ? 'text-brand-teal italic' : 'text-white'}`}>
                        {link.name.toUpperCase()}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Action Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-auto space-y-12"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)} className="block">
                  <button className="w-full group relative px-8 py-8 bg-brand-teal overflow-hidden flex items-center justify-between">
                    <span className="relative z-10 text-brand-deep font-display font-black text-xl uppercase italic tracking-tighter">
                      JOIN THE ELITE
                    </span>
                    <ArrowRight className="relative z-10 text-brand-deep group-hover:translate-x-2 transition-transform" />
                    <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700" />
                  </button>
                </Link>

                {/* Footer Info in Menu */}
                <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black text-brand-teal tracking-[0.3em] uppercase block">Location</span>
                    <p className="text-white/40 text-xs font-bold leading-relaxed uppercase">
                      3448 E Tremont Ave,<br />Bronx, NY
                    </p>
                  </div>
                  <div className="space-y-4">
                    <span className="text-[10px] font-black text-brand-teal tracking-[0.3em] uppercase block">Social</span>
                    <div className="flex gap-4">
                      <a href="#" className="p-3 border border-white/10 rounded-full text-white hover:bg-brand-teal hover:text-brand-deep transition-all">
                        <Instagram size={18} />
                      </a>
                      <a href="#" className="p-3 border border-white/10 rounded-full text-white hover:bg-brand-teal hover:text-brand-deep transition-all">
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
