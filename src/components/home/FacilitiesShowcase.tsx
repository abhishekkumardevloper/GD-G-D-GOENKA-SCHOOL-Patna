import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, FlaskConical, Tv, Waves, Monitor, BookOpen } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { FACILITIES_DATA } from '../../data/facilitiesData';

export const FacilitiesShowcase: React.FC = () => {
  // Show 4 flagship facilities on home page
  const featuredFacilities = FACILITIES_DATA.slice(0, 4);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'FlaskConical': return <FlaskConical className="w-5 h-5" />;
      case 'Tv': return <Tv className="w-5 h-5" />;
      case 'Waves': return <Waves className="w-5 h-5" />;
      case 'Monitor': return <Monitor className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            eyebrow="World-Class Infrastructure"
            title="Purpose-Built Campus &"
            highlightText="Innovation Labs"
            description="Explore our cutting-edge spaces designed to awaken intellectual curiosity, experimental courage, and athletic vitality."
            className="mb-0"
          />
          <div className="mt-4 md:mt-0">
            <Button
              to="/campus-facilities"
              variant="outline"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              View All Facilities
            </Button>
          </div>
        </div>

        {/* 4 Flagship Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated border border-slate-200/80 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-navy-900/90 text-gold-400 border border-gold-500/30 backdrop-blur-sm">
                    {getIcon(facility.iconName)}
                    <span>{facility.category}</span>
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold font-heading text-white">
                    {facility.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-charcoal-600 leading-relaxed mb-4">
                    {facility.shortDesc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {facility.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="text-xs text-charcoal-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to="/campus-facilities"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-600 hover:text-navy-900 transition-colors uppercase tracking-wider"
                  >
                    <span>Read Full Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
