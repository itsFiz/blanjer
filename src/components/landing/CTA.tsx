import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-violet-900/20 to-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-indigo-500/10"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="bg-violet-900/50 text-violet-200 border-violet-700/50 mb-6">
            Limited Time Offer
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">
            Start Your Financial Journey Today
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users already managing their finances with Blanjer
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              "30-day free trial",
              "No credit card required",
              "Cancel anytime",
              "Full feature access",
              "Premium support",
              "Regular updates"
            ].map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center justify-center gap-2 text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-5 h-5 rounded-full bg-violet-900/30 flex items-center justify-center">
                  <Check className="w-3 h-3 text-violet-400" />
                </div>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="bg-violet-600 hover:bg-violet-700 text-white w-full sm:w-auto px-8"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            
          </motion.div>

         
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;