import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, ArrowRight, Award, Compass, Heart } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/common/Button';
import { LEADERSHIP_PROFILES } from '../data/leadershipData';

export const ChairmanMessagePage: React.FC = () => {
  const chairman = LEADERSHIP_PROFILES.chairman;

  return (
    <div className="bg-surface-200">
      {/* Header */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'About Us', href: '/about' },
              { label: "Chairman's Message" },
            ]}
            className="text-slate-400 mb-4"
          />
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Founding Leadership
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mt-2">
              Message from the Founder & Chairman
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              {chairman.name} — {chairman.designation}, G D Goenka Public School Patna
            </p>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Chairman's Portrait */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-slate-200">
              <div className="relative h-96">
                <img
                  src={chairman.image}
                  alt={chairman.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                    {chairman.designation}
                  </span>
                  <h3 className="text-xl font-bold font-heading">{chairman.name}</h3>
                  <p className="text-xs text-slate-300 mt-0.5">{chairman.credentials}</p>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="p-3 bg-gold-50 rounded-lg border border-gold-200 text-xs text-gold-900 flex items-start gap-2">
                  <Heart className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <span>"Education is the greatest gift we can give to our children in Bihar."</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl p-6 shadow-card border border-slate-200 space-y-3">
              <h4 className="text-sm font-bold text-navy-900 font-heading">
                Related Pages
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/foundation" className="text-royal-600 hover:underline flex items-center justify-between">
                    <span>Our Founding Story</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link to="/principal-message" className="text-royal-600 hover:underline flex items-center justify-between">
                    <span>Principal's Welcome</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link to="/campus-facilities" className="text-royal-600 hover:underline flex items-center justify-between">
                    <span>Campus Facilities & Aerobay</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Message Content */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-8 sm:p-12 shadow-card border border-slate-200 space-y-8">
            <div className="relative p-6 sm:p-8 rounded-xl bg-gold-50/60 border border-gold-200/80">
              <Quote className="w-10 h-10 text-gold-400/40 absolute top-4 left-4" />
              <p className="relative z-10 text-base sm:text-lg font-serif italic text-navy-950 leading-relaxed pl-6">
                "{chairman.quote}"
              </p>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-charcoal-700 leading-relaxed">
              <p className="font-semibold text-navy-900 text-base sm:text-lg">
                Greetings to all Parents, Citizens of Patna, and Well-Wishers,
              </p>

              {chairman.fullMessage.map((p, idx) => (
                <p key={idx}>
                  {p}
                </p>
              ))}

              <p>
                Our institution stands today not merely as brick, mortar, and laboratories, but as a living promise. When your child steps into G D Goenka Public School Patna, they step into a sanctuary where their curiosity is respected, their safety is absolute, and their dreams are given wings.
              </p>

              <div className="pt-8 border-t border-slate-200 flex flex-col items-start">
                <span className="font-heading font-bold text-lg text-navy-900">
                  Shri Gopal Krishna Gupta
                </span>
                <span className="text-xs text-charcoal-500">
                  Founder & Chairman, G D Goenka Public School, Patna
                </span>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
              <Button
                to="/foundation"
                variant="primary-gold"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4 text-navy-950" />}
              >
                Read School Foundation
              </Button>
              <Button
                to="/admissions"
                variant="navy"
                size="md"
              >
                Admissions Enquiry
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
