import  { useState, useEffect, useMemo, useCallback, KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight, Maximize, X, ArrowLeft, ArrowRight } from 'lucide-react';

const HerbGallery = () => {
  // Generate image paths dynamically
  const generateImagePaths = () => {
    return Array.from({ length: 95 }, (_, i) => 
      `/images/herbs-${i + 1}.jpeg`
    );
  };

  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    index: number;
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  useEffect(() => {
    // Load images when component mounts
    const loadedImages = generateImagePaths();
    setImages(loadedImages);
  }, []);

  // Paginate images
  const paginatedImages = useMemo(() => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    return images.slice(startIndex, startIndex + imagesPerPage);
  }, [currentPage, images]);

  // Calculate total pages
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleImageClick = (image: string, index: number) => {
    // Ensure absolute index across all pages
    const absoluteIndex = (currentPage - 1) * imagesPerPage + index;
    
    setSelectedImage({
      src: image,
      index: absoluteIndex
    });
  };

  const navigateImage = useCallback((direction: 'next' | 'prev') => {
    if (!selectedImage) return;

    let newIndex = direction === 'next' 
      ? selectedImage.index + 1 
      : selectedImage.index - 1;

    // Wrap around if we go beyond the image array
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    setSelectedImage({
      src: images[newIndex],
      index: newIndex
    });

    // Calculate and set the correct page
    const newPage = Math.floor(newIndex / imagesPerPage) + 1;
    setCurrentPage(newPage);
  }, [selectedImage, images, imagesPerPage]);

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    } else if (event.key === 'ArrowRight') {
      navigateImage('next');
    } else if (event.key === 'ArrowLeft') {
      navigateImage('prev');
    }
  };

  return (
    <div 
      className="container mx-auto px-4 py-8 bg-gradient-to-br from-green-50 to-green-100 min-h-screen"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8 tracking-tight">
        Herb Gallery
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {paginatedImages.map((image, index) => (
          <div 
            key={image} 
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleImageClick(image, index)}
          >
            <img
              src={image}
              alt={`Herb image ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <Maximize 
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                size={32} 
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-4">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1}
          className="bg-green-600 text-white p-2 rounded-full disabled:opacity-50 hover:bg-green-700 transition-colors"
        >
          <ChevronLeft />
        </button>
        <span className="text-green-800 font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages}
          className="bg-green-600 text-white p-2 rounded-full disabled:opacity-50 hover:bg-green-700 transition-colors"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Image Button */}
            <button 
              onClick={() => navigateImage('prev')}
              className="absolute -left-12 text-white hover:text-green-300 transition-colors"
            >
              <ArrowLeft size={32} />
            </button>

            {/* Close Button */}
            <button 
              onClick={handleCloseModal}
              className="absolute -top-5 right-0 text-white hover:text-green-300 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Image */}
            <div className="flex-grow">
              <img
                src={selectedImage.src}
                alt="Enlarged herb"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
              <p className="text-center text-white mt-4">
                Image {selectedImage.index + 1} of {images.length}
              </p>
            </div>

            {/* Next Image Button */}
            <button 
              onClick={() => navigateImage('next')}
              className="absolute -right-12 text-white hover:text-green-300 transition-colors"
            >
              <ArrowRight size={32} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HerbGallery;