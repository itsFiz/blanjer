"use client"	

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  ArrowUpRight,
  Star,
  PlayCircle,
  Check,
  Users,
  Shield,
  Sparkles,
  HomeIcon,
  Plane,
  Receipt,
  CreditCard,
  Bell,
  Target,
  ShoppingCart,
  Calendar,
  DollarSign,
  Globe,
  MessageCircle,
  TrendingUp,
  Lightbulb,
  Share2,
  Lock,
  BarChart,
  PieChart,
  Clock,
  Settings,
} from 'lucide-react';

// Import other sections
import TestimonialsSection from '@/components/landing/Testimonials';
import IntegrationPartnersSection from '@/components/landing/IntegrationPartners';
import FAQSection from '@/components/landing/FAQ';
import CTASection from '@/components/landing/CTA';
import Footer from '@/components/landing/Footer';
import FeatureSections from '@/components/landing/Feature';
import Newsletter from '@/components/landing/Newsletter';

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-indigo-500/10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 py-32 relative">
        <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="px-4 py-2 bg-violet-900/50 text-violet-200 border border-violet-700/50 rounded-full">
              <span className="animate-pulse mr-2">🎉</span>
              New: AI-Powered Receipt Scanner Released
            </Badge>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-violet-400 to-indigo-300 bg-clip-text text-transparent">
              Make Group Finances
              <br />
              <span className="text-4xl md:text-6xl">Simple & Social</span>
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            className="text-xl text-gray-300 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Transform how you manage shared expenses with our intelligent platform.
            Split bills, track expenses, and grow wealth together.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="w-full bg-violet-600 hover:bg-violet-700 text-white flex items-center gap-2 group"
              asChild
            >
              <motion.a 
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full border-violet-500/20 hover:bg-violet-500/10 text-violet-500 hover:text-violet-200 flex items-center gap-2"
              onClick={() => setIsVideoModalOpen(true)}
              asChild
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <PlayCircle className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </Button>
          </motion.div>
          
          {/* Social Proof */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-8 mt-12 pt-8 border-t border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* User Avatars */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3,9,10].map((i) => (
                  <motion.img
                    key={i}
                    src={`/images/${i}.png`}
                    className="w-8 h-8 rounded-full border-2 border-gray-800"
                    initial={{ scale: 0, x: -20 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-200">100,000+</span> active users
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + (star * 0.1) }}
                  >
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-gray-200">4.9/5</span> on App Store
              </p>
            </div>
          </motion.div>

          {/* Floating Features */}
          <motion.div
            className="absolute top-1/3 -translate-y-1/2 left-0 hidden xl:block"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {[
              { icon: Shield, text: "Secure" },
              { icon: Users, text: "Social" },
              { icon: Receipt, text: "Simple" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 mb-3"
                  whileHover={{ x: 10, scale: 1.05 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + (index * 0.1) }}
                >
                  <Icon className="w-4 h-4 text-violet-400" />
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Floating Features Right */}
          <motion.div
            className="absolute top-1/3 -translate-y-1/2 right-0 hidden xl:block"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {[
              { icon: Globe, text: "Global" },
              { icon: BarChart, text: "Analytics" },
              { icon: Bell, text: "Updates" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 mb-3"
                  whileHover={{ x: -10, scale: 1.05 }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + (index * 0.1) }}
                >
                  <Icon className="w-4 h-4 text-violet-400" />
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
         {/* Trust Badges */}
         <motion.div 
            className="mt-12 pt-12 border-t border-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-center text-gray-400 mb-6">Trusted by companies worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-50">
              {[1, 2, 3, 4].map((index) => (
                <img
                  key={index}
                  src={`/images/companies/${index}.png`}
                  alt={`Company ${index}`}
                  className="h-8 w-auto"
                />
              ))}
            </div>
          </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVideoModalOpen(false)}
        >
          <motion.div
            className="bg-gray-900 p-2 rounded-lg max-w-4xl w-full aspect-video"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <img 
              src="/api/placeholder/1280/720" 
              alt="Demo Video Placeholder"
              className="w-full h-full object-cover rounded"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

const HomePage = () => {
  return (
    <main className="bg-gray-950">
      <HeroSection />
      
      {/* Stats Section */}
      <motion.section 
        className="py-16 bg-gray-900 border-y border-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Users", value: "100K+", icon: Users },
              { label: "Monthly Transactions", value: "$10M+", icon: DollarSign },
              { label: "Countries", value: "50+", icon: Globe },
              { label: "App Rating", value: "4.9", icon: Star }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-violet-900/30 flex items-center justify-center mb-2">
                    <Icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-100">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Feature Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950" />
        <div className="container mx-auto px-4 relative">
          {/* Feature content here */}
          <FeatureSections />
        </div>
      </section>

      {/* Import and render other sections */}
      <TestimonialsSection />
      <Newsletter />
      <IntegrationPartnersSection />
      <FAQSection />
      <CTASection />
      <Footer />

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-violet-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUpRight className="w-6 h-6" />
      </motion.button>
    </main>
  );
};

export default HomePage;