import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Eye, Compass, Award, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { SCHOOL_CONFIG, ASSET_IMAGES } from '../data/schoolConfig';
import { LEADERSHIP_PROFILES } from '../data/leadershipData';

export const AboutPage: React.FC = () => {
  const leadershipList = Object.values(LEADERSHIP_PROFILES);

  return (
    <div className="bg-surface-200">
      {/* Page Hero Header */}
      <div className="bg-navy-950 text-white relative py-16 sm:py-24 overflow-hidden border-b border-navy-800">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={ASSET_IMAGES.campusFacade}
            alt="GD Goenka Patna Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-950/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'About Us' }]}
            className="text-slate-400 mb-4"
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-gold-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Institutional Identity</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              A Legacy of Educational Eminence in{' '}
              <span className="text-gold-400">Patna</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Operating under the aegis of the renowned G D Goenka Group, New Delhi, G D Goenka Public School, Patna combines visionary pedagogical traditions with modern scientific infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <SectionHeader
              eyebrow="The Goenkan Tradition"
              title="Transforming the Educational Landscape of"
              highlightText="Bihar"
              description="Founded with the conviction that world-class schooling should be accessible within Patna, our school bridges local cultural warmth with international pedagogical standards."
            />
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              Established at Saguna More along the Khagaul Road arterial corridor, G D Goenka Public School Patna serves as a beacon of academic excellence for families across Bihar. Our purpose-built modern campus has been built intentionally to ignite curiosity, encourage athletic discipline, and build moral resilience in equal measure.
            </p>
            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              We adhere strictly to the holistic ideals laid out in India’s National Education Policy (NEP) and the Central Board of Secondary Education (CBSE) framework. Education at Goenka is not confined to passive lectures; it is experienced in smart multimedia classrooms, empirical science labs, and our signature Aerobay innovation center.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <Button
                to="/foundation"
                variant="navy"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4 text-gold-400" />}
              >
                Read Founding Story
              </Button>
              <Button
                to="/admissions"
                variant="outline"
                size="md"
              >
                Admissions Process
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-card border-4 border-white">
              <img
                src={ASSET_IMAGES.smartClassroom}
                alt="Interactive smart classroom at GD Goenka Patna"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase text-gold-400 font-bold tracking-wider">
                  Future-Ready Infrastructure
                </span>
                <h4 className="text-lg font-bold font-heading">
                  Smart Digital Classrooms & Collaborative Learning
                </h4>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-card border-t-4 border-gold-500 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold-100 text-gold-700 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 font-heading mb-3">
                Our Institutional Vision
              </h3>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                To be a premier center of intellectual inquiry and character building in Eastern India, nurturing versatile global thinkers who combine technological literacy, independent analytical conviction, and deep ethical empathy for humanity.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-gold-700 uppercase tracking-wider">
              <span>Aspiration for Every Learner</span>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-card border-t-4 border-royal-600 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-royal-100 text-royal-700 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 font-heading mb-3">
                Our Educational Mission
              </h3>
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                To provide a safe, intellectually stimulating, and joyful learning environment where students master core disciplines through experiential discovery, participate actively in sports and the arts, and cultivate the resilience needed to excel in an evolving global society.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-royal-700 uppercase tracking-wider">
              <span>Commitment to Holistic Growth</span>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-card border border-slate-200">
          <SectionHeader
            centered
            eyebrow="Values That Anchor Us"
            title="The Six Pillars of"
            highlightText="Goenkan Character"
            description="Our students are guided by timeless ethical standards that remain constant amidst rapid societal and technological change."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Intellectual Rigour", desc: "Pursuing mastery with depth, curiosity, and disciplined analytical persistence." },
              { title: "Integrity & Truth", desc: "Choosing honesty, fairness, and moral courage in words, actions, and academic work." },
              { title: "Compassion & Respect", desc: "Valuing diverse perspectives and treating peers, teachers, and staff with kindness." },
              { title: "Experiential Exploration", desc: "Embracing hands-on experimentation, learning from mistakes, and building original solutions." },
              { title: "Ecological Stewardship", desc: "Cultivating respect for natural resources, native flora, and community environmental health." },
              { title: "Global Fluency & Local Pride", desc: "Cherishing Indian identity and cultural roots while engaging fluently with global ideas." },
            ].map((val, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-surface-100 border border-slate-200/80">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                  <h4 className="text-base font-bold text-navy-900 font-heading">{val.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Overview Grid */}
        <section>
          <SectionHeader
            eyebrow="Visionary Governance"
            title="Guided by Experienced"
            highlightText="Educational Leadership"
            description="Meet the administrators and educationists steering G D Goenka Public School Patna towards academic distinction."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipList.map((leader) => (
              <div
                key={leader.id}
                className="bg-white rounded-xl overflow-hidden shadow-card border border-slate-200 flex flex-col justify-between group hover:shadow-elevated transition-shadow"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[11px] font-bold text-gold-400 uppercase tracking-wider">
                        {leader.designation}
                      </span>
                      <h4 className="text-base font-bold font-heading text-white">{leader.name}</h4>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-charcoal-600 line-clamp-3 leading-relaxed">
                      {leader.bioSummary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  {leader.id === 'meeta-sharma' ? (
                    <Link
                      to="/principal-message"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-600 hover:text-navy-900 transition-colors uppercase tracking-wider"
                    >
                      <span>Principal's Message</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : leader.id === 'gopal-krishna-gupta' ? (
                    <Link
                      to="/chairman-message"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-royal-600 hover:text-navy-900 transition-colors uppercase tracking-wider"
                    >
                      <span>Chairman's Address</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <span className="text-xs text-charcoal-400 font-medium">
                      School Management
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Admissions CTA */}
        <section className="bg-navy-900 text-white rounded-2xl p-8 sm:p-12 text-center border border-navy-800">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Experience the Goenkan Difference in Person
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              We warmly invite prospective parents to visit our campus, observe our classrooms, and meet our academic leadership.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                to="/admissions"
                variant="primary-gold"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4 text-navy-950" />}
              >
                Apply for Admission
              </Button>
              <Button
                to="/contact"
                variant="navy"
                size="md"
                className="border-slate-600"
              >
                Schedule Campus Tour
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
