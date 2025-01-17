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
  const [expandedMobileModules, setExpandedMobileModules] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return; // Prevent scroll effect when menu is open
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  // Toggle mobile module expansion
  const toggleMobileModule = (key: string) => {
    setExpandedMobileModules(prev => 
      prev.includes(key) 
        ? prev.filter(k => k !== key)
        : [...prev, key]
    );
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

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
          { name: "About Us", description: "Our story", href: "/about/story" },
          { name: "Our Team", description: "Meet the team", href: "/about/team" },
          { name: "Contact Us", description: "Get in touch", href: "/about/contact" },
          { name: "Testimonials", description: "What others say", href: "/about/testimonials" },
          { name: "Corporate Partnerships", description: "Work with us", href: "/about/partnerships" }
        ]
      },
    pricing: {
      icon: Wallet,
      title: "Pricing",
      description: "Simple, transparent pricing",
      href: "/pricing",
      features: []
    },
    blog: {
      icon: LineChart,
      title: "Blog",
      description: "Read our latest updates",
      href: "/blog",
      features: []
    },
    career: {
      icon: Plane,
      title: "Career",
      description: "Join our team",
      href: "/career",
      features: []
    }
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
            <a href="/">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Blanjer
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <NavigationMenu>
              <NavigationMenuList>
                {Object.entries(modules).map(([key, module]) => {
                  const Icon = module.icon;
                  return (
                    <NavigationMenuItem key={key} className="group">
                      {module.features.length > 0 ? (
                        <NavigationMenuTrigger 
                          className="text-zinc-400 hover:text-white group-hover:bg-zinc-800/50"
                          onClick={() => setActiveModule(activeModule === key ? null : key)}
                        >
                          <div className="flex items-center">
                            <Icon className="w-4 h-4 mr-2" />
                            {module.title}
                          </div>
                        </NavigationMenuTrigger>
                      ) : (
                        <a
                          href={module.href}
                          className="flex items-center px-4 py-2 text-zinc-400 hover:text-white group-hover:bg-zinc-800/50"
                        >
                          <Icon className="w-4 h-4 mr-2" />
                          {module.title}
                        </a>
                      )}
                      
                      {activeModule === key && module.features.length > 0 && (
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
        <div className="lg:hidden">
          <div 
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 overflow-y-auto"
            style={{ 
              animation: 'fadeIn 0.2s ease-out',
            }}
          >
            {/* Mobile Header */}
            <div className="sticky top-0 flex items-center justify-between p-4 border-b border-zinc-800/50">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Blanjer
              </span>
              <button
                className="p-2 text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="px-4 py-6 space-y-6">
              {Object.entries(modules).map(([key, module]) => {
                const Icon = module.icon;
                const isExpanded = expandedMobileModules.includes(key);
                
                return (
                  <div key={key} className="space-y-4">
                    <button
                      onClick={() => toggleMobileModule(key)}
                      className="flex items-center justify-between w-full text-lg font-medium text-white"
                    >
                      <div className="flex items-center">
                        <Icon className="w-5 h-5 mr-2" />
                        {module.title}
                      </div>
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    
                    {isExpanded && (
                      <div className="grid grid-cols-1 gap-3 ml-7 transition-all duration-200">
                        {module.features.map((feature, index) => (
                          <a
                            key={index}
                            href={feature.href}
                            className="flex flex-col p-3 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="text-white font-medium">{feature.name}</span>
                            <span className="text-sm text-zinc-400">{feature.description}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile Auth Buttons */}
              <div className="pt-6 space-y-3">
                <a 
                  href="#" 
                  className="block w-full text-center py-3 px-4 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="block w-full text-center py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default BlanjerHeader;

<style jsx global>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>