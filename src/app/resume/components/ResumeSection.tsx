interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ResumeSection({ title, children, className = '' }: ResumeSectionProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      <h2 className="text-3xl font-semibold border-b-2 border-zinc-200 dark:border-zinc-800 pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}
