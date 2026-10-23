import React, { useState } from 'react';
import { ShieldCheck, FileText, Download, Eye, CheckCircle2, AlertCircle, Building2, ExternalLink } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { SectionHeader } from '../components/common/SectionHeader';
import { Modal } from '../components/common/Modal';
import { Button } from '../components/common/Button';
import { MANDATORY_DISCLOSURE_GENERAL, MANDATORY_DOCUMENTS, MANDATORY_INFRASTRUCTURE } from '../data/mandatoryDisclosureData';
import { SCHOOL_CONFIG } from '../data/schoolConfig';
import { MandatoryDocument } from '../types';

export const MandatoryDisclosurePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'documents' | 'general' | 'infrastructure'>('documents');
  const [viewingDoc, setViewingDoc] = useState<MandatoryDocument | null>(null);

  const handleDocumentClick = (doc: MandatoryDocument) => {
    setViewingDoc(doc);
  };

  return (
    <div className="bg-surface-200">
      {/* Hero */}
      <div className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: 'Mandatory Disclosure' }]}
            className="text-slate-400 mb-4"
          />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-gold-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>CBSE Appendix IX Compliance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mt-2">
              Mandatory Public Disclosure
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              In accordance with Central Board of Secondary Education (CBSE) statutory affiliation regulations, this page provides transparent public access to institutional certificates, governance records, and safety compliance.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-300 pb-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'documents'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'text-charcoal-700 hover:bg-slate-200'
            }`}
          >
            A. Statutory Certificates & Documents (CBSE Appendix IX)
          </button>
          <button
            onClick={() => setActiveTab('general')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'general'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'text-charcoal-700 hover:bg-slate-200'
            }`}
          >
            B. General Institutional Information
          </button>
          <button
            onClick={() => setActiveTab('infrastructure')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'infrastructure'
                ? 'bg-navy-900 text-white shadow-sm'
                : 'text-charcoal-700 hover:bg-slate-200'
            }`}
          >
            C. Campus Infrastructure Details
          </button>
        </div>

        {/* Tab 1: Documents & Statutory Certificates */}
        {activeTab === 'documents' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-white rounded-xl p-6 shadow-card border border-slate-200">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-bold font-heading text-navy-900">
                    Statutory Documents and Certificates
                  </h3>
                  <p className="text-xs text-charcoal-500">
                    Copies of affiliation, society deeds, fire safety, and building stability records.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-100 text-[11px] font-semibold text-charcoal-700 border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Administrative Verification Active</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b-2 border-navy-900 bg-surface-100 text-navy-900">
                      <th className="py-3 px-4 font-bold uppercase tracking-wider w-24">Doc Code</th>
                      <th className="py-3 px-4 font-bold uppercase tracking-wider">Document Title & Description</th>
                      <th className="py-3 px-4 font-bold uppercase tracking-wider">Category</th>
                      <th className="py-3 px-4 font-bold uppercase tracking-wider">Compliance Status</th>
                      <th className="py-3 px-4 font-bold uppercase tracking-wider text-right">Access</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {MANDATORY_DOCUMENTS.map((doc) => (
                      <tr key={doc.id} className="hover:bg-surface-50 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-navy-900">{doc.documentNumber}</td>
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-navy-900">{doc.title}</div>
                          <div className="text-xs text-charcoal-500 mt-0.5">{doc.description}</div>
                        </td>
                        <td className="py-3.5 px-4 text-xs text-charcoal-700">{doc.category}</td>
                        <td className="py-3.5 px-4">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {doc.verifiedStatus}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            type="button"
                            onClick={() => handleDocumentClick(doc)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-surface-200 hover:bg-navy-900 hover:text-white text-navy-900 text-xs font-semibold transition-colors cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Inspect</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: General Information */}
        {activeTab === 'general' && (
          <div className="bg-white rounded-xl p-8 shadow-card border border-slate-200 space-y-6 animate-in fade-in duration-200">
            <h3 className="text-lg font-bold font-heading text-navy-900 border-b border-slate-100 pb-3">
              Section A: General School Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-4 rounded-lg bg-surface-100 border border-slate-200 space-y-1">
                <span className="text-charcoal-500 font-medium">Name of the School:</span>
                <p className="font-bold text-navy-900 text-base">{MANDATORY_DISCLOSURE_GENERAL.schoolName}</p>
              </div>

              <div className="p-4 rounded-lg bg-surface-100 border border-slate-200 space-y-1">
                <span className="text-charcoal-500 font-medium">Affiliation Status & Governance:</span>
                <p className="font-bold text-navy-900 text-base">{MANDATORY_DISCLOSURE_GENERAL.affiliationStatus}</p>
              </div>

              <div className="p-4 rounded-lg bg-surface-100 border border-slate-200 space-y-1">
                <span className="text-charcoal-500 font-medium">Principal Name & Qualifications:</span>
                <p className="font-bold text-navy-900 text-base">{MANDATORY_DISCLOSURE_GENERAL.principalName} ({MANDATORY_DISCLOSURE_GENERAL.principalQualifications})</p>
              </div>

              <div className="p-4 rounded-lg bg-surface-100 border border-slate-200 space-y-1">
                <span className="text-charcoal-500 font-medium">Official Email Address:</span>
                <p className="font-bold text-navy-900 text-base">{MANDATORY_DISCLOSURE_GENERAL.schoolEmail}</p>
              </div>

              <div className="p-4 rounded-lg bg-surface-100 border border-slate-200 space-y-1 md:col-span-2">
                <span className="text-charcoal-500 font-medium">Complete Campus Address:</span>
                <p className="font-bold text-navy-900 text-base">{MANDATORY_DISCLOSURE_GENERAL.schoolAddress}</p>
              </div>

              <div className="p-4 rounded-lg bg-surface-100 border border-slate-200 space-y-1">
                <span className="text-charcoal-500 font-medium">Contact Telephones:</span>
                <p className="font-bold text-navy-900 text-base">{MANDATORY_DISCLOSURE_GENERAL.contactNumbers}</p>
              </div>

              <div className="p-4 rounded-lg bg-surface-100 border border-slate-200 space-y-1">
                <span className="text-charcoal-500 font-medium">Academic Session Cycle:</span>
                <p className="font-bold text-navy-900 text-base">{MANDATORY_DISCLOSURE_GENERAL.academicSession}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Infrastructure Details */}
        {activeTab === 'infrastructure' && (
          <div className="bg-white rounded-xl p-8 shadow-card border border-slate-200 space-y-6 animate-in fade-in duration-200">
            <h3 className="text-lg font-bold font-heading text-navy-900 border-b border-slate-100 pb-3">
              Section E: Campus Infrastructure & Specifications
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-4 rounded-lg bg-surface-100 border border-slate-200 space-y-1">
                <span className="text-charcoal-500 font-medium">Total Campus Land Area:</span>
                <p className="font-bold text-navy-900 text-base">{MANDATORY_INFRASTRUCTURE.campusAreaTotal}</p>
              </div>

              <div className="p-4 rounded-lg bg-surface-100 border border-slate-200 space-y-1">
                <span className="text-charcoal-500 font-medium">Outdoor Play Area & Athletic Grounds:</span>
                <p className="font-bold text-navy-900 text-base">{MANDATORY_INFRASTRUCTURE.playgroundArea}</p>
              </div>

              <div className="p-4 rounded-lg bg-surface-100 border border-slate-200 space-y-1">
                <span className="text-charcoal-500 font-medium">Smart Digital Classrooms:</span>
                <p className="font-bold text-navy-900 text-base">{MANDATORY_INFRASTRUCTURE.classroomsTotal}</p>
              </div>

              <div className="p-4 rounded-lg bg-surface-100 border border-slate-200 space-y-1">
                <span className="text-charcoal-500 font-medium">High-Speed Digital Connectivity:</span>
                <p className="font-bold text-navy-900 text-base">{MANDATORY_INFRASTRUCTURE.digitalConnectivity}</p>
              </div>

              <div className="p-4 rounded-lg bg-surface-100 border border-slate-200 space-y-2 md:col-span-2">
                <span className="text-charcoal-500 font-medium">Specialized Empirical Laboratories:</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                  {MANDATORY_INFRASTRUCTURE.specializedLabs.map((lab, i) => (
                    <li key={i} className="flex items-center gap-2 font-semibold text-navy-900">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                      <span>{lab}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-surface-100 border border-slate-200 space-y-1 md:col-span-2">
                <span className="text-charcoal-500 font-medium">Sanitation & Hygiene Infrastructure:</span>
                <p className="font-bold text-navy-900 text-base">{MANDATORY_INFRASTRUCTURE.sanitation}</p>
              </div>
            </div>
          </div>
        )}

        {/* Administration Inspection Notice */}
        <div className="p-5 bg-gold-50/70 rounded-xl border border-gold-200 text-xs sm:text-sm text-charcoal-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <p className="font-bold text-navy-900">Public Document Inspection Policy:</p>
            <p className="mt-1">
              In accordance with educational transparency mandates, complete notarized hard copies of all statutory certificates, building stability audits, fire NOCs, and fee structures are available for inspection by parents and guardians at the administrative reception of G D Goenka Public School, Saguna More, Khagaul Road, Patna during school working hours (Monday to Saturday, 8:00 AM – 4:00 PM).
            </p>
          </div>
        </div>
      </div>

      {/* Document Inspector Modal */}
      {viewingDoc && (
        <Modal
          isOpen={!!viewingDoc}
          onClose={() => setViewingDoc(null)}
          title={`Document Inspector: ${viewingDoc.documentNumber}`}
          maxWidth="lg"
        >
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-surface-100 border border-slate-200">
              <span className="text-xs uppercase font-bold text-gold-600">{viewingDoc.category}</span>
              <h4 className="text-lg font-bold text-navy-900 font-heading mt-1">{viewingDoc.title}</h4>
              <p className="text-xs sm:text-sm text-charcoal-600 mt-2">{viewingDoc.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-surface-50 rounded border border-slate-200">
                <span className="text-charcoal-500 font-medium">Compliance Classification:</span>
                <p className="font-bold text-emerald-700 mt-0.5">{viewingDoc.verifiedStatus}</p>
              </div>
              <div className="p-3 bg-surface-50 rounded border border-slate-200">
                <span className="text-charcoal-500 font-medium">Validity / Update Cycle:</span>
                <p className="font-bold text-navy-900 mt-0.5">{viewingDoc.updatedAt}</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-dashed border-slate-300 text-center space-y-2">
              <FileText className="w-10 h-10 text-royal-600 mx-auto" />
              <p className="text-xs text-charcoal-600">
                Original signed and certified statutory document is preserved in the Institutional Records Registry under CBSE Appendix IX.
              </p>
              <div className="pt-2">
                <Button
                  type="button"
                  variant="primary-gold"
                  size="sm"
                  onClick={() => alert(`Official verification confirmed for ${viewingDoc.title}. Physical records available at administrative reception.`)}
                >
                  Confirm Verification Status
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};
