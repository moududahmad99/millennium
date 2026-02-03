import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ownerImg from '../assets/images/owner.png';

const Owner = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <section ref={containerRef} className="py-24 bg-brand-deep relative overflow-hidden flex items-center min-h-[70vh]">
      {/* 3D Background Text */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none"
      >
        <h2 className="text-[30vw] font-display font-black text-white italic whitespace-nowrap leading-none uppercase">
          VISIONARY
        </h2>
      </motion.div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* 3D Image Composition */}
          <div className="lg:w-1/2 relative perspective-1000">
            <motion.div
              style={{ rotateX }}
              className="relative z-10"
            >
              <div className="relative aspect-[3/4] md:aspect-[4/5] max-w-md mx-auto overflow-hidden border border-white/10 group shadow-[0_0_80px_rgba(95,149,152,0.1)]">
                {/* Image Treatment: Sharp Laboratory Monochrome */}
                <img
                  src={ownerImg}
                  alt="Ofacio Falcon"
                  className="w-full h-full object-cover filter grayscale contrast-[1.3] brightness-[0.8] group-hover:scale-105 transition-transform duration-1000"
                />

                {/* Dynamic Blueprint Grid (Hides low-res noise with sharp patterns) */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.2]"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(95,149,152,0.1) 1px, transparent 1px),
                                     linear-gradient(to bottom, rgba(95,149,152,0.1) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                />

                {/* Tech Overlays */}
                <div className="absolute top-0 right-0 p-4 opacity-30">
                  <div className="w-10 h-[1px] bg-brand-teal mb-1" />
                  <div className="w-6 h-[1px] bg-brand-teal" />
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-brand-deep to-transparent opacity-80" />

                {/* Floating Card Edge */}
                <div className="absolute -inset-[1px] border border-brand-teal/20 pointer-events-none z-20" />
              </div>

              {/* Decorative Floating Elements for 3D Depth */}
              <motion.div
                style={{ y: y2 }}
                className="absolute -top-10 -right-10 w-40 h-40 border border-brand-teal/10 hidden md:block"
              />
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-brand-teal" />
                <span className="text-brand-teal font-black uppercase tracking-[0.5em] text-[10px]">THE FOUNDER</span>
              </div>

              <h2 className="text-7xl md:text-9xl font-display font-black text-white italic tracking-tighter uppercase leading-[0.8]">
                OFACIO <br /> <span className="text-stroke">FALCON</span>
              </h2>

              <p className="text-white/50 text-xl font-light leading-relaxed max-w-xl italic border-l border-brand-teal/30 pl-8">
                "Millennium isn't just a gym; it's a testament to the fact that with enough discipline, anyone can forge their own legacy. We built this facility to be a sanctuary for those who pursue excellence in every strike."
              </p>

              <div className="pt-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="px-8 py-4 bg-brand-teal text-brand-deep font-black uppercase tracking-widest text-xs">
                  Head Coach
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-brand-teal rounded-full animate-pulse" />
                  </div>
                  <span className="text-white/30 font-black uppercase tracking-[0.3em] text-[10px]">Active Mentorship</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Owner;
