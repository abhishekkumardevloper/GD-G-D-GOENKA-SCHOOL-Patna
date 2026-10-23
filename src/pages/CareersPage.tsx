import React, { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Clock, CheckCircle2, ChevronDown, Sparkles, Send } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { CareerApplicationForm } from '../components/forms/CareerApplicationForm';
import { CAREER_VACANCIES } from '../data/careersData';
import { SCHOOL_CONFIG } from '../data/schoolConfig';

export const CareersPage: React.FC = () => {
  const [selectedRoleForApply, setSelectedRoleForApply] = useState<string>(
    CAREER_VACANCIES[0]?.title || ''
  );
  const [expandedVacancy, setExpandedVacancy] = useState<string | null>(
    CAREER_VACANCIES[0]?.id || null
  );

  const handleApplyClick = (roleTitle: string) => {
    setSelectedRoleForApply(roleTitle);
    const formElement = document.getElementById('career-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-surface-200">
      {/* Hero */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Careers' }]}
            className="text-slate-400 mb-4"
          />
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Work With Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mt-2">
              Shape the Future of Education in Patna
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              Join a visionary institution under the aegis of the G D Goenka Group. We offer competitive remuneration, continuous professional training, and an inspiring teaching ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-16">
        {/* Why Teach at Goenka */}
        <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-card border border-slate-200">
          <SectionHeader
            centered
            eyebrow="Faculty Culture"
            title="Why Educators Thrive at"
            highlightText="G D Goenka Patna"
            description="We believe great schools are built by inspired teachers who are trusted, valued, and empowered."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-surface-100 border border-slate-200">
              <h4 className="text-base font-bold text-navy-900 font-heading mb-2">
                Professional Pedagogical Growth
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Regular curriculum workshops, NEP/CBSE alignment sessions, and mentorship from senior GD Goenka master trainers.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-surface-100 border border-slate-200">
              <h4 className="text-base font-bold text-navy-900 font-heading mb-2">
                Modern Teaching Infrastructure
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                4K interactive smart panels in every classroom, high-speed fiber internet, well-stocked science labs, and our signature Aerobay lab.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-surface-100 border border-slate-200">
              <h4 className="text-base font-bold text-navy-900 font-heading mb-2">
                Supportive & Merit-Based Ethos
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                Transparent management, competitive compensation commensurate with qualifications and experience, and subsidized campus transport.
              </p>
            </div>
          </div>
        </section>

        {/* Current Vacancies List */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="Current Openings"
            title="Open Positions for"
            highlightText="Academic Session 2025–2026"
            description="Review current job vacancies below and apply directly using our application form."
          />

          <div className="space-y-4">
            {CAREER_VACANCIES.map((vacancy) => {
              const isExpanded = expandedVacancy === vacancy.id;

              return (
                <div
                  key={vacancy.id}
                  className="bg-white rounded-xl shadow-card border border-slate-200 overflow-hidden transition-all duration-200"
                >
                  <div
                    onClick={() => setExpandedVacancy(isExpanded ? null : vacancy.id)}
                    className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-surface-50 transition-colors"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-royal-50 text-royal-700 border border-royal-200">
                          {vacancy.department}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {vacancy.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-navy-900 font-heading">
                        {vacancy.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-charcoal-500 mt-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-gold-500" />
                          {vacancy.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-gold-500" />
                          Experience: {vacancy.experience}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end md:self-auto">
                      <Button
                        type="button"
                        variant="primary-gold"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApplyClick(vacancy.title);
                        }}
                      >
                        Apply Now
                      </Button>
                      <button
                        type="button"
                        className="p-2 text-charcoal-400 hover:text-navy-900 rounded-lg hover:bg-slate-100"
                        aria-label="Toggle vacancy details"
                      >
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-gold-600' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-surface-50 space-y-4 animate-in fade-in duration-150">
                      <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                        {vacancy.description}
                      </p>

                      <div className="text-xs sm:text-sm text-charcoal-800">
                        <strong>Required Qualifications: </strong>
                        <span>{vacancy.qualification}</span>
                      </div>

                      <div className="space-y-1.5">
                        <strong className="text-xs font-bold uppercase tracking-wider text-navy-900">
                          Key Roles & Responsibilities:
                        </strong>
                        <ul className="space-y-1">
                          {vacancy.rolesResponsibilities.map((resp, i) => (
                            <li key={i} className="text-xs text-charcoal-700 flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Application Form Section */}
        <section id="career-form-section" className="scroll-mt-28">
          <div className="max-w-3xl mx-auto">
            <CareerApplicationForm initialPosition={selectedRoleForApply} />
          </div>
        </section>
      </div>
    </div>
  );
};
