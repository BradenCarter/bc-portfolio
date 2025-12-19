'use client';

import { getTechStackItem } from '@/app/projects/data/techStackConfig';
import { useState } from 'react';

interface TechStackBadgeProps {
  id: string;
}

export default function TechStackBadge({ id }: TechStackBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const tech = getTechStackItem(id);
  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`text-sm inline-flex items-center gap-2 transition-all duration-200 cursor-default ${
        isHovered ? 'px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full' : 'px-1 py-1'
      }`}
    >
      {tech.icon && <span className="flex-shrink-0">{tech.icon}</span>}
      <span
        className={`transition-all duration-200 overflow-hidden ${
          isHovered || !tech.icon ? 'max-w-[200px] opacity-100' : 'max-w-0 opacity-0'
        }`}
      >
        {tech.name}
      </span>
    </span>
  );
}
