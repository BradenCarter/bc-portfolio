'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';

export default function ConditionalNav() {
  const pathname = usePathname();
  
  // Don't show navigation on the home page
  if (pathname === '/') {
    return null;
  }
  
  return <Navigation />;
}
