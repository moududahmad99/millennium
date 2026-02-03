import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-[#030d12] pt-24 pb-12 transition-all duration-700 relative overflow-hidden border-t border-white/5">
      {/* Cinematic Background Text - Locked for Mobile Scaling */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[30rem] font-display font-black text-white/[0.01] uppercase italic select-none pointer-events-none">
        SYNDICATE
      </h2>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24">

          {/* Brand Identity Section */}
          <div className="flex flex-col">
            <h3 className="text-3xl md:text-4xl font-display font-black text-white italic tracking-tighter mb-6 md:mb-8 leading-none">
              MILL<span className="text-brand-teal">ENNIUM</span>
            </h3>
            <p className="text-white/30 text-[9px] md:text-[10px] leading-relaxed mb-10 font-black max-w-xs uppercase tracking-[0.3em]">
              FORGING ELITE ARCHETYPES IN THE BRONX. THE SCIENCE OF IMPACT MEETS THE ART OF DISCIPLINE.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Instagram size={16} />} href="https://www.instagram.com/millenniumboxingbronx/" />
              <SocialIcon icon={<Facebook size={16} />} href="#" />
              <SocialIcon icon={<Mail size={16} />} href="mailto:prettygoodman100@gmail.com" />
            </div>
          </div>

          {/* Tactical Navigation */}
          <div>
            <h4 className="text-brand-teal font-black uppercase tracking-[0.5em] text-[9px] md:text-[10px] mb-8 md:mb-12 border-l border-brand-teal/30 pl-4">Tactical Map</h4>
            <ul className="space-y-4">
              <li><FooterLink to="/" label="HOME" /></li>
              <li><FooterLink to="/about" label="ABOUT" /></li>
              <li><FooterLink to="/portfolio" label="GALLERY" /></li>
              <li><FooterLink to="/memberships" label="MEMBERSHIP" /></li>
            </ul>
          </div>

          {/* Location & Support */}
          <div>
            <h4 className="text-brand-teal font-black uppercase tracking-[0.5em] text-[9px] md:text-[10px] mb-8 md:mb-12 border-l border-brand-teal/30 pl-4">The Outpost</h4>
            <div className="space-y-8">
              <div className="group cursor-default">
                <span className="text-white/20 text-[8px] font-black uppercase tracking-[0.4em] mb-3 block group-hover:text-brand-teal transition-colors duration-500">Sanctuary Address</span>
                <p className="text-white/60 text-[10px] md:text-xs font-bold leading-relaxed uppercase tracking-widest flex items-start gap-3">
                  <MapPin size={14} className="text-brand-teal shrink-0 mt-0.5" />
                  3448 E Tremont Ave, <br />Bronx, NY 10465
                </p>
              </div>

              <div className="group cursor-default">
                <span className="text-white/20 text-[8px] font-black uppercase tracking-[0.4em] mb-3 block group-hover:text-brand-teal transition-colors duration-500">Direct Intelligence</span>
                <p className="text-white text-base md:text-lg font-display font-black italic tracking-tight flex items-center gap-3">
                  <Phone size={16} className="text-brand-teal" />
                  +1 347-293-7264
                </p>
              </div>
            </div>
          </div>

          {/* Intel Subscription */}
          <div className="flex flex-col">
            <h4 className="text-brand-teal font-black uppercase tracking-[0.5em] text-[9px] md:text-[10px] mb-8 md:mb-12 border-l border-brand-teal/30 pl-4">Intel Stream</h4>
            <p className="text-white/30 text-[9px] mb-6 font-black uppercase tracking-[0.3em]">Acquire tactical alerts via encrypted mail.</p>
            <div className="relative group">
              <input
                type="email"
                placeholder="DIGITAL ADDRESS"
                className="bg-transparent border-b border-white/10 py-4 px-1 text-white text-[9px] outline-none focus:border-brand-teal transition-all w-full font-black uppercase tracking-[0.3em] placeholder:text-white/10"
              />
              <button className="absolute right-0 bottom-4 text-brand-teal hover:text-white transition-all duration-500 translate-x-4 opacity-0 group-focus-within:translate-x-0 group-focus-within:opacity-100">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Global Footer Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-white/10 text-[8px] font-black uppercase tracking-[0.6em]">
              © 2024 Millennium Boxing Syndicate. Tactical Supremacy Guaranteed.
            </p>
            <p className="text-white/5 text-[7px] font-bold uppercase tracking-[0.4em]">
              Authorized Bronx Combat Facility / Division 2024
            </p>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 group">
              <div className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-pulse shadow-[0_0_10px_#5F9598]" />
              <span className="text-white/20 text-[8px] font-black uppercase tracking-[0.5em] group-hover:text-brand-teal transition-colors duration-500">
                Outpost Status: Operational
              </span>
            </div>
            <div className="h-4 w-px bg-white/5 hidden md:block" />
          </div>
        </div>
      </div>

      {/* Edge Decorative Lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-teal/10 to-transparent" />
      <div className="absolute bottom-0 left-0 h-24 w-[1px] bg-gradient-to-t from-brand-teal/10 to-transparent ml-4 hidden md:block" />
    </footer>
  );
};

const SocialIcon = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 md:w-12 md:h-12 border border-white/5 flex items-center justify-center text-white/30 hover:text-brand-teal hover:border-brand-teal hover:bg-brand-teal/5 transition-all duration-500 group relative overflow-hidden"
  >
    <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
      {icon}
    </div>
    <div className="absolute inset-0 bg-brand-teal/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
  </a>
);

const FooterLink = ({ to, label }) => (
  <Link
    to={to}
    className="text-white/30 hover:text-brand-teal transition-all duration-500 text-[9px] md:text-[10px] font-black tracking-[0.4em] group flex items-center uppercase"
  >
    <div className="w-0 group-hover:w-4 h-px bg-brand-teal mr-0 group-hover:mr-3 transition-all duration-500" />
    <span className="group-hover:translate-x-1 transition-transform duration-500">{label}</span>
  </Link>
);

export default Footer;
