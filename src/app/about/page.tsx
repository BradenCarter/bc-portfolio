import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Braden Carter',
  description: 'Learn about my background, experience, and approach to software development.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen p-8 sm:p-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
        
        {/* Professional Summary */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Professional Summary</h2>
          <div className="text-lg leading-relaxed space-y-4 text-zinc-700 dark:text-zinc-300">
            <p>
              I design and implement tech solutions with a background in full-stack web development 
              for both small companies and enterprise-level organizations. My career has been driven 
              by a passion for solving complex technical challenges and delivering software that makes a real impact.
            </p>
            <p>
              My experience spans building mobile applications for toy companies to increase branding 
              presence and modernization, developing modern enterprise web solutions for healthcare 
              organizations, and even implementing no-tech and low-tech solutions for local businesses—always 
              with an eye toward clean architecture, maintainability, and user experience.
            </p>
          </div>
        </section>

        {/* Problem-Solving Philosophy */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Problem-Solving Philosophy</h2>
          <div className="text-lg leading-relaxed space-y-4 text-zinc-700 dark:text-zinc-300">
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
          <div className="text-lg leading-relaxed space-y-4 text-zinc-700 dark:text-zinc-300">
            <p>
              My experience spans multiple domains:
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Healthcare Systems</h3>
                <p>Built patient management systems and clinical workflows requiring high reliability and data security.</p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">Enterprise Applications</h3>
                <p>Developed and maintained large-scale business applications supporting thousands of users.</p>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">SaaS Products</h3>
                <p>Created modern web applications with focus on performance, scalability, and user experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Note */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Beyond Code</h2>
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            When I'm not coding, I enjoy exploring new technologies, contributing to open source, 
            and staying current with industry trends. I'm always looking for opportunities to learn 
            and grow as a developer.
          </p>
        </section>
      </div>
    </main>
  );
}
