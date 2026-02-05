import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonFoundationProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'gradient' | 'outline';
  className?: string;
}

export default function ButtonFoundation({
  children,
  variant = 'gradient',
  className = '',
  ...props
}: ButtonFoundationProps) {
  if (variant === 'outline') {
    return (
      <button
        {...props}
        className={`group inline-flex w-full sm:w-auto p-0.5 rounded-lg border-2 border-[#A5A5A5] hover:border-transparent hover:bg-linear-to-r hover:from-theme-color-blue hover:to-theme-color-mint transition-all print:hidden ${className}`}
      >
        <span className="w-full px-8 py-4 rounded-md bg-theme-color-dark-gray text-[#A5A5A5] group-hover:text-white font-semibold transition-colors text-center">
          {children}
        </span>
      </button>
    );
  }

  return (
    <button
      {...props}
      className={`group inline-flex w-full sm:w-auto p-0.5 rounded-lg bg-linear-to-r from-theme-color-blue to-theme-color-mint transition-opacity print:hidden ${className}`}
    >
      <span className="w-full px-8 py-4 rounded-lg bg-theme-color-dark-gray group-hover:bg-transparent text-white font-semibold transition-colors text-center">
        {children}
      </span>
    </button>
  );
}
