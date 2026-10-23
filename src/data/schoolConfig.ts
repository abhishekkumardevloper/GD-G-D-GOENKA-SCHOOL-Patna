import { SchoolContactInfo } from '../types';

export const SCHOOL_CONFIG: SchoolContactInfo = {
  schoolName: "G D Goenka Public School, Patna",
  affiliationNotice: "Under the Aegis of G D Goenka Group, New Delhi (CBSE Curriculum Framework)",
  tagline: "A Strong Foundation for a Brighter Tomorrow",
  motto: "Think. Learn. Thrive.",
  address: {
    line1: "New AG Colony, R.K. Puram, Khagaul Road",
    landmark: "Saguna More Corridor",
    locality: "Saguna More, Khagaul",
    city: "Patna",
    state: "Bihar",
    pincode: "801503",
    fullAddress: "New AG Colony, R.K. Puram, Khagaul Road, Saguna More, Patna, Bihar 801503",
  },
  phoneNumbers: {
    primary: "+917781004161",
    alternate: "+917781004162",
    displayPrimary: "+91 77810 04161",
    displayAlternate: "+91 77810 04162",
  },
  email: "info@gdgoenkapatna.com",
  workingHours: {
    days: "Monday – Saturday",
    timing: "8:00 AM – 4:00 PM IST",
  },
  socialLinks: {
    facebook: "https://www.facebook.com/gdgoenkapatna/",
    instagram: "https://www.instagram.com/gdgoenkapatna/",
    youtube: "https://www.youtube.com/@gdgoenkapatna",
  },
  maps: {
    embedUrl: "https://maps.google.com/maps?q=GD+Goenka+Public+School+Saguna+More+Khagaul+Road+Patna+Bihar+801503&t=&z=14&ie=UTF8&iwloc=&output=embed",
    directionsUrl: "https://maps.google.com/?q=GD+Goenka+Public+School+Saguna+More+Khagaul+Road+Patna+Bihar+801503",
  },
  officialDomain: "https://gdgoenkapatna.com/",
};

