import React, { useState } from 'react';
import { Upload, CheckCircle2, AlertCircle, FileText, Send, Sparkles } from 'lucide-react';
import { CareerFormData } from '../../types';
import { storageService } from '../../services/storageService';
import { Button } from '../common/Button';

interface CareerApplicationFormProps {
  initialPosition?: string;
  onSuccess?: () => void;
}

export const CareerApplicationForm: React.FC<CareerApplicationFormProps> = ({
  initialPosition = 'Primary Teachers (PRT) - English, EVS & Mathematics',
}) => {
  const [formData, setFormData] = useState<CareerFormData>({
    fullName: '',
    email: '',
    phone: '',
    positionApplied: initialPosition,
    experienceYears: '2-5 years',
    highestQualification: 'B.Ed. / Graduation',
    coverNote: '',
    fileName: '',
    fileSize: 0,
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof CareerFormData | 'resumeFile', string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
    refId?: string;
  } | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof CareerFormData | 'resumeFile', string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Valid email is required for communication';
    }

    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    const indianPhoneRegex = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/;
    if (!formData.phone.trim() || !indianPhoneRegex.test(phoneClean)) {
      newErrors.phone = 'Valid 10-digit mobile number required';
    }

    if (!formData.positionApplied) {
      newErrors.positionApplied = 'Please select a position';
    }

    if (!selectedFile) {
      newErrors.resumeFile = 'Please attach your updated CV or Resume (.pdf or .docx)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file type: pdf, doc, docx
    const allowedExtensions = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const isExtensionValid = allowedExtensions.includes(file.type) || /\.(pdf|doc|docx)$/i.test(file.name);

    if (!isExtensionValid) {
      setErrors(prev => ({ ...prev, resumeFile: 'Only PDF or Word documents (.pdf, .doc, .docx) are accepted' }));
      setSelectedFile(null);
      return;
    }

    // 5MB max
    if (file.size > 5 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, resumeFile: 'File size must be under 5MB' }));
      setSelectedFile(null);
      return;
    }

    setSelectedFile(file);
    setFormData(prev => ({
      ...prev,
      fileName: file.name,
      fileSize: file.size,
    }));
    setErrors(prev => ({ ...prev, resumeFile: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const res = await storageService.saveCareerApplication(formData);
      setSubmissionResult(res);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        positionApplied: initialPosition,
        experienceYears: '2-5 years',
        highestQualification: 'B.Ed. / Graduation',
        coverNote: '',
        fileName: '',
        fileSize: 0,
      });
      setSelectedFile(null);
    } catch {
      setSubmissionResult({
        success: false,
        message: 'Submission failed. Please email your CV directly to info@gdgoenkapatna.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof CareerFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-card border border-slate-200/80 p-6 sm:p-8">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Faculty & Staff Recruitment</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-navy-900 font-heading">
          Apply for an Open Position
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
          Join a visionary community of educators committed to inspiring Patna's future leaders.
        </p>
      </div>

      {submissionResult && submissionResult.success && (
        <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 animate-in fade-in duration-200">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <p className="font-bold text-emerald-900">Application Stored (Demo Mode)</p>
              <p className="mt-1 text-emerald-800 leading-relaxed">{submissionResult.message}</p>
            </div>
          </div>
        </div>
      )}

      {submissionResult && !submissionResult.success && (
        <div className="mb-6 p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm">{submissionResult.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Full Name & Position */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="careerFullName" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
              Candidate Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="careerFullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Ananya Sen"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none ${
                errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="positionApplied" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
              Position Applied For <span className="text-rose-500">*</span>
            </label>
            <select
              id="positionApplied"
              name="positionApplied"
              value={formData.positionApplied}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none"
            >
              <option value="Primary Teachers (PRT) - English, EVS & Mathematics">Primary Teachers (PRT) - English, EVS & Mathematics</option>
              <option value="Trained Graduate Teachers (TGT) - Science & Mathematics">Trained Graduate Teachers (TGT) - Science & Mathematics</option>
              <option value="Pre-Primary / Nursery Facilitators (ECCE)">Pre-Primary / Nursery Facilitators (ECCE)</option>
              <option value="Aerobay & STEM Lab Coordinator / Robotics Trainer">Aerobay & STEM Lab Coordinator / Robotics Trainer</option>
              <option value="Physical Education & Swimming Coach">Physical Education & Swimming Coach</option>
              <option value="Performing Arts / Music / Dance Teacher">Performing Arts / Music / Dance Teacher</option>
              <option value="Administrative / Front Office Executive">Administrative / Front Office Executive</option>
            </select>
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="careerEmail" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              id="careerEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="candidate@example.com"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none ${
                errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
              }`}
            />
            {errors.email && (
              <p className="text-xs text-rose-600 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="careerPhone" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
              Mobile Contact <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              id="careerPhone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none ${
                errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Experience & Qualifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="experienceYears" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
              Teaching / Professional Experience
            </label>
            <select
              id="experienceYears"
              name="experienceYears"
              value={formData.experienceYears}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none"
            >
              <option value="Fresher / 0-1 year">Fresher / 0–1 year</option>
              <option value="1-3 years">1–3 years</option>
              <option value="3-5 years">3–5 years</option>
              <option value="5-8 years">5–8 years</option>
              <option value="8+ years">8+ years (Senior / Leadership)</option>
            </select>
          </div>

          <div>
            <label htmlFor="highestQualification" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
              Highest Educational Qualification
            </label>
            <input
              type="text"
              id="highestQualification"
              name="highestQualification"
              value={formData.highestQualification}
              onChange={handleChange}
              placeholder="e.g. M.Sc. Physics, B.Ed. (CTET Qualified)"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Resume File Upload */}
        <div>
          <label className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
            Attach Resume / Curriculum Vitae (PDF, DOCX max 5MB) <span className="text-rose-500">*</span>
          </label>
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:bg-surface-50 transition-colors">
            <input
              type="file"
              id="resumeUpload"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            <label htmlFor="resumeUpload" className="cursor-pointer flex flex-col items-center">
              <Upload className="w-8 h-8 text-charcoal-400 mb-2" />
              {selectedFile ? (
                <div className="flex items-center gap-2 text-xs font-medium text-navy-800">
                  <FileText className="w-4 h-4 text-gold-500" />
                  <span>{selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                  <span className="text-royal-600 underline ml-2">Change File</span>
                </div>
              ) : (
                <>
                  <span className="text-xs font-semibold text-navy-800">Click to upload your resume</span>
                  <span className="text-[11px] text-charcoal-400 mt-1">PDF or Word files up to 5MB</span>
                </>
              )}
            </label>
          </div>
          {errors.resumeFile && (
            <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.resumeFile}
            </p>
          )}
        </div>

        {/* Cover Note */}
        <div>
          <label htmlFor="coverNote" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
            Brief Professional Statement / Philosophy (Optional)
          </label>
          <textarea
            id="coverNote"
            name="coverNote"
            rows={3}
            value={formData.coverNote}
            onChange={handleChange}
            placeholder="Share why you wish to teach at G D Goenka Public School Patna and your pedagogical values..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none resize-none"
          />
        </div>

        <div>
          <Button
            type="submit"
            variant="primary-gold"
            size="lg"
            isLoading={isSubmitting}
            className="w-full justify-center font-bold"
            rightIcon={<Send className="w-4 h-4 text-navy-950" />}
          >
            Submit Application
          </Button>
        </div>
      </form>
    </div>
  );
};
