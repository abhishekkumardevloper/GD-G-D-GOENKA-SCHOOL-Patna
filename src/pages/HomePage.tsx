import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { StatsBanner } from '../components/home/StatsBanner';
import { IntroSection } from '../components/home/IntroSection';
import { PhilosophySection } from '../components/home/PhilosophySection';
import { FacilitiesShowcase } from '../components/home/FacilitiesShowcase';
import { AcademicsPreview } from '../components/home/AcademicsPreview';
import { LeadershipSpotlight } from '../components/home/LeadershipSpotlight';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { NewsEventsPreview } from '../components/home/NewsEventsPreview';
import { FactualHighlights } from '../components/home/FactualHighlights';
import { AdmissionsBanner } from '../components/home/AdmissionsBanner';

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Key Stats & Metric Highlights */}
      <StatsBanner />

      {/* 3. Introduction to School */}
      <IntroSection />

      {/* 4. Educational Philosophy & Ethos */}
      <PhilosophySection />

      {/* 5. Campus & Facilities Showcase (Aerobay, Labs, Smart Classrooms) */}
      <FacilitiesShowcase />

      {/* 6. Academics Preview (Pre-Primary, Primary & Middle) */}
      <AcademicsPreview />

      {/* 7. Leadership & Principal's Spotlight */}
      <LeadershipSpotlight />

      {/* 8. School Photo Gallery Preview with Lightbox */}
      <GalleryPreview />

      {/* 9. News & Events Announcements */}
      <NewsEventsPreview />

      {/* 10. Institutional Standards & Verified Safety */}
      <FactualHighlights />

      {/* 11. Admissions Call to Action */}
      <AdmissionsBanner />
    </div>
  );
};
