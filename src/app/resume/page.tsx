import type { Metadata } from 'next';
import DownloadResumeButton from '../components/DownloadResumeButton';

export const metadata: Metadata = {
  title: 'Skills & Experience | Braden Carter',
  description: 'Technical skills, professional experience, and résumé for Braden Carter.',
};

export default function ResumePage() {
  return (
    <main className="min-h-screen p-8 sm:p-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-4xl md:text-5xl font-bold">Skills & Experience</h1>
          <DownloadResumeButton />
        </div>

        {/* Technical Skills */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold border-b-2 border-zinc-200 dark:border-zinc-800 pb-2">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                Languages
              </h3>
              <p className="text-lg text-zinc-700 dark:text-zinc-300">
                TypeScript, JavaScript, Java, SQL
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                Frontend
              </h3>
              <p className="text-lg text-zinc-700 dark:text-zinc-300">
                React, Next.js, HTML/CSS, Tailwind CSS
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                Backend
              </h3>
              <p className="text-lg text-zinc-700 dark:text-zinc-300">
                Node.js, Express, REST APIs
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                Data
              </h3>
              <p className="text-lg text-zinc-700 dark:text-zinc-300">
                SQL Server, ORM tools (Hibernate, Sequelize), MongoDB, Azure Cosmos DB
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                Cloud & DevOps
              </h3>
              <p className="text-lg text-zinc-700 dark:text-zinc-300">
                OpenShift, Docker, CI/CD pipelines
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
                Testing & Quality
              </h3>
              <p className="text-lg text-zinc-700 dark:text-zinc-300">
                Jest, Playwright, Unit/Integration testing
              </p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold border-b-2 border-zinc-200 dark:border-zinc-800 pb-2">
            Professional Experience
          </h2>

          {/* Job 1 */}
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
              <div>
                <h3 className="text-xl font-semibold">Senior Full-Stack Developer</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">BlueCross BlueShield Tennessee</p>
              </div>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">2020 - Present</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-lg text-zinc-700 dark:text-zinc-300 ml-4">
              <li>
                Led modernization of legacy healthcare portal, improving performance by 60% and 
                supporting 10,000+ active users
              </li>
              <li>
                Architected microservices migration reducing deployment time from 2 hours to 15 minutes 
                and cutting infrastructure costs by 25%
              </li>
              <li>
                Built enterprise analytics dashboard processing 10M+ records with sub-2-second query 
                times, eliminating 20+ manual reports
              </li>
              <li>
                Established CI/CD pipelines and testing standards, increasing team velocity and 
                reducing production incidents by 40%
              </li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
              <div>
                <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">Previous Company</p>
              </div>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">2019 - 2022</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-lg text-zinc-700 dark:text-zinc-300 ml-4">
              <li>
                Developed patient management system with real-time WebSocket notifications, 
                achieving 99.9% uptime
              </li>
              <li>
                Implemented HIPAA-compliant data handling with end-to-end encryption and 
                comprehensive audit logging
              </li>
              <li>
                Designed and optimized SQL Server database schemas supporting complex healthcare 
                workflows
              </li>
              <li>
                Collaborated with cross-functional teams to deliver features on time and maintain 
                high code quality
              </li>
            </ul>
          </div>

          {/* Job 3 */}
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
              <div>
                <h3 className="text-xl font-semibold">Software Developer</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">Earlier Company</p>
              </div>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">2017 - 2019</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-lg text-zinc-700 dark:text-zinc-300 ml-4">
              <li>
                Built responsive web applications using React and Node.js for various client projects
              </li>
              <li>
                Worked in agile environment with daily standups, sprint planning, and retrospectives
              </li>
              <li>
                Participated in code reviews and contributed to team best practices and standards
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold border-b-2 border-zinc-200 dark:border-zinc-800 pb-2">
            Education
          </h2>
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
              <div>
                <h3 className="text-xl font-semibold">Bachelor's in Game Development
                </h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">Art Institute of Atlanta</p>
              </div>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">2009</p>
            </div>
          </div>
        </section>

        {/* Download Button (bottom) */}
        <div className="pt-8 print:hidden">
          <div className="w-full md:w-auto">
            <DownloadResumeButton />
          </div>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
            Use your browser's print function to save as PDF
          </p>
        </div>
      </div>
    </main>
  );
}
