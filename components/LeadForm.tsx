import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LeadForm: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', website: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="form" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel rounded-[2.5rem] border border-primary/20 overflow-hidden relative p-8 md:p-16">
            {/* Beam effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 blur-sm"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                  Ready for your <span className="text-primary">10 new clients?</span>
                </h2>
                <p className="text-gray-400 mb-8">
                  Fill out the form to qualify for our "10 Clients or Free" guarantee. Limited spots available for this month.
                </p>
                <ul className="space-y-4">
                  {[
                    "Guaranteed results contract",
                    "Dedicated account manager",
                    "Weekly performance reports",
                    "Cancel anytime"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white/5 rounded-2xl p-8 text-center border border-white/10"
                  >
                    <div className="w-16 h-16 bg-success/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                      ✓
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Application Received!</h3>
                    <p className="text-gray-400 text-sm">We'll be in touch within 24 hours to schedule your strategy call.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1 ml-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1 ml-1">Work Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-xs font-medium text-gray-400 mb-1 ml-1">Company Website</label>
                      <input
                        type="url"
                        id="website"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        placeholder="https://company.com"
                        value={formState.website}
                        onChange={(e) => setFormState({...formState, website: e.target.value})}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-black font-bold rounded-xl py-4 hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                    >
                      {isSubmitting ? 'Processing...' : 'Get 10 Clients Now'}
                    </button>
                  </form>
                )}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;