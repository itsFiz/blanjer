import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Start with our 30-day free trial. No credit card required. Get full access to all premium features to test out the platform. You can cancel anytime during the trial period."
  },
  {
    question: "Is my financial data secure?",
    answer: "Yes, we use bank-grade encryption and security measures to protect your data. All information is encrypted end-to-end, and we regularly conduct security audits to ensure your data stays safe."
  },
  {
    question: "Can I use Blanjer internationally?",
    answer: "Yes, Blanjer supports multiple currencies and is available worldwide. We offer real-time currency conversion and support international bank transfers through our integration partners."
  },
  {
    question: "How many groups can I create?",
    answer: "Free accounts can create up to 3 groups. Premium users get unlimited groups and additional features like advanced analytics and custom categories."
  },
  {
    question: "What payment methods do you support?",
    answer: "We support all major credit cards, debit cards, and digital wallets. We also integrate with popular payment services like PayPal, Stripe, and Wise for international transfers."
  },
  {
    question: "Can I export my financial data?",
    answer: "Yes, you can export your data in various formats including PDF, CSV, and Excel. Premium users get access to advanced reporting features and API access."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4 bg-violet-900/30 text-violet-300 border-violet-700/50">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Blanjer
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className={`mb-4 bg-gray-800/30 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all overflow-hidden ${
                  openIndex === index ? 'ring-1 ring-violet-500/20' : ''
                }`}
              >
                <motion.button
                  className="w-full text-left px-6 py-4 flex items-center justify-between"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-200">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Help Section */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-4">
            Still have questions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Support
            </motion.a>
            <motion.a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Documentation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;