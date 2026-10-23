import React, { useState } from 'react';
import { Rocket, FlaskConical, Binary, Monitor, Tv, BookOpen, Waves, Trophy, Palette, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { FACILITIES_DATA } from '../data/facilitiesData';
import { Facility } from '../types';

export const CampusFacilitiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Campus Spaces' },
    { id: 'technology', label: 'Aerobay & Technology' },
    { id: 'academic', label: 'Laboratories & Library' },
    { id: 'sports', label: 'Sports & Aquatics' },
    { id: 'creative', label: 'Arts & Music Studios' },
    { id: 'safety', label: 'Safety & Infirmary' },
  ];

  const filteredFacilities = selectedCategory === 'all'
    ? FACILITIES_DATA
    : FACILITIES_DATA.filter((f) => f.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket': return <Rocket className="w-5 h-5 text-gold-500" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5 text-royal-600" />;
      case 'Binary': return <Binary className="w-5 h-5 text-royal-600" />;
      case 'Monitor': return <Monitor className="w-5 h-5 text-royal-600" />;
      case 'Tv': return <Tv className="w-5 h-5 text-royal-600" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-royal-600" />;
      case 'Waves': return <Waves className="w-5 h-5 text-royal-600" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-gold-500" />;
      case 'Palette': return <Palette className="w-5 h-5 text-gold-500" />;
      default: return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div className="bg-surface-200">
      {/* Hero */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Campus & Facilities' }]}
            className="text-slate-400 mb-4"
          />
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Infrastructure & Innovation
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mt-2">
              World-Class Facilities in Patna
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              Purpose-built at Saguna More on Khagaul Road, our campus provides state-of-the-art laboratories, dedicated sports facilities, smart digital learning spaces, and comprehensive safety protocols.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'bg-white text-charcoal-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Facilities List (Individually Designed Editorial Cards) */}
        <div className="space-y-12">
          {filteredFacilities.map((facility, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={facility.id}
                id={facility.id}
                className="bg-white rounded-2xl overflow-hidden shadow-card border border-slate-200/90 scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                  {/* Image Column */}
                  <div className={`lg:col-span-6 relative h-72 sm:h-96 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent lg:hidden" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy-900/90 text-gold-400 border border-gold-500/30 backdrop-blur-sm">
                        {getIcon(facility.iconName)}
                        <span>{facility.category}</span>
                      </span>
                    </div>
                  </div>

                  {/* Text Description Column */}
                  <div className={`lg:col-span-6 p-6 sm:p-10 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-surface-200 flex items-center justify-center">
                        {getIcon(facility.iconName)}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-navy-900 font-heading">
                        {facility.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
                      {facility.fullDesc}
                    </p>

                    <div className="pt-2 space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                        Facility Features & Capabilities:
                      </h4>
                      <ul className="space-y-1.5">
                        {facility.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-700">
                            <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <Button
                        to="/admissions"
                        variant="primary-gold"
                        size="sm"
                        rightIcon={<ArrowRight className="w-3.5 h-3.5 text-navy-950" />}
                      >
                        Enquire for Admissions
                      </Button>
                      <Button
                        to="/gallery"
                        variant="ghost"
                        size="sm"
                        className="text-royal-600"
                      >
                        View in Gallery
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-navy-900 text-white rounded-2xl p-8 sm:p-12 text-center border border-navy-800">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-3">
            See Our Facilities Up Close
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-6">
            We invite parents and prospective students to tour our Aerobay lab, smart classrooms, swimming pool, and libraries during working hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary-gold"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4 text-navy-950" />}
            >
              Book a Guided Campus Tour
            </Button>
            <Button
              to="/admissions"
              variant="navy"
              size="md"
              className="border-slate-600"
            >
              Admissions Enquiry
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
