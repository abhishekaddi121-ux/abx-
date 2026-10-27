import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { Button } from '../components/common/Button.tsx';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center w-full">
      <Breadcrumbs items={[{ label: '404 Page Not Found' }]} className="justify-center" />

      <div className="mt-8 p-8 sm:p-12 rounded-3xl bg-[#071B3A] border border-white/10 shadow-2xl">
        <span className="text-5xl sm:text-7xl font-extrabold text-[#FF8A00] tracking-tight">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mt-4">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-300 mt-3 max-w-md mx-auto leading-relaxed">
          The requested page route could not be found or has moved. Return to our home overview or explore our services catalog.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="md" to="/" icon={<Home className="w-4 h-4" />}>
            Return Home
          </Button>
          <Button variant="secondary" size="md" to="/services" icon={<ArrowLeft className="w-4 h-4" />}>
            Browse Services
          </Button>
        </div>
      </div>
    </div>
  );
};
