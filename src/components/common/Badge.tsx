import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'navy' | 'royal' | 'emerald' | 'slate';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs sm:text-sm",
  };

  const variantStyles = {
    gold: "bg-gold-100 text-gold-700 border border-gold-300",
    navy: "bg-navy-800 text-gold-400 border border-navy-700",
    royal: "bg-royal-100 text-royal-700 border border-royal-200",
    emerald: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    slate: "bg-slate-100 text-slate-700 border border-slate-200",
  };

  return (
    <span className={`inline-flex items-center font-medium rounded-full ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
