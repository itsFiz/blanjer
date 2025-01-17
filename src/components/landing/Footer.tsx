import React from 'react';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Phone,
  Facebook,
  Instagram,
  ExternalLink
} from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" }
];

const footerLinks = {
  Product: [
    "Features",
    "Pricing",
    "Integrations",
    "API Documentation",
    "Release Notes",
  ],
  Company: [
    "About Us",
    "Careers",
    "Press Kit",
    "Contact",
    "Blog"
  ],
  Resources: [
    "Documentation",
    "Help Center",
    "Community",
    "Partners",
    "Status"
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "GDPR",
    "Security"
  ]
};

const Footer = () => {
  return (
    
    <footer className="bg-gray-950 text-gray-400 py-16 border-t border-gray-800">
      
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div 
            className="col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-200 mb-4">Blanjer</h3>
            <p className="text-gray-400 mb-6">
              Making group finances simple and social. Join thousands of users managing shared expenses effortlessly.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], columnIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * columnIndex }}
            >
              <h4 className="text-lg font-semibold text-gray-200 mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <motion.li 
                    key={link}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors inline-flex items-center gap-1">
                      {link}
                      {link.includes('Documentation') && (
                        <ExternalLink className="w-3 h-3" />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

       

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <img 
                src="/api/placeholder/32/32" 
                alt="Blanjer Logo" 
                className="w-8 h-8"
              />
              <p>© 2024 Blanjer. All rights reserved.</p>
            </div>
            
            <div className="flex gap-8">
              <motion.a 
                href="#"
                className="text-gray-400 hover:text-violet-400 transition-colors"
                whileHover={{ x: 2 }}
              >
                Terms
              </motion.a>
              <motion.a 
                href="#"
                className="text-gray-400 hover:text-violet-400 transition-colors"
                whileHover={{ x: 2 }}
              >
                Privacy
              </motion.a>
              <motion.a 
                href="#"
                className="text-gray-400 hover:text-violet-400 transition-colors"
                whileHover={{ x: 2 }}
              >
                Cookies
              </motion.a>
            </div>

            {/* Contact Info */}
            <div className="flex gap-6">
              <a href="mailto:hi@blanjer.app" className="flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>Email us</span>
              </a>
              <a href="tel:+601113025474" className="flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>Call us</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;