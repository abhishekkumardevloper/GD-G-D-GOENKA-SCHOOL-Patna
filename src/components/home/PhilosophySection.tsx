import React from 'react';
import { Compass, Lightbulb, HeartHandshake, Rocket, BookOpenCheck, Users } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';

export const PhilosophySection: React.FC = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Inquiry & Critical Thinking",
      desc: "Moving beyond passive rote absorption to question hypotheses, analyze empirical evidence, and form reasoned independent conclusions.",
    },
    {
      icon: Rocket,
      title: "Hands-on Experiential STEM",
      desc: "Translating textbook theories into tangible models inside our dedicated Aerobay aerospace, robotics, science, and math laboratories.",
    },
    {
      icon: HeartHandshake,
      title: "Character & Ethical Grounding",
      desc: "Nurturing empathy, humility, environmental responsibility, and civic duty as intrinsic pillars of personal leadership.",
    },
    {
      icon: Compass,
      title: "Artistic & Physical Growth",
      desc: "Integrating swimming, court athletics, classical music, and fine arts directly into the daily curriculum for balanced wellness.",
    },
    {
      icon: BookOpenCheck,
      title: "Concept-Driven Mastery",
      desc: "Continuous diagnostic assessment ensuring foundational literacy and numeracy without punitive examination pressure.",
    },
    {
      icon: Users,
      title: "Global Vision, Local Roots",
      desc: "Instilling pride in Bihar's rich heritage alongside universal fluency, digital literacy, and modern communicative confidence.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          centered
          eyebrow="Our Educational Ethos"
          title="The Goenkan Philosophy:"
          highlightText="Think. Learn. Thrive."
          description="We cultivate an ecosystem where every student feels intellectually ignited, emotionally supported, and physically empowered."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-8 rounded-xl bg-surface-100 hover:bg-white border border-slate-200/90 hover:border-gold-400 hover:shadow-card transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-navy-900 group-hover:bg-gold-500 text-gold-400 group-hover:text-navy-950 flex items-center justify-center transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-charcoal-500 group-hover:text-royal-600 transition-colors">
                  <span className="font-semibold uppercase tracking-wider">Core Pillar 0{idx + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-gold-500 transition-colors"></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
