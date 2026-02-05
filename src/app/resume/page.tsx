import type { Metadata } from 'next';
import DownloadResumeButton from '../components/DownloadResumeButton';
import ResumeSection from './components/ResumeSection';
import SkillCard from './components/SkillCard';
import { GradientHeadings } from '../components/GradientHeadings';
import ExperienceCard from './components/ExperienceCard';

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
        
        <ResumeSection title="Professional Experience" className="space-y-8">
          {[
            {
              title: "Application Developer → Application Developer/Analyst",
              company: "BlueCross BlueShield Tennessee",
              location: "Remote/Chattanooga, TN",
              date: "April 2020 – Present",
              bullets: [
                "Developed Full-Stack Java web applications and REST Services for authenticated portals.",
                "Oversaw utilization of Off-Shore contractors to ensure delegated work was delivered on-time and to proper specs.",
                "Modernized existing JavaEE applications into Spring and Spring Boot setups.",
                "Prevented millions of dollars in fines by refactoring and redesigning existing web application within tight deadline.",
                "Created suite of API tests (Postman) for RestAPIs to automate change validation of external services and teams.",
                "Converted Services to utilize Swagger 2.0/OpenAPI Annotations for inter-team clarity."
              ]
            },
            {
              title: "Programmer, UI/UX Developer",
              company: "HappyGiant",
              location: "Remote",
              date: "May 2013 – Feb 2020",
              bullets: [
                "Developed UI systems and core mechanics within XR mobile apps.",
                "Consulted with UX designers to provide technical requirements for designs.",
                "Created solutions (In-App Design tools, Google Sheet setup/linking, etc) for developers and quality engineers to allow for faster testing and iterations.",
                "Extended application development tools to allow designers to edit and manipulate values, alleviating development bottlenecks and decreasing production time.",
                "Implemented and improved a UI creation/management system reducing UI implementation and maintenance time by 40%.",
                "Refactored company modules to allow for reusability across multiple projects increasing product scalability.",
                "Smoothly integrated and successfully developed solutions in multi-contract company with concurrent project deadlines."
              ],
              extra: "Launched Titles: Nanables, Holo Grid Monster Battle (AR/VR), Untamed ARena"
            },
            {
              title: "Technical Artist / Project Manager",
              company: "Eyes Wide Games",
              location: "Atlanta, GA",
              date: "Feb 2011 – Apr 2013",
              bullets: [
                "Created development solutions/tools to bridge gaps between artists, designers, and developers.",
                "Interacted with external clients to establish development goals and utilized Agile philosophies to create and manage development plans.",
                "Developed tools to allow designers to create and iterate upon level designs utilizing XML and ActionScript, effectively reducing development time for content by 50%.",
                "Developed and established new standards for company processes involving the export/import and integration of art assets into Adobe Flash."
              ],
              extra: "Launched Titles: A&E’s Storage Wars: The Game, AMC’s The Walking Dead Social Game, Ubisoft’s CSI: Crime City"
            },
            {
              title: "Quality Assurance Tester",
              company: "Hi-Rez Studios / Tripwire Interactive",
              location: "Atlanta, GA",
              date: "Mar 2010 – Jan 2011",
              bullets: [
                "Created and developed testing documentation, procedures, and templates to ensure consistency in test reports and daily build testability for developers."
              ]
            },
            {
              title: "Side Projects",
              company: "Calistoga Fit On Demand Mobile App (iOS/Android)",
              location: "",
              date: "",
              bullets: [],
              extra: "React, Unity, C#, JavaScript, Google Firebase"
            }
          ].map((exp, idx) => (
            <ExperienceCard
              key={exp.title + exp.company}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              date={exp.date}
              bullets={exp.bullets}
              extra={exp.extra}
              isLast={idx === 4}
            />
          ))}
        </ResumeSection>

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
