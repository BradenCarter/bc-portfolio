interface DomainCardProps {
  title: string;
  description: string;
  className?: string;
  headerClassName?: string;
}

export function DomainCard({ title, description, className, headerClassName = 'text-theme-color-highlight-gray' }: DomainCardProps) {
  // Extract color from className (expects border-theme-color-<color>)
  const colorMatch = className?.match(/border-theme-color-([a-z]+)/);
  const colorKey = colorMatch ? colorMatch[1] : undefined;
  const borderColor = colorKey ? `var(--theme-${colorKey})` : undefined;
  const headerColor = colorKey ? { color: `var(--theme-${colorKey})` } : {};
  return (
    <div className={className} style={borderColor ? { borderLeftColor: borderColor } : {}}>
      <h3 className={`font-semibold ${headerClassName}`} style={headerColor}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
