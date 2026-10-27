import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Target,
  Cpu,
  Palette,
  Globe,
  Share2,
  Video,
  MapPin,
  Layers,
  Compass,
  FileCheck,
  CheckCircle2,
  Lightbulb,
  Workflow,
  Shield,
  Zap,
} from 'lucide-react';
import { Button } from '../components/common/Button.tsx';
import { ImageCard } from '../components/common/ImageCard.tsx';
import { FaqAccordion } from '../components/common/FaqAccordion.tsx';
import { BRAND_CONFIG, FAQS_DATA, IMAGES } from '../data/constants.ts';

export const HomePage: React.FC = () => {
  const [activeShowcaseFilter, setActiveShowcaseFilter] = useState<'all' | 'ads' | 'web' | 'creative'>('all');

  // WhatsApp prefilled URLs
  const heroWhatsAppUrl = `${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    'Hi ABX Digital Studio, I want to discuss a project.'
  )}`;
  const storyWhatsAppUrl = `${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    'Hi ABX Digital Studio, I would like to tell you about my business project.'
  )}`;
  const finalWhatsAppUrl = `${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    'Hi ABX Digital Studio, I would like to discuss my business project.'
  )}`;

  // 10 Detailed Services
  const homepageServices = [
    {
      title: 'Google Ads',
      desc: 'Search, Display, and YouTube advertising solutions designed around your business objectives.',
      route: '/services/google-ads',
      image: IMAGES.paidMedia,
      icon: Target,
      badge: 'Paid Search',
    },
    {
      title: 'Meta Ads',
      desc: 'Facebook and Instagram advertising creatives and campaign solutions for reaching relevant audiences.',
      route: '/services/meta-ads',
      image: IMAGES.heroTeam,
      icon: Share2,
      badge: 'Paid Social',
    },
    {
      title: 'AI Creative Videos',
      desc: 'AI-assisted promotional videos, product visuals, and engaging short-form creative concepts.',
      route: '/services/ai-creatives',
      image: IMAGES.showcaseVideo,
      icon: Cpu,
      badge: 'AI & Motion',
    },
    {
      title: 'Graphic Design and Banners',
      desc: 'Professional posters, advertising banners, social media posts, and branded promotional graphics.',
      route: '/services/graphic-design',
      image: IMAGES.showcaseSocial,
      icon: Palette,
      badge: 'Brand Identity',
    },
    {
      title: 'Website Development',
      desc: 'Responsive business websites and landing pages built to present your brand professionally.',
      route: '/services/website-development',
      image: IMAGES.webDesign,
      icon: Globe,
      badge: 'Web & UI/UX',
    },
    {
      title: 'SEO Services',
      desc: 'Keyword research, on-page SEO, content structure, and search visibility improvements.',
      route: '/services/seo',
      image: IMAGES.growthMeeting,
      icon: TrendingUp,
      badge: 'Organic Search',
    },
    {
      title: 'Social Media Marketing',
      desc: 'Content planning, post creatives, reels concepts, and consistent brand presentation.',
      route: '/services/social-media',
      image: IMAGES.showcaseSocial,
      icon: Share2,
      badge: 'Social Content',
    },
    {
      title: 'YouTube Advertising',
      desc: 'Video ad creative support and campaign solutions for YouTube advertising.',
      route: '/services/google-ads',
      image: IMAGES.showcaseVideo,
      icon: Video,
      badge: 'Video Ads',
    },
    {
      title: 'Google Business Profile',
      desc: 'Business profile setup and optimization guidance to improve your online business presence.',
      route: '/services/seo',
      image: IMAGES.storyOwner,
      icon: MapPin,
      badge: 'Local Presence',
    },
    {
      title: 'Complete Digital Solutions',
      desc: 'A tailored combination of creative, advertising, website, and marketing services.',
      route: '/services',
      image: IMAGES.heroEntrepreneur,
      icon: Layers,
      badge: 'Full Suite',
    },
  ];

  // Creative Showcase items
  const showcaseItems = [
    {
      id: '1',
      title: 'Performance Paid Media Creative',
      category: 'ads',
      categoryLabel: 'Advertising Banners',
      image: IMAGES.paidMedia,
      desc: 'High-contrast conversion banners and ad variants engineered for search and display visibility.',
    },
    {
      id: '2',
      title: 'Modern Brand Identity & Stationery',
      category: 'creative',
      categoryLabel: 'Brand Identity',
      image: IMAGES.showcaseSocial,
      desc: 'Curated typography, business stationery, and social media promotional creative kit.',
    },
    {
      id: '3',
      title: 'Motion & Promotional Video Suite',
      category: 'creative',
      categoryLabel: 'Video Concepts',
      image: IMAGES.showcaseVideo,
      desc: 'High-definition video reels, timeline grading, and visual product feature concepts.',
    },
    {
      id: '4',
      title: 'Responsive High-Speed Web Portal',
      category: 'web',
      categoryLabel: 'Website & UI/UX',
      image: IMAGES.webDesign,
      desc: 'Clean modular layout and conversion flow crafted for luxury commercial showcase.',
    },
    {
      id: '5',
      title: 'Multi-Channel Strategy Blueprint',
      category: 'ads',
      categoryLabel: 'Advertising Strategy',
      image: IMAGES.heroTeam,
      desc: 'Collaborative campaign roadmap mapping keyword search funnels to target demographics.',
    },
    {
      id: '6',
      title: 'Founder & Brand Campaign Storyboard',
      category: 'web',
      categoryLabel: 'Digital Creative',
      image: IMAGES.storyOwner,
      desc: 'Thoughtfully structured customer journey mapping brand values to interactive digital touchpoints.',
    },
  ];

  const filteredShowcase = showcaseItems.filter((item) => {
    if (activeShowcaseFilter === 'all') return true;
    return item.category === activeShowcaseFilter;
  });

  return (
    <div className="flex flex-col w-full bg-[#030817] text-slate-100 overflow-hidden">
      {/* ================================================== */}
      {/* 2. HERO SECTION — HIGH-IMPACT FIRST IMPRESSION     */}
      {/* ================================================== */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden border-b border-white/5">
        {/* Subtle moving radial background gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#078BFF]/15 via-[#071B3A]/30 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[500px] bg-[#FF8A00]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline and Call-to-Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF8A00]">
                <Sparkles className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <span>CREATIVE DIGITAL SOLUTIONS FOR AMBITIOUS BUSINESSES</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] [text-wrap:balance]">
                Turn Your Brand Into a{' '}
                <span className="bg-gradient-to-r from-[#078BFF] via-[#38BDF8] to-[#FF8A00] bg-clip-text text-transparent">
                  Digital Growth Story.
                </span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl [text-wrap:balance]">
                From high-impact advertising campaigns to AI-powered creatives and modern websites, ABX Digital Studio helps your business stand out, connect with customers, and build a stronger digital presence.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  variant="whatsapp"
                  size="lg"
                  href={heroWhatsAppUrl}
                  icon={<MessageSquare className="w-5 h-5 fill-current" />}
                  className="text-base font-bold shadow-xl shadow-orange-500/25"
                >
                  Let's Grow Your Business
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  to="/services"
                  showArrow
                  className="text-base"
                >
                  Explore Our Services
                </Button>
              </div>

              {/* Trust Subtext */}
              <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#078BFF]" />
                  <span>Google & Meta Ads</span>
                </span>
                <span className="text-slate-700" aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" />
                  <span>AI Creative Production</span>
                </span>
                <span className="text-slate-700" aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                  <span>Modern Web Development</span>
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-[#078BFF]/40 via-white/5 to-[#FF8A00]/30 shadow-2xl overflow-hidden group">
                <ImageCard
                  src={IMAGES.heroEntrepreneur}
                  alt="ABX Digital Studio creative modern agency workspace and growth headquarters"
                  aspectRatio="16:9"
                  className="rounded-2xl"
                />

                {/* Ambient Light Sweep Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#078BFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>

              {/* Layered Floating Highlight Card */}
              <div className="mt-4 sm:absolute sm:-bottom-6 sm:-left-6 bg-[#071B3A]/95 backdrop-blur-md border border-[#078BFF]/30 rounded-2xl p-4 shadow-2xl flex items-center gap-3.5 max-w-sm">
                <div className="w-11 h-11 rounded-xl bg-[#0B254E] border border-[#078BFF]/30 flex items-center justify-center text-[#FF8A00] shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#078BFF]">
                    Tailored Strategy
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Built around your specific business goals
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. TRUST AND VALUE INTRODUCTION                   */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative border-b border-white/5 bg-[#050D20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#078BFF]">
              Value & Integrity
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Your Ideas. Our Creativity.{' '}
              <span className="bg-gradient-to-r from-[#078BFF] to-[#FF8A00] bg-clip-text text-transparent">
                One Digital Vision.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
              Every business has something valuable to offer. We help bring that value online through thoughtful design, digital advertising, creative content, and website experiences tailored to your goals.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-2xl bg-[#071B3A] border border-white/10 p-8 flex flex-col justify-between hover:border-[#078BFF]/40 hover:-translate-y-1 transition-all duration-300 shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0B254E] border border-[#078BFF]/20 flex items-center justify-center text-[#078BFF] mb-6">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Creative That Connects
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Eye-catching visuals, brand-aligned graphics, and creative advertising hooks designed to capture attention and communicate your message clearly.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-[#078BFF] font-semibold flex items-center gap-1.5">
                <span>Visual Storytelling</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-[#071B3A] border border-white/10 p-8 flex flex-col justify-between hover:border-[#FF8A00]/40 hover:-translate-y-1 transition-all duration-300 shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0B254E] border border-[#FF8A00]/20 flex items-center justify-center text-[#FF8A00] mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Marketing With Purpose
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Campaign strategies on Google, Meta, and YouTube focused on reaching genuine prospects rather than generating empty impressions.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-[#FF8A00] font-semibold flex items-center gap-1.5">
                <span>Targeted Solutions</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-[#071B3A] border border-white/10 p-8 flex flex-col justify-between hover:border-[#38BDF8]/40 hover:-translate-y-1 transition-all duration-300 shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0B254E] border border-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8] mb-6">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Digital Experiences That Impress
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Fast, responsive, mobile-first websites and landing pages engineered to present your business with credibility and clarity.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-[#38BDF8] font-semibold flex items-center gap-1.5">
                <span>Modern Web Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 4. SERVICES SHOWCASE — MAIN CONVERSION SECTION    */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF8A00]">
              Full-Service Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Everything Your Brand Needs to{' '}
              <span className="bg-gradient-to-r from-[#078BFF] to-[#FF8A00] bg-clip-text text-transparent">
                Grow Online
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
              Creative, advertising, and digital solutions under one roof.
            </p>
          </div>

          {/* Responsive 10-Service Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {homepageServices.map((srv, index) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl bg-[#071B3A] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#078BFF]/40 hover:shadow-2xl hover:shadow-[#078BFF]/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    {/* Visual Preview */}
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.src = IMAGES.heroEntrepreneur;
                        }}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 bg-[#030817]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-semibold text-[#FF8A00]">
                        {srv.badge}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#0B254E] border border-white/10 flex items-center justify-center text-[#078BFF]">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                          {srv.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between">
                    <Link
                      to={srv.route}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#078BFF] group-hover:text-[#FF8A00] transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button variant="secondary" size="lg" to="/services" showArrow>
              View All 10 Services in Detail
            </Button>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 5. CINEMATIC CREATIVE SHOWCASE                    */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative bg-[#050D20] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#078BFF]">
              Visual Gallery
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Creative Ideas,{' '}
              <span className="bg-gradient-to-r from-[#078BFF] to-[#FF8A00] bg-clip-text text-transparent">
                Brought to Life.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
              A glimpse into advertising concepts, social media creatives, video editing suites, and modern website designs developed with care.
            </p>
          </div>

          {/* Interactive Filters */}
          <div className="mt-10 flex items-center justify-center">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-xl bg-[#071B3A] border border-white/10">
              {[
                { id: 'all', label: 'All Creatives' },
                { id: 'ads', label: 'Advertising & Ads' },
                { id: 'web', label: 'Web & UI/UX' },
                { id: 'creative', label: 'Social & Video' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveShowcaseFilter(tab.id as any)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                    activeShowcaseFilter === tab.id
                      ? 'bg-[#FF8A00] text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Showcase Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredShowcase.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#071B3A] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#078BFF]/40 hover:shadow-2xl hover:shadow-[#078BFF]/10 transition-all duration-300"
              >
                <div>
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.src = IMAGES.heroEntrepreneur;
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#030817]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-semibold text-[#078BFF]">
                      {item.categoryLabel}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span>Concept & Production</span>
                  <span className="text-[#FF8A00] font-semibold">ABX Studio</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="primary" size="lg" to="/portfolio" showArrow>
              Explore Our Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 6. WHY CHOOSE ABX DIGITAL STUDIO                  */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF8A00]">
              Our Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Built Around Creativity.{' '}
              <span className="bg-gradient-to-r from-[#078BFF] to-[#FF8A00] bg-clip-text text-transparent">
                Focused on Your Goals.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
              Four pillars guide how we design, communicate, and deliver value for every client.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Benefit 1 */}
            <div className="rounded-2xl bg-[#071B3A] border border-white/10 p-7 flex flex-col justify-between hover:border-[#078BFF]/40 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0B254E] border border-white/10 flex items-center justify-center text-[#078BFF] mb-5">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">1. Tailored Solutions</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Solutions shaped around your brand, audience, and project requirements.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400">
                Custom Scope
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="rounded-2xl bg-[#071B3A] border border-white/10 p-7 flex flex-col justify-between hover:border-[#FF8A00]/40 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0B254E] border border-white/10 flex items-center justify-center text-[#FF8A00] mb-5">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">2. Creative Thinking</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Visual concepts designed to help your business communicate clearly and professionally.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400">
                Strategic Design
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="rounded-2xl bg-[#071B3A] border border-white/10 p-7 flex flex-col justify-between hover:border-[#078BFF]/40 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0B254E] border border-white/10 flex items-center justify-center text-[#078BFF] mb-5">
                  <Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">3. Connected Digital Services</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Advertising, creative production, website development, and SEO support in one place.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400">
                End-to-End
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="rounded-2xl bg-[#071B3A] border border-white/10 p-7 flex flex-col justify-between hover:border-[#FF8A00]/40 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0B254E] border border-white/10 flex items-center justify-center text-[#FF8A00] mb-5">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">4. Clear Communication</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A straightforward process with clear discussions about deliverables, scope, and next steps.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-400">
                Honest Collaboration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 7. EMOTIONAL STORYTELLING SECTION                 */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative bg-[#050D20] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-[#078BFF]/30 via-white/5 to-[#FF8A00]/30 shadow-2xl overflow-hidden">
                <ImageCard
                  src={IMAGES.storyOwner}
                  alt="Business founder planning a marketing campaign in a creative studio"
                  aspectRatio="4:3"
                  className="rounded-2xl"
                  caption="Empowering Business Founders to Share Their Vision Online"
                />
              </div>
            </div>

            {/* Story Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF8A00]">
                Every Brand Has A Story
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
                Your Business Deserves to Be Seen.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
                Behind every brand is a vision, a hard-working person, and a reason to grow. We help translate that vision into thoughtful digital experiences that make your business easier to discover, understand, and remember.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Present your brand with confidence.',
                  'Communicate your value clearly.',
                  'Build a more consistent digital presence.',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF8A00] shrink-0" />
                    <span className="text-sm sm:text-base text-slate-200 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  variant="whatsapp"
                  size="lg"
                  href={storyWhatsAppUrl}
                  icon={<MessageSquare className="w-5 h-5 fill-current" />}
                >
                  Tell Us About Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 8. SIMPLE WORKFLOW SECTION                        */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#078BFF]">
              How We Collaborate
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              From Your Idea to Your{' '}
              <span className="bg-gradient-to-r from-[#078BFF] to-[#FF8A00] bg-clip-text text-transparent">
                Digital Presence.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
              A transparent four-step process to bring clarity and momentum to every project.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Discover',
                desc: 'Understand your business, audience, requirements, and objectives.',
                color: 'text-[#078BFF]',
              },
              {
                step: '02',
                title: 'Plan',
                desc: 'Choose the suitable creative approach, deliverables, and project scope.',
                color: 'text-[#FF8A00]',
              },
              {
                step: '03',
                title: 'Create',
                desc: 'Develop the advertising assets, creative content, or website agreed upon.',
                color: 'text-[#078BFF]',
              },
              {
                step: '04',
                title: 'Launch and Improve',
                desc: 'Help launch the agreed solution and identify opportunities for improvement.',
                color: 'text-[#FF8A00]',
              },
            ].map((st, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#071B3A] border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all"
              >
                <div>
                  <div className={`text-2xl font-black font-['Outfit'] ${st.color} mb-3`}>
                    {st.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-400">
                  Step {st.step} Milestone
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 9. FEATURED SERVICES CTA BANNER                   */}
      {/* ================================================== */}
      <section className="py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#071B3A] via-[#0B254E] to-[#071B3A] border border-[#078BFF]/30 p-8 sm:p-12 lg:p-16 text-center shadow-2xl overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute -top-20 left-1/4 w-96 h-96 bg-[#078BFF]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-[#FF8A00]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF8A00]">
                <Zap className="w-4 h-4 fill-current text-[#FF8A00]" />
                <span>Immediate Consultation</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
                One Vision. Endless Digital Possibilities.
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
                Need an advertising campaign, a professional website, eye-catching creatives, or a complete digital solution? Let's discuss what your business needs.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="whatsapp"
                  size="lg"
                  href={BRAND_CONFIG.whatsappUrl}
                  icon={<MessageSquare className="w-5 h-5 fill-current" />}
                  className="w-full sm:w-auto"
                >
                  Chat on WhatsApp
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  to="/services"
                  showArrow
                  className="w-full sm:w-auto"
                >
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 10. TESTIMONIALS — HONEST IMPLEMENTATION          */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative bg-[#050D20] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#078BFF]">
              Our Commitment
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              What You Can Expect When We Work Together
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
              Clear expectations build reliable partnerships. Here is the standard we bring to every client engagement.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Clear Project Communication',
                desc: 'Direct discussions on WhatsApp and structured reviews so you always know project status.',
                icon: MessageSquare,
                highlight: '#078BFF',
              },
              {
                title: 'Agreed Deliverables and Scope',
                desc: 'A defined list of deliverables agreed upon in writing before creative work begins.',
                icon: FileCheck,
                highlight: '#FF8A00',
              },
              {
                title: 'Brand-Consistent Creative Work',
                desc: 'Designs, banners, and web pages that respect your colors, typography, and company values.',
                icon: Palette,
                highlight: '#078BFF',
              },
              {
                title: 'A Collaborative Process',
                desc: 'We listen to your ideas and combine them with practical marketing execution to achieve your vision.',
                icon: Shield,
                highlight: '#FF8A00',
              },
            ].map((pillar, idx) => {
              const IconP = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#071B3A] border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all duration-300"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0B254E] border border-white/10 flex items-center justify-center text-[#FF8A00] mb-5">
                      <IconP className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-400">
                    Standard Commitment
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 11. FAQ PREVIEW                                    */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF8A00]">
              Common Questions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Questions Before We Get Started?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed [text-wrap:balance]">
              Straightforward answers about our services, individual project orders, pricing, and realistic expectations.
            </p>
          </div>

          <div className="mt-12 sm:mt-16">
            <FaqAccordion items={FAQS_DATA} />
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#078BFF] hover:text-[#FF8A00] transition-colors"
            >
              <span>View All FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 12. FINAL HOMEPAGE CONVERSION SECTION             */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative border-t border-white/10 bg-gradient-to-b from-[#071B3A] to-[#030817]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF8A00] mb-4">
            <Sparkles className="w-4 h-4 text-[#FF8A00]" />
            <span>Take The Next Step</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight [text-wrap:balance]">
            Ready to Make Your{' '}
            <span className="bg-gradient-to-r from-[#078BFF] via-[#38BDF8] to-[#FF8A00] bg-clip-text text-transparent">
              Brand Stand Out?
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            Share your idea with ABX Digital Studio and let's explore the right digital solution for your business.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="whatsapp"
              size="lg"
              href={finalWhatsAppUrl}
              icon={<MessageSquare className="w-5 h-5 fill-current" />}
              className="w-full sm:w-auto text-base"
            >
              Start a WhatsApp Conversation
            </Button>

            <Button
              variant="secondary"
              size="lg"
              to="/services"
              showArrow
              className="w-full sm:w-auto text-base"
            >
              Explore Our Services
            </Button>
          </div>

          <div className="mt-8 text-xs text-slate-400">
            WhatsApp Business: <span className="text-white font-semibold">{BRAND_CONFIG.whatsappNumber}</span> · Prompt strategy response
          </div>
        </div>
      </section>
    </div>
  );
};
