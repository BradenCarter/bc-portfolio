import Link from 'next/link';
import type { ReactNode } from 'react';

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'gradient' | 'outline';
};

export default function LinkButton({ href, children, variant = 'gradient' }: LinkButtonProps) {
  if (variant === 'outline') {
    return (
      <Link
        href={href}
        className="group inline-flex w-full sm:w-auto p-0.5 rounded-lg border-2 border-[#A5A5A5] hover:border-transparent hover:bg-linear-to-r hover:from-theme-color-blue hover:to-theme-color-mint transition-all"
      >
        <span className="w-full px-8 py-4 rounded-md bg-theme-color-dark-gray text-[#A5A5A5] group-hover:text-white font-semibold transition-colors text-center">
          {children}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group inline-flex w-full sm:w-auto p-0.5 rounded-lg bg-linear-to-r from-theme-color-blue to-theme-color-mint transition-opacity"
    >
      <span className="w-full px-8 py-4 rounded-lg bg-theme-color-dark-gray group-hover:bg-transparent text-white font-semibold transition-colors text-center">
        {children}
      </span>
    </Link>
  );
}