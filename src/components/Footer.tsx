import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, ExternalLink, ChevronRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setNewsletterEmail('');
    // Add newsletter subscription logic here
  };

  return (
    <footer className="relative bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,#4ade8066,transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-12 pb-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <span className="text-3xl">🌿</span>
              <h3 className="text-xl font-bold bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">
                Fresh View Flavours
              </h3>
            </motion.div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Cultivating excellence on Mount Kenya's slopes, delivering nature's finest flavors to your table.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="pt-4">
              <h4 className="text-sm font-medium text-green-300 mb-2">Join our newsletter</h4>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-sm placeholder:text-gray-400 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-green-400 hover:text-green-300 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </form>
              {isSubmitted && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-green-300 mt-2"
                >
                  Thanks for subscribing! 🌱
                </motion.p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-green-300 font-medium mb-4">Quick Links</h4>
            <div className="grid gap-2">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <span className="relative">
                      {link.name}
                      <span 
                        className={`absolute -bottom-px left-0 w-full h-px bg-green-400 transform origin-left transition-transform duration-300 ${
                          hoveredLink === link.name ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </span>
                    <ExternalLink 
                      className={`w-3 h-3 ml-2 transition-all duration-300 ${
                        hoveredLink === link.name ? 'opacity-100 translate-x-1' : 'opacity-0 -translate-x-1'
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-green-300 font-medium mb-4">Contact</h4>
            <div className="space-y-4">
              {[
                { Icon: MapPin, text: 'Mia Moja Timau, Mount Kenya', href: '#' },
                { Icon: Phone, text: '+254 720 800 174', href: 'tel:+254720800174' },
                { Icon: Mail, text: 'info@freshviewflavours.co.ke', href: 'mailto:info@freshviewflavours.co.ke' }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-white group p-2 -mx-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <span className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                    <item.Icon className="w-4 h-4" />
                  </span>
                  <span className="text-sm">{item.text}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-green-300 font-medium mb-4">Follow Us</h4>
            <div className="grid grid-cols-3 gap-4">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Instagram, label: 'Instagram' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href="#"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <social.Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <p className="text-xs text-gray-400 flex items-center gap-1">
              © {currentYear} Fresh View Flavours Ltd. Made with 
              <Heart className="w-3 h-3 text-red-400 inline" /> in Kenya
            </p>
            
            <div className="text-xs text-gray-400">
              Registered on the lower slopes of Mount Kenya
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;