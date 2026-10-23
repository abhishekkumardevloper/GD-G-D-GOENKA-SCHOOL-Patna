import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Heart, Smile, Palette, Sun } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { ACADEMIC_STAGES } from '../data/academicsData';

export const PrePrimaryPage: React.FC = () => {
  const stage = ACADEMIC_STAGES['pre-primary'];

  return (
    <div className="bg-surface-200">
      {/* Hero */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Academics', href: '/academics' },
              { label: 'Pre-Primary Wing' },
            ]}
            className="text-slate-400 mb-4"
          />
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Foundational Years • {stage.grades}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mt-2">
              {stage.title}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              {stage.subtitle} (Age Group: {stage.ageGroup})
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        {/* Overview & Feature Image */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <SectionHeader
              eyebrow="Early Childhood Excellence"
              title="Where Little Learners Step into a World of"
              highlightText="Joy & Wonder"
              description="A warm, secure, and sensorial haven designed to foster social confidence, phonemic awareness, and independent physical coordination."
            />
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              {stage.overview}
            </p>
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                Key Wing Attributes:
              </h4>
              {stage.keyHighlights.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700">
                  <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Button
                to="/admissions"
                variant="primary-gold"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4 text-navy-950" />}
              >
                Apply for Pre-Primary Admission
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-card border-4 border-white">
              <img
                src={stage.heroImage}
                alt="Happy pre-primary children engaged in learning"
                className="w-full h-[440px] object-cover"
              />
              <div className="p-4 bg-navy-900 text-white text-xs flex items-center justify-between">
                <span>Play-way Montessori Inspired Learning</span>
                <span className="text-gold-400 font-bold">15:1 Student-Teacher Ratio</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Curriculum Focus Areas */}
        <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-card border border-slate-200">
          <SectionHeader
            centered
            eyebrow="Developmental Domains"
            title="Four Pillars of Early"
            highlightText="Cognitive Growth"
            description="Our integrated early childhood curriculum addresses the holistic physical, social, linguistic, and analytical development of toddlers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stage.curriculumFocus.map((domain, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-surface-100 border border-slate-200 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center shrink-0 font-bold">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="text-base font-bold text-navy-900 font-heading mb-1.5">
                    {domain.area}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {domain.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Co-Curricular & Special Activities */}
        <section className="bg-white rounded-2xl p-8 sm:p-10 shadow-card border border-slate-200">
          <SectionHeader
            eyebrow="Beyond The Sandbox"
            title="Enriching Co-Curricular"
            highlightText="Experiences"
            description="Joyful weekly activities that spark natural wonder and expressive poise."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stage.coCurricular.map((act, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-surface-100 border border-slate-200 text-center">
                <div className="w-10 h-10 rounded-full bg-royal-100 text-royal-700 mx-auto flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h5 className="text-sm font-bold text-navy-900 font-heading mb-1">
                  {act}
                </h5>
                <p className="text-xs text-charcoal-500">Weekly Scheduled Module</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-navy-900 text-white rounded-2xl p-8 sm:p-10 text-center border border-navy-800">
          <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2">
            Schedule a Pre-Primary Campus Visit
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Bring your child to tour our rubberized play zones, colorful classrooms, and meet our nurturing pre-primary facilitators.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/admissions"
              variant="primary-gold"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4 text-navy-950" />}
            >
              Enquire for Admissions
            </Button>
            <Button
              to="/contact"
              variant="navy"
              size="md"
              className="border-slate-600"
            >
              Book a Guided Tour
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
