import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LeadForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    arppv: '',
    patientsPerMonth: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/KyBfQlriCJtzUoDteCDn/webhook-trigger/9c2fa94d-e665-4e04-aa14-1aa3c9dfe687', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Submission failed');
        // Optionally handle error state here
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="form" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        <div className="glass-panel rounded-[2.5rem] border border-primary/20 overflow-hidden relative p-8 md:p-16">
          {/* Continuous Racing Border Animation */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="calc(100% - 1px)"
              height="calc(100% - 1px)"
              rx="40"
              ry="40"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3"
              pathLength="1"
              strokeDasharray="0.25 0.75"
              strokeLinecap="round"
              className="animate-[racingBorder_15s_linear_infinite]"
              style={{ filter: "drop-shadow(0 0 4px #38bdf8)" }}
            />
            <style>{`
              @keyframes racingBorder {
                0% {
                  stroke-dashoffset: 1;
                }
                100% {
                  stroke-dashoffset: 0;
                }
              }
            `}</style>
          </svg>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                How Much Is <span className="text-primary">Low Visibility Costing You?</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Fill out the form for a free audit to assess how much your practice is leaving on the table, and to see how many more people your practice could be helping.
              </p>
              <ul className="space-y-4">
                {[
                  "Free Revenue Audit included",
                  "Personalized Growth Roadmap",
                  "Identify patient visibility gaps",
                  "No commitment required"
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
                  <h3 className="text-xl font-bold text-white mb-2">Request Received!</h3>
                  <p className="text-gray-400 text-sm">We'll be in touch within 24 hours with your free audit.</p>
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
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
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
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-400 mb-1 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="(555) 555-5555"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="arppv" className="block text-xs font-medium text-gray-400 mb-1 ml-1">Avg. Revenue Per Patient Visit</label>
                    <input
                      type="text"
                      id="arppv"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="$150"
                      value={formState.arppv}
                      onChange={(e) => setFormState({ ...formState, arppv: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="patientsPerMonth" className="block text-xs font-medium text-gray-400 mb-1 ml-1">Avg. Patients Per Month</label>
                    <input
                      type="text"
                      id="patientsPerMonth"
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                      placeholder="200"
                      value={formState.patientsPerMonth}
                      onChange={(e) => setFormState({ ...formState, patientsPerMonth: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black font-bold rounded-xl py-4 hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                  >
                    {isSubmitting ? 'Processing...' : 'Get My Free Audit'}
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