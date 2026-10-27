import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { SectionHeading } from '../components/common/SectionHeading.tsx';
import { BRAND_CONFIG } from '../data/constants.ts';

export const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

      <div className="mt-6">
        <SectionHeading
          kicker="Legal & Agreement"
          title="Terms &"
          highlightedTitle="Conditions"
          subtitle="Terms governing use of the ABX Digital Studio website and agency performance contracts."
        />
      </div>

      <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-[#071B3A] border border-white/10 space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
        <div>
          <h3 className="text-lg font-bold text-white mb-2">1. Acceptance of Terms</h3>
          <p>
            By accessing the {BRAND_CONFIG.name} website and utilizing our marketing consultation
            services, you agree to comply with and be bound by these terms.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-2">2. Agency Services</h3>
          <p>
            {BRAND_CONFIG.name} delivers specialized services including Google Ads management, Meta Ads
            management, AI creatives, graphic design, website development, search engine optimization, and
            social media strategy. Individual service scopes, deliverables, and fees are defined in formal
            proposals and contracts.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-2">3. Intellectual Property</h3>
          <p>
            All custom creative assets, website source code, and design collateral produced specifically for client
            accounts become client property upon full settlement of project milestones, subject to standard
            service agreements.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-2">4. WhatsApp Service Inquiries</h3>
          <p>
            Initial consultations via WhatsApp ({BRAND_CONFIG.whatsappNumber}) are informational and
            exploratory. Binding commercial arrangements take effect upon mutual agreement of proposal scopes.
          </p>
        </div>
      </div>
    </div>
  );
};
