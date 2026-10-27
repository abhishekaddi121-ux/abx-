import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Sparkles,
  ArrowRight,
  Send,
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Copy,
  Check,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Layers,
  HelpCircle,
  AlertCircle,
  ExternalLink,
  Target,
  BarChart3,
  Cpu,
  Video,
  Globe,
  Palette,
  Search,
  Zap,
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { Button } from '../components/common/Button.tsx';
import { BRAND_CONFIG, IMAGES } from '../data/constants.ts';

// Country codes for telephone input
const COUNTRY_CODES = [
  { code: '+91', country: 'India (IN)' },
  { code: '+1', country: 'USA / Canada (+1)' },
  { code: '+44', country: 'UK (+44)' },
  { code: '+971', country: 'UAE (+971)' },
  { code: '+65', country: 'Singapore (+65)' },
  { code: '+61', country: 'Australia (+61)' },
  { code: '+49', country: 'Germany (+49)' },
  { code: '+966', country: 'Saudi Arabia (+966)' },
];

// Available services in Section B
const INQUIRY_SERVICES = [
  { id: 'google-ads', label: 'Google Ads Management', icon: Target, category: 'Paid Media' },
  { id: 'meta-ads', label: 'Facebook & Instagram Ads', icon: BarChart3, category: 'Paid Media' },
  { id: 'social-marketing', label: 'Social Media Marketing', icon: Zap, category: 'Growth' },
  { id: 'graphic-design', label: 'Graphic Design', icon: Palette, category: 'Creative' },
  { id: 'banners-posters', label: 'Banners & Promotional Posters', icon: Palette, category: 'Creative' },
  { id: 'ai-video', label: 'AI-Assisted Video Creation', icon: Video, category: 'Creative' },
  { id: 'youtube-ads', label: 'YouTube Ads', icon: Video, category: 'Paid Media' },
  { id: 'web-dev', label: 'Website Development', icon: Globe, category: 'Development' },
  { id: 'ai-web-dev', label: 'AI Website Development', icon: Cpu, category: 'Development' },
  { id: 'seo-services', label: 'SEO Services', icon: Search, category: 'Growth' },
  { id: 'gbp-setup', label: 'Google Business Profile Setup', icon: MapPin, category: 'Local Growth' },
  { id: 'landing-pages', label: 'Landing Page Development', icon: Layers, category: 'Development' },
  { id: 'other-custom', label: 'Other / Custom Requirement', icon: HelpCircle, category: 'Custom' },
];

const TIMELINE_OPTIONS = [
  { id: 'urgent', label: 'Urgent (Within 7 Days)', note: 'Immediate launch' },
  { id: '1-2-weeks', label: '1 – 2 Weeks', note: 'Fast turnaround' },
  { id: 'this-month', label: 'Within This Month', note: 'Standard onboarding' },
  { id: 'planning', label: 'Exploring & Planning Ahead', note: 'Future roadmap' },
];

const BUDGET_OPTIONS = [
  { id: 'under-25k', label: 'Under ₹25,000 / Starter' },
  { id: '25k-50k', label: '₹25,000 – ₹50,000 / Growth' },
  { id: '50k-100k', label: '₹50,000 – ₹1,00,000 / Scale' },
  { id: '100k-plus', label: '₹1,00,000+ / Enterprise' },
  { id: 'flexible', label: 'Flexible / Need Guidance' },
];

const CONTACT_PREFERENCES = [
  { id: 'whatsapp', label: 'WhatsApp (Fastest & Recommended)' },
  { id: 'phone', label: 'Phone Call' },
  { id: 'email', label: 'Email' },
];

