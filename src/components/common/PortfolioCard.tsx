import React from 'react';
import { ArrowUpRight, Play, Eye } from 'lucide-react';
import { PortfolioItem } from '../../types/index.ts';
import { ImageCard } from './ImageCard.tsx';

interface PortfolioCardProps {
  item: PortfolioItem;
  className?: string;
  onViewProject?: (item: PortfolioItem) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, className = '', onViewProject }) => {
  const handleAction = () => {
    if (onViewProject) {
      onViewProject(item);
    }
  };

  return (
    <div
      role={onViewProject ? 'button' : undefined}
      tabIndex={onViewProject ? 0 : undefined}
      onClick={handleAction}
      onKeyDown={(e) => {
        if (onViewProject && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleAction();
        }
      }}
      className={`group relative rounded-2xl bg-[#071B3A] border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#078BFF]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#078BFF]/15 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#078BFF] ${className}`}
    >
      <div>
        {/* Project Visual Showcase */}
        <div className="relative overflow-hidden aspect-video bg-[#030817]">
          <ImageCard
            src={item.image}
            alt={item.title}
            aspectRatio="16:9"
            className="rounded-b-none border-0 group-hover:scale-105 transition-transform duration-500"
          />

          {/* Light Sweep Highlight */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transform transition-transform" />

          {/* Demo Project / Badge Indicator */}
          <div className="absolute top-3 right-3 bg-[#030817]/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 text-[11px] font-medium text-amber-300 shadow-md">
            {item.badge || item.metric || 'Concept Project'}
          </div>

          {/* Video Preview Badge if applicable */}
          {item.isVideo && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-[#030817]/80 backdrop-blur-md border border-[#FF8A00]/60 flex items-center justify-center text-[#FF8A00] shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </div>
            </div>
          )}

          {/* Hover overlay hint */}
          <div className="absolute inset-0 bg-[#030817]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#078BFF] text-white text-xs font-semibold shadow-lg">
              <Eye className="w-3.5 h-3.5" />
              View Project
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-semibold tracking-wider text-[#078BFF] uppercase">
              {item.category}
            </span>
            {item.isVideo && (
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FF8A00]/20 text-[#FF8A00] border border-[#FF8A00]/30">
                Video Motion
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#38BDF8] transition-colors line-clamp-1">
            {item.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
            {item.tagline}
          </p>

          {/* Deliverables Tags */}
          <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400">
            {item.deliverables.slice(0, 3).map((del, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-300"
              >
                {del}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-5 pt-3 flex items-center justify-between border-t border-white/5 bg-[#051329]/50">
        <span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors">
          View Project Details
        </span>
        <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#FF8A00] text-slate-300 group-hover:text-white flex items-center justify-center transition-all">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
