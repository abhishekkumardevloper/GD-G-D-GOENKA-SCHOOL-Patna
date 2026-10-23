import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlightText?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  highlightText,
  description,
  centered = false,
  light = false,
  className = '',
}) => {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
          light 
            ? 'bg-gold-500/20 text-gold-400 border border-gold-500/30' 
            : 'bg-gold-100 text-gold-700 border border-gold-300/60'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
          {eyebrow}
        </div>
      )}
      
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
        light ? 'text-white' : 'text-navy-900'
      }`}>
        {title}{' '}
        {highlightText && (
          <span className="text-gold-500 underline decoration-gold-400/40 decoration-wavy underline-offset-4">
            {highlightText}
          </span>
        )}
      </h2>

      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          light ? 'text-slate-300' : 'text-charcoal-500'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};
