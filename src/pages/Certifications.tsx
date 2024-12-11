import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      name: 'Agriculture Food Authority',
      description: 'Registered and approved for agricultural production and marketing',
      logo: '/afa-logo.png',
      year: 2018
    },
    {
      name: 'Sustainable Agriculture Certification',
      description: 'Recognized for environmentally responsible farming practices',
      logo: '/sustainability-logo.png',
      year: 2020
    }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Credentials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Certifications & Accreditations
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our commitment to quality, sustainability, and best agricultural practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div 
              key={cert.name} 
              className="bg-white shadow-lg rounded-lg p-8 flex items-center space-x-6 transform transition duration-300 hover:scale-105"
            >
              <div className="flex-shrink-0">
                <img 
                  src={cert.logo} 
                  alt={`${cert.name} Logo`} 
                  className="h-24 w-24 object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 mb-2">{cert.description}</p>
                <span className="text-green-600 font-medium">Certified Since {cert.year}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Commitment</h4>
          <p className="max-w-3xl mx-auto text-gray-600">
            Fresh View Flavours is dedicated to maintaining the highest standards of agricultural production. 
            Our certifications reflect our ongoing commitment to quality, sustainability, and environmental conservation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;