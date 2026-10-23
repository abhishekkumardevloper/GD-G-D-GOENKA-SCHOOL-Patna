import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, Phone, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] bg-surface-200 flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full text-center bg-white rounded-2xl p-8 sm:p-12 shadow-card border border-slate-200">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-100 text-gold-700 font-extrabold text-2xl font-heading mb-4">
          404
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-heading tracking-tight mb-2">
          Page Not Found
        </h1>

        <p className="text-sm text-charcoal-600 leading-relaxed mb-8">
          The requested page could not be located on the G D Goenka Public School Patna portal. Please check the URL or use the navigation links below to continue.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <Button
            to="/"
            variant="primary-gold"
            size="md"
            leftIcon={<Home className="w-4 h-4 text-navy-950" />}
          >
            Return to Homepage
          </Button>

          <Button
            to="/admissions"
            variant="navy"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4 text-gold-400" />}
          >
            Admissions Enquiry
          </Button>
        </div>

        <div className="pt-6 border-t border-slate-100 text-xs text-charcoal-500 space-y-2">
          <p className="font-semibold text-navy-900 uppercase tracking-wider">Quick Navigation Links:</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-royal-600 font-medium">
            <Link to="/about" className="hover:underline">About Us</Link>
            <span>•</span>
            <Link to="/academics" className="hover:underline">Academics</Link>
            <span>•</span>
            <Link to="/campus-facilities" className="hover:underline">Campus & Aerobay</Link>
            <span>•</span>
            <Link to="/gallery" className="hover:underline">Gallery</Link>
            <span>•</span>
            <Link to="/contact" className="hover:underline">Contact Desk</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
