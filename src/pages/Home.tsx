import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/public/images/herbs-1.jpeg',
    '/public/images/herbs-2.jpeg',
    '/public/images/herbs-4.jpeg'
  ];

  const products = [
    { name: 'Lemon Grass', icon: '🌿' },
    { name: 'Mint', icon: '🌱' },
    { name: 'Oregano', icon: '🌿' },
    { name: 'Rosemary', icon: '🌱' },
    { name: 'Sage', icon: '🌿' },
    { name: 'Thyme', icon: '🌱' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="flex-grow">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 w-full h-full transition-transform duration-1000 ease-out transform scale-105"
            style={{
              backgroundImage: `url(${heroImages[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold text-white mb-6">
                Fresh View <span className="text-green-400">Flavours</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Located on the lower slopes of Mount Kenya, we bring you the finest herbs with exceptional taste and health benefits. We do farming, you enjoy the flavour.
              </p>
              <div className="flex space-x-4">
                <Link to="/products" className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-300 transform hover:scale-105">
                  Explore Our Products
                </Link>
                <Link to="/contact" className="px-8 py-4 bg-white hover:bg-gray-100 text-green-600 rounded-lg transition duration-300 transform hover:scale-105">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sustainable Farming',
                description: 'We practice environmentally responsible agriculture, preserving Mount Kenya\'s heritage.',
                icon: '🌱'
              },
              {
                title: 'Quality Excellence',
                description: 'We strive for excellence in all our undertakings to ensure customer satisfaction.',
                icon: '⭐'
              },
              {
                title: 'Global Impact',
                description: 'Connecting communities worldwide through our premium herb products.',
                icon: '🌍'
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl transform transition duration-500 hover:scale-105">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Preview */}
      <div className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center transform transition duration-500 hover:scale-105 hover:shadow-lg">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="font-medium">{product.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="inline-block px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-300">
              View All Products
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative py-20 bg-green-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-pattern transform rotate-45" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Experience Our Flavours?</h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
            Join us in our journey of bringing the finest herbs from Mount Kenya to your kitchen.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-green-600 rounded-lg transition duration-300 transform hover:scale-105">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;