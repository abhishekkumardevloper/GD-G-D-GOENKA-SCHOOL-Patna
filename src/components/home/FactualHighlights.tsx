import React from 'react';
import { ShieldCheck, Bus, HeartPulse, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const FactualHighlights: React.FC = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "CBSE Curriculum & Holistic Assessment",
      description: "Structured academic syllabus fostering analytical competence, scientific inquiry, linguistic expression, and formative diagnostics rather than high-stress rote exams.",
      badge: "Academic Rigour",
    },
    {
      icon: Bus,
      title: "Extensive Safe Transit Network",
      description: "Regulated bus routes connecting Saguna More, Danapur, Bailey Road, Boring Road, Kankarbagh, and surrounding Patna residential corridors with dedicated speed governors, GPS trackers, and trained lady attendants.",
      badge: "Transit Safety",
    },
    {
      icon: HeartPulse,
      title: "Campus Infirmary & Medical Care",
      description: "On-campus medical facility staffed with a certified full-time nurse, first-aid readiness, student health monitoring records, and immediate hospital emergency tie-up.",
      badge: "Health & Well-being",
    },
    {
      icon: Sparkles,
      title: "Transparent Parent-School Dialogue",
      description: "Regular Parent-Teacher Meets (PTMs), transparent academic progress tracking, open leadership access, and an active Parents Teachers Association (PTA) body.",
      badge: "Community Trust",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          centered
          eyebrow="Institutional Standards"
          title="Verified Pillars of"
          highlightText="Safety, Quality & Governance"
          description="Every policy and infrastructure investment at G D Goenka Public School Patna is architected around student welfare and academic transparency."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 shadow-card border border-slate-200/90 hover:border-gold-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-royal-50 text-royal-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gold-100 text-gold-700 border border-gold-300/60">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 font-heading mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-charcoal-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Institutional Policy</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
