import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, Sparkles } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { ACADEMIC_STAGES } from '../../data/academicsData';

export const AcademicsPreview: React.FC = () => {
  const prePrimary = ACADEMIC_STAGES['pre-primary'];
  const primary = ACADEMIC_STAGES['primary'];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          centered
          eyebrow="Academic Stages"
          title="Progressive Pathways of"
          highlightText="Intellectual Discovery"
          description="From foundational sensory play to rigorous conceptual inquiry, our verified CBSE curriculum builds confident, independent thinkers."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pre-Primary Card */}
          <div className="group rounded-2xl overflow-hidden bg-surface-100 border border-slate-200/90 hover:border-gold-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative h-60 overflow-hidden">
                <img
                  src={prePrimary.heroImage}
                  alt={prePrimary.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500 text-navy-950 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{prePrimary.grades}</span>
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs text-gold-300 font-medium">Age Group: {prePrimary.ageGroup}</span>
                  <h3 className="text-2xl font-bold font-heading text-white">{prePrimary.title}</h3>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
                  {prePrimary.overview}
                </p>
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                    Pedagogical Highlights:
                  </h4>
                  {prePrimary.pedagogy.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-royal-600 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <Link
                to="/academics/pre-primary"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white border border-slate-300 text-navy-900 text-sm font-bold hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-colors shadow-subtle"
              >
                <span>Explore Pre-Primary Wing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Primary & Middle Card */}
          <div className="group rounded-2xl overflow-hidden bg-surface-100 border border-slate-200/90 hover:border-gold-400 hover:shadow-card transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="relative h-60 overflow-hidden">
                <img
                  src={primary.heroImage}
                  alt={primary.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-royal-600 text-white shadow-sm">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{primary.grades}</span>
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs text-gold-300 font-medium">Age Group: {primary.ageGroup}</span>
                  <h3 className="text-2xl font-bold font-heading text-white">{primary.title}</h3>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
                  {primary.overview}
                </p>
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                    Curriculum Pillars:
                  </h4>
                  {primary.pedagogy.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-600 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <Link
                to="/academics/primary"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white border border-slate-300 text-navy-900 text-sm font-bold hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-colors shadow-subtle"
              >
                <span>Explore Primary & Middle Wing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
