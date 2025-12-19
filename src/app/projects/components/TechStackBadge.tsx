'use client';

import { getTechStackItem } from '@/src/app/projects/data/techStackConfig';
import { useState } from 'react';

interface TechStackBadgeProps {
  id: string;
}

export default function TechStackBadge({ id }: TechStackBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const tech = getTechStackItem(id);
  const tooltipId = `tooltip-${id}`;
  
  const showTooltip = () => setIsHovered(true);
  const hideTooltip = () => setIsHovered(false);
  
  return (
    <span
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      tabIndex={0}
      role="img"
      aria-label={tech.name}
      aria-describedby={tech.icon && isHovered ? tooltipId : undefined}
      className="relative inline-flex items-center cursor-default focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 rounded"
    >
      <span className="text-sm px-1 py-1 flex-shrink-0" aria-hidden="true">
        {tech.icon || tech.name}
      </span>
      {tech.icon && isHovered && (
        <span 
          id={tooltipId}
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm rounded-md whitespace-nowrap z-50 pointer-events-none"
        >
          {tech.name}
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100" />
        </span>
      )}
    </span>
  );
}
