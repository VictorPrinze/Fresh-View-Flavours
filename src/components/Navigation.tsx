import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeIcon,
  Squares2X2Icon,
  PhotoIcon,
  CheckBadgeIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Gallery', path: '/gallery', icon: PhotoIcon },
    { name: 'Products', path: '/products', icon: Squares2X2Icon },
    { name: 'Certifications', path: '/certifications', icon: CheckBadgeIcon },
    { name: 'Contact', path: '/contact', icon: EnvelopeIcon },
  ];

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-800 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="transform transition hover:scale-110 block">
              <img
                className="h-16 w-auto object-contain rounded-lg"
                src="/src/assets/logo.jpeg"
                alt="Fresh View Flavours Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group flex items-center space-x-2 text-white hover:text-green-200 px-3 py-2 rounded-lg transition-all duration-300 ease-in-out relative"
                >
                  <item.icon className="h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="font-medium">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-green-200 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform transition duration-300 ease-in-out rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform transition duration-300 ease-in-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-700 rounded-b-lg shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 transition-colors duration-300"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;