import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, User, AtSign, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const Contact = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-deep relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/5 to-transparent pointer-events-none" />
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-display font-black text-white/[0.01] uppercase italic select-none pointer-events-none">
        CONNECT
      </h2>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left Column: Information */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-brand-teal" />
                <span className="text-brand-teal font-black uppercase tracking-[0.5em] text-[10px]">THE SYNDICATE</span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-display font-black text-white mb-8 uppercase leading-[0.85] italic tracking-tighter"
              >
                BEGIN YOUR <br /> <span className="text-stroke">ASCENSION</span>
              </motion.h2>
              <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-md italic border-l border-brand-teal/20 pl-6">
                Our doors are open for those seeking true transformation. Reach out to schedule a private tour of our facility.
              </p>
            </div>

            <div className="space-y-8">
              <ContactInfo
                icon={<Phone size={20} />}
                label="Direct Line"
                value="+1 347-293-7264"
              />
              <ContactInfo
                icon={<MapPin size={20} />}
                label="The Outpost"
                value="3448 E Tremont Ave, Bronx, NY 10465"
              />
              <ContactInfo
                icon={<Mail size={20} />}
                label="Digital Correspondence"
                value="prettygoodman100@gmail.com"
              />
            </div>
          </div>

          {/* Right Column: Tactical Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative group lg:ml-auto max-w-2xl w-full"
            >
              {/* Form Container with high-end border effects */}
              <div className="bg-[#0a2530] border border-white/5 p-8 md:p-12 relative overflow-hidden glass-morphism shadow-[0_0_100px_rgba(0,0,0,1)]">
                {/* Decorative Tech Corners */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-brand-teal/20" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-brand-teal/20" />

                <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <InputGroup label="IDENTITY" placeholder="FULL NAME" icon={<User size={14} />} />
                    <InputGroup label="DIGITAL ADDRESS" placeholder="EMAIL" icon={<AtSign size={14} />} />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Zap size={14} className="text-brand-teal" />
                        <label className="text-[10px] font-black text-brand-teal uppercase tracking-[0.4em]">INTEL CATEGORY</label>
                      </div>
                      <span className="text-[8px] text-white/20 font-black uppercase tracking-widest italic">Selective Input</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Training', 'Facility', 'Events', 'Other'].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setSelectedCategory(cat)}
                          className={`relative py-3 px-4 border transition-all duration-500 overflow-hidden group/btn ${selectedCategory === cat
                            ? 'border-brand-teal bg-brand-teal/10 text-brand-teal'
                            : 'border-white/5 bg-white/[0.02] text-white/40 hover:border-white/20 hover:text-white'
                            }`}
                        >
                          <span className="relative z-10 text-[9px] font-black uppercase tracking-widest leading-none">
                            {cat}
                          </span>
                          {/* Active Indicator */}
                          {selectedCategory === cat && (
                            <motion.div
                              layoutId="active-cat"
                              className="absolute inset-0 bg-brand-teal/5"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <ShieldCheck size={14} className="text-brand-teal" />
                        <label className="text-[10px] font-black text-brand-teal uppercase tracking-[0.4em]">YOUR MISSION</label>
                      </div>
                    </div>
                    <div className="relative group/text">
                      <textarea
                        rows="4"
                        placeholder="HOW MAY WE ASSIST YOUR EVOLUTION?"
                        className="w-full bg-white/[0.02] border border-white/5 p-6 text-white text-xs outline-none focus:border-brand-teal/30 focus:bg-white/[0.04] transition-all font-bold uppercase tracking-widest placeholder:text-white/5 resize-none h-40"
                      />
                      <div className="absolute bottom-4 right-4 text-[8px] font-mono text-white/10 uppercase tracking-[0.2em] group-focus-within/text:text-brand-teal transition-colors">
                        Protocol v1.0
                      </div>
                    </div>
                  </div>

                  {/* HIGH-END STUNNING BUTTON */}
                  <button
                    disabled={isSubmitting}
                    className="w-full group relative py-10 bg-brand-teal/90 overflow-hidden flex items-center justify-center gap-6 transition-all duration-700 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                  >
                    {/* Background Animation Layers */}
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />

                    {/* Content */}
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="relative z-10 flex items-center gap-3"
                        >
                          <div className="w-4 h-4 border-2 border-brand-deep border-t-transparent rounded-full animate-spin" />
                          <span className="text-brand-deep font-display font-black text-xl md:text-2xl uppercase italic tracking-tighter">
                            DISPATCHING...
                          </span>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="relative z-10 flex items-center gap-6"
                        >
                          <span className="text-brand-deep font-display font-black text-2xl md:text-3xl uppercase italic tracking-tighter group-hover:text-brand-deep transition-colors duration-500">
                            DISPATCH INTEL
                          </span>
                          <div className="relative flex items-center justify-center">
                            <ArrowRight size={28} className="text-brand-deep group-hover:translate-x-2 transition-transform duration-500" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Edge Accents */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-brand-deep/20" />
                    <div className="absolute top-0 right-0 w-2 h-full bg-brand-deep/20" />
                  </button>
                </form>
              </div>

              {/* Outside decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-teal/10 -z-10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InputGroup = ({ label, placeholder, icon }) => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <label className="text-[10px] font-black text-brand-teal uppercase tracking-[0.4em]">{label}</label>
      <div className="text-white/10 group-focus-within/text:text-brand-teal transition-colors">
        {icon}
      </div>
    </div>
    <div className="relative group/input">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-white/10 py-5 text-white text-xs font-bold uppercase tracking-[0.2em] outline-none focus:border-brand-teal transition-all placeholder:text-white/5"
      />
      <div className="absolute bottom-0 left-0 h-[1px] bg-brand-teal w-0 group-focus-within/input:w-full transition-all duration-700" />
    </div>
  </div>
);

const ContactInfo = ({ icon, label, value }) => (
  <div className="flex items-center space-x-6 group cursor-default">
    <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-deep transition-all duration-700 hover:rotate-[360deg] shadow-[0_0_20px_rgba(95,149,152,0.1)]">
      {icon}
    </div>
    <div>
      <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em] mb-1">{label}</p>
      <p className="text-white font-bold text-sm md:text-base tracking-widest uppercase">{value}</p>
    </div>
  </div>
);

export default Contact;
