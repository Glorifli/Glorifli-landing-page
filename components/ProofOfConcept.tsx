import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "We went from 3 to 15 clients in our first month with Glorifli. The guarantee seemed too good to be true, but they delivered.",
    author: "Sarah Jenkins",
    role: "CEO, Spark Digital",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    quote: "The quality of leads is unmatched. These aren't just cold emails; they are warm introductions to decision makers.",
    author: "Marcus Thorne",
    role: "Founder, Thorne Creative",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    quote: "Glorifli's system allowed us to scale our sales team without hiring more SDRs. It's fully automated growth.",
    author: "Elena Rodriguez",
    role: "VP Sales, TechFlow",
    image: "https://picsum.photos/100/100?random=3"
  }
];

const ProofOfConcept: React.FC = () => {
  return (
    <section id="proof" className="py-24 px-6 bg-background relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
            Trusted By <span className="text-primary">Local Business Owners</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.3)] transition-colors duration-300 flex flex-col cursor-default"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                </svg>
                <p className="text-gray-200 leading-relaxed text-lg">"{testimonial.quote}"</p>
              </div>
              <div className="mt-auto flex items-center gap-4 pt-6 border-t border-white/5">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full border border-white/10"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonial.author}</h4>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofOfConcept;