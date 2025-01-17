import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Small Business Owner",
    image: "/images/1.png",
    content: "Blanjer transformed how we manage our business expenses. The social features make collaboration effortless.",
    rating: 5
  },
  {
    name: "Mike Johnson",
    role: "House Manager",
    image: "/images/2.png",
    content: "The best expense tracking app I've ever used. Perfect for managing our shared house expenses.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Travel Enthusiast",
    image: "/images/4.png",
    content: "Planning group trips is so much easier with Blanjer. No more awkward money conversations!",
    rating: 5
  },
  {
    name: "Alex Thompson",
    role: "Startup Founder",
    image: "/images/5.png",
    content: "The financial insights have been invaluable for our growing team. Blanjer simplifies everything.",
    rating: 5
  },
  {
    name: "Lisa Wang",
    role: "Product Manager",
    image: "/images/3.png",
    content: "Incredible UI and powerful features. Our team's expense management has never been smoother.",
    rating: 5
  },
  {
    name: "James Mitchell",
    role: "Remote Team Lead",
    image: "/images/6.png",
    content: "Managing expenses across time zones used to be a nightmare. Blanjer made it seamless.",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Finance Director",
    image: "/images/7.png",
    content: "The automated reconciliation features save us countless hours every month.",
    rating: 5
  },
  {
    name: "Tom Anderson",
    role: "Digital Nomad",
    image: "/images/8.png",
    content: "Perfect for tracking shared expenses while traveling. The multi-currency support is fantastic!",
    rating: 5
  },{
    name: "Nurul Hassan",
    role: "International Project Manager",
    image: "/images/9.png",
    company: "Global Consulting Firm",
    content: "The ability to handle different currencies and split expenses across international teams has transformed how we manage our ASEAN project budgets.",
    rating: 5
  },
  {
    name: "Amir Rahman",
    role: "Startup Founder",
    image: "/images/10.png",
    company: "Tech Entrepreneur",
    content: "As someone managing remote teams across Southeast Asia, Blanjer's multi-currency feature and group expense tracking have been invaluable for our company culture.",
    rating: 5
}
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(1);

  const getPrevIndex = (current: number) => (current - 1 + testimonials.length) % testimonials.length;
  const getNextIndex = (current: number) => (current + 1) % testimonials.length;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const testimonialCards = (
    <div className="relative">
      <div className="flex items-center justify-center gap-8">
        <motion.button
          onClick={() => setCurrentIndex(getPrevIndex(currentIndex))}
          className="absolute left-4 z-10 p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/70 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <div className="flex gap-8 items-center">
          <motion.div 
            className="opacity-50 scale-90"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.5 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            key={`prev-${currentIndex}`}
          >
            <Card className="w-96 p-8 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-sm"></div>
                  <img
                    src={testimonials[getPrevIndex(currentIndex)].image}
                    alt={testimonials[getPrevIndex(currentIndex)].name}
                    className="w-12 h-12 rounded-full ring-2 ring-violet-500/20 relative z-10"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200">{testimonials[getPrevIndex(currentIndex)].name}</h4>
                  <p className="text-sm text-gray-400">{testimonials[getPrevIndex(currentIndex)].role}</p>
                </div>
              </div>
              
              <motion.p 
                className="text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {testimonials[getPrevIndex(currentIndex)].content}
              </motion.p>
              
              <div className="flex gap-1">
                {[...Array(testimonials[getPrevIndex(currentIndex)].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
            </Card>
          </motion.div>
          
          <motion.div 
            className="scale-110 z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            key={`current-${currentIndex}`}
          >
            <Card className="w-96 p-8 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-sm"></div>
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full ring-2 ring-violet-500/20 relative z-10"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              
              <motion.p 
                className="text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {testimonials[currentIndex].content}
              </motion.p>
              
              <div className="flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
            </Card>
          </motion.div>
          
          <motion.div 
            className="opacity-50 scale-90"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 0.5 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            key={`next-${currentIndex}`}
          >
            <Card className="w-96 p-8 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-sm"></div>
                  <img
                    src={testimonials[getNextIndex(currentIndex)].image}
                    alt={testimonials[getNextIndex(currentIndex)].name}
                    className="w-12 h-12 rounded-full ring-2 ring-violet-500/20 relative z-10"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200">{testimonials[getNextIndex(currentIndex)].name}</h4>
                  <p className="text-sm text-gray-400">{testimonials[getNextIndex(currentIndex)].role}</p>
                </div>
              </div>
              
              <motion.p 
                className="text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {testimonials[getNextIndex(currentIndex)].content}
              </motion.p>
              
              <div className="flex gap-1">
                {[...Array(testimonials[getNextIndex(currentIndex)].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.button
          onClick={() => setCurrentIndex(getNextIndex(currentIndex))}
          className="absolute right-4 z-10 p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/70 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="mb-4 bg-violet-900/30 text-violet-300 border-violet-700/50">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Loved by Thousands
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See what our users have to say about their experience with Blanjer
          </p>
        </motion.div>

        {testimonialCards}

       
      </div>
    </section>
  );
};

export default TestimonialsSection;