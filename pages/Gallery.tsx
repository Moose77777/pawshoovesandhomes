import React, { useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import SEO from '../components/SEO';
import { generateReviewSchema } from '../utils/schema';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Horse' | 'Dog' | 'Cat' | 'Other'>('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  // Close lightbox if filter changes to prevent index mismatch
  useEffect(() => {
    setSelectedImageIndex(null);
  }, [filter]);

  // Lightbox navigation handlers
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="Photo Gallery | Happy Pets in Grantham"
        description="See our happy clients! A gallery of dogs, horses, and cats enjoying our professional pet sitting and walking services across Lincolnshire."
        canonical="/gallery"
        schema={generateReviewSchema()}
      />

      {/* Header */}
      <div className="bg-brand-900 text-white py-20 px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Happy Clients</h1>
        <p className="text-brand-200 text-lg max-w-2xl mx-auto font-light">
          A collection of the wonderful personalities we've had the pleasure of caring for in Grantham and beyond.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Horse', 'Dog', 'Cat'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as any)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === category
                  ? 'bg-brand-600 text-white shadow-lg transform scale-105'
                  : 'bg-stone-100 text-stone-600 hover:bg-brand-100 hover:text-brand-800'
              }`}
            >
              {category === 'All' ? 'Show All' : `${category}s`}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="break-inside-avoid mb-6 group relative cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-stone-200"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto min-h-[200px] object-cover transform group-hover:scale-105 transition-transform duration-700 block"
                loading="lazy"
                decoding="async"
                width="400"
                height="300"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0.5'; // Dim broken images
                  (e.target as HTMLImageElement).parentElement?.classList.add('bg-stone-300');
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="text-white w-10 h-10 drop-shadow-md" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-bold tracking-wide">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-stone-500">
            <p>No photos found in this category yet.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X size={32} />
          </button>

          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4 hidden md:block"
            onClick={handlePrev}
          >
            <ChevronLeft size={48} />
          </button>

          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={filteredImages[selectedImageIndex].src} 
              alt={filteredImages[selectedImageIndex].alt} 
              className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl bg-stone-800"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-lg font-medium">{filteredImages[selectedImageIndex].alt}</p>
              <p className="text-white/50 text-sm mt-1">
                {selectedImageIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4 hidden md:block"
            onClick={handleNext}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;