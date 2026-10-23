import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, Building, Heart, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { ASSET_IMAGES } from '../data/schoolConfig';

export const FoundationPage: React.FC = () => {
  const milestones = [
    {
      year: "The Inception",
      title: "A Family Realization & Community Vision",
      desc: "Founder Shri Gopal Krishna Gupta recognizes the urgent need for a benchmark school in Patna after experiencing the separation of sending his own grandchildren far away for schooling.",
      icon: Heart,
    },
    {
      year: "The Alliance",
      title: "Under the Aegis of G D Goenka Group",
      desc: "Partnership forged with the nationally acclaimed G D Goenka Group, New Delhi, ensuring established pedagogical standards, CBSE curriculum alignment, and high faculty benchmarks.",
      icon: Building,
    },
    {
      year: "Infrastructure Creation",
      title: "Purpose-Built Modern Green Campus",
      desc: "Strategic development at Saguna More on Khagaul Road, featuring smart classrooms, semi-Olympic swimming pool, and athletic courts.",
      icon: Compass,
    },
    {
      year: "Aerobay & STEAM Launch",
      title: "Patna's Pioneer Aerospace Lab",
      desc: "Inauguration of the specialized Aerobay lab, providing students with hands-on rocketry, robotics, drone assembly, and coding education.",
      icon: Rocket,
    },
  ];

  return (
    <div className="bg-surface-200">
      {/* Hero */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'About Us', href: '/about' },
              { label: 'Our Foundation' },
            ]}
            className="text-slate-400 mb-4"
          />
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Roots & Genesis
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mt-2">
              The Founding Vision of G D Goenka Patna
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              How a visionary resolve transformed educational opportunities for students in Bihar's capital.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        {/* Story Section */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-card border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <SectionHeader
                eyebrow="The Genesis"
                title="Born from Love for Family and"
                highlightText="Pride in Bihar"
                description="For decades, families across Bihar faced a heartbreaking dilemma: in order to give their children access to modern, international-standard schooling, they had to send them away to hostels in distant metros."
              />
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                When the grandchildren of Founder & Chairman Shri Gopal Krishna Gupta reached school-going age, his family confronted that very trial. Watching the emotional toll of early separation, Shri Gupta realized that no parent should be compelled to choose between their child’s affection and their child’s intellectual growth.
              </p>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                He resolved to build a center of learning right here in Patna that would match any elite school in Delhi or Mumbai. By bringing the prestigious G D Goenka brand to Patna, the school has created a sanctuary where students remain grounded in familial values while spreading their wings into science, technology, and leadership.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-elevated border-4 border-slate-100">
                <img
                  src={ASSET_IMAGES.campusFacade}
                  alt="GD Goenka Patna Campus Grounds"
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 bg-navy-950 text-white text-xs">
                  <p className="font-semibold text-gold-400">Campus Saguna More, Khagaul Road, Patna</p>
                  <p className="text-slate-400 text-[11px] mt-0.5">Modern Purpose-Built Institution</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Timeline */}
        <div>
          <SectionHeader
            centered
            eyebrow="Our Journey"
            title="Milestones in Our"
            highlightText="Institutional Evolution"
            description="From an initial dream to one of Bihar's most progressive school campuses."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-card border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-royal-600 uppercase tracking-wider">
                      {m.year}
                    </span>
                    <h3 className="text-base font-bold text-navy-900 font-heading mt-1 mb-2">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-charcoal-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
                    <span>Verified Milestone</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-navy-900 text-white rounded-2xl p-8 sm:p-10 text-center border border-navy-800">
          <h3 className="text-xl sm:text-2xl font-bold font-heading mb-3">
            Be Part of Our Growing Legacy
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Join the community of students and parents shaping the future at G D Goenka Public School, Patna.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/admissions"
              variant="primary-gold"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4 text-navy-950" />}
            >
              Apply for Admissions
            </Button>
            <Button
              to="/contact"
              variant="navy"
              size="md"
              className="border-slate-600"
            >
              Contact Administrative Office
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
