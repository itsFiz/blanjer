import React from 'react';
import { motion } from 'framer-motion'; 

const Newsletter = () => {
  return (
    <motion.div 
      className="border-t border-gray-800 pt-12 mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-lg font-semibold text-gray-200 mb-2">
              Stay up to date
            </h4>
            <p className="text-gray-400 mb-6">
              Get the latest updates on product features and financial tips
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
  );
};

export default Newsletter;