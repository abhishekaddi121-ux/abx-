import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  Search,
  Target,
  Cpu,
  Palette,
  Globe,
  TrendingUp,
  Share2,
  Video,
  MapPin,
  ArrowRight,
} from 'lucide-react';
import { Logo } from '../brand/Logo.tsx';
import { Button } from '../common/Button.tsx';
import { BRAND_CONFIG, SERVICES_DATA } from '../../data/constants.ts';

const serviceIcons: Record<string, React.ElementType> = {
  'google-ads': Search,
  'meta-ads': Target,
  'ai-creatives': Cpu,
  'graphic-design': Palette,
  'website-development': Globe,
  seo: TrendingUp,
  'social-media': Share2,
  'youtube-ads': Video,
  'google-business-profile': MapPin,
};

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Handle scroll state for navbar shadow/scrim
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 py-1.5 whitespace-nowrap shrink-0 hover:text-[#078BFF] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#078BFF] rounded ${
      isActive ? 'text-[#078BFF] font-semibold' : 'text-slate-300'
    }`;

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#030817]/95 backdrop-blur-md border-white/10 shadow-lg shadow-black/40'
          : 'bg-[#030817]/80 backdrop-blur-sm border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Zone 1: Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>

            {/* Services with Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 py-1.5 whitespace-nowrap shrink-0 hover:text-[#078BFF] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#078BFF] rounded ${
                  isServicesActive || servicesDropdownOpen
                    ? 'text-[#078BFF] font-semibold'
                    : 'text-slate-300'
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#FF8A00]' : ''
                  }`}
                />
              </button>

              {/* Desktop Dropdown Mega-Panel */}
              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[540px] rounded-2xl bg-[#071B3A] border border-white/10 shadow-2xl p-5 grid grid-cols-2 gap-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                >
                  {SERVICES_DATA.map((srv) => {
                    const IconComponent = serviceIcons[srv.slug] || Globe;
                    const isCurrent = location.pathname === `/services/${srv.slug}`;

                    return (
                      <Link
                        key={srv.slug}
                        to={`/services/${srv.slug}`}
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-200 ${
                          isCurrent
                            ? 'bg-[#0B254E] border border-[#078BFF]/40 text-white'
                            : 'hover:bg-white/5 text-slate-300 hover:text-white'
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#0B254E] border border-white/10 flex items-center justify-center shrink-0 text-[#078BFF] mt-0.5">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-semibold leading-tight text-white group-hover:text-[#38BDF8]">
                            {srv.title}
                          </span>
                          <span className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                            {srv.shortDescription}
                          </span>
                        </div>
                      </Link>
                    );
                  })}

                  {/* Dropdown Footer / View All Link */}
                  <div className="col-span-2 pt-3 mt-1 border-t border-white/5 flex items-center justify-between px-2">
                    <span className="text-xs text-slate-400">Custom agency strategy</span>
                    <Link
                      to="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#078BFF] hover:text-[#FF8A00] transition-colors"
                    >
                      <span>Explore All Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/portfolio" className={navLinkClass}>
              Portfolio
            </NavLink>

            <NavLink to="/faq" className={navLinkClass}>
              FAQ
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact Us
            </NavLink>
          </nav>

          {/* Zone 3: Orange Let's Talk Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Button
              variant="whatsapp"
              size="md"
              href={BRAND_CONFIG.whatsappUrl}
              icon={
                <span className="w-4 h-4 rounded-full overflow-hidden shrink-0 inline-flex items-center justify-center bg-[#25D366]">
                  <img
                    src="/assets/aistudio/download_5b82a999.png"
                    alt="WhatsApp"
                    className="w-full h-full object-cover scale-[1.5] select-none pointer-events-none"
                  />
                </span>
              }
              className="hidden sm:inline-flex"
            >
              Let's Talk
            </Button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2.5 rounded-xl bg-[#071B3A] border border-white/10 text-slate-200 hover:text-white hover:border-[#078BFF]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#078BFF]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#030817]/98 backdrop-blur-xl px-4 py-6 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <NavLink
              to="/"
              end
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#071B3A] text-[#078BFF] font-semibold border border-[#078BFF]/30'
                    : 'text-slate-200 hover:bg-white/5'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#071B3A] text-[#078BFF] font-semibold border border-[#078BFF]/30'
                    : 'text-slate-200 hover:bg-white/5'
                }`
              }
            >
              About Us
            </NavLink>

            {/* Mobile Services Accordion */}
            <div className="rounded-xl bg-[#071B3A]/40 border border-white/5 overflow-hidden">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="w-full px-4 py-3 flex items-center justify-between text-base font-medium text-slate-200"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    mobileServicesOpen ? 'rotate-180 text-[#FF8A00]' : ''
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="px-3 pb-3 pt-1 space-y-1 border-t border-white/5">
                  <Link
                    to="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#078BFF] hover:underline"
                  >
                    View All Services Overview →
                  </Link>

                  {SERVICES_DATA.map((srv) => (
                    <Link
                      key={srv.slug}
                      to={`/services/${srv.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        location.pathname === `/services/${srv.slug}`
                          ? 'bg-[#078BFF]/20 text-[#38BDF8] font-semibold'
                          : 'text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      {srv.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#071B3A] text-[#078BFF] font-semibold border border-[#078BFF]/30'
                    : 'text-slate-200 hover:bg-white/5'
                }`
              }
            >
              Portfolio
            </NavLink>

            <NavLink
              to="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#071B3A] text-[#078BFF] font-semibold border border-[#078BFF]/30'
                    : 'text-slate-200 hover:bg-white/5'
                }`
              }
            >
              FAQ
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#071B3A] text-[#078BFF] font-semibold border border-[#078BFF]/30'
                    : 'text-slate-200 hover:bg-white/5'
                }`
              }
            >
              Contact Us
            </NavLink>

            {/* Mobile Let's Talk Action */}
            <div className="pt-4 mt-2 border-t border-white/10">
              <Button
                variant="whatsapp"
                size="lg"
                href={BRAND_CONFIG.whatsappUrl}
                fullWidth
                icon={
                  <span className="w-5 h-5 rounded-full overflow-hidden shrink-0 inline-flex items-center justify-center bg-[#25D366]">
                    <img
                      src="/assets/aistudio/download_5b82a999.png"
                      alt="WhatsApp"
                      className="w-full h-full object-cover scale-[1.5] select-none pointer-events-none"
                    />
                  </span>
                }
              >
                Let's Talk on WhatsApp
              </Button>
              <p className="text-center text-xs text-slate-400 mt-2">
                Direct WhatsApp: {BRAND_CONFIG.whatsappNumber}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
