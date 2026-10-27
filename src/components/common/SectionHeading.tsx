import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  highlightedTitle?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  accentColor?: 'blue' | 'orange';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  highlightedTitle,
  subtitle,
  align = 'center',
  className = '',
  accentColor = 'orange',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {kicker && (
        <div
          className={`text-xs md:text-sm font-semibold tracking-wider uppercase mb-2 ${
            accentColor === 'orange' ? 'text-[#FF8A00]' : 'text-[#078BFF]'
          }`}
        >
          {kicker}
        </div>
      )}

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.15] [text-wrap:balance]">
        {title}{' '}
        {highlightedTitle && (
          <span
            className={
              accentColor === 'orange'
                ? 'bg-gradient-to-r from-[#FF8A00] to-[#FFB347] bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-[#078BFF] to-[#38BDF8] bg-clip-text text-transparent'
            }
          >
            {highlightedTitle}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl [text-wrap:balance] mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
