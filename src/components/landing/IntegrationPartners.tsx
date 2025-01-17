import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

const partnerLogos = [
  {
    name: "Stripe",
    description: "Payment Processing",
    image: "/images/integrations/stripe.png",
  },
  {
    name: "PayPal",
    description: "Digital Payments",
    image: "/images/integrations/paypal.png",
  },
  {
    name: "Wise",
    description: "International Transfers",
    image: "/images/integrations/wise.png",
  },
  {
    name: "Plaid",
    description: "Banking Connections",
    image: "/images/integrations/plaid.png",
  }
];

const IntegrationPartnersSection = () => {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4 bg-violet-900/30 text-violet-300 border-violet-700/50">
            Integrations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Works With Your Favorite Tools
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Seamlessly connect with popular payment and banking services
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-gray-800/30 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/50 transition-all p-8 h-full"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-violet-500/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-8 w-auto mx-auto mb-4 opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="text-center">
                    <h3 className="text-gray-200 font-semibold">{partner.name}</h3>
                    <p className="text-sm text-gray-400">{partner.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Easy Integration",
              description: "Connect your existing tools with just a few clicks"
            },
            {
              title: "Secure Connection",
              description: "Bank-level security for all your integrations"
            },
            {
              title: "Real-time Sync",
              description: "Automatic updates across all connected services"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="text-center p-6 bg-gray-800/20 rounded-lg border border-gray-700/30"
            >
              <h3 className="text-lg font-semibold text-gray-200 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Integration CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-2">
            Don't see your tool?
          </p>
          <motion.a
            href="#"
            className="text-violet-400 hover:text-violet-300 transition-colors font-semibold"
            whileHover={{ x: 5 }}
          >
            Request an integration →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationPartnersSection;