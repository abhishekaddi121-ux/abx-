import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  ExternalLink,
  Play,
  Layers,
  Compass,
  Palette,
  CheckCircle2,
  Eye,
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { PortfolioCard } from '../components/common/PortfolioCard.tsx';
import { ImageCard } from '../components/common/ImageCard.tsx';
import { ProjectDetailModal } from '../components/portfolio/ProjectDetailModal.tsx';
import {
  BRAND_CONFIG,
  IMAGES,
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_SAMPLES,
} from '../data/constants.ts';
import { PortfolioItem } from '../types/index.ts';

export const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  // Parallax ref for hero image on desktop
  const heroImageRef = useRef<HTMLDivElement>(null);

  // Update SEO Document Title & Meta Description
  useEffect(() => {
    document.title = 'Portfolio | ABX Digital Studio — Creative Work & Digital Campaigns';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Explore ABX Digital Studio portfolio: high-converting advertising creatives, AI promotional videos, modern website designs, and graphic brand assets.'
      );
    }
  }, []);

  // Desktop Pointer Parallax Effect for Hero
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroImageRef.current || window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      heroImageRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.03)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // WhatsApp prefilled message
  const whatsappHeroUrl = `${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    'Hello ABX Digital Studio, I viewed your portfolio and would like to discuss a project.'
  )}`;

  const whatsappFinalUrl = `${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    'Hello ABX Digital Studio, I viewed your portfolio and would like to discuss a project.'
  )}`;

  // Filter gallery items
  const filteredProjects = PORTFOLIO_SAMPLES.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.categorySlug === selectedCategory;
  });

  // Featured 3 Spotlight projects
  const spotlightProjects = PORTFOLIO_SAMPLES.filter((item) => item.featured).slice(0, 3);

  // Scroll smoothly to gallery
  const scrollToGallery = () => {
    const element = document.getElementById('portfolio-gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full text-slate-100 selection:bg-[#078BFF] selection:text-white">
      {/* 1. BREADCRUMBS & TOP SPACING */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <Breadcrumbs items={[{ label: 'Portfolio' }]} />
      </div>

      {/* 2. PORTFOLIO HERO SECTION */}
      <section className="relative overflow-hidden py-12 sm:py-20 lg:py-24 border-b border-white/5">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#078BFF]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF8A00]/10 rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B3A] border border-[#078BFF]/30 text-xs font-semibold text-[#078BFF] tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8A00]" />
                Creative Work & Concept Showcase
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Creative Work.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#078BFF] via-[#38BDF8] to-white">
                  Powerful Ideas.
                </span>{' '}
                <span className="text-[#FF8A00]">Digital Impact.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Explore creative banners, advertising campaigns, AI-assisted videos, graphic designs, and modern websites crafted to help businesses stand out online.
              </p>

              {/* Functional Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  type="button"
                  onClick={scrollToGallery}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#078BFF] hover:bg-[#078BFF]/90 text-white font-bold text-sm tracking-wide shadow-lg shadow-[#078BFF]/25 hover:shadow-[#078BFF]/40 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Explore Our Work
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={whatsappHeroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-white font-bold text-sm tracking-wide shadow-lg shadow-[#FF8A00]/25 hover:shadow-[#FF8A00]/40 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Start Your Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#078BFF]" />
                  Multi-Channel Creative Execution
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" />
                  Transparent Concept Demonstrations
                </span>
              </div>
            </div>

            {/* Right Visual Column — Cinematic Professional Studio Photo */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl p-1 bg-gradient-to-tr from-[#078BFF]/40 via-white/5 to-[#FF8A00]/30 shadow-2xl overflow-hidden group">
                <div
                  ref={heroImageRef}
                  className="relative aspect-video rounded-xl overflow-hidden bg-[#030817] transition-transform duration-300 ease-out"
                >
                  <img
                    src={IMAGES.portfolioHeroStudio}
                    alt="ABX Digital Studio creative workstation displaying digital advertising campaigns, websites, and video editing workflows"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.src = IMAGES.heroEntrepreneur;
                    }}
                  />
                  {/* Subtle Cinematic Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030817] via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Restrained Floating Portfolio Preview Panel */}
                  <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-[#071B3A]/90 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#FF8A00]/15 border border-[#FF8A00]/30 flex items-center justify-center text-[#FF8A00] flex-shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white tracking-wide">
                        ABX Design & Production Suite
                      </div>
                      <div className="text-[11px] text-slate-300">
                        High-Converting Creatives · Web · Motion
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO GALLERY & INTERACTIVE FILTERS */}
      <section id="portfolio-gallery" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071B3A] border border-white/10 text-xs font-semibold text-[#078BFF] uppercase tracking-wider mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#FF8A00]" />
            Curated Creative Gallery
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore by <span className="text-[#078BFF]">Creative Discipline</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Filter through our concept projects to view multi-format advertising banners, social media creatives, AI video productions, and full responsive web systems.
          </p>
        </div>

        {/* Category Filter Pills (Touch friendly, responsive wrap/scroll) */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#071B3A] border border-white/10 shadow-inner">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#FF8A00] text-white shadow-lg shadow-[#FF8A00]/25 scale-[1.02]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Counter & Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pb-6 border-b border-white/10 text-xs text-slate-400">
          <div>
            Showing <span className="font-bold text-white">{filteredProjects.length}</span> projects in{' '}
            <span className="text-[#078BFF] font-medium">
              {PORTFOLIO_CATEGORIES.find((c) => c.id === selectedCategory)?.label}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-300/90 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Sample Concepts & Demo Designs — Client solutions tailored on request</span>
          </div>
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onViewProject={(selected) => setSelectedProject(selected)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center rounded-2xl bg-[#071B3A]/40 border border-white/10 my-8">
            <p className="text-slate-400 text-sm">No projects found in this category.</p>
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className="mt-4 px-4 py-2 rounded-lg bg-[#078BFF] text-white text-xs font-semibold"
            >
              Reset to All Work
            </button>
          </div>
        )}
      </section>

      {/* 4. FEATURED PROJECT SPOTLIGHT SECTION */}
      <section className="py-16 sm:py-24 bg-[#051329]/60 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071B3A] border border-[#078BFF]/30 text-xs font-semibold text-[#078BFF] uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8A00]" />
              Signature Case Concepts
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              From Ideas to <span className="text-[#FF8A00]">Digital Experiences</span>
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Three flagship demonstrations illustrating how ABX Digital Studio approaches advertising campaigns, AI video motion, and modern responsive website architecture.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {spotlightProjects.map((project, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 rounded-3xl bg-[#071B3A] border border-white/10 hover:border-[#078BFF]/30 transition-all ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Preview */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#030817] shadow-2xl group cursor-pointer" onClick={() => setSelectedProject(project)}>
                      <ImageCard
                        src={project.image}
                        alt={project.title}
                        aspectRatio="16:9"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 border-0"
                      />
                      {project.isVideo && (
                        <div className="absolute inset-0 bg-[#030817]/40 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-[#FF8A00] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 fill-current ml-1" />
                          </div>
                        </div>
                      )}
                      <div className="absolute top-4 left-4 bg-[#030817]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-xs font-semibold text-amber-300">
                        {project.badge || 'Concept Project'}
                      </div>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className={`lg:col-span-5 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#078BFF]">
                      <span>{project.category}</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-slate-400">Concept Deep-Dive</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {project.tagline}
                    </p>

                    {project.objective && (
                      <div className="p-3.5 rounded-xl bg-[#030817]/60 border border-white/5 text-xs text-slate-300 leading-relaxed">
                        <strong className="text-white block mb-1">Strategic Objective:</strong>
                        {project.objective}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.deliverables.map((d, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-slate-300"
                        >
                          {d}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 pt-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#078BFF] hover:bg-[#078BFF]/90 text-white text-xs font-bold transition-all shadow-md hover:scale-[1.02]"
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>

                      <a
                        href={`${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                          `Hello ABX Digital Studio, I would like to discuss a project similar to ${project.title}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF8A00] hover:text-[#FF8A00]/80 transition-colors"
                      >
                        Discuss on WhatsApp
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. OUR CREATIVE APPROACH SECTION */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#071B3A] border border-white/10 text-xs font-semibold text-[#078BFF] uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-[#FF8A00]" />
            Methodology & Standards
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our <span className="text-[#078BFF]">Creative Approach</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Every deliverable we design follows a structured four-stage creative framework to balance aesthetic distinction with functional digital objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Understand the Business',
              desc: 'We examine your audience, industry landscape, commercial goals, and core conversion points before drawing a single pixel.',
              icon: Compass,
              accent: 'border-[#078BFF]/40 text-[#078BFF]',
            },
            {
              step: '02',
              title: 'Develop Creative Direction',
              desc: 'We establish visual hierarchy, compelling copy hooks, color theory, and typographic balance tailored to your brand identity.',
              icon: Palette,
              accent: 'border-[#FF8A00]/40 text-[#FF8A00]',
            },
            {
              step: '03',
              title: 'Design for the Platform',
              desc: 'Each asset is engineered natively for its target ecosystem: 9:16 vertical feeds, desktop ultrawide banners, or responsive mobile screens.',
              icon: Layers,
              accent: 'border-[#078BFF]/40 text-[#078BFF]',
            },
            {
              step: '04',
              title: 'Review and Refine',
              desc: 'We iterate based on feedback, test rendering across multiple devices, and deliver production-ready assets with full pre-flight specs.',
              icon: CheckCircle2,
              accent: 'border-[#FF8A00]/40 text-[#FF8A00]',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#071B3A] border border-white/10 p-6 flex flex-col justify-between hover:border-[#078BFF]/40 transition-all hover:shadow-xl hover:shadow-[#078BFF]/10 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-600 group-hover:text-white transition-colors">
                      {item.step}
                    </span>
                    <div className={`p-2.5 rounded-xl bg-white/5 border ${item.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#078BFF]" />
                  <span>Quality Assured Milestone</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. WHATSAPP PROJECT CTA SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#071B3A] to-[#030817] border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF8A00]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#030817] border border-[#FF8A00]/30 text-xs font-semibold text-[#FF8A00] tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5 fill-current" />
            Let&apos;s Build Together
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Have a Project in Mind?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Let&apos;s turn your idea into a creative digital experience. Tell us what you need, and we&apos;ll discuss the next steps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={whatsappFinalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-white text-sm font-bold shadow-xl shadow-[#FF8A00]/25 hover:shadow-[#FF8A00]/40 transition-all hover:scale-[1.02]"
            >
              Start a Project on WhatsApp
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold border border-white/10 transition-all hover:border-white/20"
            >
              Explore Our Services
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          <div className="pt-6 text-xs text-slate-400">
            WhatsApp Consultation: <span className="text-white font-medium">{BRAND_CONFIG.whatsappNumber}</span> · Fast Response Monday to Saturday
          </div>
        </div>
      </section>

      {/* 7. PROJECT DETAIL MODAL */}
      <ProjectDetailModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
