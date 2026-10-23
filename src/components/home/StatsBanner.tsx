import React from 'react';
import { Users, Building2, Cpu, Bus } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const stats = [
    {
      label: "Child-Centric Attention",
      value: "15:1",
      subtitle: "Pre-Primary student-teacher ratio",
      icon: Users,
    },
    {
      label: "Expansive Campus",
      value: "3.5+",
      subtitle: "Acres green campus at Shahpur",
      icon: Building2,
    },
    {
      label: "Aerobay & STEM Hub",
      value: "6+",
      subtitle: "Dedicated scientific & digital labs",
      icon: Cpu,
    },
    {
      label: "Safe Transit Network",
      value: "100%",
      subtitle: "GPS-tracked fleet with escort staff",
      icon: Bus,
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-8 relative -mt-4 z-20 max-w-6xl mx-auto rounded-xl shadow-elevated px-4 sm:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className={`flex items-center gap-4 ${idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}>
              <div className="w-12 h-12 rounded-lg bg-royal-50 border border-royal-100 flex items-center justify-center shrink-0 text-royal-600">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-heading">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-charcoal-700">
                  {stat.label}
                </div>
                <div className="text-[11px] text-charcoal-500">
                  {stat.subtitle}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
