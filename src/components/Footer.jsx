import React from 'react';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#030d12] pt-40 pb-16 transition-all duration-700 relative overflow-hidden">
      {/* Decorative Branding */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[30rem] font-display font-black text-white/[0.02] uppercase italic select-none pointer-events-none">
        LEGACY
      </h2>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-4xl font-display font-black text-white italic tracking-tighter mb-8">
              MILL<span className="text-brand-teal">ENNIUM</span>
            </h3>
            <p className="text-white/30 text-xs leading-relaxed mb-12 font-medium max-w-xs uppercase tracking-[0.2em]">
              Forging elite archetypes in the heart of the Bronx since 2024. The science of impact meets the art of discipline.
            </p>
            <div className="flex space-x-6">
              <SocialIcon icon={<Instagram size={18} />} href="#" />
              <SocialIcon icon={<Facebook size={18} />} href="#" />
              <SocialIcon icon={<Twitter size={18} />} href="#" />
            </div>
          </div>

          <div>
            <h4 className="text-brand-teal font-black uppercase tracking-[0.5em] text-[10px] mb-12">The Map</h4>
            <ul className="space-y-6">
              <li><FooterLink to="/" label="HOME" /></li>
              <li><FooterLink to="/about" label="ABOUT" /></li>
              <li><FooterLink to="/portfolio" label="GALLERY" /></li>
              <li><FooterLink to="/memberships" label="MEMBERSHIP" /></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-teal font-black uppercase tracking-[0.5em] text-[10px] mb-12">Concierge</h4>
            <ul className="space-y-6">
              <li><FooterLink to="#" label="SUPPORT HUB" /></li>
              <li><FooterLink to="#" label="PRIVACY PROTOCOL" /></li>
              <li><FooterLink to="#" label="TERMS OF ENGAGEMENT" /></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-brand-teal font-black uppercase tracking-[0.5em] text-[10px] mb-12">Intel Stream</h4>
            <p className="text-white/30 text-xs mb-8 font-medium uppercase tracking-[0.2em]">Acquire tactical alerts.</p>
            <div className="flex">
              <input type="email" placeholder="DIGITAL ADDRESS" className="bg-transparent border-b border-white/10 py-4 px-1 text-white text-[10px] outline-none focus:border-brand-teal transition-all w-full font-black uppercase tracking-[0.2em]" />
              <button className="text-brand-teal hover:text-white transition-colors px-4 pb-1 font-black text-[10px] tracking-widest">
                ACQUIRE
              </button>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/10 text-[9px] font-black uppercase tracking-[0.5em]">
          <p>© 2024 Millennium Boxing Syndicate. Tactical Supremacy Guaranteed.</p>
          <div className="flex space-x-12 mt-8 md:mt-0 items-center">
            <span className="hover:text-brand-teal transition-colors cursor-default">SANCTIFIED BY ANTIGRAVITY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }) => (
  <a href={href} className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-teal hover:border-brand-teal transition-all duration-700 hover:scale-110">
    {icon}
  </a>
);

const FooterLink = ({ to, label }) => (
  <Link to={to} className="text-white/40 hover:text-brand-teal transition-all duration-500 text-[10px] font-black tracking-[0.3em] group flex items-center">
    <span className="w-0 group-hover:w-6 h-px bg-brand-teal mr-0 group-hover:mr-4 transition-all duration-700" />
    {label}
  </Link>
);

export default Footer;
