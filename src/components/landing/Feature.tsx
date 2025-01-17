import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HomeIcon,
  Calendar,
  ShoppingCart,
  Target,
  Plane,
  CreditCard,
  DollarSign,
  Users,
  Receipt,
  Globe,
  PieChart,
  BarChart
} from 'lucide-react';

const FeatureSections = () => {
  return (
    <>
      {/* Home & Family Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4 bg-violet-900/30 text-violet-300 border-violet-700/50">
                Home & Family
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                Perfect for Home & Family
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Simplify household finances and shared expenses
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            {/* Text and Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: HomeIcon, title: "Bill Splitting", desc: "Automatically divide bills" },
                  { icon: Calendar, title: "Recurring Expenses", desc: "Track regular payments" },
                  { icon: ShoppingCart, title: "Shopping Lists", desc: "Manage shared lists" },
                  { icon: Target, title: "Group Budgets", desc: "Plan together" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, translateY: -5 }}
                      className="relative"
                    >
                      <Card className="p-6 bg-gray-800/30 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent rounded-lg"></div>
                        <Icon className="w-10 h-10 text-violet-400 mb-4" />
                        <h3 className="text-lg font-semibold mb-2 text-gray-200">{item.title}</h3>
                        <p className="text-gray-400">{item.desc}</p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent rounded-lg blur-xl"></div>
              <img 
                src="/images/mockup/1.png"
                alt="Home & Family Features"
                className="rounded-lg shadow-2xl relative z-10 w-full"
              />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 -left-4 bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 z-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-violet-400" />
                  <span className="text-gray-200 text-sm">5 household members</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 -right-4 bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 z-20"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <BarChart className="w-5 h-5 text-violet-400" />
                  <span className="text-gray-200 text-sm">Monthly savings: $350</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Travel & Events Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center mt-32">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent rounded-lg blur-xl"></div>
              <img 
                src="/images/mockup/2.png"
                alt="Travel Features"
                className="rounded-lg shadow-2xl relative z-10 w-full"
              />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 -right-4 bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 z-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-violet-400" />
                  <span className="text-gray-200 text-sm">Multi-currency support</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 -left-4 bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 z-20"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-violet-400" />
                  <span className="text-gray-200 text-sm">Smart receipt scanning</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Text and Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 bg-violet-900/30 text-violet-300 border-violet-700/50">
                Travel & Events
              </Badge>
              <h2 className="text-3xl font-bold text-gray-100 mb-4">
                Travel & Events Made Easy
              </h2>
              <p className="text-gray-300 mb-8">
                Perfect for trips, events, and group activities
              </p>

              <div className="grid gap-4">
                {[
                  { icon: Plane, title: "Plan Together", desc: "Collaborate on trip budgets and expenses in real-time" },
                  { icon: CreditCard, title: "Multi-Currency", desc: "Handle different currencies with automatic conversion" },
                  { icon: DollarSign, title: "Split Instantly", desc: "Fair and automatic expense splitting for groups" },
                  { icon: PieChart, title: "Track Everything", desc: "Comprehensive overview of all trip expenses" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, translateX: 10 }}
                      className="relative"
                    >
                      <Card className="p-6 bg-gray-800/30 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent rounded-lg"></div>
                        <div className="flex items-start gap-4">
                          <Icon className="w-8 h-8 text-violet-400" />
                          <div>
                            <h3 className="text-lg font-semibold mb-1 text-gray-200">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSections;