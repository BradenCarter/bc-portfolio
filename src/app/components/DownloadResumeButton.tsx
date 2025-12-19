'use client';

import { Button } from '@/components/ui/button';

interface DownloadResumeButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg';
}

export default function DownloadResumeButton({ 
  onClick = () => window.print(),
  className = "print:hidden",
  children = "Download Résumé (PDF)",
  variant = "default",
  size = "default"
}: DownloadResumeButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={className}
      variant={variant}
      size={size}
    >
      {children}
    </Button>
  );
}
