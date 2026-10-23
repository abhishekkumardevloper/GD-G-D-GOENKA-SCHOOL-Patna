import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, GraduationCap, ArrowRight, CheckCircle2, Cpu, Compass, Award } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { ACADEMIC_STAGES, ACADEMIC_PILLARS } from '../data/academicsData';
import { ASSET_IMAGES } from '../data/schoolConfig';

export const AcademicsLandingPage: React.FC = () => {
  const prePrimary = ACADEMIC_STAGES['pre-primary'];
  const primary = ACADEMIC_STAGES['primary'];

  return (
    <div className="bg-surface-200">
      {/* Hero */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Academics' }]}
            className="text-slate-400 mb-4"
          />
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Curriculum & Pedagogy
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mt-2">
              Academic Excellence at G D Goenka Patna
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              A comprehensive CBSE-aligned framework combining experiential STEM learning, linguistic eloquence, and joyful discovery from foundational years to middle school.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        {/* Academic Pillars */}
        <section>
          <SectionHeader
            centered
            eyebrow="Pedagogical Foundations"
            title="How We Architect the"
            highlightText="Learning Journey"
            description="Our curriculum is designed to move students from memorization to genuine mastery through tangible application."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACADEMIC_PILLARS.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-card border border-slate-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900 font-heading mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-royal-600">
                  <span>Pillar 0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Stages Overview Cards */}
        <section className="space-y-8">
          <SectionHeader
            eyebrow="Wings of Learning"
            title="Structured Stages for"
            highlightText="Holistic Development"
            description="Explore our dedicated academic wings tailored specifically for early childhood and primary/middle school development."
          />

          {/* Pre-Primary Detailed Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-slate-200 grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[340px]">
              <img
                src={prePrimary.heroImage}
                alt={prePrimary.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
                <span className="text-xs uppercase text-gold-400 font-bold">{prePrimary.grades}</span>
                <h3 className="text-xl font-bold font-heading">{prePrimary.title}</h3>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 sm:p-10 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{prePrimary.grades} (Age {prePrimary.ageGroup})</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading">
                {prePrimary.title}: {prePrimary.subtitle}
              </h3>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                {prePrimary.overview}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {prePrimary.keyHighlights.slice(0, 4).map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 flex items-center gap-4">
                <Button
                  to="/academics/pre-primary"
                  variant="primary-gold"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4 text-navy-950" />}
                >
                  View Pre-Primary Curriculum
                </Button>
                <Button
                  to="/admissions"
                  variant="outline"
                  size="md"
                >
                  Enquire for Nursery
                </Button>
              </div>
            </div>
          </div>

          {/* Primary & Middle Detailed Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-slate-200 grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[340px] order-1 lg:order-2">
              <img
                src={primary.heroImage}
                alt={primary.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 lg:hidden text-white">
                <span className="text-xs uppercase text-gold-400 font-bold">{primary.grades}</span>
                <h3 className="text-xl font-bold font-heading">{primary.title}</h3>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 sm:p-10 space-y-5 order-2 lg:order-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-100 text-royal-700 text-xs font-semibold uppercase tracking-wider">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{primary.grades} (Age {primary.ageGroup})</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 font-heading">
                {primary.title}: {primary.subtitle}
              </h3>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                {primary.overview}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {primary.keyHighlights.slice(0, 4).map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-charcoal-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-royal-600 mt-1.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 flex items-center gap-4">
                <Button
                  to="/academics/primary"
                  variant="royal"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4 text-white" />}
                >
                  View Primary & Middle Curriculum
                </Button>
                <Button
                  to="/campus-facilities"
                  variant="outline"
                  size="md"
                >
                  Explore Aerobay & Labs
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Philosophy Section */}
        <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-card border border-slate-200">
          <SectionHeader
            eyebrow="Evaluation Framework"
            title="Continuous & Comprehensive"
            highlightText="Evaluation (CCE)"
            description="Our assessment methodology replaces stress and anxiety with supportive, continuous feedback designed to celebrate individual strengths."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-surface-100 border border-slate-200">
              <h4 className="text-base font-bold text-navy-900 font-heading mb-2">
                Formative Diagnostics
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Regular classroom observations, oral presentations, concept maps, and quizzes pinpoint learning gaps early, allowing teachers to tailor remedial mentorship immediately.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-surface-100 border border-slate-200">
              <h4 className="text-base font-bold text-navy-900 font-heading mb-2">
                Project & Lab Portfolios
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Students compile portfolios of experiments, Aerobay builds, art creations, and literary essays, demonstrating tangible growth over each academic term.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-surface-100 border border-slate-200">
              <h4 className="text-base font-bold text-navy-900 font-heading mb-2">
                Holistic Co-Scholastic Metrics
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Physical fitness in swimming and sports, teamwork in the house system, discipline, and emotional maturity are evaluated alongside academic scores.
              </p>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="bg-navy-900 text-white rounded-2xl p-8 sm:p-10 text-center border border-navy-800">
          <h3 className="text-2xl font-bold font-heading mb-2">
            Secure Your Child's Academic Future
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Admissions for ongoing session 2025–2026 and upcoming session 2026–2027 are now open.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/admissions"
              variant="primary-gold"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4 text-navy-950" />}
            >
              Start Admission Enquiry
            </Button>
            <Button
              to="/contact"
              variant="navy"
              size="md"
              className="border-slate-600"
            >
              Contact Academics Coordinator
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};
