import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail, ArrowRight, Phone, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.lenis?.stop();
    } else {
      document.body.style.overflow = 'unset';
      window.lenis?.start();
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.lenis?.start();
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/portfolio' },
    { name: 'Membership', path: '/memberships' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled || isOpen ? 'py-4 bg-brand-deep/95 backdrop-blur-2xl border-b border-white/5' : 'py-8 bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3 relative z-[1001]">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 flex items-center justify-center transform group-hover:rotate-[360deg] transition-all duration-1000">
              <span className="text-lg md:text-xl font-display font-black text-brand-teal">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-display font-black tracking-tighter text-white leading-none">MILLENNIUM</span>
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.4em] text-brand-teal uppercase mt-1">Boxing & Fitness</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative group ${location.pathname === link.path ? 'text-brand-teal' : 'text-brand-light/50 hover:text-brand-light'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-full h-px bg-brand-teal transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100 ${location.pathname === link.path ? 'scale-x-100' : ''
                  }`} />
              </Link>
            ))}
            <Link to="/contact">
              <button className="px-6 py-3 border border-brand-teal/50 text-brand-teal text-[9px] font-black uppercase tracking-[0.3em] hover:bg-brand-teal hover:text-white transition-all duration-500">
                Join The Elite
              </button>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[1001] w-10 h-10 flex items-center justify-center text-white focus:outline-none"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 top-2' : 'top-0'}`} />
              <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out top-2 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 top-2' : 'top-4'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[999] bg-brand-deep flex flex-col md:hidden"
          >
            {/* Cinematic Background Text */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.02]">
              <h2 className="text-[40vw] font-display font-black text-white italic rotate-90 scale-150 leading-none">
                SYNDICATE
              </h2>
            </div>

            {/* Menu Content */}
            <div className="relative z-10 flex-grow flex flex-col px-8 pt-32 pb-12 overflow-y-auto" data-lenis-prevent>
              <div className="space-y-6 mb-16">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                  >
                    <Link
                      to={link.path}
                      className="group flex items-center gap-5"
                    >
                      <span className="text-brand-teal/30 font-display font-black text-sm italic">
                        0{i + 1}
                      </span>
                      <span className={`text-4xl font-display font-black tracking-tighter uppercase transition-colors ${location.pathname === link.path ? 'text-brand-teal italic' : 'text-brand-light'
                        }`}>
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-auto space-y-10"
              >
                <Link to="/contact">
                  <button className="w-full group relative py-6 bg-brand-teal overflow-hidden flex items-center justify-between px-8">
                    <span className="relative z-10 text-brand-deep font-display font-black text-lg uppercase italic tracking-tighter">
                      JOIN THE ELITE
                    </span>
                    <ArrowRight className="relative z-10 text-brand-deep group-hover:translate-x-2 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700" />
                  </button>
                </Link>

                {/* Footer Meta */}
                <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
                  <div className="space-y-2">
                    <span className="text-[8px] font-black text-brand-teal tracking-[0.3em] uppercase block">Location</span>
                    <p className="text-brand-light/40 text-[10px] font-bold leading-relaxed uppercase">
                      3448 E Tremont Ave,<br />Bronx, NY 10465
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[8px] font-black text-brand-teal tracking-[0.3em] uppercase block">Connect</span>
                    <div className="flex gap-4">
                      <a href="https://www.instagram.com/millennium_boxingfitness_gym/" className="text-brand-light/40 hover:text-brand-teal transition-colors">
                        <Instagram size={18} />
                      </a>
                      <a href="mailto:prettygoodman100@gmail.com" className="text-brand-light/40 hover:text-brand-teal transition-colors">
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
    </>
  );
};

export default Navbar;
