import React from 'react';
import { ArrowRight, Sparkles, Calendar, PhoneCall, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';
import { SCHOOL_CONFIG } from '../../data/schoolConfig';

export const AdmissionsBanner: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-navy-900 text-white relative overflow-hidden border-t border-navy-800">
      {/* Background accents */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-royal-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-navy-950 to-navy-900 border border-gold-500/30 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/30 text-gold-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions Open for Session 2025–2026 & 2026–2027</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Begin Your Child's Journey of Excellence at{' '}
              <span className="text-gold-400">G D Goenka Patna</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Seats are limited in each grade to safeguard our low student-teacher ratio and personalised mentorship. Reserve your slot or visit our campus for an interactive tour.
            </p>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                to="/admissions"
                variant="primary-gold"
                size="lg"
                className="w-full sm:w-auto font-bold shadow-gold-glow"
                rightIcon={<ArrowRight className="w-4 h-4 text-navy-950" />}
              >
                Enquire About Admissions
              </Button>

              <Button
                to="/contact"
                variant="navy"
                size="lg"
                className="w-full sm:w-auto border border-slate-600 hover:border-gold-400"
                leftIcon={<Calendar className="w-4 h-4 text-gold-400" />}
              >
                Schedule a Campus Visit
              </Button>
            </div>

            {/* Direct Helpline */}
            <div className="pt-6 border-t border-navy-800/80 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>Playgroup through Class VIII</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-gold-400" />
                <span>Direct Helpline: </span>
                <a
                  href={`tel:${SCHOOL_CONFIG.phoneNumbers.primary}`}
                  className="text-white hover:text-gold-400 font-bold transition-colors"
                >
                  {SCHOOL_CONFIG.phoneNumbers.displayPrimary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
