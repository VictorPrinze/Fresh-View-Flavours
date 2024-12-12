
interface Product {
  name: string;
  description: string;
  image: string;
  latin_name?: string;
}

interface ProductCategory {
  name: string;
  products: Product[];
}

const Products = () => {
  const productCategories: ProductCategory[] = [
    {
      name: 'Herbs',
      products: [

       
        {
          name: 'Lovage',
          latin_name: 'Levisticum officinale',
          description: 'Fights the Risk of Kidney Stones. Provides Lung Support. Soothes Rough Spots. Promotes Healthy Skin. Fights Harmful Organisms. Eases Digestion & Relieves Gas. Supports Joint Health. Offers Natural Allergy Support and Menstrual Support.',
          image: '/products/lovage.jpg'
        },
        {
          name: 'Sorrel',
          latin_name: 'Rumex acetosa',
          description: 'Rich in vitamin C and antioxidants. Supports immune system function. Aids in digestion. Contains anti-inflammatory properties. Helps maintain healthy blood pressure. Traditional remedy for fever and scurvy.',
          image: '/products/Sorrel.jpg'
        },
        {
          name: 'Lemon Thyme',
          latin_name: 'Thymus citriodorus',
          description: 'Natural antimicrobial and antifungal properties. Supports respiratory health. Helps with coughs and bronchitis. Contains essential oils that aid digestion. Provides immune system support. Offers a unique citrus and thyme flavor.',
          image: '/products/Lemon-Thyme.jpg'
        },
        {
          name: 'Oregano',
          latin_name: 'Origanum vulgare',
          description: 'Powerful antioxidant and antibacterial properties. Supports immune system health. Aids in digestion and gut health. Contains anti-inflammatory compounds. Rich in vitamins K and E. Helps fight respiratory infections.',
          image: '/products/oregano.jpg'
        },
        {
          name: 'Marjoram',
          latin_name: 'Origanum majorana',
          description: 'Aids digestive health. Reduces inflammation. Supports cardiovascular health. Contains antimicrobial properties. Helps relieve stress and anxiety. Traditional remedy for respiratory conditions.',
          image: '/products/marjoram.jpg'
        },
        {
          name: 'Lemongrass',
          latin_name: 'Cymbopogon',
          description: 'Promotes digestive health. Contains antioxidant properties. Helps reduce inflammation. Supports healthy cholesterol levels. Natural fever reducer. Aids in stress relief and sleep quality.',
          image: '/products/lemongrass.jpeg'
        },
        {
          name: 'Coriander',
          latin_name: 'Coriandrum sativum',
          description: 'Supports digestive health. Rich in antioxidants. Helps manage blood sugar levels. Contains antimicrobial properties. Supports heart health. Natural anti-inflammatory properties.',
          image: '/products/Coriander.png'
        },
        {
          name: 'French Tarragon',
          latin_name: 'Artemisia dracunculus',
          description: 'Aids digestion. Reduces inflammation. Supports heart health. Natural sleep aid. Contains essential minerals. Helps regulate blood sugar. Traditional remedy for toothache.',
          image: '/products/french-tarragon.jpg'
        },
        {
          name: 'Lemon Basil',
          latin_name: 'Ocimum × citriodorum',
          description: 'Contains antibacterial properties. Supports digestive health. Reduces stress and anxiety. Rich in antioxidants. Helps with inflammation. Natural immune system booster.',
          image: '/products/lemon-basil.jpg'
        },
        {
          name: 'Dill',
          latin_name: 'Anethum graveolens',
          description: 'Supports digestive health. Contains antimicrobial properties. Rich in antioxidants. Helps manage diabetes. Promotes bone health. Natural breath freshener. Supports restful sleep.',
          image: '/products/Dill-.png'
        },
        {
          name: 'Thyme',
          latin_name: 'Thymus vulgaris',
          description: 'Powerful antimicrobial properties. Supports respiratory health. Boosts immune system. Contains vitamin C and A. Helps with coughs and bronchitis. Natural antifungal properties.',
          image: '/products/Thyme-1.jpg'
        },
        {
          name: 'Chives',
          latin_name: 'Allium schoenoprasum',
          description: 'Rich in vitamins A and K. Supports bone health. Contains anticancer properties. Aids in digestive health. Natural antibacterial properties. Helps boost immune system.',
          image: '/products/chives.jpg'
        },
        {
          name: 'Parsley',
          latin_name: 'Petroselinum crispum',
          description: 'Rich in vitamins A, C, and K. Supports kidney function. Contains anti-inflammatory properties. Helps with bone health. Natural breath freshener. Aids in digestion.',
          image: '/products/Parsley.jpg'
        },
        {
          name: 'Fresh Sage',
          latin_name: 'Salvia officinalis',
          description: 'Improves brain function and memory. Contains antimicrobial properties. Supports oral health. Helps lower blood sugar and cholesterol. Rich in antioxidants. Traditional remedy for digestive issues.',
          image: '/products/Fresh-Sage-Leaves.jpg'
        },
        {
          name: 'Rosemary',
          latin_name: 'Rosmarinus officinalis',
          description: 'Improves memory and concentration. Contains anti-inflammatory compounds. Supports hair growth. Helps with digestion. Rich in antioxidants. Natural antimicrobial properties.',
          image: '/products/Rosemary-sprig.jpg'
        },
         {
          name: 'Chillies',
          latin_name: 'Capsicum annuum',
          description: 'Rich in capsaicin with powerful anti-inflammatory properties. Boosts metabolism and aids weight management. Contains high levels of vitamins C and A. Supports heart health and circulation. Natural pain reliever. Helps boost immune system. May help reduce blood sugar levels. Promotes digestive health.',
          image: '/products/chillies.jpeg'
        },
      ]
    },
    // {
    //   name: 'Coming Soon',
    //   products: [
    //     {
    //       name: 'Seasonal Vegetables',
    //       description: 'We\'re expanding our range to include locally-sourced, sustainably-grown seasonal vegetables from Mount Kenya region.',
    //       image: '/products/placeholder.jpg'
    //     }
    //   ]
    // }
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
            Discover our range of premium, sustainably grown herbs with exceptional flavor and medicinal properties.
          </p>
        </div>

        {productCategories.map((category) => (
          <div key={category.name} className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">{category.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product) => (
                <div 
                  key={product.name} 
                  className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
                >
                  <div className="relative h-64">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h4>
                    {product.latin_name && (
                      <p className="text-sm text-gray-600 italic mb-3">{product.latin_name}</p>
                    )}
                    <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
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