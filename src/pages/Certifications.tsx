import  { useState } from 'react';
import { ChevronDown, Award, Shield, Clock } from 'lucide-react';

interface Certification {
  name: string;
  shortName: string;
  description: string;
  detailedDescription: string;
  logo: string;
  year: number;
  category: string;
}

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedCert, setExpandedCert] = useState<string | null>(null);

  const certifications: Certification[] = [
    {
      name: 'Agriculture and Food Authority (AFA)',
      shortName: 'AFA',
      description: 'Kenya\'s premier agricultural regulator ensuring quality and safety',
      detailedDescription: 'The Agriculture and Food Authority is Kenya\'s regulatory body that oversees the production, processing, marketing, and distribution of agricultural products. Our certification ensures we meet the highest standards of food safety and agricultural practices.',
      logo: '/certification/afa.jpeg',
      year: 2021,
      category: 'Government'
    },
    {
      name: 'Bureau of Standards & Quality Control',
      shortName: 'BRGS',
      description: 'International quality standards certification for agricultural products',
      detailedDescription: 'This certification demonstrates our commitment to maintaining international quality standards in all our agricultural processes, from cultivation to packaging.',
      logo: '/certification/brgs.png',
      year: 2022,
      category: 'Quality'
    },
    {
      name: 'Sustainable Development Excellence',
      shortName: 'SEDEX',
      description: 'Recognition for sustainable and ethical business practices',
      detailedDescription: 'SEDEX certification validates our commitment to ethical business practices, sustainable agriculture, and responsible supply chain management.',
      logo: '/certification/sedex.png',
      year: 2023,
      category: 'Sustainability'
    },
    {
      name: 'Food Safety Experts Certification',
      shortName: 'FSE',
      description: 'Excellence in food safety and handling practices',
      detailedDescription: 'This certification recognizes our adherence to strict food safety protocols and best practices in handling agricultural products.',
      logo: '/certification/food experts.png',
      year: 2023,
      category: 'Safety'
    },
    {
      name: 'Global GAP Certification',
      shortName: 'Global GAP',
      description: 'International recognition for Good Agricultural Practices',
      detailedDescription: 'Global GAP certification demonstrates our compliance with internationally recognized standards for Good Agricultural Practices, ensuring safe and sustainable food production.',
      logo: '/certification/global gap.png',
      year: 2022,
      category: 'International'
    },
    {
      name: 'Kenya Export Promotion and Health Standards',
      shortName: 'KEPHIS',
      description: 'Certified for international export standards compliance',
      detailedDescription: 'KEPHIS certification ensures our products meet international phytosanitary standards and are suitable for export markets.',
      logo: '/certification/kephis.jpeg',
      year: 2021,
      category: 'Export'
    }
  ];

  const categories = ['All', ...new Set(certifications.map(cert => cert.category))];

  const filteredCertifications = activeCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeCategory);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Our Credentials
          </h2>
          <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Certifications & Memberships
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Committed to Excellence in Agriculture
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-green-600 text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-green-50'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-center mb-8">
                  <div className="relative w-40 h-40">
                    <img
                      src={cert.logo}
                      alt={`${cert.name} Logo`}
                      className="absolute inset-0 w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <span className="px-3 py-1 text-xs font-semibold text-green-600 bg-green-50 rounded-full">
                    {cert.category}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    {cert.shortName}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {expandedCert === cert.name ? cert.detailedDescription : cert.description}
                  </p>
                  <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Since {cert.year}</span>
                  </div>
                </div>
                <button
                  onClick={() => setExpandedCert(expandedCert === cert.name ? null : cert.name)}
                  className="mt-4 w-full flex items-center justify-center text-green-600 hover:text-green-700 transition-colors duration-200"
                >
                  <span className="text-sm mr-1">
                    {expandedCert === cert.name ? 'Show Less' : 'Learn More'}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform duration-200 
                      ${expandedCert === cert.name ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 text-green-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900">Quality Assured</h4>
              <p className="mt-2 text-sm text-gray-600">Meeting international standards for excellence</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900">Safety First</h4>
              <p className="mt-2 text-sm text-gray-600">Rigorous safety protocols at every step</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 text-green-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900">Sustainable Practice</h4>
              <p className="mt-2 text-sm text-gray-600">Committed to environmental stewardship</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;