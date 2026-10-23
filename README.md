# G D Goenka Public School, Patna — Official Website Frontend

> **"Higher, Stronger, Brighter"**  
> *Under the Aegis of the G D Goenka Group, New Delhi (CBSE Curriculum Framework)*  
> Official Domain: [gdgoenkapatna.com](https://gdgoenkapatna.com/)

---

## 1. Project Overview

A modern, responsive, and education-brand website built for **G D Goenka Public School, Patna, Bihar, India**. 
The website communicates academic quality, showcases the learning environment (including the Aerobay lab, smart classrooms, and world-class sports facilities), builds parent trust, and facilitates admission enquiries and campus visits.

---

## 2. Verified School Information

All information is consolidated into a single central configuration file: [`src/data/schoolConfig.ts`](file:///c:/Website/GD%20school/src/data/schoolConfig.ts).

- **School Name**: G D Goenka Public School, Patna
- **Location**: New AG Colony, R.K. Puram, Khagaul Road, Saguna More, Patna, Bihar 801503
- **Phone Numbers**: 
  - Primary: `+91 77810 04161` (Click-to-call: `tel:+917781004161`)
  - Alternate: `+91 77810 04162` (Click-to-call: `tel:+917781004162`)
- **Official Email**: `info@gdgoenkapatna.com` (Click-to-email: `mailto:info@gdgoenkapatna.com`)
- **Principal**: Mrs. Meeta Sharma (M.A., M.Ed., 20+ years of educational leadership)
- **Founder & Chairman**: Shri Gopal Krishna Gupta
- **Vice Chairman**: Mr. Akash Deep
- **Managing Director**: Mr. Sandeep Anand
- **Motto**: *"Higher, Stronger, Brighter"*
- **Classes Offered**: Pre-Nursery to Senior Secondary (CBSE Curriculum)

---

## 3. Brand Identity & Design System

The visual design follows a clean, editorial layout inspired by premier international academies:

- **Deep Navy Blue**: `#102747` (Authority, trust, and tradition)
- **Royal Blue**: `#2455A4` (Vibrancy and academic energy)
- **Warm Gold Accent**: `#C7A45A` (Prestige and distinction)
- **Clean White**: `#FFFFFF` (Clarity and spaciousness)
- **Soft Background**: `#F5F7FA` (Warm readability)
- **Dark Text**: `#202A38` (High contrast legibility)
- **Muted Text**: `#687386`
- **Typography**: 
  - Headings: Plus Jakarta Sans / Manrope
  - Body: Inter

---

## 4. Website Architecture & Routes

| Route | Page Name | Key Features & Purpose |
|---|---|---|
| `/` | **Home Page** | Hero, quick stats banner, school introduction, educational philosophy, facilities showcase, academics preview, leadership spotlight, photo gallery preview with lightbox, news & events, factual standards, admission CTA |
| `/about` | **About Us** | Institutional history, vision, mission, core values, leadership overview |
| `/principal-message` | **Principal's Welcome** | Full welcome address by Mrs. Meeta Sharma, pedagogical values, credentials |
| `/chairman-message` | **Chairman's Address** | Founding message by Shri Gopal Krishna Gupta, inspiration and dedication |
| `/foundation` | **School Foundation** | History of the school, purpose-built campus genesis at Saguna More, Patna |
| `/academics` | **Academics Overview** | CBSE alignment, CCE assessment framework, pedagogical pillars |
| `/academics/pre-primary` | **Pre-Primary Wing** | Playgroup, Nursery, LKG, UKG; Montessori play-way, 15:1 ratio, developmental milestones |
| `/academics/primary` | **Primary & Middle** | Classes I to VIII; STEM, Aerobay lab integration, house tournaments |
| `/campus-facilities` | **Campus & Facilities** | Aerobay lab, Science labs, Maths lab, Computer & AI lab, Smart classrooms, Semi-Olympic pool, Sports complex, Arts studio, Campus safety & infirmary |
| `/admissions` | **Admissions & Enquiries** | 4-step admission journey, age criteria matrix, required documents checklist, interactive validated enquiry form, FAQ accordion |
| `/gallery` | **Photo Gallery** | Filterable gallery (Campus, Labs, Sports, Classrooms, Events) with fullscreen keyboard-navigable Lightbox (Next, Prev, Esc) |
| `/news-events` | **News & Events** | Chronological updates, searchable and filterable stories |
| `/news-events/:slug` | **Article Detail** | Full editorial article, author, category, related stories, Web Share API with clipboard fallback |
| `/careers` | **Careers & Recruitment** | Open vacancies, candidate criteria, responsive application form with CV file upload validation |
| `/mandatory-disclosure` | **Mandatory Disclosure** | CBSE Appendix IX statutory compliance, document records, infrastructure data |
| `/contact` | **Contact Us** | Full address, interactive Google Maps directions, validated contact message form, campus tour booking |
| `*` | **404 Page** | Friendly not-found screen with quick navigation links back home |

---

## 5. Forms & Interactive Functionality

1. **Admission Enquiry Form (`/admissions` & Homepage)**:
   - Required-field validation.
   - 10-digit Indian mobile number validation (`+91` / `9876543210`).
   - Grade and academic session selection.
   - Prevents duplicate submissions and displays loading state.
   - Stores mock submissions locally via [`storageService`](file:///c:/Website/GD%20school/src/services/storageService.ts) and displays an explicit demonstration receipt with reference ID.

2. **Career Application Form (`/careers`)**:
   - File upload validation (checks permitted types: `.pdf`, `.doc`, `.docx` and enforces < 5MB file size).
   - Mock demo storage and reference ID generation.

3. **Contact Message Form (`/contact`)**:
   - Validation for name, phone, subject, and message.
   - Instant feedback and routing notification.

4. **Fullscreen Gallery Lightbox**:
   - Category filtering (All, Campus, Labs, Sports, Classrooms, Celebrations).
   - Modal lightbox supporting **Next (Right Arrow)**, **Previous (Left Arrow)**, and **Close (Esc)** keys.

---

## 6. How to Run Locally

### Prerequisites
- Node.js (v18 or higher recommended, tested on v22.20.0)
- npm (v9 or higher)

### Installation & Development
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (TypeScript check + Vite bundle)
npm run build

# 4. Preview production build
npm run preview
```

---

## 7. Configuration Guide for School Administrators

- **Update Phone Numbers, Email, Address, or Maps**: Edit [`src/data/schoolConfig.ts`](file:///c:/Website/GD%20school/src/data/schoolConfig.ts).
- **Add or Update Facilities**: Edit [`src/data/facilitiesData.ts`](file:///c:/Website/GD%20school/src/data/facilitiesData.ts).
- **Publish News & Events**: Add items to [`src/data/newsEventsData.ts`](file:///c:/Website/GD%20school/src/data/newsEventsData.ts).
- **Update Job Vacancies**: Edit [`src/data/careersData.ts`](file:///c:/Website/GD%20school/src/data/careersData.ts).
- **Replace Stock Images with Campus Shoot Photos**: Replace the URLs in `ASSET_IMAGES` in [`src/data/schoolConfig.ts`](file:///c:/Website/GD%20school/src/data/schoolConfig.ts) with paths to your local images in `public/images/`.
