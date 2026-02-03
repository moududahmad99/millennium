import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[var(--background)] transition-colors duration-500 relative">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-brand-teal font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Inquiry</span>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-6xl font-display font-black text-[var(--foreground)] mb-8 uppercase leading-none"
            >
              BEGIN YOUR <br /> <span className="text-brand-teal italic">ASCENSION</span>
            </motion.h2>
            <p className="text-gray-500 mb-12 text-lg max-w-lg leading-relaxed font-light">
              Our doors are open for those seeking true transformation. Reach out to schedule a private tour of our facility.
            </p>

            <div className="space-y-10">
              <ContactInfo
                icon={<Phone size={24} />}
                label="Direct Line"
                value="+1 347-293-7264"
              />
              <ContactInfo
                icon={<MapPin size={24} />}
                label="Sanctuary Location"
                value="3448 E Tremont Ave, Bronx, NY 10465"
              />
              <ContactInfo
                icon={<Mail size={24} />}
                label="Digital Correspondence"
                value="info@millenniumboxing.com"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[var(--card)] p-12 rounded-[2rem] border border-[var(--border)] shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-bl-full transition-transform group-hover:scale-150 duration-700" />
            <form className="space-y-8 relative z-10">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">Identity</label>
                <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-[var(--border)] py-4 text-[var(--foreground)] focus:border-brand-teal outline-none transition-colors placeholder:text-gray-500/50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">Digital Address</label>
                <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-[var(--border)] py-4 text-[var(--foreground)] focus:border-brand-teal outline-none transition-colors placeholder:text-gray-500/50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal">Intel</label>
                <textarea rows="4" placeholder="How may we assist your journey?" className="w-full bg-transparent border-b border-[var(--border)] py-4 text-[var(--foreground)] focus:border-brand-teal outline-none transition-colors placeholder:text-gray-500/50 resize-none"></textarea>
              </div>
              <button className="w-full bg-brand-deep dark:bg-brand-teal text-brand-light dark:text-brand-deep py-6 font-bold uppercase tracking-[0.3em] transition-all rounded-xl hover:shadow-[0_20px_40px_-10px_rgba(29,84,109,0.3)] transform hover:-translate-y-1">
                Dispatch Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label, value }) => (
  <div className="flex items-center space-x-8 group cursor-default">
    <div className="w-16 h-16 bg-[var(--card)] shadow-xl flex items-center justify-center rounded-2xl group-hover:bg-brand-teal transition-all duration-500 border border-[var(--border)] group-hover:-translate-y-2">
      <div className="text-brand-teal group-hover:text-brand-deep transition-colors">
        {icon}
      </div>
    </div>
    <div>
      <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">{label}</p>
      <p className="text-[var(--foreground)] font-bold text-xl tracking-tight">{value}</p>
    </div>
  </div>
);

export default Contact;
