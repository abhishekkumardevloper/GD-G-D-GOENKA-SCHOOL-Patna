import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck, Calendar, Navigation } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { ContactForm } from '../components/forms/ContactForm';
import { SCHOOL_CONFIG } from '../data/schoolConfig';
import { Button } from '../components/common/Button';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-surface-200">
      {/* Hero */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Contact Us' }]}
            className="text-slate-400 mb-4"
          />
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mt-2">
              Contact G D Goenka Public School Patna
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              We welcome your enquiries regarding admissions, campus tours, academic curriculum, and administrative assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-16">
        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Address */}
          <div className="bg-white rounded-xl p-6 shadow-card border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-navy-900 font-heading uppercase tracking-wider mb-2">
                Campus Location
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                {SCHOOL_CONFIG.address.fullAddress}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <a
                href={SCHOOL_CONFIG.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-royal-600 hover:text-navy-900 inline-flex items-center gap-1 uppercase tracking-wider"
              >
                <span>Google Maps Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white rounded-xl p-6 shadow-card border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-royal-100 text-royal-700 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-navy-900 font-heading uppercase tracking-wider mb-2">
                Phone Telephones
              </h4>
              <div className="space-y-1 text-xs sm:text-sm text-charcoal-700">
                <div>
                  <a
                    href={`tel:${SCHOOL_CONFIG.phoneNumbers.primary}`}
                    className="hover:text-royal-600 font-semibold block"
                  >
                    Primary: {SCHOOL_CONFIG.phoneNumbers.displayPrimary}
                  </a>
                </div>
                <div>
                  <a
                    href={`tel:${SCHOOL_CONFIG.phoneNumbers.alternate}`}
                    className="hover:text-royal-600 block text-charcoal-600"
                  >
                    Alternate: {SCHOOL_CONFIG.phoneNumbers.displayAlternate}
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-charcoal-500">
              <span>Mon – Sat, 8:00 AM – 4:00 PM</span>
            </div>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white rounded-xl p-6 shadow-card border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-navy-900 font-heading uppercase tracking-wider mb-2">
                Email Support
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-700 break-all">
                <a
                  href={`mailto:${SCHOOL_CONFIG.email}`}
                  className="hover:text-royal-600 font-semibold block"
                >
                  {SCHOOL_CONFIG.email}
                </a>
              </p>
              <p className="text-[11px] text-charcoal-500 mt-2">
                For admissions, statutory, and official correspondence.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-charcoal-500">
              <span>24hr response timeframe</span>
            </div>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-white rounded-xl p-6 shadow-card border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-royal-100 text-royal-700 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-navy-900 font-heading uppercase tracking-wider mb-2">
                Visiting Hours
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-700">
                {SCHOOL_CONFIG.workingHours.days}
              </p>
              <p className="text-xs font-semibold text-navy-900 mt-1">
                {SCHOOL_CONFIG.workingHours.timing}
              </p>
              <p className="text-[11px] text-charcoal-500 mt-2">
                Sunday: Closed (Except prior open house notices)
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-gold-700 font-medium">
              <span>Visitor entry via Main Security Gate</span>
            </div>
          </div>
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form (6 cols) */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>

          {/* Interactive Map & Directions (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-xl shadow-card border border-slate-200 overflow-hidden">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-surface-100">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-royal-600" />
                  <h4 className="text-xs sm:text-sm font-bold text-navy-900 font-heading">
                    Campus Location Map (Near Toll Plaza, Shahpur)
                  </h4>
                </div>
                <a
                  href={SCHOOL_CONFIG.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-royal-600 hover:text-navy-900 flex items-center gap-1"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Embed Frame */}
              <div className="relative h-80 sm:h-96 w-full bg-slate-100">
                <iframe
                  title="G D Goenka Public School Patna Location Map"
                  src="https://maps.google.com/maps?q=GD+Goenka+Public+School+Saguna+More+Khagaul+Road+Patna+Bihar+801503&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="p-4 bg-surface-50 text-xs text-charcoal-600 space-y-1">
                <p>
                  <strong>How to Reach:</strong> Located on Khagaul Road at Saguna More, easily accessible from Danapur Railway Station (approx. 10 mins), Bailey Road, and Patna Airport (approx. 20 mins drive).
                </p>
              </div>
            </div>

            {/* Quick Campus Visit Callout */}
            <div className="bg-navy-900 text-white rounded-xl p-6 border border-navy-800 space-y-3">
              <div className="flex items-center gap-2 text-gold-400">
                <Calendar className="w-5 h-5" />
                <h4 className="text-base font-bold font-heading">Planning an In-Person Campus Tour?</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Parents are welcome to walk in or schedule a dedicated guided tour of our Aerobay labs, sports facilities, and primary classrooms with our senior coordinators.
              </p>
              <div className="pt-2">
                <Button
                  to="/admissions"
                  variant="primary-gold"
                  size="sm"
                  className="w-full justify-center"
                >
                  Schedule Tour via Admissions Desk
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
