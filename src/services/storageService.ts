import { AdmissionFormData, CareerFormData, ContactFormData } from '../types';

export interface StoredSubmission<T> {
  id: string;
  timestamp: string;
  type: 'admission' | 'career' | 'contact' | 'campus-visit';
  data: T;
  status: 'Received (Demo Mode)' | 'Processed';
}

const STORAGE_KEYS = {
  ADMISSIONS: 'gd_patna_admissions',
  CAREERS: 'gd_patna_careers',
  CONTACT: 'gd_patna_contact',
  VISITS: 'gd_patna_visits',
};

export const storageService = {
  saveAdmissionEnquiry: async (data: AdmissionFormData): Promise<{ success: boolean; message: string; refId: string }> => {
    // Simulate real network latency (500ms) for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 600));

    const refId = `GD-ADM-${Date.now().toString().slice(-6)}`;
    const submission: StoredSubmission<AdmissionFormData> = {
      id: refId,
      timestamp: new Date().toISOString(),
      type: 'admission',
      data,
      status: 'Received (Demo Mode)',
    };

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.ADMISSIONS) || '[]');
      existing.unshift(submission);
      localStorage.setItem(STORAGE_KEYS.ADMISSIONS, JSON.stringify(existing));
    } catch {
      // Fallback for SSR or storage disabled
    }

    return {
      success: true,
      refId,
      message: `Enquiry recorded successfully (Demo Mode - Reference #${refId}). Note: This demonstration prototype stores submissions locally. For immediate admission assistance, please contact the admissions desk directly at +91 77810 04161 or info@gdgoenkapatna.com.`,
    };
  },

  saveCareerApplication: async (data: CareerFormData): Promise<{ success: boolean; message: string; refId: string }> => {
    await new Promise((resolve) => setTimeout(resolve, 600));

    const refId = `GD-CAR-${Date.now().toString().slice(-6)}`;
    const submission: StoredSubmission<CareerFormData> = {
      id: refId,
      timestamp: new Date().toISOString(),
      type: 'career',
      data,
      status: 'Received (Demo Mode)',
    };

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.CAREERS) || '[]');
      existing.unshift(submission);
      localStorage.setItem(STORAGE_KEYS.CAREERS, JSON.stringify(existing));
    } catch {
      // Fallback
    }

    return {
      success: true,
      refId,
      message: `Application recorded successfully (Demo Mode - Reference #${refId}). In a production release, your resume is transmitted to the HR Department. You may also email your CV directly to info@gdgoenkapatna.com.`,
    };
  },

  saveContactMessage: async (data: ContactFormData): Promise<{ success: boolean; message: string; refId: string }> => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const refId = `GD-CNT-${Date.now().toString().slice(-6)}`;
    const submission: StoredSubmission<ContactFormData> = {
      id: refId,
      timestamp: new Date().toISOString(),
      type: 'contact',
      data,
      status: 'Received (Demo Mode)',
    };

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEYS.CONTACT) || '[]');
      existing.unshift(submission);
      localStorage.setItem(STORAGE_KEYS.CONTACT, JSON.stringify(existing));
    } catch {
      // Fallback
    }

    return {
      success: true,
      refId,
      message: `Thank you for contacting G D Goenka Public School, Patna (Reference #${refId}). In production, messages are routed directly to the administrative desk. You may also reach us directly at +91 77810 04161.`,
    };
  },

  getStoredCount: (): number => {
    try {
      const adm = JSON.parse(localStorage.getItem(STORAGE_KEYS.ADMISSIONS) || '[]');
      const car = JSON.parse(localStorage.getItem(STORAGE_KEYS.CAREERS) || '[]');
      const cnt = JSON.parse(localStorage.getItem(STORAGE_KEYS.CONTACT) || '[]');
      return adm.length + car.length + cnt.length;
    } catch {
      return 0;
    }
  }
};
