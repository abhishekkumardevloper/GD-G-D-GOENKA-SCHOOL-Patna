import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { TopBar } from '../components/navigation/TopBar';
import { Navbar } from '../components/navigation/Navbar';
import { Footer } from '../components/navigation/Footer';

export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-surface-200 text-charcoal-800">
      {/* Top Contact Bar */}
      <TopBar />

      {/* Main Sticky Navbar */}
      <Navbar />

      {/* Page Content Viewport */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      {/* Universal Institutional Footer */}
      <Footer />
    </div>
  );
};