export const ContactPage: React.FC = () => {
  // Parallax motion for hero photograph
  const [heroParallax, setHeroParallax] = useState({ x: 0, y: 0 });

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    brandName: '',
    countryCode: '+91',
    whatsappNumber: '',
    email: '',
    cityState: '',
    selectedServices: [] as string[],
    customRequirement: '',
    projectDetails: '',
    timeline: '1-2-weeks',
    budget: '25k-50k',
    contactPreference: 'whatsapp',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState('');
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Parallax mouse handler for desktop
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setHeroParallax({ x, y });
  };

  const handleHeroMouseLeave = () => {
    setHeroParallax({ x: 0, y: 0 });
  };

  // Scroll smoothly to inquiry form
  const scrollToForm = () => {
    const el = document.getElementById('inquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Toggle service selection
  const toggleService = (serviceId: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(serviceId);
      const updated = exists
        ? prev.selectedServices.filter((id) => id !== serviceId)
        : [...prev.selectedServices, serviceId];
      return { ...prev, selectedServices: updated };
    });

    if (formErrors.services) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next.services;
        return next;
      });
    }
  };

  // Form validation
  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required.';
    }

    if (!formData.whatsappNumber.trim()) {
      errors.whatsappNumber = 'WhatsApp Number is required.';
    } else {
      const cleaned = formData.whatsappNumber.replace(/[\s-]/g, '');
      if (!/^\d{7,14}$/.test(cleaned)) {
        errors.whatsappNumber = 'Please enter a valid telephone number (7-14 digits).';
      }
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = 'Please provide a valid email address.';
      }
    }

    if (formData.selectedServices.length === 0) {
      errors.services = 'Please select at least one service.';
    }

    if (formData.selectedServices.includes('other-custom') && !formData.customRequirement.trim()) {
      errors.customRequirement = 'Please briefly describe your custom requirement.';
    }

    if (!formData.projectDetails.trim()) {
      errors.projectDetails = 'Please provide brief details about what you need.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Generate WhatsApp message content for instant synchronization
  const generateWhatsAppMessage = (refId?: string) => {
    const serviceLabels = formData.selectedServices
      .map((id) => INQUIRY_SERVICES.find((s) => s.id === id)?.label || id)
      .join(', ');

    const id = refId || inquiryRef || 'NEW-INQ';

    let msg = `*New Project Inquiry [Ref: ${id}]*\n\n`;
    msg += `*Name:* ${formData.fullName}\n`;
    if (formData.brandName) msg += `*Business/Brand:* ${formData.brandName}\n`;
    msg += `*WhatsApp:* ${formData.countryCode} ${formData.whatsappNumber}\n`;
    if (formData.email) msg += `*Email:* ${formData.email}\n`;
    if (formData.cityState) msg += `*Location:* ${formData.cityState}\n\n`;
    msg += `*Services Needed:*\n${serviceLabels || 'Not specified'}\n`;
    if (formData.customRequirement) {
      msg += `*Custom Detail:* ${formData.customRequirement}\n`;
    }
    msg += `\n*Project Details:*\n${formData.projectDetails}\n\n`;
    msg += `*Timeline:* ${TIMELINE_OPTIONS.find((t) => t.id === formData.timeline)?.label || formData.timeline}\n`;
    msg += `*Estimated Budget:* ${formData.budget}\n`;
    msg += `*Preferred Contact:* ${formData.contactPreference}`;

    return msg;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      // Scroll to the first error
      const formEl = document.getElementById('inquiry-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // Generate reference ID
    const randomRef = `ABX-${Math.floor(10000 + Math.random() * 90000)}`;
    setInquiryRef(randomRef);
    setSubmitted(true);

    // Scroll to success screen smoothly
    setTimeout(() => {
      const confEl = document.getElementById('inquiry-confirmation');
      if (confEl) {
        confEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const copySummaryToClipboard = () => {
    const text = generateWhatsAppMessage(inquiryRef);
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  const resetForm = () => {
    setSubmitted(false);
    setInquiryRef('');
    setFormData({
      fullName: '',
      brandName: '',
      countryCode: '+91',
      whatsappNumber: '',
      email: '',
      cityState: '',
      selectedServices: [],
      customRequirement: '',
      projectDetails: '',
      timeline: '1-2-weeks',
      budget: '25k-50k',
      contactPreference: 'whatsapp',
    });
    setFormErrors({});
  };

  return (
    <div className="relative min-h-screen bg-[#030817] text-white overflow-hidden pb-20">
      {/* Background Lighting Accents */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#078BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[800px] right-10 w-[500px] h-[500px] bg-[#FF8A00]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-[#078BFF]/8 rounded-full blur-[160px] pointer-events-none" />

      {/* Global Breadcrumbs Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <Breadcrumbs items={[{ label: 'Contact Us & Client Inquiry' }]} />
      </div>

      {/* ================================================== */}
      {/* 2. HERO SECTION WITH REALISTIC MOTION PHOTO        */}
      {/* ================================================== */}
      <section
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-16 sm:pb-24"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B3A] border border-[#078BFF]/30 text-xs font-semibold text-[#078BFF]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8A00]" />
              <span>Let&apos;s Connect · Strategy &amp; Growth Studio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Let&apos;s Build Something{' '}
              <span className="bg-gradient-to-r from-[#078BFF] via-[#38bdf8] to-[#FF8A00] bg-clip-text text-transparent">
                Great Together.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Tell us about your business, your goals, and the digital services you need. ABX Digital
              Studio is ready to discuss a creative solution tailored to your requirements.
            </p>

            {/* Two Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToForm}
                className="group shadow-xl shadow-blue-500/20"
              >
                <span>Start Your Inquiry</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="whatsapp"
                size="lg"
                href={BRAND_CONFIG.whatsappUrl}
                className="shadow-xl shadow-orange-500/20"
              >
                Chat on WhatsApp
              </Button>
            </div>

            {/* Quick Micro-Proofs */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/10 max-w-xl">
              <div>
                <div className="text-xs text-slate-400 font-medium">Direct Line</div>
                <div className="text-sm font-bold text-white mt-0.5">{BRAND_CONFIG.whatsappNumber}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Availability</div>
                <div className="text-sm font-semibold text-emerald-400 mt-0.5">Mon – Sat Fast Response</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-xs text-slate-400 font-medium">Consultation</div>
                <div className="text-sm font-semibold text-[#FF8A00] mt-0.5">100% Free &amp; Transparent</div>
              </div>
            </div>
          </div>

          {/* Right Realistic Motion Photo Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#078BFF]/25 via-[#071B3A]/40 to-[#FF8A00]/25 rounded-3xl blur-2xl opacity-75" />

            {/* Photo Card with Motion */}
            <div
              className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#071B3A] shadow-2xl shadow-blue-950/60 transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${heroParallax.x * 6}deg) rotateX(${
                  -heroParallax.y * 6
                }deg)`,
              }}
            >
              {/* Photo Container with subtle zoom effect */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden group">
                <img
                  src={IMAGES.contactHeroConsultation}
                  alt="ABX Digital Studio creative marketing strategy consultation"
                  className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = IMAGES.heroEntrepreneur;
                  }}
                />

                {/* Subtle vignette and cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030817] via-[#030817]/25 to-transparent opacity-85" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />

                {/* Floating Studio Metric Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#030817]/85 backdrop-blur-md border border-white/15 shadow-xl">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      Live Response
                    </div>
                    <div className="text-xs font-bold text-white">Direct Strategist Consultation</div>
                  </div>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#071B3A]/90 backdrop-blur-md border border-white/10 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold text-white">ABX Creative Studio Space</div>
                    <div className="text-[11px] text-slate-300">
                      Tailored audits &amp; campaign roadmaps for modern brands
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-xl bg-[#FF8A00]/20 border border-[#FF8A00]/40 flex items-center justify-center text-[#FF8A00] shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Realistic Stock Disclaimer */}
              <div className="p-3 bg-[#030817] border-t border-white/5 text-[11px] text-slate-400 text-center">
                Professional consultation environment. Photographic representation for illustration.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. QUICK CONTACT CARDS                             */}
      {/* ================================================== */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold uppercase tracking-widest text-[#078BFF] mb-2">
            Direct Access Points
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Choose Your Preferred Way to Connect
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CARD 1 — WHATSAPP SUPPORT */}
          <div className="relative group p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#071B3A] to-[#040C1E] border border-[#FF8A00]/30 hover:border-[#FF8A00] transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF8A00]/15 border border-[#FF8A00]/30 flex items-center justify-center">
                <span className="w-6 h-6 rounded-full overflow-hidden shrink-0 inline-flex items-center justify-center bg-[#25D366]">
                  <img
                    src="/assets/aistudio/download_5b82a999.png"
                    alt="WhatsApp"
                    className="w-full h-full object-cover scale-[1.5] select-none pointer-events-none"
                  />
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">Chat on WhatsApp</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Have a quick question or want to discuss your project? Message us directly.
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs font-mono text-slate-400">
                <Clock className="w-3.5 h-3.5 text-[#FF8A00]" />
                <span>Mon – Sat Active Response</span>
              </div>
            </div>
            <div className="pt-6">
              <a
                href={BRAND_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#FF8A00] hover:bg-[#FF9B26] text-white text-xs font-bold transition-all shadow-lg shadow-orange-500/20 group-hover:scale-[1.02]"
              >
                <span className="w-4 h-4 rounded-full overflow-hidden shrink-0 inline-flex items-center justify-center bg-[#25D366]">
                  <img
                    src="/assets/aistudio/download_5b82a999.png"
                    alt="WhatsApp"
                    className="w-full h-full object-cover scale-[1.5] select-none pointer-events-none"
                  />
                </span>
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* CARD 2 — PROJECT INQUIRY */}
          <div className="relative group p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#071B3A] to-[#040C1E] border border-[#078BFF]/30 hover:border-[#078BFF] transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#078BFF]/15 border border-[#078BFF]/30 flex items-center justify-center text-[#078BFF]">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Request a Service</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tell us what your business needs, and share your requirements through our inquiry form.
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs font-mono text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#078BFF]" />
                <span>Custom proposal in 24 hours</span>
              </div>
            </div>
            <div className="pt-6">
              <button
                type="button"
                onClick={scrollToForm}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#078BFF] hover:bg-[#2B9BFF] text-white text-xs font-bold transition-all shadow-lg shadow-blue-500/20 group-hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4" />
                <span>Submit an Inquiry</span>
              </button>
            </div>
          </div>

          {/* CARD 3 — EXPLORE SERVICES */}
          <div className="relative group p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#071B3A] to-[#040C1E] border border-white/10 hover:border-slate-500 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-slate-200">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Explore Our Services</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Discover our digital marketing, creative design, video, and website services.
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs font-mono text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>12+ Specialized Growth Services</span>
              </div>
            </div>
            <div className="pt-6">
              <Link
                to="/services"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#071B3A] hover:bg-[#0B254E] border border-slate-700 text-white text-xs font-bold transition-all group-hover:scale-[1.02]"
              >
                <span>View Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 4. COMPLETE CLIENT INQUIRY FORM                    */}
      {/* ================================================== */}
      <section id="inquiry-form" className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Glowing border card wrapper */}
        <div className="relative rounded-3xl bg-[#071B3A]/90 backdrop-blur-xl border border-white/15 shadow-2xl shadow-blue-950/80 p-6 sm:p-10 lg:p-12 overflow-hidden">
          {/* Corner Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#078BFF]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF8A00]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Form Header */}
          <div className="relative text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#030817] border border-[#078BFF]/40 text-xs font-semibold text-[#078BFF] mb-3">
              <FileText className="w-3.5 h-3.5 text-[#FF8A00]" />
              <span>Tailored Consultation &amp; Scope</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Tell Us About Your Project
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Share a few details about your business and what you need. This helps us understand your
              requirements before we contact you.
            </p>
          </div>

          {/* SUCCESS CONFIRMATION STATE */}
          {submitted ? (
            <div id="inquiry-confirmation" className="relative py-8 sm:py-12 text-center space-y-6">
              <div className="w-20 h-20 rounded-3xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/10">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold mb-2">
                  Reference ID: {inquiryRef}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Inquiry Received!</h3>
                <p className="text-sm text-slate-300 max-w-lg mx-auto mt-2 leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. We have
                  received your requirements for{' '}
                  <span className="text-[#FF8A00] font-semibold">
                    {formData.brandName || 'your business'}
                  </span>
                  .
                </p>
              </div>

              {/* Inquiry Summary Review Card */}
              <div className="max-w-xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#030817] border border-white/10 text-left space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-slate-400 font-medium">Selected Services:</span>
                  <span className="font-semibold text-white text-right">
                    {formData.selectedServices
                      .map((id) => INQUIRY_SERVICES.find((s) => s.id === id)?.label)
                      .join(', ')}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-slate-400 font-medium">WhatsApp Contact:</span>
                  <span className="font-mono text-[#078BFF] font-semibold">
                    {formData.countryCode} {formData.whatsappNumber}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="text-slate-400 font-medium">Timeline &amp; Budget:</span>
                  <span className="font-semibold text-slate-200">
                    {TIMELINE_OPTIONS.find((t) => t.id === formData.timeline)?.label} · {formData.budget}
                  </span>
                </div>

                <div className="pt-1">
                  <span className="text-slate-400 font-medium block mb-1">Brief Overview:</span>
                  <p className="text-slate-300 text-xs italic bg-[#071B3A]/60 p-3 rounded-xl border border-white/5">
                    &ldquo;{formData.projectDetails}&rdquo;
                  </p>
                </div>
              </div>

              {/* Fast Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
                <a
                  href={`${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                    generateWhatsAppMessage(inquiryRef)
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF8A00] hover:bg-[#FF9B26] text-white text-sm font-bold transition-all shadow-xl shadow-orange-500/25"
                >
                  <span className="w-4 h-4 rounded-full overflow-hidden shrink-0 inline-flex items-center justify-center bg-[#25D366]">
                    <img
                      src="/assets/aistudio/download_5b82a999.png"
                      alt="WhatsApp"
                      className="w-full h-full object-cover scale-[1.5] select-none pointer-events-none"
                    />
                  </span>
                  <span>Open &amp; Send in WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={copySummaryToClipboard}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#071B3A] hover:bg-[#0B254E] border border-white/15 text-slate-200 hover:text-white text-sm font-semibold transition-all"
                >
                  {copiedSummary ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Summary Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Brief Summary</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-xs text-slate-400 hover:text-[#078BFF] underline transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            /* ACTIVE FORM */
            <form onSubmit={handleSubmit} className="relative space-y-10" noValidate>
              {/* ================================================== */}
              {/* SECTION A — CUSTOMER INFORMATION                   */}
              {/* ================================================== */}
              <div className="space-y-5">
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <div className="w-7 h-7 rounded-lg bg-[#078BFF] text-white font-bold text-xs flex items-center justify-center">
                    A
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">Customer Information</h3>
                    <p className="text-xs text-slate-400">
                      Your identity and contact details for direct follow-up.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* 1. Full Name (Required) */}
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2"
                    >
                      Full Name <span className="text-[#FF8A00]">*</span>
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (formErrors.fullName) {
                          setFormErrors({ ...formErrors, fullName: '' });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#030817] border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-all ${
                        formErrors.fullName
                          ? 'border-red-500/80 ring-2 ring-red-500/20'
                          : 'border-white/10 focus:border-[#078BFF] focus:ring-2 focus:ring-[#078BFF]/20'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{formErrors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* 2. Business or Brand Name (Optional) */}
                  <div>
                    <label
                      htmlFor="brand-name"
                      className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2"
                    >
                      Business or Brand Name <span className="text-slate-500 lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="brand-name"
                      placeholder="e.g. Apex Health Co."
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#030817] border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#078BFF] focus:ring-2 focus:ring-[#078BFF]/20 transition-all"
                    />
                  </div>

                  {/* 3. WhatsApp Number (Required with Country Code selector) */}
                  <div>
                    <label
                      htmlFor="whatsapp-number"
                      className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2"
                    >
                      WhatsApp Number <span className="text-[#FF8A00]">*</span>
                    </label>
                    <div className="flex rounded-xl overflow-hidden border border-white/10 bg-[#030817] focus-within:border-[#078BFF] focus-within:ring-2 focus-within:ring-[#078BFF]/20 transition-all">
                      <select
                        aria-label="Country Code"
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="bg-[#071B3A] text-slate-200 text-xs px-3 py-3 border-r border-white/10 focus:outline-none cursor-pointer"
                      >
                        {COUNTRY_CODES.map((item) => (
                          <option key={item.code} value={item.code} className="bg-[#030817] text-white">
                            {item.code} {item.country}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        id="whatsapp-number"
                        required
                        placeholder="9142866835"
                        value={formData.whatsappNumber}
                        onChange={(e) => {
                          setFormData({ ...formData, whatsappNumber: e.target.value });
                          if (formErrors.whatsappNumber) {
                            setFormErrors({ ...formErrors, whatsappNumber: '' });
                          }
                        }}
                        className={`w-full px-4 py-3 bg-transparent text-white text-sm placeholder:text-slate-500 focus:outline-none ${
                          formErrors.whatsappNumber ? 'border-red-500' : ''
                        }`}
                      />
                    </div>
                    {formErrors.whatsappNumber ? (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{formErrors.whatsappNumber}</span>
                      </p>
                    ) : (
                      <p className="mt-1 text-[11px] text-slate-400">
                        We send project audits and initial strategy reviews directly to WhatsApp.
                      </p>
                    )}
                  </div>

                  {/* 4. Email Address (Optional) */}
                  <div>
                    <label
                      htmlFor="email-address"
                      className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2"
                    >
                      Email Address <span className="text-slate-500 lowercase">(optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email-address"
                      placeholder="name@business.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) {
                          setFormErrors({ ...formErrors, email: '' });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#030817] border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-all ${
                        formErrors.email
                          ? 'border-red-500/80 ring-2 ring-red-500/20'
                          : 'border-white/10 focus:border-[#078BFF] focus:ring-2 focus:ring-[#078BFF]/20'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{formErrors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* 5. City and State (Optional) */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="city-state"
                      className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2"
                    >
                      City and State <span className="text-slate-500 lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="city-state"
                      placeholder="e.g. Mumbai, Maharashtra or New Delhi"
                      value={formData.cityState}
                      onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#030817] border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-[#078BFF] focus:ring-2 focus:ring-[#078BFF]/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* ================================================== */}
              {/* SECTION B — SELECT YOUR SERVICE                    */}
              {/* ================================================== */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#FF8A00] text-white font-bold text-xs flex items-center justify-center">
                      B
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        Select Your Service <span className="text-[#FF8A00]">*</span>
                      </h3>
                      <p className="text-xs text-slate-400">
                        Select all that apply. Multiple services can be bundled for coordinated growth.
                      </p>
                    </div>
                  </div>
                  {formData.selectedServices.length > 0 && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#078BFF]/20 text-[#078BFF] border border-[#078BFF]/30">
                      {formData.selectedServices.length} Selected
                    </span>
                  )}
                </div>

                {formErrors.services && (
                  <p className="text-xs text-red-400 flex items-center gap-1.5 p-3 rounded-xl bg-red-500/10 border border-red-500/30">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formErrors.services}</span>
                  </p>
                )}

                {/* Service Selection Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
                  {INQUIRY_SERVICES.map((srv) => {
                    const isSelected = formData.selectedServices.includes(srv.id);
                    const IconComponent = srv.icon;

                    return (
                      <button
                        type="button"
                        key={srv.id}
                        onClick={() => toggleService(srv.id)}
                        className={`text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 group relative ${
                          isSelected
                            ? 'bg-gradient-to-br from-[#071B3A] to-[#041126] border-[#078BFF] ring-2 ring-[#078BFF]/30 shadow-lg shadow-blue-900/30'
                            : 'bg-[#030817] border-white/10 hover:border-white/30 hover:bg-[#071B3A]/40'
                        }`}
                      >
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-[#078BFF] text-white shadow-md shadow-blue-500/30'
                              : 'bg-white/5 text-slate-400 group-hover:text-white'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>

                        <div className="flex-1 min-w-0 pr-4">
                          <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                            {srv.category}
                          </div>
                          <div
                            className={`text-xs sm:text-sm font-semibold truncate ${
                              isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                            }`}
                          >
                            {srv.label}
                          </div>
                        </div>

                        {/* Checkbox indicator */}
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-1 transition-all ${
                            isSelected
                              ? 'bg-[#078BFF] border-[#078BFF] text-white'
                              : 'border-white/20 bg-white/5'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Custom requirement explanation if Other is selected */}
                {formData.selectedServices.includes('other-custom') && (
                  <div className="pt-3 animate-in fade-in duration-200">
                    <label
                      htmlFor="custom-req"
                      className="block text-xs font-semibold text-[#FF8A00] uppercase tracking-wider mb-2"
                    >
                      Explain Your Custom Requirement <span className="text-[#FF8A00]">*</span>
                    </label>
                    <input
                      type="text"
                      id="custom-req"
                      placeholder="Please specify what you need (e.g. CRM integration, brand identity overhaul, offline event creatives...)"
                      value={formData.customRequirement}
                      onChange={(e) => {
                        setFormData({ ...formData, customRequirement: e.target.value });
                        if (formErrors.customRequirement) {
                          setFormErrors({ ...formErrors, customRequirement: '' });
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#030817] border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-all ${
                        formErrors.customRequirement
                          ? 'border-red-500/80 ring-2 ring-red-500/20'
                          : 'border-[#FF8A00]/40 focus:border-[#FF8A00] focus:ring-2 focus:ring-[#FF8A00]/20'
                      }`}
                    />
                    {formErrors.customRequirement && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{formErrors.customRequirement}</span>
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* ================================================== */}
              {/* SECTION C — PROJECT REQUIREMENTS                   */}
              {/* ================================================== */}
              <div className="space-y-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <div className="w-7 h-7 rounded-lg bg-[#078BFF] text-white font-bold text-xs flex items-center justify-center">
                    C
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">Project Requirements</h3>
                    <p className="text-xs text-slate-400">
                      Scope, goals, timelines, and follow-up preferences.
                    </p>
                  </div>
                </div>

                {/* 1. What do you need? (Required multiline text area) */}
                <div>
                  <label
                    htmlFor="project-details"
                    className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2"
                  >
                    What do you need? <span className="text-[#FF8A00]">*</span>
                  </label>
                  <textarea
                    id="project-details"
                    required
                    rows={4}
                    placeholder="Tell us about your project: What are your key goals? Are you launching something new or scaling an existing brand? What problems are you hoping we can solve?"
                    value={formData.projectDetails}
                    onChange={(e) => {
                      setFormData({ ...formData, projectDetails: e.target.value });
                      if (formErrors.projectDetails) {
                        setFormErrors({ ...formErrors, projectDetails: '' });
                      }
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-[#030817] border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-all resize-y ${
                      formErrors.projectDetails
                        ? 'border-red-500/80 ring-2 ring-red-500/20'
                        : 'border-white/10 focus:border-[#078BFF] focus:ring-2 focus:ring-[#078BFF]/20'
                    }`}
                  />
                  {formErrors.projectDetails && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{formErrors.projectDetails}</span>
                    </p>
                  )}
                </div>

                {/* 2. Timeline and 3. Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Timeline Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                      Target Launch Timeline
                    </label>
                    <div className="space-y-2">
                      {TIMELINE_OPTIONS.map((opt) => (
                        <label
                          key={opt.id}
                          className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                            formData.timeline === opt.id
                              ? 'bg-[#071B3A] border-[#078BFF] text-white font-semibold'
                              : 'bg-[#030817] border-white/10 text-slate-300 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <input
                              type="radio"
                              name="timeline"
                              value={opt.id}
                              checked={formData.timeline === opt.id}
                              onChange={() => setFormData({ ...formData, timeline: opt.id })}
                              className="accent-[#078BFF]"
                            />
                            <span>{opt.label}</span>
                          </div>
                          <span className="text-[11px] text-slate-500">{opt.note}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Estimated Budget */}
                  <div>
                    <label
                      htmlFor="budget-select"
                      className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2"
                    >
                      Estimated Monthly / Project Budget
                    </label>
                    <select
                      id="budget-select"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#030817] border border-white/10 text-white text-sm focus:outline-none focus:border-[#078BFF] focus:ring-2 focus:ring-[#078BFF]/20 cursor-pointer"
                    >
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b.id} value={b.label} className="bg-[#030817] text-white">
                          {b.label}
                        </option>
                      ))}
                    </select>

                    {/* Preferred Contact Method */}
                    <div className="mt-5">
                      <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {CONTACT_PREFERENCES.map((pref) => (
                          <label
                            key={pref.id}
                            className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                              formData.contactPreference === pref.id
                                ? 'bg-[#071B3A] border-[#FF8A00] text-white font-semibold'
                                : 'bg-[#030817] border-white/10 text-slate-300 hover:border-white/20'
                            }`}
                          >
                            <input
                              type="radio"
                              name="contactPreference"
                              value={pref.id}
                              checked={formData.contactPreference === pref.id}
                              onChange={() => setFormData({ ...formData, contactPreference: pref.id })}
                              className="accent-[#FF8A00]"
                            />
                            <span>{pref.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Submission Bar */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Your information is strictly protected and used only for consultation.</span>
                </div>

                <div className="w-full sm:w-auto flex items-center gap-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto shadow-xl shadow-blue-500/25 font-bold"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    <span>Submit Project Inquiry</span>
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ================================================== */}
      {/* 5. INQUIRY TO LAUNCH: WHAT HAPPENS NEXT?           */}
      {/* ================================================== */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-2">
            Clear, Transparent Process
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            From Inquiry to Kickoff: What Happens Next?
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            No endless sales cycles. Here is our direct 4-step agency workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#071B3A]/60 border border-white/10 relative space-y-3">
            <div className="w-8 h-8 rounded-xl bg-[#078BFF]/20 text-[#078BFF] font-bold text-sm flex items-center justify-center">
              1
            </div>
            <h3 className="text-base font-bold text-white">Requirement Analysis</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Our lead growth strategist reviews your business profile, target audience, and current digital footprint.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#071B3A]/60 border border-white/10 relative space-y-3">
            <div className="w-8 h-8 rounded-xl bg-[#FF8A00]/20 text-[#FF8A00] font-bold text-sm flex items-center justify-center">
              2
            </div>
            <h3 className="text-base font-bold text-white">Strategy on WhatsApp</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We connect on WhatsApp for a quick clarification chat, audit feedback, and creative recommendations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#071B3A]/60 border border-white/10 relative space-y-3">
            <div className="w-8 h-8 rounded-xl bg-[#078BFF]/20 text-[#078BFF] font-bold text-sm flex items-center justify-center">
              3
            </div>
            <h3 className="text-base font-bold text-white">Custom Proposal</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              You receive a transparent scope breakdown, timeline milestones, and expected performance deliverables.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#071B3A]/60 border border-white/10 relative space-y-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold text-sm flex items-center justify-center">
              4
            </div>
            <h3 className="text-base font-bold text-white">Campaign Execution</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ad setups, creative production, or website development begins with prompt updates and milestone tracking.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 6. DIRECT WHATSAPP INSTANT ACTION BANNER           */}
      {/* ================================================== */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#071B3A] via-[#030817] to-[#071B3A] border border-[#FF8A00]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF8A00]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Need Immediate Assistance?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Prefer to Talk Right Away on WhatsApp?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Skip forms entirely if you have a burning campaign question. Our team responds promptly Monday through Saturday.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={BRAND_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FF8A00] hover:bg-[#FF9B26] text-white text-sm font-bold transition-all shadow-xl shadow-orange-500/25"
            >
              <span className="w-4 h-4 rounded-full overflow-hidden shrink-0 inline-flex items-center justify-center bg-[#25D366]">
                <img
                  src="/assets/aistudio/download_5b82a999.png"
                  alt="WhatsApp"
                  className="w-full h-full object-cover scale-[1.5] select-none pointer-events-none"
                />
              </span>
              <span>Open WhatsApp Chat (+91 9142866835)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
