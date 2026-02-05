interface SkillCardProps {
  title: string;
  skills: string;
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-theme-color-light-gray">
        {title}
      </h3>
      <p className="text-lg ">
        {skills}
      </p>
    </div>
  );
}
