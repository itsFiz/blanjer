"use client"

import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Users, 
  CreditCard, 
  BarChart3, 
  Bell, 
  Settings, 
  Menu, 
  X,
  LogOut
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
  DropdownLabel,
  Avatar,
  Badge
} from './ui/avatar';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Navigation items configuration
  const navigationItems = [
    { name: 'Dashboard', icon: Home, href: '#', notifications: 0 },
    { name: 'Groups', icon: Users, href: '#', notifications: 2 },
    { name: 'Expenses', icon: CreditCard, href: '#', notifications: 0 },
    { name: 'Analytics', icon: BarChart3, href: '#', notifications: 0 },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 
      'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              Blanjer
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative flex items-center text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                <item.icon className="w-5 h-5 mr-2" />
                <span>{item.name}</span>
                {item.notifications > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {item.notifications}
                  </Badge>
                )}
              </a>
            ))}
          </div>

          {/* Right Section - Notifications and Profile */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Notifications */}
            <DropdownMenu 
              align="right"
              trigger={
                <button className="relative">
                  <Bell className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" />
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    3
                  </span>
                </button>
              }
            >
              <DropdownLabel>Notifications</DropdownLabel>
              <DropdownDivider />
              <div className="max-h-72 overflow-y-auto">
                {[1, 2, 3].map((_, i) => (
                  <DropdownItem key={i} className="flex items-start">
                    <div className="flex-1">
                      <p className="text-sm font-medium">New expense added</p>
                      <p className="text-xs text-gray-500">Sarah added "Groceries" - $54.30</p>
                    </div>
                  </DropdownItem>
                ))}
              </div>
            </DropdownMenu>

            {/* Profile Dropdown */}
            <DropdownMenu
              align="right"
              trigger={
                <button className="flex items-center">
                  <Avatar
                    src="/api/placeholder/32/32"
                    alt="Profile"
                    fallback="JD"
                    size="sm"
                  />
                </button>
              }
            >
              <DropdownLabel>My Account</DropdownLabel>
              <DropdownDivider />
              <DropdownItem className="flex items-center">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownItem>
              <DropdownItem className="flex items-center text-red-600">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </DropdownItem>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-900/20"
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.name}</span>
                {item.notifications > 0 && (
                  <Badge variant="secondary" className="ml-auto">
                    {item.notifications}
                  </Badge>
                )}
              </a>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center px-3">
                <Avatar
                  src="/api/placeholder/32/32"
                  alt="Profile"
                  fallback="JD"
                  size="sm"
                />
                <div className="ml-3">
                  <div className="text-sm font-medium">John Doe</div>
                  <div className="text-xs text-gray-500">john@example.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;