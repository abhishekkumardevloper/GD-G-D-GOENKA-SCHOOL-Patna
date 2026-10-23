import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../../types';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 select-none animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="flex items-center justify-between text-white z-10 py-2 border-b border-navy-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-gold-400 font-mono">
            {currentIndex + 1} / {items.length}
          </span>
          <span className="hidden sm:inline text-xs uppercase px-2.5 py-0.5 rounded-full bg-navy-800 border border-navy-700 text-slate-300">
            {currentItem.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-navy-900/80 hover:bg-navy-800 text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            aria-label="Close Lightbox (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center my-2 max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-navy-900/80 hover:bg-gold-500 hover:text-navy-950 text-white transition-colors shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          aria-label="Previous image (Left arrow)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Center Image */}
        <div className="relative max-w-5xl max-h-full flex flex-col items-center justify-center">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.altText || currentItem.title}
            className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-navy-800"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-navy-900/80 hover:bg-gold-500 hover:text-navy-950 text-white transition-colors shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          aria-label="Next image (Right arrow)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption */}
      <div
        className="text-center text-white z-10 py-3 border-t border-navy-800/80 max-w-3xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="text-base sm:text-lg font-bold font-heading text-white">
          {currentItem.title}
        </h4>
        {currentItem.caption && (
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {currentItem.caption}
          </p>
        )}
      </div>
    </div>
  );
};
