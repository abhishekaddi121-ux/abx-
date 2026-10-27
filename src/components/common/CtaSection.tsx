import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Button } from './Button.tsx';
import { BRAND_CONFIG } from '../../data/constants.ts';

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  secondaryBtnText?: string;
  secondaryBtnTo?: string;
  className?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  title = 'Ready to Scale Your Customer Acquisition?',
  subtitle = 'Connect directly with our performance marketing leads to audit your ad accounts, creative pipelines, and growth bottlenecks.',
  primaryBtnText = "Let's Talk on WhatsApp",
  secondaryBtnText = 'Explore All Services',
  secondaryBtnTo = '/services',
  className = '',
}) => {
  return (
    <section className={`relative overflow-hidden my-12 sm:my-16 ${className}`}>
      <div className="relative rounded-3xl bg-gradient-to-br from-[#071B3A] via-[#0B254E] to-[#071B3A] border border-[#078BFF]/25 p-8 sm:p-12 lg:p-16 text-center shadow-2xl overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#078BFF]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-10 w-80 h-80 bg-[#FF8A00]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Unboxed editorial indicator */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF8A00] mb-3">
            <Zap className="w-4 h-4 fill-current text-[#FF8A00]" />
            <span>Direct Strategy Consultation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
            {title}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl [text-wrap:balance]">
            {subtitle}
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              variant="whatsapp"
              size="lg"
              href={BRAND_CONFIG.whatsappUrl}
              icon={<MessageSquare className="w-5 h-5 fill-current" />}
              className="w-full sm:w-auto text-base"
            >
              {primaryBtnText}
            </Button>

            {secondaryBtnText && (
              <Button
                variant="secondary"
                size="lg"
                to={secondaryBtnTo}
                showArrow
                className="w-full sm:w-auto"
              >
                {secondaryBtnText}
              </Button>
            )}
          </div>

          {/* Trust reassurance */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[#078BFF]" />
            <span>Quick response · Confidential ad account audit</span>
          </div>
        </div>
      </div>
    </section>
  );
};
