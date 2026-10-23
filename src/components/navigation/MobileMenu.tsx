import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, X, ArrowRight, Sparkles, Calendar, ShieldCheck, Compass, Award, Heart, Building, BookOpen, GraduationCap } from 'lucide-react';
import { NAVIGATION_ITEMS, SCHOOL_CONFIG } from '../../data/schoolConfig';
import { SchoolLogo } from './SchoolLogo';
import { Button } from '../common/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'About Us': false,
    'Academics': false,
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleSection = (label: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const getSubIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-4 h-4 text-royal-600" />;
      case 'Award': return <Award className="w-4 h-4 text-gold-600" />;
      case 'Heart': return <Heart className="w-4 h-4 text-rose-600" />;
      case 'Building': return <Building className="w-4 h-4 text-royal-600" />;
      case 'BookOpen': return <BookOpen className="w-4 h-4 text-royal-600" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-gold-600" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4 text-royal-600" />;
      default: return <ArrowRight className="w-3.5 h-3.5 text-charcoal-400" />;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-full w-full sm:w-[420px] bg-white shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
        <div>
          {/* Top Header inside Drawer */}
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-surface-100">
            <SchoolLogo size="sm" />
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-charcoal-500 hover:text-navy-900 hover:bg-surface-300 transition-colors border border-slate-200"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Admissions Announcement Banner inside Mobile Drawer */}
          <div className="mx-4 mt-4 p-3 rounded-lg bg-gradient-to-r from-navy-950 to-navy-900 text-white flex items-center justify-between shadow-subtle border border-gold-500/30">
            <div>
              <div className="text-[11px] font-bold text-gold-400 uppercase tracking-wider">
                Admissions 2025–26 & 2026–27
              </div>
              <div className="text-xs text-slate-300 font-medium">
                Playgroup to Class VIII
              </div>
            </div>
            <Link
              to="/admissions"
              onClick={onClose}
              className="px-2.5 py-1 rounded bg-gold-500 text-navy-950 text-xs font-bold shadow-sm"
            >
              Enquire
            </Link>
          </div>

          {/* Navigation Items List */}
          <div className="px-4 py-4 space-y-1">
            {NAVIGATION_ITEMS.map((item) => {
              const hasChildren = item.children && item.children.length > 0;

              if (!hasChildren) {
                return (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-bold transition-colors ${
                        isActive
                          ? 'bg-royal-50 text-royal-700 font-bold border-l-4 border-royal-600'
                          : 'text-charcoal-800 hover:bg-surface-200'
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-charcoal-400" />
                  </NavLink>
                );
              }

              const isExpanded = !!expandedSections[item.label];

              return (
                <div key={item.label} className="border-b border-slate-100 py-1">
                  <button
                    type="button"
                    onClick={() => toggleSection(item.label)}
                    className="w-full flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-bold text-charcoal-800 hover:bg-surface-200 transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-gold-500' : 'text-charcoal-400'
                      }`}
                    />
                  </button>

                  {/* Accordion Children with Icons */}
                  {isExpanded && (
                    <div className="pl-2 pr-1 py-1 space-y-1 bg-surface-100 rounded-lg my-1">
                      {item.children?.map((child) => (
                        <NavLink
                          key={child.href}
                          to={child.href}
                          onClick={onClose}
                          className={({ isActive }) =>
                            `flex items-start gap-2.5 px-3 py-2.5 text-xs rounded-md transition-colors ${
                              isActive
                                ? 'bg-royal-100/80 text-royal-700 font-bold'
                                : 'text-charcoal-700 hover:text-navy-900 hover:bg-surface-200'
                            }`
                          }
                        >
                          <span className="mt-0.5">{getSubIcon(child.icon)}</span>
                          <div>
                            <div className="font-bold text-navy-900">{child.label}</div>
                            {child.subtext && (
                              <div className="text-[11px] text-charcoal-500 mt-0.5 font-normal">
                                {child.subtext}
                              </div>
                            )}
                          </div>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA & Direct Contacts */}
        <div className="p-4 bg-surface-100 border-t border-slate-200 space-y-3">
          <Button
            to="/admissions"
            variant="primary-gold"
            size="md"
            className="w-full justify-center shadow-gold-glow font-bold"
            onClick={onClose}
            leftIcon={<Sparkles className="w-4 h-4 text-navy-950" />}
          >
            Admissions Enquiry Form
          </Button>

          <div className="pt-2 text-xs text-charcoal-700 space-y-2">
            <a
              href={`tel:${SCHOOL_CONFIG.phoneNumbers.primary}`}
              className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200 hover:border-gold-400 font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-gold-600" />
              <span>Call: {SCHOOL_CONFIG.phoneNumbers.displayPrimary}</span>
            </a>

            <a
              href={`mailto:${SCHOOL_CONFIG.email}`}
              className="flex items-center gap-2.5 p-2 rounded-lg bg-white border border-slate-200 hover:border-gold-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-gold-600" />
              <span className="truncate">{SCHOOL_CONFIG.email}</span>
            </a>

            <div className="flex items-center gap-2.5 p-2 text-charcoal-500 text-[11px]">
              <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
              <span>Saguna More, Khagaul Road, Patna</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
