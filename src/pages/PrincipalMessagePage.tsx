import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, ArrowRight, Award, CheckCircle2, Mail, Phone } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { Button } from '../components/common/Button';
import { LEADERSHIP_PROFILES } from '../data/leadershipData';
import { SCHOOL_CONFIG } from '../data/schoolConfig';

export const PrincipalMessagePage: React.FC = () => {
  const principal = LEADERSHIP_PROFILES.principal;

  return (
    <div className="bg-surface-200">
      {/* Header */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'About Us', href: '/about' },
              { label: "Principal's Message" },
            ]}
            className="text-slate-400 mb-4"
          />
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Leadership Desk
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mt-2">
              Message from the Principal
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              {principal.name} — {principal.designation}, G D Goenka Public School Patna
            </p>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Principal's Portrait & Credentials Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-card border border-slate-200">
              <div className="relative h-96">
                <img
                  src={principal.image}
                  alt={principal.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                    {principal.designation}
                  </span>
                  <h3 className="text-xl font-bold font-heading">{principal.name}</h3>
                  <p className="text-xs text-slate-300 mt-0.5">{principal.credentials}</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="text-xs text-charcoal-600 space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>20+ Years in Educational Administration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-royal-600 shrink-0" />
                    <span>Child-Centric Pedagogy Specialist</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <a
                    href={`mailto:${SCHOOL_CONFIG.email}?subject=Message for Principal Mrs. Meeta Sharma`}
                    className="inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-surface-200 hover:bg-surface-300 text-navy-900 text-xs font-semibold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-gold-600" />
                    <span>Contact via School Office</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl p-6 shadow-card border border-slate-200 space-y-3">
              <h4 className="text-sm font-bold text-navy-900 font-heading">
                Explore Leadership
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link to="/chairman-message" className="text-royal-600 hover:underline flex items-center justify-between">
                    <span>Chairman's Address</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link to="/foundation" className="text-royal-600 hover:underline flex items-center justify-between">
                    <span>Our Founding History</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
                <li>
                  <Link to="/academics" className="text-royal-600 hover:underline flex items-center justify-between">
                    <span>Academic Curriculum</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Full Message Content */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-8 sm:p-12 shadow-card border border-slate-200 space-y-8">
            {/* Quote Block */}
            <div className="relative p-6 sm:p-8 rounded-xl bg-gold-50/60 border border-gold-200/80">
              <Quote className="w-10 h-10 text-gold-400/40 absolute top-4 left-4" />
              <p className="relative z-10 text-base sm:text-lg font-serif italic text-navy-950 leading-relaxed pl-6">
                "{principal.quote}"
              </p>
            </div>

            {/* Letter Body */}
            <div className="space-y-6 text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
              <p className="font-semibold text-navy-900 text-base sm:text-lg">
                Dear Parents, Educators, and Cherished Students,
              </p>

              {principal.fullMessage.map((paragraph, idx) => (
                <p key={idx}>
                  {paragraph}
                </p>
              ))}

              <p>
                In the classrooms and on the playfields of G D Goenka Public School Patna, we celebrate small triumphs just as heartily as grand awards. We believe that true self-esteem is earned through honest effort, overcoming setbacks, and upholding unconditional kindness.
              </p>

              <p>
                I look forward to welcoming you to our campus at Saguna More, where you can feel the energy, intellect, and joy that define every single day of our academic life.
              </p>

              <div className="pt-8 border-t border-slate-200 flex flex-col items-start">
                <span className="font-heading font-bold text-lg text-navy-900">
                  Mrs. Meeta Sharma
                </span>
                <span className="text-xs text-charcoal-500">
                  Principal, G D Goenka Public School, Patna, Bihar
                </span>
                <span className="text-xs text-gold-600 font-semibold mt-1">
                  M.A., M.Ed.
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
              <Button
                to="/admissions"
                variant="primary-gold"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4 text-navy-950" />}
              >
                Enquire for Admission
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="md"
              >
                Schedule Campus Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
