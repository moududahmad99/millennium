import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const MembershipCard = ({ plan, highlight }) => {
  const { openCheckout } = useBooking();

  return (
    <motion.div
      whileHover={{ y: -15 }}
      className={`p-12 border-t-4 shadow-2xl transition-all duration-700 relative flex flex-col h-full bg-[#0a2530] border-white/5 ${highlight
        ? 'border-brand-teal'
        : 'border-white/10'
        }`}
    >
      <div className="flex justify-between items-start mb-8">
        <h3 className="text-4xl font-display font-black text-white italic tracking-tighter">{plan.title}</h3>
        {highlight && (
          <span className="bg-brand-teal text-brand-deep text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1">
            ELITE CHOICE
          </span>
        )}
      </div>

      <div className="flex items-baseline mb-12">
        <span className="text-6xl font-black text-white tracking-tighter">${plan.price}</span>
        <span className="text-sm text-brand-teal/50 font-bold uppercase tracking-[0.3em] ml-3 italic">/ Cycle</span>
      </div>

      <ul className="space-y-6 mb-16 flex-grow">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start space-x-4 group">
            <Check size={16} className="text-brand-teal mt-1 shrink-0" />
            <span className="text-white/60 text-sm font-medium leading-relaxed group-hover:text-white transition-colors">{f}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => openCheckout(plan)}
        className={`w-full py-5 text-[11px] font-black uppercase tracking-[0.5em] transition-all duration-500 transform hover:scale-[1.05] ${highlight
          ? 'bg-brand-teal text-brand-deep shadow-[0_10px_30px_rgba(95,149,152,0.2)]'
          : 'border border-white/20 text-white hover:bg-white hover:text-brand-deep'
          }`}
      >
        ACQUIRE MEMBERSHIP
      </button>

      {/* Serial Number Decoration */}
      <div className="absolute bottom-4 right-6 text-[10px] text-white/5 font-mono">
        MN-BP-{Math.floor(Math.random() * 9000) + 1000}
      </div>
    </motion.div>
  );
};

const Memberships = () => {
  const plans = [
    {
      title: "ASPIRANT",
      price: "120",
      features: [
        "8 High-Intensity Sessions",
        "Tactical Boxing Foundations",
        "Access to Kinetic Recovery Zone",
        "Digital Performance Dashboard"
      ],
      highlight: false
    },
    {
      title: "VANGUARD",
      price: "240",
      features: [
        "Unlimited Combat Training",
        "4 Private Mentorship Slots",
        "Hyper-Oxygen Recovery Circuit",
        "Full Metabolic Profile Audit",
        "Priority Sparring Access"
      ],
      highlight: true
    },
    {
      title: "ZENITH",
      price: "450",
      features: [
        "24/7 Strategic Access",
        "Unlimited Private Mentorship",
        "Private High-Security Locker",
        "Custom Biological Forge Plan",
        "Global Syndicate Networking"
      ],
      highlight: false
    }
  ];

  return (
    <section id="memberships" className="py-24 bg-[#061E29] relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-start mb-16 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-brand-teal" />
            <span className="text-brand-teal font-black uppercase tracking-[0.5em] text-[10px]">THE INVESTMENT</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-display font-black text-white italic tracking-tighter">
            CHOOSE YOUR <br /> <span className="text-stroke">EVOLUTION</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 grid-flow-row-dense bg-white/5 border border-white/5">
          {plans.map((plan, i) => (
            <MembershipCard key={i} plan={plan} highlight={plan.highlight} />
          ))}
        </div>

        {/* Decorative Quote */}
        <div className="mt-24 text-center">
          <p className="text-white/10 text-4xl md:text-7xl font-display font-black uppercase italic select-none">
            NO EXCUSES. NO RETREAT.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Memberships;
