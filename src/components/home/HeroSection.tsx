import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Award, Microscope, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { SCHOOL_CONFIG, ASSET_IMAGES } from '../../data/schoolConfig';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden">
      {/* Background with real campus photography & gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.heroBanner}
          alt="G D Goenka Public School Patna Campus Grounds"
          className="w-full h-full object-cover object-center opacity-45 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/65" />
        {/* Subtle decorative gold line glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and CTAs (7 cols) */}
          <div className="lg:col-span-7">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Admissions Open for Session 2025–2026 & 2026–2027</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.12]">
              A Strong Foundation for a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500">
                Brighter Tomorrow.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl">
              Discover a nurturing learning environment in Patna where curiosity, confidence, knowledge, and character grow together—backed by the prestigious legacy of the G D Goenka Group.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                to="/admissions"
                variant="primary-gold"
                size="lg"
                className="text-base font-bold shadow-gold-glow"
                rightIcon={<ArrowRight className="w-4 h-4 text-navy-950" />}
              >
                Enquire for Admissions
              </Button>

              <Button
                to="/about"
                variant="navy"
                size="lg"
                className="text-base font-semibold border-slate-600 hover:border-gold-400"
              >
                Explore Our School
              </Button>
            </div>

            {/* Quick Badges below CTAs */}
            <div className="mt-10 pt-6 border-t border-navy-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                <span>CBSE Framework</span>
              </div>
              <div className="flex items-center gap-2">
                <Microscope className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Aerobay & STEM Labs</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Playgroup to Class VIII</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Campus Spotlight Visual Card (5 cols on lg) */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-500/40 bg-navy-900 group">
              <img
                src="/images/real/students-assembly.jpg"
                alt="Students assembly at GD Goenka Public School Patna"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-500 text-navy-950 text-[10px] font-extrabold uppercase tracking-widest mb-1.5">
                  <CheckCircle className="w-3 h-3" />
                  <span>Authentic Patna Campus</span>
                </div>
                <h4 className="text-base font-bold font-heading text-white">
                  Morning Assembly & Student Community
                </h4>
                <p className="text-xs text-slate-300 flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 text-gold-400" />
                  <span>Saguna More, Khagaul Road, Patna</span>
                </p>
              </div>
            </div>

            {/* Mini floating card */}
            <div className="absolute -bottom-5 -left-6 bg-white text-navy-900 p-3.5 rounded-xl shadow-elevated border border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-100 flex items-center justify-center text-gold-700 shrink-0 font-bold">
                <Microscope className="w-5 h-5 text-gold-600" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-navy-900">Aerobay STEM Lab</div>
                <div className="text-[11px] text-charcoal-500">Robotics & Drone Modeling</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
