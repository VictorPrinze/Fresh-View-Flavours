import React, { useState } from 'react';

const Gallery = () => {
  const galleryImages = [
    '/herb-farm-1.jpg',
    '/herb-farm-2.jpg',
    '/herb-farm-3.jpg',
    '/herb-processing.jpg',
    '/cold-storage.jpg',
    '/herb-collection.jpg'
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
      <div className="-m-1 flex flex-wrap md:-m-2">
        {galleryImages.map((image, index) => (
          <div key={index} className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt={`Gallery image ${index + 1}`}
                className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transition-transform duration-300 cursor-pointer"
                src={image}
                onClick={() => setSelectedImage(image)}
              />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-screen">
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;