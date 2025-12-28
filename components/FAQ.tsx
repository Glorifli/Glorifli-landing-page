import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How does the '10 clients' guarantee work?",
    answer: "It's simple. If we don't deliver 10 qualified, signed clients within your first 30 days of working with us, we refund your entire service fee. No questions asked. We are that confident in our system."
  },
  {
    question: "What industries do you work with?",
    answer: "We specialize in B2B service providers, SaaS companies, and marketing agencies. Our strategies are tailored to high-ticket sales environments."
  },
  {
    question: "How fast can I expect results?",
    answer: "Our onboarding takes 48 hours. Most clients see their first qualified lead booking a call within the first 5 days of launch."
  },
  {
    question: "Do I need to provide the leads?",
    answer: "No. Glorifli handles the entire end-to-end process. We source the leads, verify them, enrich the data, and handle the outreach. You just show up to the sales calls."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 font-heading text-center">Frequently asked questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 bg-black/20"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium text-white pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`flex-shrink-0 text-primary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                  size={20}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;