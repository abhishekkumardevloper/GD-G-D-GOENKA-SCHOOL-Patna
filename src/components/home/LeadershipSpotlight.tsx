import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote, Award } from 'lucide-react';
import { LEADERSHIP_PROFILES } from '../../data/leadershipData';
import { Button } from '../common/Button';

export const LeadershipSpotlight: React.FC = () => {
  const principal = LEADERSHIP_PROFILES.principal;
  const chairman = LEADERSHIP_PROFILES.chairman;

  return (
    <section className="py-16 sm:py-24 bg-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Principal's Spotlight Feature (Large Editorial Layout) */}
        <div className="bg-white rounded-2xl shadow-card border border-slate-200/90 overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Principal Photo */}
            <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-full min-h-[420px]">
              <img
                src={principal.image}
                alt={principal.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
                <span className="text-xs uppercase tracking-wider text-gold-400 font-bold">{principal.designation}</span>
                <h4 className="text-xl font-bold font-heading">{principal.name}</h4>
              </div>
            </div>

            {/* Principal Text & Excerpt */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold tracking-wider uppercase">
                <Award className="w-3.5 h-3.5 text-gold-600" />
                <span>Leadership Message</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-heading">
                  {principal.title}
                </h3>
                <p className="text-sm font-semibold text-royal-600 mt-1">
                  {principal.name} — {principal.designation}
                </p>
                {principal.credentials && (
                  <p className="text-xs text-charcoal-500">{principal.credentials}</p>
                )}
              </div>

              {/* Quote Block */}
              <div className="relative pl-6 border-l-4 border-gold-500 py-1 italic text-base sm:text-lg text-charcoal-800 leading-relaxed font-serif">
                <Quote className="w-8 h-8 text-gold-400/40 absolute -top-4 -left-3 -z-10" />
                "{principal.quote}"
              </div>

              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
                {principal.fullMessage[0]}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button
                  to="/principal-message"
                  variant="navy"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4 text-gold-400" />}
                >
                  Read Full Message from the Principal
                </Button>
                <Link
                  to="/about"
                  className="text-xs sm:text-sm font-semibold text-charcoal-700 hover:text-navy-900 underline underline-offset-4"
                >
                  View Educational Philosophy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Chairman & Founder Vision Banner */}
        <div className="bg-navy-900 rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden border border-navy-800">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                Founding Vision • {chairman.designation}
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-heading text-white">
                "{chairman.quote}"
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                — {chairman.name}, Founder of G D Goenka Public School Patna
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <Button
                to="/chairman-message"
                variant="primary-gold"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4 text-navy-950" />}
              >
                Chairman's Address
              </Button>
              <Button
                to="/foundation"
                variant="ghost"
                size="md"
                className="text-slate-300 hover:text-white hover:bg-navy-800"
              >
                Our History
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
