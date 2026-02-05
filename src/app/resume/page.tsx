import type { Metadata } from 'next';
import DownloadResumeButton from '../components/DownloadResumeButton';
import ResumeSection from './components/ResumeSection';
import SkillCard from './components/SkillCard';
import { GradientHeadings } from '../components/GradientHeadings';

export const metadata: Metadata = {
  title: 'Skills & Experience | Braden Carter',
  description: 'Technical skills, professional experience, and résumé for Braden Carter.',
};

const skills = [
  { title: 'Languages', skills: 'TypeScript, JavaScript, Java, SQL' },
  { title: 'Frontend', skills: 'React, Next.js, HTML/CSS, Tailwind CSS' },
  { title: 'Backend', skills: 'Node.js, Express, REST APIs' },
  { title: 'Data', skills: 'SQL Server, ORM tools (Hibernate, Sequelize), MongoDB, Azure Cosmos DB' },
  { title: 'Cloud & DevOps', skills: 'OpenShift, Docker, CI/CD pipelines' },
  { title: 'Testing & Quality', skills: 'Jest, Playwright, Unit/Integration testing' },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen p-8 sm:p-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <GradientHeadings />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-4xl md:text-5xl font-bold">Skills & Experience</h1>
          <DownloadResumeButton />
        </div>

        {/* Technical Skills */}
        <ResumeSection title="Technical Skills">
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.title} title={skill.title} skills={skill.skills} />
            ))}
          </div>
        </ResumeSection>

        {/* Professional Experience */}
        
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold border-b-2 border-zinc-200 dark:border-zinc-800 pb-2">
            Professional Experience
          </h2>

          {/* BlueCross BlueShield Tennessee */}
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
              <div>
                <h3 className="text-xl font-semibold">Application Developer &rarr; Application Developer/Analyst</h3>
                <p className="text-lg">BlueCross BlueShield Tennessee | Remote/Chattanooga, TN</p>
              </div>
              <p className="text-lg">April 2020 – Present</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-lg text-zinc-700 dark:text-zinc-300 ml-4">
              <li>Developed Full-Stack Java web applications and REST Services for authenticated portals.</li>
              <li>Oversaw utilization of Off-Shore contractors to ensure delegated work was delivered on-time and to proper specs.</li>
              <li>Modernized existing JavaEE applications into Spring and Spring Boot setups.</li>
              <li>Prevented millions of dollars in fines by refactoring and redesigning existing web application within tight deadline.</li>
              <li>Created suite of API tests (Postman) for RestAPIs to automate change validation of external services and teams.</li>
              <li>Converted Services to utilize Swagger 2.0/OpenAPI Annotations for inter-team clarity.</li>
            </ul>
          </div>

          {/* HappyGiant */}
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
              <div>
                <h3 className="text-xl font-semibold">Programmer, UI/UX Developer</h3>
                <p className="text-lg">HappyGiant | Remote</p>
              </div>
              <p className="text-lg">May 2013 – Feb 2020</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-lg text-zinc-700 dark:text-zinc-300 ml-4">
              <li>Developed UI systems and core mechanics within XR mobile apps.</li>
              <li>Consulted with UX designers to provide technical requirements for designs.</li>
              <li>Created solutions (In-App Design tools, Google Sheet setup/linking, etc) for developers and quality engineers to allow for faster testing and iterations.</li>
              <li>Extended application development tools to allow designers to edit and manipulate values, alleviating development bottlenecks and decreasing production time.</li>
              <li>Implemented and improved a UI creation/management system reducing UI implementation and maintenance time by 40%.</li>
              <li>Refactored company modules to allow for reusability across multiple projects increasing product scalability.</li>
              <li>Smoothly integrated and successfully developed solutions in multi-contract company with concurrent project deadlines.</li>
            </ul>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 ml-4">Launched Titles: Nanables, Holo Grid Monster Battle (AR/VR), Untamed ARena</p>
          </div>

          {/* Eyes Wide Games */}
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
              <div>
                <h3 className="text-xl font-semibold">Technical Artist / Project Manager</h3>
                <p className="text-lg">Eyes Wide Games | Atlanta, GA</p>
              </div>
              <p className="text-lg">Feb 2011 – Apr 2013</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-lg text-zinc-700 dark:text-zinc-300 ml-4">
              <li>Created development solutions/tools to bridge gaps between artists, designers, and developers.</li>
              <li>Interacted with external clients to establish development goals and utilized Agile philosophies to create and manage development plans.</li>
              <li>Developed tools to allow designers to create and iterate upon level designs utilizing XML and ActionScript, effectively reducing development time for content by 50%.</li>
              <li>Developed and established new standards for company processes involving the export/import and integration of art assets into Adobe Flash.</li>
            </ul>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 ml-4">Launched Titles: A&E’s Storage Wars: The Game, AMC’s The Walking Dead Social Game, Ubisoft’s CSI: Crime City</p>
          </div>

          {/* Hi-Rez Studios / Tripwire Interactive */}
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
              <div>
                <h3 className="text-xl font-semibold">Quality Assurance Tester</h3>
                <p className="text-lg">Hi-Rez Studios / Tripwire Interactive | Atlanta, GA</p>
              </div>
              <p className="text-lg">Mar 2010 – Jan 2011</p>
            </div>
            <ul className="list-disc list-inside space-y-2 text-lg text-zinc-700 dark:text-zinc-300 ml-4">
              <li>Created and developed testing documentation, procedures, and templates to ensure consistency in test reports and daily build testability for developers.</li>
            </ul>
          </div>

          {/* Side Projects */}
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
              <div>
                <h3 className="text-xl font-semibold">Side Projects</h3>
                <p className="text-lg">Calistoga Fit On Demand Mobile App (iOS/Android)</p>
              </div>
              <p className="text-lg">React, Unity, C#, JavaScript, Google Firebase</p>
            </div>
          </div>
        </section>

        {/* Education */}
        <ResumeSection title="Education" className="space-y-4">
          <div className="space-y-3">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
              <div>
                <h3 className="text-xl font-semibold">Bachelor's in Game Development
                </h3>
                <p className="text-lg">Art Institute of Atlanta</p>
              </div>
              <p className="text-lg">2009</p>
            </div>
          </div>
        </ResumeSection>

        {/* Download Button (bottom) */}
        <div className="pt-8 print:hidden">
          <div className="w-full md:w-auto">
            <DownloadResumeButton />
          </div>
          <p className="mt-3 text-sm ">
            Use your browser's print function to save as PDF
          </p>
        </div>
      </div>
    </main>
  );
}
