import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs.tsx';
import { SectionHeading } from '../components/common/SectionHeading.tsx';
import { BRAND_CONFIG } from '../data/constants.ts';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <div className="mt-6">
        <SectionHeading
          kicker="Legal & Transparency"
          title="Privacy"
          highlightedTitle="Policy"
          subtitle="How ABX Digital Studio collects, uses, and safeguards information shared with our agency."
        />
      </div>

      <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-[#071B3A] border border-white/10 space-y-8 text-sm sm:text-base text-slate-300 leading-relaxed">
        <div>
          <h3 className="text-lg font-bold text-white mb-2">1. Overview</h3>
          <p>
            {BRAND_CONFIG.name} ("we", "our", or "the agency") values your privacy. This Privacy
            Policy describes how we handle information submitted through our website and official
            WhatsApp communication channels.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-2">2. Information We Collect</h3>
          <p>
            We only collect information directly provided by you, including your name, contact phone/WhatsApp number,
            email address, and project specifications shared during inquiry submissions or consultation calls.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-2">3. Advertising & Analytics Data</h3>
          <p>
            When managing client advertising accounts (Google Ads, Meta Ads), we strictly treat client ad data,
            audience configurations, and billing credentials with maximum confidentiality. We never share or sell
            client performance metrics to third parties.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-2">4. WhatsApp Communications</h3>
          <p>
            Conversations conducted via our official WhatsApp Business line ({BRAND_CONFIG.whatsappNumber})
            are utilized solely for direct strategy communication, project updates, and customer support.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-2">5. Contact</h3>
          <p>
            If you have questions regarding this Privacy Policy, please contact our administrative team directly
            via WhatsApp at {BRAND_CONFIG.whatsappNumber}.
          </p>
        </div>
      </div>
    </div>
  );
};
