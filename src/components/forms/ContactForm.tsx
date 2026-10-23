import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { ContactFormData } from '../../types';
import { storageService } from '../../services/storageService';
import { Button } from '../common/Button';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    subject: 'General Campus Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
    refId?: string;
  } | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    const indianPhoneRegex = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact phone number is required';
    } else if (!indianPhoneRegex.test(phoneClean)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide your message or inquiry';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
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
      const res = await storageService.saveContactMessage(formData);
      setSubmissionResult(res);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        subject: 'General Campus Enquiry',
        message: '',
      });
    } catch {
      setSubmissionResult({
        success: false,
        message: 'Unable to send message at this moment. Please call +91 90902 12000.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-card border border-slate-200/80 p-6 sm:p-8">
      <h3 className="text-xl sm:text-2xl font-bold text-navy-900 font-heading mb-2">
        Send Us a Direct Message
      </h3>
      <p className="text-xs sm:text-sm text-charcoal-500 mb-6">
        Our administrative desk responds to all enquiries within 24 working hours.
      </p>

      {submissionResult && submissionResult.success && (
        <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 animate-in fade-in duration-200">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <p className="font-bold text-emerald-900">Message Dispatched</p>
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
        <div>
          <label htmlFor="contactFullName" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="contactFullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your Name"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none ${
              errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.fullName}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contactPhone" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
              Mobile Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              id="contactPhone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none ${
                errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contactEmail" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="contactEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
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

        <div>
          <label htmlFor="contactSubject" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
            Subject
          </label>
          <select
            id="contactSubject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none"
          >
            <option value="General Campus Enquiry">General Campus Enquiry</option>
            <option value="Admissions & Eligibility">Admissions & Eligibility</option>
            <option value="Schedule a Campus Tour">Schedule a Campus Tour</option>
            <option value="Transport & Bus Routes">Transport & Bus Routes</option>
            <option value="Fee Structure & Formalities">Fee Structure & Formalities</option>
            <option value="Administrative Desk">Administrative Desk</option>
          </select>
        </div>

        <div>
          <label htmlFor="contactMessage" className="block text-xs font-semibold text-charcoal-700 uppercase tracking-wider mb-1">
            Message <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="contactMessage"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your query or request details here..."
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-charcoal-900 bg-surface-50 focus:bg-white transition-colors focus:ring-2 focus:ring-gold-500 focus:outline-none resize-none ${
              errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
            }`}
          />
          {errors.message && (
            <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        <div>
          <Button
            type="submit"
            variant="navy"
            size="md"
            isLoading={isSubmitting}
            className="w-full justify-center"
            rightIcon={<Send className="w-4 h-4 text-gold-400" />}
          >
            Submit Message
          </Button>
        </div>
      </form>
    </div>
  );
};
