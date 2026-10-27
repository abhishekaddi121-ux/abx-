import React, { useState, useEffect, useRef } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImageCardProps {
  src: string;
  alt: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | 'auto';
  className?: string;
  caption?: string;
  overlay?: boolean;
  priority?: boolean;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  aspectRatio = '16:9',
  className = '',
  caption,
  overlay = false,
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // When src changes, reset state
  useEffect(() => {
    setHasError(false);
    setIsLoaded(false);

    // If already complete in cache
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  const aspectClasses = {
    '16:9': 'aspect-[16/9]',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    auto: '',
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#071B3A] shadow-xl group ${aspectClasses[aspectRatio]} ${className}`}
    >
      {!hasError ? (
        <>
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => {
              // Mark error only if load definitively fails
              setHasError(true);
            }}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-90'
            }`}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-[#071B3A] animate-pulse flex items-center justify-center pointer-events-none">
              <div className="w-8 h-8 rounded-full border-2 border-[#078BFF]/40 border-t-[#078BFF] animate-spin" />
            </div>
          )}
        </>
      ) : (
        /* Styled resilient fallback container */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#071B3A] via-[#0B254E] to-[#030817] text-slate-400">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 text-[#078BFF]">
            <ImageIcon className="w-6 h-6" />
          </div>
          <span className="text-sm font-medium text-slate-300 line-clamp-2">{alt}</span>
          <span className="text-xs text-slate-500 mt-1">ABX Digital Studio Visual Asset</span>
        </div>
      )}

      {/* Measured contrast scrim overlay if requested */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#030817]/90 via-[#030817]/40 to-transparent pointer-events-none" />
      )}

      {caption && (
        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#030817]/95 to-transparent text-white text-xs sm:text-sm font-medium">
          {caption}
        </div>
      )}
    </div>
  );
};
