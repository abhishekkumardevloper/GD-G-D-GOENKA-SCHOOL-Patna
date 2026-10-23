import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Info, Sparkles } from 'lucide-react';
import { AdmissionFormData } from '../../types';
import { storageService } from '../../services/storageService';
import { Button } from '../common/Button';

interface AdmissionEnquiryFormProps {
  defaultGrade?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export const AdmissionEnquiryForm: React.FC<AdmissionEnquiryFormProps> = ({
  defaultGrade = '',
  compact = false,
}) => {
  const [formData, setFormData] = useState<AdmissionFormData>({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    gradeApplyingFor: defaultGrade || 'Nursery',
    academicSession: '2025-2026',
    dateOfBirth: '',
    message: '',
    preferredCampusVisitDate: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof AdmissionFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
    refId?: string;
  } | null>(null);

  // Validate form inputs
  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof AdmissionFormData, string>> = {};

    if (!formData.parentName.trim()) {
      newErrors.parentName = 'Parent or Guardian name is required';
    } else if (formData.parentName.trim().length < 3) {
      newErrors.parentName = 'Please enter a valid name (minimum 3 characters)';
    }

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    }

    // Indian Phone validation: 10 digits starting with 6, 7, 8, or 9 (with optional +91 prefix)
    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    const indianPhoneRegex = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact phone number is required';
    } else if (!indianPhoneRegex.test(phoneClean)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.gradeApplyingFor) {
      newErrors.gradeApplyingFor = 'Please select a grade or stage';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const res = await storageService.saveAdmissionEnquiry(formData);
      setSubmissionResult(res);
      // Reset form on success
      setFormData({
        parentName: '',
        studentName: '',
        phone: '',
        email: '',
        gradeApplyingFor: 'Nursery',
        academicSession: '2025-2026',
        dateOfBirth: '',
        message: '',
        preferredCampusVisitDate: '',
      });
    } catch {
      setSubmissionResult({
        success: false,
        message: 'Could not record enquiry. Please retry or contact the admission desk directly at +91 90902 12000.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof AdmissionFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-card border border-slate-200/80 p-6 sm:p-8">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Session 2025–2026 & 2026–2027</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-navy-900 font-heading">
          Official Admission Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
          Complete the form below to receive a prospectus, fee schedule, and campus tour slot.
        </p>
      </div>

      {/* Success Notification */}
      {submissionResult && submissionResult.success && (
        <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 animate-in fade-in duration-200">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <p className="font-bold text-emerald-900">Enquiry Recorded Successfully!</p>
              <p className="mt-1 text-emerald-800 leading-relaxed">{submissionResult.message}</p>
              <div className="mt-2 text-xs font-mono bg-emerald-100/70 inline-block px-2 py-1 rounded text-emerald-950 font-bold">
                Reference ID: {submissionResult.refId}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Banner */}
      {submissionResult && !submissionResult.success && (
        <div className="mb-6 p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm">{submissionResult.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Row 1: Parent Name & Student Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="parentName" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
              Parent / Guardian Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="e.g. Rajesh Kumar Sharma"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none ${
                errors.parentName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
              }`}
            />
            {errors.parentName && (
              <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.parentName}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="studentName" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
              Student Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="e.g. Aarav Sharma"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none ${
                errors.studentName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
              }`}
            />
            {errors.studentName && (
              <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.studentName}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
              Contact Phone (Mobile) <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-xs font-medium text-charcoal-500">
                +91
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9876543210"
                maxLength={13}
                className={`w-full pl-11 pr-3.5 py-2.5 rounded-lg border text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none ${
                  errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
              Email Address (Optional)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="parent@example.com"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none ${
                errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
              }`}
            />
            {errors.email && (
              <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Grade Selection & Academic Session */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="gradeApplyingFor" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
              Class / Grade Applying For <span className="text-rose-500">*</span>
            </label>
            <select
              id="gradeApplyingFor"
              name="gradeApplyingFor"
              value={formData.gradeApplyingFor}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none"
            >
              <optgroup label="Pre-Primary Wing">
                <option value="Playgroup">Playgroup (Age 2+)</option>
                <option value="Nursery">Nursery (Age 3+)</option>
                <option value="Lower KG (LKG)">Lower KG / LKG (Age 4+)</option>
                <option value="Upper KG (UKG)">Upper KG / UKG (Age 5+)</option>
              </optgroup>
              <optgroup label="Primary Wing">
                <option value="Class I">Class I</option>
                <option value="Class II">Class II</option>
                <option value="Class III">Class III</option>
                <option value="Class IV">Class IV</option>
                <option value="Class V">Class V</option>
              </optgroup>
              <optgroup label="Middle Wing">
                <option value="Class VI">Class VI</option>
                <option value="Class VII">Class VII</option>
                <option value="Class VIII">Class VIII</option>
              </optgroup>
            </select>
          </div>

          <div>
            <label htmlFor="academicSession" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
              Academic Session
            </label>
            <select
              id="academicSession"
              name="academicSession"
              value={formData.academicSession}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none"
            >
              <option value="2025-2026">Session 2025–2026 (Ongoing)</option>
              <option value="2026-2027">Session 2026–2027 (Upcoming)</option>
            </select>
          </div>
        </div>

        {/* Optional Preferred Campus Visit Date */}
        {!compact && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredCampusVisitDate" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
                Preferred Campus Tour Date (Optional)
              </label>
              <input
                type="date"
                id="preferredCampusVisitDate"
                name="preferredCampusVisitDate"
                value={formData.preferredCampusVisitDate}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="dateOfBirth" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
                Student Date of Birth (Optional)
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Message / Additional Query */}
        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
            Questions or Specific Enquiries (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={compact ? 2 : 3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your child's current school, interests, or any queries regarding transport or admissions..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none resize-none"
          />
        </div>

        {/* Transparency note */}
        <div className="p-3 bg-surface-200 rounded-lg text-[11px] text-charcoal-600 flex items-start gap-2 border border-slate-200">
          <Info className="w-4 h-4 text-royal-600 shrink-0 mt-0.5" />
          <span>
            <strong>Institutional Privacy Notice:</strong> Your information is handled securely and used exclusively by G D Goenka Public School, Patna admissions counsellors.
          </span>
        </div>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            variant="primary-gold"
            size="lg"
            isLoading={isSubmitting}
            className="w-full justify-center text-base font-bold shadow-md"
            rightIcon={<Send className="w-4 h-4 text-navy-950" />}
          >
            Submit Admission Enquiry
          </Button>
        </div>
      </form>
    </div>
  );
};
