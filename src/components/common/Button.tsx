import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary-gold' | 'royal' | 'navy' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary-gold',
  size = 'md',
  to,
  href,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none cursor-pointer";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs sm:text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm sm:text-base gap-2",
    lg: "px-6 py-3 text-base sm:text-lg gap-2.5 shadow-md",
  };

  const variantStyles = {
    'primary-gold': "bg-gold-500 hover:bg-gold-600 active:bg-gold-700 text-navy-950 font-bold shadow-subtle hover:shadow-gold-glow focus-visible:ring-gold-500",
    'royal': "bg-royal-600 hover:bg-royal-700 active:bg-navy-800 text-white shadow-subtle hover:shadow-elevated focus-visible:ring-royal-600",
    'navy': "bg-navy-800 hover:bg-navy-900 active:bg-navy-950 text-white shadow-subtle hover:shadow-elevated focus-visible:ring-navy-800 border border-navy-700",
    'outline': "bg-transparent border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white focus-visible:ring-navy-800",
    'ghost': "bg-transparent text-charcoal-700 hover:bg-surface-300 hover:text-navy-900 focus-visible:ring-charcoal-500",
    'white': "bg-white hover:bg-surface-100 text-navy-900 shadow-card hover:shadow-elevated focus-visible:ring-white border border-slate-200",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button disabled={disabled || isLoading} className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
