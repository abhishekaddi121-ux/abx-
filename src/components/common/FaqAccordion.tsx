import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../../types/index.ts';

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenId?: string;
  className?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  defaultOpenId,
  className = '',
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`space-y-3.5 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const buttonId = `faq-btn-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'bg-[#071B3A] border-[#078BFF]/50 shadow-xl shadow-[#078BFF]/10'
                : 'bg-[#071B3A]/60 border-white/10 hover:border-white/20 hover:bg-[#071B3A]/80'
            }`}
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#078BFF] group"
            >
              <span
                className={`text-sm sm:text-base font-semibold tracking-tight transition-colors ${
                  isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'
                }`}
              >
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen
                    ? 'rotate-180 text-white bg-[#FF8A00] shadow-md shadow-[#FF8A00]/30'
                    : 'text-slate-400 bg-white/5 group-hover:text-white group-hover:bg-white/10'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 bg-[#051329]/40"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
