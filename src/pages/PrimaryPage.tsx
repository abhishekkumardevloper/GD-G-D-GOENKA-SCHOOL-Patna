import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, CheckCircle2, Cpu, BookOpen, Compass, Award, Trophy } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { ACADEMIC_STAGES } from '../data/academicsData';

export const PrimaryPage: React.FC = () => {
  const stage = ACADEMIC_STAGES['primary'];

  return (
    <div className="bg-surface-200">
      {/* Hero */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Academics', href: '/academics' },
              { label: 'Primary & Middle Wing' },
            ]}
            className="text-slate-400 mb-4"
          />
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Formative & Middle Years • {stage.grades}
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
              eyebrow="Scholastic Mastery"
              title="Developing Analytical Rigour &"
              highlightText="Inquiring Minds"
              description="A structured CBSE curriculum fostering deep scientific comprehension, numerical confidence, and ethical global citizenship."
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
                  <CheckCircle2 className="w-4 h-4 text-royal-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 flex items-center gap-4">
              <Button
                to="/admissions"
                variant="royal"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4 text-white" />}
              >
                Apply for Classes I – VIII
              </Button>
              <Button
                to="/campus-facilities"
                variant="outline"
                size="md"
              >
                View Aerobay & Science Labs
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-card border-4 border-white">
              <img
                src={stage.heroImage}
                alt="Primary and middle school students studying in classroom"
                className="w-full h-[440px] object-cover"
              />
              <div className="p-4 bg-navy-900 text-white text-xs flex items-center justify-between">
                <span>CBSE Syllabus & NEP 2020 Aligned</span>
                <span className="text-gold-400 font-bold">Aerobay STEM Integrated</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Core Curriculum Disciplines */}
        <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-card border border-slate-200">
          <SectionHeader
            centered
            eyebrow="Academic Depth"
            title="Core Scholastic"
            highlightText="Disciplines"
            description="Our academic subjects are taught by specialized educators who combine conceptual instruction with empirical laboratory sessions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stage.curriculumFocus.map((domain, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-surface-100 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-royal-100 text-royal-700 flex items-center justify-center font-bold text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-navy-900 font-heading mb-2">
                    {domain.area}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {domain.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-royal-600 uppercase">
                  <span>Structured Syllabus</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Co-Curricular & House System */}
        <section className="bg-white rounded-2xl p-8 sm:p-10 shadow-card border border-slate-200">
          <SectionHeader
            eyebrow="Character & Leadership"
            title="Co-Curricular Clubs &"
            highlightText="House Competitions"
            description="Developing teamwork, stage confidence, and athletic resilience through weekly inter-house tournaments."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stage.coCurricular.map((act, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-surface-100 border border-slate-200 flex items-start gap-3">
                <Trophy className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-navy-900 font-heading">
                    {act}
                  </h5>
                  <p className="text-xs text-charcoal-500 mt-0.5">Inter-House Participation</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-navy-900 text-white rounded-2xl p-8 sm:p-10 text-center border border-navy-800">
          <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2">
            Admissions Open for Classes I to VIII
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Equip your child with the analytical skills and moral grounding to thrive in a competitive world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/admissions"
              variant="primary-gold"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4 text-navy-950" />}
            >
              Submit Admission Enquiry
            </Button>
            <Button
              to="/contact"
              variant="navy"
              size="md"
              className="border-slate-600"
            >
              Contact Admissions Desk
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
