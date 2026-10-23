import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { SCHOOL_CONFIG } from '../../data/schoolConfig';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-gold-500/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        {/* Left: Admissions Announcement Badge */}
        <div className="flex items-center gap-3">
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/40 hover:bg-gold-500 hover:text-navy-950 text-[11px] font-bold tracking-wide transition-all shadow-subtle group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            <span>Admissions Open 2025–26 & 2026–27</span>
            <Sparkles className="w-3 h-3 text-gold-400 group-hover:text-navy-950" />
          </Link>

          <div className="hidden xl:flex items-center gap-1.5 text-slate-300 text-[11px]">
            <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>R.K. Puram, Khagaul Road, Saguna More, Patna, Bihar</span>
          </div>
        </div>

        {/* Right: Clickable Contacts & Statutory Quick Links */}
        <div className="flex items-center flex-wrap justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-medium">
          {/* Telephones */}
          <a
            href={`tel:${SCHOOL_CONFIG.phoneNumbers.primary}`}
            className="flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-bold transition-colors"
            title="Call school admission desk"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>{SCHOOL_CONFIG.phoneNumbers.displayPrimary}</span>
          </a>

          <span className="text-navy-700 hidden sm:inline">|</span>

          <a
            href={`tel:${SCHOOL_CONFIG.phoneNumbers.alternate}`}
            className="hidden sm:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            title="Alternate administrative line"
          >
            <span>{SCHOOL_CONFIG.phoneNumbers.displayAlternate}</span>
          </a>

          <span className="text-navy-700">|</span>

          {/* Email */}
          <a
            href={`mailto:${SCHOOL_CONFIG.email}`}
            className="flex items-center gap-1.5 text-slate-300 hover:text-gold-300 transition-colors"
            title="Email school administration"
          >
            <Mail className="w-3.5 h-3.5 text-gold-400" />
            <span className="hidden sm:inline">{SCHOOL_CONFIG.email}</span>
            <span className="sm:hidden">Email</span>
          </a>

          <span className="text-navy-700 hidden md:inline">|</span>

          {/* Mandatory Disclosure Link */}
          <Link
            to="/mandatory-disclosure"
            className="hidden md:inline-flex items-center gap-1 text-slate-400 hover:text-gold-300 transition-colors text-[11px]"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
            <span>CBSE Disclosure</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
