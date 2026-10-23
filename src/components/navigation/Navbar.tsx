import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { ChevronDown, Sparkles, Compass, Award, Heart, Building, BookOpen, GraduationCap, ArrowRight, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import { NAVIGATION_ITEMS, NavigationItem } from '../../data/schoolConfig';
import { SchoolLogo } from './SchoolLogo';
import { Button } from '../common/Button';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for shadow enhancement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Click outside listener for dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const getDropdownIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-4 h-4 text-royal-600" />;
      case 'Award': return <Award className="w-4 h-4 text-gold-600" />;
      case 'Heart': return <Heart className="w-4 h-4 text-rose-600" />;
      case 'Building': return <Building className="w-4 h-4 text-royal-600" />;
      case 'BookOpen': return <BookOpen className="w-4 h-4 text-royal-600" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-gold-600" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4 text-royal-600" />;
      default: return <ArrowRight className="w-4 h-4 text-charcoal-400" />;
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white/98 backdrop-blur-md transition-all duration-300 border-b ${
          scrolled
            ? 'shadow-elevated border-slate-200/90 py-1'
            : 'shadow-subtle border-slate-200 py-1.5'
        }`}
      >
        {/* Top Gold Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-400 via-royal-600 to-gold-500 opacity-90" />

        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-20 gap-2">
            {/* School Crest & Logo */}
            <div className="shrink-0">
              <SchoolLogo size={scrolled ? 'sm' : 'md'} />
            </div>

            {/* Desktop Navigation Links */}
            <nav
              ref={dropdownRef}
              className="hidden lg:flex items-center space-x-0.5 xl:space-x-1"
              aria-label="Main Navigation"
            >
              {NAVIGATION_ITEMS.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isDropdownOpen = openDropdown === item.label;

                if (!hasChildren) {
                  return (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className={({ isActive }) =>
                        `relative px-3 py-2 rounded-lg text-[13px] xl:text-sm font-bold tracking-tight transition-all duration-200 ${
                          isActive
                            ? 'text-royal-600 bg-royal-50/90 shadow-subtle'
                            : 'text-charcoal-900 hover:text-navy-950 hover:bg-slate-100'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{item.label}</span>
                          {isActive && (
                            <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold-500 rounded-full" />
                          )}
                        </>
                      )}
                    </NavLink>
                  );
                }

                // Dropdown link container
                const isCurrentGroupActive = item.children?.some(
                  (c) => location.pathname === c.href
                );

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      onClick={() => handleDropdownToggle(item.label)}
                      aria-expanded={isDropdownOpen}
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] xl:text-sm font-bold tracking-tight transition-all duration-200 cursor-pointer ${
                        isCurrentGroupActive
                          ? 'text-royal-600 bg-royal-50/90 shadow-subtle'
                          : 'text-charcoal-900 hover:text-navy-950 hover:bg-slate-100'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180 text-gold-500' : 'text-charcoal-500'
                        }`}
                      />
                      {isCurrentGroupActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold-500 rounded-full" />
                      )}
                    </button>

                    {/* Rich Mega-Dropdown with Extra Component */}
                    {isDropdownOpen && (
                      <div
                        className="absolute left-0 mt-1 w-[620px] bg-white rounded-2xl shadow-elevated border border-slate-200/90 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150 grid grid-cols-12 gap-4"
                        role="menu"
                      >
                        {/* Left Column: Menu Links (7 cols) */}
                        <div className="col-span-7 space-y-1">
                          <div className="text-[11px] font-extrabold uppercase tracking-wider text-charcoal-400 px-3 py-1 mb-1 border-b border-slate-100 flex items-center justify-between">
                            <span>{item.label} Directory</span>
                            <span className="text-gold-600 font-semibold lowercase">gdgoenkapatna</span>
                          </div>

                          {item.children?.map((child) => (
                            <NavLink
                              key={child.href}
                              to={child.href}
                              role="menuitem"
                              className={({ isActive }) =>
                                `flex items-start gap-3 p-2.5 rounded-xl text-xs transition-all ${
                                  isActive
                                    ? 'bg-royal-50/90 text-royal-700 font-semibold border-l-4 border-royal-600 shadow-subtle'
                                    : 'text-charcoal-800 hover:bg-surface-100 hover:text-navy-900'
                                }`
                              }
                            >
                              <div className="p-2 rounded-lg bg-surface-200 shrink-0 mt-0.5">
                                {getDropdownIcon(child.icon)}
                              </div>
                              <div className="flex-1">
                                <div className="font-bold text-sm text-navy-900 leading-snug">
                                  {child.label}
                                </div>
                                {child.subtext && (
                                  <div className="text-[11px] text-charcoal-500 font-normal mt-0.5 leading-tight">
                                    {child.subtext}
                                  </div>
                                )}
                              </div>
                            </NavLink>
                          ))}
                        </div>

                        {/* Right Column: Extra Featured Component Card (5 cols) */}
                        <div className="col-span-5 bg-surface-100 rounded-xl p-3.5 border border-slate-200/80 flex flex-col justify-between">
                          {item.extraCard ? (
                            <>
                              <div>
                                {item.extraCard.image && (
                                  <div className="relative h-28 rounded-lg overflow-hidden mb-2.5 bg-slate-200">
                                    <img
                                      src={item.extraCard.image}
                                      alt={item.extraCard.title}
                                      className="w-full h-full object-cover"
                                    />
                                    {item.extraCard.badge && (
                                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-navy-950/90 text-gold-400 backdrop-blur-sm">
                                        {item.extraCard.badge}
                                      </div>
                                    )}
                                  </div>
                                )}
                                <h4 className="text-sm font-bold text-navy-900 font-heading mb-1">
                                  {item.extraCard.title}
                                </h4>
                                <p className="text-[11px] text-charcoal-600 leading-relaxed">
                                  {item.extraCard.subtitle}
                                </p>
                              </div>

                              <div className="pt-3 border-t border-slate-200/70 mt-2">
                                <Link
                                  to={item.extraCard.buttonHref}
                                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-navy-900 hover:bg-royal-600 text-white text-xs font-bold transition-colors shadow-subtle"
                                >
                                  <span>{item.extraCard.buttonText}</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            </>
                          ) : (
                            <div className="p-4 text-center">
                              <h5 className="font-bold text-sm text-navy-900">G D Goenka Public School Patna</h5>
                              <p className="text-xs text-charcoal-500 mt-1">Saguna More, Khagaul Road</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTA Button (Always Prominently Visible) */}
            <div className="hidden lg:flex items-center shrink-0">
              <Button
                to="/admissions"
                variant="primary-gold"
                size="md"
                className="shadow-gold-glow text-xs xl:text-sm font-extrabold tracking-wide px-4 py-2.5 whitespace-nowrap"
                leftIcon={<Sparkles className="w-4 h-4 text-navy-950" />}
              >
                Admissions Enquiry
              </Button>
            </div>

            {/* Mobile View Hamburger & Quick Apply */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                to="/admissions"
                variant="primary-gold"
                size="sm"
                className="text-xs px-3 py-1.5 font-bold shadow-subtle"
              >
                Apply
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-charcoal-800 hover:text-navy-900 hover:bg-surface-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 border border-slate-200"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
