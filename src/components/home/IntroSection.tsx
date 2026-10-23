import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Compass, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { SectionHeader } from '../common/SectionHeader';
import { ASSET_IMAGES } from '../../data/schoolConfig';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border-4 border-white">
              <img
                src={ASSET_IMAGES.campusFacade}
                alt="G D Goenka Public School Patna Campus Grounds"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                  Saguna More, Patna
                </span>
                <h4 className="text-lg font-bold font-heading text-white">
                  Purpose-Built Campus Designed for Exploration
                </h4>
              </div>
            </div>

            {/* Overlapping Trust Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 rounded-xl shadow-card border border-slate-200 max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 shrink-0 font-bold">
                  <Shield className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-navy-900">National Pedagogy</h5>
                  <p className="text-[11px] text-charcoal-500">GD Goenka Legacy of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              eyebrow="Welcome to G D Goenka Patna"
              title="Redefining Education in Bihar with"
              highlightText="Global Standards"
              description="Located conveniently at Saguna More on Khagaul Road, G D Goenka Public School brings Delhi's benchmark educational quality directly to Patna, fostering an environment where young minds flourish with courage, intellect, and grace."
            />

            <div className="space-y-4 text-sm sm:text-base text-charcoal-700 leading-relaxed">
              <p>
                Founded on the belief that children in Bihar should never have to migrate away from home to access world-class schooling, our campus blends rigorous academic discipline with exploratory, hands-on learning.
              </p>
              <p>
                From our specialized <strong>Aerobay Aerospace & Robotics Lab</strong> to smart multimedia-enabled classrooms, semi-Olympic aquatic facilities, and compassionate mentor-educators, we empower each student to think critically, communicate articulately, and lead ethically.
              </p>
            </div>

            {/* Verified Highlights Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "CBSE-aligned curriculum framework",
                "Aerobay aerospace & robotics lab",
                "Smart interactive touch classrooms",
                "Semi-Olympic swimming & sports",
                "Continuous developmental evaluation",
                "24/7 CCTV & GPS-tracked transit",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-navy-900 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <Button
                to="/about"
                variant="navy"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4 text-gold-400" />}
              >
                Discover More About Us
              </Button>

              <Button
                to="/admissions"
                variant="outline"
                size="md"
              >
                Admission Criteria
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
