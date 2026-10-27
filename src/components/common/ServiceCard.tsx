import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Target,
  Cpu,
  Palette,
  Globe,
  TrendingUp,
  Share2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { ServiceItem } from '../../types/index.ts';

const iconMap: Record<string, React.ElementType> = {
  Search,
  Target,
  Cpu,
  Palette,
  Globe,
  TrendingUp,
  Share2,
};

interface ServiceCardProps {
  service: ServiceItem;
  variant?: 'compact' | 'detailed';
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  variant = 'compact',
  className = '',
}) => {
  const IconComponent = iconMap[service.icon] || Globe;

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl bg-[#071B3A] border border-white/10 p-6 md:p-8 transition-all duration-300 hover:border-[#078BFF]/50 hover:shadow-2xl hover:shadow-[#078BFF]/10 hover:-translate-y-1 ${className}`}
    >
      {/* Top Accent Gradient Border on Hover */}
      <div className="absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-[#078BFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Header with Icon and Category */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#0B254E] border border-[#078BFF]/20 flex items-center justify-center text-[#078BFF] group-hover:bg-[#078BFF] group-hover:text-white transition-all duration-300 shadow-md">
            <IconComponent className="w-6 h-6 shrink-0" />
          </div>
          <span className="text-xs font-mono tracking-wider text-slate-500 uppercase">
            Service
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#38BDF8] transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Deliverables / Detailed specs if variant is detailed */}
        {variant === 'detailed' && service.deliverables && (
          <div className="mt-5 pt-5 border-t border-white/5 space-y-2">
            {service.deliverables.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Link / Highlight */}
      <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
          Explore Service
        </span>
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#078BFF] group-hover:text-[#FF8A00] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#078BFF] rounded"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
