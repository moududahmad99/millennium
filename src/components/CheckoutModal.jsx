import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, ShieldCheck, Zap, ArrowRight, Shield } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import confetti from 'canvas-confetti';

const CheckoutModal = () => {
  const { isCheckoutOpen, selectedPlan, closeCheckout } = useBooking();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isCheckoutOpen || !selectedPlan) return null;

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate Payment Gate
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#5F9598', '#1D546D', '#ffffff']
      });
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeCheckout}
          className="absolute inset-0 bg-brand-deep/95 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0a2530] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row min-h-[600px]"
        >
          {/* Sidebar - Plan Summary */}
          <div className="w-full md:w-80 bg-brand-deep p-8 border-r border-white/5 flex flex-col">
            <div className="flex items-center gap-2 mb-12">
              <div className="w-8 h-8 bg-brand-teal flex items-center justify-center overflow-hidden">
                <img src="/logo.svg" alt="M" className="w-5 h-5 object-contain brightness-0 invert" />
              </div>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40">Secure Checkout</span>
            </div>

            <div className="flex-grow">
              <span className="text-brand-teal font-black text-[10px] uppercase tracking-[0.3em] block mb-2">Selected Tier</span>
              <h2 className="text-4xl font-display font-black text-white italic mb-6">{selectedPlan.title}</h2>
              <div className="text-5xl font-black text-white mb-8 tracking-tighter">
                ${selectedPlan.price}<span className="text-sm text-white/30 italic">/Cycle</span>
              </div>

              <ul className="space-y-4">
                {selectedPlan.features.slice(0, 3).map((f, i) => (
                  <li key={i} className="text-[11px] text-white/50 uppercase tracking-widest flex items-center gap-3">
                    <div className="w-1 h-1 bg-brand-teal" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-white/5 space-y-4">
              <div className="flex items-center gap-3 text-white/30">
                <ShieldCheck size={16} className="text-brand-teal" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em]">AES-256 Encryption</span>
              </div>
            </div>
          </div>

          {/* Main Content Areas */}
          <div className="flex-grow p-8 md:p-12 relative overflow-y-auto">
            <button
              onClick={closeCheckout}
              className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors p-2"
            >
              <X size={24} />
            </button>

            {step === 1 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="h-full flex flex-col justify-center">
                <h3 className="text-2xl font-display font-black text-white italic mb-8 uppercase tracking-widest">Identify Yourself</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-brand-teal uppercase tracking-[0.2em]">Full Legal Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-brand-teal transition-all uppercase tracking-widest text-sm" placeholder="TYPE YOUR NAME..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-brand-teal uppercase tracking-[0.2em]">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-brand-teal transition-all uppercase tracking-widest text-sm" placeholder="YOU@SYNDICATE.COM" />
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="w-full mt-12 bg-white text-brand-deep py-6 font-black uppercase tracking-[0.4em] text-xs hover:bg-brand-teal transition-all flex items-center justify-center gap-3 group"
                  >
                    PROCEED TO GATEWAY <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="h-full flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8">
                  <CreditCard className="text-brand-teal" />
                  <h3 className="text-2xl font-display font-black text-white italic uppercase tracking-widest">Gateway Access</h3>
                </div>
                <form onSubmit={handlePayment} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-brand-teal uppercase tracking-[0.2em]">Card Number</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-brand-teal transition-all tracking-[0.5em] text-sm" placeholder="•••• •••• •••• ••••" required />
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-brand-teal uppercase tracking-[0.2em]">Expiry</label>
                      <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-brand-teal transition-all tracking-widest text-sm" placeholder="MM / YY" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-brand-teal uppercase tracking-[0.2em]">CVC</label>
                      <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:border-brand-teal transition-all tracking-widest text-sm" placeholder="***" required />
                    </div>
                  </div>

                  <button
                    disabled={isProcessing}
                    className="w-full mt-12 bg-brand-teal text-brand-deep py-6 font-black uppercase tracking-[0.4em] text-xs hover:shadow-[0_0_30px_rgba(95,149,152,0.4)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-brand-deep border-t-transparent rounded-full animate-spin" />
                        PROCESSING MISSION...
                      </div>
                    ) : (
                      <>AUTHORIZE PAYMENT <Shield size={16} /></>
                    )}
                  </button>
                </form>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-24 h-24 bg-brand-teal rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(95,149,152,0.5)]">
                  <Zap size={48} className="text-brand-deep fill-brand-deep" />
                </div>
                <h3 className="text-4xl font-display font-black text-white italic uppercase tracking-tighter mb-4">Ascension Complete</h3>
                <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] max-w-sm mb-12">
                  Your credentials have been verified. Welcome to the Syndicate. Expect intelligence in your inbox shortly.
                </p>
                <button
                  onClick={closeCheckout}
                  className="px-12 py-5 border border-white/20 text-white font-black uppercase tracking-[0.4em] text-[10px] hover:bg-white hover:text-brand-deep transition-all"
                >
                  RETURN TO BASE
                </button>
              </motion.div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CheckoutModal;
