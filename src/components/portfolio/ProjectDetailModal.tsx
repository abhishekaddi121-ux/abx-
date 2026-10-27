import React, { useEffect } from 'react';
import { X, ExternalLink, Play, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { PortfolioItem } from '../../types/index.ts';
import { ImageCard } from '../common/ImageCard.tsx';
import { BRAND_CONFIG } from '../../data/constants.ts';

interface ProjectDetailModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ item, onClose }) => {
  // Listen for ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (item) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose]);

  if (!item) return null;

  const whatsappProjectUrl = `${BRAND_CONFIG.whatsappUrl}?text=${encodeURIComponent(
    `Hello ABX Digital Studio, I viewed your portfolio project "${item.title}" and would like to discuss a similar project.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#030817]/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#071B3A] border border-[#078BFF]/30 rounded-2xl shadow-2xl overflow-hidden my-8 text-left transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#051329]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#078BFF]">
              {item.category}
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-[11px] font-medium text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full">
              {item.badge || 'Concept Project — Sample Design'}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#078BFF]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[80vh] overflow-y-auto">
          {/* Main Visual Preview */}
          <div className="relative aspect-video w-full bg-[#030817] border-b border-white/10 overflow-hidden">
            <ImageCard
              src={item.image}
              alt={item.title}
              aspectRatio="16:9"
              className="w-full h-full object-cover border-0 rounded-none"
            />
            {item.isVideo && (
              <div className="absolute inset-0 bg-[#030817]/40 flex flex-col items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-[#FF8A00] text-white flex items-center justify-center shadow-2xl mb-2">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <span className="text-xs font-medium text-slate-200 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                  Video Concept Preview
                </span>
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Title & Tagline */}
            <div>
              <h2
                id="modal-project-title"
                className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
              >
                {item.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                {item.tagline}
              </p>
            </div>

            {/* Design Objective & Creative Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {item.objective && (
                <div className="p-4 rounded-xl bg-[#030817]/60 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#078BFF] uppercase tracking-wider mb-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Design Objective
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.objective}
                  </p>
                </div>
              )}

              {item.creativeApproach && (
                <div className="p-4 rounded-xl bg-[#030817]/60 border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FF8A00] uppercase tracking-wider mb-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Creative Approach
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.creativeApproach}
                  </p>
                </div>
              )}
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Delivered Components & Assets
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.deliverables.map((del, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-slate-200"
                  >
                    {del}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Techniques */}
            {item.tools && item.tools.length > 0 && (
              <div>
                <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  <Wrench className="w-3.5 h-3.5 text-slate-400" />
                  Tools & Production Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs rounded-md bg-[#078BFF]/10 border border-[#078BFF]/25 text-[#38BDF8]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Transparent Note */}
            <div className="p-3.5 rounded-xl bg-[#030817]/40 border border-white/5 text-xs text-slate-400 flex items-start gap-2.5">
              <span className="text-[#FF8A00] font-bold">Note:</span>
              <span>
                This is a concept design showcase demonstrating ABX Digital Studio&apos;s creative workflows, layout design, and campaign architecture capabilities. We tailor custom strategies for every client project.
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#051329] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-colors order-2 sm:order-1"
          >
            Close Preview
          </button>

          <a
            href={whatsappProjectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-white text-xs font-bold shadow-lg shadow-[#FF8A00]/20 transition-all hover:scale-[1.02] order-1 sm:order-2"
          >
            Discuss a Similar Project
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
