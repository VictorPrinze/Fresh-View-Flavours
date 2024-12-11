import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { 
  HomeIcon, 
  Squares2X2Icon, 
  PhotoIcon, 
  CheckBadgeIcon,
  EnvelopeIcon,
  ChevronDownIcon 
} from '@heroicons/react/24/outline';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const productCategories = [
    { name: 'Herbs', items: ['Lemon Grass', 'Mint', 'Oregano', 'Rosemary', 'Thyme'] },
    { name: 'Vegetables', items: ['Coming Soon'] }
  ];

  const navItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Gallery', path: '/gallery', icon: PhotoIcon },
    { name: 'Certifications', path: '/certifications', icon: CheckBadgeIcon },
    { name: 'Contact', path: '/contact', icon: EnvelopeIcon }
  ];

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-800 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Modified Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="transform transition hover:scale-110 block">
              <img 
                className="h-16 w-auto object-contain" 
                src="/src/assets/logo.jpeg" 
                alt="Fresh View Flavours Logo" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {/* Left side navigation items */}
            <div className="flex items-center space-x-8">
              {navItems.slice(0, 2).map((item) => (
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

              {/* Products Dropdown - Centered */}
              <Menu as="div" className="relative inline-block text-left">
                {({ open }) => (
                  <>
                    <Menu.Button className="group flex items-center text-white hover:text-green-200 px-3 py-2 rounded-lg transition-all duration-300 ease-in-out">
                      <Squares2X2Icon className="h-5 w-5 mr-2 opacity-70 group-hover:opacity-100" />
                      Products
                      <ChevronDownIcon
                        className={`ml-1 h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </Menu.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="absolute right-0 mt-2 w-64 origin-top-right bg-white divide-y divide-gray-100 rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"
                      >
                        {productCategories.map((category) => (
                          <div key={category.name} className="px-1 py-1">
                            <Menu.Item disabled>
                              {() => (
                                <div className="text-green-700 font-bold px-3 py-2 text-sm uppercase tracking-wider border-b">
                                  {category.name}
                                </div>
                              )}
                            </Menu.Item>
                            {category.items.map((item) => (
                              <Menu.Item key={item}>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active ? 'bg-green-100 text-green-900' : 'text-gray-900'
                                    } group flex w-full items-center px-3 py-2 text-sm hover:bg-green-50 transition-colors`}
                                  >
                                    {item}
                                  </button>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>

              {/* Right side navigation items */}
              {navItems.slice(2).map((item) => (
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-700 rounded-b-lg shadow-lg">
              {[...navItems, { name: 'Products', path: '#', icon: Squares2X2Icon }].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white hover:bg-green-600 block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
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