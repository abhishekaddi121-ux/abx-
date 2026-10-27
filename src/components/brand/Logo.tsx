import React from 'react';
import { Link } from 'react-router-dom';

export const ABX_LOGO_SRC = '/assets/aistudio/76e698a1-fa8d-4c0a-8f39-84cc81564703_e0ce9fdf.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  isLink?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  isLink = true,
  className = '',
}) => {
  const sizeMap = {
    sm: { img: 'w-8 h-8', textTitle: 'text-base', textSub: 'text-[9px]' },
    md: { img: 'w-11 h-11', textTitle: 'text-xl', textSub: 'text-[10px]' },
    lg: { img: 'w-14 h-14', textTitle: 'text-2xl', textSub: 'text-xs' },
    xl: { img: 'w-20 h-20', textTitle: 'text-3xl', textSub: 'text-sm' },
  };

  const current = sizeMap[size];

  const content = (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Uploaded ABX Logo Badge */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src={ABX_LOGO_SRC}
          alt="ABX Digital Studio Logo"
          className={`${current.img} object-contain rounded-xl border border-white/10 shadow-lg shadow-[#078BFF]/10 group-hover:scale-105 group-hover:border-[#078BFF]/40 transition-all duration-300 bg-[#071B3A]/60 p-0.5`}
        />
      </div>

      {showText && (
        <div className="flex flex-col tracking-tight leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-extrabold tracking-wider text-white font-['Outfit'] ${current.textTitle}`}
            >
              ABX
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] inline-block" />
          </div>
          <span
            className={`font-semibold uppercase tracking-[0.22em] text-[#078BFF] font-['Plus_Jakarta_Sans'] ${current.textSub}`}
          >
            Digital Studio
          </span>
        </div>
      )}
    </div>
  );

  if (isLink) {
    return (
      <Link
        to="/"
        className="group inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#078BFF] rounded-lg p-0.5"
        aria-label="ABX Digital Studio Home"
      >
        {content}
      </Link>
    );
  }

  return content;
};

