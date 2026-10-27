import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  Target,
  Share2,
  Cpu,
  Palette,
  Globe,
  TrendingUp,
  Video,
  MapPin,
  CheckCircle2,
  Lightbulb,
  BarChart3,
  Wrench,
  UserCheck,
  Zap,
  ChevronRight,
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { Button } from '../components/common/Button.tsx';
import { BRAND_CONFIG, IMAGES } from '../data/constants.ts';

export const ServicesIndexPage: React.FC = () => {
  const [heroParallax, setHeroParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setHeroParallax({ x, y });
  };

  const whatsappPrefilledUrl = `${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    'Hello ABX Digital Studio, I want to know more about your digital marketing services.'
  )}`;

  const scrollToServices = () => {
    const el = document.getElementById('services-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 9 Individual Services with realistic photography & details
  const servicesList = [
    {
      id: 'google-ads',
      title: 'Google Ads',
      desc: 'Reach potential customers through carefully planned Google advertising campaigns designed around relevant keywords, audience intent, and business objectives.',
      route: '/services/google-ads',
      image: IMAGES.paidMedia,
      icon: Target,
      ctaText: 'Explore Google Ads',
      photoCaption: 'Digital marketer analyzing search campaign analytics',
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads',
      desc: 'Promote your business across Facebook and Instagram with audience-focused advertising strategies, creative testing, and campaign optimization.',
      route: '/services/meta-ads',
      image: IMAGES.heroTeam,
      icon: Share2,
      ctaText: 'Explore Meta Ads',
      photoCaption: 'Social media advertising team testing ad creative matrices',
    },
    {
      id: 'ai-creatives',
      title: 'AI Creative Videos',
      desc: 'Create engaging promotional videos, AI-assisted video content, and ad creatives tailored to your brand and marketing goals.',
      route: '/services/ai-creatives',
      image: IMAGES.showcaseVideo,
      icon: Cpu,
      ctaText: 'Explore AI Videos',
      photoCaption: 'Video creator editing dynamic commercial video clips',
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design & Posters',
      desc: 'Get professional promotional posters, banners, social media designs, advertising creatives, and branded templates.',
      route: '/services/graphic-design',
      image: IMAGES.designerPhoto,
      icon: Palette,
      ctaText: 'Explore Graphic Design',
      photoCaption: 'Graphic designer crafting promotional poster layouts',
    },
    {
      id: 'website-development',
      title: 'Website Development',
      desc: 'Build a modern, responsive website that clearly presents your business, services, and contact options.',
      route: '/services/website-development',
      image: IMAGES.webDesign,
      icon: Globe,
      ctaText: 'Explore Website Development',
      photoCaption: 'Web developer engineering responsive brand interfaces',
    },
    {
      id: 'seo',
      title: 'SEO Services',
      desc: 'Improve your website structure, content relevance, on-page SEO, and search visibility with a practical SEO strategy.',
      route: '/services/seo',
      image: IMAGES.growthMeeting,
      icon: TrendingUp,
      ctaText: 'Explore SEO',
      photoCaption: 'Marketing analyst evaluating search engine growth metrics',
    },
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      desc: 'Maintain a consistent online presence with content planning, branded posts, creative ideas, and social media support.',
      route: '/services/social-media',
      image: IMAGES.socialCreatorPhoto,
      icon: Share2,
      ctaText: 'Explore Social Media',
      photoCaption: 'Content creator planning social media post campaigns',
    },
    {
      id: 'youtube-ads',
      title: 'YouTube Ads',
      desc: 'Reach relevant audiences with video advertising strategies designed to introduce your brand, products, or services.',
      route: '/services/youtube-ads',
      image: IMAGES.youtubeStudioPhoto,
      icon: Video,
      ctaText: 'Explore YouTube Ads',
      photoCaption: 'Video production studio filming advertising commercials',
    },
    {
      id: 'google-business-profile',
      title: 'Google Business Profile',
      desc: 'Set up or improve your business profile information, service details, photos, and customer-facing business information.',
      route: '/services/google-business-profile',
      image: IMAGES.storyOwner,
      icon: MapPin,
      ctaText: 'Explore Business Profile',
      photoCaption: 'Business founder optimizing local online profile listing',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#030817] text-slate-100 overflow-hidden">
      {/* Top Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 w-full">
        <Breadcrumbs items={[{ label: 'Services' }]} />
      </div>

      {/* ================================================== */}
      {/* 3. SERVICES PAGE HERO SECTION                      */}
      {/* ================================================== */}
      <section
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHeroParallax({ x: 0, y: 0 })}
        className="relative pt-10 pb-20 sm:pt-16 sm:pb-32 overflow-hidden border-b border-white/5"
      >
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[950px] h-[550px] bg-gradient-to-b from-[#078BFF]/15 via-[#071B3A]/25 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/4 -right-32 w-[550px] h-[450px] bg-[#FF8A00]/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF8A00]">
                <Sparkles className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <span>SOLUTIONS ARCHITECTURE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] [text-wrap:balance]">
                Powerful Digital Solutions.{' '}
                <span className="bg-gradient-to-r from-[#078BFF] via-[#38BDF8] to-[#FF8A00] bg-clip-text text-transparent">
                  Real Business Growth.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl [text-wrap:balance]">
                From performance marketing to AI-powered creatives, ABX Digital Studio helps businesses build a stronger online presence, reach the right audience, and turn attention into opportunities.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={scrollToServices}
                  showArrow
                  className="text-base"
                >
                  Explore Our Services
                </Button>

                <Button
                  variant="whatsapp"
                  size="lg"
                  href={whatsappPrefilledUrl}
                  icon={<MessageSquare className="w-5 h-5 fill-current" />}
                  className="text-base font-bold shadow-xl shadow-orange-500/25"
                >
                  Discuss Your Project
                </Button>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#078BFF]" />
                  <span>9 Core Services</span>
                </span>
                <span className="text-slate-700" aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" />
                  <span>Realistic Campaign Focus</span>
                </span>
                <span className="text-slate-700" aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                  <span>Direct Strategy Guidance</span>
                </span>
              </div>
            </div>

            {/* Right Hero Realistic Photo with Subtle Parallax & Rim Lighting */}
            <div className="lg:col-span-5 relative">
              <div
                className="absolute -inset-4 bg-gradient-to-r from-[#078BFF]/25 to-[#FF8A00]/20 rounded-3xl blur-2xl opacity-70 pointer-events-none transition-transform duration-300"
                style={{
                  transform: `translate3d(${heroParallax.x * 20}px, ${heroParallax.y * 20}px, 0)`,
                }}
              />

              <div
                className="relative rounded-3xl p-1 bg-gradient-to-b from-[#078BFF]/40 via-white/10 to-[#FF8A00]/30 shadow-2xl overflow-hidden transition-transform duration-200 group"
                style={{
                  transform: `translate3d(${heroParallax.x * -10}px, ${heroParallax.y * -10}px, 0)`,
                }}
              >
                <div className="relative overflow-hidden rounded-[22px] aspect-[16/10]">
                  <img
                    src={IMAGES.heroEntrepreneur}
                    alt="Digital marketing professional working in a modern creative studio"
                    onError={(e) => {
                      e.currentTarget.src = IMAGES.heroEntrepreneur;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Dark subtle overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030817]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#078BFF]/10 to-transparent pointer-events-none animate-light-sweep" />
                </div>
              </div>

              {/* Floating Reassurance Tag */}
              <div className="mt-4 sm:absolute sm:-bottom-6 sm:-left-6 bg-[#071B3A]/95 backdrop-blur-md border border-[#078BFF]/30 rounded-2xl p-4 shadow-2xl flex items-center gap-3.5 max-w-sm animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-[#0B254E] border border-white/10 flex items-center justify-center text-[#FF8A00] shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#078BFF]">
                    Measurable Execution
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    Tailored around real business objectives
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 4. SERVICES GRID (9 Individual Services)           */}
      {/* ================================================== */}
      <section id="services-grid" className="py-20 sm:py-28 relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF8A00]">
              Our Complete Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Comprehensive Marketing & Creative Services
            </h2>
            <p className="text-base text-slate-300 leading-relaxed [text-wrap:balance]">
              Select any capability below to view details, deliverables, and customized implementation roadmaps.
            </p>
          </div>

          {/* 3 columns on large, 2 on medium, 1 on small */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesList.map((service, index) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="group rounded-3xl bg-[#071B3A] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#078BFF]/50 hover:shadow-2xl hover:shadow-[#078BFF]/10 transition-all duration-300 hover:-translate-y-1.5"
                >
                  <div>
                    {/* Large Realistic Photograph */}
                    <div className="relative overflow-hidden aspect-[16/10] bg-[#030817]">
                      <img
                        src={service.image}
                        alt={`${service.title} - ${service.photoCaption}`}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = IMAGES.heroEntrepreneur;
                        }}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Contrast Scrim & Subtle Blue/Orange Rim */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A] via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-3 left-3 bg-[#030817]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-semibold text-[#078BFF] flex items-center gap-1.5">
                        <IconComp className="w-3.5 h-3.5" />
                        <span>Service 0{index + 1}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 sm:p-7">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors mb-2.5">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Available Service</span>
                    <Link
                      to={service.route}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF8A00] group-hover:text-white transition-colors focus:outline-none focus-visible:underline"
                    >
                      <span>{service.ctaText}</span>
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
      {/* 6. WHY CHOOSE ABX DIGITAL STUDIO?                  */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative bg-[#050D20] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#078BFF]">
              Key Advantages
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Why Choose ABX Digital Studio?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed [text-wrap:balance]">
              We pair creative visual production with practical, disciplined digital marketing execution.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Creative Solutions',
                desc: 'Marketing creatives tailored to the business and its audience.',
                icon: Lightbulb,
                color: 'text-[#078BFF]',
                border: 'hover:border-[#078BFF]/40',
              },
              {
                title: 'Performance-Focused Approach',
                desc: 'Campaigns planned around clear objectives and measurable results.',
                icon: BarChart3,
                color: 'text-[#FF8A00]',
                border: 'hover:border-[#FF8A00]/40',
              },
              {
                title: 'Modern Digital Tools',
                desc: 'Practical use of current digital and AI-assisted creative tools.',
                icon: Wrench,
                color: 'text-[#38BDF8]',
                border: 'hover:border-[#38BDF8]/40',
              },
              {
                title: 'Personalized Support',
                desc: 'Solutions adapted to each client’s project requirements.',
                icon: UserCheck,
                color: 'text-[#FF8A00]',
                border: 'hover:border-[#FF8A00]/40',
              },
            ].map((b, i) => {
              const IconB = b.icon;
              return (
                <div
                  key={i}
                  className={`rounded-2xl bg-[#071B3A] border border-white/10 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${b.border} shadow-xl group`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0B254E] border border-white/10 flex items-center justify-center text-white mb-5 group-hover:scale-105 transition-transform">
                      <IconB className={`w-6 h-6 ${b.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-white/5 text-[11px] text-slate-500 font-medium">
                    Advantage 0{i + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 7. OUR WORK PROCESS                                */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF8A00]">
              Simple Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Our Work Process
            </h2>
            <p className="text-base text-slate-300 leading-relaxed [text-wrap:balance]">
              A straightforward four-step process for clear communication and quality deliverables.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Understand',
                desc: 'Learn about the business, target audience, and goals.',
                highlight: '#078BFF',
              },
              {
                step: '02',
                title: 'Plan',
                desc: 'Choose suitable services and create a project strategy.',
                highlight: '#FF8A00',
              },
              {
                step: '03',
                title: 'Create & Launch',
                desc: 'Prepare the agreed creatives, website, or campaign.',
                highlight: '#078BFF',
              },
              {
                step: '04',
                title: 'Review & Improve',
                desc: 'Review available performance data and make appropriate improvements.',
                highlight: '#FF8A00',
              },
            ].map((st, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#071B3A] border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl"
              >
                <div>
                  <div
                    className="text-2xl font-black font-['Outfit'] mb-3"
                    style={{ color: st.highlight }}
                  >
                    {st.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono">
                  Phase {st.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 8. FINAL WHATSAPP CTA                              */}
      {/* ================================================== */}
      <section className="py-20 sm:py-28 relative border-t border-white/10 bg-gradient-to-b from-[#071B3A] to-[#030817]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF8A00]">
            <Zap className="w-4 h-4 fill-current text-[#FF8A00]" />
            <span>Direct Strategy Discussion</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight [text-wrap:balance]">
            Ready to Grow Your{' '}
            <span className="bg-gradient-to-r from-[#078BFF] via-[#38BDF8] to-[#FF8A00] bg-clip-text text-transparent">
              Business Online?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
            Tell us about your business and goals. Let's discuss the right digital solution for your next step.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="whatsapp"
              size="lg"
              href={whatsappPrefilledUrl}
              icon={<MessageSquare className="w-5 h-5 fill-current" />}
              className="w-full sm:w-auto text-base"
            >
              Chat on WhatsApp
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToServices}
              showArrow
              className="w-full sm:w-auto text-base"
            >
              Explore Our Services
            </Button>
          </div>

          <div className="pt-2 text-xs text-slate-400">
            Official WhatsApp: <span className="text-white font-semibold">{BRAND_CONFIG.whatsappNumber}</span> · Open in WhatsApp for immediate response
          </div>
        </div>
      </section>
    </div>
  );
};
