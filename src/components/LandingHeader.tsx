"use client"
import React, { useState, useEffect } from 'react';
import { Home, Plane, LineChart, Wallet, Menu, X, Info } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface Feature {
  name: string;
  description: string;
  href: string;
}



const BlanjerHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModule, setActiveModule] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const modules = {
    
    household: {
      icon: Home,
      title: "Households",
      description: "Smart expense tracking for shared living",
      href: "/household",
      features: [
        { name: "Expense Tracking", description: "Split and track shared expenses", href: "/household/expense-tracking" },
        { name: "Bill Automation", description: "Automate recurring payments", href: "/household/bill-automation" },
        { name: "Contribution Analytics", description: "Track member contributions", href: "/household/analytics" },
        { name: "Budget Planning", description: "Collaborative household budgeting", href: "/household/budget" }
      ]
    },
    travel: {
      icon: Plane,
      title: "Travelers",
      description: "Seamless group travel expense management",
      href: "/travel",
      features: [
        { name: "Trip Budgeting", description: "Plan and track trip expenses", href: "/travel/budgeting" },
        { name: "Currency Management", description: "Handle multiple currencies", href: "/travel/currency" },
        { name: "Cost Splitting", description: "Fair split between travelers", href: "/travel/split" },
        { name: "Travel Analytics", description: "Track spending patterns", href: "/travel/analytics" }
      ]
    },
    // business: {
    //   icon: LineChart,
    //   title: "Businesses",
    //   description: "Comprehensive financial analytics for startups and scaleups",
    //   href: "/business",
    //   features: [
    //     { name: "Detailed Analytics", description: "Deep financial insights", href: "/business/analytics" },
    //     { name: "Custom Reports", description: "Tailored financial reporting", href: "/business/reports" },
    //     { name: "Category Tracking", description: "Organize capital & operational expenses by category", href: "/business/category" },
    //     { name: "Company Insights", description: "Track revenue, cashflow, profit and overall financial health", href: "/business/insights" }
    //   ]
    // },
    // kakeibo: {
    //   icon: Wallet,
    //   title: "Personal",
    //   description: "Kakeibo:Japanese-style personal finance",
    //   href: "/personal",
    //   features: [
    //     { name: "Four Pillars", description: "Track essential categories", href: "/kakeibo/pillars" },
    //     { name: "Reflection Tools", description: "Monthly financial review", href: "/kakeibo/reflection" },
    //     { name: "Savings Challenge", description: "Gamified saving goals", href: "/kakeibo/challenge" },
    //     { name: "Wealth Building", description: "Track net worth growth", href: "/kakeibo/wealth" }
    //   ]
    // },
    about: {
        icon: Info    ,
        title: "About",
        description: "Learn more about us",
        href: "/about",
        features: [
          { name: "Blog", description: "Read our latest updates", href: "/about/blog" },
          { name: "Career", description: "Join our team", href: "/about/career" },
          { name: "About Us", description: "Our story", href: "/about/story" },
          { name: "Our Team", description: "Meet the team", href: "/about/team" },
          { name: "Contact Us", description: "Get in touch", href: "/about/contact" },
          { name: "Testimonials", description: "What others say", href: "/about/testimonials" },
          { name: "Corporate Partnerships", description: "Work with us", href: "/about/partnerships" }
        ]
      },
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-zinc-800/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Blanjer
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <NavigationMenu>
              <NavigationMenuList>
                {Object.entries(modules).map(([key, module]) => {
                  const Icon = module.icon;
                  return (
                    <NavigationMenuItem key={key} className="group">
                      <NavigationMenuTrigger 
                        className="text-zinc-400 hover:text-white group-hover:bg-zinc-800/50"
                        onClick={() => setActiveModule(activeModule === key ? null : key)}
                      >
                        <div className="flex items-center">
                          <Icon className="w-4 h-4 mr-2" />
                          {module.title}
                        </div>
                      </NavigationMenuTrigger>
                      
                      {activeModule === key && (
                        <NavigationMenuContent>
                          <div 
                            className="w-[500px] p-4 bg-zinc-900/90 backdrop-blur-xl rounded-xl border border-zinc-800 shadow-xl"
                            onMouseLeave={() => setActiveModule(null)}
                          >
                            <div className="mb-4">
                              <h3 className="text-lg font-medium text-white mb-1">
                                {key === 'about' ? 'About Blanjer' : `Blanjer For ${module.title}`}
                              </h3>
                              <p className="text-sm text-zinc-400">{module.description}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              {module.features.map((feature, index) => (
                                <a
                                  key={index}
                                  href={feature.href}
                                  className="block p-3 rounded-lg hover:bg-zinc-800/50 transition-colors"
                                >
                                  <div className="font-medium text-white mb-1">{feature.name}</div>
                                  <p className="text-sm text-zinc-400">{feature.description}</p>
                                </a>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      )}
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors">
              Log in
            </a>
            <a
              href="#"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black">
          <div className="p-4 space-y-6">
            {Object.entries(modules).map(([key, module]) => {
              const Icon = module.icon;
              return (
                <div key={key} className="space-y-2">
                  <div className="flex items-center text-lg font-medium text-white">
                    <Icon className="w-5 h-5 mr-2" />
                    {module.title}
                  </div>
                  <div className="ml-7 space-y-2">
                    {module.features.map((feature, index) => (
                      <a
                        key={index}
                        href={feature.href}
                        className="block py-2 text-zinc-400 hover:text-white"
                      >
                        {feature.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
            <div className="pt-6 border-t border-zinc-800">
              <a href="#" className="block text-center py-2 text-zinc-400 hover:text-white">
                Log in
              </a>
              <a
                href="#"
                className="block text-center mt-2 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default BlanjerHeader;