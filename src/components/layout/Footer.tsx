import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';
import { Logo } from '../brand/Logo.tsx';
import { BRAND_CONFIG, SERVICES_DATA } from '../../data/constants.ts';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#02050E] border-t border-white/10 text-slate-300 pt-16 pb-12 overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#078BFF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF8A00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mt-3">
              {BRAND_CONFIG.description}
            </p>
            <div className="pt-2">
              <a
                href={BRAND_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#071B3A] border border-[#FF8A00]/40 text-xs font-semibold text-white hover:border-[#FF8A00] transition-colors group"
              >
                <span className="w-4 h-4 rounded-full overflow-hidden shrink-0 inline-flex items-center justify-center bg-[#25D366]">
                  <img
                    src="/assets/aistudio/download_5b82a999.png"
                    alt="WhatsApp"
                    className="w-full h-full object-cover scale-[1.5] select-none pointer-events-none"
                  />
                </span>
                <span>WhatsApp: {BRAND_CONFIG.whatsappNumber}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#078BFF] transition-colors focus:outline-none focus-visible:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#078BFF] transition-colors focus:outline-none focus-visible:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="hover:text-[#078BFF] transition-colors focus:outline-none focus-visible:underline"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-[#078BFF] transition-colors focus:outline-none focus-visible:underline"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#078BFF] transition-colors focus:outline-none focus-visible:underline"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.slug}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="hover:text-[#078BFF] transition-colors focus:outline-none focus-visible:underline flex items-center justify-between group"
                  >
                    <span>{srv.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/services"
                  className="text-xs font-semibold text-[#FF8A00] hover:underline"
                >
                  View All Services Overview →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact via WhatsApp (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Instant Agency Support
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Connect directly with our performance directors for immediate audits and proposals.
            </p>

            <div className="p-4 rounded-xl bg-[#071B3A]/80 border border-white/5 space-y-2.5">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Clock className="w-3.5 h-3.5 text-[#078BFF]" />
                <span>Monday – Saturday Fast Response</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF8A00]" />
                <span>Direct WhatsApp Consultation</span>
              </div>

              <div className="pt-2">
                <a
                  href={BRAND_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF8A00] hover:bg-[#FF9B26] text-white text-xs font-bold transition-all shadow-md shadow-orange-500/20"
                >
                  <span className="w-4 h-4 rounded-full overflow-hidden shrink-0 inline-flex items-center justify-center bg-[#25D366]">
                    <img
                      src="/assets/aistudio/download_5b82a999.png"
                      alt="WhatsApp"
                      className="w-full h-full object-cover scale-[1.5] select-none pointer-events-none"
                    />
                  </span>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {BRAND_CONFIG.name}. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <Link
              to="/privacy-policy"
              className="hover:text-slate-200 transition-colors focus:outline-none focus-visible:underline"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <Link
              to="/terms"
              className="hover:text-slate-200 transition-colors focus:outline-none focus-visible:underline"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
