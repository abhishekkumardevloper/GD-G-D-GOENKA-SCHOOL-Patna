export interface SchoolContactInfo {
  schoolName: string;
  affiliationNotice: string;
  tagline: string;
  motto: string;
  address: {
    line1: string;
    landmark: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    fullAddress: string;
  };
  phoneNumbers: {
    primary: string;
    alternate: string;
    displayPrimary: string;
    displayAlternate: string;
  };
  email: string;
  workingHours: {
    days: string;
    timing: string;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
  };
  maps: {
    embedUrl: string;
    directionsUrl: string;
  };
  officialDomain: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  designation: string;
  title: string;
  bioSummary: string;
  fullMessage: string[];
  quote: string;
  image: string;
  credentials?: string;
}

export interface AcademicStage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  grades: string;
  ageGroup: string;
  heroImage: string;
  overview: string;
  pedagogy: string[];
  keyHighlights: string[];
  curriculumFocus: {
    area: string;
    description: string;
  }[];
  coCurricular: string[];
}

export interface Facility {
  id: string;
  title: string;
  category: 'academic' | 'technology' | 'sports' | 'safety' | 'creative';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  features: string[];
  isHighlight?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'academics' | 'labs' | 'sports' | 'events' | 'celebrations';
  imageUrl: string;
  caption: string;
  altText: string;
  featured?: boolean;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: 'Academics' | 'Events' | 'Campus Life' | 'Achievement' | 'Sports' | 'Celebrations';
  excerpt: string;
  content: string[];
  featuredImage: string;
  tags: string[];
  author?: string;
}

export interface CareerVacancy {
  id: string;
  title: string;
  department: string;
  type: 'Full-time' | 'Contract';
  location: string;
  experience: string;
  qualification: string;
  rolesResponsibilities: string[];
  description: string;
  isOpen: boolean;
}

export interface AdmissionFormData {
  parentName: string;
  studentName: string;
  phone: string;
  email: string;
  gradeApplyingFor: string;
  academicSession: string;
  dateOfBirth?: string;
  currentSchool?: string;
  message?: string;
  preferredCampusVisitDate?: string;
}

export interface CareerFormData {
  fullName: string;
  email: string;
  phone: string;
  positionApplied: string;
  experienceYears: string;
  highestQualification: string;
  coverNote?: string;
  fileName?: string;
  fileSize?: number;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface MandatoryDocument {
  id: string;
  documentNumber: string;
  title: string;
  category: string;
  description: string;
  fileUrl?: string;
  verifiedStatus: 'Verified by School' | 'Statutory Compliance' | 'Available in Admin Office';
  updatedAt: string;
}
