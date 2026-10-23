import React, { useState } from 'react';
import { Camera, Maximize2, Tag, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { GALLERY_DATA } from '../data/galleryData';
import { GalleryLightbox } from '../components/gallery/GalleryLightbox';
import { GalleryItem } from '../types';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photographs' },
    { id: 'campus', label: 'Campus & Architecture' },
    { id: 'labs', label: 'STEM & Laboratories' },
    { id: 'sports', label: 'Sports & Swimming' },
    { id: 'academics', label: 'Classroom Life' },
    { id: 'celebrations', label: 'Arts & Celebrations' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="bg-surface-200">
      {/* Hero */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Photo Gallery' }]}
            className="text-slate-400 mb-4"
          />
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Visual Chronicles
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mt-2">
              Life at G D Goenka Public School Patna
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              Explore snapshots of our dynamic campus culture—from hands-on Aerobay rocketry experiments to spirited swimming meets and artistic recitals.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'bg-white text-charcoal-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative rounded-xl overflow-hidden cursor-pointer shadow-subtle hover:shadow-elevated border border-slate-200 transition-all duration-300 h-72 sm:h-80 bg-slate-100"
            >
              <img
                src={item.imageUrl}
                alt={item.altText || item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent opacity-85 group-hover:opacity-100 transition-opacity" />

              {/* Hover Badge */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-navy-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-gold-400" />
              </div>

              {/* Captions */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-gold-400">
                  {item.category}
                </span>
                <h4 className="text-base font-bold font-heading text-white line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Admissions CTA */}
        <div className="bg-navy-900 text-white rounded-2xl p-8 sm:p-10 text-center border border-navy-800 mt-12">
          <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2">
            Experience Our Campus in Person
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Words and photographs only capture a fraction of the Goenkan spirit. Schedule a guided tour of our facilities at Saguna More, Khagaul Road, Patna.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/admissions"
              variant="primary-gold"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4 text-navy-950" />}
            >
              Enquire About Admissions
            </Button>
            <Button
              to="/contact"
              variant="navy"
              size="md"
              className="border-slate-600"
            >
              Schedule Campus Visit
            </Button>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};
