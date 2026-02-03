import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero';
import Portfolio from '../../components/Portfolio';
import Memberships from '../../components/Memberships';
import Reviews from '../../components/Reviews';
import Owner from '../../components/Owner';

const Home = () => {
  return (
    <div className="reveal-animation bg-[#061E29]">
      <Hero />

      {/* Visual Transition */}
      <div className="py-20 flex flex-col items-center relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-10 w-20 h-20 bg-brand-deep border border-brand-teal/20 rotate-45 flex items-center justify-center p-4 shadow-[0_0_50px_rgba(95,149,152,0.1)]"
        >
          <div className="w-full h-full border border-brand-teal/40 flex items-center justify-center">
            <div className="w-2 h-2 bg-brand-teal animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* Founder Section */}
      <Owner />

      <div className="py-20 flex flex-col items-center relative overflow-hidden opacity-50">
        <div className="h-40 w-[1px] bg-gradient-to-b from-brand-teal/50 to-transparent" />
      </div>

      <Portfolio previewOnly={true} />

      <div className="h-40 bg-gradient-to-b from-transparent to-brand-deep/50" />

      <Memberships />

      {/* Member Testimonials */}
      <Reviews />
    </div>
  );
};

export default Home;
