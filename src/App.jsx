import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import { useLenis } from './hooks/useLenis';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import ScrollToTopBtn from './components/ScrollToTop.jsx';

// Pages
import Home from './pages/Home/index.jsx';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Memberships from './components/Memberships';
import Contact from './components/Contact';

const ScrollToPageTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const GritLayer = () => (
  <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.02] mix-blend-overlay" style={{
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")'
  }} />
);

function App() {
  useLenis();

  return (
    <BookingProvider>
      <Router>
        <ScrollToPageTop />
        <GritLayer />
        <div className="flex flex-col min-h-screen bg-brand-deep text-brand-light font-sans antialiased overflow-x-hidden selection:bg-brand-teal selection:text-brand-deep">
          <Navbar />
          <main className="flex-grow min-h-screen relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/memberships" element={<Memberships />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <CheckoutModal />
          {/* Tactical Scroll to Top Button */}
          <ScrollToTopBtn />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;
