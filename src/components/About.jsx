import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Users } from 'lucide-react';
import aboutImg from '../assets/images/Millennium .jpg';

const About = () => {
  return (
    <div className="bg-[#061E29] pt-32 pb-20 overflow-hidden">
      {/* Hero Section of About */}
      <section className="relative py-24 px-8 border-b border-white/5">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-[1px] w-12 bg-brand-teal" />
                <span className="text-brand-teal font-black uppercase tracking-[0.5em] text-[10px]">THE LEGACY</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-display font-black text-white italic tracking-tighter leading-none mb-12 uppercase"
              >
                FORGED IN <br /> <span className="text-stroke">THE BRONX</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-white/40 text-xl font-light leading-relaxed mb-10 max-w-xl"
              >
                Millennium Boxing & Fitness isn't just a gymnasium. It's a sanctuary for those who refuse to be average. Since 2024, we've been distilling boxing heritage into a high-performance science.
              </motion.p>
            </div>

            <div className="md:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative z-10 border border-brand-teal/20 p-4 bg-brand-deep shadow-[0_0_100px_rgba(95,149,152,0.1)]"
              >
                <img
                  src={aboutImg}
                  className="grayscale filter brightness-50 contrast-125 w-full h-auto block"
                  alt="Elite Boxing Facility"
                />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-teal flex items-center justify-center p-8 hidden lg:flex">
                  <span className="text-brand-deep font-black text-6xl italic leading-none">24</span>
                  <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest text-brand-deep/50">EST</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-40 px-8 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <Pillar
              icon={<Shield size={32} />}
              title="DISCIPLINE"
              desc="Unwavering commitment to the craft. We don't negotiate with your limits."
            />
            <Pillar
              icon={<Zap size={32} />}
              title="INTENSITY"
              desc="High-precision kinetic energy. Every movement is a calculated impact."
            />
            <Pillar
              icon={<Target size={32} />}
              title="STRATEGY"
              desc="The science behind the silence. We analyze, then we execute."
            />
            <Pillar
              icon={<Users size={32} />}
              title="SYNDICATE"
              desc="An elite collective of high-performers. No egos, only evolution."
            />
          </div>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-40 bg-brand-deep relative border-y border-white/5">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#5F9598 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-8 max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-12"
          >
            <span className="text-brand-teal/50 font-black uppercase tracking-[1em] text-xs">THE DOCTRINE</span>
            <h2 className="text-4xl md:text-7xl font-display font-black text-white italic tracking-tighter leading-tight uppercase">
              "Victory is not a result. <br /> It is a <span className="text-brand-teal">persistent state of being</span>."
            </h2>
            <div className="flex justify-center pt-8">
              <div className="h-20 w-[1px] bg-gradient-to-b from-brand-teal to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Pillar = ({ icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="group p-10 border border-white/5 bg-[#0a2530] hover:border-brand-teal/30 transition-all duration-700"
  >
    <div className="text-brand-teal mb-8 group-hover:scale-110 transition-transform duration-500">{icon}</div>
    <h3 className="text-2xl font-display font-black text-white italic mb-4 tracking-tight uppercase">{title}</h3>
    <p className="text-white/30 text-sm leading-relaxed font-medium uppercase tracking-widest">{desc}</p>
  </motion.div>
);

export default About;
