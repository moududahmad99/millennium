import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import bannerImg from '../assets/images/Millennium_banner.jpg';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center bg-[#030d12]">
      {/* Cinematic Background Imagery - Custom Platform Visual */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[15000ms] scale-110"
        style={{
          backgroundImage: `url(${bannerImg})`,
          filter: 'grayscale(0.3) brightness(0.5)'
        }}
      />

      {/* Deep Shadow Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061E29] via-[#061E29]/90 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061E29] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(95,149,152,0.1),transparent_50%)]" />

      {/* Hero Content - pt-24 ensures it starts well below the Navbar logo */}
      <div className="relative z-10 container mx-auto px-8 lg:px-20 pt-24">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-center gap-6 mb-8"
          >
            <div className="flex items-center gap-6">
              <div className="h-[2px] w-16 bg-brand-teal" />
              <span className="text-brand-teal font-black uppercase tracking-[0.5em] text-xs md:text-sm whitespace-nowrap">
                BRONX LEGACY | EST. 2024
              </span>
            </div>

            <div className="flex items-center gap-2 text-white/40">
              <MapPin size={14} className="text-brand-teal" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">3448 E Tremont Ave, Bronx</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Background Text Stroke */}
            <h2 className="absolute -top-10 -left-4 text-8xl md:text-[10rem] font-display font-black text-white/[0.03] leading-none whitespace-nowrap pointer-events-none uppercase italic">
              UNLEASH
            </h2>

            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black text-white leading-[0.85] mb-8 flex flex-col items-start italic">
              <span className="relative z-10">MIND OVER</span>
              <span className="text-gradient drop-shadow-[0_10px_30px_rgba(95,149,152,0.3)]">MATTER</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/40 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed border-l-2 border-brand-teal/20 pl-8"
          >
            We don't build athletes. <span className="text-white font-medium italic">We forge archetypes.</span> Join the elite collective at the Bronx's most uncompromising combat training sanctuary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link to="/memberships" className="group relative px-10 py-5 overflow-hidden bg-brand-teal transition-all duration-500 hover:shadow-[0_0_50px_rgba(95,149,152,0.4)]">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10 text-brand-deep font-black uppercase tracking-[0.4em] text-xs">
                ENTER THE RING
              </span>
            </Link>
            <Link to="/portfolio" className="px-10 py-5 border border-white/10 text-white font-black uppercase tracking-[0.4em] text-xs hover:bg-white hover:text-brand-deep transition-all duration-500">
              EXPLORE ARCHIVE
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Statistics for Credibility */}
      <div className="absolute bottom-16 right-16 hidden xl:flex flex-col items-end space-y-6">
        <StatBox label="PRO ATHLETES" value="24" />
        <StatBox label="CHAMPIONSHIPS" value="08" />
        <StatBox label="SQ FT FACILITY" value="12K" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#061E29] to-transparent" />
    </section>
  );
};

const StatBox = ({ label, value }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 1 }}
    className="flex flex-col items-end"
  >
    <span className="text-3xl font-display font-black text-white italic">{value}</span>
    <div className="h-[1px] w-10 bg-brand-teal my-1" />
    <span className="text-[9px] font-bold text-brand-teal tracking-[0.3em] uppercase">{label}</span>
  </motion.div>
);

export default Hero;
