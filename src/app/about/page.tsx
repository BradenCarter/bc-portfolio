import type { Metadata } from 'next';
import { GradientHeadings } from '../components/GradientHeadings';
import { DomainCard } from './components/DomainCard';

export const metadata: Metadata = {
  title: 'About | Braden Carter',
  description: 'Learn about my background, experience, and approach to software development.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 sm:p-20">
      <GradientHeadings />
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
        
        {/* Professional Summary */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Professional Summary</h2>
          <div className="text-lg leading-relaxed space-y-4 text-body dark:text-body-dark">
            <p>
              I design and implement tech solutions with a background in full-stack web development 
              for both small companies and enterprise-level organizations. My career has been driven 
              by a passion for solving complex technical challenges and delivering software that makes a real impact.
            </p>
            <p>
              My experience spans building mobile applications for toy companies to increase branding 
              presence, developing modern enterprise web solutions for healthcare 
              organizations, and even implementing no-tech and low-tech solutions for local businesses. Always 
              with an eye toward clean architecture, maintainability, and user experience.
            </p>
          </div>
        </section>

        {/* Problem-Solving Philosophy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Problem-Solving Philosophy</h2>
          <div className="text-lg leading-relaxed space-y-4 text-body dark:text-body-dark">
            <p>
              I believe the best solutions come from deeply understanding the problem before jumping 
              to implementation. My approach combines:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Understanding the problem deeply before designing solutions</li>
              <li>Thorough analysis of requirements and constraints</li>
              <li>Pragmatic technology choices based on project needs</li>
              <li>Clear communication with stakeholders and team members</li>
              <li>Iterative development with continuous feedback</li>
              <li>Building for maintainability and future extensibility</li>
            </ul>
          </div>
        </section>

        {/* Domain Experience */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Domain Experience</h2>
          <div className="text-lg leading-relaxed space-y-4 text-body dark:text-body-dark">
            <p>
              My experience spans a variety of domains and platforms, including:
            </p>
            {/* Domain data as JSON array */}
            {[
              {
                title: "Healthcare & Insurance",
                description:
                  "Developing secure applications for the health‑insurance space, with a deep understanding of HIPAA requirements, PHI handling, and the technical safeguards needed to protect sensitive data. I apply this knowledge when building and modernizing full‑stack systems, ensuring every solution aligns with industry compliance standards while supporting scalable, reliable functionality.",
                color: "blue",
              },
              {
                title: "XR & Mobile Applications",
                description:
                  "Creating UI systems and core gameplay mechanics for XR (AR/VR) and mobile experiences, collaborating with major brands to translate their visual identity and design standards into immersive, interactive environments. This includes creating in‑app design tools, building rapid iteration pipelines for designers and QA, and ensuring every interface and system aligns with brand guidelines while supporting polished, high‑quality XR applications.",
                color: "mint",
              },
              {
                title: "Cross‑Disciplinary Collaboration & Tooling Development",
                description:
                  "- Excel at bridging communication between technical and non‑technical teams, translating creative and production needs into development tools, workflows, and integration standards that streamline collaboration. This includes designing pipelines that help artists, designers, and engineers work in sync, reducing friction in asset integration and design processes while supporting more efficient, predictable production timelines.",
                color: "purple",
              },
              {
                title: "Quality Assurance & Process Improvement",
                description:
                  "Create clear QA documentation, procedures, and templates that align teams around consistent testing practices, ensuring stability and predictability in daily builds. I focus on translating complex workflows into accessible guidelines that help technical and non‑technical stakeholders stay coordinated and maintain high standards throughout development.",
                color: "orange",
              },
            ].map((domain) => (
              <DomainCard
                key={domain.title}
                title={domain.title}
                description={domain.description}
                className={`border-l-4 border-theme-color-${domain.color} pl-4`}
                headerClassName={`text-theme-color-${domain.color}`}
              />
            ))}
          </div>
        </section>

        {/* Personal Note */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Beyond Code</h2>
          <p className="text-lg leading-relaxed">
            When I'm not coding, I enjoy exploring new technologies and problems. I'm an avid gamer and 3D printing hobbyist. I love tackling complex puzzles, whether they're in code or a challenging board game with friends. This curiosity and passion for problem-solving fuel my approach to software development, driving me to continuously learn and improve.
          </p>
        </section>
      </div>
    </main>
  );
}
