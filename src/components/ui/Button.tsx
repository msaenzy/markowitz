import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  children,
  className = '',
  ...rest
}) => {
  // Pad horizontal = 2x vertical padding strictly
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }[size];

  const variantStyles = {
    primary:
      'bg-[#0F1A3C] text-white border border-[#0F1A3C] hover:bg-[#1B2340] hover:border-[#C9A227]/50 shadow-sm hover:shadow-md active:scale-[0.99]',
    secondary:
      'bg-transparent text-[#0F1A3C] border border-[#0F1A3C]/30 hover:border-[#0F1A3C] hover:bg-[#0F1A3C]/5 active:scale-[0.99]',
    gold: 'bg-[#C9A227] text-[#0F1A3C] border border-[#C9A227] font-semibold hover:bg-[#b8911f] active:scale-[0.99] shadow-sm',
    outline:
      'bg-[#FAF6EF] text-[#0F1A3C] border border-[#C9A227] hover:bg-[#C9A227]/15 active:scale-[0.99]',
  }[variant];

  const baseClasses = `inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-200 cursor-pointer rounded-sm select-none whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2 ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...rest}>
      {children}
    </button>
  );
};
