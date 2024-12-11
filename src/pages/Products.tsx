import React from 'react';

const Products = () => {
  const productCategories = [
    {
      name: 'Herbs',
      products: [
        { name: 'Lemon Grass', description: 'Fresh, aromatic lemon grass', image: '/lemongrass.jpg' },
        { name: 'Mint', description: 'Cool and refreshing mint leaves', image: '/mint.jpg' },
        { name: 'Oregano', description: 'Flavorful oregano for culinary use', image: '/oregano.jpg' },
        { name: 'Rosemary', description: 'Fragrant rosemary herb', image: '/rosemary.jpg' },
        { name: 'Thyme', description: 'Classic thyme for cooking', image: '/thyme.jpg' }
      ]
    },
    {
      name: 'Vegetables',
      products: [
        { name: 'Coming Soon', description: 'Our vegetable range is expanding', image: '/placeholder.jpg' }
      ]
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Products</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Fresh Herbs from Mount Kenya
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover our range of premium, sustainably grown herbs with exceptional flavor and health benefits.
          </p>
        </div>

        {productCategories.map((category) => (
          <div key={category.name} className="mt-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{category.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.products.map((product) => (
                <div 
                  key={product.name} 
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h4>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;