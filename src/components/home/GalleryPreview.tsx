import React, { useState } from 'react';
import { ArrowRight, Maximize2, Camera } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { GALLERY_DATA } from '../../data/galleryData';
import { GalleryLightbox } from '../gallery/GalleryLightbox';

export const GalleryPreview: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Take 6 featured photos for the home preview
  const previewItems = GALLERY_DATA.slice(0, 6);

  const handleOpen = (idx: number) => {
    setLightboxIndex(idx);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % previewItems.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + previewItems.length) % previewItems.length);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            eyebrow="Campus Life in Frames"
            title="Moments of Discovery &"
            highlightText="Joyful Learning"
            description="Witness the vibrancy of our classrooms, science experiments, sports training, and creative performances."
            className="mb-0"
          />
          <div className="mt-4 md:mt-0">
            <Button
              to="/gallery"
              variant="navy"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4 text-gold-400" />}
            >
              View Full Gallery
            </Button>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item, idx) => {
            const isTall = idx === 0 || idx === 3;
            return (
              <div
                key={item.id}
                onClick={() => handleOpen(idx)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer shadow-subtle hover:shadow-card border border-slate-200 transition-all duration-300 ${
                  isTall ? 'h-80 sm:h-96' : 'h-80'
                }`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.altText || item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-navy-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-gold-400" />
                </div>

                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] uppercase tracking-wider text-gold-400 font-semibold">
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
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          items={previewItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};
