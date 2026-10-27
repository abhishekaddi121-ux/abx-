import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout.tsx';

// Page Shells
import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ServicesIndexPage } from './pages/ServicesIndexPage.tsx';
import { ServiceDetailPage } from './pages/ServiceDetailPage.tsx';
import { PortfolioPage } from './pages/PortfolioPage.tsx';
import { FaqPage } from './pages/FaqPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { PrivacyPage } from './pages/PrivacyPage.tsx';
import { TermsPage } from './pages/TermsPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Index */}
          <Route index element={<HomePage />} />

          {/* About Us */}
          <Route path="about" element={<AboutPage />} />

          {/* Services Hub */}
          <Route path="services" element={<ServicesIndexPage />} />

          {/* Explicit Individual Service Routes */}
          <Route
            path="services/google-ads"
            element={<ServiceDetailPage customSlug="google-ads" />}
          />
          <Route
            path="services/meta-ads"
            element={<ServiceDetailPage customSlug="meta-ads" />}
          />
          <Route
            path="services/ai-creatives"
            element={<ServiceDetailPage customSlug="ai-creatives" />}
          />
          <Route
            path="services/graphic-design"
            element={<ServiceDetailPage customSlug="graphic-design" />}
          />
          <Route
            path="services/website-development"
            element={<ServiceDetailPage customSlug="website-development" />}
          />
          <Route
            path="services/seo"
            element={<ServiceDetailPage customSlug="seo" />}
          />
          <Route
            path="services/social-media"
            element={<ServiceDetailPage customSlug="social-media" />}
          />
          <Route
            path="services/youtube-ads"
            element={<ServiceDetailPage customSlug="youtube-ads" />}
          />
          <Route
            path="services/google-business-profile"
            element={<ServiceDetailPage customSlug="google-business-profile" />}
          />

          {/* Dynamic Service Fallback */}
          <Route path="services/:slug" element={<ServiceDetailPage />} />

          {/* Portfolio */}
          <Route path="portfolio" element={<PortfolioPage />} />

          {/* FAQ */}
          <Route path="faq" element={<FaqPage />} />

          {/* Contact */}
          <Route path="contact" element={<ContactPage />} />

          {/* Legal Pages */}
          <Route path="privacy-policy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
