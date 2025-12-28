import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, BarChart3, Users, Target } from 'lucide-react';

const features = [
  {
    title: "Instant Lead Matching",
    description: "Our AI identifies prospects actively searching for your services right now.",
    icon: Zap,
    colSpan: "md:col-span-2",
    color: "text-primary"
  },
  {
    title: "Global Reach",
    description: "Target clients in any region with localized outreach strategies.",
    icon: Globe,
    colSpan: "md:col-span-1",
    color: "text-secondary"
  },
  {
    title: "Data-Driven Insights",
    description: "Real-time analytics on your campaign performance and conversion rates.",
    icon: BarChart3,
    colSpan: "md:col-span-1",
    color: "text-accent"
  },
  {
    title: "Automated Follow-ups",
    description: "Never let a lead go cold. Our systems handle the nurturing for you.",
    icon: Target,
    colSpan: "md:col-span-2",
    color: "text-white"
  },
];

const ValueProposition: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 bg-surface border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            The Glorifli <span className="text-primary">Advantage</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We don't just send emails. We build a comprehensive acquisition ecosystem for your agency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass-panel p-8 rounded-3xl group cursor-default relative overflow-hidden ${feature.colSpan}`}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;