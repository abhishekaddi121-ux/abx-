import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar.tsx';
import { Footer } from './Footer.tsx';
import { FloatingWhatsApp } from './FloatingWhatsApp.tsx';

export const Layout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on every navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#030817] text-slate-100 relative selection:bg-[#FF8A00] selection:text-white">
      {/* Background Architectural Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Electric Blue Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#078BFF]/10 rounded-full blur-[140px]" />
        {/* Subtle Orange Glow in bottom-left */}
        <div className="absolute top-[40%] -left-40 w-[600px] h-[500px] bg-[#FF8A00]/5 rounded-full blur-[160px]" />
        {/* Subtle Navy Surface Glow in bottom-right */}
        <div className="absolute bottom-10 -right-40 w-[700px] h-[500px] bg-[#071B3A]/30 rounded-full blur-[150px]" />
      </div>

      {/* Global Navbar */}
      <Navbar />

      {/* Main Page Content Area */}
      <main className="flex-1 relative z-10 flex flex-col">
        <Outlet />
      </main>

      {/* Floating Direct WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Global Multi-Column Footer */}
      <Footer />
    </div>
  );
};
