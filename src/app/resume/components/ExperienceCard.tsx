import type { ReactNode } from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  location?: string;
  date?: string;
  bullets?: string[];
  extra?: string;
  isLast?: boolean;
}

export default function ExperienceCard({
  title,
  company,
  location = '',
  date = '',
  bullets = [],
  extra,
  isLast = false,
}: ExperienceCardProps) {
  return (
    <div className={`space-y-3${isLast ? '' : ' mb-8'}`}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-lg">{company}{location ? ` | ${location}` : ''}</p>
        </div>
        {date && <p className="text-lg text-theme-color-mint">{date}</p>}
      </div>
      {bullets.length > 0 && (
        <ul className="list-disc list-inside space-y-2 text-lg text-zinc-700 dark:text-zinc-300 ml-4">
          {bullets.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
      {extra && (
        <p className="text-sm text-zinc-500 dark:text-zinc-400 ml-4">{extra}</p>
      )}
    </div>
  );
}
