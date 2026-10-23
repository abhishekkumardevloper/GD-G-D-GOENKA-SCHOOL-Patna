import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs sm:text-sm text-charcoal-500 py-3 ${className}`}>
      <ol className="inline-flex items-center space-x-1.5 md:space-x-2 flex-wrap">
        <li className="inline-flex items-center">
          <Link to="/" className="inline-flex items-center hover:text-navy-900 transition-colors">
            <Home className="w-3.5 h-3.5 mr-1 text-gold-500" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center">
              <ChevronRight className="w-3.5 h-3.5 mx-1 text-charcoal-400 shrink-0" />
              {isLast || !item.href ? (
                <span className="font-semibold text-navy-900" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.href} className="hover:text-navy-900 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
