import React, { useState } from 'react';
import { X } from 'lucide-react';
import { BRAND_CONFIG } from '../../data/constants.ts';

export const WHATSAPP_ICON_SRC = '/assets/aistudio/download_5b82a999.png';

export const FloatingWhatsApp: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState(false);

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 group"
    >
      {/* Mini Tooltip / Prompt Bubble */}
      {!isDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-[#071B3A] text-white border border-[#25D366]/40 shadow-xl rounded-2xl py-2 px-3 text-xs font-medium animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span>Chat with our Strategy Team</span>
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss chat prompt"
            className="text-slate-400 hover:text-white p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating WhatsApp Button */}
      <a
        href={BRAND_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with ABX Digital Studio"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#078BFF] overflow-hidden p-0"
      >
        <img
          src={WHATSAPP_ICON_SRC}
          alt="WhatsApp Direct Chat"
          className="w-full h-full object-cover scale-[1.46] select-none pointer-events-none"
        />
      </a>
    </aside>
  );
};
