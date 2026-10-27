import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '../../data/constants.ts';

export type ButtonVariant = 'primary' | 'electric' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  showArrow?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  icon,
  iconPosition = 'left',
  showArrow = false,
  fullWidth = false,
  className = '',
  disabled,
  onClick,
  type = 'button',
  ...rest
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] select-none whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#078BFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#030817] disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 min-h-[36px] gap-1.5',
    md: 'text-sm px-5 py-2.5 min-h-[44px] gap-2',
    lg: 'text-base px-6 py-3 min-h-[48px] gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-[#FF8A00] hover:bg-[#FF9B26] text-white shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 border border-amber-400/30',
    electric:
      'bg-[#078BFF] hover:bg-[#2B9BFF] text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 border border-sky-400/30',
    secondary:
      'bg-[#071B3A] hover:bg-[#0B254E] text-slate-100 border border-slate-700/80 hover:border-[#078BFF]/50 shadow-sm',
    outline:
      'bg-transparent hover:bg-white/5 text-slate-200 border border-slate-700 hover:border-slate-500',
    ghost: 'bg-transparent hover:bg-white/5 text-slate-300 hover:text-white',
    whatsapp:
      'bg-[#FF8A00] hover:bg-[#FF9B26] text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 border border-amber-400/30 font-bold',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;

  const renderIcon = () => {
    if (variant === 'whatsapp' && !icon) {
      return (
        <span className="w-4 h-4 rounded-full overflow-hidden shrink-0 inline-flex items-center justify-center bg-[#25D366]">
          <img
            src="/assets/aistudio/download_5b82a999.png"
            alt="WhatsApp"
            className="w-full h-full object-cover scale-[1.5] select-none pointer-events-none"
          />
        </span>
      );
    }
    return icon;
  };

  const renderArrow = () => {
    if (showArrow) {
      return <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />;
    }
    return null;
  };

  // If WhatsApp variant and no specific href provided, default to WhatsApp link
  const finalHref = variant === 'whatsapp' && !href && !to ? BRAND_CONFIG.whatsappUrl : href;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {iconPosition === 'left' && renderIcon()}
        <span>{children}</span>
        {iconPosition === 'right' && renderIcon()}
        {renderArrow()}
      </Link>
    );
  }

  if (finalHref) {
    const isExternal = finalHref.startsWith('http') || finalHref.startsWith('https://wa.me');
    return (
      <a
        href={finalHref}
        className={combinedClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {iconPosition === 'left' && renderIcon()}
        <span>{children}</span>
        {iconPosition === 'right' && renderIcon()}
        {renderArrow()}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...rest}
    >
      {iconPosition === 'left' && renderIcon()}
      <span>{children}</span>
      {iconPosition === 'right' && renderIcon()}
      {renderArrow()}
    </button>
  );
};
