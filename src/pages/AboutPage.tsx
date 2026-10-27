import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  Lightbulb,
  ShieldCheck,
  CheckCircle2,
  Users,
  TrendingUp,
  Target,
  Cpu,
  Palette,
  Globe,
  Share2,
  Video,
  MapPin,
  Compass,
  Zap,
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { Button } from '../components/common/Button.tsx';
import { BRAND_CONFIG, IMAGES } from '../data/constants.ts';

export const AboutPage: React.FC = () => {
  // Desktop pointer parallax coordinates
  const [heroParallax, setHeroParallax] = useState({ x: 0, y: 0 });
  const [storyParallax, setStoryParallax] = useState({ x: 0, y: 0 });

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only apply on desktop
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setHeroParallax({ x, y });
  };

  const handleStoryMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStoryParallax({ x, y });
  };

  const storyWhatsAppUrl = `${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    'Hi ABX Digital Studio, I would like to discuss my project.'
  )}`;

  // 9 About Page Services with photography
  const aboutServices = [
    {
      title: 'Google Ads',
      desc: 'High-intent search, Performance Max, and display campaigns mapped to business targets.',
      route: '/services/google-ads',
      image: IMAGES.paidMedia,
      icon: Target,
    },
    {
      title: 'Meta Ads',
      desc: 'Facebook & Instagram creative testing matrices reaching relevant high-converting audiences.',
      route: '/services/meta-ads',
      image: IMAGES.heroTeam,
      icon: Share2,
    },
    {
      title: 'AI Creative Videos',
      desc: 'AI-assisted promotional videos, product motion clips, and high-CTR reels concepts.',
      route: '/services/ai-creatives',
      image: IMAGES.showcaseVideo,
      icon: Cpu,
    },
    {
      title: 'Graphic Design and Banners',
      desc: 'Polished promotional posters, marketing collateral, and brand identity style systems.',
      route: '/services/graphic-design',
      image: IMAGES.showcaseSocial,
      icon: Palette,
    },
    {
      title: 'Website Development',
      desc: 'Fast, responsive websites and landing pages built to present your brand with authority.',
      route: '/services/website-development',
      image: IMAGES.webDesign,
      icon: Globe,
    },
    {
      title: 'SEO Services',
      desc: 'Search visibility, keyword structure, on-page optimization, and organic crawlability.',
      route: '/services/seo',
      image: IMAGES.growthMeeting,
      icon: TrendingUp,
    },
    {
      title: 'Social Media Marketing',
      desc: 'Editorial content planning, post creatives, and consistent digital brand presentation.',
      route: '/services/social-media',
      image: IMAGES.showcaseSocial,
      icon: Share2,
    },
    {
      title: 'YouTube Advertising',
      desc: 'Video advertising solutions, audience targeting, and storyboard creative direction.',
      route: '/services/google-ads',
      image: IMAGES.showcaseVideo,
      icon: Video,
    },
    {
      title: 'Google Business Profile',
      desc: 'Setup and optimization to enhance local search ranking and online discoverability.',
      route: '/services/seo',
      image: IMAGES.storyOwner,
      icon: MapPin,
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#030817] text-slate-100 overflow-hidden">
      {/* Top Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 w-full">
        <Breadcrumbs items={[{ label: 'About Us' }]} />
      </div>

      {/* ================================================== */}
      {/* 2. HERO SECTION — CINEMATIC PHOTO MOTION           */}
      {/* ================================================== */}
      <section
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={() => setHeroParallax({ x: 0, y: 0 })}
        className="relative pt-10 pb-20 sm:pt-16 sm:pb-32 overflow-hidden border-b border-white/5"
      >
        {/* Animated Background Gradients & Light Streaks */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#078BFF]/15 via-[#071B3A]/30 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/3 -right-32 w-[550px] h-[450px] bg-[#FF8A00]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF8A00]">
                <Sparkles className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <span>DISCOVER ABX DIGITAL STUDIO</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] [text-wrap:balance]">
                Creativity Meets{' '}
                <span className="bg-gradient-to-r from-[#078BFF] via-[#38BDF8] to-[#FF8A00] bg-clip-text text-transparent">
                  Digital Possibility.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl [text-wrap:balance]">
                We combine creative thinking, digital advertising, AI-assisted content, and modern website experiences to help businesses build a stronger online presence.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  variant="secondary"
                  size="lg"
                  to="/services"
                  showArrow
                  className="text-base"
                >
                  Explore Our Services
                </Button>

                <Button
                  variant="whatsapp"
                  size="lg"
                  href={BRAND_CONFIG.whatsappUrl}
                  icon={<MessageSquare className="w-5 h-5 fill-current" />}
                  className="text-base font-bold shadow-xl shadow-orange-500/25"
                >
                  Let's Discuss Your Project
                </Button>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#078BFF]" />
                  <span>Honest Collaboration</span>
                </span>
                <span className="text-slate-700" aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" />
                  <span>Custom Scopes</span>
                </span>
                <span className="text-slate-700" aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                  <span>Cross-Channel Cohesion</span>
                </span>
              </div>
            </div>

            {/* Right Photo Composition with Desktop Parallax & Light Streaks */}
            <div className="lg:col-span-5 relative">
              {/* Backlight Streaks */}
              <div
                className="absolute -inset-4 bg-gradient-to-r from-[#078BFF]/30 to-[#FF8A00]/25 rounded-3xl blur-2xl opacity-75 transition-transform duration-300 pointer-events-none"
                style={{
                  transform: `translate3d(${heroParallax.x * 24}px, ${heroParallax.y * 24}px, 0)`,
                }}
              />

              {/* Main Photo Frame with Subtle Parallax */}
              <div
                className="relative rounded-3xl p-1 bg-gradient-to-b from-[#078BFF]/40 via-white/10 to-[#FF8A00]/30 shadow-2xl overflow-hidden transition-transform duration-200 group"
                style={{
                  transform: `translate3d(${heroParallax.x * -12}px, ${heroParallax.y * -12}px, 0)`,
                }}
              >
                <div className="relative overflow-hidden rounded-[22px] aspect-[16/10]">
                  <img
                    src={IMAGES.heroEntrepreneur}
                    alt="Creative professional planning digital campaigns"
                    onError={(e) => {
                      e.currentTarget.src = IMAGES.heroEntrepreneur;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Gentle Cinematic Light Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none animate-light-sweep" />

                  {/* Contrast Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030817]/70 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Layered Badge */}
              <div
                className="mt-4 sm:absolute sm:-bottom-6 sm:-left-6 bg-[#071B3A]/95 backdrop-blur-md border border-[#078BFF]/30 rounded-2xl p-4 shadow-2xl flex items-center gap-3.5 max-w-sm animate-float-slow"
                style={{
                  transform: `translate3d(${heroParallax.x * 16}px, ${heroParallax.y * 16}px, 0)`,
                }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#0B254E] border border-[#078BFF]/30 flex items-center justify-center text-[#078BFF] shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FF8A00]">
                    Dedicated Focus
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Tailored Creative & Digital Execution
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 3. WHO WE ARE — PHOTO STORYTELLING                 */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative bg-[#050D20] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#078BFF]">
                Our Identity
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
                Your Creative Partner in the{' '}
                <span className="bg-gradient-to-r from-[#078BFF] to-[#FF8A00] bg-clip-text text-transparent">
                  Digital World.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
                ABX Digital Studio provides digital advertising, graphic design, AI-assisted creative production, website development, SEO, and social media marketing solutions. Our goal is to help businesses present their value clearly and professionally online.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Creative concepts built around real client requirements.',
                  'Transparent communication and structured project milestones.',
                  'A cohesive digital look across websites, banners, and ad campaigns.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-[#FF8A00] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button variant="secondary" size="md" to="/services" showArrow>
                  Browse Service Catalog
                </Button>
              </div>
            </div>

            {/* Right Photo with Gentle Vertical Floating & Border Glow */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl p-1 bg-gradient-to-tr from-[#078BFF]/30 via-[#0B254E] to-[#FF8A00]/30 shadow-2xl animate-float-delayed group">
                <div className="relative overflow-hidden rounded-[22px] aspect-[4/3]">
                  <img
                    src={IMAGES.heroTeam}
                    alt="ABX Digital Studio creative team collaborating on digital marketing strategy"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = IMAGES.heroEntrepreneur;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Subtle Light Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#078BFF]/15 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 4 & 5. OUR MISSION & OUR VISION (Asymmetric Cards) */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF8A00]">
              Purpose & Direction
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              What Drives Our Studio Every Day
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* 4. OUR MISSION */}
            <div className="rounded-3xl bg-[#071B3A] border border-white/10 p-8 sm:p-10 flex flex-col justify-between hover:border-[#078BFF]/40 transition-all duration-300 shadow-2xl group">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#078BFF] mb-3">
                  <Target className="w-4 h-4 text-[#078BFF]" />
                  <span>Purpose & Action</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 [text-wrap:balance]">
                  To help businesses communicate their value through thoughtful creative work, practical digital marketing, and professional online experiences.
                </p>
              </div>

              {/* Mission Photo with slow hover zoom & subtle lighting */}
              <div className="relative overflow-hidden rounded-2xl aspect-[16/9] border border-white/10 group-hover:border-[#078BFF]/30 transition-all">
                <img
                  src={IMAGES.aboutMission}
                  alt="Designer crafting digital campaign prototypes"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = IMAGES.heroEntrepreneur;
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030817]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-white">
                  Thoughtful Creative Production
                </div>
              </div>
            </div>

            {/* 5. OUR VISION */}
            <div className="rounded-3xl bg-[#071B3A] border border-white/10 p-8 sm:p-10 flex flex-col justify-between hover:border-[#FF8A00]/40 transition-all duration-300 shadow-2xl group">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF8A00] mb-3">
                  <Lightbulb className="w-4 h-4 text-[#FF8A00]" />
                  <span>Horizon & Opportunity</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 [text-wrap:balance]">
                  To make creative and digital solutions more accessible to businesses of different sizes, helping them strengthen their online identity and explore new opportunities.
                </p>
              </div>

              {/* Vision Photo with moving visual accents */}
              <div className="relative overflow-hidden rounded-2xl aspect-[16/9] border border-white/10 group-hover:border-[#FF8A00]/30 transition-all">
                <img
                  src={IMAGES.aboutVision}
                  alt="Creative directors reviewing brand growth trajectory"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = IMAGES.heroEntrepreneur;
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030817]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-white">
                  Accessible Digital Growth
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 6. OUR CORE VALUES                                 */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative bg-[#050D20] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#078BFF]">
              Guiding Principles
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Our Core{' '}
              <span className="bg-gradient-to-r from-[#078BFF] to-[#FF8A00] bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-base text-slate-300 leading-relaxed [text-wrap:balance]">
              Five standards that shape every asset, line of code, and ad campaign we configure.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                number: '01',
                title: 'Creativity',
                desc: 'Fresh ideas and thoughtful visual solutions.',
                icon: Lightbulb,
                color: 'text-[#078BFF]',
                border: 'hover:border-[#078BFF]/40',
              },
              {
                number: '02',
                title: 'Transparency',
                desc: 'Clear communication about scope and expectations.',
                icon: ShieldCheck,
                color: 'text-[#FF8A00]',
                border: 'hover:border-[#FF8A00]/40',
              },
              {
                number: '03',
                title: 'Quality',
                desc: 'Professional presentation and consistent branding.',
                icon: Sparkles,
                color: 'text-[#38BDF8]',
                border: 'hover:border-[#38BDF8]/40',
              },
              {
                number: '04',
                title: 'Collaboration',
                desc: 'Understanding and working with client requirements.',
                icon: Users,
                color: 'text-[#FF8A00]',
                border: 'hover:border-[#FF8A00]/40',
              },
              {
                number: '05',
                title: 'Continuous Improvement',
                desc: 'Finding practical ways to improve digital work.',
                icon: TrendingUp,
                color: 'text-[#078BFF]',
                border: 'hover:border-[#078BFF]/40',
              },
            ].map((val, idx) => {
              const IconV = val.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl bg-[#071B3A] border border-white/10 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${val.border} shadow-xl group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#0B254E] border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                        <IconV className={`w-5 h-5 ${val.color}`} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        {val.number}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white mb-2">
                      {val.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 text-[11px] text-slate-500 font-medium">
                    Core Standard
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 7. OUR SERVICES — PHOTO CARDS                     */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF8A00]">
              Full Scope
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Creative Ideas. Practical Digital Solutions.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed [text-wrap:balance]">
              Explore our core disciplines with dedicated visual showcases and direct project routing.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {aboutServices.map((srv, index) => {
              const IconS = srv.icon;
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
                        onError={(e) => {
                          e.currentTarget.src = IMAGES.heroEntrepreneur;
                        }}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030817]/70 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-[#0B254E] border border-white/10 flex items-center justify-center text-[#078BFF]">
                          <IconS className="w-3.5 h-3.5" />
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
        </div>
      </section>

      {/* ================================================== */}
      {/* 8. EMOTIONAL BUSINESS STORY                       */}
      {/* ================================================== */}
      <section
        onMouseMove={handleStoryMouseMove}
        onMouseLeave={() => setStoryParallax({ x: 0, y: 0 })}
        className="py-20 sm:py-28 relative bg-[#050D20] border-y border-white/5 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Visual with Parallax & Orange Accent */}
            <div className="lg:col-span-6 relative">
              <div
                className="relative rounded-3xl p-1 bg-gradient-to-tr from-[#FF8A00]/40 via-white/5 to-[#078BFF]/40 shadow-2xl overflow-hidden transition-transform duration-200 group"
                style={{
                  transform: `translate3d(${storyParallax.x * -12}px, ${storyParallax.y * -12}px, 0)`,
                }}
              >
                <div className="relative overflow-hidden rounded-[22px] aspect-[4/3]">
                  <img
                    src={IMAGES.storyOwner}
                    alt="Small business owner planning brand growth"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = IMAGES.heroEntrepreneur;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030817]/75 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF8A00]">
                Our Purpose
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
                Behind Every Business Is a Vision.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
                Every business begins with an idea and the determination to make it real. We help bring that vision into the digital world through thoughtful creative work and professional digital solutions.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Honoring the unique story behind your company.',
                  'Transforming concepts into customer-ready digital media.',
                  'Providing reliable support as your business expands.',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF8A00] shrink-0" />
                    <span className="text-sm sm:text-base text-slate-200 font-medium">
                      {item}
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
      {/* 9. OUR WORKING PROCESS                             */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#078BFF]">
              Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Our Working Process
            </h2>
            <p className="text-base text-slate-300 leading-relaxed [text-wrap:balance]">
              A disciplined four-step timeline engineered for clarity and quality delivery.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Discover',
                desc: 'Understand business requirements.',
                highlight: '#078BFF',
              },
              {
                step: '02',
                title: 'Plan',
                desc: 'Define the creative direction and scope.',
                highlight: '#FF8A00',
              },
              {
                step: '03',
                title: 'Create',
                desc: 'Develop the agreed digital solution.',
                highlight: '#078BFF',
              },
              {
                step: '04',
                title: 'Deliver and Improve',
                desc: 'Present the work and identify improvements.',
                highlight: '#FF8A00',
              },
            ].map((p, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#071B3A] border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl"
              >
                <div>
                  <div
                    className="text-2xl font-black font-['Outfit'] mb-3"
                    style={{ color: p.highlight }}
                  >
                    {p.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono">
                  Milestone {p.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 10. FINAL CTA                                      */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative border-t border-white/10 bg-gradient-to-b from-[#071B3A] to-[#030817]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF8A00]">
            <Zap className="w-4 h-4 fill-current text-[#FF8A00]" />
            <span>Start a Conversation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight [text-wrap:balance]">
            Have a Vision for{' '}
            <span className="bg-gradient-to-r from-[#078BFF] via-[#38BDF8] to-[#FF8A00] bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            Let's discuss your ideas and explore a digital solution that fits your requirements.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="whatsapp"
              size="lg"
              href={BRAND_CONFIG.whatsappUrl}
              icon={<MessageSquare className="w-5 h-5 fill-current" />}
              className="w-full sm:w-auto text-base"
            >
              Chat With ABX Digital Studio
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

          <div className="pt-2 text-xs text-slate-400">
            WhatsApp Business: <span className="text-white font-semibold">{BRAND_CONFIG.whatsappNumber}</span> · Prompt response Monday to Saturday
          </div>
        </div>
      </section>
    </div>
  );
};
