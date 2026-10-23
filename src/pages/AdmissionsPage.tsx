import React, { useState } from 'react';
import { Sparkles, Phone, Mail, CheckCircle2, ChevronDown, Calendar, FileText, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { AdmissionEnquiryForm } from '../components/forms/AdmissionEnquiryForm';
import { SCHOOL_CONFIG } from '../data/schoolConfig';

export const AdmissionsPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      step: "01",
      title: "Online or In-Person Enquiry",
      desc: "Submit the online enquiry form below or visit the school admissions desk at Saguna More, Khagaul Road, Patna.",
    },
    {
      step: "02",
      title: "Campus Tour & Interaction",
      desc: "Walk through our Aerobay labs, smart classrooms, and sports facilities with our academic counsellors. An informal, friendly interaction is held with the child.",
    },
    {
      step: "03",
      title: "Document Verification",
      desc: "Submit photocopies of the birth certificate, previous report cards (for Grade I upwards), transfer certificate (TC), and passport photographs.",
    },
    {
      step: "04",
      title: "Fee Clearance & Seat Confirmation",
      desc: "Upon verification, complete the statutory admission formalities and transport registration to secure your ward's admission.",
    },
  ];

  const eligibility = [
    { grade: "Playgroup", age: "2+ Years as on 31st March" },
    { grade: "Nursery", age: "3+ Years as on 31st March" },
    { grade: "Lower KG (LKG)", age: "4+ Years as on 31st March" },
    { grade: "Upper KG (UKG)", age: "5+ Years as on 31st March" },
    { grade: "Class I", age: "6+ Years as on 31st March" },
    { grade: "Class II to VIII", age: "Promoted from recognized school with valid TC" },
  ];

  const faqs = [
    {
      q: "What is the curriculum and board affiliation framework at GD Goenka Patna?",
      a: "G D Goenka Public School Patna operates under the aegis of the renowned G D Goenka Group, New Delhi, strictly aligned with the Central Board of Secondary Education (CBSE) syllabus guidelines and the National Education Policy (NEP 2020).",
    },
    {
      q: "What makes the Aerobay lab distinct from regular school laboratories?",
      a: "Our Aerobay lab is a dedicated aerospace, robotics, drone modeling, and STEM innovation center. Students don't just read about aerodynamic concepts; they build functional prototypes, code sensors, and test flight models under specialized instructors.",
    },
    {
      q: "Is school transport available across Patna?",
      a: "Yes. The school operates a regulated fleet of school buses equipped with real-time GPS tracking, speed governors, and trained lady attendants across key routes in Saguna More, Danapur, Bailey Road, Boring Road, Kankarbagh, and residential corridors across Patna.",
    },
    {
      q: "What is the student-to-teacher ratio maintained on campus?",
      a: "To ensure individualized attention and personalized mentorship, our Pre-Primary wing maintains a low ratio of 15:1, while Primary and Middle grades maintain approximately 25:1.",
    },
    {
      q: "What are the school administrative working hours for admissions?",
      a: "Our admissions desk is open Monday through Saturday from 8:00 AM to 4:00 PM IST. You can also contact us at +91 77810 04161 or email info@gdgoenkapatna.com.",
    },
  ];

  return (
    <div className="bg-surface-200">
      {/* Hero */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Admissions' }]}
            className="text-slate-400 mb-4"
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-gold-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions Open • Sessions 2025–2026 & 2026–2027</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mt-2">
              Admissions at G D Goenka Public School Patna
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              Join a distinguished learning community dedicated to intellectual rigour, experiential STEM discovery, and noble character.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-16">
        {/* Two-Column Layout: Form & Key Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="enquiry-form">
          {/* Left: Interactive Admission Form (7 cols) */}
          <div className="lg:col-span-7">
            <AdmissionEnquiryForm />
          </div>

          {/* Right: Quick Assistance, Helpline & Documents (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Helpline Card */}
            <div className="bg-navy-900 text-white rounded-xl p-6 sm:p-8 shadow-card border border-navy-800 space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-gold-400">
                Direct Admissions Assistance
              </span>
              <h4 className="text-xl font-bold font-heading text-white">
                Speak with an Admissions Counsellor
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Have specific queries regarding age criteria, fee schedules, or bus stops? Our admissions team is ready to guide you.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm">
                <a
                  href={`tel:${SCHOOL_CONFIG.phoneNumbers.primary}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-navy-950/80 hover:bg-navy-950 border border-navy-800 text-gold-400 font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Call: {SCHOOL_CONFIG.phoneNumbers.displayPrimary}</span>
                </a>
                <a
                  href={`tel:${SCHOOL_CONFIG.phoneNumbers.alternate}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-navy-950/80 hover:bg-navy-950 border border-navy-800 text-slate-300 font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Alternate: {SCHOOL_CONFIG.phoneNumbers.displayAlternate}</span>
                </a>
                <a
                  href={`mailto:${SCHOOL_CONFIG.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-navy-950/80 hover:bg-navy-950 border border-navy-800 text-slate-300 font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Email: {SCHOOL_CONFIG.email}</span>
                </a>
              </div>
            </div>

            {/* Required Documents Checklist */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-card border border-slate-200 space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-gold-600" />
                <h4 className="text-base font-bold text-navy-900 font-heading">
                  Required Admission Documents
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-charcoal-700">
                {[
                  "Birth Certificate issued by Municipal Authority / Registrar",
                  "Transfer Certificate (TC) from previous recognized school",
                  "Previous year's report card / mark sheet (Class II upwards)",
                  "4 recent passport-size colored photographs of the student",
                  "2 passport-size photographs of both parents / guardian",
                  "Aadhaar Card copy of the student and parents",
                  "Medical fitness & immunization record certificate",
                ].map((doc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-royal-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4-Step Admission Journey */}
        <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-card border border-slate-200">
          <SectionHeader
            centered
            eyebrow="Clear & Transparent"
            title="The 4-Step"
            highlightText="Admission Process"
            description="We have structured our admission roadmap to be welcoming, transparent, and seamless for parents."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.step}
                className="p-6 rounded-xl bg-surface-100 border border-slate-200 relative flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-extrabold text-gold-500 font-heading">
                    {st.step}
                  </span>
                  <h4 className="text-base font-bold text-navy-900 font-heading mt-2 mb-2">
                    {st.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs font-semibold text-royal-600">
                  Step {st.step} of 04
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Age Criteria Matrix */}
        <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-card border border-slate-200">
          <SectionHeader
            eyebrow="Eligibility Standards"
            title="Age Criteria"
            highlightText="Guideline Matrix"
            description="In compliance with standard CBSE and NEP norms, please review the age eligibility for respective classes."
          />

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-navy-900 bg-surface-100 text-navy-900">
                  <th className="py-3 px-4 font-bold uppercase tracking-wider">Class / Grade</th>
                  <th className="py-3 px-4 font-bold uppercase tracking-wider">Minimum Age Requirement</th>
                  <th className="py-3 px-4 font-bold uppercase tracking-wider">Academic Wing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {eligibility.map((row, i) => (
                  <tr key={i} className="hover:bg-surface-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-navy-900">{row.grade}</td>
                    <td className="py-3 px-4 text-charcoal-700">{row.age}</td>
                    <td className="py-3 px-4 text-royal-600 font-medium">
                      {i < 4 ? 'Pre-Primary Wing' : i < 9 ? 'Primary Wing' : 'Middle Wing'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Frequently Asked Questions (Accordion) */}
        <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-card border border-slate-200">
          <SectionHeader
            centered
            eyebrow="Got Questions?"
            title="Frequently Asked"
            highlightText="Questions"
            description="Find direct answers to common queries regarding admissions, transport, curriculum, and campus life."
          />

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-surface-100 hover:bg-white text-navy-900 font-bold font-heading text-sm sm:text-base transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-charcoal-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-gold-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 text-xs sm:text-sm text-charcoal-700 leading-relaxed bg-white border-t border-slate-200 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
