import React from 'react';
import { Link } from 'react-router-dom';

interface SchoolLogoProps {
  light?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  light = false,
  className = '',
  size = 'md',
}) => {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg p-0.5 transition-all ${className}`}
      aria-label="G D Goenka Public School Patna Home"
    >
      {/* High-Contrast Emblem Shield Container */}
      <div
        className={`relative shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 border-2 border-gold-400 shadow-md transition-transform duration-200 group-hover:scale-105 ${
          size === 'sm'
            ? 'w-10 h-10'
            : size === 'lg'
            ? 'w-14 h-14 sm:w-16 sm:h-16'
            : 'w-11 h-11 sm:w-12 sm:h-12'
        }`}
      >
        {/* Vector GD Goenka Insignia Crest */}
        <svg
          viewBox="0 0 64 64"
          className={`${
            size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8'
          } text-gold-400 drop-shadow-sm`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Shield Path */}
          <path
            d="M32 5 L55 13 V33 C55 45.5 45 55.5 32 60 C19 55.5 9 45.5 9 33 V13 Z"
            fill="#102747"
            stroke="#C7A45A"
            strokeWidth="2.5"
          />
          {/* Inner Decorative Stroke */}
          <path
            d="M32 10 L50 16 V32 C50 42.5 42 50.8 32 54.8 C22 50.8 14 42.5 14 32 V16 Z"
            stroke="#C7A45A"
            strokeOpacity="0.45"
            strokeWidth="1.2"
          />
          {/* Golden Soaring Falcon / GD Emblem */}
          <path
            d="M32 16 C34 20 40 21 44 19 C41 24 35 25 32 28 C29 25 23 24 20 19 C24 21 30 20 32 16 Z"
            fill="#D8B86E"
          />
          {/* Monogram GD Letters */}
          <text
            x="32"
            y="43"
            fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
            fontSize="16"
            fontWeight="800"
            fill="#C7A45A"
            textAnchor="middle"
            letterSpacing="1"
          >
            GD
          </text>
        </svg>

        {/* Small gold corner star */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold-400 border border-navy-950 animate-pulse" />
      </div>

      {/* Typography & Sub-branding */}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span
            className={`font-heading font-extrabold tracking-tight leading-none ${
              size === 'sm'
                ? 'text-sm sm:text-base'
                : size === 'lg'
                ? 'text-xl sm:text-2xl'
                : 'text-base sm:text-lg lg:text-xl'
            } ${light ? 'text-white' : 'text-navy-950'} group-hover:text-royal-600 transition-colors`}
          >
            G D GOENKA SCHOOL
          </span>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-widest bg-gold-500 text-navy-950 shadow-xs">
            Patna
          </span>
        </div>

        <div className="flex items-center gap-1.5 mt-1">
          <span
            className={`text-[10px] sm:text-[11px] font-bold tracking-wider uppercase ${
              light ? 'text-gold-300' : 'text-royal-700'
            }`}
          >
            Under Aegis of GD Goenka Group
          </span>
          <span
            className={`hidden sm:inline text-[9px] ${
              light ? 'text-slate-400' : 'text-charcoal-400'
            }`}
          >
            •
          </span>
          <span
            className={`hidden sm:inline text-[10px] font-semibold tracking-wide ${
              light ? 'text-slate-300' : 'text-charcoal-600'
            }`}
          >
            CBSE Framework
          </span>
        </div>
      </div>
    </Link>
  );
};
