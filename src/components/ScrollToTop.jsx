import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 120vh
      if (window.scrollY > window.innerHeight * 1.2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[80] group flex flex-col items-center gap-2"
          aria-label="Scroll to top"
        >
          {/* Outer Ring Animation */}
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 border border-brand-teal/20 rounded-full group-hover:border-brand-teal group-hover:scale-110 transition-all duration-500" />
            <div className="absolute inset-0 border-t-2 border-brand-teal rounded-full animate-spin [animation-duration:3s]" />

            <div className="w-12 h-12 bg-brand-deep border border-brand-teal/50 flex items-center justify-center transform group-hover:rotate-[360deg] transition-all duration-700 shadow-[0_0_30px_rgba(95,149,152,0.2)]">
              <ArrowUp className="text-brand-teal w-6 h-6" />
            </div>
          </div>

          <span className="text-[9px] font-black text-brand-teal uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
