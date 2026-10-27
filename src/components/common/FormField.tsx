import React from 'react';

interface BaseFieldProps {
  label: string;
  id: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  className?: string;
}

export interface InputProps
  extends BaseFieldProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id'> {
  type?: string;
}

export const InputField: React.FC<InputProps> = ({
  label,
  id,
  error,
  helperText,
  required = false,
  className = '',
  disabled,
  ...rest
}) => {
  return (
    <div className={`flex flex-col space-y-1.5 ${className}`}>
      <label htmlFor={id} className="text-xs font-semibold text-slate-300">
        {label}
        {required && <span className="text-[#FF8A00] ml-1">*</span>}
      </label>
      <input
        id={id}
        disabled={disabled}
        required={required}
        className={`w-full px-4 py-2.5 rounded-xl bg-[#030817] border text-sm text-white placeholder-slate-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#078BFF] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed ${
          error ? 'border-red-500/80 focus:ring-red-500' : 'border-white/10 hover:border-white/20'
        }`}
        {...rest}
      />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
      {!error && helperText && <p className="text-xs text-slate-500 mt-1">{helperText}</p>}
    </div>
  );
};

export interface TextareaProps
  extends BaseFieldProps,
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  rows?: number;
}

export const TextareaField: React.FC<TextareaProps> = ({
  label,
  id,
  error,
  helperText,
  required = false,
  rows = 4,
  className = '',
  disabled,
  ...rest
}) => {
  return (
    <div className={`flex flex-col space-y-1.5 ${className}`}>
      <label htmlFor={id} className="text-xs font-semibold text-slate-300">
        {label}
        {required && <span className="text-[#FF8A00] ml-1">*</span>}
      </label>
      <textarea
        id={id}
        rows={rows}
        disabled={disabled}
        required={required}
        className={`w-full px-4 py-2.5 rounded-xl bg-[#030817] border text-sm text-white placeholder-slate-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#078BFF] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed resize-y ${
          error ? 'border-red-500/80 focus:ring-red-500' : 'border-white/10 hover:border-white/20'
        }`}
        {...rest}
      />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
      {!error && helperText && <p className="text-xs text-slate-500 mt-1">{helperText}</p>}
    </div>
  );
};

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps
  extends BaseFieldProps,
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'id'> {
  options: SelectOption[];
}

export const SelectField: React.FC<SelectProps> = ({
  label,
  id,
  error,
  helperText,
  required = false,
  options,
  className = '',
  disabled,
  ...rest
}) => {
  return (
    <div className={`flex flex-col space-y-1.5 ${className}`}>
      <label htmlFor={id} className="text-xs font-semibold text-slate-300">
        {label}
        {required && <span className="text-[#FF8A00] ml-1">*</span>}
      </label>
      <select
        id={id}
        disabled={disabled}
        required={required}
        className={`w-full px-4 py-2.5 rounded-xl bg-[#030817] border text-sm text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#078BFF] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed ${
          error ? 'border-red-500/80 focus:ring-red-500' : 'border-white/10 hover:border-white/20'
        }`}
        {...rest}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-[#071B3A] text-white">
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
      {!error && helperText && <p className="text-xs text-slate-500 mt-1">{helperText}</p>}
    </div>
  );
};
