import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  X,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  Sparkles,
  HelpCircle,
  CheckCircle2,
  SlidersHorizontal,
  ChevronRight,
  Compass,
  Palette,
  Globe,
  Video,
  Target,
  ShieldAlert,
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { FaqAccordion } from '../components/common/FaqAccordion.tsx';
import { ImageCard } from '../components/common/ImageCard.tsx';
import {
  BRAND_CONFIG,
  FAQS_DATA,
  FAQ_CATEGORIES,
  IMAGES,
} from '../data/constants.ts';

export const FaqPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Parallax ref for desktop hero photo
  const heroImageRef = useRef<HTMLDivElement>(null);

  // SEO Title & Description
  useEffect(() => {
    document.title = 'FAQ | ABX Digital Studio — Questions, Services & Process';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Find answers about ABX Digital Studio services, including digital marketing, Google Ads, Meta Ads, creative design, AI-assisted videos, websites, and SEO.'
      );
    }
  }, []);

  // Desktop Pointer Parallax Effect for Hero
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroImageRef.current || window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 14;
      const y = (e.clientY / innerHeight - 0.5) * 14;
      heroImageRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.02)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // WhatsApp prefilled URLs
  const whatsappHeroUrl = `${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    'Hello ABX Digital Studio, I have a question about your services.'
  )}`;

  const whatsappEmptyUrl = `${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    `Hello ABX Digital Studio, I searched for "${searchQuery}" in your FAQ and have a question.`
  )}`;

  const whatsappSupportUrl = `${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    'Hello ABX Digital Studio, I have a question about your services.'
  )}`;

  // Filter & Search Logic
  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return FAQS_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const matchesSearch =
        query === '' ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Scroll to Accordion section
  const scrollToAccordion = () => {
    const element = document.getElementById('faq-accordion-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full text-slate-100 selection:bg-[#078BFF] selection:text-white">
      {/* 1. BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <Breadcrumbs items={[{ label: 'FAQ' }]} />
      </div>

      {/* 2. FAQ HERO SECTION */}
      <section className="relative overflow-hidden py-12 sm:py-20 lg:py-24 border-b border-white/5">
        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#078BFF]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#FF8A00]/10 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B3A] border border-[#078BFF]/30 text-xs font-semibold text-[#078BFF] tracking-wider uppercase">
                <HelpCircle className="w-3.5 h-3.5 text-[#FF8A00]" />
                Knowledge Base & Direct Answers
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Got Questions?{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#078BFF] via-[#38BDF8] to-white">
                  We’re Here
                </span>{' '}
                <span className="text-[#FF8A00]">to Help.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Find answers to common questions about our digital marketing, creative design, AI-assisted videos, and website development services.
              </p>

              {/* Functional Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  type="button"
                  onClick={scrollToAccordion}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#078BFF] hover:bg-[#078BFF]/90 text-white font-bold text-sm tracking-wide shadow-lg shadow-[#078BFF]/25 hover:shadow-[#078BFF]/40 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Browse FAQs
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={whatsappHeroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-white font-bold text-sm tracking-wide shadow-lg shadow-[#FF8A00]/25 hover:shadow-[#FF8A00]/40 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Ask Us on WhatsApp
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#078BFF]" />
                  Transparent Engagement Policies
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" />
                  Realistic Guidance & Zero Hype
                </span>
              </div>
            </div>

            {/* Right Visual — Realistic Client Strategy Consultation Photograph */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-[#078BFF]/40 via-white/5 to-[#FF8A00]/30 shadow-2xl overflow-hidden group">
                <div
                  ref={heroImageRef}
                  className="relative aspect-video rounded-xl overflow-hidden bg-[#030817] transition-transform duration-300 ease-out"
                >
                  <img
                    src={IMAGES.faqHeroConsultant}
                    alt="Digital marketing consultant discussing website and advertising project scope with client in creative agency office"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.src = IMAGES.heroEntrepreneur;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030817] via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Restrained Floating Badge */}
                  <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-[#071B3A]/90 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#078BFF]/15 border border-[#078BFF]/30 flex items-center justify-center text-[#078BFF] flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-[#FF8A00]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white tracking-wide">
                        Direct Strategic Guidance
                      </div>
                      <div className="text-[11px] text-slate-300">
                        Tailored Scope & Transparent Proposals
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION & SEARCH SECTION */}
      <section id="faq-accordion-section" className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071B3A] border border-white/10 text-xs font-semibold text-[#078BFF] uppercase tracking-wider mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF8A00]" />
            Search & Filter Inquiries
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-[#078BFF]">Questions</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Search our comprehensive directory of answers covering advertising execution, design deliverables, website creation, and project pricing.
          </p>
        </div>

        {/* Search Field */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <label htmlFor="faq-search-input" className="sr-only">
            Search your question
          </label>
          <div className="relative flex items-center">
            <div className="absolute left-4 text-slate-400 pointer-events-none">
              <Search className="w-5 h-5" />
            </div>
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your question…"
              className="w-full pl-12 pr-12 py-3.5 rounded-xl bg-[#071B3A] border border-white/15 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#078BFF] focus:border-transparent transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
                className="absolute right-4 text-slate-400 hover:text-white p-1 rounded-md transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-xs text-slate-400 mt-2 text-center">
              Filtering for: &ldquo;<span className="text-white font-medium">{searchQuery}</span>&rdquo;
            </p>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#071B3A] border border-white/10 shadow-inner">
            {FAQ_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              // Calculate count for category
              const count =
                cat.id === 'all'
                  ? FAQS_DATA.length
                  : FAQS_DATA.filter((item) => item.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#FF8A00] text-white shadow-lg shadow-[#FF8A00]/25 scale-[1.02]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Count Status */}
        <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10 text-xs text-slate-400">
          <div>
            Showing <span className="font-bold text-white">{filteredFaqs.length}</span> question{filteredFaqs.length === 1 ? '' : 's'}
          </div>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="text-[#078BFF] hover:underline"
          >
            Reset Filters
          </button>
        </div>

        {/* Accordion List */}
        {filteredFaqs.length > 0 ? (
          <FaqAccordion items={filteredFaqs} defaultOpenId={filteredFaqs[0]?.id} />
        ) : (
          /* Empty Search State */
          <div className="p-8 sm:p-12 rounded-2xl bg-[#071B3A]/80 border border-white/10 text-center space-y-4 my-6">
            <div className="w-14 h-14 rounded-full bg-[#FF8A00]/15 text-[#FF8A00] mx-auto flex items-center justify-center">
              <HelpCircle className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-white">
              No matching questions found.
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              No matching questions found. Contact us on WhatsApp and we’ll help you.
            </p>
            <div className="pt-2">
              <a
                href={whatsappEmptyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-white text-xs font-bold shadow-lg shadow-[#FF8A00]/25 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        )}
      </section>

      {/* 4. SUPPORTING CRAFT & SPECIALIST PHOTO GALLERY */}
      <section className="py-16 sm:py-20 bg-[#051329]/60 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071B3A] border border-white/10 text-xs font-semibold text-[#078BFF] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8A00]" />
              Behind Every Answer
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Specialized Disciplines at <span className="text-[#078BFF]">ABX Digital Studio</span>
            </h2>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Our answers are grounded in daily hands-on execution across media buying, visual communication, full-stack code, and video production.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Paid Media Strategy',
                desc: 'Intent-driven Google Ads search queries and Meta target segmentation.',
                image: IMAGES.paidMedia,
                icon: Target,
                tag: 'Campaign Planning',
              },
              {
                title: 'Brand & Graphic Design',
                desc: 'Vector typography, promotional banners, and visual asset systems.',
                image: IMAGES.designerPhoto,
                icon: Palette,
                tag: 'Design Studio',
              },
              {
                title: 'Web Engineering',
                desc: 'Sub-second modern React architectures optimized for conversions.',
                image: IMAGES.webDesign,
                icon: Globe,
                tag: 'Website Development',
              },
              {
                title: 'Video & Motion',
                desc: 'High-hook video editing, motion graphics, and AI creative workflows.',
                image: IMAGES.youtubeStudioPhoto,
                icon: Video,
                tag: 'Video Production',
              },
            ].map((craft, idx) => {
              const Icon = craft.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#071B3A] border border-white/10 overflow-hidden group hover:border-[#078BFF]/40 transition-all hover:shadow-xl"
                >
                  <div className="relative aspect-video overflow-hidden bg-[#030817]">
                    <ImageCard
                      src={craft.image}
                      alt={craft.title}
                      aspectRatio="16:9"
                      className="border-0 rounded-none group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#030817]/85 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10 text-[10px] font-semibold text-[#078BFF]">
                      {craft.tag}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 rounded-md bg-[#078BFF]/10 text-[#078BFF] flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                        {craft.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      {craft.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SUPPORT SECTION (SECTION 7) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-tr from-[#071B3A] via-[#0B254E] to-[#071B3A] border border-[#078BFF]/30 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Subtle Ambient Background Light */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#FF8A00]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#030817] border border-[#FF8A00]/30 text-xs font-semibold text-[#FF8A00] tracking-wider uppercase">
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                Fast Direct Response
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Still Have a Question?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Tell us what you need help with. We&apos;ll discuss your project requirements and guide you on the next steps.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={whatsappSupportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-white text-sm font-bold shadow-lg shadow-[#FF8A00]/25 transition-all hover:scale-[1.02]"
                >
                  Ask on WhatsApp
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold border border-white/10 transition-all hover:border-white/20"
                >
                  Explore Our Services
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

              <div className="text-xs text-slate-400 pt-2 flex items-center justify-center lg:justify-start gap-2">
                <ShieldAlert className="w-3.5 h-3.5 text-slate-400" />
                <span>Zero obligation inquiry · Direct WhatsApp: {BRAND_CONFIG.whatsappNumber}</span>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden aspect-square border border-white/10 shadow-xl">
                <img
                  src={IMAGES.growthMeeting}
                  alt="ABX Digital Studio creative consultant helping a business owner at desk"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = IMAGES.heroEntrepreneur;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030817] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#030817]/85 backdrop-blur-md p-3 rounded-xl border border-white/10 text-center">
                  <span className="text-xs font-semibold text-white">
                    Personalized Project Scoping
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