export interface DropdownExtraCard {
  title: string;
  subtitle: string;
  badge?: string;
  image?: string;
  buttonText: string;
  buttonHref: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    subtext?: string;
    icon?: string;
  }[];
  extraCard?: DropdownExtraCard;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      {
        label: "Overview & Philosophy",
        href: "/about",
        subtext: "Our vision, mission & six Goenkan character pillars",
        icon: "Compass",
      },
      {
        label: "Principal's Welcome",
        href: "/principal-message",
        subtext: "Leadership address and educational ethos",
        icon: "Award",
      },
      {
        label: "Chairman's Message",
        href: "/chairman-message",
        subtext: "Founding message and vision for Bihar's capital",
        icon: "Heart",
      },
      {
        label: "Our Foundation",
        href: "/foundation",
        subtext: "The journey and genesis of the Patna campus",
        icon: "Building",
      },
    ],
    extraCard: {
      title: "Patna Campus",
      subtitle: "Purpose-built modern campus at Saguna More, Khagaul Road, Patna.",
      badge: "Under GD Goenka Aegis",
      image: "/images/real/campus-building.png",
      buttonText: "Statutory CBSE Disclosure",
      buttonHref: "/mandatory-disclosure",
    },
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      {
        label: "Curriculum Overview",
        href: "/academics",
        subtext: "CBSE framework, CCE assessment & NEP 2020 alignment",
        icon: "BookOpen",
      },
      {
        label: "Pre-Primary Wing",
        href: "/academics/pre-primary",
        subtext: "Playgroup, Nursery, LKG, UKG (15:1 Ratio, Play-way)",
        icon: "Sparkles",
      },
      {
        label: "Primary & Middle Wing",
        href: "/academics/primary",
        subtext: "Classes I to VIII (Inquiry learning, STEM & Sports)",
        icon: "GraduationCap",
      },
    ],
    extraCard: {
      title: "Aerobay & STEM Labs",
      subtitle: "Patna's premier school aerospace, rocketry, drone and robotics center.",
      badge: "Hands-on Innovation",
      image: "/images/real/classroom-real-1.jpg",
      buttonText: "Explore All Facilities",
      buttonHref: "/campus-facilities",
    },
  },
  { label: "Campus & Facilities", href: "/campus-facilities" },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      {
        label: "Admission Procedure",
        href: "/admissions",
        subtext: "4-step journey: Enquiry, tour, verification & admission",
        icon: "Compass",
      },
      {
        label: "Eligibility & Age Criteria",
        href: "/admissions#eligibility",
        subtext: "Playgroup (2+) through Class VIII guidelines",
        icon: "Sparkles",
      },
      {
        label: "Required Documents",
        href: "/admissions#documents",
        subtext: "Birth certificate, TC, mark sheets & photo checklist",
        icon: "BookOpen",
      },
      {
        label: "Admissions FAQs",
        href: "/admissions#faqs",
        subtext: "Common questions regarding fees, bus routes & curriculum",
        icon: "Award",
      },
    ],
    extraCard: {
      title: "Admissions Open",
      subtitle: "Sessions 2025–26 & 2026–27. Limited seats to maintain low student-teacher ratio.",
      badge: "Playgroup to Class VIII",
      buttonText: "Apply Online Now",
      buttonHref: "/admissions#enquiry-form",
    },
  },
  {
    label: "Campus Life",
    href: "/gallery",
    children: [
      {
        label: "Photo Gallery",
        href: "/gallery",
        subtext: "Filterable photos of classrooms, sports & events",
        icon: "Sparkles",
      },
      {
        label: "News & Events",
        href: "/news-events",
        subtext: "Latest announcements, sports meets & exhibitions",
        icon: "BookOpen",
      },
      {
        label: "Careers at Goenka",
        href: "/careers",
        subtext: "Faculty & staff recruitment opportunities",
        icon: "GraduationCap",
      },
      {
        label: "Mandatory Disclosure",
        href: "/mandatory-disclosure",
        subtext: "CBSE Appendix IX statutory compliance records",
        icon: "Award",
      },
    ],
    extraCard: {
      title: "Student Community",
      subtitle: "Nurturing confidence through daily assemblies, athletics & cultural expression.",
      badge: "Patna Campus Life",
      image: "/images/real/students-assembly.jpg",
      buttonText: "Browse Photo Gallery",
      buttonHref: "/gallery",
    },
  },
  { label: "Contact Us", href: "/contact" },
];

/**
 * Authentic, Verified Real School Imagery
 */
export const ASSET_IMAGES = {
  officialLogo: "/images/real/logo-2nd-scaled.png",
  logoShield: "/images/real/gd-logo-shield.png",
  heroBanner: "/images/real/campus-grounds.webp",
  campusFacade: "/images/real/campus-building.png",
  smartClassroom: "/images/real/classroom-real-1.jpg",
  classroomPlay: "/images/real/classroom-real-2.jpg",
  classroomGroup: "/images/real/classroom-real-3.jpg",
  studentsAssembly: "/images/real/students-assembly.jpg",
  campusActivity: "/images/real/campus-activity.jpg",
  primaryStudents: "/images/real/primary-real.jpg",
  sportsReal: "/images/real/sports-real.jpg",
  aboutReal: "/images/real/about-real.jpg",
  contactBg: "/images/real/contact-bg.jpg",
  studentsReal: "/images/real/students-real.jpg",
  eventReal: "/images/real/event-real.jpg",
  chairmanPortrait: "/images/real/chairman-portrait.webp",
  principalPortrait: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
  aerobayLab: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80",
  scienceLab: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1400&q=80",
  mathsLab: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1400&q=80",
  computerLab: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  library: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1400&q=80",
  sportsComplex: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1400&q=80",
  swimmingPool: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1400&q=80",
  artStudio: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1400&q=80",
  musicStudio: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1400&q=80",
  prePrimaryKids: "/images/real/classroom-real-2.jpg",
};
