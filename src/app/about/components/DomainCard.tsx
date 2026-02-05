interface DomainCardProps {
  title: string;
  description: string;
  className?: string;
  headerClassName?: string;
}

export function DomainCard({ title, description, className, headerClassName='text-theme-color-highlight-gray' }: DomainCardProps) {
  return (
    <div className={className}>
      <h3 className={`font-semibold ${headerClassName}`}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
