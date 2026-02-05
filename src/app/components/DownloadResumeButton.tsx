'use client';

import type { ReactNode } from 'react';
import ButtonFoundation from '@/components/ui/ButtonFoundation';

interface DownloadResumeButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  variant?: 'gradient' | 'outline';
  className?: string;
}

export default function DownloadResumeButton({
  onClick = () => window.print(),
  children = "Download Résumé (PDF)",
  variant = "gradient",
  className = '',
}: DownloadResumeButtonProps) {
  return (
    <ButtonFoundation onClick={onClick} variant={variant} className={className}>
      {children}
    </ButtonFoundation>
  );
}
