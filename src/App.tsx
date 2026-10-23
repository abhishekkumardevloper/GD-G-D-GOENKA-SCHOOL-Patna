import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PrincipalMessagePage } from './pages/PrincipalMessagePage';
import { ChairmanMessagePage } from './pages/ChairmanMessagePage';
import { FoundationPage } from './pages/FoundationPage';
import { AcademicsLandingPage } from './pages/AcademicsLandingPage';
import { PrePrimaryPage } from './pages/PrePrimaryPage';
import { PrimaryPage } from './pages/PrimaryPage';
import { CampusFacilitiesPage } from './pages/CampusFacilitiesPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { GalleryPage } from './pages/GalleryPage';
import { NewsEventsPage } from './pages/NewsEventsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { CareersPage } from './pages/CareersPage';
import { MandatoryDisclosurePage } from './pages/MandatoryDisclosurePage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="principal-message" element={<PrincipalMessagePage />} />
          <Route path="chairman-message" element={<ChairmanMessagePage />} />
          <Route path="foundation" element={<FoundationPage />} />
          <Route path="academics" element={<AcademicsLandingPage />} />
          <Route path="academics/pre-primary" element={<PrePrimaryPage />} />
          <Route path="academics/primary" element={<PrimaryPage />} />
          <Route path="campus-facilities" element={<CampusFacilitiesPage />} />
          <Route path="admissions" element={<AdmissionsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="news-events" element={<NewsEventsPage />} />
          <Route path="news-events/:slug" element={<NewsDetailPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="mandatory-disclosure" element={<MandatoryDisclosurePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
