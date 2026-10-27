import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { SectionHeading } from '../components/common/SectionHeading.tsx';
import { ImageCard } from '../components/common/ImageCard.tsx';
import { Button } from '../components/common/Button.tsx';
import { CtaSection } from '../components/common/CtaSection.tsx';
import { SERVICES_DATA, IMAGES, BRAND_CONFIG } from '../data/constants.ts';
import { CheckCircle2, MessageSquare, ArrowRight, TrendingUp } from 'lucide-react';

interface ServiceDetailPageProps {
  customSlug?: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ customSlug }) => {
  const params = useParams<{ slug: string }>();
  const slug = customSlug || params.slug;

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Select an appropriate realistic photograph for the service
  const serviceImages: Record<string, string> = {
    'google-ads': IMAGES.paidMedia,
    'meta-ads': IMAGES.heroTeam,
    'ai-creatives': IMAGES.showcaseVideo,
    'graphic-design': IMAGES.designerPhoto,
    'website-development': IMAGES.webDesign,
    seo: IMAGES.growthMeeting,
    'social-media': IMAGES.socialCreatorPhoto,
    'youtube-ads': IMAGES.youtubeStudioPhoto,
    'google-business-profile': IMAGES.storyOwner,
  };

  const imageSrc = serviceImages[service.slug] || IMAGES.paidMedia;
  const otherServices = SERVICES_DATA.filter((s) => s.slug !== service.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
      <Breadcrumbs
        items={[
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      {/* Hero Overview */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#078BFF]">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>ABX Performance Vertical</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            {service.fullDescription}
          </p>

          {/* KPI highlight card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#071B3A] border border-[#078BFF]/30 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0B254E] border border-white/10 flex items-center justify-center text-[#FF8A00] shrink-0 mt-0.5">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF8A00]">
                Key Performance Target
              </div>
              <div className="text-sm sm:text-base font-semibold text-white mt-0.5">
                {service.kpiHighlight}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              variant="whatsapp"
              size="lg"
              href={`${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(
                `Hello ABX Digital Studio, I would like to inquire about your ${service.title} service.`
              )}`}
              icon={<MessageSquare className="w-5 h-5 fill-current" />}
            >
              Discuss {service.title}
            </Button>
            <Button variant="secondary" size="lg" to="/contact">
              Submit Brief
            </Button>
          </div>
        </div>

        {/* Visual asset */}
        <div className="lg:col-span-5">
          <ImageCard
            src={imageSrc}
            alt={service.title}
            aspectRatio="4:3"
            caption={`${service.title} Execution Blueprint`}
          />
        </div>
      </div>

      {/* Deliverables Section */}
      <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-[#071B3A] border border-white/10 shadow-xl">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
          What We Deploy & Manage
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {service.deliverables.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-[#0B254E]/60 border border-white/5 flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-[#FF8A00] shrink-0 mt-0.5" />
              <span className="text-sm text-slate-200 font-medium leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Related Services Links */}
      <div className="mt-16 sm:mt-20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-white">Other Services You Might Need</h3>
          <Link
            to="/services"
            className="text-xs font-semibold text-[#078BFF] hover:text-[#FF8A00] transition-colors inline-flex items-center gap-1"
          >
            <span>All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherServices.slice(0, 3).map((other) => (
            <Link
              key={other.slug}
              to={`/services/${other.slug}`}
              className="p-5 rounded-2xl bg-[#071B3A] border border-white/10 hover:border-[#078BFF]/50 transition-all group"
            >
              <div className="text-xs font-mono text-[#078BFF] uppercase mb-1">Service</div>
              <h4 className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                {other.title}
              </h4>
              <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                {other.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <CtaSection
        title={`Scale Your Business with ${service.title}`}
        subtitle={`Reach our specialist on WhatsApp at ${BRAND_CONFIG.whatsappNumber} for a complimentary review of your current setup.`}
      />
    </div>
  );
};
